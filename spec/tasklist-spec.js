'use-strict';

describe('Adding and Removing Tasks', function() {
  beforeEach(function() {
    setFixtures('<div id="wrapper"><h1>my to do list</h1>  <form id="add_task" action="#" method="post"><label for="task_name">Add a new task:</label><input type="text" id="task_name" name="task_name" placeholder="taskname"><input type="submit" value="(+) add"></form><!-- #add_task --><form id="remove_task" action="#" method="post"><label for="task_num">Remove task:</label><input type="text" id="task_num" name="task_num" placeholder="number"><input type="submit" value="(-) remove"></form><!-- #remove_task --><ul id="task_list"></ul><!-- #task_list --></div><!-- #wrapper -->');

    $('form').submit(function(e){ e.preventDefault(); });
    $('#add_task').submit(addTask);
    $('#remove_task').submit(removeTask);
    displayList();
  });

  it('#add_task should add a task to ul#task_list', function() {
    $('#task_name').val('buy groceries');
    $('#add_task').submit();

    expect($('#task_list').children().first().text()).toBe('1. buy groceries');
  });

  it('#remove_task should remove the specified task from ul#task_list', function() {
    $('#task_name').val('do laundry');
    $('#add_task').submit();
    $('#task_num').val('1');
    $('#remove_task').submit();

    expect($('#task_list').children().text()).not.toContain('buy groceries');
  });

  it('#remove_task should adjust the numbering of the remaining list items', function() {
    expect($('#task_list').children().first().text()).toBe('1. do laundry');
  });

  it('#remove_task should alert the user with an error message if the input is not a number', function() {
    $('#task_num').val('cat');
    $('#remove_task').submit();
    
    // this is not the right test
    //expect(alert('blah'));
  });

});