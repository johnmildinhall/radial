var fs = require('fs');
var parse = require('csv-parse');
var async = require('async');

var inputFile='raw-data-semi-colon.csv';

var newFile = "";

var parser = parse({delimiter: ','}, function (err, data) {
  async.eachSeries(data, function (line, callback) {
  	console.log(line[3]);
		//console.log(row[3]);
		var from = line[1];
		var to = line[3].split(';');
		console.log(to.length);
		if(to.length > 1){
			for ( i in to){
				to[i] = to[i].replace(' ','');
				newFile = newFile+ '\n'+from+','+to[i];
				//console.log('\n'+from+','+to[i]);
			}			
		}

  	callback();
  });
});
fs.createReadStream(inputFile).pipe(parser);

setTimeout(function(){
  fs.writeFile("links.csv", newFile, function(err) {
      if(err) {
          return console.log(err);
      }

      //console.log("The file was saved!");
  }); 
}, 1500 );