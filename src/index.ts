import { config } from 'dotenv';
config();

import { JoewyClient } from './lib';

void new JoewyClient().start(process.env.TOKEN!, process.env.DATABASEURI!);