import { Test, TestingModule } from '@nestjs/testing';
import {AvisoTriService} from './aviso.tri.service';

describe('AvisoTriService', () => {
  let service: AvisoTriService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvisoTriService],
    }).compile();

    service = module.get<AvisoTriService>(AvisoTriService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
