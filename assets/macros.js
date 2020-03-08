/* 
 * Custom macros
 *
 * Useful macros for xaringan
*/

/* 
From https://github.com/yihui/xaringan/issues/80
Resize images easily using the code:
![:scale 50%](image.jpg)
*/

remark.macros.scale = function (percentage) {
  var url = this;
  return '<img src="' + url + '" style="width: ' + percentage + '" />';
};