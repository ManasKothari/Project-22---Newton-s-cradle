class rope4{
	constructor(body1,body2, pointA, pointB)
	{
		this.pointA=pointA
		this.pointB=pointB
	
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA, y:this.pointB}
		}
		this.rope4=Constraint.create(options)
		World.add(world,this.rope4)
	}

	display()
	{
		var pointA=this.rope4.bodyA.position;
		var pointB=this.rope4.bodyB.position;

		strokeWeight(2);
		line(pointA.x,pointA.y,pointB.x+this.pointA,pointB.y+this.pointB);
	}

}