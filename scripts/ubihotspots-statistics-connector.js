/*
 * UBI Hotspot Statistics API: http://stats.ubioulu.fi/hotspots/index.php
 */

function tester()
{
    return { status: "test" };
}



function getUbiStatsClicks(from, to, instanceId)
{
    
    // build request url
    var clickRequestURL = "http://stats.ubioulu.fi/hotspots/clicks.php?from=2015-06-01&to=2015-06-09&instance_id=toripolliisi-1";
/*
    // no CORS
    // create HTTP Request
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.addHeader("Access-Control-Allow-Origin", "*");
    xmlHttp.open( "GET", clickRequestURL, false );
    xmlHttp.send( null );

    var httpResponse = xmlHttp.responseText;
    //httpResponse.addHeader("Access-Control-Allow-Origin", "*");

    console.log("getUbiStatsClicks - response: ", httpResponse);

    //return httpResponse;
*/
}


