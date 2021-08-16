import { Test, TestingModule } from '@nestjs/testing';
import { faseCapacidadController } from './faseCapacidad.controller';
import { faseCapacidadService } from './faseCapacidad.service';

describe('faseCapacidadController', () => {
  let controller: faseCapacidadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [faseCapacidadController],
      providers: [faseCapacidadService],
    }).compile();

    controller = module.get<faseCapacidadController>(faseCapacidadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
