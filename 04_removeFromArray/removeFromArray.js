const removeFromArray = function(removing, ...manyMoreArgs) {

// for (let i = 0; i <= manyMoreArgs; i++)
// {
    
//     if (manyMoreArgs == removing[i])
//     {
//         removing[i] = removing[i+1];
//         removing.pop();
//     }
    
// }

const newArray = [];

removing.forEach(item => {
    if (!manyMoreArgs.includes(item))
    {
        newArray.push(item);
    }
});



return newArray;


};

// Do not edit below this line
module.exports = removeFromArray;
