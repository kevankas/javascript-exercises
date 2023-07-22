const leapYears = function(yearshere) {

    
    if (yearshere % 400 == 0)
    {
        return true;
    }
    else if (yearshere % 100 == 0)
    {
        return false;
    }

    
    if (yearshere % 4 == 0)
    {
        return true;
    }

    return false;


};

// Do not edit below this line
module.exports = leapYears;
