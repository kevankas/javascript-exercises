const fibonacci = function(fib) {

    let counter = [];
    

    if (fib < 0)
    {
        return "OOPS";
    }
    for (let x = 1; x < 100; x++)
    {
        counter[0] = 1;
        counter[1] = 1;
        counter[x] = counter[x-1] + counter[x-2];
        
    }
    return counter[fib-1];//fib 4 should be 3 but its giving me 5
    // 1 1 2 3 5 8

};

// Do not edit below this line
module.exports = fibonacci;
