'use-strict';

describe('Adding and Removing Tasks', function() {
  beforeEach(function() {
    var currentPath = $('script').eq(7).attr('src');
    currentPath = currentPath.replace("lib/tasklist.js", "");
    jasmine.getFixtures().fixturesPath = currentPath;
    loadFixtures('index.html');

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
    spyOn(window, 'alert');

    $('#task_num').val('cat');
    $('#remove_task').submit();

    expect(window.alert).toHaveBeenCalledWith('Must be a number wise guy!');
  });

});