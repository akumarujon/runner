import { bot } from "../config/index.ts"
import { run } from "../runner/mod.ts"

bot.command('code', ctx => {
    const text = ctx.message.text

    const code = text.split("/code")[1];

    const result = run(code);

    const output = "<b>Code:</b>\n" + `<code>` + code.trim() + `</code>` + "\n\n\n<b>Result</b>: \n" + result;

    bot.api.sendMessage(ctx.message.chat.id, output, { parse_mode: "HTML" });
})