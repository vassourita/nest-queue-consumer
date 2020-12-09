import { registerAs } from '@nestjs/config'

export const redisConfig = registerAs('redis', () => ({
  url: process.env.REDIS_URL,
  password: process.env.REDIS_PASS
}))
