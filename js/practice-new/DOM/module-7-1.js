const filterNodes = (selector, callback) => {
  let content = document.querySelector(selector);

  [...content.childNodes].filter(callback).forEach((node, index) => {
    if (!index) content.innerHTML = '';
    content.append(node);
  });
};

filterNodes('#center-content', node => node.tagName === 'DIV');

//
//
//
