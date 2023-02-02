import { Bot } from "../deps.ts"
import "https://deno.land/x/dotenv/load.ts";

export const bot = new Bot(Deno.env.get("BOT_TOKEN"))