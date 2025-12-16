import makePlain from './plain.js'
import makeStylish from './stylish.js'

const formatter = {
  stylish: makeStylish,
  plain: makePlain,
  json: JSON.stringify,
}

export default (tree, format) => formatter[format](tree)
