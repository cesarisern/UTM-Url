import { Links } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var'
import './list.html';

Template.list.onCreated(function () {
  Meteor.subscribe('links.all');
  this.showExtraFields = new ReactiveVar( "hello" );
});

Template.list.onRendered(function (){
  var Landing = Template.instance().find('.Landing-URL').innerHTML;
  Template.instance().showExtraFields.set(Landing);
});

Template.list.helpers({
  links() {

    if ( Meteor.userId() ){

      return Links.find({owner: Meteor.userId(), WebsiteURL: Template.instance().showExtraFields.get() });

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
