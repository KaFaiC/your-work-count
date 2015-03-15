var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    INITIALIZE_APP: null,
    CREATE_COMMITMENT: null,
		CREATE_COMMITMENT_SUCCESS: null,
		CREATE_COMMITMENT_FAIL: null,
    RECEIVE_RAW_COMMITMENTS: null
  })

};
