import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'

import { MailController } from './controllers/MailController'
import { NodemailerMailProvider } from './providers/implementations/NodemailerMailProvider'

@Module({
  imports: [],
  controllers: [MailController],
  providers: [
    {
      provide: 'IMailProvider',
      useClass: NodemailerMailProvider
    }
  ]
})
export class MailModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply()
  }
}
