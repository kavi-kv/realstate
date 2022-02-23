//?: Card and containers
const container = document.querySelector(".card-grid")
const card_shadow = document.querySelector(".card card-shadow")
const mobile_nav = document.querySelector(".mobile-nav")

//?: Buttons
const both_btn = document.querySelector(".card-footer");
const button = document.querySelector(".nav-btn");
const btn_details = document.querySelectorAll(".contact, #close");
const seller_contact = document.querySelectorAll(".btn-outline")
const detail_contact = document.querySelectorAll(".contact")
const close_btn = document.querySelector('.close')


// navlinks
const projects = document.querySelector('.project')

projects.addEventListener('click',()=> {
    Swal.fire('Page kan hada diyar ma ahan, Sorry!')
})
//

//?: Toggle....
button.addEventListener('click', function () {
    button.classList.toggle("is-active");
    mobile_nav.classList.toggle("is-active");
})

//?: Animation Popup....
seller_contact.forEach( (cn)=> {
    cn.classList.contains("btn-outline")?cn.addEventListener('click', ()=>{
        swal.fire({
            icon: 'error',
            title: '...🙏...',
            text: 'Wanka xunahay wll adeegan hada diyaar mahan!',
            footer: '<a href="">Goorme laga yaaba in uu shaqeyo adegan?</a>'
    })
    }):cn.addEventListener('click', ()=>{
        swal.fire({
            icon: 'error',
            title: '...🙏...',
            text: 'Wanka xunahay wll adeegan hada diyaar mahan!',
            footer: '<a href="">Goorme laga yaaba in uu shaqeyo adegan?</a>'
    })
    })
})
//*:

const close = document.getElementById('close');
const modal = document.getElementById('modal_container');


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

// btn_details.forEach((value)=> {
//     value.classList.contains('contact')?value.addEventListener('click', ()=>{
//         modal.classList.add('show');
//     }):value.addEventListener('click', ()=>{
//         modal.classList.remove('show')
//     })
// })
// function that distrcutured items and displays


const displayDetails = (e) => {
    hs_details.map((item, index) => {
        const {
            type_1
        } = item.types
        
        const {
            city_1
        } = item.cities
        const {
            address_1
        } = item.addresses
        const {price_1} = item.prices

        displayMyItems(type_1, city_1,address_1,price_1)
    })
}
const displayDetail_2 = (e) => {
    hs_details.map((item, index) => {
        const {
            type_2
        } = item.types
        
        const {
            city_2
        } = item.cities
        const {
            address_2
        } = item.addresses
        const {price_2} = item.prices

        dis2(type_2, city_2,address_2,price_2)
    })
}
const displayDetail_3 = (e) => {
    hs_details.map((item, index) => {
        const {
            type_3
        } = item.types
        
        const {
            city_3
        } = item.cities
        const {
            address_3
        } = item.addresses
        const {price_3} = item.prices

        dis3(type_3, city_3,address_3,price_3)
    })
}
const displayDetail_4 = (e) => {
    hs_details.map((item, index) => {
        const {
            type_4
        } = item.types
        
        const {
            city_4
        } = item.cities
        const {
            address_4
        } = item.addresses
        const {price_4} = item.prices

        dis4(type_4, city_4,address_4,price_4)
    })
}



detail_contact.forEach((button,index)=>{
    if (button.classList.contains('c-1')){
        button.addEventListener('click',displayDetails)
    }
    else if  (button.classList.contains('c-2')){
        button.addEventListener('click',displayDetail_2)
    }
    else if(button.classList.contains('c-3')){
        button.addEventListener('click', displayDetail_3)
    }
    else {
        button.addEventListener('click', displayDetail_4)
    }
})

const new_model = document.querySelector('.modal')
// function diplayitems in the modal popup
function displayMyItems(type_1,city_1,address_1,price_1) {

    // diplaying modal
    new_model.innerHTML=`
    <div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Detials</h5>
        <button type="button" class="close_x" data-dismiss="modal" aria-label="Close_btn">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
    <p>Type: ${ type_1} </p>
    <p>City: ${ city_1}</p>
    <p>Address: ${ address_1}</p>
    <p>Price: ${ price_1} </p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        </div>
    </div>
    `
    }

function dis2(type_2,city_2,address_2,price_2) {

        // diplaying modal
    new_model.innerHTML=`
    <div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Detials</h5>
        <button type="button" class="close_x" data-dismiss="modal" aria-label="Close_btn">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
    <p>Type: ${ type_2} </p>
    <p>City: ${ city_2}</p>
    <p>Address: ${ address_2}</p>
    <p>Price: ${ price_2} </p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        </div>
    </div>
    `
        }

function dis3(type_3,city_3,address_3,price_3) {

    // diplaying modal
    new_model.innerHTML=`
    <div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="Detials" id="exampleModalLabel">Detials</h5>
        <button type="button" class="close_x" data-dismiss="modal" aria-label="Close_btn">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
    <p>Type: ${ type_3} </p>
    <p>City: ${ city_3}</p>
    <p>Address: ${ address_3}</p>
    <p>Price: ${ price_3} </p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    </div>
    </div>
    </div>
`
    }

function dis4(type_4,city_4,address_4,price_4) {

    // diplaying modal
    new_model.innerHTML=`
    <div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="Detials" id="exampleModalLabel">Detials</h5>
        <button type="button" class="close_x" data-dismiss="modal" aria-label="Close_btn">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
    <p>Type: ${ type_4} </p>
    <p>City: ${ city_4}</p>
    <p>Address: ${ address_4}</p>
    <p>Price: ${ price_4} </p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    </div>
    </div>
    </div>
`
    }



// 
