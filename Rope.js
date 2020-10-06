class Rope{
    constructor(bodyA, point2){
        var options = {
            bodyA: bodyA,
            pointB: point2,
            stiffness: 0.0004,
            length: 150
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;

        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);    
    }
}
