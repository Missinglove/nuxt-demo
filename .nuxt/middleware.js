const middleware = {}

middleware['authenticated'] = require('..\\middleware\\authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['notauthenicated'] = require('..\\middleware\\notauthenicated.js')
middleware['notauthenicated'] = middleware['notauthenicated'].default || middleware['notauthenicated']

export default middleware
