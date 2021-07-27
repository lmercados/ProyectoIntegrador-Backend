import { Test, TestingModule } from '@nestjs/testing';
import { RazonesRechazoController } from './razones.rechazo.controller';
import { RazonesRechazoService } from './razones.rechazo.service';

describe('RazonesRechazoServiceController', () => {
  let controller: RazonesRechazoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RazonesRechazoController],
      providers: [RazonesRechazoService],
    }).compile();

    controller = module.get<RazonesRechazoController>(RazonesRechazoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
