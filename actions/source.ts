import { bot } from "../config/index.ts";

bot.command("source", (ctx) => {
  ctx.reply("https://github.com/ascii-gang/runner");
});
