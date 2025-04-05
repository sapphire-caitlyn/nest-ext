import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from 'src/schemas/account.schema';
import { Model } from 'mongoose';
import { CreateAccountDto } from './dto/create-account.dto'
import { UpdateAccountDto } from './dto/update-account.dto'

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<Account>
  ) {}

  create(conta: CreateAccountDto)  {
    const createdConta = new this.accountModel(conta);
    return createdConta.save();
  }
  
  findAll()  {
    return this.accountModel.find().exec();
  }

  findOne(numero: number)  {
    return this.accountModel.findOne({ numero: numero }).exec();
  }

  async update(id: number, account: UpdateAccountDto)  {
    const conta = await this.accountModel.findOneAndUpdate({ number: id }, account).exec();
    return conta
  }

  async remove(id: number)  {
    const conta = await this.accountModel.findOneAndDelete({ number: id }).exec();
    return conta
  }
}
