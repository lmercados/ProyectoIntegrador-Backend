import { Test, TestingModule } from '@nestjs/testing';
import { CapacidadController } from './suplidor.controller';
import { CapacidadService } from './suplidor.service';

describe('FasesController', () => {
  let controller: CapacidadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CapacidadController],
      providers: [CapacidadService],
    }).compile();

    controller = module.get<CapacidadController>(CapacidadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
