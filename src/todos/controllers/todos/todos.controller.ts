import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { TodosService } from '../../services/todos/todos.service';
import { Todo } from '../../entities/todo.entity';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('todos')
export class TodosController {

  constructor(private readonly todoService: TodosService) {}

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Todo>  {
    return this.todoService.findOne(id);
  }

  @Post()
  async create(@Body() body): Promise<Todo>  {
    return this.todoService.create(body);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() body): Promise<UpdateResult>  {
    return this.todoService.update(id, body)
  }

  @Delete(':id')
  async remove(@Param('id') id): Promise<DeleteResult> {
    return this.todoService.remove(id);
  }
}
