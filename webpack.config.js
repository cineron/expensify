// entry point --> output file
// console.log(__dirname);//absolute path to project folder

//load node path module to join local and absolute path
const path = require("path");
// console.log(path.join(__dirname, "public"));

//use a function to return an object
module.exports = (env) => {
    const isProduction = env === "production";
    // console.log("env", env);
    return {
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, "public"),
            filename: "bundle.js"
        },
        // add loader, which is in a module
        // see webpack.js.org
        module: {
            rules: [{
                loader: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }]
        },
        // add source map module
        devtool: isProduction ? "source-map" : "cheap-module-eval-source-map",
    
        // set up dev server
        devServer: {
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true
        }
    };
};