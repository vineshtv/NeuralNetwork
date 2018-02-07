function setup() {
	//createCanvas(windowWidth, windowHeight);
    let a = new Matrix(3,4);
    
    a.randomise(true);
    console.table(a.data);
    let b = Matrix.transpose(a);
    console.table(b.data);
    
    let c = Matrix.multiply(a,b);
    console.table(c.data);
    
    let d = Matrix.multiply(c, Matrix.identity(c.cols));
    console.table(d.data);
    
    console.table(Matrix.identity(5).data);
    
}

function draw() {

}