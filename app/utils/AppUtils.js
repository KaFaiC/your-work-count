module.exports = {

  // convertRawMessage: function(rawMessage, currentThreadID) {
  //   return {
  //     id: rawMessage.id,
  //     threadID: rawMessage.threadID,
  //     authorName: rawMessage.authorName,
  //     date: new Date(rawMessage.timestamp),
  //     text: rawMessage.text,
  //     isRead: rawMessage.threadID === currentThreadID
  //   };
  // },

  getCreatedCommitmentData: function(title, description) {
    var timestamp = Date.now();
    var id = 'commitment' + timestamp;
    return {
      id: id,
      title: title,
      description: description,
      timestamp: timestamp
    };
  }

};
