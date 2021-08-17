import { Test, TestingModule } from '@nestjs/testing';
import { puestaTierraController } from './puesta.tierra.controller';
import { puestaTierraService } from './puesta.tierra.service';

describe('puestaTierraController', () => {
  let controller: puestaTierraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [puestaTierraController],
      providers: [puestaTierraService],
    }).compile();

    controller = module.get<puestaTierraController>(puestaTierraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
