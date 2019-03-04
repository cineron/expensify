//Used to find errors
process.traceDeprecation = true;
// entry point --> output file
// console.log(__dirname);//absolute path to project folder

//load node path module to join local and absolute path
const path = require("path");
// console.log(path.join(__dirname, "public"));
// load plugins
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//use a function to return an object
module.exports = (env) => {
    const isProduction = env === "production";
    // console.log("env", env);
    const CSSExtract = new ExtractTextPlugin("styles.css");

    return {
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, "public", "dist"),
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
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],

        // add source map module
        devtool: isProduction ? "source-map" : "inline-source-map",
    
        // set up dev server
        devServer: {
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true,
            publicPath: "/dist/"
        }
    };
};