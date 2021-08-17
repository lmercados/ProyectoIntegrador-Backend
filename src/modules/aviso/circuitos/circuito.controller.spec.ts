import { Test, TestingModule } from '@nestjs/testing';
import { CircuitoController } from './circuito.controller';
import { CircuitoService } from './circuito.service';

describe('EfectoController', () => {
  let controller: CircuitoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CircuitoController],
      providers: [CircuitoService],
    }).compile();

    controller = module.get<CircuitoController>(CircuitoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
