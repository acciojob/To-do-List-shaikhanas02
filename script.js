//your code here
//your code here
const inp = document.getElementById('newTodoInput');
const btn = document.getElementById('addTodoBtn');
const arr = [];
const listBody = document.getElementById('todoList');

// add item to list on click function
function addItem() {

    let inpItem = inp.value;
    if (inpItem === '') {
        document.getElementById("p").innerHTML = "Input Compulsory";

    }else{
    arr.push(inpItem);
		
	}
   // console.log(arr);
    listBody.innerHTML = ''; 
    arr.map(function (inpItem) {
        listBody.innerHTML += `<li>${inpItem}</li>`
    })
    inp.value = '';
}
