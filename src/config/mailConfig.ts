import { registerAs } from '@nestjs/config'

export const mailConfig = registerAs('mail', () => ({
  host: process.env.MAIL_HOST,
  port: parseInt(process.env.MAIL_PORT),
  user: process.env.MAIL_USER,
  password: process.env.MAIL_PASS
}))
