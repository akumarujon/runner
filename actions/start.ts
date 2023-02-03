import { bot } from "../config/index.ts"

bot.command('start', ctx => {
<<<<<<< HEAD
    bot.api.sendMessage(ctx.message.chat.id,"Hi there, send me a code with /code command.\nFor example:\n<code>let num = 69;\nconsole.log(num);</code>",{ parse_mode: "HTML" })
=======
    ctx.reply("Hi there, send me a code with /code command.\nFor example:\n/code\n<code>let num = 69;\nconsole.log(num);</code>")
>>>>>>> e17c83b (fmt)
})
