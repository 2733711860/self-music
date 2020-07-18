module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        // 指定样式路径
        style: name => `${name}/style/less`
      },
      "vant"
    ],
    ["@babel/plugin-syntax-dynamic-import"]
  ]
};
