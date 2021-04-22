class Chain {

constructor (bodyA , bodyB ) {

    var options = {
        bodyA: bird.body , 
        bodyB: constraintLog.body,
        stiffness: 0.04  ,
        length: 100

    }
    this.chain = Constraint.create(options);
    World.add(world,this.chain);


}

display(){

var pointA = this.chain.bodyA.position;
var pointB = this.chain.bodyB.position;

line(pointA.x, pointA.y, pointB.x, pointB.y);


}




}