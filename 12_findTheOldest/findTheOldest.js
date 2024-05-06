const findTheOldest = function(people) {
    

    return people.reduce((oldest, person) => {
        const maxAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(person.yearOfBirth, person.yearOfDeath);
        return maxAge < currentAge ? person : oldest;
    });

};

const getAge = function (birth, death) {
    const currentYear = new Date().getFullYear();

    if (!death) {
        death = currentYear;
    }
    return death - birth;
};


// Do not edit below this line
module.exports = findTheOldest;
