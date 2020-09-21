Blockly.Blocks['import_beautifulsoup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import bs4");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['find'] = {
  init: function() {
    this.appendValueInput("arg")
        .setCheck(null)
        .appendField("find :");
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['find_all'] = {
  init: function() {
    this.appendValueInput("arg")
        .setCheck(null)
        .appendField("find all :");
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get text");
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_string'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get string");
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['from_class'] = {
  init: function() {
    this.appendValueInput("class")
        .setCheck(null)
        .appendField("class :");
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['from_id'] = {
  init: function() {
    this.appendValueInput("id")
        .setCheck(null)
        .appendField("id :");
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['from_tag'] = {
  init: function() {
    this.appendValueInput("tag")
        .setCheck(null)
        .appendField("tag :");
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};