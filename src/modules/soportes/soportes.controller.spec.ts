import { Test, TestingModule } from '@nestjs/testing';
import { FasesController } from './soportes.controller';
import { FasesService } from './soportes.service';

describe('FasesController', () => {
  let controller: FasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FasesController],
      providers: [FasesService],
    }).compile();

    controller = module.get<FasesController>(FasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
