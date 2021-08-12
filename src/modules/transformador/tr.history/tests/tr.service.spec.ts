import { Test, TestingModule } from '@nestjs/testing';
import { TransformadorHistoryService } from '../tr.history.service';

describe('TrService', () => {
  let service: TransformadorHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransformadorHistoryService],
    }).compile();

    service = module.get<TransformadorHistoryService>(TransformadorHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
