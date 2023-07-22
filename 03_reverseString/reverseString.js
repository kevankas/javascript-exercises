const reverseString = function(stringhere) {


    let counter = stringhere.length - 1;
    let newstring;
    let testvar = "";
    let answer = ""
    if (stringhere.length == 0)
    {
        
        return stringhere;
    }
    for (let i = counter; i >= 0; i--)
    {
        testvar = stringhere.charAt(i);
        answer += testvar;
       
        

    }
    return answer;






};

// Do not edit below this line
module.exports = reverseString;
