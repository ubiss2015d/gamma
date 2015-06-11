/*
 * Tokbox JavaScript Developer Guide: https://tokbox.com/developer/guides/connect-session/js/
 */

// Tokbox credentials
var reskiNico_tokbox_apikey    = "45258952";
var reskiNico_tokbox_sessionID = "2_MX40NTI1ODk1Mn5-MTQzNDAyOTA4MTQ0Nn5Fb0ErcEVCOXdKcGJXbUtaL1lTdWhOUEx-fg";
var reskiNico_tokbox_sessionToken = "T1==cGFydG5lcl9pZD00NTI1ODk1MiZzaWc9MGE2ODE1ODVkYjUwNzU4YjNkM2IzYmE2OTQ1YzE4NDcwNmJjZmU3ODpyb2xlPXB1Ymxpc2hlciZzZXNzaW9uX2lkPTJfTVg0ME5USTFPRGsxTW41LU1UUXpOREF5T1RBNE1UUTBObjVGYjBFcmNFVkNPWGRLY0dKWGJVdGFMMWxUZFdoT1VFeC1mZyZjcmVhdGVfdGltZT0xNDM0MDI5MTA0Jm5vbmNlPTAuMTYxNTc1MDk1NDI3OTQ2MjQ=";

// Tokbox session
var session = null;

function tokboxEstablishConnection()
{
    console.log("TOKBOX EstablishConnection");

/*
    $.getScript( "http://static.opentok.com/v2/js/opentok.min.js", function( data, textStatus, jqxhr ) {
      console.log( data ); // Data returned
      console.log( textStatus ); // Success
      console.log( jqxhr.status ); // 200
      console.log( "TOKBOX Load was performed." );

        // check for session requirements
        if (OT.checkSystemRequirements() == 1) {

        // initialize session
        session = OT.initSession(reskiNico_tokbox_apikey, reskiNico_tokbox_sessionID);
         session.connect(reskiNico_tokbox_sessionToken, function(error) {
            if (error) {
              console.log("Error connecting: ", error.code, error.message);
            } else {
              console.log("Connected to the session.");
            }
          });
        }
        else {
          // The client does not support WebRTC.
          // You can display your own message.
          console.log("TOKBOX - CLIENT DOES NOT SUPPORT WebRTC");
        }

    });
*/

/*
    // check for session requirements
    if (OT.checkSystemRequirements() == 1) {

    // initialize session
    session = OT.initSession(reskiNico_tokbox_apikey, reskiNico_tokbox_sessionID);
     session.connect(reskiNico_tokbox_sessionToken, function(error) {
        if (error) {
          console.log("Error connecting: ", error.code, error.message);
        } else {
          console.log("Connected to the session.");
        }
      });
    }
    else {
      // The client does not support WebRTC.
      // You can display your own message.
      console.log("TOKBOX - CLIENT DOES NOT SUPPORT WebRTC");
    }
*/
}

function tokboxDisconnectConnection()
{
    console.log("TOKBOX DisconnectConnection");

    if(session != null)
    {
        session.disconnect();
    }
}
