import { Test, TestingModule } from '@nestjs/testing';
import { TipoSoporteService } from './tipo.soportes.service';

describe('FasesService', () => {
  let service: TipoSoporteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoSoporteService],
    }).compile();

    service = module.get<TipoSoporteService>(TipoSoporteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
