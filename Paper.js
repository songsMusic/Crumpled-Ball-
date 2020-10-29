class Paper  {
    constructor(x, y) {
        var options = {
            isStatic:false , 
            'restitution':0.3,
            'friction': 0.5  ,
            'density':1.2 
        }
        this.body = Bodies.rectangle(x, y,options);
        this.x = x  ; 
        this.y = y 
        
        
        World.add(world, this.body);
    } 
display() {
    Matter.Bodies.circle(this.x,this.y, 10) ; 
}
    } 