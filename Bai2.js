let StudenList =  [
    {
        name: "Ha",
        gender: 'female',
        poin: 8
    },
    {
        name: "Huy",
        gender: 'male',
        poin: 9
    },
    {
        name: "Hung",
        gender: 'male',
        poin: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        poin: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        poin: 10
    },
    {
        name: "Long",
        gender: 'male',
        poin: 5
    },
    {
        name: "Luan",
        gender: 'male',
        poin: 10
    },
    {
        name: "Linh",
        gender: 'female',
        poin: 8
    }

];
let sumMale=0;
let sumFemale=0;
let countFemale=0;
let countMale=0;
StudenList.filter((value, index, array) => {
    if (value.gender==='male'){
        countMale++
        sumMale+=value.poin
    }else {
        countFemale++;
        sumFemale+=value.poin;
    }
})

let DtbMale=sumMale/countMale;
console.log(`Diem tb cua nam la :`+DtbMale);
let DtbFemale=sumFemale/countFemale;
console.log(`Diem tb cua nu la :`+DtbFemale);
