import { Test, TestingModule } from '@nestjs/testing';
import { EfectoController } from './efecto.controller';
import { EfectoService } from './efecto.service';

describe('EfectoController', () => {
  let controller: EfectoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EfectoController],
      providers: [EfectoService],
    }).compile();

    controller = module.get<EfectoController>(EfectoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
