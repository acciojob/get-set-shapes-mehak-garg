//complete this code
class Rectangle {

	constructor(width, height)
{
	this.width=width;
	this.height=height;
}
get width() {
    return this.width;
  }
get height() {
    return this.width;
  }
	getArea(){
		return width*height;
	}
}

class Square extends Animal,Square {

	constructor(side)
	{super(side,side);
	 
		this.side=side;
	}
	getPerimeter(){
		return 4*side;
	}
	getArea(){
		return side*side;
	}
}


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
