function init(){
    console.log("Admin Page");
    // add the click or press button events here
    $(".btn-primary").click(register);
}
window.onload=init;

function register(){
    //get values from the inputs
    //save values in variables
    //display the values on the console
    let code= $("#codeText").val();
    console.log(code);
    let title=$("#titleText").val();
    console.log(title);
    let price=$("#priceText").val();
    console.log(price);
    let category=$("#categoryText").val();
    console.log(category);
    let image=$("#imageText").val();
    console.log(image);
}