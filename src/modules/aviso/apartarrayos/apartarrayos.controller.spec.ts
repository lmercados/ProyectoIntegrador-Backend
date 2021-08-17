import { Test, TestingModule } from '@nestjs/testing';
import { ApartarrayosController } from './apartarrayos.controller';
import { ApartarrayosService } from './apartarrayos.service';

describe('ApartarrayosController', () => {
  let controller: ApartarrayosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApartarrayosController],
      providers: [ApartarrayosService],
    }).compile();

    controller = module.get<ApartarrayosController>(ApartarrayosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
