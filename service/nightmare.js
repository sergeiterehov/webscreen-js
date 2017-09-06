const Nightmare = require('nightmare');

/**
 * Make screenshot website
 * @param {*} url 
 * @param {*} size 
 * @param {*} distFile 
 * @param {*} done 
 * @param {*} error 
 * @param {*} delay 
 */
const makeScreenshot = function (url, size, distFile, done, error, delay)
{
    var page = Nightmare({ show: false })
    
    page
    .viewport(size[0], size[1])
    .goto(url)
    .wait(delay === undefined ? 0 : delay)
    .screenshot(distFile)
    .end()
    .then(done)
    .catch(error);
}

module.exports.makeScreenshot = makeScreenshot