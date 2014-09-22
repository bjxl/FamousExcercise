define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var HeaderFooterLayout = require('famous/views/HeaderFooterLayout');
    var GridLayout = require('famous/views/GridLayout');
    var StateModifier = ('famous/modifiers/StateModifier');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var ImageSurface = require('famous/surfaces/ImageSurface');

    // create the main context
    var mainContext = Engine.createContext();

    // your app here
    var layout;

    createLayout();
    addHeader();
    addContent();
    addFooter();


    function createLayout() {
        layout = new HeaderFooterLayout({
            headerSize: 100,
            footerSize: 50
        });

        mainContext.add(layout);
    }


    function addHeader() {
        layout.header.add(new Surface({
            content: "Instagram",
            properties: {
                backgroundColor: '#2E2EFE',
                fontSize: '50px',
                color: '#F2F2F2',
                lineHeight: '100px',
                textAlign: 'left'
            }
        }));
    }

    function addContent() {
        layout.content.add(new Surface({
            content: "Content",
            properties: {
                lineHeight: '400px',
                textAlign: "center"
            }
        }));
    }

    function addFooter() {
        layout.footer.add(createGrid ('footer', [5, 1] ));
    }

    function createGrid(section, dimensions) {
        var grid = new GridLayout({
            dimensions: dimensions
        });

        var surfaces = [];
        grid.sequenceFrom(surfaces);

        for(var i = 0; i < dimensions[0]; i++) {
            surfaces.push(new Surface({
                size: [undefined, undefined],
                properties: {
                    backgroundColor: "hsl(" + (i * 360 / 8) + ", 100%, 50%)",
                    color: "#F2F2F2",
                    lineHeight: '50px',
                    textAlign: 'center'
                }
            }));
        }

        surfaces[0].setContent('home');
        surfaces[1].setContent('explore');
        surfaces[2].setContent('camera');
        surfaces[3].setContent('news');
        surfaces[4].setContent('user');

        return grid;

    }


    mainContext.add(layout);
});
