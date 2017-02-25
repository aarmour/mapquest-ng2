'use strict';

const DOM = require('../../util/dom');

const className = 'mapboxgl-ctrl-container';

/**
 * A `ContainerControl` control contains arbitrary DOM content.
 *
 * @implements {IControl}
 */
class ContainerControl {

  onAdd(map) {
    this._map = map;
    this._container = DOM.create('div', `${className}`, map.getContainer());
    return this._container;
  }

  onRemove() {
    this._container.parentNode.removeChild(this._container);
    this._map = null;
  }

  setDOMContent(content) {
    this._container.innerHTML = '';
    this._container.appendChild(content);
  }

}

module.exports = ContainerControl;
