/* Downloaded from http://www.codeseek.co/ */
'use strict';

var steps = document.querySelectorAll('[data-tour]');
var overlay = document.querySelector('.tour-overlay');
var content = document.querySelector('.tour-content');
var cover = document.querySelector('.tour-cover');

var arr = [];
var map = {};
Array.prototype.forEach.call(steps, function (step, index) {
  var id = step.getAttribute('data-tour');
  arr.push(id);
  map[id] = step;
});

arr.sort(function (a, b) {
  return a - b;
});

var items = arr.map(function (item, index) {
  return map[item];
});

items.forEach(function (step, index) {
  setTimeout(function () {
    var helper = step.getAttribute('data-tour-helper');
    var b = step.offsetHeight / 2;
    var c = step.offsetWidth / 2;
    var a = a = Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2) - 2 * b * c * Math.cos(0.5 * Math.PI));
    var data = {
      top: step.offsetTop - window.scrollY + b + 'px',
      left: step.offsetLeft - window.scrollX + c + 'px',
      size: a * 2
    };
    //overlay.style.top = data.top;
    //overlay.style.left = data.left;
    overlay.style.width = 0;
    overlay.style.height = 0;
    overlay.style.boxShadow = '0 0 0 ' + 100 * Math.sqrt(2) + 'vmax hsla(' + index * 40 + ',80%,40%,0.9)';
    content.innerText = '';

    setTimeout(function () {
      content.innerText = helper;
      cover.style.height = b * 2 + 'px';
      cover.style.width = c * 2 + 'px';
      overlay.style.top = data.top;
      overlay.style.left = data.left;
      overlay.style.width = data.size + 'px';
      overlay.style.height = data.size + 'px';
    }, 1000);

    if (parseInt(data.left, 10) > window.innerWidth / 2) {
      content.style.left = '0%';
    } else {
      content.style.left = '50%';
    }
  }, 5000 * index + 1000);
});
