'use-strict';

describe('Validating User Input', function() {
  beforeEach(function() {
    setFixtures('<div id="wrapper"><h1>my to do list</h1>  <form id="add_task" action="#" method="post"><label for="task_name">Add a new task:</label><input type="text" id="task_name" name="task_name" placeholder="taskname"><input type="submit" value="(+) add"></form><!-- #add_task --><form id="remove_task" action="#" method="post"><label for="task_num">Remove task:</label><input type="text" id="task_num" name="task_num" placeholder="number"><input type="submit" value="(-) remove"></form><!-- #remove_task --><ul id="task_list"></ul><!-- #task_list --></div><!-- #wrapper -->');

    // displayList();
    // $('form').submit(function(e){ e.preventDefault(); });
    // var taskName = '', // task name
    //     taskNum = '', //task number
    //     taskList = []; //task list
        
    // //DOM SEL
    // var taskNameInput = $('#task_name'),
    //     taskNumInput = $('#task_num'),
    //     taskListArea = $('#task_list');
        

    // //DISPLAY LIST FUNCTION
    // function displayList() {
    
    //     taskListArea.html(''); // blank out the list
    
    //     $.each(taskList, function(i, value){ //each iterates over all elements in the array one by one.
            
    //         taskListArea.append('<li>'+(i + 1)+'. <span class="name">'+value+'</span></li>'); //add back each name in the list.
    //         console.log(taskList[i]);
            
    //     });
    //     console.log('----------');
    
    // }
    
    // //EVENT ADD_task FORM SUBMIT 
    // $('#add_task').submit(function(){
    
    //     taskName = taskNameInput.val(); //store the currently typed task name value
        
    //     $('#task_name').val(''); //clear input
        
    //     if(taskName !== ''){ //make sure field is not empty!
            
    //         taskList.push(taskName); //add taskname to the list array
    //         displayList();
    //     }
        
    //     return false; //stops form from processing (prevent page reload)
    // });
  });

  it('#add_task should add a task to ul#task_list', function() {
    $('#task_name').val('buy groceries');
    //$('input[type="submit"]').last().click();
    $('#add_task').submit();
    debugger;
    expect($('#task_list').children().first().text()).toBe('1. buy groceries');
  });

});