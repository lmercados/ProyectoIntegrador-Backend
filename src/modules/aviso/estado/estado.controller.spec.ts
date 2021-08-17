import { Test, TestingModule } from '@nestjs/testing';
import { EstadosController } from './estado.controller';
import { EstadosService } from './estado.service';

describe('EstadosController', () => {
  let controller: EstadosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadosController],
      providers: [EstadosService],
    }).compile();

    controller = module.get<EstadosController>(EstadosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
