require(['splotch/app', 'requirejs/domReady'],
    function(app, domReady) {
    domReady(function() {
        app.$started.addOnce(function(msg) {
            console.info(msg);
        });

        app.$faulted.addOnce(function(msg) {
            console.error(msg);
        });

        app.run();
    });
});
