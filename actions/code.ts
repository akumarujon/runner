import { bot } from "../config/index.ts";
import { run } from "../runner/mod.ts";

bot.command("code", async (ctx) => {
  const text = ctx.update.message?.text;

  const code = await text?.split("/code")[1];

  const result = await run(code as string);

  await bot.api.sendMessage(ctx.update.message?.chat.id as number, result, {
    parse_mode: "HTML",
  });
});
