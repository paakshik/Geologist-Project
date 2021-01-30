/**Class for making packages  and helicoptor*/
class Ground {
    constructor() {
        
       
        this.body = Bodies.rectangle(500, height, 4000, 50, { isStatic: true ,density: 1});
        World.add(world, this.body);
      
    }
    show() {
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        fill("brown");
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rect(0, 0, 4000, 50);
        pop();
    }
   
}
