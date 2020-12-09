import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigModule as NestConfigModule } from '@nestjs/config'

import { mailConfig } from './mailConfig'
import { redisConfig } from './redisConfig'

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      load: [redisConfig, mailConfig]
    })
  ],
  controllers: [],
  providers: []
})
export class ConfigModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply()
  }

  public static getRedisConfig() {
    return redisConfig()
  }
}
