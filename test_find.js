const array = [
    {
        id: 1,
        value: "one"
    },
    {
        id: 2,
        value: "two"
    },
    {
        id: 3,
        value: "three"
    },
    {
        id: 4,
        value: "foure"
    },
    {
        id: 5,
        value: "five"
    },
    {
        id: 6,
        value: "six"
    },
    {
        id: 7,
        value: "seven"
    },
    {
        id: 8,
        value: "eight"
    },
];

const findInArray = (index, array) => {
    value1 = '';
    value1 = array.find((el) => {
        if (el.id == index) {
            el.value = "This is " + el.value + ' ' + el.id;
            return el;
        }
        return undefined;
    })

    console.log(value1)
}

console.log(array)
for (let i = 0; i <= 8; i += 2) {
    findInArray(i, array);
}

console.log(array)