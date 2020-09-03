//Global array
let catalog = [];
let categories=[];
console.log(categories);
function fetchData(){
//     //get data from the server
//     //use an object literal
//     catalog=[
//         {code:"001",
//         title:"Computer",
//         price:2500.00,
//         category:"Electronics",
//         image:"https://i.insider.com/5dc34a417eece560261791ac?width=1100&format=jpeg&auto=webp"
//         },
//         {code:"002",
//         title:"Iphone 11",
//         price:1000.00,
//         category:"Phones",
//         image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-purple-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1566960958082"
//         },
//         {code:"003",
//         title:"Samsung TV",
//         price:1500.00,
//         category:"Electronics",
//         image:"https://rukminim1.flixcart.com/image/352/352/k1fbmvk0pkrrdj/television-refurbished/z/h/v/u-ua43nu6100kxxl-ua43nu6100klxl-a-samsung-original-imafjmyxejztt58g.jpeg?q=70"
//         }
//     ]


    $.ajax({
        url:"http://restclass.azurewebsites.net/api/points",
        type: "GET",
        success:function(allitems){
            //travel the array
            //check user
            //push my items into the array
            for(let i=0;i<allitems.length;i++){
                let item=allitems[i];
                if(item.user === "Michael"){
                catalog.push(item);
                categories.push(item.category);
            }
        }
            displayCatalog();
            // displayCategories();
        },
        error:function(details){
            console.log("Error getting data", details);
        }
    });
    //other instructions go here if needed
}
function displayCategories(){
    //travel array
    //get each cat from array
    //create syntax for li
    //append the syntax to the #categories
    // for(let i=0;i<categories.length;i++){
    //     let item=categories[i];
    //     console.log(item);
        let syntax=`
        <li id="gaming">Gaming</li>
        <li id="phones">Phones</li>
        <li id="electronics">Electronics</li>
        <li id="apparel">Apparel</li>`;
        $("#categories").append(syntax);
    //}
}



function displayCatalog(){
    //travel the array of items with for loop
    for(let i=0;i<catalog.length;i++){
    let item=catalog[i]; //This will give us the item from the catalog
    console.log(item);
    //get each item
    drawItem(item);
    }
}
function drawItem(item){
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
    $(".catalog").append(syntax);
    //display the items on the HTML
}

function catSearch(){
    $("#gaming").click(function(){
        $(".catalog").html("");
        for(var i=0;i<catalog.length;i++){
            var selected=catalog[i];
            if(selected.category === "Gaming"){
                drawItem(selected); 
                console.log(selected);
            }
        }
    });
    $("#phones").click(function(){
        $(".catalog").html("");
        for(var i=0;i<catalog.length;i++){
            var selected=catalog[i];
            if(selected.category === "Phones"){
                drawItem(selected); 
                console.log(selected);
            }
        }
    });
    $("#electronics").click(function(){
        $(".catalog").html("");
        for(var i=0;i<catalog.length;i++){
            var selected=catalog[i];
            if(selected.category === "Electronics"){
                drawItem(selected); 
                console.log(selected);
            }
        }
    });
    $("#apparel").click(function(){
        $(".catalog").html("");
        for(var i=0;i<catalog.length;i++){
            var selected=catalog[i];
            if(selected.category === "Apparel"){
                drawItem(selected); 
                console.log(selected);
            }
        }
    });
}

function search(){
    $("#searchButton").click(function(){
        var ss= $("#searchText").val(); // val = value
        var stringSearch = ss.toLowerCase();
        console.log(stringSearch);
        $(".catalog").html("");
        for(var i=0;i<catalog.length;i++){
            var selected=catalog[i];
            if(selected.category.toLowerCase().includes(stringSearch) || selected.title.toLowerCase().includes(stringSearch) || selected.code.toLowerCase().includes(stringSearch)){
               drawItem(selected);  
                // $(`${selected.title}`).show(); 
                   
                console.log(`Id #${selected.id}, ${selected.title}, is in the database`);
                $("#searchText").val("");
            }else{
                $("#searchText").val("");
            }
        }
    });
}


function initCatalog(){
    console.log("Catalog Page");
    fetchData();
    displayCatalog();
    displayCategories();
    search();
    catSearch();
    $("#searchText").keypress(function(e){
        if(e.key === "Enter"){
            $("#searchButton").click();
        }
    });

}
window.onload=initCatalog;
