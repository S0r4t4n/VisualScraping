Blockly.Python['import_requests'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import requests';
  return code;
};

Blockly.Python['get_source'] = function(block) {
  var value_url = Blockly.Python.valueToCode(block, 'url', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '_source = requests.get('+ value_url +').text\nsource = BeautifulSoup(_source)\n';
  return code;
};

Blockly.Python['source'] = function(block) {
  var value_arg = Blockly.Python.valueToCode(block, 'arg', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'source'+value_arg;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};