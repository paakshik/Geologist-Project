/**Class for making packages  and helicoptor*/
class Parent2{
    constructor(x,y,r,color) {
        
        let optios = {
        
          density: 2,
          restitution:0.3
  
         }
         this.r = r;
         
         this.color= color
          this.body = Bodies.circle(x, y,this.r,optios);
          World.add(world, this.body);
      this.body.friction = 5;
      }
      show() {
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        fill(this.color);
        
       

        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipse(0, 0, this.r);
        pop();
    }

}
class Parent1{
    constructor(x,y,width,height,color) {
        
      let optios = {
        restitution:0.5,
        density: 2,
        restitution:0.3

       }
       this.width = width;
       this.height = height;
       this.color= color
        this.body = Bodies.rectangle(x, y, this.width, this.height,optios);
        World.add(world, this.body);
    this.body.friction = 5;
    }
    show() {
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        fill(this.color);
translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rect(0, 0, this.width, this.height);
        pop();
    }
}
class Hammer {
    constructor(x,y) {
        
       
        this.body = Bodies.rectangle(x, y, 110, 40, {  restitution:0.5,density: 2,friction:1});
        World.add(world, this.body);
        this.image = loadImage('H.png');
    }
    show() {
        
        push();
        imageMode(CENTER);
      
  
        this.body.position.x = mouseX;

        this.body.position.y = mouseY;       
        
        image(this.image,this.body.position.x , this.body.position.y, 150, 80);
        pop();
    }
   
}
class Iron extends Parent1{
    constructor(x,y) {
        
       
   super(x,y,100,100,'grey');
    }
    
   
}
class Stone extends Parent1{
    constructor(x,y) {
        
       super(x,y,100,60,'brown')
      
    }
   
}
class Rubber extends Parent2 {
    constructor(x,y) {
        
    super(x,y,50,'blue')   

    }
   
   
}
class Sand extends Parent2{
    constructor(x,y) {
        
       
     super(x,y,10,'saddlebrown')
    }
    




}
