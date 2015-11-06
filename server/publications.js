Meteor.publish('orders', function(){
  return Orders.find({}, {sort: {createdAt: -1}});
})