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
        let inputs = Matrix.fromArray(input_array);
        
        let hidden = Matrix.multiply(this.wih, inputs);
        
        hidden.add(this.bias_h);
        
        //Activation function
        
        return result;
    }
}