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
      type: 'postgres',
      host: process.env.POSTGRES_HOST || "localhost",
      port: 5432,
      username: process.env.POSTGRES_USER || "postgres",
      password: process.env.POSTGRES_PASSWORD || "postgres",
      database: process.env.POSTGRES_DATABASE || "postgres",
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
