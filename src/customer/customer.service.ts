import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomerDto } from './dto/create-customer.dto'
import { UpdateCustomerDto } from './dto/update-customer.dto'
import { Customer } from 'src/schemas/customer.schema';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private contaModel: Model<Customer>
  ) {}

  create(conta: CreateCustomerDto)  {
    const createdConta = new this.contaModel(conta);
    return createdConta.save();
  }
  
  findAll()  {
    return this.contaModel.find().exec();
  }

  findOne(numero: number)  {
    return this.contaModel.findOne({ numero: numero }).exec();
  }

  async update(cpf: string, customer: UpdateCustomerDto)  {
    const conta = await this.contaModel.findOneAndUpdate({ cpf: cpf }, customer).exec();
    return conta
  }

  async remove(cpf: string)  {
    const conta = await this.contaModel.findOneAndDelete({ cpf: cpf }).exec();
    return conta
  }
}
