// JavaScript Document

function newItem(){
	let li = $('<li></li>');
	let inputValue = $('#input').val();
	let text = document.createTextNode(inputValue);
	li.append(text);
	
	if (inputValue === '') {
		alert("You must write something!");
	} else {
		let list = $('#list');
		list.append(li);
	}
	
	function crossOut() {
		li.toggleClass('strike');
 	}

	li.on('dblclick', crossOut);	//Strikes the item on list out
	 
	let crossOutButton = $('<crossOutButton></crossOutButton>');
	crossOutButton.append(document.createTextNode('X'));
	li.append(crossOutButton);

	crossOutButton.on('click', deleteListItem);
	
	function deleteListItem(){
		li.addClass('delete')
	}
	
	$('#list').sortable();	//Ables to sort the list
}
