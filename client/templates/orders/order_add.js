Template.orderAdd.rendered=function(){
  $('.ui.checkbox').checkbox()
  $('.ui.radio.checkbox').checkbox();
  $('select.dropdown').dropdown();
}
Template.orderAdd.helpers({
  'fishes': function(){
    var fishes = [
    {fish: 'Salmon'},
    {fish: 'Langostino'},
    {fish: 'Kanicama'}
    ];
    return fishes;
  },
})
Template.orderAdd.events({
  'submit form': function(event){
    event.preventDefault();
    console.log($('select').val());
    // Get checkboxs values
    var fishesChecked = $('input:checkbox:checked').map(function() {
      return this.value;
    }).get();
    console.log(fishesChecked);
    // Get radios values
    var matChecked = $('input:radio:checked').map(function() {
      return this.value;
    }).get();
    console.log(matChecked);
  }
})