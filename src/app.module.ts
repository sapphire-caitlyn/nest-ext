import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContasModule } from './contas/contas.module';
import { ClienteModule } from './clientes/cliente.module';

@Module({
  imports: [ContasModule, ClienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
