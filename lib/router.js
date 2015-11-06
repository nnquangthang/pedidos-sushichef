FlowRouter.route('/',{
  subscriptions: function(){
    this.register('orders', Meteor.subscribe('orders'))
  },
  action: function(){
    BlazeLayout.render('layout', {top: 'menu', main: 'home'});
  },
  name: 'home'
});