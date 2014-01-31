# Backbone.Shortcuts

A Javascript plugin to add custom keyboard shortcuts to our web application.

## Dependencies

* [.js ~> version number](https://github.com/madrobby/keymaster/) for keyboard shortcuts functionality

## Usage

**JavaScript**

	var MyView = Backbone.View.extend({
	  shortcuts: {
	    "ctrl+a": function(e) {...},
	    "ctrl+b": "functionName",
	    "ctrl+c": "functionName1 functionName2",
	    "ctrl+d shift+d": "functionName"
	  },
	
	  ...
	
	}, Shortcuts);
You can override settings passing them as parameters to the ``init`` method.
Finally, you can press any of the key shortcuts defined to execute its handler function.

## API
### attach method ###
>Attach all the shortcuts defined in the object `shortcuts` in the view, to the DOM.
>#### Usage ####
>In the view:  
>``this.attach();``
### detach method ###
>Detach all the shortcuts from the DOM.
>#### Usage ####
>In the view:  
>``this.detach();``
### addShortcut method ###
>Attach a single shortcut to the DOM.
>#### Usage ####
>In the view:  
>``this.addShortcut('ctrl+a', this.functionHandler, this.ui.input);`` 
> 
>Params:  
>1. A string with the key combination. You can includes many key combinations separeted with a space.  
>2. The function handler for the shortcut itself, or a string the its name.  
>3. The DOM element where the shortcut is being attached. It is optional, by default it's attached to the view, i.e. ``this.$el`` 
### removeShortcut method ###
>Detach a single shortcut from the DOM.
>#### Usage ####
>In the view:  
>``this.removeShortcut('ctrl+a');``  
>or  
>``this.removeShortcut('ctrl+a', 'functionName');`` 
### <a name="init-mehod"></a> init method ###
>
>#### Usage ####
>In the view:  
>``this.attach();``
>
## Author

Tomas Campodonico, [@CampodonicoT](https://twitter.com/CampodonicoT)

## License

This project is licensed under MIT license.

