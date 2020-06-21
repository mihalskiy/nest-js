import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { TodosService } from '../../services/todos/todos.service';

@Controller('todos')
export class TodosController {

  constructor(private readonly todoService: TodosService) {}

  @Get()
  async findAll(): Promise<any[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    return this.todoService.findOne(id);
  }

  @Post()
  create(@Body() body) {
    return this.todoService.create(body);
  }

  @Put(':id')
  update(@Param('id') id, @Body() body) {
    this.todoService.update(id, body)
  }

  @Delete(':id')
  remove(@Param('id') id) {
    this.todoService.remove(id);
  }
}
