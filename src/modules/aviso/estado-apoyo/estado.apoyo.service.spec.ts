import { Test, TestingModule } from '@nestjs/testing';
import {estadoApoyoService} from './estado.apoyo.service';

describe('estadoApoyoService', () => {
  let service: estadoApoyoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [estadoApoyoService],
    }).compile();

    service = module.get<estadoApoyoService>(estadoApoyoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
