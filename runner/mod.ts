const run = (code) => {
    let output = "";

    console.log = (args) => output += args.toString() + "\n";

    eval(code);

    return output;
}

export { run };