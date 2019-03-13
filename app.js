// PRODUCTS

let photos = [
  {
    id: 1,
    title: 'i Phone',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_1.jpg',
    categories: 'Electronics',
    price: 199
  },
  {
    id: 2,
    title: 'Galaxy',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_2.jpg',
    categories: 'Science',
    price: 229
  },
  {
    id: 3,
    title: 'Astronaut',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_3.jpg',
    categories: 'Science',
    price: 109
  },
  {
    id: 4,
    title: 'Tulip',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_4.jpg',
    categories: 'Flower',
    price: 390
  },
  {
    id: 5,
    title: 'Orange Flowers',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_5.jpg',
    categories: 'Flower',
    price: 490
  },
  {
    id: 6,
    title: 'Abstract',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_6.jpg',
    categories: 'Flower',
    price: 245
  },
  {
    id: 7,
    title: 'Rubber Toys',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_12.jpg',
    categories: 'Toys',
    price: 235
  },
  {
    id: 8,
    title: 'Record Player',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_7.jpg',
    categories: 'Unknown',
    price: 539
  },
  {
    id: 9,
    title: 'Butterfly',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_8.jpg',
    categories: 'Nature',
    price: 129
  },
  {
    id: 10,
    title: 'Flower Vase',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_9.jpg',
    categories: 'Decoration',
    price: 099
  },
  {
    id: 11,
    title: 'Teddy Bear',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_10.jpg',
    categories: 'Toys',
    price: 290
  },
  {
    id: 12,
    title: 'Rubber Animals',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_11.jpg',
    categories: 'Toys',
    price: 119
  }
];

$(()=>{
  // TO DISPLAY PRODUCTS
function dispProducts(products){
    products.map(function(items){
      let productshow = `<div id="productShow" class="col-lg-3 col-md-4 mb-4">
                        <div class="card">
                            <div class="bg-img">
                              <img class="card-img-top w-100" style="height: auto;" src="${items.image}">              
                            </div>
                          <div class="card-body bg-light">
                                <h4 class="font-weight-bold text-center text-info py-2">${items.title}</h4>
                            <hr>
                            <h5 class="text-secondary"> Categories: ${items.categories}</h5>
                            <p class="dark-grey-text mt-4">
                              ${items.desc}
                            </p>
                            <p class="dark-grey-text mt-4">
                              Price: ${items.price} Kr
                            </p>
                            <button id="${items.id}" type="button" class="btn btn-sm btn-outline-primary buybtn ml-0 px-5" style="position: relative; display: inline;">BUY</button>
                          </div>
                        </div>
                      </div>`;      
      $('#showproducts').append(productshow);
    });
}

// SORT BY PRICE
dispProducts(photos); 
  
$('#sortitems').on('change', function(){
  let opt = $(this).val();
//    console.log(opt);
  if(opt === 'low'){   
    let lowToHigh = photos.sort(function(a,b){
      return a.price - b.price;
    })  
    $('#showproducts').html(''); 
    dispProducts(lowToHigh);      
  }else if(opt === 'high'){
    let highToLow = photos.sort(function(a,b){
      return b.price - a.price;
    })  
    $('#showproducts').html('');  
    dispProducts(highToLow);  
  }else if(opt === 'unsort'){
    $('#showproducts').html('');  
    dispProducts(photos); 
  }
});

// SORT BY CATEGORIES
$('#science').on('click', function(){
  const scienceDisp = photos.filter(photo=>photo.categories === 'Science');
  // console.log(scienceDisp);
  $('#showproducts').html(''); 
  dispProducts(scienceDisp)
});

$('#flowers').on('click', function(){
  const flowerDisp = photos.filter(photo=>photo.categories === 'Flower');
  // console.log(scienceDisp);
  $('#showproducts').html(''); 
  dispProducts(flowerDisp)
});

$('#toys').on('click', function(){
  const toysDisp = photos.filter(photo=>photo.categories === 'Toys');
  // console.log(scienceDisp);
  $('#showproducts').html(''); 
  dispProducts(toysDisp)
});


let cartarray = [];
  // ADD TO SHOPPING CART
function addToCart(buybooks){
  let list = `<div class="row">
                  <div class="col-lg-2">                         
                    <button  type="button" class="btn btn-outline-danger btn-sm px-2 crossbtn"><i class="far fa-times-circle"></i></button> 
                  </div>  
                  <div class="col-lg-10 d-flex justify-content-between">                                      
                    <h5 class="px-3 text-warning">${buybooks.title}</h5>
                    <h5 class="pl-4 text-dark">${buybooks.price} kr</h5>                  
                  </div>                    
              </div>`;                        
  $('#cart').append(list);                 
}

//  TO DELETE FROM THE ARRAY
function removeItem(cartarray, deleteitem){
    cartarray.splice(deleteitem, 1);
}


$('#showproducts div .card .card-body .buybtn').on('click', function(e){
  let btnid = $(this).attr('id');
  // console.log(+btnid);
  photos.forEach(function(items){
      if(+btnid === items.id){
          addToCart(items);
          cartarray.push(items);
      }
  });
  $('.itemsnum').text(cartarray.length); 
  $('#total-price').text(totalPrice)
});

// TO REMOVE ITEM FROM CARTLSIT
$('#cart').on('click', 'button', function(e){
    $(this).closest('.row').remove();
    removeItem(cartarray);
    $('.itemsnum').text(cartarray.length);     
    $('#total-price').text(totalPrice)    
});


// TO CALCULATE PRICE
function totalPrice(){
  let total = 0;
     cartarray.forEach(function(book){ 
    total += book.price;   
  })
  return total + ' Kr';
}

// ANOTHER WAY TO CALCULATE
// ------------------------
// let cartArrayPrice = [];
// cartarray.forEach(function(book){ 
//   cartArrayPrice.push(book.price);   
// });

// let totalPrice = cartArrayPrice.reduce((acc, sum)=>acc + sum, 0);




// STICKY NAVBAR
window.onscroll = function(){
    stickyNav();
};
let navContainer = document.querySelector("#sticky");
let sticky = navContainer.offsetTop;
// console.log(sticky);

function stickyNav() {
    if (window.pageYOffset > sticky) {
        // console.log(pageYOffset);
      navContainer.classList.add("sticky")
    } else {
      navContainer.classList.remove("sticky");
    }
  }

});


