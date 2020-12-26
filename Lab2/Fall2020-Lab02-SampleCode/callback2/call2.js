function alertMessage(err,folderName ,data){
    if(err){
        console.log('error reading \''+folderName+'\'');
    }else{
        console.log('list files\''+folderName+'\' after sorting : '+JSON.stringify(data));
    }
}

var lib=require('./myLib')
lib.dirSorted('folder',alertMessage);
lib.dirSorted('folder-2',alertMessage);
