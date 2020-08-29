/* AJAX
    http://restclass.azurewebsites.net/api/points
    http verbs
    POST: recieve data
    GET: get info
    PUT: update some existing elements
    PATCH: update part of an existing element
    DELETE: remove any existing element
*/

//object constructor for the item
var c=1;
class Item {
    constructor(code, title, price, category, image) {
        this.code = code;
        this.title = title;
        this.price = price;
        this.category = category;
        this.image = image;
        this.user = "Michael";
        this.id=c;
        c++;
    }
}


function register(){
    //get values from the inputs
    //save values in variables
    //display the values on the console
    let code= $("#codeText").val();
    
    let title=$("#titleText").val();
    
    let price=$("#priceText").val();
    
    let category=$("#categoryText").val();
    
    let image=$("#imageText").val();
    
    var item= new Item(code, title, price, category, image);
    console.log(item);

    //create ajax request
    $.ajax({
        url:"http://restclass.azurewebsites.net/api/points",
        type: "POST",
        data:JSON.stringify(item),
        contentType: "application/json",
        success:function(response){
            console.log("We did it!", response);
        },
        error:function(e){
            console.log("Ouch!", e);
        }
    });

}


function init(){
    console.log("Admin Page");
    // add the click or press button events here
    // $(".btn-primary").click(register);
    $(".btn-primary").click(function(){
        if ($("#codeText").val() === "" || $("#titleText").val() === "" || $("#priceText").val() === "" || $("#categoryText").val() === ""){
            alert("Cannot leave input fields blank");
            return false;
        } else{
            register();
            $("#codeText").val("");
            $("#titleText").val("");
            $("#priceText").val("");
            $("#categoryText").val("");
            $("#imageText").val("");
        }
    }); 
}
window.onload=init;