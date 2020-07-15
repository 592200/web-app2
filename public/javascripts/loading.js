$(document).ready(function(){

  $.ajax({
    beforeSend: function(){
      console.log('ajaxSend')
      run_waitMe(1, 'win8');
    },
    complete: function(){
      console.log('ajaxComplete')
      $('.page').waitMe('hide');
    }
  });
  // $("button,a").click(function(){
  //   console.log('click')
  //   run_waitMe(1, 'facebook');
  // });

  // $(".menu").click(function(){
  //   console.log('click')
  //   run_waitMe(1, 'facebook');
  // });

  // $(".reset,ul").click(function(){
  //   console.log('reset')
  //   $('.page').waitMe('hide');
  // });
  

  function run_waitMe(num, effect){
		text = 'Please Wait...';
		fontSize = '';
		switch (num) {
			case 1:
			maxSize = '';
			textPos = 'vertical';
			break;
			case 2:
			text = '';
			maxSize = 30;
			textPos = 'vertical';
			break;
			case 3:
			maxSize = 30;
			textPos = 'horizontal';
			fontSize = '18px';
			break;
		}
		$('.page').waitMe({
			effect: effect,
			text: text,
			bg: 'rgba(255,255,255,0.7)',
			color: '#000',
			maxSize: maxSize,
			waitTime: -1,
			source: 'img.svg',
			textPos: textPos,
			fontSize: fontSize,
			onClose: function(el) {}
		});
  }

});
