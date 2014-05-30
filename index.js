
/* jshint browser:true */

export default Baaar

// https://developer.mozilla.org/en-US/docs/Web/CSS/transform#Browser_compatibility
var prefixes = [
  '-webkit-',
  '-moz-',
  '-ms-',
  '',
]

// https://developer.mozilla.org/en-US/docs/Web/Reference/Events/transitionend#Browser_compatibility
var transitionends = [
  'webkitTransitionEnd',
  'oTransitionEnd',
  'otransitionend',
  'transitionend',
]

function Baaar(target) {
  if (!(this instanceof Baaar)) return new Baaar()

  this.target = target
}

Baaar.prototype.set = function (width, color) {
  if (!this.outie) {
    var outie = this.outie = document.createElement('div')
    var innie = this.innie = document.createElement('div')
    outie.className = 'Baaar'
    innie.className = 'Baaar-innie'
    outie.appendChild(innie)
    var target = this.target
    outie.style.position = target ? 'absolute' : 'fixed'
    if (width == null) width = 0
    requestAnimationFrame(function () {
      (target || document.body).appendChild(outie)
    })
  }

  if (typeof width === 'string') {
    color = width
    width = null
  }

  if (typeof width === 'number') this.translate(width || 1)
  if (typeof color === 'string') this.paint(color)

  return this
}

Baaar.prototype.destroy = function () {
  var outie = this.outie
  if (!outie) return
  outie.style.opacity = '0'

  transitionends.forEach(function (event) {
    outie.addEventListener(event, function () {
      var parent = outie.parentNode
      if (!parent) return
      parent.removeChild(outie)
    })
  })

  this.outie = this.innie = null
  return this
}

Baaar.prototype.translate = function (width) {
  prefixes.forEach(function (prefix) {
    this.innie.style[prefix + 'transform'] = 'translateX(' + (width - 100) + '%)'
  }, this)
}

Baaar.prototype.paint = function (color) {
  this.innie.style.backgroundColor = color
}
