
var spawn = require('child_process').spawn;
hexo.on('new', function(data){
    spawn('C:/Program Files/JetBrains/WebStorm 2018.3.5/bin/webstorm64.exe ', [data.path]);
});