import '@sapphire/plugin-subcommands/register';
import { config } from 'dotenv';
config();

import { JoewyClient } from './lib';
import { PrismaClient } from '@prisma/client';

void new JoewyClient().start(process.env.TOKEN!);

declare module '@sapphire/pieces' {
  interface Container {
    prisma: PrismaClient;
  }
}
