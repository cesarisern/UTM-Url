import { Links } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './list.html';

Template.list.onCreated(function () {
  Meteor.subscribe('links.all');



});

Template.list.helpers({
  links() {
    if ( Meteor.userId() ){
      return Links.find({owner: Meteor.userId() });
    }
  },
});
