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
  let { url, name = `${cuid()}.png`, dir = os.tmpdir() } = options

  if (!url.startsWith('http')) {
    url = `https://${url}`
  }

  const path = fspath.join(dir, name)
  const browser = await puppeteer.launch(config)
  const page = await browser.newPage()

  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 10000 })
    await page.screenshot({ path })
    await page.close()
    await browser.close()
  } catch (e) {
    console.error(e)
  } finally {
    const pid = -browser.process().pid
    try {
      process.kill(pid, 'SIGKILL')
    } catch (e) {}
  }

  const { size } = fs.statSync(path)
  return { name, path, size }
}

module.exports = klikk
