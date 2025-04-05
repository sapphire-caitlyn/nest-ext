import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { CustomerModule } from './customer/customer.module';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthModule } from './guards/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        uri: config.get('MONGODB_URL'),
      }),
      inject: [ConfigService],
    }),
    AccountModule, 
    CustomerModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthModule, AuthService],
})
export class AppModule {}
