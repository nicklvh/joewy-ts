import type { ModerationManager } from "#classes/index";
import type { PrismaClient } from "@prisma/client";
import type { NumberString } from "@skyra/env-utilities";

declare module "@sapphire/pieces" {
  interface Container {
    prisma: PrismaClient;
    moderationManager: ModerationManager;
  }
}

declare module "@skyra/env-utilities" {
  interface Env {
    DISCORD_TOKEN: string;
    CLIENT_ID: string;
    CLIENT_SECRET: string;
    OAUTH_REDIRECT: string;
    OAUTH_COOKIE: string;
    API_PORT: NumberString;
    API_ORIGIN: string;
    API_PREFIX: string;
  }
}
