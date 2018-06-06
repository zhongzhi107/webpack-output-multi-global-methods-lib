const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./a'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'lib.js',
    // 所有方法能导出到window下到关键是不要配置 `library`
    // library: ['[name]'],
		libraryTarget: 'umd'
  }
};
