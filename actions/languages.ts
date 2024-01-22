import { bot } from "../config/index.ts";
import axiod from "https://deno.land/x/axiod@0.26.2/mod.ts";
import { Context } from "../deps.ts";

import { Language } from "../types/language.ts";

bot.command("langs", async (ctx: Context) => {
  const res = await axiod.get("https://emkc.org/api/v2/piston/runtimes");

  const langs = res.data.map((langs: Language) => langs.language).join(" ");

  await ctx.reply(`Supported languages: \n${langs}`);
});
