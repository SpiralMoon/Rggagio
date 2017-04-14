
Physics({
    // set the timestep
    timestep: 1000.0 / 160,
    // maximum number of iterations per step
    maxIPF: 16,
    // set the integrator (may also be set with world.add())
    integrator: 'verlet'
}, function(world){

    var viewWidth = 600;
    var viewHeight = 600;

    var renderer = Physics.renderer('pixi', {
        el: 'canvas', // The DOM element to append the stage to
        width: viewWidth,
        height: viewHeight,
        meta: true // Turns debug info on/off
    });

    // add the renderer
    world.add( renderer );

    // render on each step
    world.on('step', function(){
        world.render();
    });

    var viewportBounds = Physics.aabb(0, 0, viewWidth, viewHeight);

    world.add(Physics.behavior('edge-collision-detection', {
        aabb: viewportBounds,
        restitution: 0.2,
        cof: 0.99
    }));

    var chalk = Physics.body('rectangle', {
        x: 50, // x-coordinate
        y: 70, // y-coordinate
        vx: 0.2, // velocity in x-direction
        vy: 0.11, // velocity in y-direction,
        width: 290,
        height: 25
    }); chalk.view = renderer.createDisplay('sprite', {
        texture: 'img/chalk.png',
        scale: {
            x: 0.1,
            y: 0.1
        },
        anchor: {
            x: 0.5,
            y: 0.5
        }
    }); world.add(chalk);

    // var ruler = Physics.body('rectangle', {
    //     x: 250, // x-coordinate
    //     y: 270, // y-coordinate
    //     vx: 0.1, // velocity in x-direction
    //     vy: 0.05, // velocity in y-direction,
    //     width: 290,
    //     height: 25
    // }); ruler.view = renderer.createDisplay('sprite', {
    //     texture: 'img/ruler.png',
    //     scale: {
    //         x: 0.5,
    //         y: 0.5
    //     },
    //     anchor: {
    //         x: 0.5,
    //         y: 0.5
    //     }
    // }); world.add(ruler);

    // ensure objects bounce when edge collision is detected
    world.add( Physics.behavior('body-impulse-response') );

    // add some gravity
    world.add( Physics.behavior('constant-acceleration') );

    // subscribe to the ticker
    Physics.util.ticker.on(function( time ){
        world.step( time );
    });
    // start the ticker
    Physics.util.ticker.start();

});

