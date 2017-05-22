Physics({
    timestep: 1000.0 / 160,
    maxIPF: 16,
    integrator: 'verlet'
}, function(world) {

    var clickedPosition = {x: 0, y: 0};
    var clickedObject = null;

    function onDownCanvas(event) {
        line.clear();

        clickedPosition.x = event.x - this.getBoundingClientRect().left;
        clickedPosition.y = event.y - this.getBoundingClientRect().top;

        clickedObject = world.findOne({ $at: new Physics.vector( clickedPosition.x, clickedPosition.y ) });

        if (clickedObject == false || clickedObject == undefined)
            clickedObject = null;
    }
    function onUpCanvas(event) {
        line.clear();

        if (clickedObject == null)
            return;

        clickedObject.state.vel.add((clickedPosition.x - (event.x - this.getBoundingClientRect().left)) * 0.03, (clickedPosition.y - (event.y - this.getBoundingClientRect().top)) * 0.03);
        clickedObject.sleep(false);

        clickedObject = null;
        clickedPosition.x = 0;
        clickedPosition.y = 0;
    }
    function onMoveCanvas(event) {
        line.clear();

        if (clickedObject == null)
            return;

        line.lineStyle(2, 0xffffff);
        line.moveTo(clickedPosition.x, clickedPosition.y);
        line.lineTo(event.x - this.getBoundingClientRect().left, event.y - this.getBoundingClientRect().top);
        // line.moveTo(clickedObject.state.pos.x, clickedObject.state.pos.y);
        // line.lineTo(clickedObject.state.pos.x - (clickedPosition.x - (event.x - this.getBoundingClientRect().left)), clickedObject.state.pos.y - (clickedPosition.y - (event.y - this.getBoundingClientRect().top)));
        line.endFill();
    }

    var canvas = document.getElementById("canvas");

    canvas.onmousedown = onDownCanvas;
    canvas.onmouseup = onUpCanvas;
    canvas.onmousemove = onMoveCanvas;

    function onResizing() {
        line.clear();
        clickedObject = null;
        clickedPosition.x = 0;
        clickedPosition.y = 0;
    }

    window.onresize = onResizing;

    var viewWidth = 1000;
    var viewHeight = 600;

    var renderer = Physics.renderer('pixi', {
        el: 'canvas',
        width: viewWidth,
        height: viewHeight,
        meta: true
    });

    world.on('step', function(){
        world.render();
    });

    function Object(shape, collision, renderer, view) {
        if (shape == 'rectangle')
            this.body = Physics.body(shape, {
                x: Math.random() * viewWidth, // collision.x
                y: Math.random() * viewHeight, // collision.y
                vx: Math.random() * 4 - 2,
                vy: Math.random() * 4 - 2,
                width: collision.width * 0.3,
                height: collision.height * 0.3
            });
        else if (shape == 'circle')
            this.body = Physics.body(shape, {
                x: Math.random() * viewWidth, // collision.x
                y: Math.random() * viewHeight, // collision.y
                radius: collision.radius * ((0.3 + 0.3) * 0.5)
            });
        else
            return null;

        this.body.view = renderer.createDisplay('sprite', {
            texture: view.texture,
            anchor: {
                x: 0.5,
                y: 0.5
            }
        });
        this.body.view.transform.scale.set(0.3, 0.3);

        this.body.mass = collision.mass;
    }

    var objs = [];

    var chalk = new Object(
        'rectangle',
        {
            x: 50,
            y: 50,
            width: 270,
            height: 25,
            mass: 0.5
        },
        renderer,
        {
            texture: 'img/piece/choke.png',
            scale: {
                x: 0.2,
                y: 0.2
            }
        }
    );
  
    var ruler = new Object(
        'rectangle',
        {
            x: 50,
            y: 50,
            width: 640,
            height: 140,
            mass: 1
        },
        renderer,
        {
            texture: 'img/piece/ruler.png',
            scale: {
                x: 0.2,
                y: 0.2
            }
        }
    );
    var sharpe = new Object(
        'rectangle',
        {
            x: 50,
            y: 50,
            width: 480,
            height: 26,
            mass: 1
        },
        renderer,
        {
            texture: 'img/piece/sharpe.png',
            scale: {
                x: 0.2,
                y: 0.2
            }
        }
    );
    var ballpen = new Object(
        'rectangle',
        {
            x: 50,
            y: 50,
            width: 460,
            height: 24,
            mass: 1
        },
        renderer,
        {
            texture: 'img/piece/ballpen.png',
            scale: {
                x: 0.2,
                y: 0.2
            }
        }
    );
    var boardMaker = new Object(
        'rectangle',
        {
            x: 50,
            y: 50,
            width: 460,
            height: 60,
            mass: 1
        },
        renderer,
        {
            texture: 'img/piece/boardMaker.png',
            scale: {
                x: 0.2,
                y: 0.2
            }
        }
    );
    var glueStick = new Object(
        'rectangle',
        {
            x: 50,
            y: 50,
            width: 100,
            height: 380,
            mass: 1
        },
        renderer,
        {
            texture: 'img/piece/glueStick.png',
            scale: {
                x: 0.2,
                y: 0.2
            }
        }
    );
    var paperweight = new Object(
        'rectangle',
        {
            x: 50,
            y: 50,
            width: 560,
            height: 60,
            mass: 1
        },
        renderer,
        {
            texture: 'img/piece/paperweight.png',
            scale: {
                x: 0.2,
                y: 0.2
            }
        }
    );
    var clip = new Object(
        'rectangle',
        {
            x: 50,
            y: 50,
            width: 100,
            height: 40,
            mass: 1
        },
        renderer,
        {
            texture: 'img/piece/clip.png',
            scale: {
                x: 0.2,
                y: 0.2
            }
        }
    );
    var crayon = new Object(
        'rectangle',
        {
            x: 50,
            y: 50,
            width: 360,
            height: 30,
            mass: 1
        },
        renderer,
        {
            texture: 'img/piece/crayon.png',
            scale: {
                x: 0.2,
                y: 0.2
            }
        }
    );
    var cutter = new Object(
        'rectangle',
        {
            x: 50,
            y: 50,
            width: 420,
            height: 60,
            mass: 1
        },
        renderer,
        {
            texture: 'img/piece/cutter.png',
            scale: {
                x: 0.2,
                y: 0.2
            }
        }
    );
    var eraser = new Object(
        'rectangle',
        {
            x: 50,
            y: 50,
            width: 160,
            height: 160,
            mass: 1
        },
        renderer,
        {
            texture: 'img/piece/eraser.png',
            scale: {
                x: 0.2,
                y: 0.2
            }
        }
    );
    var pencel = new Object(
        'rectangle',
        {
            x: 50,
            y: 50,
            width: 380,
            height: 30,
            mass: 1
        },
        renderer,
        {
            texture: 'img/piece/pencel.png',
            scale: {
                x: 0.2,
                y: 0.2
            }
        }
    );
    var pencilCase = new Object(
        'rectangle',
        {
            x: 50,
            y: 50,
            width: 580,
            height: 160,
            mass: 1
        },
        renderer,
        {
            texture: 'img/piece/pencilCase.png',
            scale: {
                x: 0.2,
                y: 0.2
            }
        }
    );
    var tape = new Object(
        'circle',
        {
            x: 50,
            y: 50,
            radius: 80,
            mass: 1
        },
        renderer,
        {
            texture: 'img/piece/tape.png',
            scale: {
                x: 0.2,
                y: 0.2
            }
        }
    );

    var line = new PIXI.Graphics();
    renderer.stage.addChild(line);

    objs.push(chalk);
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
        world.add(objs[i].body);

    var viewportBounds = Physics.aabb(0, 0, viewWidth, viewHeight);

    world.add([
        renderer,
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

    function applyFriction(objs) {
        for (var i in objs) {
            var body = objs[i].body;
            var frictionByMass = 0.8;
            body.state.vel.set(body.state.vel.x * frictionByMass, body.state.vel.y * frictionByMass);
            body.state.angular.vel = body.state.angular.vel * frictionByMass;
        }
    }

    Physics.util.ticker.on(function( time ){
        applyFriction(objs);
        world.step( time );
    });
    Physics.util.ticker.start();
});