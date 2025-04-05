import { Module } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";
import { AuthGuard } from "./auth.guard";

@Module({
  imports: [AuthService],
  providers: [AuthService],
  exports: [AuthService, AuthGuard],
})
export class AuthModule {}