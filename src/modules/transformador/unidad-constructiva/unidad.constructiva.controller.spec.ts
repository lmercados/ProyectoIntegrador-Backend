import { Test, TestingModule } from '@nestjs/testing';
import { UnidadConstructivaController } from './unidad.constructiva.controller';
import { UnidadConstructivaService } from './unidad.constructiva.service';

describe('UnidadConstructivaController', () => {
  let controller: UnidadConstructivaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnidadConstructivaController],
      providers: [UnidadConstructivaService],
    }).compile();

    controller = module.get<UnidadConstructivaController>(UnidadConstructivaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
