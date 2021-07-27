import { Test, TestingModule } from '@nestjs/testing';
import { ConexionService } from './conexiones.service';

describe('ConexionService', () => {
  let service: ConexionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConexionService],
    }).compile();

    service = module.get<ConexionService>(ConexionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
