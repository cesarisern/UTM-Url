import { Landingpages } from '/imports/api/links/landingpages.js';
import { Meteor } from 'meteor/meteor';
import './listgroup.html';

Template.Listgroup.onCreated(function () {
  Meteor.subscribe('landingpages.all');
});

Template.Listgroup.helpers({
  landingpages() {
    if ( Meteor.userId() ){
      return Landingpages.find({owner: Meteor.userId() });
    }
  },
});
