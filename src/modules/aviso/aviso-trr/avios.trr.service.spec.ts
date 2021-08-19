import { Test, TestingModule } from '@nestjs/testing';
import {AvisoTrrService} from './aviso.trr.service';

describe('AvisoTrrService', () => {
  let service: AvisoTrrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvisoTrrService],
    }).compile();

    service = module.get<AvisoTrrService>(AvisoTrrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
