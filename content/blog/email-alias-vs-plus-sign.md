---
title: "What makes email alias a better alternative to email plus sign (+) "
date: 2020-12-19T00:00:00+01:00
summary: "Email subaddressing, also known as Gmail plus sign (+) trick allows you to create a new email address by appending the plus sign(**+**) to your current email address. A closer look at its pros and cons."
author: "SimpleLogin team"
authorLink: "https://twitter.com/SimpleLogin"
authorAvatar: "/logo-square.svg"
layout: "single-toc"
intro: "[Email subaddressing](https://en.wikipedia.org/wiki/Email_address#Subaddressing), also known as plus sign (+) trick, is popularized by Gmail and now supported by most email providers. It allows creating a new email address by simply appending the plus sign(**+**) to your current email address.


For example, if your email address is `name@email.com`, you can quickly create a new email address like `name+facebook@email.com` for Facebook, `name+twitter@email.com` for Twitter, etc.


Here's a closer look at the pros and cons of using the plus sign trick, especially when compared with email aliases.
"

images:
 - https://simplelogin.io/blog/plus-sign/plus-sign.png
---

### Plus sign trick advantages

The main advantage of the plus sign trick is it's easy to use and already available.

If you use email filters, email subaddressing is also very useful. For example, you can set up a filter to move all emails sent to `name+groupon@email.com` to the **Promotion** folder.

With subaddressing, you can create an unlimited number of email addresses: just add something after the plus sign and you’ll have a new email address.

If you are a developer or work in QA, being able to quickly create a new email address is very helpful when testing a website or application.

### What are SimpleLogin email aliases?

An email alias is simply a forwarding email address. Emails sent to an email alias are forwarded to your original email address.

Like the plus sign trick, SimpleLogin allows you to have a different email address for each website: just create a new email alias everytime you need an email address.

Usually an email alias only allows email forwarding but with SimpleLogin, you can also send emails or reply from your email alias.

Currently there are 4 ways of creating a new email alias in SimpleLogin:

- If you are on a laptop/PC, the [Firefox](https://addons.mozilla.org/firefox/addon/simplelogin/) or [Chrome](https://chrome.google.com/webstore/detail/dphilobhebphkdjbpfohgikllaljmgbn) extension allows creating a new email alias by clicking on the SimpleLogin icon in the email field. You can also use the right click menu to create a new email alias.

![](/images/one-click-alias.gif)

- Using one of SimpleLogin apps: [website](https://app.simplelogin.io), Firefox/Chrome extension popup or [Android](https://play.google.com/store/apps/details?id=io.simplelogin.android)/[iOS](https://apps.apple.com/app/id1494359858) app for more customization. This is the most flexible way and offers advanced options.

- Creating email aliases on the fly via **catch-all** domain. If you own a domain, you can enable the catch-all option that allows you to use `can_be_anything@your-domain.com` as email address: it's automatically created when an email is sent to this address.

- Creating email aliases on the fly via [subdomains](/blog/subdomains/): in case you don't have your own domain, you can use a subdomain provided by SimpleLogin. anything@your-subdomain.simplelogin.com will be created the first time it receives an email.

### Plus sign trick email address isn't good for privacy

Though practical, plus sign trick is well-known and your real email address can be easily extracted: one just needs to remove the part after the plus sign. For this reason, if your subaddress appears in an email leak (that you can easily verify on https://haveibeenpwned.com), a bad actor can extract your real email address and uses it for a spam/phishing campaign or to match with other data breaches.

Email addresses that contain the plus sign are sometimes (incorrectly) considered invalid. Even worse, a website can silently drop the part after the plus sign and use your real email address instead.

If you use Gmail, you can't also reply from the subaddress. When you reply to an email sent to a `name+newsletter@gmail.com`, the reply will come from your real email address `name@gmail.com`

{{< rawhtml >}}
<br>
  <div style="padding: 35px; background-color: #f8f9fa; border-radius: 15px;">
<!--     <img src="/logo.svg" style="height:35px;"/>
    <br><br><br> -->
    <p class="mb-2 h5"><strong>Regain control of your inbox with SimpleLogin</strong></p>
    <p class="mb-2">
        SimpleLogin offers a better protection for your identity than subaddressing. With SimpleLogin you can generate a unique <em data-toggle="tooltip" data-html="true" title="" data-original-title="An email alias (or alias for short) is an email address that <b>doesn't store</b> emails: all emails sent to an alias are forwarded to your personal email.">email alias</em> that <strong>forwards instantly</strong> all incoming emails to your inbox.
    </p><br>
    <div class="mb-3">
      <a href="https://app.simplelogin.io/auth/register" class="btn btn-primary btn-wide transition-3d-hover mb-2 mb-sm-0 mr-3">
        <span style="font-weight: 400;">
          Protect your inbox >
        </span>
      </a>
    </div>
  </div>
<br><br>
{{< /rawhtml >}}

### Email aliases protect your privacy

An email alias is random and there's no way to link 2 email aliases to the same person.

For email aliases created with a catch-all domain, they can only be linked together if the domain is known to have the catch-all option enabled. There's no way to detect whether a domain has this option enabled or to know how many people are using a domain, a bad actor usually ignores these email addresses altogether.

For email aliases created via **directory**, you can use a different separator than the plus sign to reduce the chance of your email aliases being linked together. SimpleLogin also supports the hash sign (#) and the slash sign (/) as separator and in the future, you can also use directory as a subdomain (i.e. `newsletter.simplelogin.fr`). You can then either use `newsletter/python@simplelogin.fr`, `newsletter#python@simplelogin.fr` or `python@newsletter.simplelogin.fr` as email address.

### Email aliases reveal who are selling your data

If you use a different email alias for each website and one of your aliases starts receiving emails it isn't supposed to receive, you can be sure that this alias is either leaked or sold.

For example, if your email alias for Facebook receives emails from LinkedIn, that means Facebook has sold your data to LinkedIn or they've had a data breach. Either way, you can just disable this alias. Your real email address stays hidden.

Data brokers, [a $200 billion industry](https://www.webfx.com/blog/general/what-are-data-brokers-and-what-is-your-data-worth-infographic/) use your email address as the common denominator to match users between different datasets. Having thousands of email addresses make their job harder and your privacy better.

### Email aliases are more flexible

With email aliases, it's easy to change where emails are forwarded. You can just add an additional mailbox so every email sent to your email aliases is forwarded to both mailboxes.

You can also have more complex setup like having an email alias for a shoping website that forwards to both your mailbox and your partner's mailbox. Or an email alias for your support team that allows anyone to receive customer requests and reply from the support email address.


### Additional protection

On popular email services like Gmail, Outlook, your emails are stored in plaintext, meaning anyone who has access to their servers can read your emails. Even though these services claim to have a strict policy in place and promise they would never read your emails, scandals in the past have shown otherwise. With the [recent Twitter hack](https://blog.twitter.com/en_us/topics/company/2020/an-update-on-our-security-incident.html), an employee can be social-engineered to leak the data or leave a backdoor for hackers.

[Pretty Good Privacy](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) (PGP) was created in 1991 as a way to encrypt your emails, texts, files, etc. Used by Edward Snowden, journalists, dissidents, ... PGP is highly secure and almost unbreakable.

In PGP, you have 2 keys: the private key that allows you to decrypt the emails and that you should never lose. The public key is public (hence the name) that allows anyone who wants to send you an email to encrypt the email. Only you can then read the encrypted email.

SimpleLogin [supports PGP](/blog/introducing-pgp/) and allows you to use PGP on email services that don't natively support it. For example, you can use PGP on your Gmail using browser extensions like [Mailvelope](https://www.mailvelope.com/en) or [FlowCrypt](https://flowcrypt.com) and have SimpleLogin encrypting all emails sent to your Gmail.

### Security

Though primarily focused on privacy, email aliases are a good way to increase your online security. Email address is usually used with password as account credential. If you use a different email alias for each website, a bad actor now needs to know both your password and the email alias in order to hack your account.

### Recommendations

With multiple advantages over plus sign trick, email aliases is a great tool to protect your online privacy. It's recommended to use a password manager to help remember the email aliases used on different websites.

[Sign up](https://app.simplelogin.io/auth/register) for a new SimpleLogin account to explore how email aliases can help protect your online privacy. If you have used email aliases in the past, you might be surprised by how easy it becomes now ;).

{{< rawhtml >}}
<br>
  <div style="padding: 35px; background-color: #f8f9fa; border-radius: 15px;">
    <img src="/logo.svg" style="height:35px;"/>
    <br><br><br>
    <p class="mb-2 h5"><strong>Hide your primary email address</strong></p>
    <p class="mb-2">
        Use your alias as <a href="/temporary-email/">temporary email address</a> or to sign up on any website and add a layer of <strong>privacy and security</strong> while browsing online.
    </p><br>
    <div class="mb-3">
      <a href="https://app.simplelogin.io/auth/register" class="btn btn-primary btn-wide transition-3d-hover mb-2 mb-sm-0 mr-3">
        <span style="font-weight: 400;">
          Create an email alias >
        </span>
      </a>
    </div>
  </div>
<br><br>
{{< /rawhtml >}}

