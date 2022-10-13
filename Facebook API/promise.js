const display = document.getElementById("display");

function getData(){
    fetch("https://graph.facebook.com/v15.0/109056785312256/feed?access_token=EAAGGCd9O1b8BAFWS8cNxqeBDCCiJsSwS5GfFkOVNQuEBvBJwFVNSea5X2OVV9PsrpJvvfxYBB8JMOIW1hTBSB0PNOk8yYvNBinfA7Br1uWkgyEHWS2QbUUdq5LvFHaTxA7sTsZCMZCSqZB8WqE4RdPWFhC63VeAItVjTdV6hMcPFz70KBUOYNzUjhjpLzQNZBD5VFml9wEHQNtEFFat8")
    .then(res => res.text())
    .then(data => {
        display.innerHTML = data;
    });
}

