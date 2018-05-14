import { Links } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session'
import './form.html';

Template.form.onCreated(
  function () {
    Meteor.subscribe('links.all');
  },
);

Template.form.onRendered(
  function () {
    this.autorun(function(){
      const amIactive = this.find('.WebsiteURL').value;
      const Formcontainer = this.find('.form-cointainer');
      console.log("onRendered:"+Session.get('Form-active'));
      console.log("onRendered2 :"+amIactive);
        if (amIactive == Session.get('Form-active')){
          console.log("If is true!");
          Formcontainer.style.visibility = 'visible';
        } else {
          console.log("If is false!");
          Formcontainer.style.visibility = 'hidden';
        }
      // Formcontainer.style.visibility = Session.get('Form-visibility');
    }.bind(this));
  },
);

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

  'click .Cancel-form-button'(event, template){
    Session.set('Form-active','None');
  }
});
