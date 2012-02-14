var 	fs = require('fs'),
	util = require('util'),
	source = process.argv[1].replace('setup.js', '') + 'setup_files',
	destination = './';

// Check if source directory exists
try {
	fs.statSync(source);
} catch(e) {
	console.log('No source dir found. Aborting..')
	process.exit();
}

// Recursive directory files retrieval
var walk = function(dir, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(fileName) {
	var filePath = dir + '/' + fileName;
      fs.stat(filePath, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(filePath, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push([filePath, dir + '/', fileName]);
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

// Go and retrieve all files within source directory
walk(source, function(err, results) {
	if(err) throw err;

	results.forEach(function( file ) {
		var 	sourceFilePath = file[0],
			fileName = file[2],
			destinationDir = file[1].replace(source + '/', destination).replace(source, destination);

		// Create directory if it doesn't exist
		try {
			fs.statSync(destinationDir);
		} catch (e) {
			console.log('directory ' + destinationDir + ' does not exist. creating..OK');
			fs.mkdirSync(destinationDir);
		}
		
		console.log('Copying ' + fileName + ' to ' + destinationDir + '..OK');
		
		// Copy the file
		util.pump(
			fs.createReadStream(file[0]),
			fs.createWriteStream(file[1].replace(source + '/', destination).replace(source, destination) + file[2])
			    );
	});
});
