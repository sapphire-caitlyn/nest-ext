import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { Customer, CustomerSchema } from 'src/schemas/customer.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [
     MongooseModule.forFeature([{ name: Customer.name, schema: CustomerSchema }])
  ],
  controllers: [CustomerController],
  providers: [CustomerService, AuthService, AuthGuard],
  exports: [CustomerModule]
})
export class CustomerModule {}
