import { bot } from "../config/index.ts";
import { Context } from "../deps.ts";

bot.command("start", async (ctx: Context) => {
  await ctx.reply(
    "Hi there, send me a code with /code command.\nFormat:\n<code>\n/code language code</code>",
    { parse_mode: "HTML" },
  );
});
