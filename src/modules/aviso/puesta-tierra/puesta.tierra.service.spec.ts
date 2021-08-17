import { Test, TestingModule } from '@nestjs/testing';
import { puestaTierraService} from './puesta.tierra.service';

describe('puestaTierraService', () => {
  let service: puestaTierraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [puestaTierraService],
    }).compile();

    service = module.get<puestaTierraService>(puestaTierraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
