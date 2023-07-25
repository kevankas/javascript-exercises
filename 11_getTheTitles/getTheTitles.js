const getTheTitles = function(books) {
    let booking = [];
    for (let i = 0; i < books.length; i++)
    {
        booking[i] = books[i].title;
    }

    return booking;
};

// Do not edit below this line
module.exports = getTheTitles;
