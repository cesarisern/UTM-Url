import {FlowRouter} from 'meteor/kadira:flow-router';
import {BlazeLayout} from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/pages/login/login.js';
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/component-test/home.js';
import '../../ui/pages/not-found/not-found.js';

//Login callbacks
Accounts.onLogin(function() {
  FlowRouter.go('App.home')
});

Accounts.onLogout(function() {
  FlowRouter.go('App.login')
});

// Set up all routes in the app
FlowRouter.triggers.enter([function(context, redirect) {
  if (!Meteor.userId()) {
    FlowRouter.go('App.login');
  }
}])


FlowRouter.route('/', {
  name: 'App.login',
  action() {
    if (Meteor.userId()) {
      FlowRouter.go('App.home')
    }
    BlazeLayout.render('App_body', {
      main: 'App_login'
    });
  },
});

FlowRouter.route('/app', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', {
      main: 'App_home'
    });
  },
});

FlowRouter.route('/test', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', {
      main: 'App_test'
    });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', {
      main: 'App_notFound'
    });
  },
};
