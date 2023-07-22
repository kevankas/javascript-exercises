const sumAll = function(one, two) {

    let answer = 0;
    if (typeof one != typeof two)
    {
        return "ERROR";
    }
    if (one < 0 || two < 0)
    {
        return "ERROR";
    }
    if (one || two )

    if(one < two)
    {
    for (one; one <= two; one++)
    {
        answer += one;
    }
}
else
{
    for (two; two <= one; two++)
    {
        answer += two;
    }
}


    return answer;
};

// Do not edit below this line
module.exports = sumAll;
