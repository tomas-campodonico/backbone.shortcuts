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
    root.Shortcuts = factory(jQuery, HotKeys);
  }
} (this, function ($, hotkeys) {
  'use strict';

  // PRIVATE METHODS

  /*
  ** Add default settings to non-overriden attributes of shortcuts object
  ** @method _defaults
  ** @private
  ** @param {Object} shortcuts: Contains the inital shortcuts specified by the programmer 
  */
  /*function _defaults(shortcuts) {

  };*/

  /*
  ** Add default settings to non-overriden attributes of shortcuts object
  ** @method _defaults
  ** @private
  ** @param {Object} shortcuts: Contains the inital shortcuts specified by the programmer 
  */
  function _parseEvents(shortcuts) {
    console.log('Parsing events...');
  };

  // Plugin for mixdown exposing the interfaces.
  var Shortcuts = Object.create(hotkeys);

  // PUBLIC METHODS

  /*
  ** Attach all the shortcuts to the dom.
  ** @method attach
  */
  Shortcuts.attach = function() {
    if (this.shortcuts) {
      _parseEvents(this.shortcuts);
      this.plug();
      return true;
    }
    return false;
  };

  /*
  ** Detach all the shortcuts from the dom.
  ** @method detach
  */
  Shortcuts.detach = function() {
    console.log('detach');
  };

  /*
  ** Attach a single shortcut to the dom.
  ** @method addShortcut
  ** @param {String} keys: Specifies the key combination.
  ** @param {String || function} handler: Specifies the handler to be executed when pressed the keys.
  ** @param {String} el: (Optional. Default: this.$el). Specifies the DOM where the event is being attached to.     
  */
  Shortcuts.addShortcut = function(keys, handler, el) {
    console.log('addShortcut');
  };

  /*
  ** Detach a single shortcut from the dom.
  ** @method rmShortcut
  ** @param {String} keys: The key combination to be detached.
  ** @param { String || Function} handler: (Optional) Handler to be detached.
  */
  Shortcuts.rmShortcut = function(keys, handler) {
    console.log('rmShortcut');
  };

  /*
  ** Initialize the plugin here.
  ** @method init
  */ 
  Shortcuts.init = function(options) {
    console.log('init');
  };

  return Shortcuts;

}));
