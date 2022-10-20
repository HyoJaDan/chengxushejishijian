const styledComponentsPlugin =
  require('@lukalabs/esbuild-styled-components').default;

const styledComponentOptions = {
  exclude: '/node_modules/',
  ssr: true,
  displayName: true,
  fileName: true,
  meaninglessFileNames: ['index', 'styles'],
};

exports.plugins = function applyPlugins(plugins) {
  return [styledComponentsPlugin(styledComponentOptions), ...plugins];
};
