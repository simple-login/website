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
        q: `What exactly is an <em>email alias</em>?`,
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
          <li>Fully open source: both SimpleLogin server and client code (browser extension, JS library) are <a href="https://github.com/simple-login/app">open source</a> so anyone can freely inspect and (hopefully) improve the code. You would not trust a blackbox to handle your emails, do you?</li>

          <li>No ads, no tracker.</li>

          <li>The only email forwarding solution that is <em>self-hostable</em>, i.e. you could run SimpleLogin on your server. With our detailed self-hosting instructions and most of components running as Docker container, anyone who knows ssh is able to deploy SimpleLogin on their server.</li>

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
        q: `Do you read the forwarded emails?`,
        a: `Technically the emails DO go through SimpleLogin server but email content is NEVER read. SimpleLogin is open source so anyone could freely inspect the code on <a href="https://github.com/simple-login/app">Github</a>.`
      },
      {
        q: `Do you store the forwarded emails?`,
        a: `No, SimpleLogin never stores any forwarded email. You can see how emails are handled in our code on <a href="https://github.com/simple-login/app">Github</a>. Also simply forwarding emails is much easier and cheaper than storing, indexing, ... your emails.`
      },
      {
        q: `What happens if SimpleLogin is gone?`,
        a: `SimpleLogin and how to run it is open source on <a href="https://github.com/simple-login/app">Github</a> so you could run it on your server if one day SimpleLogin disappears. The migration is relatively easy as you can export all your data from SimpleLogin. <br><br>
            SimpleLogin is quite inexpensive to run. As we and our family/friends rely on SimpleLogin, we will keep the service running if ever we decide to move on to the next adventure.
          `
      },
      {
        q: `How SimpleLogin is different than temporary email services?`,
        a: `SimpleLogin alias are permanent as opposed to the temporary emails created on services like <a href="https://temp-mail.org/en/">temp-mail.org</a>, <a href="https://10minutemail.net">10minutemail.net</a>, etc. <br>

            SimpleLogin also doesn't store the emails. <br>

            We are simply different products for different usecases.`
      },
      {
        q: `What is <em>alias directory</em> or <em>catch-all</em> feature?`,
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
        q: `What is a <em>reverse-alias</em>?`,
        a: `A reverse-alias is a <b>special</b> alias that allows you to send email <b>from your alias</b>. <br>
        A reverse-alias is created for each alias you want to send email from and each contact you want to send email to. <br>
        When you send an email to a reverse-alias from your personal email, the email will be sent from your alias to the contact.`
      },
      {
        q: `Is email alias permanent?`,
        a: `As a normal email address, an email alias is always there unless you delete it.`
      },
      {
        q: `I don't find answer to my question here`,
        a: `Please send your question to <a href="mailto:hi@simplelogin.io">hi@simplelogin.io</a>. You can also create an issue on our <a href="https://github.com/simple-login/app/issues">GitHub Issues</a>.`
      }

    ]
  }
})