---
title: "What makes SimpleLogin a great Firefox Relay alternative?"
date: 2021-03-12T00:00:00+01:00
author: "Max & Son"
authorLink: "https://twitter.com/simple_login"
authorAvatar: "/logo-square.svg"
layout: "single-toc"
draft: true
summary: >
    Firefox Relay is the newest Firefox extension that allows you to quickly create an email alias in Firefox.

    In this blog post, we take a look at the differences between Firefox Relay and SimpleLogin."

intro: >
    Recently, we have noticed the rise of some new services in the email aliases space. One of them, [Firefox Relay](https://relay.firefox.com) is a Firefox extension developed by the Mozilla Foundation.


    In this post, we take a look at the differences between Firefox Relay and SimpleLogin.

---

### Both are open-source

Both SimpleLogin and Firefox relay codes are open-source, that means anyone can view and inspect the code. You can read the code to understand how the service works, how data is secured and to make sure there's no backdoor. As emails can contain personal, sensitive information, **open-source email services should be preferred over closed-source, proprietary ones**.

Firefox Relay code is available on [GitHub](https://github.com/mozilla/fx-private-relay). 

All SimpleLogin components, including the web app, iOS/Android apps, Chrome/Firefox extensions are also available on [GitHub](https://github.com/simple-login).


### Business models

Firefox Relay is free at the moment. You can create up to 5 aliases in Firefox Relay. As Firefox Relay is financed by the Mozilla Foundation, having a sustainable business model at the beginning isn't probably necessary. However as [Mozilla recently lays off 250 people](https://www.theverge.com/2020/8/11/21363424/mozilla-layoffs-quarter-staff-250-people-new-revenue-focus), Mozilla might need to think about a monetization strategy for Firefox Relay in the future.

SimpleLogin has two pricing tiers. The free tier gives you access to all the essentials you need to get started with email aliases. There is no limit on band-width, TOTP is included, and you can create up to 15 aliases. The premium tier gives you access to advanced features like PGP encryption, unlimited aliases and custom domains, etc for $3/month or $30/year.

### Platforms lock-in

Firefox Relay is currently available through the Firefox browser or via the web app. It doesn't provide an extension for Chromium-based browsers like Chrome, Brave, Vivaldi, etc and doesn't have a mobile app. This dependence on the Mozilla ecosystem (albeit a great one) is comparable to using "Sign in with Apple" might lock users in the Apple ecosystem.

SimpleLogin is platform-agnostic and has mobile apps for both Android (PlayStore, F-Droid) and iOS, our browser extension is available on Chromium-based browsers, Firefox and  Safari.

### Able to send emails from alias

Firefox Relay doesn't support replying to a forwarded email or sending emails from an alias at the moment. Though most people use aliases for receiving emails, we might run into a situation that requires sending emails from an alias, for example to contact the support or answer a personalized email. 

SimpleLogin supports sending emails from alias. You can also reply to a forwarded email as a normal email. For this reason, a SimpleLogin alias can be used as a fully-fledged email address. In fact, SimpleLogin is sometimes used as an email solution for small businesses (our company email addresses are actually aliases).

### Self-hosting

Self-hosting refers to the possibility of running a software on your own server so you can have a greater control over the program.

We haven't found instructions for self hosting Firefox Relay. Running Firefox Relay on your server, if possible, can require some additional components because of the following reasons:

- Firefox Relay depends on Firefox Accounts for the authentication.

- Firefox Relay depends on Amazon Simple Email Service (SES) service to forward the emails. That means you need to have a AWS account in order to use Firefox Relay for forwarding the emails.

SimpleLogin supports self-hosting via Docker. Thanks to Docker being available on all platforms, SimpleLogin can be run almost anywhere (currently our Docker image isn't compatible with ARM servers but [we are working on it](https://github.com/simple-login/app/issues/270))

Once your SimpleLogin server is run, you can also change the API URL in the mobile apps and browser extensions to use your server: you don't have to rebuild the browser extension (that requires NodeJS) or the mobile apps (that require XCode for iOS and Android Studio for Android) in order to create and manage your aliases everywhere.
 

#### Dependency on third party services

Firefox Relay relies on Amazon SES to receive and forward emails to your mailbox. While Amazon is not ideal in terms of privacy, Mozilla guarantees that only they know the association between your mailbox and your aliases.

Amazon also takes care of scanning the emails to not forward spams. Though scanning for spam is necessary, a virus/spam scan program might store the email content for machine learning purpose which isn't great for emails that contain sensitive information. This risk is however probably insignificant for non-personal emails like marketing emails or newsletters.

SimpleLogin, on the other hand, doesn't rely on any external service. SimpleLogin is also cloud agnostic and can be run anywhere, either on a small home server for people who want self host or on a powerful dedicated server as in our SaaS version. At the beginning, we did use Amazon for our first version but **decided to leave the platform in February 2020**. You can read more about this move [here](https://simplelogin.io/blog/we-left-aws/).

Spambot is one of the greatest challenges that any email service faces. Fighting against those bots requires adaptive algorithms to have a right balance between quickly forwarding emails you are waiting for and chasing off spambots. Having our own email system allows a greater flexibility.

### Features comparison

#### Email size

Firefox Relay supports email attachments and the email size is limited 150K. This limit is 25M on SimpleLogin.
As attaching a document or an image can exceed 150K, **Firefox Relay is more suitable for automatic emails than personal exchange emails**.

#### PGP encryption

[Pretty Good Privacy](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) (PGP) allows you to encrypt your emails so your email service can't read the email content. This can add another layer of security, especially for popular email services that don't have PGP built in like Gmail, Outlook, Yahoo. 

Firefox Relay doesn't support PGP at the moment. 

SimpleLogin adds support for PGP in our release on March 2020 that you can read more about on [Introducing PGP](/blog/introducing-pgp/).

#### Alias domain

Firefox offers one alias domain: ```relay.firefox.com```: an alias will look like ```youralias@relay.firefox.com```.

Some websites (unfortunately) don't allow email aliases as they consider email aliases the same as temporary email addresses and (mistakenly) consider people using email aliases as suspicious.

For this reason, email alias services usually have several domains in case one of them is blocked.

SimpleLogin has several domains and some are only available in the premium tier. We also have a great community to help detecting attempts (like [this one](https://github.com/ivolo/disposable-email-domains/issues/846)) to block SimpleLogin domains.

We also recommend users to have their own domain as this allows a greater flexibility.

#### Specific features

Firefox Relay seems to still be pretty early in its development. Because of that, it doesn't provide additional features aside from the forwarding capacity.

Some noteworthy features:

**1.** Directory: to be able to create aliases on-the-fly, i.e. without going to SimpleLogin apps or website. More info on [Introducing Alias Directory](/blog/alias-directory/)

**2.** Multiple mailboxes: an alias can forward emails to several mailboxes. This can be useful if you share an alias with a friend/spouse.

**3.** Custom domain. You can add your own domain and create aliases like hi@my-domain.com

### Conclusion

Using email aliases isn't mainstream (yet) and has probably the same popularity as password managers 10 years ago. For this reason, we don't see Firefox Relay as a competitor but rather a co-pilot in the fight to gain back control of our data.  

Having reputed companies investing in the email aliases technology like Apple and Firefox also validates the need for email aliases.

