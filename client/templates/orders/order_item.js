Template.orderItem.helpers({
  'getUserData': function(userId){
    var user = Meteor.users.findOne({_id: userId})
    return user.profile;
  },
  'yesOrNo': function(mat){
    switch(mat){
      case 0:
        return "No";
        break;
      case 1:
        return "Yes";
    }
  }
});

Template.orderItem.events({
  'click tr': function(){
    var self = this;
    Session.set('modalData', self);
    $('.ui.modal').modal('show');
  }
})