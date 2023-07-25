const findTheOldest = function(people) {

    let placeholder = [];
    for (let i = 0; i < people.length; i++)
    {
        placeholder[i] = people[i].yearOfDeath - people[i].yearOfBirth;
        // console.log(placeholder[i]);


        if (isNaN(placeholder[i]))
      {
        const d = new Date();
        let year = d.getFullYear();
        people[i].yearOfDeath = year; 
        placeholder[i] = people[i].yearOfDeath - people[i].yearOfBirth;
        // console.log(people[i])
      }
    }
    
    for (z = 0; z < people.length; z++)
    {
        if (placeholder[z] > placeholder[z+1])
        {
            // console.log(z);
            return(people[z]);
        }
    }


};

// Do not edit below this line
module.exports = findTheOldest;
