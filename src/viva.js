/**
 * This is an entry point for global namespace. If you want to use separate
 * modules individually - you are more than welcome to do so.
 */

var random = require('ngraph.random');

// Dependency versions:
// "gintersect": "0.1.0",            // latest github: 
// "ngraph.centrality": "2.0.0",     // latest github: 0.3.0
// "ngraph.events": "1.0.0",         // latest github: 0.0.4
// "ngraph.forcelayout": "1.0.0",    // latest github: 0.5.0
// "ngraph.fromjson": "2.0.0",       // latest github: 0.1.9
// "ngraph.generators": "18.0.1",    // latest github: 18.0.1
// "ngraph.graph": "18.0.1",         // latest github: 18.0.1
// "ngraph.merge": "1.0.0",          // latest github: n/a
// "ngraph.random": "1.0.0",         // latest github: 1.0.0
// "ngraph.tojson": "0.1.4",         // latest github: 0.1.4
// "ngraph.todot": "3.0.1",          // latest github: 3.0.1
// "ngraph.fromdot": "git@github.com:jonn-smith/ngraph.fromdot.git#c8d7646d32a2cb72bdd21614b822c4e422571241",
// "simplesvg": "0.0.10"             // latest github: 


var Viva = {
  lazyExtend: function() {
    return require('ngraph.merge').apply(this, arguments);
  },
  randomIterator: function() {
    return random.randomIterator.apply(random, arguments);
  },
  random: function() {
    return random.random.apply(random, arguments);
  },
  events: require('ngraph.events')
};

Viva.Graph = {
  version: require('./version.js'),
  graph: require('ngraph.graph'),

  serializer: function() {
    return {
      loadFromJSON: require('ngraph.fromjson'),
      storeToJSON: require('ngraph.tojson'),
      loadFromDOT: require('ngraph.fromdot'),
      storeToDOT: require('ngraph.todot'),
    };
  },

  centrality: require('./Algorithms/centrality.js'),
  operations: require('./Algorithms/operations.js'),

  geom: function() {
    return {
      intersect: require('gintersect'),
      intersectRect: require('./Utils/intersectRect.js')
    };
  },

  webgl: require('./WebGL/webgl.js'),
  webglInputEvents: require('./WebGL/webglInputEvents.js'),

  generator: function() {
    return require('ngraph.generators');
  },

  Input: {
    domInputManager: require('./Input/domInputManager.js'),
    webglInputManager: require('./Input/webglInputManager.js')
  },

  Utils: {
    // TODO: move to Input
    dragndrop: require('./Input/dragndrop.js'),
    findElementPosition: require('./Utils/findElementPosition.js'),
    timer: require('./Utils/timer.js'),
    getDimension: require('./Utils/getDimensions.js'),
    events: require('./Utils/backwardCompatibleEvents.js'),
    colorLookup: require('./Utils/colorLookup.js')
  },

  Layout: {
    forceDirected: require('ngraph.forcelayout'),
    constant: require('./Layout/constant.js')
  },

  View: {
    // TODO: Move `webglXXX` out to webgl namespace
    Texture: require('./WebGL/texture.js'),
    // TODO: This should not be even exported
    webglAtlas: require('./WebGL/webglAtlas.js'),
    webglImageNodeProgram: require('./WebGL/webglImageNodeProgram.js'),
    webglLinkProgram: require('./WebGL/webglLinkProgram.js'),
    webglNodeProgram: require('./WebGL/webglNodeProgram.js'),
    webglLine: require('./WebGL/webglLine.js'),
    webglSquare: require('./WebGL/webglSquare.js'),
    webglImage: require('./WebGL/webglImage.js'),
    webglGraphics: require('./View/webglGraphics.js'),
    // TODO: Deprecate this:
    _webglUtil: {
      parseColor: require('./WebGL/parseColor.js')
    },

    // TODO: move to svg namespace
    svgGraphics: require('./View/svgGraphics.js'),

    renderer: require('./View/renderer.js'),

    // deprecated
    cssGraphics: function() {
      throw new Error('cssGraphics is deprecated. Please use older version of vivagraph (< 0.7) if you need it');
    },

    svgNodeFactory: function() {
      throw new Error('svgNodeFactory is deprecated. Please use older version of vivagraph (< 0.7) if you need it');
    },

    community: function() {
      throw new Error('community is deprecated. Please use vivagraph < 0.7 if you need it, or `https://github.com/anvaka/ngraph.slpa` module');
    }
  },

  Rect: require('./Utils/rect.js'),

  svg: require('simplesvg'),

  // TODO: should be camelCase
  BrowserInfo: require('./Utils/browserInfo.js')
};

module.exports = Viva;
