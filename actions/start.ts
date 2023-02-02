import { bot } from "../config/index.ts"

bot.command('start', ctx => {
    ctx.reply("Hi there, send me a code with /code command.\nFor example:\nlet num = 69;\n console.log(num);")
})
