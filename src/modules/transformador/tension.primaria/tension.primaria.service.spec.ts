import { Test, TestingModule } from '@nestjs/testing';
import { TensionPrimariaService } from './tension.primaria.service';

describe('TensionPrimariaService', () => {
  let service: TensionPrimariaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TensionPrimariaService],
    }).compile();

    service = module.get<TensionPrimariaService>(TensionPrimariaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
