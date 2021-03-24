class Slingshot{
    constructor(b1,pointB){
   var options={
            bodyA:b1,
            pointB:pointB,
            stiffness:0.04,
            length:5,
        }
    this.sling1=loadImage('sprites/sling1.png');
    this.sling2=loadImage('sprites/sling2.png');
    this.sling3=loadImage('sprites/sling3.png');
    
     this.pointB=pointB;   
     this.chain=Constraint.create(options);
     World.add(world,this.chain);
    }
    fly(){
      this.chain.bodyA=null; //nothing

}
attach(body){//bird.body
    this.chain.bodyA=body;
}
    display(){
        image (this.sling1,200,20);
        image (this.sling2,170,20);
        if(this.chain.bodyA){
        var posA=this.chain.bodyA.position;
        var posB=this.pointB;
        push();
        
        if(posA.x<220){
            strokeWeight (10);
            stroke("black")
            line(posA.x-25,posA.y,posB.x-10,posB.y);
            line(posA.x-25,posA.y,posB.x+30,posB.y);
            image(this.sling3,posA.x-30,posA.y-10,15,30)
        }
        else{
            strokeWeight (3);
            line(posA.x+25,posA.y,posB.x-10,posB.y);
            line(posA.x+25,posA.y,posB.x+30,posB.y);
            image(this.sling3,posA.x+30,posA.y-10,15,30)
        }

        
        
     
        pop();
        }
    }

}