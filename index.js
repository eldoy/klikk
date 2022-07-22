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
async function klikk(options = {}, config = {}) {
  let {
    url,
    name = `${cuid()}.png`,
    dir = os.tmpdir()
  } = options

  if (!url.startsWith('http')) {
    url = `https://${url}`
  }

  const path = fspath.join(dir, name)

  // Launch browser
  const browser = await puppeteer.launch(config)

  // Create a new page
  const page = await browser.newPage()

  // Go to page and wait until idle
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 })

  // Take screen shot
  await page.screenshot({ path })

  // Close browser
  await browser.close()

  // Return file
  const { size } = fs.statSync(path)
  return { name, path, size }
}

module.exports = klikk
