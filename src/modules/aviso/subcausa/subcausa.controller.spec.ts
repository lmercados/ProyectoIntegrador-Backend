import { Test, TestingModule } from '@nestjs/testing';
import { SubCausasController } from './subcausa.controller';
import { SubCausaService } from './subcausa.service';

describe('SubCausasController', () => {
  let controller: SubCausasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubCausasController],
      providers: [SubCausaService],
    }).compile();

    controller = module.get<SubCausasController>(SubCausasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
