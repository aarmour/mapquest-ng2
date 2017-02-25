'use strict';

exports.create = function (tagName, className, container) {
  const el = window.document.createElement(tagName);
  if (className) el.className = className;
  if (container) container.appendChild(el);
  return el;
};
