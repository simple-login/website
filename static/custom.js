// Analytics

(function () {
  // only enable on prod
  let host = window.location.host;
  const sl_hosts = ["simplelogin.io", "www.simplelogin.io", "simplelogin.fr",
    "www.simplelogin.fr", "simplelogin.co", "www.simplelogin.co"];

  if (!sl_hosts.includes(host)) {
    console.log("Analytics is only be enabled in prod");
    return;
  }

  if (store.get('analytics-ignore') === 't') {
    console.log("Analytics is disabled");
    return;
  }

  console.log("init Analytics");

  // Plausible
  // <script async defer data-domain="simplelogin.io" src="https://plausible.simplelogin.io/js/index.js"></script>
  var plausibleScript = document.createElement('script');
  plausibleScript.defer = 1;
  plausibleScript.async = 1;
  plausibleScript.dataset.domain = "simplelogin.io";
  plausibleScript.src = 'https://plausible.simplelogin.io/js/index.js';

  var ins = document.getElementsByTagName('script')[0];
  ins.parentNode.insertBefore(plausibleScript, ins)


})();

// END Analytics


/** Display CTA action and text according to the device **/

const ctaData = {
  link: "https://app.simplelogin.io/auth/register",
  text: "Get your aliases today >>"
}

function ctaMounted(){
  const browser = bowser.getParser(window.navigator.userAgent);
    const browserName = browser.getBrowser().name; // Safari, Chrome, Firefox
    const platform = browser.getPlatform().type; // mobile, desktop
    const osName = browser.getOS().name; // iOS, macOS

    // Chrome Desktop
    if (browserName == "Chrome" && platform == "desktop"){
      this.link = "https://chrome.google.com/webstore/detail/dphilobhebphkdjbpfohgikllaljmgbn";
      this.text = "Get SimpleLogin for Chrome >>"
    }

    // Firefox Desktop
    else if (browserName == "Firefox" && platform == "desktop"){
      this.link = "https://addons.mozilla.org/firefox/addon/simplelogin/";
      this.text = "Get SimpleLogin for Firefox >>"
    }

    // TODO: enable Safari & Mobile links later
    // // Safari Desktop
    // else if (browserName == "Safari" && platform == "desktop"){
    //   this.link = "https://apps.apple.com/app/id1494051017";
    //   this.text = "Get SimpleLogin for Safari >>"
    // }

    // // iOS
    // else if (osName == "iOS" && platform == "mobile"){
    //   this.link = "https://apps.apple.com/app/id1494359858";
    //   this.text = "Get SimpleLogin for iPhone >>"
    // }

    // // android
    // else if (osName == "android" && platform == "mobile"){
    //   this.link = "https://play.google.com/store/apps/details?id=io.simplelogin.android";
    //   this.text = "Get SimpleLogin for Android >>"
    // }
}

new Vue({
  el: "#cta-app",
  delimiters: ["[", "]"],
  data: ctaData,
  mounted: ctaMounted
})

new Vue({
  el: "#cta-app2",
  delimiters: ["[", "]"],
  data: ctaData,
  mounted: ctaMounted
})

/** END Display CTA action and text according to the device **/


// parse the slref and store in cookie
const urlParams = new URLSearchParams(window.location.search);
const refCode = urlParams.get("slref");
if (refCode !== null) {
  //Save refCode into cookie
  Cookies.set("slref", refCode, { domain: window.location.hostname });
}

/* Make sure to not show the hello-bar again if you have already closed it.
    Inspired from https://stackoverflow.com/a/13699319/1428034 */

$(".close").click(function (e) {
  e.preventDefault();
  $.cookie("hellobar", "closed", { path: "/" });
});

// Check if alert has been closed
// only show the hellobar on home page
// if ($.cookie("hellobar") !== "closed" && location.pathname == "/") {
//   const utmSource = urlParams.get("utm_source");
//   if (utmSource === "LesPepitesTech.com") {
//     // Show LesPepitesTech hellobar
//     $("#pepitestech-bar").removeClass("d-none");
//   } else {
//     // Show generic hellobar
//     $("#hello-bar").removeClass("d-none");
//   }
// }

// Thanks to Sami
// Toggle animation
$("#hero-svg").on("click", ".Awesome_Toggle_Button", (e) => {
  $(e.target).closest(".Awesome_Toggle_Button").toggleClass("State_On");
});
