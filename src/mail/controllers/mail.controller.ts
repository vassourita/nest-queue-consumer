import { Controller } from '@nestjs/common'
import { Ctx, MessagePattern, Payload, RedisContext } from '@nestjs/microservices'

import { MailModel } from '../models/mail.model'

@Controller()
export class MailController {
  @MessagePattern('mail-send')
  public async sendMail(@Payload() mail: MailModel, @Ctx() _context: RedisContext): Promise<void> {
    console.log(mail)
  }
}
