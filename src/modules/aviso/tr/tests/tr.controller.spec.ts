import { Test, TestingModule } from '@nestjs/testing';
import { TrController } from '../tr.controller';

describe('TrController', () => {
  let controller: TrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrController],
    }).compile();

    controller = module.get<TrController>(TrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
