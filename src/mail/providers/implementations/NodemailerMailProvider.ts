import { Inject } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import * as Nodemailer from 'nodemailer'
import { Mail } from 'src/mail/models/Mail'

import { IMailProvider } from '../IMailProvider'

export class NodemailerMailProvider implements IMailProvider {
  private transporter: Nodemailer.Transporter

  constructor(@Inject(ConfigService) config: ConfigService) {
    this.transporter = Nodemailer.createTransport({
      host: config.get('mail.host'),
      port: config.get('mail.port'),
      auth: {
        user: config.get('mail.user'),
        pass: config.get('mail.password')
      }
    })
  }

  async sendMail(mail: Mail): Promise<void> {
    const response = await this.transporter.sendMail({
      ...mail
    })
    console.log('sent', response)
  }
}
