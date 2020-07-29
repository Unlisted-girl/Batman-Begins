class Drops{
    constructor(x,y){
        var options = {
            restitution: 0.1,
            friction: 0.2,
            density: 0.4
        }
        this.body = Bodies.circle(this.x, this.y, 10, options);
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    }

    update(){
        if(this.body.y>600){
            this.body.y = this.y;
        }
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("skyblue");
        ellipseMode(RADIUS);
        ellipse(this.x, this.y,10);
        pop();
    }
}