import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'

import { MailController } from './controllers/mail.controller'

@Module({
  imports: [],
  controllers: [MailController],
  providers: []
})
export class MailModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply()
  }
}
