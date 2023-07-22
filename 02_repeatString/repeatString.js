const repeatString = function(word, amount) {
    let result = "";
  
    if (word === "")
    {
        return "";
    }
    
    if (amount > 0)
    {
        for (let i = 1; i <= amount; i++)
        {
            result += word;
            
        }
        return result;
    }
    if (amount == 0)
    {
        result = ""
        return result;
    }
    if (amount < 0)
    {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;