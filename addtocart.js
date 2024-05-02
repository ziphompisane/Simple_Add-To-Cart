const product = [
    {
        id: 0,
        image: 'images/1.jpg',
        title: 'Kurhula',
        price: 12.25,
    },
    {
        id: 1,
        image: 'images/2.jpg',
        title: 'Amukelani',
        price: 16.50,
    },
   
    {
        id: 2,
        image: 'images/3.jpg',
        title: 'Ivy League',
        price: 19.99,
    },
   
    {
        id: 3,
        image: 'images/4.jpeg',
        title: 'Vultures',
        price: 50.99,
    },
   
    {
        id: 4,
        image: 'images/5.jpeg',
        title: 'For All The Dogs',
        price: 75.99,
    }
    ,
   
    {
        id: 5,
        image: 'images/6.jpeg',
        title: 'Her Loss',
        price: 45.99,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ ";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total;
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}
