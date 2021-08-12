import { Test, TestingModule } from '@nestjs/testing';
import { UnidadConstructivaService } from './unidad.constructiva.service';

describe('UnidadConstructivaService', () => {
  let service: UnidadConstructivaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnidadConstructivaService],
    }).compile();

    service = module.get<UnidadConstructivaService>(UnidadConstructivaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
