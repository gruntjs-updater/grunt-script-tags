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
      root: 'javascript'
    });

    this.files.forEach(function(f) {
      // Iterate over all specified file groups.
      var paths = getPaths(f.src, options.root);
      // break file into array here
      prepareTarget(f.dest);

      // write back into file at the end
    });
    
  });

  var getPaths = function (files, root) {
    var paths = []
    for (var i = 0; i < files.length; i++){
      var path = files[i]
      var startIndex = path.indexOf(root);
      path = path.slice(startIndex);
      paths.push(path);
    }

    return paths;
  }

  var prepareTarget = function (target) {
    // find start and end targets and clear out everything between
    log(target);
    // return starting index?
  }

  // write each path in, checking for special ones


  var log = function (obj) {
    grunt.log.writeln( "-> " + JSON.stringify(obj));
  }

};
