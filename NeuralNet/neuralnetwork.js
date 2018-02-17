//Sigmoid function
function sigmoid(x){
    return 1 / (1 + Math.exp(-x));
}

class NeuralNetwork{
    constructor(input_nodes, hidden_nodes, output_nodes, learning_rate){
        this.inodes = input_nodes;
        this.hnodes = hidden_nodes;
        this.onodes = output_nodes;
        
        this.lrate = learning_rate;
        
        this.wih = new Matrix(this.hnodes, this.inodes);
        this.who = new Matrix(this.onodes, this.hnodes);
        
        this.wih.randomise();
        this.who.randomise();
        
        this.bias_h = new Matrix(this.hnodes, 1);
        this.bias_o = new Matrix(this.onodes, 1);
    }
    
    query(input_array){
        //Generate the hidden outputs
        let inputs = Matrix.fromArray(input_array);
        let hidden = Matrix.multiply(this.wih, inputs);
        hidden.add(this.bias_h);
        //Activation function
        hidden.apply(sigmoid);
        
        //Generate the output from the final layer
        let output = Matrix.multiply(this.who, hidden);
        output.add(this.bias_o);
        //Activation function;
        output.apply(sigmoid);
        
        //return ;
    }
}