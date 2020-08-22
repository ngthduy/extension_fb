var hash_cookie = {};
var currentUrl = "";
function loadCookie() {
  chrome.tabs.getSelected(null, function (tab) {
    // null defaults to current window
    currentUrl = tab.url;
    if (currentUrl.indexOf("chrome://newtab") > -1) {
      currentUrl = "https://www.facebook.com";
    }
    $("#UrlCookieCurrent").html(extractHostname(currentUrl));
    chrome.cookies.getAll({ url: currentUrl }, function (cookie) {
      var result = "";
      for (var i = 0; i < cookie.length; i++) {
        result += cookie[i].name + "=" + cookie[i].value + ";\n";
        if (cookie[i].name == "c_user" || cookie[i].name == "xs") {
          currentUid = cookie[i].value;
          hash_cookie[cookie[i].name] = cookie[i].value;
        }
      }
      chrome.tabs.getSelected(null, function (tab) {
        chrome.tabs.executeScript(
          tab.id,
          {
            code: 'localStorage["z_uuid"]',
          },
          function (imei) {
            if (imei != undefined && imei != null && imei != "") {
              result += "imei=" + imei + "; ";
            }
            document.getElementById("cookieResult").value =
              result + "\n" + navigator.userAgent;
          }
        );
      });
    });
  });
}
function extractHostname(url) {
  var hostname;
  if (url.indexOf("://") > -1) {
    hostname = url.split("/")[2];
  } else {
    hostname = url.split("/")[0];
  }
  hostname = hostname.split(":")[0];
  hostname = hostname.split("?")[0];
  return hostname;
}
function setCookie(key, val, expiry) {
  chrome.cookies.set(
    {
      url: "https://www.facebook.com",
      name: key,
      value: val,
      path: "/",
      httpOnly: false,
      domain: ".facebook.com",
      expirationDate: 1655213071.160959,
    },
    function (cookie) {
      //   console.log(cookie);
    }
  );
  chrome.tabs.getSelected(null, function (tab) {
    var code = "window.location.reload();";
    chrome.tabs.executeScript(tab.id, { code: code });
  });
}
function loadObject(obj) {
  $.each(obj, function (key, val) {
    $("table.list-cookie tbody").append(
      "<tr><td>" + key + "</td><td>" + val + "</td></tr>"
    );
    setCookie(key, val, "");
  });
  var count = Object.keys(obj).length;
  $("table.list-cookie tbody").append(
    "<tr><td colspan='2' style='text-align:left; font-weight:bold'>Insert " +
      count +
      " cookie succcessfully</td></tr>"
  );
  $("table.list-cookie").show();
  $("table.list-cookie tbody td").css("padding", "10px");
  loadCookie();
}
loadCookie();

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnGetFile").onclick = function () {
    document.getElementById("btnImportCookie").click();
  };
  document.getElementById("btnDownloadCookie").onclick = function () {
    now_day = new Date().toISOString().split("T")[0];
    fileName =
      "my-cookie_" + extractHostname(currentUrl) + "_" + now_day + ".json";
    a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    json = JSON.stringify(hash_cookie);
    blob = new Blob([json], { type: "octet/stream" });
    url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  };
  document.getElementById("btnImportCookie").onchange = function () {
    var reader = new FileReader();
    var jsonObj = {};
    reader.onload = function (event) {
      Object.assign(jsonObj, JSON.parse(event.target.result));
      loadObject(JSON.parse(event.target.result));
    };
    reader.readAsText(event.target.files[0]);
  };
  document.getElementById("btnLike").onclick = function () {
    console.log('1');
  };
});

function like_posts() {
  let timePerAction = 1000;
  // Don't modify code below
  (() => {
    console.log("\x1b[36m%s\x1b[0m", "Code by JayremntB, 2020");
    console.log(
      "\x1b[36m%s\x1b[0m",
      "Please remember if you meet an error, just reload page, wait for 3 seconds and run the code again"
    );
    if (timePerAction < 500)
      return console.error("timePerAction must greater than 500");
    let buttonIndex = 0;
    setTimeout(function continuousWhenPageLoad() {
      // get list of "Liked" buttons
      let listLikedButtons = document.getElementsByClassName("e71nayrh  _18vj");
      if (
        buttonIndex > listLikedButtons.length - 1 ||
        listLikedButtons.length === 0
      )
        return console.warn("Not found any posts");
      setTimeout(function clickNextButton() {
        if (buttonIndex > listLikedButtons.length - 1) {
          window.scrollTo(0, document.body.scrollHeight); // scroll to the end of page
          setTimeout(continuousWhenPageLoad, 3000);
          return;
        }
        if (
          listLikedButtons[buttonIndex].firstChild.getAttribute("class") !=
          "q9uorilb sf5mxxl7"
        ) {
          listLikedButtons[buttonIndex].click(); // click Like button
          console.log(`Liked post ${buttonIndex} successfully!`);
        } else console.log("You had liked this post");
        buttonIndex++;
        setTimeout(clickNextButton, timePerAction);
      }, 0);
    }, 0);
  })();
}
// like_posts();
