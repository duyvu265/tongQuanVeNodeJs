const checkLicesePlaInHaNoi=(licenseolate)=>{
    const arr=['29','30','31','32','33','40'];
    for (const value of arr) {
        if (licenseolate.startsWith(value)){
            return true;
        }
    }return false;
}


const listLicensePlates = ["29P1-124123", "30L9-63568", "17B3-29013", "33H2-21231"];
let licesePlaInHaNoi=[];
for (const value of listLicensePlates) {
    if (checkLicesePlaInHaNoi(value)){
        licesePlaInHaNoi.push(value);
    }
}
console.log("Cac bien so xe cua Ha Noi :"+licesePlaInHaNoi)