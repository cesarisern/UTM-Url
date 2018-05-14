// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './links.js';
import { Landingpages } from './landingpages.js';

Meteor.methods({
  'links.insert'(WebsiteURL, Source, Medium, Name, Term, Content) {
    check(WebsiteURL, String);
    check(Source, String);
    check(Medium, String);
    check(Name, String);
    check(Term, String);
    check(Content, String);

    const UTMUrl = WebsiteURL.concat("/utm_source="+Source+"/utm_medium="+Medium)

    return Links.insert({
      WebsiteURL,
      Source,
      Medium,
      Name,
      Term,
      Content,
      UTMUrl,
      createdAt: new Date(),
      owner: Meteor.userId(),           // _id of logged in user
    });
  },
  'Landingpages.insert'(Landingpage) {
    check(Landingpage, String);

    return Landingpages.insert({
      Landingpage,
      createdAt: new Date(),
      owner: Meteor.userId(),           // _id of logged in user
    });
  }
});
