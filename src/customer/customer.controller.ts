import { Body, Controller, Post, Patch, UseGuards } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('contas')
@UseGuards(AuthGuard)
export class CustomerController {
  @Post()
  criarConta(@Body() createContaDto: CreateCustomerDto) {
    return { message: 'Conta criada com sucesso!', data: createContaDto };
  }

  @Patch()
  atualizarConta(@Body() updateContaDto: UpdateCustomerDto) {
    return { message: 'Conta atualizada com sucesso!', data: updateContaDto };
  }
}