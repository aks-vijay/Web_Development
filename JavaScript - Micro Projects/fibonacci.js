function fib(n) {
    if (n == 1) {
        output = [0];
    }
    else if (n == 2) {
        output = [0,1];
    }
    else {
        output = [0,1];
    
        for (var i = 1; i < n; i++) {
            // output[0] + output[1]
            // output = [0,1,1,2]
            // output[2] + output[3] = 1+2 = 3
            output.push(output[output.length-2] + output[output.length - 1]);
        }
    }
    return output;
}

fib(10)
