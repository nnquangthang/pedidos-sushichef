Meteor.publish('orders', function(){
  return Orders.find({}, {sort: {createdAt: -1}});
});

Meteor.publish('allUsersData', function(){
  return Meteor.users.find({}, {sort: {createdAt: -1}});
});