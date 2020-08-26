const exportPathMap = async (
  defaultPathMap,
  { dev, dir, outDir, distDir, buildId }
) => {
  return {
    '/': { page: '/'},
    // '/sr/news': { page: '/index'},
    // '/cases': { page: '/[page]', query: { lang: 'ru', page: 'cases' } },
    // '/about': { page: '/about' },
    // '/catalog': { page: '/catalog' },
  }
}

module.exports = {
  exportPathMap,
  webpack: (cfg) => {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader'
      },
      // {
      //   test: /\.md$/,
      //   loader: 'frontmatter-markdown-loader',
      //   options: { mode: ['react-component'] }
      // }
    )
    return cfg;
  }
}
