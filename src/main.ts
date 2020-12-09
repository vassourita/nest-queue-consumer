import { NestFactory } from '@nestjs/core'
import { ClientRedis, MicroserviceOptions, Transport } from '@nestjs/microservices'

import { AppModule } from './AppModule'
import { ConfigModule } from './config/ConfigModule'
import { Mail } from './mail/models/Mail'

async function main() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.REDIS,
    options: {
      url: ConfigModule.getRedisConfig().url,
      password: ConfigModule.getRedisConfig().password
    }
  })

  const producer = app.get<ClientRedis>('MAIL_QUEUE')
  await app.listen(() => {
    setTimeout(() => {
      const mail = new Mail()
      mail.to = 'Vinicius Vassão <vlviniciusguaruja7@gmail.com>'
      for (let index = 0; index < 5; index++) {
        mail.body = 'hello vassao' + index
        mail.subject = index.toString()
        producer.emit('mail-send', mail)
        console.log('sent', index)
      }
    }, 1000)
  })
}
main()
