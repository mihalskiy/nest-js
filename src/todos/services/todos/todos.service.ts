import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Todo } from '../../entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService extends TypeOrmCrudService<Todo>{
  constructor(@InjectRepository(Todo) todosRepository: Repository<Todo>){
    super(todosRepository);
  }
}
