import { Module } from '@nestjs/common';
import { TodosController } from './controllers/todos/todos.controller';
import { TodosService } from './services/todos/todos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';

@Module({
  controllers: [TodosController],
  providers: [TodosService],
  imports: [
    TypeOrmModule.forFeature([Todo])
  ]
})
export class TodosModule {}
