Template.orderAdd.rendered=function(){
  $('select.dropdown').dropdown();
  $('.datepicker').pickadate({format: 'dd-mm-yyyy'});
  $('.ui.form').form({
    fields:{
      quantity: {
        identifier: 'quantity',
        rules: [{type:'minCount[1]',prompt : 'Please enter Quantity'}]
      },
      fishes:{
        identifier: 'fishes',
        rules: [{type: 'minCount[1]', prompt: 'Plese choose at least one'}]
      },
      mat:{
        identifier: 'mat',
        rules: [{type: 'minCount[1]', prompt: 'Plese choose mat'}]
      },
      date:{
        identifier: 'date',
        rules: [{type: 'minCount[1]', prompt: 'Plese choose a date to deliver'}]
      }

    }
  })
}

Template.orderAdd.events({
  'submit form': function(event){
    event.preventDefault();
    var quantity = $('[name=quantity]').val();
    console.log(quantity);
    var fishes = $('[name=fishes]').val();
    console.log(fishes);
    var mat = $('[name=mat]').val();
    console.log(mat);
    var date = $('[name=date]').val();
    console.log(date);
  }
})