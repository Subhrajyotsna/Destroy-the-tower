class hexagon{
    constructor(x, y,r) {
       var options={
           isStatic:false,
           density:1.2,
           friction:0.75
       }
        this.body = Bodies.circle(50,100,15,options);
        
        World.add(world, this.body);
      polygon_img = loadImage("polygon.png")
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(polygon_img,0,0,40,40);
        pop();
      }
}
