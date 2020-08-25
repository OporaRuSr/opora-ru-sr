// const exportPathMap = async (
//   defaultPathMap,
//   { dev, dir, outDir, distDir, buildId }
// ) => {
//   return {
//     '/': { page: '/'},
//     '/sr/news': { page: '/index'},
//     '/cases': { page: '/' },
//     '/about': { page: '/' },
//     '/catalog': { page: '/' },
//   }
// }

module.exports = {
  // exportPathMap,
  webpack: (cfg) => {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: { mode: ['react-component'] }
      }
    )
    return cfg;
  }
}
