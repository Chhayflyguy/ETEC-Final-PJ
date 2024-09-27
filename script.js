let btnShop = document.querySelector('#shop');
let order = document.querySelector('.box_order');
// console.log(order);
let btnclose = document.querySelector('#btnclose');
let btnCancel = document.querySelector('#btnCancel');
btnShop.addEventListener('click',function(){
    order.style.display = 'block';
})
btnclose.addEventListener('click',function(){
    // alert(123)
    order.style.display = 'none';
})
btnCancel.addEventListener('click',function(){
    // alert(123);
    order.style.display = 'none';
})

let shoesDiscount = [
    {
        image: './img/shoe/dis 2 (1).png',
        name: 'Blue Sea High',
        price: 75
    },
    {
        image: './img/shoe/dis 2 (2).png',
        name: 'Gray Mid',
        price: 75
    },
    {
        image: './img/shoe/dis 2 (3).png',
        name: 'Classy',
        price: 75
    },
    {
        image: './img/shoe/dis 2 (4).png',
        name: 'Snower',
        price: 75
    },
    {
        image: './img/shoe/dis 2 (5).png',
        name: 'Rainbow',
        price: 75
    },
    {
        image: './img/shoe/dis 2 (6).png',
        name: 'Pinker Bell',
        price: 75
    },
    {
        image: './img/shoe/dis 2 (7).png',
        name: 'Pring Hight',
        price: 75
    },
    {
        image: './img/shoe/dis 2 (8).png',
        name: 'Swring',
        price: 75
    },
    {
        image: '../img/shoe/dis1 (1).png',
        name: 'Snow',
        price: 75
    },
    {
        image: './img/shoe/dis1 (2).png',
        name: 'Croker',
        price: 75
    },
    {
        image: './img/shoe/dis1 (3).png',
        name: 'Night Mist',
        price: 75
    },
    {
        image: './img/shoe/dis1 (4).png',
        name: 'De Jordan',
        price: 75
    },
    {
        image: './img/shoe/dis1 (5).png',
        name: 'Pinking',
        price: 75
    },
    {
        image: './img/shoe/dis1 (6).png',
        name: 'Oranger',
        price: 75
    },
    {
        image: './img/shoe/dis1 (7).png',
        name: 'Stromie',
        price: 75
    },
    {
        image: './img/shoe/dis1 (8).png',
        name: 'Pinky',
        price: 75
    },
    {
        image: './img/shoe/popular (1).png',
        name: 'De Gray Low',
        price: 95
    },
    {
        image: './img/shoe/popular (2).png',
        name: 'Nature Sport',
        price: 95
    },
    {
        image: './img/shoe/popular (3).png',
        name: 'Dunk High',
        price: 95
    },
    {
        image: './img/shoe/popular (4).png',
        name: 'Mino High',
        price: 95
    },
    {
        image: './img/shoe/popular (5).png',
        name: 'Dark Moon',
        price: 95
    },
    {
        image: './img/shoe/popular (6).png',
        name: 'Hotties',
        price: 95
    },
    {
        image: './img/shoe/popular (7).png',
        name: 'Brownie',
        price: 95
    },
    {
        image: './img/shoe/popular (8).png',
        name: 'Lighter Bw',
        price: 95
    },
    {
        image: './img/shoe/dis 2 (1).png',
        name: 'Blue Sea High',
        price: 95
    },
    {
        image: './img/shoe/dis 2 (2).png',
        name: 'Gray Mid',
        price: 95
    },
    {
        image: './img/shoe/dis 2 (3).png',
        name: 'Classy',
        price: 95
    },
    {
        image: './img/shoe/dis 2 (4).png',
        name: 'Snower',
        price: 95
    },
    {
        image: './img/shoe/dis 2 (5).png',
        name: 'Rainbow',
        price: 95
    },
    {
        image: './img/shoe/dis 2 (6).png',
        name: 'Pinker Bell',
        price: 95
    },
    {
        image: './img/shoe/dis 2 (7).png',
        name: 'Pring Hight',
        price: 95
    },
    {
        image: './img/shoe/dis 2 (8).png',
        name: 'Swring',
        price: 95
    },
    {
        image: '../img/shoe/dis1 (1).png',
        name: 'Snow',
        price: 95
    },
    {
        image: './img/shoe/dis1 (2).png',
        name: 'Croker',
        price: 95
    },
    {
        image: './img/shoe/dis1 (3).png',
        name: 'Night Mist',
        price: 95
    },
    {
        image: './img/shoe/dis1 (4).png',
        name: 'De Jordan',
        price: 95
    },
    {
        image: './img/shoe/dis1 (5).png',
        name: 'Pinking',
        price: 95
    },
    {
        image: './img/shoe/dis1 (6).png',
        name: 'Oranger',
        price: 95
    },
    {
        image: './img/shoe/dis1 (7).png',
        name: 'Stromie',
        price: 95
    },
    {
        image: './img/shoe/dis1 (8).png',
        name: 'Pinky',
        price: 95
    },
    {
        image: './img/Pants/p1.png',
        name: 'De Gray Low',
        price: 95
    },
    {
        image: './img/Pants/p2.png',
        name: 'Nature Sport',
        price: 95
    },
    {
        image: './img/Pants/p3.png',
        name: 'Dunk High',
        price: 95
    },
    {
        image: './img/Pants/p4.png',
        name: 'Mino High',
        price: 95
    },
    {
        image: './img/Pants/p5.png',
        name: 'Dark Moon',
        price: 95
    },
    {
        image: './img/Pants/p6.png',
        name: 'Hotties',
        price: 95
    },
    {
        image: './img/Pants/p7.png',
        name: 'Brownie',
        price: 95
    },
    {
        image: './img/Pants/p8.png',
        name: 'Lighter Bw',
        price: 95
    },
    {
        image: './img/Pants/p9.png',
        name: 'Blue Sea High',
        price: 95
    },
    {
        image: './img/Pants/p10.png',
        name: 'Gray Mid',
        price: 95
    },
    {
        image: './img/Pants/p11.png',
        name: 'Classy',
        price: 95
    },
    {
        image: './img/Pants/p12.png',
        name: 'Snower',
        price: 95
    },
    {
        image: './img/Cloths/hoodie/hoodie (1).png',
        name: 'De Gray Low',
        price: 95
    },
    {
        image: './img/Cloths/hoodie/hoodie (2).png',
        name: 'Nature Sport',
        price: 95
    },
    {
        image: './img/Cloths/hoodie/hoodie (3).png',
        name: 'Dunk High',
        price: 95
    },
    {
        image: './img/Cloths/hoodie/hoodie (4).png',
        name: 'Brownie',
        price: 95
    },
    {
        image: './img/Cloths/hoodie/hoodie (5).png',
        name: 'Mino High',
        price: 95
    },
    {
        image: './img/Cloths/hoodie/hoodie (6).png',
        name: 'Dark Moon',
        price: 95
    },
    {
        image: './img/Cloths/hoodie/hoodie (7).png',
        name: 'Hotties',
        price: 95
    },
    {
        image: './img/Cloths/hoodie/hoodie.jpg',
        name: 'Lighter Bw',
        price: 95
    },
    {
        image: './img/Cloths/T-shirt/T-shirt (1).png',
        name: 'De Gray Low',
        price: 95
    },
    {
        image: './img/Cloths/T-shirt/T-shirt (2).png',
        name: 'Nature Sport',
        price: 95
    },
    {
        image: './img/Cloths/T-shirt/T-shirt (3).png',
        name: 'Dunk High',
        price: 95
    },
    {
        image: './img/Cloths/T-shirt/T-shirt (4).png',
        name: 'Brownie',
        price: 95
    },
    {
        image: './img/Cloths/T-shirt/T-shirt (5).png',
        name: 'Mino High',
        price: 95
    },
    {
        image: './img/Cloths/T-shirt/T-shirt (6).png',
        name: 'Dark Moon',
        price: 95
    },
    {
        image: './img/Cloths/T-shirt/T-shirt (7).png',
        name: 'Hotties',
        price: 95
    },
    {
        image: './img/Cloths/T-shirt/T-shirt (8).png',
        name: 'Lighter Bw',
        price: 95
    }
];









let bottonsDis = `<button type="button" class="btn btn-danger rounded-pill" id="add_card_dis"> <i class="fa-solid fa-cart-plus"></i>  Add Cart</button>`;



function showProduct(items, sectionId,btn){

    const section = document.getElementById(sectionId);
    section.innerHTML = ''; // Clear previous content

    // let getItem = '';
    items.forEach(el => {
        // console.log(el.image);
        section.innerHTML +=`
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ">
        <div class="card img-thumbnail shoe">
          <div class="card-top position-relative">
            <img src="${el.image}" class="img-fluid" alt="">
        
          </div>
          <div class="card-body text-center">
            <h3 class="text-dark fw-bold">${el.name}</h3>
            <h4 class="text-danger">${el.price}.00 $</h4>
            <p>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star-half-stroke text-warning"></i>
              <i class="fa-solid fa-star"></i>
            </p>
            ${btn}
          </div>
          
        </div>
      </div>
        `;
        
    });
    
    addcart();
    
}



showProduct(shoesDiscount,'shoeDis', bottonsDis);



let a = 0;
let count = document.getElementById('countt')

function addcart(){
    let btnadd = document.querySelectorAll('#add_card_dis');
    console.log(btnadd);
    
    let getCard = '';
    let total = 0;

    

    btnadd.forEach((el,i)=>{
        
    el.addEventListener('click',function(){
        a = a+1;
            // console.log(a)
            // console.log(count);
            
        total = total + shoesDiscount[i].price;
            
        count.innerHTML=a;
        
        getCard +=`
            <div class="col-10">
                <div class="row d-flex align-items-center">
                    <div class="col-4">
                        <img src="${shoesDiscount[i].image}" alt="" class="w-100 img-thumbnail">
                    </div>
                    <div class="col-5">
                        <h6 class="text-start">${shoesDiscount[i].name}</h6>
                    </div>
                    <div class="col-3">
                        <h6>${shoesDiscount[i].price}.00$</h6>
                    </div>
                </div>
            </div>
            <div class="col-2 d-flex align-items-center">
                <button type="button" class="btn" ><i class="fa-solid fa-trash-can fs-5"></i></button>
            </div>

            
        
        `;
        document.querySelector('#row_card').innerHTML = getCard;
        document.querySelector('.total').innerHTML = total + ".00$";
    })
    
    
})


}

addcart();


function pay(){
    alert(`Thank You.`)
}




function searchProducts() {
    const searchInput = document.getElementById('searchbarpro').value.toLowerCase();
    const filteredProducts = shoesDiscount.filter(product =>
        product.name.toLowerCase().includes(searchInput)
    );

    showProduct(filteredProducts, 'shoeDis', bottonsDis); // Update display
}

// Add event listener to the search input
document.getElementById('searchbarpro').addEventListener('input', searchProducts);

// Initially show all products
showProduct(shoesDiscount, 'shoeDis', bottonsDis);



