const exportPathMap = async (
  defaultPathMap,
  { dev, dir, outDir, distDir, buildId }
) => {
  return {
    '/': { page: '/' },
  }
}

module.exports = {
  exportPathMap,
  webpack: (cfg, { isServer }) => {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader'
      },
    )
    if (!isServer) {
      cfg.node = {
        fs: 'empty'
      }
    }
    return cfg;
  }
}
