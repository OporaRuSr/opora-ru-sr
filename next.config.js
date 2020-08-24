// const exportPathMap = async (
//   defaultPathMap,
//   { dev, dir, outDir, distDir, buildId }
// ) => {
//   return {
//     '/index.html': { page: '/' },
//     '/sr.html': { page: '/sr' },
//     '/about.html': { page: '/about' },
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
