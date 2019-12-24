import { layout, Widgets } from "blessed";

const renderer = function(coords) {
  var self = this;

  // The coordinates of the layout element
  var width = coords.xl - coords.xi,
    height = coords.yl - coords.yi,
    xi = coords.xi,
    xl = coords.xl,
    yi = coords.yi,
    yl = coords.yl;

  // The current row offset in cells (which row are we on?)
  var rowOffset = 0;

  // The index of the first child in the row
  var rowIndex = 0;

  return function iterator(el, i) {
    // Make our children shrinkable. If they don't have a height, for
    // example, calculate it for them.
    el.shrink = true;

    // Find the previous rendered child's coordinates
    var last = self.getLastCoords(i);

    // If there is no previously rendered element, we are on the first child.
    if (!last) {
      el.position.left = 0;
      el.position.top = 0;
    } else {
      // Otherwise, figure out where to place this child. We'll start by
      // setting it's `left`/`x` coordinate to right after the previous
      // rendered element. This child will end up directly to the right of it.
      el.position.left = last.xl - xi;

      // If our child does not overlap the right side of the Layout, set it's
      // `top`/`y` to the current `rowOffset` (the coordinate for the current
      // row).
      if (el.position.left + el.width <= width) {
        el.position.top = rowOffset;
      } else {
        // Otherwise we need to start a new row and calculate a new
        // `rowOffset` and `rowIndex` (the index of the child on the current
        // row).
        rowOffset += self.children.slice(rowIndex, i).reduce(function(out, el) {
          if (!self.isRendered(el)) return out;
          out = Math.max(out, el.lpos.yl - el.lpos.yi);
          return out;
        }, 0);
        rowIndex = i;
        el.position.left = 0;
        el.position.top = rowOffset + 2;
      }
    }

    // If our child overflows the Layout, do not render it!
    // Disable this feature for now.
    if (el.position.top + el.height > height) {
      // Returning false tells blessed to ignore this child.
      // return false;
    }
  };
};

export const Layout = props =>
  layout({
    renderer,
    ...props
  });
