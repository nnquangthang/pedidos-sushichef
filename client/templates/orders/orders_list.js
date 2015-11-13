Template.ordersList.rendered = function(){
  $('.sortable.table').tablesort();

};

Template.ordersList.helpers({
  'getOrders': function(){
    return Orders.find({}, {sort: {date: 1}});
  },
  'getModalData': function(){
    if(Session.get('modalData')){
      var modalData = Session.get('modalData');
      return modalData;
    }
  }
});