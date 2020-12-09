import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ClientsModule, Transport } from '@nestjs/microservices'

import { ConfigModule } from './config/ConfigModule'
import { MailModule } from './mail/MailModule'

@Module({
  imports: [ConfigModule, MailModule, ClientsModule.registerAsync([
    {
      name: 'MAIL_QUEUE',
      useFactory: (config: ConfigService) => ({
        transport: Transport.REDIS,
        options: {
          url: config.get('redis.url'),
          password: config.get('redis.password')
        }
      }),
      inject: [ConfigService]
    }
  ])],
  controllers: [],
  providers: []
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply()
  }
}
