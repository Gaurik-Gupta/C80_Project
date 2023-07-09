var groceries = [];

function submit() {
    var groceryName = document.getElementById("list_item").value;
    var add_space = groceries.join(", ");
    console.log(add_space);
    var list = document.getElementById("list_txt").innerHTML = add_space;
    groceries.push(groceryName);
    console.log(groceryName);
    console.log(groceries);
    var length_of_item = groceries.length;
    console.log(length_of_item);
    list =  groceries.toString();
}
