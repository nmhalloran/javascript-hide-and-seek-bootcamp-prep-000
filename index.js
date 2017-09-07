function getFirstSelector(selector) {

  var current = document.querySelector(selector)

  return current
}

function nestedTarget() {
  var lis = document.getElementById('nested').querySelector('div.target')

  return lis
}

function increaseRankBy(n) {
  const lis =
  document.getElementById('app').querySelectorAll('ul.ranked-list li ')

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild() {
  var lis = document.querySelector('#grand-node')
  return document.querySelector('#grand-node div div div div')
  }
