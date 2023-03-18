const product = [
    {
        id: 0,
        image: 'idly.jpg',
        title: 'Idly',
        price: 40,
    },
    {
        id: 1,
        image: 'Dosa.jpg',
        title: 'Dosa',
        price: 60,
    },
    {
        id: 2,
        image: 'aloo.jfif',
        title: 'Paratha',
        price: 80,
    },
    {
        id: 3,
        image: 'poori.jfif',
        title: 'Poori',
        price: 50,
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
        <h2>Rs. ${price}.00</h2>`+
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
        document.getElementById("total").innerHTML = "Rs. "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Rs. "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>Rs. ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}

let rollnum = prompt("Please enter your roll number");
function sendEmail(argument) {
    Email.send({
        SecureToken: "04a4eb0d-c9bc-40b3-9153-2a4f1e242f50",
        To: 'saitejapalegarthuli@gmail.com',
        From: "saitejapalegarthuli4@gmail.com",
        Subject: document.getElementById("total").innerHTML + "  " + "Roll : " + rollnum,
        Body: document.getElementById("cartItem").innerHTML ,
    }).then(
        message => alert("Your order was placed")
    );
}