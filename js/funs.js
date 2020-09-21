Blockly.Python['import_beautifulsoup'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'from bs4 import BeautifulSoup\n';
  return code;
};

Blockly.Python['find'] = function(block) {
  var value_arg = Blockly.Python.valueToCode(block, 'arg', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '.find('+ value_arg +')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['find_all'] = function(block) {
  var value_arg = Blockly.Python.valueToCode(block, 'arg', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '.find_all('+ value_arg +')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_text'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '.text';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_string'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '.string';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['from_class'] = function(block) {
  var value_class = Blockly.Python.valueToCode(block, 'class', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'class_ = ' + value_class;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['from_id'] = function(block) {
  var value_id = Blockly.Python.valueToCode(block, 'id', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'id = ' + value_id;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['from_tag'] = function(block) {
  var value_tag = Blockly.Python.valueToCode(block, 'tag', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_tag;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};