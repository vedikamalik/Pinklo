class Particle{
    constructor(x,y){
        var ball_options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:0.3
          }
          this.body = Bodies.circle(x,y,10,ball_options);
          this.color =color(random(0,225), random(0,225), random(0,255));
          this.radius = 10;
          World.add(world,this.body);
    }
    display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate (this.body.angle);
    ellipseMode(RADIUS);
    fill(this.color());
    ellipse(0,0,this.radius);
    pop();
    }
}


   
