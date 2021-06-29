import { Test, TestingModule } from '@nestjs/testing';
import { RazonesRechazoService } from './razones.rechazo.service';

describe('RazonesRechazoService', () => {
  let service: RazonesRechazoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RazonesRechazoService],
    }).compile();

    service = module.get<RazonesRechazoService>(RazonesRechazoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
