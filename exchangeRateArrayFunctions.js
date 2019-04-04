const ratesArray = [
    {
        "date" : "2019-04-03",
        "rate" : 1.1234
    },
    {
        "date" : "2019-04-02",
        "rate" : 1.1134
    },
    {
        "date" : "2019-04-01",
        "rate" : 1.1234
    },
    {
        "date" : "2019-03-31",
        "rate"  : 1.1232
    },
    {
        "date" : "2019-03-30",
        "rate"  : 1.1144
    },
];

const filterArrayByMaxRate = function(array){
    const newArray = [];
    array.forEach((element) => {
        const rate = element.rate;
        newArray.push(rate);
    })
    const maxRate = Math.max(...newArray);
    const result = array.filter(element => element.rate === maxRate);
    return result;
}

const filterArrayByMinRate = function (array) {
    const newArray = [];
    array.forEach((element) => {
        const rate = element.rate;
        newArray.push(rate);
    })
    const minRate = Math.min(...newArray);
    const result = array.filter(element => element.rate === minRate);
    return result;
}

const filterArrayBySpecificRate = function(array, rate){
    const result = array.filter(element => element.rate === rate);
    return result;
}

// Enter date in format "yyyy-mm-dd"
const filterArrayBySpecificDate = function(array, date){
    const result = array.filter(element => element.date === date);
    return result;
}


console.log(filterArrayBySpecificRate(ratesArray, 1.1234));
console.log(filterArrayBySpecificDate(ratesArray, "2019-03-31"));
console.log(filterArrayByMaxRate(ratesArray));
console.log(filterArrayByMinRate(ratesArray));
