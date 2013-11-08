# grunt-script-tags

> Add script tags for all scripts in a directory

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-script-tags --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-script-tags');
```

## The "script_tags" task

### Overview
In your project's Gruntfile, add a section named `script_tags` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  script_tags: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.language
Type: `String`
Default value: `jade`
Options: jade, haml, html

The target language

#### options.root
Type: `String`
Default Value: 'javascript'

Beggining of js public directory. example: 'javascripts/folder/file.js'.

#### options.start
Type: `Array`
Default Value: `[]`

Manually add scripts that need to load first.

#### options.end
Type: `Array`
Default Value: `[]`

Manually add scripts that need to load last.


### Usage Examples
```js
script_tags: {
  test : {
    options: {
      root: 'javascripts',
      start: ['test/public/javascripts/test.js'],
      end: ['test/public/javascripts/aa.js']
    },
    files: {
      'test/layout.jade' : ['test/public/javascripts/**/*.js']
    }
  }
}
```

