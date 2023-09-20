import { bot } from "../config/index.ts";
import { run } from "../runner/mod.ts";

bot.command("code", async (ctx) => {
  const text = ctx.update.message?.text;

  const code_text = await text?.split(" ");
  const language  = code_text[1];
  const code = code_text?.slice(2).join(' ')

  const result = await run(code as string, language);

  await bot.api.sendMessage(ctx.update.message?.chat.id as number, result, {
    parse_mode: "HTML",
  });
});
