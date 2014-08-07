'use strict';

var yeoman = require('yeoman-generator');

var AngularPouchDBGenerator = yeoman.generators.NamedBase.extend({
  init: function() {
    this.on('end', function() {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });

    this.names = {
      slug: this._.slugify(this._.humanize(this.name)),
      camel: this._.camelize(this.name)
    };
  },

  root: function() {
    var options = {
      options: {
        'skip-messages': true
      }
    };
    this.composeWith('common', options);
  },

  templates: function() {
    this.copy('_bower.json', 'bower.json');
    this.copy('_package.json', 'package.json');
    this.copy('_README.md', 'README.md');
    this.copy('_travis.yml', '.travis.yml');
    this.template('_directive.js', this.names.slug + '.js');
    this.template('_karma.conf.js', 'karma.conf.js');
    this.template('_spec.js', 'test/' + this.names.slug + '.js');
  }
});

module.exports = AngularPouchDBGenerator;
