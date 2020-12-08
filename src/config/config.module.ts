import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigModule as NestConfigModule } from '@nestjs/config'

import { redisConfig } from './redis.config'

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      load: [redisConfig]
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
