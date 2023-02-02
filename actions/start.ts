import { bot } from "../config/index.ts"

bot.command('start', ctx => {
    ctx.reply("Welcome, dude!")
})