import { Module } from "@nestjs/common";
import { CognitoModule } from "../../lib/cognito.module";
import { AppController } from "../common/app.controller";
import { AppService } from "../common/app.service";

@Module({
  controllers: [AppController],
  imports: [
    CognitoModule.register({
      region: "us-east-1",
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
