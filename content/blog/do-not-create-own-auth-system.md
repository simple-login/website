---
title: "Why you shouldn't create your own authentication system"
date: 2019-09-13T10:10:42+01:00
summary: "Implementing **correctly** an authentication system is **hard**. and users don't like it."
author: "Son Nguyen Kim"
authorLink: "https://twitter.com/nguyenkims"
originalUrl: "https://dev.to/simplelogin/why-you-shouldn-t-create-your-own-authentication-system-hjg"
originalWebsite: "dev.to"
---

Implementing **correctly** an authentication system is **hard**.

If you start creating your website/application now, please use a **third party authentication**. Third party authentication can be **social login** (e.g. the ubiquitous `Login with Facebook` button) or **identity management** tools like [Auth0](https://auth0.com) or [Okta](https://www.okta.com).

It's not just about storing username/password in the database. In a standard web application, an authentication system needs to:

- store password [hash](https://en.wikipedia.org/wiki/Cryptographic_hash_function#Password_verification) instead of password in cleartext. And each user should have their own [salt](https://en.wikipedia.org/wiki/Salt_(cryptography)). And the hash function should be [expensive](https://codahale.com/how-to-safely-store-a-password/) to compute. For all this, you would need a very good understanding on Rainbow tables, Bcrypt, Hash algorithms and salts.
- have email verification and reset-password features. For that you might need to generate and store a temporary, short-lived token that is used to activate an account or to reset password. And this is the simple part. Making sure that your email doesn't fall into the **Spam** folder is much harder.

On the front-end side, the app needs to have a decent UI: a login form that at least validates the email and password, a sign-up form, a reset-password form. Not to mention modern authentication expects support for [MFA](https://en.wikipedia.org/wiki/Multi-factor_authentication) and soon (hopefully) [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn).

More importantly, your users don't want to go through a lengthy registration process and create yet another username/password. Without a proper *password manager* (which probably 99% users don't use), they tend to reuse the same password which is bad in terms of security!

So why choosing the hard path and face the risk of password leaks, database hackings and above all, inferior user experience? Of course some applications need to have their own authentication system (banking app is an example but that's also changing with [PSD2](https://en.wikipedia.org/wiki/Payment_Services_Directive)) but they are rather minority.

---

**So which 3rd-party verification should my app use?**

This really depends on your app. If getting user's Facebook feed can be a big plus to your app, then you should probably go with **Login with Facebook**. If having access to user's Twitter feed is valuable, then **Login with Twitter** is more appropriate. If your app only requires user basic information like email, name, avatar picture then [Sign in with SimpleLogin](/developer) is probably the easiest choice.

We should all stop requiring users to choose a username and password. There are better alternatives.

Please let username/password rest in peace ⚰️.
