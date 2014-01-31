# Backbone.Shortcuts

A Javascript plugin to add custom keyboard shortcuts to our web application.

## Dependencies

* [.js ~> version number](https://github.com/madrobby/keymaster/) for keyboard shortcuts functionality

## Usage

**JavaScript**

	var MyView = Backbone.View.extend({
	  shortcuts: {
	    "ctrl+a": function(e) {...},
	    "ctrl+b": {
	    	handler: "functionName",
	    	el: this.ui.input
	    },
	    "ctrl+c": "functionName1 functionName2",
	    "ctrl+d shift+d": "functionName"
	  },
	
	  ...
	
	}, Shortcuts);
You can override settings passing them as parameters to the ``init`` method.
Finally, you can press any of the key shortcuts defined to execute its handler function.

## Author

Tomas Campodonico, [@CampodonicoT](https://twitter.com/CampodonicoT)

## License

This project is licensed under MIT license.

