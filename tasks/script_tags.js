/*
 * grunt-script-tags
 * https://github.com/blunckr/grunt-script-tags
 *
 * Copyright (c) 2013 blunckr
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');

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
      var target = readTargetFile(f.dest);

      var start = prepareTarget(target);
      var template = getTemplate(options.language);
      // write back into file at the end
      writeTargetFile(target, start, paths, f.dest, template);
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

  var readTargetFile = function (path) {
    return fs.readFileSync(path, 'utf-8').split('\n');
  }

  var writeTargetFile = function (target, start, paths, path, template) {
    var spaces = target[start].match(/^\s+/);
    if (spaces == null){
      spaces = "";
    }

    for (var i = 0; i < paths.length; i++) {
      var tag = spaces + template.join(paths[i]);
      target.splice(start + i + 1, 0, tag);
    }

    file = target.join('\n');
    // return;
    fs.writeFileSync(path, file);

  }

  var getTemplate = function (language) {
    switch (language) {
      case 'jade':
        return ["script(type='text/javascript', src='", "')"];
      case 'haml':
        return ["%script{ type: 'text/javascript', src: '", "'}"];
      case 'html':
        return ["<script type='text/javascript' src='", "'></script"];

    }
  }

  var prepareTarget = function (target) {
    var start = -1;
    var end = -1;
    for (var i = 0; i < target.length; i++){
      if (start == -1){
        if( target[i].match(/PRINT_SCRIPTS/) != null){
          start = i;
        }
      } else if (end == -1) {
        if( target[i].match(/END_PRINT_SCRIPTS/) != null){
          end = i;
        }
      } else break;
    }
    var diff = end - start;
    target.splice(start+1, diff-1);

    return start;
  }

  // write each path in, checking for special ones


  var log = function (obj) {
    grunt.log.writeln( "-> " + JSON.stringify(obj));
  }

};
