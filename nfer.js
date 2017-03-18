#!/usr/bin/env node
let program = require('commander')
let axios = require('axios')
let fs = require('fs')

let parseHost = (host) => {
  return host.charAt(host.length - 1) === '/' ? host : host + '/'
}

program
  .version('0.0.1')
  .usage('[options] <keras_model.h5>')
  .option('-h, --host [host]', 'Specify a nfer-server host', 'https://nfer.kep.io')
  .arguments('model-path')
  .parse(process.argv)

if (!program.args[0]) {
  program.help()
}

let host = parseHost(program.host)
let modelPath = program.args[0]

let modelData = fs.readFileSync(modelPath).toString('base64')
axios.post(`${host}models`, {
  modelString: modelData
})
.then(res => {
  console.log(host + 'models/' + res.data._id)
})
.catch(err => {
  console.log('error deploying model:')
  console.log(err.code)
})
