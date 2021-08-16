import { Test, TestingModule } from '@nestjs/testing';
import { soporteTipoSoporteService } from './soporteTipoSoporte.service';

describe('soporteTipoSoporteService', () => {
  let service: soporteTipoSoporteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [soporteTipoSoporteService],
    }).compile();

    service = module.get<soporteTipoSoporteService>(soporteTipoSoporteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
