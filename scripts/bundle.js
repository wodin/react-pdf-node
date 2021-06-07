const Bundler = require("parcel-bundler");
const Path = require("path");

const entryFiles = "./index.js";

const options = {
  target: "node",
};

(async function () {
  const bundler = new Bundler(entryFiles, options);

  bundler.on("bundled", (bundle) => {
    const { execFile } = require("child_process");

    console.log("$ node dist/index.js");
    execFile("node", ["dist/index.js"], (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      if (stdout) {
        console.log(`stdout: ${stdout}`);
      }
    });
  });

  // Run the bundler, this returns the main bundle
  // Use the events if you're using watch mode as this promise will only trigger once and not for every rebuild
  const bundle = await bundler.bundle();
})();
