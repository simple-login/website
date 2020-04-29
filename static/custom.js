/* Make sure to not show the hello-bar again if you have already closed it.
Inspired from https://stackoverflow.com/a/13699319/1428034 */

$('.close').click(function (e) {
  e.preventDefault();
  $.cookie('hellobar', 'closed', { path: '/' });
});

// Check if alert has been closed
if ($.cookie('hellobar') !== 'closed') {
  $('#hello-bar').removeClass("d-none");
}

var faqApp = new Vue({
  el: '#faq-app',
  delimiters: ["[", "]"],
  data: {
    qas: [
      {
        q: `What exactly is an <b>email alias</b>?`,
        a: `Email alias is similar to <a href="https://en.wikipedia.org/wiki/Email_forwarding">forward</a> email
          address: all emails sent to an alias will be forwarded to your inbox. <br>
          Thanks to SimpleLogin technology, you can also send emails <b>from</b> an alias. <br>
          For your contact, the alias is therefore your email address.
          `
      },
      {
        q: `Why do I need SimpleLogin?`,
        a: `When you give away your personal email online, there is a good chance that your email address would end up with a spammer or leaked during a breach. You could check whether your email is leaked using website like <a href="https://haveibeenpwned.com">have i been pwned?</a>. <br><br>

            SimpleLogin could also help manage your <em>business emails</em>. If you own a domain and don't want to pay a full solution like GSuite, you could add the domain into SimpleLogin and create emails like <b>contact@my-domain.com</b>, <b>partner@my-domain.com</b> with aliases. All our business emails (the <b>@simplelogin.io</b>) are actually aliases.
          `
      },
      {
        q: "What is the difference between SimpleLogin and other email forwarding services?",
        a: `
          <ul>
          <li>Fully open source: both SimpleLogin server and client code (browser extension, JS library) are <a href="https://github.com/simple-login/app">open source</a> so anyone can freely inspect and (hopefully) improve the code. You wouldn't trust a blackbox to handle your emails, would you?</li>

          <li>No ads, no tracker.</li>

          <li>The only email forwarding solution that is <em>self-hostable</em>, i.e. you could run SimpleLogin on your server. With our detailed self-hosting instructions and most of components running as Docker container, anyone who knows ssh is able to deploy SimpleLogin on their server.</li>

          <li>You can send/reply emails from alias. There's also no caps or limits on this feature.</li>

          <li>Not just email alias: SimpleLogin is also a privacy-focused and developer-friendly <em>identity provider</em> that: <br>
          - respects user privacy <br>
          - is simple to use for developers. <br>
          SimpleLogin is a privacy-focused alternative to the "Login with Facebook/Google/Apple" buttons.
          </li>


          <li>Plenty of features: browser extension, custom domain, catch-all alias, OAuth libraries, etc. and much more to come.</li>

          <li>Open roadmap at <a href="https://trello.com/b/4d6A69I4/open-roadmap">Trello</a>: you know the exciting features we are working on.</li>
          </ul>
          `
      },
      {
        q: `What is your business model?`,
        a: `Our revenue comes only from subscriptions, that means the product will stay ad-free forever.`
      },
      {
        q: `What happens if SimpleLogin is gone?`,
        a: `
        This is probably the hardest question that a company has to answer :). <br><br>

        As we are using SimpleLogin on a daily basis, for both our personal and professinal usage, in the worst case, we will close registrations for new users so SimpleLogin can only be used by existing users. <br><br>

        For information, <a href="https://www.spamgourmet.com/index.pl">Spamgourmet</a>, a similar email forwarding service has been running for more than 20 years now. Spamgourmet is actually <a href="/blog/spamgourmet/">an inspiration</a> for SimpleLogin.
        <br><br>

        If all this is still not enough, you can also run a SimpleLogin instance yourself as SimpleLogin code is open source and we give detailed instructions on how to run it.
          `
      },
      {
        q: `How SimpleLogin is different than temporary email services?`,
        a: `SimpleLogin alias are permanent as opposed to the temporary emails created on services like <a href="https://temp-mail.org/en/">temp-mail.org</a>, <a href="https://10minutemail.net">10minutemail.net</a>, etc. <br>

            SimpleLogin also doesn't store the emails. <br>

            We are simply different products for different usecases.`
      },
      {
        q: `What is <b>alias directory</b> or <b>catch-all</b> feature?`,
        a: `These 2 features both allow you to create alias <em>on-the-fly</em>, meaning you don't have to open SimpleLogin to create a new alias. <br>
          Enabling <b>catch-all</b> on your domain allows you to use <em>ANYTHING@my-domain.com</em> as alias with <b>ANYTHING</b> being any word. The only limit is it has to have less than 128 characters. <br>

          <b>Alias Directory</b> is similar to catch-all, you can use <em>your_directory+ANYTHING@simplelogin.co</em> as alias. <b>your_directory</b> is the name of the directory you created. `
      },
      {
        q: `I receive an email forwarded to my personal email from an alias. How can I reply to that email? Do I need to go to SimpleLogin to initiate the reply?`,
        a: `You can reply directly from your email client. Just click on the "reply" button, the reply will be routed via SimpleLogin and SimpleLogin will make it coming from your alias. Your personal email will stay invisible to the original sender. <br><br>
          Technically, the <b>From</b> header in your email is replaced by a special alias dynamically generated for each sender. When you reply, your reply is actually sent to this special alias and SimpleLogin will relay the reply back to the sender, making sure the email is sent from your alias. All information about your personal email address is removed during that process.
          `
      },
      {
        q: `Are my emails modified?`,
        a: `No your email content is forwarded <b>as-is</b>, attachments included. SimpleLogin doesn't modify email content and only relies on email <b>headers</b> to do its "magic".`
      },
      {
        q: `What is a <b>reverse-alias</b>?`,
        a: `A reverse-alias is a <b>special</b> alias that allows you to send email <b>from your alias</b>. <br>
        A reverse-alias is created for each alias you want to send email from and each contact you want to send email to. <br>
        When you send an email to a reverse-alias from your personal email, the email will be sent from your alias to the contact.`
      },
      {
        q: `Is email alias permanent?`,
        a: `As a normal email address, an email alias is always there unless you delete it.`
      },
      {
        q: `Where is SimpleLogin server located?`,
        a: `We use UpCloud, a Finland cloud provider. Our server is currently located in its France-Germany datacenter.`
      },
      {
        q: `I don't find answer to my question here`,
        a: `Please send your question to <a href="mailto:hi@simplelogin.io">hi@simplelogin.io</a>. You can also create an issue on our <a href="https://github.com/simple-login/app/issues">GitHub Issues</a>.`
      }

    ]
  }
})


var faqPricingApp = new Vue({
  el: '#faq-pricing-app',
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
          `
      },
      {
        q: `What happens when I reach the maximum number of alias in free plan?`,
        a: `If you are in the free plan, you cannot create new aliases when you reach the maximum number of aliases
        (i.e. 15 aliases). <br>
        Aliases that would otherwise be created automatically via the catch-all domain or directory feature also
        cannot be created. <br>
          `
      },
      {
        q: "Do you offer discounts?",
        a: `
        We offer important discounts or free premium for: <br>

        - students, professors or technical staffs working at an educational institute <br>
        - activists, dissidents or journalists <br>
        - charity organizations <br>

        Just send us an email at <a href="mailto:hi@simplelogin.io">hi@simplelogin.io</a>.
          `
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

        Send us an email at <a href="mailto:hi@simplelogin.io">hi@simplelogin.io</a> if you want to use other payment options (e.g. IBAN transfer, Cryptocurrency, etc).`
      }

    ]
  }
})

var faqPartnerApp = new Vue({
  el: '#faq-partner-app',
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
          `
      },
      {
        q: `Ok, got it. But how about the recent "Sign in with Apple" ?`,
        a: `About Apple, they claim to not selling your users data to advertisers but being an advertiser
        themselves, how can we be sure ... <br>
        Apple can also be considered as an ad platform with their Apple Search Ads so better to not put Apple
        in a (much) higher position than Facebook or Google in terms of privacy. <br>
        Arguments about transparent pricing and fair model apply to Apple too 😉
          `
      },
      {
        q: "Why should I trust SimpleLogin?",
        a: `
        SimpleLogin code is fully open source on <a href="https://github.com/simple-login">Github</a> and
                  can be self-hosted. Anyone can freely audit the code or setup their own SimpleLogin server. <br>
                  SimpleLogin revenue is based on a transparent and sustainable model that allows us to have a
                  privacy-first and tracker-free product.
          `
      },
      {
        q: `Do you plan to release a SDK to support native, windows, etc app?`,
        a: `Yes absolutely! We started with the web platform simply because they can be used for mobile app as
        well via a Android WebView or IOS UIWebView. We plan to provide a SDK and some examples for Android,
        iOS, Windows quite soon. Stay tuned!`
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
      <br>`
      }

    ]
  }
})

// parse the slref and store in cookie
const urlParams = new URLSearchParams(window.location.search);
const refCode = urlParams.get('slref');
if (refCode !== null){
  console.log("Save refCode into cookie", refCode);
  Cookies.set('slref', refCode, { domain: window.location.hostname });
}


// Thanks to Sami
// Toggle animation
$('#hero-svg').on('click', '.Awesome_Toggle_Button', (e) => {
  $(e.target).closest('.Awesome_Toggle_Button').toggleClass('State_On');
});