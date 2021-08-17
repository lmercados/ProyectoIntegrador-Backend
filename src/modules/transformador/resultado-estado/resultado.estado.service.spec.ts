import { Test, TestingModule } from '@nestjs/testing';
import { resultadoEstadoService } from './resultado.estado.service';

describe('resultadoEstadoService', () => {
  let service: resultadoEstadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [resultadoEstadoService],
    }).compile();

    service = module.get<resultadoEstadoService>(resultadoEstadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
