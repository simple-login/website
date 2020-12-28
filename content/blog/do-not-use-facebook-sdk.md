---
title: "If you care about user privacy, do NOT use Facebook JS SDK [Updated]"
date: 2020-12-28T00:00:00+01:00
summary: "Social Login buttons like the ubiquitous **Login with Facebook/Google/Twitter/...** is convenient for users. However some providers like Facebook do more than just authentication and can track users, even if they haven't clicked on the Facebook login button."
author: "Son Nguyen Kim"
authorLink: "https://twitter.com/nguyenkims"
authorAvatar: "/images/son.jpg"
layout: "single-toc"
intro: "Social Login buttons like the ubiquitous **Login with Facebook/Google/Twitter/...** is convenient for users. However some providers like Facebook do more than just authentication and can track users, even if they haven't clicked on the Facebook login button.


Here's what we found when studying Facebook JS SDK.
"

---

### What is a social login button

A social login button like "Login with Facebook" allows you to sign in to any website/app without going through the lengthy registration process and if you already have an account, not remembering the username/password. The service that provides the user identity is called `identity provider` and usually implements the [OAuth2/OpenID Connect](https://openid.net/connect/) protocol.

Currently, Facebook, Google, Twitter and recently Apple are the most popular identity providers.

### Facebook JS SDK does more than just authentication

Facebook provides a JS SDK that is supposed to help you integrate their login button more easily.

By the time we wrote the first version of this article (Nov 3 2019), Facebook JS SDK injected an `iframe` in your website. Loading this iframe allows Facebook to know someone is currently on your website. Facebook therefore knows about a user browsing behavior without their explicit consent.

This technique is similar to how advertising companies track users.

When we checked recently, Facebook has changed their strategy and now calls this URL https://www.facebook.com/tr/ when the SDK loads instead. This technique is less invasive in terms of privacy than iframe  as it doesn't allow to share the same cookie across different websites. However with a combination of screen size, timestamp, IP Address, etc Facebook can still match requests from different websites to the same person.

If more and more websites adopt Facebook JS SDK, Facebook would potentially have a user's **full browsing history**. And as with "With great power comes great responsibility", it's part of our job as developers to protect users' privacy even when they don't ask for.


### How Facebook JS SDK tracks users

In order to use Facebook JS SDK, you are asked to insert this code snippet into your website:

{{< rawhtml >}}
<img src="/blog/facebook-js-sdk/facebook-sdk.png" class="w-75" alt="Facebook JS SDK screenshot">
{{< /rawhtml >}}

This snippet loads `https://connect.facebook.net/en_US/sdk.js` which loads another script at `https://connect.facebook.net/en_US/sdk.js?hash=long_string&ua=modern_es6`. This script then calls `https://www.facebook.com/tr/` with the following parameters:

```
id: 443675047013187
ev: fb_page_view
dl: https://43585274c21b.ngrok.io/
rl:
if: false
ts: 1609177172037
sw: 2560
sh: 1440
```

We can guess that `ev` stands for `event`, `ts` for timestamp, `sw` for screen width and `sh` for screen height.


{{< rawhtml >}}
<img src="/blog/facebook-js-sdk/fb-requests.png" alt="Facebook requests screenshot">
{{< /rawhtml >}}

### Alternatives

So what should we do to provide the "Login with Facebook" button to our users? The good news is Facebook JS SDK follows OAuth2/OpenID Connect standard so you can use any OAuth2/OpenID Connect library to add the Facebook login button. You can also add other login providers like Google, Github, Apple ... at the same time as those are also OAuth2/OpenID compliant.

This way, you only call Facebook server when a user clicks on the "Login with Facebook" button. This call is also from your server so Facebook doesn't receive any information about a user browser or IP Address.

If you only need authentication, you can also use a more privacy-focused identity provider like SimpleLogin (Disclaimer: I'm SimpleLogin founder) which is open-source and created for developers. More info on [SimpleLogin developer page](/developer).

Here are some resources to implement OAuth2/OpenID in your app for different languages/frameworks:

- JS: [hello.js](https://adodson.com/hello.js/), [jso](https://github.com/andreassolberg/jso), [oidc-client-js](https://github.com/IdentityModel/oidc-client-js). oidc-client-js is used to create some OAuth2/OpenID libraries as listed on https://github.com/IdentityModel/oidc-client-js/wiki
- Python: [Requests-OAuthlib](https://github.com/requests/requests-oauthlib), [Authlib](https://github.com/lepture/authlib), [Python Social Auth](https://python-social-auth-docs.readthedocs.io/en/latest/)
- NodeJS: [PassportJS](http://passportjs.org/), [openid-client](https://github.com/panva/node-openid-client).

If you happen to use Flask (Python), I have written an article on [dev.to](https://dev.to/simplelogin/create-a-flask-application-with-sso-login-f9m) on how to integrate a OAuth2/OpenID provider into a Flask application.

If you need Facebook JS SDK, please ask user's consent before loading the SDK or only load the SDK when the user clicks on the "Login with Facebook" button.
