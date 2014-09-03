/**
 * Auto loads all files inside `gulp/tasks`
 */
var fs = require('fs');
var scriptFilter = require('./util/script-filter');
var tasks = fs.readdirSync('./gulp/tasks').filter(scriptFilter);

tasks.forEach(function(task) {
    require('./tasks/' + task);
});