var gameOptions = {
		// renderer: Kiwi.RENDERER_CANVAS,
		width: 800,
		height: 600,
		// scaleType: Kiwi.Stage.SCALE_FIT,
		// deviceTarget: Kiwi.TARGET_COCOON,
		plugins: [ "Text" ]
	},
	Example = {};

Example.game = new Kiwi.Game( null, "game", null, gameOptions );


Example.state = new Kiwi.State( "state" );


Example.state.create = function() {

	var poem = "I met a traveller from an antique land Who said: Two vast and trunkless legs of stone Stand in the desert. Near them, on the sand, Half sunk, a shattered visage lies, whose frown, And wrinkled lip, and sneer of cold command, Tell that its sculptor well those passions read Which yet survive, stamped on these lifeless things, The hand that mocked them and the heart that fed: And on the pedestal these words appear: 'My name is Ozymandias, king of kings: Look on my works, ye Mighty, and despair!' Nothing beside remains. Round the decay Of that colossal wreck, boundless and bare The lone and level sands stretch far away.",
		poemLines = "I met a traveller from an antique land\n" +
			"Who said: Two vast and trunkless legs of stone\n" +
			"Stand in the desert. Near them, on the sand,\n" +
			"Half sunk, a shattered visage lies, whose frown,\n" +
			"And wrinkled lip, and sneer of cold command,\n" +
			"Tell that its sculptor well those passions read\n" +
			"Which yet survive, stamped on these lifeless things,\n" +
			"The hand that mocked them and the heart that fed:\n" +
			"And on the pedestal these words appear:\n" +
			"\"My name is Ozymandias, king of kings:\n" +
			"Look on my works, ye Mighty, and despair!\"\n" +
			"Nothing beside remains. Round the decay\n" +
			"Of that colossal wreck, boundless and bare\n" +
			"The lone and level sands stretch far away.";

	Kiwi.State.prototype.create.call( this );

	this.game.stage.color = "eee";

	// Create example text objects

	// Simplest possible text
	this.textA = new Kiwi.Plugins.Text( {
		state: this
	} );

	// Very long text without configuration
	// Note that it runs off the side of the page
	this.textB = new Kiwi.Plugins.Text( {
		state: this,
		text: poem,
		x: 32,
		y: 64
	} );

	// Very long text with configuration
	// Note that although there are more than 4 lines,
	// they do not display because of the config
	this.textC = new Kiwi.Plugins.Text( {
		state: this,
		text: poem,
		x: 32,
		y: 150,
		fontSize: 18,
		maxWidth: 240,
		maxLines: 4
	} );

	// Very long text with line breaks and styling
	// Note that this text is centered (its center is x=0),
	// so its anchor point must be at 0 to be central.
	// Note also that "\n" newline characters are handled properly.
	this.textD = new Kiwi.Plugins.Text( {
		state: this,
		text: poemLines,
		x: 550,
		y: 150,
		fontFamily: "fantasy",
		fontSize: 18,
		anchorNormalX: 0,
		anchorNormalY: 0.5,
		rotation: -0.1,
		alignment: "center",
		lineHeight: "1.5em",
		color: "#420"
	} );

	// Example that demonstrates how long words are handled
	// Hyphenation is automatic
	this.textE = new Kiwi.Plugins.Text( {
		state: this,
		text: "\"Antidisestablishmentarianism\" is a floccinaucinihilipilificacious word.",
		x: 32,
		y: 300,
		fontFamily: "monospace",
		fontSize: 18,
		color: "#444",
		maxWidth: 160
	} );

	// Legend
	// Uses "right" alignment to fit neatly onto right corner
	this.legend = new Kiwi.Plugins.Text( {
		state: this,
		text: "Text plugin for KiwiJS",
		alignment: "right",
		x: this.game.stage.width - 16,
		y: this.game.stage.height - 32,
		size: 16
	});
};


Example.game.states.addState( Example.state );
Example.game.states.switchState( "state" );
