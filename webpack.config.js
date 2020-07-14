const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")

const isDev = process.env.NODE_ENV === "development"
module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: {
        main: [ "./index.js"],
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        port: 4700,
        hot: isDev
    },
    plugins: [new HTMLWebpackPlugin({ template: "./index.html"})],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/, 
                loader: {
                    loader: "babel-loader",
                    options: {
                        presets: [ "@babel/preset-react"],
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    }
                } 
            }
        ]
    }
}