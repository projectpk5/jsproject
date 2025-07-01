var dataObj = [
    {
        id: 1,
        img: "./images/apple.webp",
        name: "Apple",
        price: 100,
        desc: "Fresh Apples from local farm"
    },
    {
        id: 2,
        img: "./images/bread.png",
        name: "Bread",
        price: 25,
        desc: "Fresh bread from local bakery"
    },
    {
        id: 3,
        img: "./images/banana.webp",
        name: "Banana",
        price: 75,
        desc: "Fresh banans from local farm"
    },
    {
        id: 4,
        img: "./images/beetroot.webp",
        name: "Beetroot",
        price: 40,
        desc: "Fresh Beetroot from local farm"
    },
    {
        id: 5,
        img: "./images/yogurt.webp",
        name: "Yogurt",
        price: 25,
        desc: "Fresh yogurt from local farm"
    },
    {
        id: 6,
        img: "./images/cheese.webp",
        name: "Cheese",
        price: 50,
        desc: "Fresh cheese from local farm"
    },
    {
        id: 7,
        img: "./images/groundcoffee.png",
        name: "Ground Coffee",
        price: 200,
        desc: "Coffee Grounds from nearby"
    },
    {
        id: 8,
        img: "./images/chocolate.webp",
        name: "Chocolate",
        price: 20,
        desc: "Tasty chocolate for everyone!"
    },
    {
        id: 9,
        img: "./images/atta.jpg",
        name: "Atta",
        price: 150,
        desc: "Fresh Atta from the best farms of the world"
    },
    {
        id: 10,
        img: "./images/oreo.webp",
        name: "Oreo Cookies",
        price: 100,
        desc: "Your favorite cookies to dunk in milk"
    },
        {
        id: 11,
        img: "./images/dairy and bread.avif",
        name: "Daily and Bread",
        price: 120,
        desc: "Combo pack of Bread and Milk"
    },
        {
        id: 12,
        img: "./images/cornflakes.avif",
        name: "Corn Flakes",
        price: 170,
        desc: "Start your morning with Corn flakes"
    },
    {
        id: 13,
        img: "./images/lays.avif",
        name: "Lays",
        price: 20,
        desc: "Watch your favorite show with Lays chips! Eat all day!!!"
    },
    {
        id: 14,
        img: "./images/tea.webp",
        name: "Tea",
        price: 250,
        desc: "Refreshing tea from the best farms in the world"
    },
    {
        id: 15,
        img: "./images/tomatoes.webp",
        name: "Tomatoes",
        price: 80,
        desc: "Farm fresh tomaotes crushed just in time"
    },
    {
        id: 16,
        img: "./images/pineapple.webp",
        name: "Pineapple",
        price: 100,
        desc: "Tasty pineapples from local farm"
    },
        {
        id: 17,
        img: "./images/roastcoffee.webp",
        name: "Roast Coffee",
        price: 320,
        desc: "Roasted coffee from best selections"
    },
    {
        id: 18,
        img: "./images/haldiram.webp",
        name: "Savory Snack",
        price: 20,
        desc: "Tangy and Tasty savory snack"
    },
    {
        id: 19,
        img: "./images/popcorn.webp",
        name: "Popcorn",
        price: 20,
        desc: "Popcorn from the best corn"
    }
]

const visitHome = (event) => {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username == "hello" && password == "123") {
        window.location.href = "home.html"
    }
    else if (username.length == 0 && password.length == 0) {
        document.getElementById('passwordmessage').innerHTML = ""
    }
    else {
        document.getElementById('passwordmessage').innerHTML = "please check your login credentials"
    }

}

const register = () => {
    window.location.href = "register.html"
}

const displayItems = () => {
    var productList = ""
    dataObj.map(
        (value)=>{
            productList += 
            `
                <div class="col-lg-3">
                    <div class="card my-5">
                        <img src="${value.img}"
                        class = "img-thumbnail" alt="">
                        <div class="card-body">
                            <h3>${value.name}</h3>
                            <h4>${value.price}</h4>
                            <p>${value.desc}</p>
                            <button class="btn btn-primary" 
                            onclick = "addtoCart(${value.id})">
                            Add to Cart
                            </button>
                            <button class="btn btn-success" 
                            onclick = "addToWishlist(${value.id})">
                            Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            `
        }
    )
    document.getElementById("cardRow").innerHTML = productList
}

displayItems()

const searchFun = (event) => {
    event.preventDefault();
    
    var searchList = document.getElementById("searchString").value.toLowerCase();
    
    var matchList = dataObj.filter(
        (value) => value.name.toLowerCase().includes(searchList)
    )

    var matchListMap = ""
    matchList.map(
        (value) => {
            matchListMap += 
            `
                <div class="col-lg-6">
                    <div class="card my-5">
                        <img src="${value.img}" 
                        class = "img-fluid" alt="">
                        <div class="card-body">
                            <h3>${value.name}</h3>
                            <h4>${value.price}</h4>
                            <p>${value.desc}</p>
                            <button class="btn btn-primary" onclick = "addtoCart(${value.id})">Add to Cart</button>
                            <button class="btn btn-success">Add to Wishlist</button>
                        </div>
                    </div>
                </div>
            `
        })
    document.getElementById("searchRow").innerHTML = matchListMap

    if (searchList.length == 0) {
        document.getElementById("searchRow").innerHTML = ""

    }
}

displayItems()

const logoff = () => {
    window.location.href = "index.html"
}

var cartArray = []
var wishlistArray = []
var itemCartCount = 0
var wishlistCartCount = 0
var totalPrice = 0

const addtoCart = (productID) => {
    console.log(productID);
    itemCartCount++;
    
    var cartProducts = dataObj.find(
        (item) => item.id === productID
    )

    var itemAlreadyinCart = cartArray.find(
        (item) => item.id === productID
    )

    if (itemAlreadyinCart) {
        cartProducts.quantity++
        totalPrice += cartProducts.price
    } else {
        cartProducts.quantity = 1
        totalPrice += cartProducts.price
        cartArray.push(cartProducts)
    }
    
    displaycartItems(cartArray)
    // cartCount 
    document.getElementById("cartItems").innerHTML = "(" + Number(itemCartCount) + ")"

    document.getElementById("totalPrice").innerHTML = `Total: ${totalPrice}`
}

const displaycartItems = (cartData) => {
    var itemsList = ""
    cartData.map((item) => {
        itemsList += 
        `
            <tr>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.quantity}</td>
                <td>${item.price * item.quantity}</td>
                <td>
                    <button 
                    class="btn btn-danger"
                    onclick = "removeQty(${item.id})">
                        Remove
                    </button>
                </td>
            </tr>
        `
        })

    document.getElementById("tableRow").innerHTML = itemsList
}

const clearCart = () => {
    document.getElementById("tableRow").innerHTML = ""
    document.getElementById("cartItems").innerHTML = ""
    itemCartCount = 0
    cartArray = []
}

const removeQty = (productID) => {

    if (itemCartCount >= 0) {
        itemCartCount--;
    }

    var removeItemFromCart = cartArray.find(
        (item) => item.id === productID
    )
    
    if (removeItemFromCart.quantity > 1) {
        removeItemFromCart.quantity--
        totalPrice -= removeItemFromCart.price
    } else {
        // var removeItemEntry = cartArray.find( 
        //     (value) => 
        //     value.id === removeItemFromCart.id
        // )
        // var itemRemoval = cartArray.findIndex (
        //     (item) => item.id === removeItemEntry.id
        // )
        // if (itemRemoval > -1) {
        //     cartArray.splice(itemRemoval,1)
        //     totalPrice -= itemRemoval.price
        // }
        cartArray = cartArray.filter(
            (value) => value.id !== productID
        )
        totalPrice -= removeItemFromCart.price
    }
    
    displaycartItems(cartArray)

    document.getElementById("cartItems").innerHTML = "(" + Number(itemCartCount) + ")"
    document.getElementById("totalPrice").innerHTML = `Total: ${totalPrice}`
}

const addToWishlist = (productID) => {
    
    var wishlistID = dataObj.find(
        (value) => value.id === productID 
    )
    var wishlistExists = wishlistArray.some(
        (value) => value.id === wishlistID.id
    )
    if (!wishlistExists) {
        wishlistArray.push(wishlistID)
        wishlistCartCount++
    }
    
    document.getElementById("wishlistItems").innerHTML = "(" + Number(wishlistCartCount) + ")"
    displayWishlistItems(wishlistArray)
}

const displayWishlistItems = (wishlistData) => {
    var wishlist = ""
    wishlistData.map(
        (value) => {
            wishlist += 
            `
                <div class="col-lg-3">
                    <div class="card my-5">
                        <img src="${value.img}" 
                        class = "img-fluid" alt="">
                        <div class="card-body">
                            <h3>${value.name}</h3>
                            <h4>${value.price}</h4>
                            <p>${value.desc}</p>
                            <button class="btn btn-outline-danger"
                            onclick= "removeFromWishlist(${value.id})">
                            Remove
                            </button>
                        </div>
                    </div>
                </div>
            `
        }
    )
    document.getElementById("wishlistRow").innerHTML = wishlist
}

const removeFromWishlist = (productID) => {
    console.log(productID)
    
    var removeItemFromWishlist = wishlistArray.find(
        (item) => item.id === productID
    )

    // console.log(removeItemFromWishlist.id);
    
    wishlistArray = wishlistArray.filter(
        (value) => value.id !== productID
    )
    wishlistCartCount--;

    document.getElementById("wishlistItems").innerHTML = "(" + Number(wishlistCartCount) + ")"
    
    displayWishlistItems(wishlistArray)
}