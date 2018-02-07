class Matrix{
    constructor(rows, cols){
        this.rows = rows;
        this.cols = cols;
        this.data = [];
        
        for(let i = 0; i < this.rows; i++){
            this.data[i] = [];
            for(let j = 0; j < this.cols; j++){
                this.data[i][j] = 0;
            }
        }
    }
    
    randomise(dummy=false){
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++){
                if(dummy){
                    this.data[i][j] = Math.floor(Math.random() * 10);
                }else{
                    this.data[i][j] = Math.random() * 2 - 1;
                }
            }
        }
    }
    
    add(n){
        if(n instanceof Matrix){
            for(let i = 0; i < this.rows; i++){
                for(let j = 0; j < this.cols; j++){
                    this.data[i][j] += n.data[i][j];
                }
            }
        } else {
            for(let i = 0; i < this.rows; i++){
                for(let j = 0; j < this.cols; j++){
                    this.data[i][j] += n;
                }
            }
        }
    }
    
    static identity(n){
        let result = new Matrix(n,n);
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n; j++){
                if(i == j){
                    result.data[i][j] = 1;
                }else{
                    result.data[i][j] = 0;
                }
            }
        }
        return result;
    }
    
    static multiply(a, b){
        if(a.cols != b.rows){
            console.log("Incompatible matrices");
            return undefined;
        }
        
        let result = new Matrix(a.rows, b.cols);
        for(let i = 0; i < result.rows; i++){
            for(let j = 0; j < result.cols; j++){
                let sum = 0;
                for(let k = 0; k < a.cols; k++){
                    sum += a.data[i][k] * b.data[k][j];
                }
                result.data[i][j] = sum;
            }
        }
        
        return result;
    }
    
    static transpose(a){
        let result = new Matrix(a.cols, a.rows);
        for(let i = 0; i < a.rows; i++){
            for(let j = 0; j < a.cols; j++){
                result.data[j][i] = a.data[i][j];
            }
        }
        return result;
    }
    
    //Scalar multiply
    multiply(n){
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++){
                this.data[i][j] *= n;
            }
        }
    }
    
    
}