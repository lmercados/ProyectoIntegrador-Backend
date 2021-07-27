import { Test, TestingModule } from '@nestjs/testing';
import { TensionSecundariaService } from './tension.secundaria.service';

describe('TensionSecundariaService', () => {
  let service: TensionSecundariaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TensionSecundariaService],
    }).compile();

    service = module.get<TensionSecundariaService>(TensionSecundariaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
