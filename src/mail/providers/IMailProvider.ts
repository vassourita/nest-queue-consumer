import { Mail } from '../models/Mail'

export interface IMailProvider {
  sendMail(mail: Mail): Promise<void>
}
