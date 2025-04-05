import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { Account, AccountSchema } from 'src/schemas/account.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/guards/auth/auth.module';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }])
  ],
  controllers: [AccountController],
  providers: [AccountService, AuthService, AuthGuard],
  exports: [AccountModule]
})
export class AccountModule {}
