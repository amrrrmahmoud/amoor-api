import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AmoorModule } from './amoor/amoor.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Amoor } from './typeorm/entities/Amoor';

@Module({
  imports: [AmoorModule, AuthModule, UsersModule,ConfigModule.forRoot({
    isGlobal:true}),
  TypeOrmModule.forRoot({
    type: 'mysql',
    host:'localhost',
    port: 3306,
    username: 'root',
    password: 'amreissa',
    database : 'amoorDB',
    entities: [Amoor],
    synchronize: true, 
    dropSchema:true,
})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}