/*
** Backbone.Shortcuts API
** 
** @class Shortcuts
**
** @author "Tomas Campodonico <tomas.campodonico@gmail.com>"
*/

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    return define(['jquery', 'hotkeys'], factory)
  } else {
    root.Shortcuts = factory(jQuery, hotkeys);
  }
} (this, function ($, hotkeys) {
  'use strict';

  // Private methods

  /*
  ** Add default settings to non-overriden attributes of shortcuts object
  ** @method _defaults
  ** @private
  ** @param {Object} shortcuts: Contains the inital shortcuts specified by the programmer 
  */
  /*function _defaults(shortcuts) {

  };*/

  // Plugin for mixdown exposing the interfaces.
  var Shortcuts = {

    //Public methods

    /*
    ** Attach all the shortcuts to the dom.
    ** @method attach
    */
    attach: function() {
      console.log('attach');
    },

    /*
    ** Detach all the shortcuts from the dom.
    ** @method detach
    */
    detach: function() {
      console.log('detach');
    },

    /*
    ** Attach a single shortcut to the dom.
    ** @method addShortcut
    ** @param {String} keys: Specifies the key combination.
    ** @param {String || function} handler: Specifies the handler to be executed when pressed the keys.
    ** @param {String} el: (Optional. Default: this.$el). Specifies the DOM where the event is being attached to.     
    */
    addShortcut: function(keys, handler, el) {
      console.log('addShortcut');
    },

    /*
    ** Detach a single shortcut from the dom.
    ** @method rmShortcut
    ** @param {String} keys: The key combination to be detached.
    ** @param { String || Function} handler: (Optional) Handler to be detached.
    */
    rmShortcut: function(keys, handler) {
      console.log('rmShortcut');
    },

    /*
    ** Initialize the plugin here.
    ** @method init
    */ 
    init: function(options) {
      console.log('init');
    }
  };

  return Shortcuts;

}));
