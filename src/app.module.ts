import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { MailModule } from './mail/mail.module'

@Module({
  imports: [ConfigModule, MailModule],
  controllers: [],
  providers: []
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply()
  }
}
