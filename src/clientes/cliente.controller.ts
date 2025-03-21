import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly contasService: ClienteService) {}

  @Post()
  create(@Body() conta: any) {
    return this.contasService.create(conta);
  }

  @Get()
  findAll() {
    return this.contasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.contasService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() conta: any) {
    return this.contasService.update(id, conta);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.contasService.remove(id);
  }
}