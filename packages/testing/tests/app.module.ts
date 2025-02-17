import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { CognitoTestingModule } from "../lib";

@Module({
  imports: [
    ConfigModule.forRoot(),
    CognitoTestingModule.register({
      region: "eu-west-1",
    }),
  ],
})
export class TestingAppModule {}
