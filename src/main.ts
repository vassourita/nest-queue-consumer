import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'

import { AppModule } from './app.module'
import { ConfigModule } from './config/config.module'
import { redisConfig } from './config/redis.config'

async function main() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.REDIS,
    options: {
      url: ConfigModule.getRedisConfig().url,
      password: ConfigModule.getRedisConfig().password
    }
  })

  await app.listen(() => {})
}
main()
