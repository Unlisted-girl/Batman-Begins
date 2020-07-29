class Umbrella{
    constructor(x,y){
        var options={
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.animation = loadAnimation("Images/Man1.jpeg","Images/Man2.jpeg", "Images/Man3.jpeg",
        "Images/Man4.jpeg", "Images/Man5.jpeg", "Images/Man6.jpeg", "Images/Man7.jpeg", "Images/Man8.jpeg")
        this.body = Bodies.rectangle(this.x, this.y,100,50);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        noFill();
        image(this.animation,this.x, this.y, 100, 50);
    }
}