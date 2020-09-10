module.exports = {
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
