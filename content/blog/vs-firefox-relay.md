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
    Recently, we have noticed the rise of some new services in the email aliases space. One of them, [Firefox Relay](https://relay.firefox.com) is a Firefox extension developed by the Mozilla Foundation itself.


    In this blog post, we take a look at the differences between Firefox Relay and SimpleLogin.

---

### Both are open-source

Both SimpleLogin and Firefox relay codes are open source, that means anyone can view and inspect the code. You can read the code to understand how the service works, how data is secured and to make sure there's no backdoor. As emails can contain personal, sensitive information, open source email services should be preferred over closed source, proprietary ones.

Firefox Relay code is available on [GitHub](https://github.com/mozilla/fx-private-relay). 

All SimpleLogin components, including the website, iOS/Android apps, Chrome/Firefox extensions, are also available on [GitHub](https://github.com/simple-login).

### Self-hosting

Self-hosting refers to the possiblity of running a software on your own server so you can have a greater control over the program.

Firefox Relay, although open source, doesn't provide instructions for self-hosting. Running Firefox Relay on your server can be also quite difficult because of the following reasons:

- Firefox Relay depends on Firefox Accounts for the authentication, that means you need to have a Firefox account in order to use Firefox Relay

- Firefox Relay depends on AWS SES service (an email service provided by Amazon) to send the emails. That means you need to have a AWS account in order to use Firefox Relay for forwarding the emails.

SimpleLogin, on the other hand, is the first email alias service that supports self-hosting. As SimpleLogin is based on Docker, it can be run almost anywhere (currently our Docker image isn't compatible with ARM servers but [we are working on it](https://github.com/simple-login/app/issues/270))

Once the SimpleLogin server is run, you can also change the API URL in the mobile apps and browser extensions to point to this server: you don't have to rebuild the extension (that requires Nodejs) or the mobile apps (require XCode for iOS and Android Studio for Android) in order to use your SimpleLogin server.


### Business models

Firefox Relay is free at the moment. You can create up to 5 aliases in Firefox Relay. As Firefox Relay is financed by the Mozilla Foundation, having a sustainable business model at the beginning isn't probably required. However as [Mozilla recently lays off 250 people](https://www.theverge.com/2020/8/11/21363424/mozilla-layoffs-quarter-staff-250-people-new-revenue-focus), Mozilla might need to think about Firefox Relay monetization soon.

SimpleLogin has two tiers. The free tier gives you access to all the essentials you need to get started with email aliases. There is no limit on band-width, TOTP is included, and you can create up to 15 aliases. Where we differ with Firefox Relay is with our premium plan which gives you access to PGP encryption, unlimited aliases and custom domains, etc for $3 a month or 30$ a year.

### Platforms lock-in

Firefox Relay is currently available through the Firefox browser or via the website. It doesn't provide an extension for Chromium-based browsers and doesn't have a mobile app. This dependence on the Mozilla ecosystem (albeit a great one) is comparable to using "Sign in with Apple" might lock users in the Apple ecosystem.

On the other side, **SimpleLogin doesn't target one specific platform**: SimpleLogin has apps for both Android (PlayStore and F-Droid), iOS and our browser extension is available on nearly every browser: Chromium-based browser (Chrome, Brave,...), Firefox and (even) Safari.

### Able to send emails from alias

Firefox Relay doesn't support replying to a forwarded email or sending emails from an alias at the moment. Though most people use aliases for receiving emails, we might run into a situation that requires sending emails from an alias, for example to contact the support or answer a personalized email. 

SimpleLogin supports sending emails from alias through the *reverse-alias* which is an alias for the sender. For this reason, 
 

#### Dependency on third party services

Firefox Relay relies on AWS SES - the email service provided by Amazon - to receive and forward emails to your mailbox. While Amazon is not ideal in terms of privacy, Mozilla guarantees that only they know the association between your mailbox and your aliases.

AWS also takes care of scanning the emails to not forward spams. Though scanning for spam is necessary, a virus/spam scan program might store the email content for machine learning purpose which isn't great for emails that contain sensitive information. This risk is however probably insignificant for non-personal emails like marketing emails or newsletters.

SimpleLogin, on the other hand, decided to create our own email system and don't rely on any external service. SimpleLogin is also cloud agnostic and should be able to be run anywhere, either on a small home server for people who want self host or on a powerful dedicated server as in our SaaS version. At the beginning however, SimpleLogin was leveraging AWS for the infrastructure but **we decided to leave the platform in February 2020**. You can read more about this move [here](https://simplelogin.io/blog/we-left-aws/)

Spambot is one of the greatest challenges that any email service faces. Fighting against those bots requires adaptive algorithms to have a right balance between quickly forwarding emails you are waiting for and chasing off spambots. Having our own email system allows a greater flexibility.

### Features comparaison

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

For this reason, email alias services usually have several domains in case one of them is blocked and so to buy time to contact the website in question to remove this limit.

SimpleLogin has several domains and some are only available in the premium domains. We also have a great community to help detecting attempts (like [this one](https://github.com/ivolo/disposable-email-domains/issues/846)) to block SimpleLogin domains.

We also recommend users to have their own domain if possible as this allows a greater flexibility and their domain isn't likely to be blocked.

#### Specific features

Firefox Relay seems to still be pretty early in its development. Because of that, they do not offer additional features aside from the forwarding capacity.

Some noteworthy features:

**1.** PGP encryption (premium users only). Once enabled, SimpleLogin will encrypt all emails before forwarding them to your "real" email address.

**2.** Able to reply to forwarded emails or send emails from your alias. In the FAQ, Firefox team seems to be working on this feature at the time of writing this blog post.

**3.** Custom domain (premium users only). You can add your own domain and create aliases like hi@my-domain.com

### Conclusion

Using email aliases isn't mainstream (yet) and has probably the same popularity as password managers 10 years ago. For this reason, we don't see Firefox Relay as a competitor but rather a co-pilot in the fight to gain back control of our data.  
Having reputed companies investing in the email aliases technology like Apple and Firefox also validates  the need for email aliases.

