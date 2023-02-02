import { bot } from "../config/index.ts"

bot.command('start', ctx => {
    ctx.reply("Hi there, send me a code with /code command.\nFor example:\n<code>let num = 69;\nconsole.log(num);</code>")
})
