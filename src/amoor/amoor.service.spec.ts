import { Test, TestingModule } from '@nestjs/testing';
import { AmoorService } from './amoor.service';

describe('AmoorService', () => {
  let service: AmoorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmoorService],
    }).compile();

    service = module.get<AmoorService>(AmoorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
