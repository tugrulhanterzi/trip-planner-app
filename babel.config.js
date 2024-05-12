const plugins = [
  [
    'module-resolver',
    {
      root: ['.'],
      extensions: ['.ts', '.jsx', '.js', '.json', '.svg'],
      alias: {
        _docs: './__docs__/',
        _assets: './src/assets',
        _atoms: './src/components/atoms',
        _molecules: './src/components/molecules',
        _organisms: './src/components/organisms',
        _hooks: './src/hooks',
        _navigations: './src/navigations',
        _network: './src/network',
        _scenes: './src/scenes',
        _store: './src/store',
        _styles: './src/styles',
        _types: './src/types',
        _utils: './src/utils',
      },
    },
  ],
  'react-native-reanimated/plugin',
];
if (process?.env?.NODE_ENV !== 'development') {
  plugins.push('transform-remove-console');
}

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: plugins,
  };
};
