Blockly.Python['tmp'] = function(block) {
  var value_arg = Blockly.Python.valueToCode(block, 'arg', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'tmp'+value_arg;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};