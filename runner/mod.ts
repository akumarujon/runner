const run = (code) => {
    let output = "";

    console.log = (...args) => output += ...args.toString() + "\n";
    console.warn = (...args) => output += ...args.toString() + "\n";
    console.error = (...args) => output += ....args.toString() + "\n";

    eval(code);

    return output;
}

export { run };
