import { NestFactory } from '@nestjs/core'
import { ClientRedis, MicroserviceOptions, Transport } from '@nestjs/microservices'

import { AppModule } from './app.module'
import { ConfigModule } from './config/config.module'
import { MailModel } from './mail/models/mail.model'

async function main() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.REDIS,
    options: {
      url: ConfigModule.getRedisConfig().url,
      password: ConfigModule.getRedisConfig().password
    }
  })

  await app.listen(() => {
    setInterval(() => {
      const producer = app.get<ClientRedis>('MAIL_QUEUE')
      const mail = new MailModel()
      mail.body = 'askjklasjdjklsasome body'
      mail.to = 'askjklasjdjklsasome body'
      mail.from = 'askjklasjdjklsasome body'
      mail.subject = 'askjklasjdjklsasome body'
      mail.html = 'askjklasjdjklsasome body'
      producer.emit('mail-send', mail)
    }, 10000)
  })
}
main()
