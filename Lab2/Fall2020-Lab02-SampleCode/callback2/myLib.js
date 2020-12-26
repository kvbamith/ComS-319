module.exports = {
  dirSorted : function (dir, callback) {
    var fs = require('fs')
    fs.readdir(dir,function(err,data){
      if(err){
        callback(err,dir)
      }else{
        callback(null,dir,data.sort());
      }
    });
  }
 };
