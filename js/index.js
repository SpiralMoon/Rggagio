
function Stuff(shape, collision, renderer, view) {
    if (shape == 'rectangle')
        this.body = Physics.body(shape, {
            x: collision.x,
            y: collision.y,
            vx: 0,
            vy: 0,
            width: collision.width * 0.3,
            height: collision.height * 0.3
        });
    else if (shape == 'circle')
        this.body = Physics.body(shape, {
            x: collision.x,
            y: collision.y,
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

function createStuff(stuffConfiguration, renderer) {
    var stuff = null;
    switch(stuffConfiguration.type) {
        case 1:
            stuff = new Stuff(
                'rectangle',
                {
                    x: stuffConfiguration.positionX,
                    y: stuffConfiguration.positionY,
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
            break;
        case 2:
            stuff = new Stuff(
                'rectangle',
                {
                    x: stuffConfiguration.positionX,
                    y: stuffConfiguration.positionY,
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
            break;
        case 3:
            stuff = new Stuff(
                'rectangle',
                {
                    x: stuffConfiguration.positionX,
                    y: stuffConfiguration.positionY,
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
            break;
        case 4:
            stuff = new Stuff(
                'rectangle',
                {
                    x: stuffConfiguration.positionX,
                    y: stuffConfiguration.positionY,
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
            break;
        case 5:
            stuff = new Stuff(
                'rectangle',
                {
                    x: stuffConfiguration.positionX,
                    y: stuffConfiguration.positionY,
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
            break;
        case 6:
            stuff = new Stuff(
                'rectangle',
                {
                    x: stuffConfiguration.positionX,
                    y: stuffConfiguration.positionY,
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
            break;
        case 7:
            stuff = new Stuff(
                'rectangle',
                {
                    x: stuffConfiguration.positionX,
                    y: stuffConfiguration.positionY,
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
            break;
        case 8:
            stuff = new Stuff(
                'rectangle',
                {
                    x: stuffConfiguration.positionX,
                    y: stuffConfiguration.positionY,
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
            break;
        case 9:
            stuff = new Stuff(
                'rectangle',
                {
                    x: stuffConfiguration.positionX,
                    y: stuffConfiguration.positionY,
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
            break;
        case 10:
            stuff = new Stuff(
                'rectangle',
                {
                    x: stuffConfiguration.positionX,
                    y: stuffConfiguration.positionY,
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
            break;
        case 11:
            stuff = new Stuff(
                'rectangle',
                {
                    x: stuffConfiguration.positionX,
                    y: stuffConfiguration.positionY,
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
            break;
        case 12:
            stuff = new Stuff(
                'rectangle',
                {
                    x: stuffConfiguration.positionX,
                    y: stuffConfiguration.positionY,
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
            break;
        case 13:
            stuff = new Stuff(
                'circle',
                {
                    x: stuffConfiguration.positionX,
                    y: stuffConfiguration.positionY,
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
            break;
        default:
            console.log('ERROR TYPE: Type ' + type + ' is undefined.');
            break;
    }

    stuff.body.state.angular.pos = stuffConfiguration.degree;

    return stuff;
}

class Rggagio {

    constructor() {
        this.physicsWorld = null;

        this.view = {
            element: document.getElementById("canvas"),
            width: 700,
            height: 600
        };

        this.stuffs = {
            player: [],
            enemy: []
        };

        this.renderer = null;

        this.mouse = {
            clickedPosition: {
                x: 0,
                y: 0
            },
            clickedStuff: null
        };

        this.line = new PIXI.Graphics();
        this.line.clear();
    }

    onDownCanvas (event) {
        rggagio.line.clear();

        rggagio.mouse.clickedPosition.x = event.x - rggagio.view.element.getBoundingClientRect().left;
        rggagio.mouse.clickedPosition.y = event.y - rggagio.view.element.getBoundingClientRect().top;

        rggagio.mouse.clickedStuff = rggagio.physicsWorld.findOne({$at: new Physics.vector(rggagio.mouse.clickedPosition.x, rggagio.mouse.clickedPosition.y)});

        if (rggagio.mouse.clickedStuff == false || rggagio.mouse.clickedStuff == undefined)
            rggagio.mouse.clickedStuff = null;
    };

    onUpCanvas (event) {
        rggagio.line.clear();

        if (rggagio.mouse.clickedStuff == null)
            return;

        rggagio.mouse.clickedStuff.state.vel.add((rggagio.mouse.clickedPosition.x - (event.x - rggagio.view.element.getBoundingClientRect().left)) * 0.03, (rggagio.mouse.clickedPosition.y - (event.y - rggagio.view.element.getBoundingClientRect().top)) * 0.03);
        rggagio.mouse.clickedStuff.sleep(false);

        rggagio.mouse.clickedStuff = null;
        rggagio.mouse.clickedPosition.x = 0;
        rggagio.mouse.clickedPosition.y = 0;
    };

    onMoveCanvas (event) {
        rggagio.line.clear();

        if (rggagio.clickedStuff == null)
            return;

        rggagio.line.lineStyle(2, 0xffffff);
        rggagio.line.moveTo(rggagio.mouse.clickedPosition.x, rggagio.mouse.clickedPosition.y);
        rggagio.line.lineTo(event.x - rggagio.view.element.getBoundingClientRect().left, event.y - rggagio.view.element.getBoundingClientRect().top);
        rggagio.line.endFill();
    };

    onResizing () {
        rggagio.line.clear();
        rggagio.mouse.clickedStuff = null;
        rggagio.mouse.clickedPosition.x = 0;
        rggagio.mouse.clickedPosition.y = 0;
    };

    initializing (physicsWorld) {
        this.physicsWorld = physicsWorld;

        this.renderer = Physics.renderer('pixi', {
            el: 'canvas',
            width: rggagio.view.width,
            height: rggagio.view.height,
            meta: false
        });

        this.renderer.stage.addChild(this.line);

        this.view.element.onmousedown = this.onDownCanvas;
        this.view.element.onmouseup = this.onUpCanvas;
        this.view.element.onmousemove = this.onMoveCanvas;

        window.onresize = this.onResizing;
    };

    initializingStuff (user) {
        for (var i in user[0].objects)
            this.stuffs.player.push(createStuff(user[0].objects[i], this.renderer));

        for (var i in user[1].objects)
            this.stuffs.enemy.push(createStuff(user[1].objects[i], this.renderer));

        for (var i in this.stuffs.player)
            this.physicsWorld.add(this.stuffs.player[i].body);

        for (var i in this.stuffs.enemy) {
            console.log(this.stuffs.enemy[i].body.state.pos);
            this.physicsWorld.add(this.stuffs.enemy[i].body);
        }
    }
}

var rggagio = new Rggagio();

Physics({
    timestep: 1000.0 / 160,
    maxIPF: 16,
    integrator: 'verlet'
}, function (world) {

    rggagio.initializing(world);
    rggagio.initializingStuff(json.user);

    world.on('step', function () {
        world.render();
    });

    // var pixelateFilter = new PIXI.filters.PixelateFilter();
    // pixelateFilter.size[0] = 3;
    // pixelateFilter.size[1] = 3;
    // console.log(pixelateFilter);

    // var background = new PIXI.Sprite.fromImage('img/game/desk.png');
    // background.anchor.x = 0;
    // background.anchor.y = 0;
    // background.position.x = 0;
    // background.position.y = 0;
    // background.scale.x = viewWidth;
    // background.scale.y = viewHeight;
    // console.log(background);
    // renderer.stage.addChild(background);

<<<<<<< HEAD
    // renderer.stage.filters = [pixelateFilter];

    var viewportBounds = Physics.aabb(0, 0, rggagio.view.width, rggagio.view.height);
=======
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
>>>>>>> origin/Hangole

    world.add([
        rggagio.renderer,
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

    function applyFriction(stuffs) {
        for (var i in stuffs) {
            var body = stuffs[i].body;
            var frictionByMass = 0.8;
            body.state.vel.set(body.state.vel.x * frictionByMass, body.state.vel.y * frictionByMass);
            body.state.angular.vel = body.state.angular.vel * frictionByMass;
        }
    }

    Physics.util.ticker.on(function (time) {
        applyFriction(rggagio.stuffs.player);
        applyFriction(rggagio.stuffs.enemy);
        world.step(time);
    });
    Physics.util.ticker.start();
});