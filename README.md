# Klikk

Take a screen shot of any web page URL.

Based on [Puppeteer.](https://github.com/puppeteer/puppeteer)

### Install

```
npm i klikk
```

To make sure puppeteer runs on Debian 10, install these packages:

```
apt install libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libgbm1 libasound2 libpangocairo-1.0-0 libxss1 libgtk-3-0 libx11-xcb1
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
 * Puppeteer browser config
 * @type {object}
 */
// Use this config for running puppeteer as root
const config = { args: ['--no-sandbox'] }

/**
 * Returns a file object
 * @type {object}
 * @prop {string} name
 * @prop {string} path
 * @prop {string} size
 */
const file = await klikk(options, config)
```

MIT Licensed. Enjoy!
