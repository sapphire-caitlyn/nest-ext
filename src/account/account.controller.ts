import { Body, Controller, Post, Patch, UseGuards } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('account')
@UseGuards(AuthGuard)
export class AccountController {
  @Post()
  criarConta(@Body() createContaDto: CreateAccountDto) {
    return { message: 'Conta criada com sucesso!', data: createContaDto };
  }

  @Patch()
  atualizarConta(@Body() updateContaDto: UpdateAccountDto) {
    return { message: 'Conta atualizada com sucesso!', data: updateContaDto };
  }
}