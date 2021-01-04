const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var g1,g2,g3,g4;
var pin1,pin2,pin3,pin4,pin5,pin6,pin7;
var pin8,pin9,pin10,pin11,pin12,pin13,pin14;
var pin15,pin16,pin17,pin18,pin19,pin20,pin21;
var pin22,pin23,pin24,pin25,pin26,pin27,pin28;
var pin29,pin30,pin31,pin32,pin33,pin34,pin35;
var div1, div2, div3, div4, div5, div6, div7, div8;
var particle=[];
var pinklo=[];

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world= engine.world;
  createSprite(400, 200, 50, 50);

  g1 = new Ground(800,695,2000,10);
  g2 = new Ground(120,5,2000,10);
  g3 = new Ground(5,120,10,2000);
  g4 = new Ground(795,67,10,2000);
  div1 = new Division (5,630,10,150);
  div2 = new Division(100,630,10,150);
  div3 = new Division(200,630,10,150);
  div4 = new Division(300,630,10,150);
  div5 = new Division(400,630,10,150);
  div6 = new Division(500,630,10,150);
  div7 = new Division(600,630,10,150);
  div8 = new Division(695,630,10,150);
  pin1 = new Plinko(100,100,10);
  pin2 = new Plinko(200,100,10);
  pin3 = new Plinko(300,100,10);
  pin4 = new Plinko(400,100,10);
  pin5 = new Plinko(500,100,10);
  pin6 = new Plinko(600,100,10);
  pin7 = new Plinko(700,100,10);
  pin8 = new Plinko(100,200,10);
  pin9 = new Plinko(200,200,10);
  pin10 = new Plinko(300,200,10);
  pin11 = new Plinko(400,200,10);
  pin12 = new Plinko(500,200,10);
  pin13 = new Plinko(600,200,10);
  pin14 = new Plinko(700,200,10);
  pin15 = new Plinko(100,300,10);
  pin16 = new Plinko(200,300,10);
  pin17 = new Plinko(300,300,10);
  pin18 = new Plinko(400,300,10);
  pin19 = new Plinko(500,300,10);
  pin20 = new Plinko(600,300,10);
  pin21 = new Plinko(700,300,10);
  pin22 = new Plinko(100,400,10);
  pin23 = new Plinko(200,400,10);
  pin24 = new Plinko(300,400,10);
  pin25 = new Plinko(400,400,10);
  pin26 = new Plinko(500,400,10);
  pin27 = new Plinko(600,400,10);
  pin28 = new Plinko(700,400,10);
  pin29 = new Plinko(100,500,10);
  pin30 = new Plinko(200,500,10);
  pin31 = new Plinko(300,500,10);
  pin32 = new Plinko(400,500,10);
  pin33 = new Plinko(500,500,10);
  pin34 = new Plinko(600,500,10);
  pin35 = new Plinko(700,500,10);
}

function draw() {
  background("black");  
  g1.display();
  g2.display();
  g3.display();
  g4.display();
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();
  div8.display();
  pin1.display();
  pin2.display();
  pin3.display();
  pin4.display();
  pin5.display();
  pin6.display();
  pin7.display();
  pin8.display();
  pin9.display();
  pin10.display();
  pin11.display();
  pin12.display();
  pin13.display();
  pin14.display();
  pin15.display();
  pin16.display();
  pin17.display();
  pin18.display();
  pin19.display();
  pin20.display();
  pin21.display();
  pin22.display();
  pin23.display();
  pin24.display();
  pin25.display();
  pin26.display();
  pin27.display();
  pin28.display();
  pin29.display();
  pin30.display();
  pin31.display();
  pin32.display();
  pin33.display();
  pin34.display();
  pin35.display();
  
  if(frameCount%60==0){
  particle.push(new Particle(random(width/2-10, width/2+10),10,10))
  }
  

}