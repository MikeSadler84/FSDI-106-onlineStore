//Global array
let catalog = [];

function fetchData(){
    //get data from the server
    //use an object literal
    catalog=[
        {code:"001",
        title:"Computer",
        price:2500.00,
        category:"Electronics",
        image:"https://i.insider.com/5dc34a417eece560261791ac?width=1100&format=jpeg&auto=webp"
        },
        {code:"002",
        title:"Iphone 11",
        price:1000.00,
        category:"Phones",
        image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-purple-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1566960958082"
        },
        {code:"003",
        title:"Samsung TV",
        price:1500.00,
        category:"Electronics",
        image:"https://rukminim1.flixcart.com/image/352/352/k1fbmvk0pkrrdj/television-refurbished/z/h/v/u-ua43nu6100kxxl-ua43nu6100klxl-a-samsung-original-imafjmyxejztt58g.jpeg?q=70"
        }
    ]
}

function displayCatalog(){
    //travel the array of items with for loop
    for(let i=0;i<catalog.length;i++){
    let item=catalog[i]; //This will give us the item from the catalog
    console.log(item);
    //get each item
    let syntax=`
    <div class="item">
    <p>${item.code}</p>
    <p>${item.title}</p>
    <p class="itemPrice">$${item.price}</p>
    <p>${item.category}</p>
    <img src= ${item.image}>
    <button class="btn btn-primary">Add to Cart</button>
    </div>
    `;
    $(".catalog").append(syntax)
    //display the items on the HTML
    }
}

function init(){
    console.log("Catalog Page");
    fetchData();
    displayCatalog();
}
window.onload=init;