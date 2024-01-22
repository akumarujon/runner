import axiod from "https://deno.land/x/axiod@0.26.2/mod.ts";

const run = async (code: string, language: string) => {
  const res = await axiod.get("https://emkc.org/api/v2/piston/runtimes");

  const langs = res.data.find((lang) => lang.language == language);

  if (langs != undefined) {
    const data = {
      "language": language,
      "version": langs.version,
      "files": [
        {
          "name": `file.${langs.aliases.length == 0 ? "xz" : langs.aliases[0]}`, // я тут реально хз
          "content": code,
        },
      ],
    };

    const r = await axiod.post("https://emkc.org/api/v2/piston/execute", data);

    if (r.status == 200) {
      return `
Language: <b>${r.data.language}</b>
Version: <b>${r.data.version}</b>
Code: \n<code> ${r.config.data?.files[0].content.trim()} </code>
Output:\n <code>${r.data.run.output.trim()}</code>
    `;
    } else {
      return `Status: ${r.status}
Status Text: ${r.statusText}`;
    }
  } else {
    return `Error: language is not found.`;
  }
};

export { run };
