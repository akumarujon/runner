import { bot } from "../config/index.ts";
import { Context } from "../deps.ts";

bot.command("source", async (ctx: Context) => {
  await ctx.reply("https://github.com/akumarujon/runner");
});
