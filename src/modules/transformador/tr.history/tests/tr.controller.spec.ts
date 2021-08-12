import { Test, TestingModule } from '@nestjs/testing';
import { TransformadorHistoryController } from '../tr.history.controller';

describe('TrController', () => {
  let controller: TransformadorHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransformadorHistoryController],
    }).compile();

    controller = module.get<TransformadorHistoryController>(TransformadorHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
