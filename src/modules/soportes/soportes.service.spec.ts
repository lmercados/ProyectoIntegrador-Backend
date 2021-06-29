import { Test, TestingModule } from '@nestjs/testing';
import { FasesService } from './soportes.service';

describe('FasesService', () => {
  let service: FasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FasesService],
    }).compile();

    service = module.get<FasesService>(FasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
