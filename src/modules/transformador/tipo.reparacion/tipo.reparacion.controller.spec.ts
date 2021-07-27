import { Test, TestingModule } from '@nestjs/testing';
import { tipoReparacionController } from './tipo.reparacion.controller';
import { tipoReparacionService } from './tipo.reparacion.service';

describe('tipoReparacionController', () => {
  let controller: tipoReparacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [tipoReparacionController],
      providers: [tipoReparacionService],
    }).compile();

    controller = module.get<tipoReparacionController>(tipoReparacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
