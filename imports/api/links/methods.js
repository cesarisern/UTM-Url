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

    BuildfinalURL(WebsiteURL, Source, Medium, Name, Term, Content);

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

    function BuildfinalURL (WebsiteURL, Source, Medium, Name, Term, Content) {
      const Site = 'http://www.joinlucid.com';

      if (Source) {Source="/utm_source="+Source};
      if (Medium) {Medium="/utm_source="+Medium};
      if (Name) {Name="/utm_source="+Name};
      if (Term) {Term="/utm_source="+Term};
      if (Content) {Content="/utm_source="+Content};

      UTMUrl = Site+WebsiteURL+Source+Medium+Name+Term+Content;

      return UTMUrl;

    };

  },

  'Landingpages.insert'(Landingpage) {
    check(Landingpage, String);

    if (Landingpage.charAt(0) != '/'){
      Landingpage = '/'+Landingpage;
    };

    return Landingpages.insert({
      Landingpage,
      createdAt: new Date(),
      owner: Meteor.userId(),           // _id of logged in user
    });
  },

});
