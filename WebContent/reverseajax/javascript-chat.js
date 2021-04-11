
function init() {
  dwr.engine.setActiveReverseAjax(true);
}

function sendMessage() {
  console.log('sendMessage')
  var text = dwr.util.getValue("text");
  dwr.util.setValue("text", "");
  JavascriptChat.addMessage(text);
}

function receiveMessages(messages) {
  console.log('receiveMessages');
  var chatlog = "";
  for (var data in messages) {
    chatlog = "<div>" + dwr.util.escapeHtml(messages[data].text) + "</div>" + chatlog;
  }
  dwr.util.setValue("chatlog", chatlog, { escapeHtml:false });
}

function keypressed(event){
  console.log('keypressed');
  dwr.util.onReturn(event, sendMessage);
}
