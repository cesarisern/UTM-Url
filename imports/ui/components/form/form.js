import { Links } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './form.html';



Template.form.onCreated(function () {
  Meteor.subscribe('links.all');
});

Template.form.helpers({
  links() {
    return Links.find({});
  },
});

Template.form.events({
  'submit .info-link-add'(event) {
    event.preventDefault();

    const target = event.target;
    const WebsiteURL = target.WebsiteURL;
    const Source = target.Source;
    const Medium = target.Medium;
    const Name = target.Name;
    const Term = target.Term;
    const Content = target.Content;

    Meteor.call('links.insert',
      WebsiteURL.value,
      Source.value,
      Medium.value,
      Name.value,
      Term.value,
      Content.value, (error) => {

      if (error) {
        alert(error.error);
      } else {
        title.value = '';
        url.value = '';
      }
    });
  },
});
