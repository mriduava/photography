// PRODUCTS

let photos = [
  {
    id: '1',
    title: 'i Phone',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_1.jpg',
    categories: 'Undefined',
    price: 199
  },
  {
    id: '2',
    title: 'Galaxy',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_2.jpg',
    categories: 'Science',
    price: 229
  },
  {
    id: '3',
    title: 'Rainbow',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_3.jpg',
    categories: 'Nature',
    price: 109
  },
  {
    id: '4',
    title: 'Tulip',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_4.jpg',
    categories: 'Flower',
    price: 390
  },
  {
    id: '5',
    title: 'Orange Flowers',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_5.jpg',
    categories: 'Flower',
    price: 490
  },
  {
    id: '6',
    title: 'Abstract',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_6.jpg',
    categories: 'Undefined',
    price: 245
  },
  {
    id: '7',
    title: 'Record Player',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_7.jpg',
    categories: 'Undefined',
    price: 235
  },
  {
    id: '8',
    title: 'Butterfly',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_8.jpg',
    categories: 'Nature',
    price: 539
  },
  {
    id: '9',
    title: 'Flower Vase',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_9.jpg',
    categories: 'Undefined',
    price: 129
  },
  {
    id: '10',
    title: 'Teddy Bear',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_10.jpg',
    categories: 'Toys',
    price: 099
  },
  {
    id: '11',
    title: 'Blue Cloud',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_11.jpg',
    categories: 'Landscape',
    price: 310
  },
  {
    id: '12',
    title: 'Golden Bridge',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_12.jpg',
    categories: 'Landscape',
    price: 290
  },
  {
    id: '13',
    title: 'Rubber Animals',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_13.jpg',
    categories: 'Toys',
    price: 119
  },
  {
    id: '14',
    title: 'Dolphin',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_14.jpg',
    categories: 'Nature',
    price: 490
  },
  {
    id: '15',
    title: 'Astronaut',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_15.jpg',
    categories: 'Science',
    price: 519
  },
  {
    id: '16',
    title: 'Domestic Goose',
    desc: 'It is a long established fact that a reader will be distracted.',
    image: 'images/photo_16.jpg',
    categories: 'Nature',
    price: 333
  }  
];

$(()=>{
  // TO DISPLAY PRODUCTS
function dispProducts(products){
    products.forEach(function(items){
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

dispProducts(photos); 
btnClick(); 

// SORT BY PRICE
$('#sortitems').on('change', function(){
  let opt = $(this).val();
  if(opt === 'low'){   
    let lowToHigh = photos.sort(function(a,b){
      return a.price - b.price;
    })  
    $('#showproducts').html(''); 
    dispProducts(lowToHigh); 
    btnClick();     
  }else if(opt === 'high'){
    let highToLow = photos.sort(function(a,b){
      return b.price - a.price;
    })  
    $('#showproducts').html('');  
    dispProducts(highToLow); 
    btnClick();  
  }else if(opt === 'unsort'){
    $('#showproducts').html('');  
    dispProducts(photos); 
    btnClick();  
  }
});

// SORT BY CATEGORIES
$('#flowers').on('click', function(){
  const flowerDisp = photos.filter(photo=>photo.categories === 'Flower');
  $('#showproducts').html(''); 
  dispProducts(flowerDisp)
  btnClick(); 
});

$('#science').on('click', function(){
  const scienceDisp = photos.filter(photo=>photo.categories === 'Science');
  $('#showproducts').html(''); 
  dispProducts(scienceDisp)
  btnClick(); 
});

$('#landscape').on('click', function(){
  const landDisp = photos.filter(photo=>photo.categories === 'Landscape');
  $('#showproducts').html(''); 
  dispProducts(landDisp)
  btnClick();
});

$('#nature').on('click', function(){
  const natDisp = photos.filter(photo=>photo.categories === 'Nature');
  $('#showproducts').html(''); 
  dispProducts(natDisp)
  btnClick();
});

$('#toys').on('click', function(){
  const toysDisp = photos.filter(photo=>photo.categories === 'Toys');
  $('#showproducts').html(''); 
  dispProducts(toysDisp)
  btnClick();
});

$('#undefined').on('click', function(){
  const undDisp = photos.filter(photo=>photo.categories === 'Undefined');
  $('#showproducts').html(''); 
  dispProducts(undDisp)
  btnClick();
});

// SEARCH

// ADD TO SHOPPING CART
let cartarray = [];

function addToCart(buybooks){
  let list = `<div class="row nlist">
                  <div class="col-2">                         
                    <button  type="button" class="btn btn-outline-danger btn-sm px-2 crossbtn"><i class="far fa-times-circle"></i></button> 
                  </div>  
                  <div class="col-10 d-flex justify-content-between">                                      
                    <h5 class="px-1 text-warning">${buybooks.title}</h5>
                    <h5 class="pl-4 text-dark">${buybooks.price} kr</h5>                  
                  </div>                    
              </div>`;                        
  $('#cart').append(list);                 
}

//  TO DELETE FROM THE ARRAY
function removeItem(cartarray, deleteitem){
    cartarray.splice(deleteitem, 1);
}

function btnClick(){
  $('button').on('click', function(){
    let btnid = $(this).attr('id');
    photos.map(function(items){
        if(btnid === items.id){
            addToCart(items);
            cartarray.push(items);
        }
    });
    $('.itemsnum').text(cartarray.length); 
    $('#total-price').text(totalPrice)
  });
};

// TO REMOVE ITEM FROM CARTLSIT
$('#cart').on('click', 'button', function(e){
    let deleteItem = $(this).closest('.row').remove();
    removeItem(cartarray, deleteItem);
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

// STICKY NAVBAR
window.onscroll = function(){
    stickyNav();
};
let navContainer = document.querySelector("#sticky");
let sticky = navContainer.offsetTop;

function stickyNav() {
    if (window.pageYOffset > sticky) {
      navContainer.classList.add("sticky")
    } else {
      navContainer.classList.remove("sticky");
    }
  }
});