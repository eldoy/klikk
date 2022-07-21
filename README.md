# Klikk

Take a screen shot of any web page URL.

Based on [Puppeteer.](https://github.com/puppeteer/puppeteer)

### Install

```
npm i klikk
```

### Usage

```js
const klikk = require('klikk')

/**
 * Options for the klikk function
 * @type {object}
 * @prop {string} url - The URL you want to take a screen shot of
 * @prop {string} [dir] - The directory where the file is stored on disk. Defaults to os.tmpdir()
 * @prop {string} [name] - The name of the stored file. Default is a random name.
 */
const options = {
  url: 'https://eldoy.com',
  dir: '/tmp',
  name: 'klikk-eldoy-com.png'
}

/**
 * Returns a file object
 * @type {object}
 * @prop {string} name
 * @prop {string} path
 * @prop {string} size
 */
const file = await klikk(options)
```

MIT Licensed. Enjoy!
