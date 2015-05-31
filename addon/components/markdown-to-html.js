/* global showdown */
import Ember from 'ember';

export default Ember.Component.extend({
  afterInit: function() {
    this.converter = new showdown.Converter(this.get('options'));
  }.on('init'),

  html: function() {
    var source = this.get('markdown') || '';
    return new Ember.Handlebars.SafeString(this.converter.makeHtml(source));
  }.property('markdown')
});
