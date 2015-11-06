FlowRouter.route('/',{
  subscriptions: function(){
    this.register('orders', Meteor.subscribe('orders'))
  },
  action: function(){
    BlazeLayout.render('layout', {top: 'menu', main: 'home'});
  },
  name: 'home'
});

FlowRouter.route('/auth',{
  action: function(){
    BlazeLayout.render('layout', {top: 'menu', main: 'auth'})
  },
  name: 'auth'
})