var db = require('./models');

var taskList = [];
taskList.push({
  name: 'go to the doctor',
  dueDate: 'today'
});


db.Task.remove({}, function(err, tasks){

  db.Task.create(taskList, function(err, tasks){
    if (err) { return console.log('ERROR', err); }
    console.log("all tasks:", tasks);
    console.log("created", tasks.length, "tasks");
    process.exit();
  });

});
