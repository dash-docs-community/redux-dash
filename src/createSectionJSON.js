var cheerio = require('cheerio');
var fs = require('fs');
var config = require('./config');

// get base file to itterate over
var basePath = __dirname + '/../Contents/Resources/Documents/' + config.name + '/' + config.index;
var baseSrc = fs.readFileSync(basePath, 'utf8');
var $ = cheerio.load(baseSrc);
var pageNamesArray = [];
var $section = $('nav ul.summary li.' + config.sectionClass);
var path = __dirname + '/../src/indexedFiles.js';

$section.each(function(i, elem){

    // TODO: create a better config pointer
    //var $sectionHeader = $(this).children(config.headerTag).text();
    var $sectionHeader = $(this).children('a').text();
    var $sectionLink = $(this).children('ul.articles').children('li').children('a');

    $sectionLink.each(function(i, elem){
        var page = {};
        var excludeArray = $(this).text();

        if(config.ignoreSection.sectionsArray.indexOf($sectionHeader) !== -1) {
            return;
        }

        // $(this).attr('href') returns ie.(guides-containers.html#content)
        // substring removes last 13 characters '.html' from href.
        var sectionType = $(this).attr('href').split('/')[1];
        page.name = $(this).attr('href').substring(0, $(this).attr('href').length - 5);

        if(config.ignorePage.pagesArray.indexOf(excludeArray) !== -1) {
            return;
        }

        // set the Dash types based on the doc headers.
        switch (sectionType) {
            case 'recipes':
                page.type = 'Sample';
                page.toc = 'Property';
                break;
            case 'api':
                page.type = 'Function';
                page.toc = 'Method';
                break;
            default:
                page.type = config.defaultPageType;
                page.toc = config.defaultPageTOC;
        };
        pageNamesArray.push(page);
    });
});

fs.writeFile(path, 'var indexedFiles = ' + JSON.stringify(pageNamesArray, null, 4) + ';\n\nmodule.exports = indexedFiles;', 'utf8');
