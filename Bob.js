class Bob{
    constructor(x, y, r){
        var options = {
            'restitution':0.3,
            'friction': 0.5,
            'density': 1.2,
            'isStatic': false
        }

        this.body = Bodies.circle(x, y, r, options);
        this.diameter = 2*r;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position
        push ();
        circle(pos.x, pos.y, this.diameter);
        pop ();
    }
}