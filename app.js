const path = require('path');

require('apostrophe')({
  shortName: 'reefcare',
  modules: {
    // Apostrophe module configuration
    // *******************************
    //
    // NOTE: most configuration occurs in the respective modules' directories.
    // See modules/@apostrophecms/page/index.js for an example.
    //
    // Any modules that are not present by default in Apostrophe must at least
    // have a minimal configuration here to turn them on: `moduleName: {}`
    // ***********************************************************************
    '@apostrophecms/express': {
      options: {
        session: {
          // ⚠️ If this still says `undefined`, set a real secret (a random
          // string)!
          secret: undefined
        }
      }
    },
    '@apostrophecms/template': {
      options: {
        // If a template is not found somewhere else, serve it from the
        // root-level `views/` directory of the project.
        viewsFolderFallback: path.join(__dirname, 'views')
      }
    },
    // `className` options set custom CSS classes for Apostrophe core widgets.
    '@apostrophecms/rich-text-widget': {
      options: {
        className: 'bp-rich-text'
      }
    },
    '@apostrophecms/image-widget': {
      options: {
        className: 'bp-image-widget'
      }
    },
    '@apostrophecms/video-widget': {
      options: {
        className: 'bp-video-widget'
      }
    },

    // `asset` supports the project's webpack build for client-side assets.
    asset: {},
    // The project's first custom page type.
    'default-page': {},
    product: {},
    parameter: {},
    'product-page': {},

  }
});
