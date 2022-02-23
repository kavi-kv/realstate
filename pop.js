const btn = document.querySelector('.btn-cl');
const container = document.querySelector('.container');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');

const hs_details = [{
    types: {
        type_1: "Dabaq 1 biyano",
        type_2: "Dabaq 2 biyano",
        type_3: "Dabaq 3 biyano",
        type_4: "Filo"
    },
    cities: {
        city_1: "Bosaso",
        city_2: "Muqdisho",
        city_3: "Kismayo",
        city_4: "Garowe"
    },
    addresses: {
        address_1: "Bt 6252 street",
        address_2: "Bn 5352 main street",
        address_3: "Jb e7232 hs",
        address_4: "Bt 33223 minar"
    },
    prices: {
        price_1: "$60,000 - $85,000",
        price_2: "$100,000 - $180,000",
        price_3: "$210,000 - $300,000",
        price_4: "Unspecified"
    }
}]






btn.addEventListener('click', displayDetails)




// mapping
// details.map((item,index)=>{
//     console.log(item.type_1)
// })