import { Test, TestingModule } from '@nestjs/testing';
import {SubCausaService} from './subcausa.service';

describe('SubCausaService', () => {
  let service: SubCausaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubCausaService],
    }).compile();

    service = module.get<SubCausaService>(SubCausaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
