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



var faqTechApp = new Vue({
  el: "#faq-tech-app",
  delimiters: ["[", "]"],
  data: {
    qas: [
      {
        q: `What is the maximum email size?`,
        a: `The current limit is 25MB. For large attachments, we suggest using a file upload service and send the link instead. You can find some file sharing services that respect our privacy on <a href="https://www.privacytools.io/software/file-sharing/">PrivacyTools</a> <br>
        Another reason of having this limit is the PGP encryption is a heavy process, supporting a bigger size can put a big load on our server. <br>
        10MB is also the default size limit used in Postfix, a popular email MTA that SimpleLogin is using.
          `,
      },
      {
        q: `I accidentally deleted an alias, can I restore it?`,
        a: `When an alias is deleted, it's put into a global <b>trash</b> and we make sure that it can't be reused. All historic information on the alias (the account that creates the alias, alias contacts, etc) are deleted to respect your privacy. <br>
        This applies to all aliases created with SimpleLogin domains. <br>
        You can however restore an alias created with your own domain.
          `,
      },
      {
        q: "Where is SimpleLogin PGP key?",
        a: `
        Our PGP key for <a href="mailto:hi@simplelogin.io">hi@simplelogin.io</a> can be downloaded <a download href="/hi_at_simplelogin.asc">here</a> (fingerprint "BB03 4466 7D70 C5EC 30B5  A07C 704B 2826 4E7C A9E6").
        It's also available on <a href="https://keys.openpgp.org/search?q=hi%40simplelogin.io">keys.openpgp.org</a> <br>

        If you enable PGP, all emails are signed with <b>signer@simplelogin.io</b> key which can be downloaded <a download href="/signer_at_simplelogin.asc">here</a> (fingerprint "7961 6C8F 8E0A 05D1 340F  FC20 4749 AAC8 4D4C 4810"). It's also available on
        <a href="https://keys.openpgp.org/search?q=signer%40simplelogin.io">keys.openpgp.org</a>
          `,
      },
      {
        q: "How can I delete my account?",
        a: `
        At the bottom of the <a href="https://app.simplelogin.io/dashboard/setting">Settings page</a>,
        you can delete your account. This operation is irreversible and we have no way to recover your data.
          `,
      },
      {
        q: "Can I use email aliases for important services like bank, government, etc?",
        a: `
        The short answer is yes you can. We use email aliases to run our business, manage our taxes, handle our bank operations and so far so good :). <br>
        A longer answer is the email protocol is designed to be highly resilient and an email is almost never lost. If SimpleLogin cannot deliver the email to your mailbox, we will notify you so you can take appropriate action. You can also set up a secondary mailbox in addition to your primary mailbox that can be used as a backup.
          `,
      }
    ],
  },
});

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
