import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { TodosService } from '../../services/todos/todos.service';
import { Todo } from '../../entities/todo.entity';

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
  async create(@Body() body: Todo): Promise<void>  {
    await this.todoService.create(body);
  }

  @Post('bulk')
  async bulkCreate(@Body() todos: Todo[]): Promise<void>  {
    await this.todoService.bulkCreate(todos);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() body): Promise<void>  {
    await this.todoService.update(id, body)
  }

  @Delete(':id')
  async remove(@Param('id') id): Promise<void> {
    await this.todoService.remove(id);
  }
}
