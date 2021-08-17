import { Test, TestingModule } from '@nestjs/testing';
import { resultadoEstadoController } from './resultado.estado.controller';
import { resultadoEstadoService} from './resultado.estado.service';

describe('soporteTipoSoporteController', () => {
  let controller: resultadoEstadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [resultadoEstadoController],
      providers: [resultadoEstadoService],
    }).compile();

    controller = module.get<resultadoEstadoController>(resultadoEstadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
