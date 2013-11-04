/*
 * grunt-script-tags
 * https://github.com/blunckr/grunt-script-tags
 *
 * Copyright (c) 2013 blunckr
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('script_tags', 'Add script tags for all scripts in a directory', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      // eventually could do html and haml
      language: 'jade',
      start: 'javascripts'
    });

    // Iterate over all specified file groups.
    var paths = getPaths(this.files, options.start);
    log(paths);

  });



  var getPaths = function (files, start) {
    var paths = [];
    files.forEach(function(f) {
      for (var i = 0; i < f.src.length; i++){
        var path = f.src[i];
        var startIndex = path.indexOf(start);
        path = path.slice(startIndex);
        paths.push(path);
      }

    });
    return paths;
  }
  var log = function (obj) {
    grunt.log.writeln( JSON.stringify(obj));
  }

};
