const assert = require('assert')
const klikk = require('../index.js')

async function test() {
  const file = await klikk({
    url: 'https://eldoy.com'
  })
  assert.ok(!!file.name)
}

test()