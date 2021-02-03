class Bob{
    constructor(x,y,r){
        var options = {
            restitution : 1,
            friction : 0.3,
            density : 0.4

        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("purple");
        ellipse(pos.x,pos.y,this.r);
    }
}