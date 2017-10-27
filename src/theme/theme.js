const fs = require('fs')
const path = require('path')
const lessToJS = require('less-vars-to-js')

module.exports = () => {
  const themePath = path.join(__dirname,'./default.less')
  return lessToJS(fs.readFileSync(themePath,'utf8'))
};
