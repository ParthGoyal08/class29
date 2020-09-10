class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

       this.sling1image = loadImage("./sprites/sling1.png");
       this.sling2image = loadImage("./sprites/sling2.png");
       this.sling3image = loadImage("./sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

        image(this.sling1image,200,25);
        image(this.sling2image,175,25);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(84,39,15);
            line(pointA.x-20, pointA.y, pointB.x, pointB.y-40);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-40);
            image(this.sling3image,pointA.x-25,pointA.y-5,10,20);
        }

         
    }
    
}