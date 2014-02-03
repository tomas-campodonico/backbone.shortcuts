/*
** Backbone.Shortcuts API
** 
** @class Shortcuts
**
** @author "Tomas Campodonico <tomas.campodonico@gmail.com>"
*/

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    return define(['jquery'], factory)
  } else {
    root.HotKeys = factory(jQuery);
  }
} (this, function ($) {
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
  var HotKeys = {

    plug: function() {
      console.log('plug');
    }
  };

  return HotKeys;

}));