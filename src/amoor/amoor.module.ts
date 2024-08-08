import { Module } from '@nestjs/common';
import { AmoorController } from './amoor.controller';
import { AmoorService } from './amoor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Amoor } from 'src/typeorm/entities/Amoor';

@Module({
  controllers: [AmoorController],
  providers: [AmoorService],
  imports:[TypeOrmModule.forFeature([Amoor])]
})
export class AmoorModule {}
