var fs = require('fs');
var parse = require('csv-parse');
var async = require('async');

var inputFile='raw-data2.csv';
fs.writeFile("radial3.json", '[', function(err) {
    if(err) {
        return console.log(err);
    }
}); 



var parser = parse({delimiter: ','}, function (err, data) {
  async.eachSeries(data, function (line, callback) {

  	var links = "";
  	var linkList = line[3].replace(/ /g,'');
  	linkList = linkList.split(',');
  	for ( var i = 0 ; i < linkList.length ; i++){
      if(linkList[i]!=''){
        links+= '"cjs.'+linkList[i]+'"';
        if (i < linkList.length-1){
          links+=',';
        }        
      }
  	}

  	var thisLine = '{"name":"cjs.'+line[1]+'","humanName":"'+line[0]+'","className":"'+setClass(line[1])+'","open":"'+ line[5]+'","structured":"'+ line[4]+'","size":3938,"imports":['+links+']},\n' 
  	fs.appendFile('radial3.json', thisLine, function (err) {

		});
  	console.log(thisLine);
  	callback();
  })
})
fs.createReadStream(inputFile).pipe(parser);

setTimeout(function(){
  fs.readFile('radial3.json', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    var fileOut = data.substr(0, data.length-2)+'\n]';
    fs.writeFile("radial3.json", fileOut, function(err) {
        if(err) {
            return console.log(err);
        }

        //console.log("The file was saved!");
    }); 
  });
}, 1500 );

function setColor(cat){
  switch(cat){
    case 'Police':
      return '#289A8D';
      break;
    case 'HMPPS (NOMS)':
      return '#F2AD03';
      break;
    case 'HMCTS':
      return '#24457A';
      break;
    case 'CPS':
      return '#EB5755';
      break;
    case 'LAA':
      return '#EB5755';
      break;
    case 'YJB':
      return '#EB5755';
      break;
    default:
      return '#F3BD00';
      break;
  }
}

function setClass(name){
  return name.replace(/\./g,' ');
}
