import { bot } from "./config/index.ts"
import { webhookCallback, serve } from "./deps.ts"
import "https://deno.land/x/dotenv/load.ts";


const handle = webhookCallback(bot, "std/http");

const webhook = async () => {
    await console.log(("[INFO]"), `bot is starting on ${Deno.env.get("HOST")}`);
    await serve(async (req) => {
      const url = new URL(req.url);
  
      if (req.method == "POST") {
        switch (url.pathname) {
          case "/bot":
            try {
              return await handle(req);
            } catch (err) {
              console.error(err);
              return new Response("Nope, not working...");
            }
          default:
            return new Response("What you're trying to post?");
        }
      }
  
      switch (url.pathname) {
        case "/webhook":
          try {
            await bot.api.setWebhook(`https://${url.hostname}/bot`);
            return new Response("Done. Set");
          } catch (_) {
            return new Response("Couldn't succeed with installing webhook");
          }
        default:
          return Response.redirect("https://t.me/yuxiobot", 302);
      }
    });
  };
  
  const polling = async () => {
    await bot.start();
  };
  
  export const launch = async () => {
    switch (Deno.env.get("HOST")) {
      case "WEBHOOK":
        await webhook();
        break;
      case "POLLING":
        await polling();
        break;
      default:
        throw new Error("Deploy method not validated!");
    }
  };

