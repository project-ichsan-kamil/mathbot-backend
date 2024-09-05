import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswerModule } from './answer/answer.module'; // Import AnswerModule

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'mathbot',
      password: 'Isan02082000!',
      database: 'mathbot',
      synchronize: true,
      autoLoadEntities: true, // autoLoadEntities menghindari kebutuhan untuk mendeklarasikan entitas secara manual
    }),
    AnswerModule, // Masukkan AnswerModule ke dalam imports
  ],
})
export class AppModule {}

