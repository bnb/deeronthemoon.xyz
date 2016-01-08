var metalsmith  = require('metalsmith');
var collections = require('metalsmith-collections');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var assets      = require('metalsmith-assets');
var ignore      = require('metalsmith-ignore');


metalsmith(__dirname)
  .use(markdown({ // Only here for front-matter conversion.
    gfm: true,
  }))
  .use(assets({ // Compiles assets from working directory to build directory.
    source: './assets', // relative to the working directory
    destination: './' // relative to the build directory
  }))
  .use(collections({ // Collections - use these to categorize different types of pages.
    'image': {
      'sort-by': 'date', // Organizes posts by the `date` front-matter.
      'reverse': true, // Reverse chronological order (newest first).
      'refer'  : false // Adds a reference to the next post in the series.
    }
  }))
  .use(ignore('images/**.md'))
  .use(layouts({ //Layouts plugin
    engine: "handlebars" // Use Handlebars.
  }))
  .build(function(err) {
    if(err) throw err;
  });
