
# Baaar

A lightweight progress bar for loading pages.
Similar to [nanobar](http://nanobar.micronube.com) except:

- Supports colors!
- Uses 2D transforms
- A component

Demo: https://cdn.rawgit.com/component/baaar/master/demo.html

## API

### var bar = new Baaar([target])

Optional `target`, otherwise the element is appended to the body.

### bar.set([percent], [color])

Set a `percent` between `0` and `100` or set a color as a `String`.
If the bar has not been created, creates a bar.

```js
var bar = new Baaar()

// initializes the bar
bar.set(1, 'red')
bar.outie.id = 'something-unique'
```

### bar.destroy()

Fades the bar out and removes the element from the DOM.

### bar.outie, bar.innie

The elements, if they exist.
If they don't exist, use `.set()` and they will be created.

## Extending

The default styles are in `defaults.css`.
You should probably override them.

## Browser Support

IE9+.
Should work with older browsers if you use polyfills for the following:

- `Array.prototype.forEach()`
- `requestAnimationFrame()`
