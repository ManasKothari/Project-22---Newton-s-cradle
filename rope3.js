class rope3{
	constructor(body1,body2, pointA, pointB)
	{
		this.pointA=pointA
		this.pointB=pointB
	
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA, y:this.pointB}
		}
		this.rope3=Constraint.create(options)
		World.add(world,this.rope3)
	}

	display()
	{
		var pointA=this.rope3.bodyA.position;
		var pointB=this.rope3.bodyB.position;

		strokeWeight(2);
		line(pointA.x,pointA.y,pointB.x+this.pointA,pointB.y+this.pointB);
	}

}