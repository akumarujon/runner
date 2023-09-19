import axiod from "https://deno.land/x/axiod@0.26.2/mod.ts";

const run = async (code: string) => {
  const res = await axiod.get("https://emkc.org/api/v2/piston/runtimes");

  const language = res.data.find((lang) => lang.runtime == "node");

  const data = {
    "language": "javascript",
    "version": language.version,
    "runtime": "node-js",
    "files": [
      {
        "name": "index.js",
        "content": code,
      },
    ],
  };

  const r = await axiod.post("https://emkc.org/api/v2/piston/execute", data);

  if (r.status == 200) {
    return `
Language: <b>${r.data.language}</b>
Version: <b>${r.data.version}</b>
Input: \n<code> ${r.config.data?.files[0].content.trim()} </code>
Output:\n <code>${r.data.run.output.trim()}</code>
    `;
  } else {
    return `Status: ${r.status}
Status Text: ${r.statusText}`;
  }
};

export { run };
