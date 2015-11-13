FlowRouter.route('/',{
  subscriptions: function(){
    this.register('orders', Meteor.subscribe('orders'));
  },
  action: function(){
    BlazeLayout.render('layout', {top: 'menu', main: 'home'});
  },
  name: 'home'
});

FlowRouter.route('/admin-dashboard',{
  subscriptions: function(){
    this.register('orders', Meteor.subscribe('orders'));
    this.register('allUsersData', Meteor.subscribe('allUsersData'));
  },
  action: function(){
    BlazeLayout.render('layout', {top: 'menu', main: 'adminDashboard'});
  },
  name: 'adminDashboard'
})
