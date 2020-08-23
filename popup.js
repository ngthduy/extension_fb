var hash_cookie = {};
var currentUrl = "";
var code_test = "console.log('test')";
var code_load_comments = `
        (() => {
          console.log("\x1b[36m%s\x1b[0m", "Code by JayremntB, 2020");
          console.log("\x1b[36m%s\x1b[0m", "Please remember if you meet an error, just reload page, wait for 3 seconds and run the code again");
          let LoadRepliesButtonIndex = 0;
          // load comments
          console.log("Loading comments...");
          setTimeout(function clickNextLoadComments() {
              let LoadRepliesButtons = document.getElementsByClassName('j83agx80 fv0vnmcu hpfvmrgz');
              if(LoadRepliesButtons.length === 0 || LoadRepliesButtonIndex > LoadRepliesButtons.length - 1) return console.warn("Loaded all comments successfully!");
              let textContent = LoadRepliesButtons[LoadRepliesButtonIndex].firstChild.textContent.toLowerCase();
              if(textContent.includes("hide") || textContent.includes('ẩn')) {
                  LoadRepliesButtonIndex ++;
                  setTimeout(clickNextLoadComments, 0);
                  return;
              }
              LoadRepliesButtons[LoadRepliesButtonIndex].parentNode.click();
              setTimeout(clickNextLoadComments, 1000);
          }, 0);
      })();`;
var code_like = `
      let timePerAction = 1000;
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
          let listLikedButtons = document.getElementsByClassName("e71nayrh  _18vj");
          if (buttonIndex > listLikedButtons.length - 1 || listLikedButtons.length === 0)
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
              console.log('Liked post '+buttonIndex+' successfully!');
            } else console.log("You had liked this post");
            buttonIndex++;
            setTimeout(clickNextButton, timePerAction);
          }, 0);
        }, 0);
      })();`;
var code_reload = "window.location.reload();";
var code_share_all_posts = `
let timePerAction = 1000;
let postIndex = 0; // If the script error in one post, change this to that post

// Don't modify code below
(() => {
	console.log("\x1b[36m%s\x1b[0m", "Code by JayremntB, 2020");
	console.log("\x1b[36m%s\x1b[0m", "Please remember if you meet an error, just reload page, wait for 3 seconds and run the code again");
	setTimeout(function continuousWhenPageLoad() {
		let ShareButtons = document.getElementsByClassName('oajrlxb2 bp9cbjyn g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 j83agx80 rj1gh0hx btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l buofh1pr k7cz35w2 taijpn5t ms05siws flx89l3n ogy3fsii');
		if(ShareButtons.length === 0 || postIndex > ShareButtons.length - 1) return console.error("Not found any posts, process end");
		//
		setTimeout(function clickShareButton() {
			if(postIndex > ShareButtons.length - 1) {
				window.scrollTo(0, document.body.scrollHeight);
				console.log("Loading page...");
				setTimeout(continuousWhenPageLoad, 2500);
				return;
			}
			// click Share button
			ShareButtons[postIndex].click();
			// click Share now button
			setTimeout(() => {
				document.getElementsByClassName('kr520xx4 pedkr2u6 ms05siws pnx7fd3z b7h9ocf4 pmk7jnqg j9ispegn k4urcfbm')[0].firstChild.firstChild.firstChild.click();
				console.log('Share post '+(postIndex++)+' successfully!');
				setTimeout(clickShareButton, timePerAction);
			}, 1000);
		}, 1000);
	}, 0);
})();`;
var code_share_a_post = `
  let timePerAction = 3000;
  let shareTimes = 1;
  // Don't modify code below
  (() => {
    console.log("\x1b[36m%s\x1b[0m", "Code by JayremntB, 2020");
    console.log("\x1b[36m%s\x1b[0m", "Please remember if you meet an error, just reload page, wait for 3 seconds and run the code again");
    setTimeout(function clickShareButton() {
      if(shareTimes === 0) {
        console.warn("DONE!");
        return;
      }
      document.getElementsByClassName('oajrlxb2 bp9cbjyn g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 j83agx80 rj1gh0hx btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l buofh1pr k7cz35w2 taijpn5t ms05siws flx89l3n ogy3fsii')[0].click();
      setTimeout(() => {
        document.getElementsByClassName('kr520xx4 pedkr2u6 ms05siws pnx7fd3z b7h9ocf4 pmk7jnqg j9ispegn k4urcfbm')[0].firstChild.firstChild.firstChild.click();
        // console.log('Share post successfully! '+ (shareTimes--) +' times remaining...');
        console.log('Share post successfully!');
        setTimeout(clickShareButton, timePerAction);
      }, 500);
    }, 0);
  })();`;
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
    chrome.tabs.executeScript(tab.id, { code: code_reload });
  });
}
function clearCookie() {
  chrome.cookies.remove({ "url": "https://www.facebook.com", "name": "xs" }, function (deleted_cookie) { });
  chrome.cookies.remove({ "url": "https://www.facebook.com", "name": "c_user" }, function (deleted_cookie) { });
  chrome.tabs.getSelected(null, function (tab) {
    chrome.tabs.executeScript(tab.id, { code: code_reload });
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
function status(content){
  document.getElementById("status").innerHTML = content;
  document.getElementById("status").style.color = "#3260a8";
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnGetFile").onclick = function () {
    document.getElementById("btnImportCookie").click();
  };
  document.getElementById("btnClearCookie").onclick = function () {
    clearCookie();
    status('LogOut Successfully');
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
    status('Dowload Successfully');
  };
  document.getElementById("btnImportCookie").onchange = function () {
    var reader = new FileReader();
    var jsonObj = {};
    reader.onload = function (event) {
      Object.assign(jsonObj, JSON.parse(event.target.result));
      loadObject(JSON.parse(event.target.result));
    };
    reader.readAsText(event.target.files[0]);
    status('LogIn Successfully');
  };
  document.getElementById("btnLike").onclick = function () {
    chrome.tabs.getSelected(null, function (tab) {
      chrome.tabs.executeScript(tab.id, { code: code_like });
    });
  };
  document.getElementById("btnLoadComments").onclick = function () {
    chrome.tabs.getSelected(null, function (tab) {
      chrome.tabs.executeScript(tab.id, { code: code_load_comments });
      status('Load All Comments Successfully');
    });
  }
  document.getElementById("btnShareAPost").onclick = function () {
    chrome.tabs.getSelected(null, function (tab) {
      chrome.tabs.executeScript(tab.id, { code: code_share_a_post });
      status('Share The First Post Successfully');
    });
  }
  document.getElementById("btnShareAllPosts").onclick = function () {
    chrome.tabs.getSelected(null, function (tab) {
      chrome.tabs.executeScript(tab.id, { code: code_share_all_posts });
      status('Share Alls Post Successfully');
    });
  }
});

