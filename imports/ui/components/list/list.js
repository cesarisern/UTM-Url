import { Links } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './list.html';

Template.list.onCreated(function () {
  Meteor.subscribe('links.all');
});

Template.list.onRendered(function (){

  }
);

Template.list.helpers({
  links() {
    if ( Meteor.userId() ){
      return Links.find({owner: Meteor.userId() });
    }
  },
});

Template.list.events({
  "click .New-URL-Button":function(event, template){
    var Activeform = Template.instance().find('.Landing-URL').innerHTML;
    Session.set('Form-active',Activeform)
    console.log("Clicked: "+Session.get('Form-active'));
    Session.set('Form-visibility','visible');

  }
});
