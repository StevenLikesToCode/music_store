// // $('div').on('click', function() {
// //   $(this).toggleClass('show-description');
// // });
// var divs = document.querySelectorAll('div');

// for (var i = 0; i < divs.length; i++) {
//   divs[i].addEventListener('click', function() {
//     if (this.classList.contains('show-description')) {
//       this.classList.remove('show-description');
//     } else {
//       this.classList.add('show-description');
//     }
//   });
// }
var prices = document.querySelectorAll('.price');

for (var i = 0; i < prices.length; i++) {
  prices[i].addEventListener('click', function() {
    var description = this.parentNode.querySelector('small');
    description.classList.toggle('show-description');
  });
}