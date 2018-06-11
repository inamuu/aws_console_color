$(function() {
  
  var str = $(".nav-elt-label").text();

  switch(true) {
      case /XXXX-XXXX-XXXX/.test(str):
        $("#h").after('<div style="background-color:#FF0000;text-align:center;">表示させる文字列</div>');
        console.log('コンソールに出力するログ');
      break;
      case /YYYY-YYYY-YYYY/.test(str):
      $("#h").after('<div style="background-color:#FF0000;text-align:center;">表示させる文字列</div>');
      console.log('コンソールに出力するログ');
    break;
  }
});