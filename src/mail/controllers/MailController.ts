import { Controller, Inject } from '@nestjs/common'
import { Ctx, MessagePattern, Payload, RedisContext } from '@nestjs/microservices'

import { Mail } from '../models/Mail'
import { IMailProvider } from '../providers/IMailProvider'

@Controller()
export class MailController {
  constructor(
    @Inject('IMailProvider')
    private readonly mailProvider: IMailProvider
  ) {}

  @MessagePattern('mail-send')
  public async sendMail(@Payload() mail: Mail, @Ctx() _context: RedisContext): Promise<void> {
    await this.mailProvider.sendMail(mail)
  }
}
