YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Kiwi.Plugins.Text"
    ],
    "modules": [
        "Kiwi",
        "Plugins"
    ],
    "allModules": [
        {
            "displayName": "Kiwi",
            "name": "Kiwi"
        },
        {
            "displayName": "Plugins",
            "name": "Plugins",
            "description": "Text is a GameObject that is used when you are wanting to render\ntext onto the current State.\n\nText has width/height and a hitbox, but because text is difficult\nto measure, these may not be 100% accurate. It does not have an\n\"Input\" component either, although you may choose to add one.\nBe aware of these limitations."
        }
    ]
} };
});