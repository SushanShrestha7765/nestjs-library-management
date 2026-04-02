import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { books } from './library';
import { configDotenv } from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Userdetails } from './entity';
configDotenv();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [books, Userdetails],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([books, Userdetails]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
