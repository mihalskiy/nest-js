import { Injectable } from '@nestjs/common';
import { Todo } from '../../entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>
  ) {}

  // get data from db
  findAll() {
    return this.todoRepository.find();
  }

  findOne(id: number) {
    return this.todoRepository.findOne(id);
  }

  create(todo: Todo) {
    this.todoRepository.save(todo);
  }

  update(id: number, todo: Todo) {
    this.todoRepository.update(id, todo);
  }

  remove(id: number) {
    this.todoRepository.delete(id);
  }
}
