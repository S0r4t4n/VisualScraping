Blockly.Blocks['import_requests'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import requets");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_source'] = {
  init: function() {
    this.appendValueInput("url")
        .setCheck("String")
        .appendField("get source from:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['source'] = {
  init: function() {
    this.appendValueInput("arg")
        .setCheck(null)
        .appendField("source");
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};