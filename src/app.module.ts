import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './todos/todos.module';
import * as process from "process";
import { ConfigService } from './config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TodosModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || "localhost",
      port: +process.env.DB_PORT || 3306,
      username: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "postgres",
      database: process.env.DB_DATABASE || "postgres",
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: ConfigService,
    useValue: new ConfigService('.env'),
  },],
  exports: [ConfigService],
})
export class AppModule {}
