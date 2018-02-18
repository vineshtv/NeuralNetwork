function setup() {
	//createCanvas(windowWidth, windowHeight);
    /*let a = new Matrix(3,4);
    
    a.randomise(true);
    console.table(a.data);
    let b = Matrix.transpose(a);
    console.table(b.data);
    
    let c = Matrix.multiply(a,b);
    console.table(c.data);
    
    let d = Matrix.multiply(c, Matrix.identity(c.cols));
    console.table(d.data);
    
    console.table(Matrix.identity(5).data);
    */
    
    let nn = new NeuralNetwork(2,2,1);
    
    let input = [1,0];
    let targets = [1];
    
    nn.train(input, targets);
    //let prediction = nn.query(input);
    //console.log(prediction);
    
}

function draw() {

}