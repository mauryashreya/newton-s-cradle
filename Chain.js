class Chain{
    constructor(bodyA,bodyB,offsetX){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.2,
            length : 450,
            pointB : {x : offsetX, y : 0}
        }

        this.Chain = Constraint.create(options);
        this.offsetX = offsetX;
        World.add(world,this.Chain);

    }

    display(){
        var pointA = this.Chain.bodyA.position;
        var pointB = this.Chain.bodyB.position;

        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y);
    }
}