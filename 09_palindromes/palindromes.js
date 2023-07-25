const palindromes = function (word) {

    // return word.charAt(1);
    // return word.length;

    let newanswer = "";
    const processedString = word.toLowerCase().replace(/[^a-z0-9]/g, "");


    for (let i = processedString.length; i >= 0; i--)
    {
        newanswer += processedString.charAt(i);
    }
    if (processedString.toLowerCase() == newanswer.toLowerCase())
    {
        return true;

    }
    else
    {
        return false;
    }

    
    



};

// Do not edit below this line
module.exports = palindromes;
