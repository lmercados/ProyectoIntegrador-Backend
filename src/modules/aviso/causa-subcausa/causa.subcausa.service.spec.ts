import { Test, TestingModule } from '@nestjs/testing';
import {causaSubCausaService} from './causa.subcausa.service';

describe('causaSubCausaService', () => {
  let service: causaSubCausaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [causaSubCausaService],
    }).compile();

    service = module.get<causaSubCausaService>(causaSubCausaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
