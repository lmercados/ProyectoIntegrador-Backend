import { Test, TestingModule } from '@nestjs/testing';
import { TrService } from '../tr.service';

describe('TrService', () => {
  let service: TrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrService],
    }).compile();

    service = module.get<TrService>(TrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
