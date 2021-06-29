import { Test, TestingModule } from '@nestjs/testing';
import { ResultadoController } from './resultado.evaluacion.controller';
import { ResultadoService } from './resultado.evaluacion.service';

describe('ResultadoController', () => {
  let controller: ResultadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResultadoController],
      providers: [ResultadoService],
    }).compile();

    controller = module.get<ResultadoController>(ResultadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
