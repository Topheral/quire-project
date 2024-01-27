const path = require('path')
const { html } = require('~lib/common-tags')

/**
 * Base layout as a JavaScript method
 *
 * @param      {Object}  data    Final data from the Eleventy data cascade
 * @return     {Function}  Template render function
 */
module.exports = async function(data) {
  const { classes, collections, content, pageData, publication } = data
  const { inputPath, outputPath, url } = pageData || {}
  const id = this.slugify(url) || path.parse(inputPath).name
  const pageId = `page-${id}`
  const figures = pageData.page.figures

  return html`
    <!doctype html>
    <html lang="${publication.language}">
      ${this.head(data)}
      <body>
        ${this.icons(data)}
        ${this.iconscc(data)}
        <div class="quire no-js" id="container">
          <div
            aria-expanded="false"
            class="quire__secondary"
            id="site-menu"
            role="contentinfo"
            data-outputs-exclude="epub,pdf"
          >
            ${this.menu({ collections, pageData })}
          </div>
          <div class="quire__primary">
            ${this.navigation(data)}
            <main class="quire-page ${classes}" data-output-path="${outputPath}" data-page-id="${pageId}" >
              ${content}
            </main>
          </div>
          ${this.search(data)}
        </div>
        ${await this.modal(figures)}
        ${this.scripts()}
        <div class="special-footer-copyright">
          <div>
            Copyright &copy; 2024 National Gallery Singapore. All rights reserved
          </div>
          <div class="special-small-screen-gone">
            |
          </div>
          <div>
          <a href="https://www.nationalgallery.sg/privacy-policy" target="_blank">Privacy Policy</a>
          </div>
          <div class="special-small-screen-gone">
            |
          </div>
          <div>
            <a href="https://www.nationalgallery.sg/" target="_blank">Website</a>
          </div>
        </div>
      </body>
    </html>
  `
}
