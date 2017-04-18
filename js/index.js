
Physics({
    // set the timestep
    timestep: 1000.0 / 160,
    // maximum number of iterations per step
    maxIPF: 16,
    // set the integrator (may also be set with world.add())
    integrator: 'verlet'
}, function(world){

    var viewWidth = 700;
    var viewHeight = 500;

    var renderer = Physics.renderer('pixi', {
        el: 'canvas', // The DOM element to append the stage to
        width: viewWidth,
        height: viewHeight,
        meta: true // Turns debug info on/off
    });

    // render on each step
    world.on('step', function(){
        world.render();
    });

    // world.on('interact:poke', function( data ){
    //     console.log(data);
    // }).on('interact:release', function( data ){
    //     console.log(data);
    // });

    var objs = [];

    var initVelocityRange = 2;

    var choke = Physics.body('rectangle', {
        x: 50,
        y: 50,
        vx: Math.random() * initVelocityRange - initVelocityRange/2,
        vy: Math.random() * initVelocityRange - initVelocityRange/2,
        width: 135,
        height: 12.5
    });
    choke.view = renderer.createDisplay('sprite', {
        texture: 'img/piece/choke.png',
        anchor: {
            x: 0.5,
            y: 0.5
        }
    });
    choke.view.transform.scale._x = 0.5;
    choke.view.transform.scale._y = 0.5;

    var ruler = Physics.body('rectangle', {
        x: Math.random() * viewWidth,
        y: Math.random() * viewHeight,
        vx: Math.random() * initVelocityRange - initVelocityRange/2,
        vy: Math.random() * initVelocityRange - initVelocityRange/2,
        width: 320,
        height: 70
    });
    ruler.view = renderer.createDisplay('sprite', {
        texture: 'img/piece/ruler.png',
        anchor: {
            x: 0.5,
            y: 0.5
        }
    });
    ruler.view.transform.scale._x = 0.5;
    ruler.view.transform.scale._y = 0.5;

    var sharpe = Physics.body('rectangle', {
        x: Math.random() * viewWidth,
        y: Math.random() * viewHeight,
        vx: Math.random() * initVelocityRange - initVelocityRange/2,
        vy: Math.random() * initVelocityRange - initVelocityRange/2,
        width: 240,
        height: 13
    });
    sharpe.view = renderer.createDisplay('sprite', {
        texture: 'img/piece/sharpe.png',
        anchor: {
            x: 0.5,
            y: 0.5
        }
    });
    sharpe.view.transform.scale._x = 0.5;
    sharpe.view.transform.scale._y = 0.5;

    var ballpen = Physics.body('rectangle', {
        x: Math.random() * viewWidth,
        y: Math.random() * viewHeight,
        vx: Math.random() * initVelocityRange - initVelocityRange/2,
        vy: Math.random() * initVelocityRange - initVelocityRange/2,
        width: 230,
        height: 12
    });
    ballpen.view = renderer.createDisplay('sprite', {
        texture: 'img/piece/ballpen.png',
        anchor: {
            x: 0.5,
            y: 0.5
        }
    });
    ballpen.view.transform.scale._x = 0.5;
    ballpen.view.transform.scale._y = 0.5;

    var boardMaker = Physics.body('rectangle', {
        x: Math.random() * viewWidth,
        y: Math.random() * viewHeight,
        vx: Math.random() * initVelocityRange - initVelocityRange/2,
        vy: Math.random() * initVelocityRange - initVelocityRange/2,
        width: 230,
        height: 30
    });
    boardMaker.view = renderer.createDisplay('sprite', {
        texture: 'img/piece/boardMaker.png',
        anchor: {
            x: 0.5,
            y: 0.5
        }
    });
    boardMaker.view.transform.scale._x = 0.5;
    boardMaker.view.transform.scale._y = 0.5;

    var glueStick = Physics.body('rectangle', {
        x: Math.random() * viewWidth,
        y: Math.random() * viewHeight,
        vx: Math.random() * initVelocityRange - initVelocityRange/2,
        vy: Math.random() * initVelocityRange - initVelocityRange/2,
        width: 50,
        height: 190
    });
    glueStick.view = renderer.createDisplay('sprite', {
        texture: 'img/piece/glueStick.png',
        anchor: {
            x: 0.5,
            y: 0.5
        }
    });
    glueStick.view.transform.scale._x = 0.5;
    glueStick.view.transform.scale._y = 0.5;

    var paperweight = Physics.body('rectangle', {
        x: Math.random() * viewWidth,
        y: Math.random() * viewHeight,
        vx: Math.random() * initVelocityRange - initVelocityRange/2,
        vy: Math.random() * initVelocityRange - initVelocityRange/2,
        width: 280,
        height: 30
    });
    paperweight.view = renderer.createDisplay('sprite', {
        texture: 'img/piece/paperweight.png',
        anchor: {
            x: 0.5,
            y: 0.5
        }
    });
    paperweight.view.transform.scale._x = 0.5;
    paperweight.view.transform.scale._y = 0.5;

    var clip = Physics.body('rectangle', {
        x: Math.random() * viewWidth,
        y: Math.random() * viewHeight,
        vx: Math.random() * initVelocityRange - initVelocityRange/2,
        vy: Math.random() * initVelocityRange - initVelocityRange/2,
        width: 50,
        height: 20
    });
    clip.view = renderer.createDisplay('sprite', {
        texture: 'img/piece/clip.png',
        anchor: {
            x: 0.5,
            y: 0.5
        }
    });
    clip.view.transform.scale._x = 0.5;
    clip.view.transform.scale._y = 0.5;

    var crayon = Physics.body('rectangle', {
        x: Math.random() * viewWidth,
        y: Math.random() * viewHeight,
        vx: Math.random() * initVelocityRange - initVelocityRange/2,
        vy: Math.random() * initVelocityRange - initVelocityRange/2,
        width: 180,
        height: 15
    });
    crayon.view = renderer.createDisplay('sprite', {
        texture: 'img/piece/crayon.png',
        anchor: {
            x: 0.5,
            y: 0.5
        }
    });
    crayon.view.transform.scale._x = 0.5;
    crayon.view.transform.scale._y = 0.5;

    var cutter = Physics.body('rectangle', {
        x: Math.random() * viewWidth,
        y: Math.random() * viewHeight,
        vx: Math.random() * initVelocityRange - initVelocityRange/2,
        vy: Math.random() * initVelocityRange - initVelocityRange/2,
        width: 210,
        height: 30
    });
    cutter.view = renderer.createDisplay('sprite', {
        texture: 'img/piece/cutter.png',
        anchor: {
            x: 0.5,
            y: 0.5
        }
    });
    cutter.view.transform.scale._x = 0.5;
    cutter.view.transform.scale._y = 0.5;

    var eraser = Physics.body('rectangle', {
        x: Math.random() * viewWidth,
        y: Math.random() * viewHeight,
        vx: Math.random() * initVelocityRange - initVelocityRange/2,
        vy: Math.random() * initVelocityRange - initVelocityRange/2,
        width: 80,
        height: 80
    });
    eraser.view = renderer.createDisplay('sprite', {
        texture: 'img/piece/eraser.png',
        anchor: {
            x: 0.5,
            y: 0.5
        }
    });
    eraser.view.transform.scale._x = 0.5;
    eraser.view.transform.scale._y = 0.5;

    var pencel = Physics.body('rectangle', {
        x: Math.random() * viewWidth,
        y: Math.random() * viewHeight,
        vx: Math.random() * initVelocityRange - initVelocityRange/2,
        vy: Math.random() * initVelocityRange - initVelocityRange/2,
        width: 190,
        height: 15
    });
    pencel.view = renderer.createDisplay('sprite', {
        texture: 'img/piece/pencel.png',
        anchor: {
            x: 0.5,
            y: 0.5
        }
    });
    pencel.view.transform.scale._x = 0.5;
    pencel.view.transform.scale._y = 0.5;

    var pencilCase = Physics.body('rectangle', {
        x: Math.random() * viewWidth,
        y: Math.random() * viewHeight,
        vx: Math.random() * initVelocityRange - initVelocityRange/2,
        vy: Math.random() * initVelocityRange - initVelocityRange/2,
        width: 290,
        height: 80
    });
    pencilCase.view = renderer.createDisplay('sprite', {
        texture: 'img/piece/pencilCase.png',
        anchor: {
            x: 0.5,
            y: 0.5
        }
    });
    pencilCase.view.transform.scale._x = 0.5;
    pencilCase.view.transform.scale._y = 0.5;

    var tape = Physics.body('circle', {
        x: Math.random() * viewWidth,
        y: Math.random() * viewHeight,
        vx: Math.random() * initVelocityRange - initVelocityRange/2,
        vy: Math.random() * initVelocityRange - initVelocityRange/2,
        radius: 40
    });
    tape.view = renderer.createDisplay('sprite', {
        texture: 'img/piece/tape.png',
        anchor: {
            x: 0.5,
            y: 0.5
        }
    });
    tape.view.transform.scale._x = 0.5;
    tape.view.transform.scale._y = 0.5;

    // for (var i = 0; i < 40; i++) {
    //     var obj = Physics.body('circle', {
    //         x: Math.random() * viewWidth,
    //         y: Math.random() * viewHeight,
    //         radius: 5 + Math.random() * 20
    //     });
    //     world.add(obj);
    //     objs.push(obj);
    // }

    var viewportBounds = Physics.aabb(0, 0, viewWidth, viewHeight);

    objs.push(choke);
    objs.push(ruler);
    objs.push(sharpe);
    objs.push(ballpen);
    objs.push(boardMaker);
    objs.push(glueStick);
    objs.push(paperweight);
    objs.push(clip);
    objs.push(crayon);
    objs.push(cutter);
    objs.push(eraser);
    objs.push(pencel);
    objs.push(pencilCase);
    objs.push(tape);

    for (var i in objs)
        world.add(objs[i]);

    world.add([
        renderer,
        Physics.behavior('interactive', { el: renderer.el }),
        Physics.behavior('sweep-prune'),
        Physics.behavior('body-collision-detection'),
        Physics.behavior('edge-collision-detection', {
            aabb: viewportBounds,
            restitution: 0.2,
            cof: 0.99
        }),
        Physics.behavior('body-impulse-response'),
        Physics.behavior('constant-acceleration', {
            acc: {
                x: 0,
                y: 0
            }
        })
    ]);

    function applyFriction(objs, friction) {
        for (var i in objs) {
            var obj = objs[i];
            obj.state.vel.set(obj.state.vel.x * friction, obj.state.vel.y * friction);
            obj.state.angular.vel = obj.state.angular.vel * friction;
        }
    }

    // subscribe to the ticker
    Physics.util.ticker.on(function( time ){
        applyFriction(objs, 0.8);
        world.step( time );
    });
    // start the ticker
    Physics.util.ticker.start();

});

