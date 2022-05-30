---
title: "What makes SimpleLogin a great Firefox Relay alternative?"
date: 2021-03-12T00:00:00+01:00
author: "Max & Son"
authorLink: "https://twitter.com/simple_login"
authorAvatar: "/logo-square.svg"
layout: "single-toc"
draft: false
summary: >
    Firefox Relay is a Firefox extension that allows you to quickly create an email alias.

    In this post, we take a look at the similarities and differences between Firefox Relay and SimpleLogin."

intro: >
    Recently, we have noticed the rise of new services in the email aliases space. One of them, [Firefox Relay](https://relay.firefox.com) is a Firefox extension developed by the Mozilla Foundation.


    In this post, we take a look at the similarities and differences between Firefox Relay and SimpleLogin.

---

### Both are open-source

Both SimpleLogin and Firefox relay codes are open-source, that means anyone can view and inspect the code. You can read the code to understand how the service works, how data is secured and to make sure there's no backdoor. As emails can contain personal, sensitive information, **open-source email services should be preferred over closed-source, proprietary ones**.

Firefox Relay code is available on [GitHub](https://github.com/mozilla/fx-private-relay). 

All SimpleLogin components, including the web app, iOS/Android apps, Chrome/Firefox/Safari extensions are also available on [GitHub](https://github.com/simple-login).


### Business model

Firefox Relay includes a free tier and a new premium tier. The free tier allows creation of up to 5 aliases, while the premium tier provides access to unlimited aliases, ability to reply to forwarded emails, and an optional custom subdomain. Currently, the premium tier costs $0.99/month on limited time pricing.

SimpleLogin has two pricing tiers. The **free** tier gives you access to all the essentials to get started with email aliases. There is no limit on bandwidth, TOTP is included, and you can create up to 15 aliases. The **premium** tier includes advanced features like PGP encryption, unlimited aliases and custom domains, etc for $4/month or $30/year.

### Platform availability

Firefox Relay is currently available through the Firefox browser, via the web app, or browser extensions for Chromium-based browsers like Chrome, Brave, Vivaldi, etc. However, a mobile app is not available at this time.

SimpleLogin is platform-agnostic: the browser extension is available on Chromium-based browsers, Firefox and Safari. SimpleLogin also has mobile apps for Android (PlayStore, F-Droid) and iOS.

### Able to send emails from alias

Firefox Relay premium users now have the ability to reply to forwarded emails within 3 months. The time limit on ability to reply could detract from use as more than just an email forwarding service.

SimpleLogin supports sending emails from alias. You can also reply to a forwarded email just like a normal email: the email will be sent from your alias and your personal mailbox stays hidden. For this reason, a SimpleLogin alias can be used as a fully-fledged email address. In fact, SimpleLogin is sometimes used as an email solution for small businesses (our company email addresses are actually aliases).

### Self-hosting

Self-hosting refers to the possibility of running a software on your own server so you can have a greater control.

We haven't found instructions for self hosting Firefox Relay. Running Firefox Relay on your server, if possible, might require additional components because:

- Firefox Relay relies on Firefox Account for authentication.

- Firefox Relay depends on Amazon Simple Email Service (SES) to forward emails.

SimpleLogin supports self-hosting via Docker. Thanks to Docker being available on all platforms, SimpleLogin can be run almost anywhere. Our latest version 3.4.0 at the time of writing also supports ARM so you can also run SimpleLogin on a Raspberry Pi.

Once your SimpleLogin server is run, you can also change the Server URL in the mobile apps and browser extensions to use your server: you don't have to rebuild the browser extension (requiring NodeJS) or the mobile apps (requiring XCode for iOS and Android Studio for Android).
 

#### Dependency on third party services

Firefox Relay relies on Amazon SES to receive and forward emails to your mailbox. While Amazon isn't ideal in terms of privacy, Mozilla guarantees that only they know the association between your mailbox and your aliases.

SimpleLogin doesn't rely on any external service. It is cloud agnostic and can be run anywhere, either on a small home server for people who want self host or on a powerful dedicated server. We did use Amazon for SimpleLogin first version but [decided to leave the platform in February 2020](/blog/we-left-aws/).

### Features comparison

#### Email size

Firefox Relay supports email attachments with an email size limited of 10M. This limit is 25M on SimpleLogin.

#### PGP encryption

[Pretty Good Privacy](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) (PGP) allows you to encrypt your emails so your email service can't read the email content. This adds another layer of security, especially for popular email services that don't have PGP built in like Gmail, Outlook, Yahoo. 

Firefox Relay doesn't support PGP at the moment. 

SimpleLogin [adds support for PGP on March 2020](/blog/introducing-pgp/).

#### Alias domains

Firefox Relay started with the **relay.firefox.com** domain. Aliases looked like ```anything@relay.firefox.com```. The service recently switched to and exclusively uses the domain **mozmail.com**. Aliases now look like ```anything@mozmail.com```. Premium users have the option to utilize a custom domain such as ```anything@custom.mozmail.com```.

Some websites unfortunately don't accept email aliases as they consider email aliases the same as temporary email addresses and people using email aliases as suspicious.

For this reason, email alias services usually have several domains in case one is blocked.

SimpleLogin has several alias domains and some are only available in the premium tier. The SimpleLogin community also helps detecting attempts (like [this one](https://github.com/ivolo/disposable-email-domains/issues/846)) to block SimpleLogin domains.

We also recommend users to have their own domain as this allows a greater flexibility.

#### Specific features

Firefox Relay is relatively early in its development. Because of that, feature sets are slowly rolled out. Recent features released include custom subdomains for premium users and a promotional email blocking setting that attempts to forward important emails while blocking marketing based emails.

Some noteworthy Simplelogin features:

**1.** Multiple mailboxes: an alias can forward emails to several mailboxes. This can be useful if you share an alias with a friend/spouse.

**2.** Custom domain. You can add your own domain and create aliases like hi@my-domain.com

**3.** Subdomain. In case you don't have a domain, you can use a subdomain provided by SimpleLogin, you can then create aliases on the fly like anything@my-subdomain.simplelogin.com. More info on [Subdomains](/blog/subdomains/)

### Conclusion

Using email aliases isn't mainstream (yet) and has probably the same popularity as password managers 10 years ago. For this reason, we don't see Firefox Relay as a concurrent but rather a co-pilot in the fight to gain back control of our data.

Having reputed companies investing in the email aliases technology like Apple and Firefox also validates the need for email aliases.


