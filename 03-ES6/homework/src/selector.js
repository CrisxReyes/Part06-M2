var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl);

  for(let i=0; i < startEl.children.length; i++){
    let result = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = [...resultSet, ...result];
  }

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0] === '#') return 'id';
  if(selector[0] === '.') return 'class';
  for(let i = 0; i < selector.length; i++){
    if(selector[i] === '.') return 'tag.class';
  }
  return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = function(elemento) {
      return '#' + elemento.id === selector;
    }
   
  } else if (selectorType === "class") {
    matchFunction = function(elemento) {
      for(let i=0; i<elemento.classList.length; i++){
        if('.' + elemento.classList[i] === selector) return true;
      }
      return false;
    }
  } else if (selectorType === "tag.class") {
    matchFunction = function(elemento){
      var tag = '';
      var i = 0;
      while(selector[i] !== '.'){
        tag += selector[i];
        i++;
      }
      if(tag.toUpperCase() === elemento.tagName){
        for(let i=0; i<elemento.classList.length; i++){
          if(tag +'.' + elemento.classList[i] === selector) return true;
        }
      }
      return false;
    }
    
  } else if (selectorType === "tag") {
    matchFunction = function(elemento) {
      if(selector.toUpperCase() === elemento.tagName) return true;
      else{
        return false;
      }
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements = [];
  if(selector.includes('>')){
    let [tag1, tag2] = selector.split(' > ');
    var matchfuncion = matchFunctionMaker(tag1);
    var matchfuncion2 = matchFunctionMaker(tag2);
    let elementos1 = traverseDomAndCollectElements(matchfuncion);
    for(let i = 0; i < elementos1.length; i++) {
      let elementos2 = traverseDomAndCollectElements(matchfuncion2, elementos1[i]);
      elements = [...elements, ...elementos2];
    }
    console.log(elements);
    return elements;
  }
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
