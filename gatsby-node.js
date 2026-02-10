const fs = require("fs");
const path = require("path");

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /animejs/,
                        use: loaders.null(),
                    },
                ],
            },
        })
    }
}

exports.onPostBuild = () => {
    // Recursively copy locales from static to public
    fs.cpSync(path.join(__dirname, "/static/locales"), path.join(__dirname, "/public/locales"), { recursive: true });
};
