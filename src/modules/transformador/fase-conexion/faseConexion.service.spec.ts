import { Test, TestingModule } from '@nestjs/testing';
import { faseConexionService } from './faseConexion.service';

describe('faseConexionService', () => {
  let service: faseConexionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [faseConexionService],
    }).compile();

    service = module.get<faseConexionService>(faseConexionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
