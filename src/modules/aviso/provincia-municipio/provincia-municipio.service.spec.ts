import { Test, TestingModule } from '@nestjs/testing';
import { provinciaMunicipioService} from './provincia-municipio.service';

describe('provinciaMunicipioService', () => {
  let service: provinciaMunicipioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [provinciaMunicipioService],
    }).compile();

    service = module.get<provinciaMunicipioService>(provinciaMunicipioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
