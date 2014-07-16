$(document).ready(function(){

	//task DATA
	var taskName = '', // task name
		taskNum = '', //task number
		taskList = []; //task list
		
	//DOM SEL
	var taskNameInput = $('#task_name'),
		taskNumInput = $('#task_num'),
		taskListArea = $('#task_list');
		

	//DISPLAY LIST FUNCTION
	function displayList() {
	
		taskListArea.html(''); // blank out the list
	
		$.each(taskList, function(i, value){ //each iterates over all elements in the array one by one.
			
			taskListArea.append('<li>'+(i + 1)+'. <span class="name">'+value+'</span></li>'); //add back each name in the list.
			console.log(taskList[i]);
			
		});
		console.log('----------');
	
	}
	
	//EVENT ADD_task FORM SUBMIT 
	$('#add_task').submit(function(){
	
		taskName = taskNameInput.val(); //store the currently typed task name value
		
		$('#task_name').val(''); //clear input
		
		if(taskName !== ''){ //make sure field is not empty!
			
			taskList.push(taskName); //add taskname to the list array
			displayList();
		}
		
		return false; //stops form from processing (prevent page reload)
	});
	
	//EVENT REMOVE_task FORM SUBMIT 
	$('#remove_task').submit(function(){
	
		taskNum = taskNumInput.val(); //store the currently typed task number value
		taskNum = parseInt(taskNum); //covert to a number ot get NaN.
		
		$('#task_num').val(''); //clear input
		
		if(taskNum === '' || isNaN(taskNum)){ //check if its empty or not a number!
			
			alert('Must be a number wise guy!');

		} else {
		
			taskList.splice(taskNum - 1,1); //removes task from list array
			displayList();
		
		}
	
		return false; //stops form from processing (prevent page reload)
	});
	
	//Activate Sortable UI plugin
	taskListArea.sortable({
	
		update: function(){
			
			var arrCurLength = taskList.length; //gets current array length
			var replaceVal = ''; //create placeholder var
		
			for(i = 0; i < arrCurLength; i++){
				replaceVal = taskListArea.find('li').eq(i).find('.name').text(); //get the text from each list item.
				taskList[i] = replaceVal;
				console.log(taskList[i]);
			}
			console.log('----------');
			
			displayList();
		}
	
	});
	
});