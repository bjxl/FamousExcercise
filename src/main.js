define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var HeaderFooterLayout = require('famous/views/HeaderFooterLayout');
    var GridLayout = require('famous/views/GridLayout');
    var View = require('famous/core/View');
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
            footerSize: 100
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
        layout.content.add(new ImageSurface({
            size: [400, 400],
            content: "http://confrazzled.com/wp-content/uploads/2014/08/cat2.jpg",
            properties: {
                lineHeight: '400px',
                textAlign: "center"
            }
        }));

        /*layout.content.add(new ImageSurface({
            size: [400, 400],
            content: "http://exmoorpet.com/wp-content/uploads/2012/08/cat.png",
            properties: {
                lineHeight: '400px',
                textAlign: "center"
            }
        }));
        */
    }

    function addFooter() {
        var grid = new GridLayout({
            dimensions: [5, 1]
        });

        var views = [];
        grid.sequenceFrom(views);

        var images =[];
        images[0] = 'http://irishnewsreview.files.wordpress.com/2014/08/home.png';
        images[1] = 'https://cdn2.iconfinder.com/data/icons/flaticons-solid/18/explore-1-512.png';
        images[2] = 'http://cdns2.freepik.com/free-photo/vintage--squared-camera_318-10040.jpg';
        images[3] = 'http://us.cdn3.123rf.com/168nwm/kanate/kanate1401/kanate140100048/25238361-heart-symbol-speech-bubble-illustration.jpg';
        images[4] = 'http://icons.iconarchive.com/icons/custom-icon-design/mono-business-2/512/news-icon.png';

        for(var i = 0; i < 5; i++) {
            var view = new View();

            var centerModifier = new Modifier({
                origin: [0.5, 0.5]
            });

            var surface = new ImageSurface({
                content: images[i],
                size: [75, 75],
                properties: {
                    //color: "black",
                    lineHeight: '50px',
                    textAlign: 'center'
                }
            });

            view.add(centerModifier).add(surface);

            views.push(view);
        };

        layout.footer.add(grid);
    };




});
