Template.orderAdd.rendered=function(){
  // Datepicker
  $('.datepicker').pickadate({
  format: 'dd-mm-yyyy',
    // Blur function onClose event for Semantic-UI Form Validations
    onClose: function(){
      $('.datepicker').blur();
    }
  });
  // Dropdown
  $('select.dropdown').dropdown();
  // Form validations
  $('.ui.form').form({
    on: 'blur',
    inline: true,
    fields:{
      quantity: {
        identifier: 'quantity',
        rules: [{type:'empty',prompt : 'Enter quantity'}]
      },
      fishes:{
        identifier: 'fishes',
        rules: [{type: 'minCount[1]', prompt: 'At least one fish'}]
      },
      mat:{
        identifier: 'mat',
        rules: [{type: 'empty', prompt: 'Yes or No?'}]
      },
      date:{
        identifier: 'date',
        rules: [{type: 'empty', prompt: 'Date?'}]
      }
    },
  })
}

Template.orderAdd.events({
  'submit form': function(event){
    event.preventDefault();
    if(!Meteor.user()){
      console.log('Not login');
    }else{
    // Get form values
    order = $('[name=orderAdd]').form('get values');
    // Declare varibles
    var userId = Meteor.user()._id;
    var quantity = order.quantity;
    var fishes = order.fishes;
    // Convert mat value to Integer
    var mat = parseInt(order.mat);
    var date = order.date;
    // Insert to collection.Orders
    Orders.insert({
      userId: userId,
      quantity: quantity,
      fishes: fishes,
      mat: mat,
      date: date,
      createdAt: new Date()
    },
    // Catch error, result
    function(error, result){
      if(error){
        Bert.alert('Something wrong happened! Please order again!', 'danger', 'growl-top-right' );
      };
      if(result){
        $('[name=orderAdd]').form('clear');
        Bert.alert('Your order has been successfully created', 'success', 'growl-top-right' );
      };
    });

    }
  },
  'click #clearButton': function(){
    $('[name=orderAdd]').form('clear');
  }
})