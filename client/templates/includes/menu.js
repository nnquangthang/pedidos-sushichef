Template.menu.rendered = function(){
  $('.ui.labeled.button').popup({
    inline   : true,
    hoverable: true,
    position : 'bottom left',
    delay: {
      show: 100,
      hide: 200
    }
  });
}