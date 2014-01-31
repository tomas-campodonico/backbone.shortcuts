(function() {

  // Private methods

  /*
  ** Add default settings to non-overriden attributes of shortcuts object
  ** @method _getDefaults
  ** @private
  ** @param {Object} shortcuts: Contains the inital shortcuts specified by the programmer 
  */
  var _getDefaults = function(shortcuts) {

  };

  // Plugin for mixdown exposing the interfaces.
  var Shortcuts = {

    //Public methods

    /*
    ** Attach all the shortcuts to the dom.
    ** @method attach
    */
    attach: function() {
    },

    /*
    ** Detach all the shortcuts from the dom.
    ** @method detach
    */
    detach: function() {
    },

    /*
    ** Attach a single shortcut to the dom.
    ** @method addShortcut
    ** @param {String} keys: Specifies the key combination.
    ** @param {String || function} handler: Specifies the handler to be executed when pressed the keys.
    ** @param {String} el: (Optional. Default: this.$el). Specifies the DOM where the event is being attached to.     
    */
    addShortcut: function(keys, handler, el) {
    },

    /*
    ** Detach a single shortcut from the dom.
    ** @method removeShortcut
    ** @param {String} keys: The key combination to be detached.
    ** @param { String || Function} handler: (Optional) Handler to be detached.
    */
    removeShortcut: function(keys, handler) {
    },

    /*
    ** Initialize the plugin here.
    ** @method init
    */ 
    init: function(options) {
    }
  };

  return Shortcuts;

})();
