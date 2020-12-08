import { Controller } from '@nestjs/common'
import { Ctx, MessagePattern, Payload, RedisContext } from '@nestjs/microservices'

import { Mail } from '../models/mail.model'

@Controller()
export class MailController {
  @MessagePattern('mail-send')
  async sendMail(@Payload() mail: Mail, @Ctx() _context: RedisContext): Promise<void> {
    console.log(mail)
  }
}
