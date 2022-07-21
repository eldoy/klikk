const os = require('os')
const fs = require('fs')
const fspath = require('path')
const cuid = require('cuid')
const puppeteer = require('puppeteer')

/**
 * Options for the klikk function
 * @type {object}
 * @prop {string} url - The URL you want to take a screen shot of
 * @prop {string} [dir] - The directory where the file is stored on disk. Defaults to os.tmpdir()
 * @prop {string} [name] - The name of the stored file. Default is a random name.
 */
async function klikk(options = {}) {
  const {
    url,
    name = `${cuid()}.png`,
    dir = os.tmpdir()
  } = options

  const path = fspath.join(dir, name)

  // Launch browser
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  // Take screen shot
  await page.goto(url)
  await page.screenshot({ path })

  // Close browser
  await browser.close()

  // Return file
  const { size } = fs.statSync(path)
  return { name, path, size }
}

module.exports = klikk
