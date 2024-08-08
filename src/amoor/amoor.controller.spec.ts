import { Test, TestingModule } from '@nestjs/testing';
import { AmoorController } from './amoor.controller';

describe('AmoorController', () => {
  let controller: AmoorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AmoorController],
    }).compile();

    controller = module.get<AmoorController>(AmoorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
