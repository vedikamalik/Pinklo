class Plinko{
    constructor(x,y,radius){
        var ball_options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:0.3
          }
          this.body = Bodies.circle(x,y,10,ball_options);
          this.radius = radius;
          World.add(world,this.body);
    }
    display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y)
    rotate (this.body.angle);
    ellipseMode(RADIUS);
    fill("white");
    ellipse(0,0, this.radius);
    pop();
    }
}

