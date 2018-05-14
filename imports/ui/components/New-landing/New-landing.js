import { Landingpages } from '/imports/api/links/landingpages.js';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session'
import './New-landing.html';

Template.Newlanding.onCreated(
  function () {
    console.log("Landingpage-form created");
    Meteor.subscribe('landingpages.all');
  },
);

Template.Newlanding.events({
  'submit .Landingpage-add'(event) {
    event.preventDefault();

    const target = event.target;
    const Landingpage = target.Landingpage;

    console.log("Landingpage event:"+target+", "+Landingpage.value);

    Meteor.call('Landingpages.insert',
      Landingpage.value, (error) => {

      if (error) {
        alert(error.error);
      } else {
        Landingpage.value = '';
      }
    });
  },

});
