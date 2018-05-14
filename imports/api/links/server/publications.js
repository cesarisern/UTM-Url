// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Links } from '../links.js';
import { Landingpages } from '../landingpages.js';

Meteor.publish('links.all', function () {
  return Links.find();
});

Meteor.publish('landingpages.all', function () {
  return Landingpages.find();
});
