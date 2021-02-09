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


var faqPricingApp = new Vue({
  el: "#faq-pricing-app",
  delimiters: ["[", "]"],
  data: {
    qas: [
      {
        q: `What happens to my aliases when I stop the subscription?`,
        a: `When your subscription ends, all aliases you created continue working normally, both on receiving and
        sending emails. Concretely: <br>
        - All aliases/domains/directories/mailboxes you have created are kept and continue working normally. <br>
        - You cannot create new aliases if you exceed the free plan limit, i.e. have more than 15 aliases. <br>
        - As features like catch-all or directory allow you to create aliases on-the-fly, those aliases cannot be
        automatically created if you have more than 15 aliases. <br>
        - You cannot add new domain, directory or mailbox. <br><br>

        For example, if you have 100 aliases by the time your subscription ends, these
        100 aliases will continue receiving and sending emails normally. You cannot however create new aliases.
          `,
      },
      {
        q: `What happens when I reach the maximum number of alias in free plan?`,
        a: `If you are in the free plan, you cannot create new aliases when you reach the maximum number of aliases
        (i.e. 15 aliases). <br>
        Aliases that would otherwise be created automatically via the catch-all domain or directory feature also
        cannot be created. <br>
          `,
      },
      {
        q: "Do you offer discounts?",
        a: `
        We offer students a premium license for free during the scholarship.
        Just send us an email to <a href="mailto:edu@simplelogin.io">edu@simplelogin.io</a> from your school email (typically a .edu address) along with your SimpleLogin account so we can upgrade your account to 1 year of premium plan. If you don't have a school email address, a copy of your student card or another equivalent document suffices. <br><br>

        By the end of each period (i.e. every year), you'll receive a reminder email to renew the license. If you are a student by that time, please send us another email from your .edu account for verification so that your license can be extended for another year. <br><br>

        We also offer important discounts or free premium for: <br>

        - professors or technical staffs working at an educational institute <br>
        - activists, dissidents or journalists <br>
        - charity organizations <br>

        Please send us an email at <a href="mailto:hi@simplelogin.io">hi@simplelogin.io</a> for more info. <br><br>
          `,
      },
      {
        q: `Which payment methods do you support?`,
        a: `We use <a href="https://paddle.com">Paddle</a> for handling payments and Paddle currently supports the
        following payment methods: <br>
        - Mastercard <br>
        - Visa <br>
        - Maestro <br>
        - American Express <br>
        - Discover <br>
        - Diners Club <br>
        - JCB <br>
        - PayPal <br>
        - Apple Pay <br>
        - Wire Transfers (ACH/SEPA/BACS) <br>
        More information can be found on <a
          href="https://paddle.com/support/which-payment-methods-do-you-support/">Paddle supported payment
          methods</a>. <br>

        Send us an email at <a href="mailto:hi@simplelogin.io">hi@simplelogin.io</a> if you want to use other payment options (e.g. IBAN transfer, Cryptocurrency, etc).`,
      },
      {
        q: `Do you have a refund policy?`,
        a: `No we don't have a refund policy because SimpleLogin has a trial period where you can try all premium features.`,
      },
    ],
  },
});

var faqPartnerApp = new Vue({
  el: "#faq-partner-app",
  delimiters: ["[", "]"],
  data: {
    qas: [
      {
        q: `Why should I implement SimpleLogin on my website instead of Facebook/Google login?`,
        a: `That's a very good question! Do you know that Facebook and Google use these buttons to <a
        href="https://dev.to/simplelogin/if-you-care-about-user-privacy-do-not-use-facebook-js-sdk-1j3e">track</a>
      your users browsing history so that they can provide more personalized ads? And do you get any of
      these ad-generated revenue? <br>
      SimpleLogin, with a transparent pricing model (you know where our revenue comes from) with a single
      product that focus solely on improving the login experiences yet still giving users total control over
      their data, does not have any incentive to utilize your user data. <br>
      In addition, we believe in a fair model: users come to your website because your website brings value
      to them and we are in a win-win relationship, so you deserve to have a share of the benefit.
          `,
      },
      {
        q: `Ok, got it. But how about the recent "Sign in with Apple" ?`,
        a: `About Apple, they claim to not selling your users data to advertisers but being an advertiser
        themselves, how can we be sure ... <br>
        Apple can also be considered as an ad platform with their Apple Search Ads so better to not put Apple
        in a (much) higher position than Facebook or Google in terms of privacy. <br>
        Arguments about transparent pricing and fair model apply to Apple too 😉
          `,
      },
      {
        q: "Why should I trust SimpleLogin?",
        a: `
        SimpleLogin code is fully open-source on <a href="https://github.com/simple-login">Github</a> and
                  can be self-hosted. Anyone can freely audit the code or setup their own SimpleLogin server. <br>
                  SimpleLogin revenue is based on a transparent and sustainable model that allows us to have a
                  privacy-first and tracker-free product.
          `,
      },
      {
        q: `Do you plan to release a SDK to support native, windows, etc app?`,
        a: `Yes absolutely! We started with the web platform simply because they can be used for mobile app as
        well via a Android WebView or IOS UIWebView. We plan to provide a SDK and some examples for Android,
        iOS, Windows quite soon. Stay tuned!`,
      },
      {
        q: `How does the "revenue sharing" work?`,
        a: `
        The current advertising model is based on an unfair model where big players (Google, Facebook, etc)
        take almost all benefit and app/content creators get almost nothing. We strongly believe a
        sustainable model should be fair: our partners should get an important part of the revenue because
        together with SimpleLogin, we provide a great login experience to user while respecting user privacy
        at the same time.
      <br>

        The revenue formula is still work-in-progress as we need to take into account different factors
        (mostly payment processing fee and tax rate) but hopefully this can give you a rough idea on how it
        works.
      <br>

        The payment period is monthly and works as following: <br>
        - a user John opts for the premium subscription. John pays 20$/year. After processing fee and taxes,
        let's assume SimpleLogin receives 12$ net (this number is quite optimist in France 😉), which is
        1$/month. Half of this will be distributed to partners. <br>
        - John uses N apps that implement SimpleLogin: each app will get an equal part of the revenue.
      <br>

        Let's put this into a concrete example. The following numbers are of course hypothesis.<br>
        - the average number of app a user uses per month is about 10, half of them implement SimpleLogin,
        that makes N=5. <br>
        - you have a website/app that has 1M users, half of them use SingleLogin and 10% of them are paying
        customers, that is 1 000 000*0.5*0.1=50 000 paying users.
      <br>

        Using our formula, each month you will receive: <br>
        monthly_revenue = total_number_of_paying_user * 1/2 * monthly_net_revenue / average_app_number <br>
      <br>

        monthly_revenue = 50000 * 1/2 * 1 / 5 = 5000$
      <br>`,
      },
    ],
  },
});

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
