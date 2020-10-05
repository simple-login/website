---
title: "If you care about user privacy, do NOT use Facebook JS SDK"
date: 2019-11-03T11:13:42+01:00
summary: "Social Login buttons like the ubiquitous **Login with Facebook/Google/Twitter/...** button is convenient for users. However some providers like Facebook inject an *iframe* behind the scene that can track user behavior on the website. "
author: "Son Nguyen Kim"
authorLink: "https://twitter.com/nguyenkims"
authorAvatar: "/images/son.jpg"
---

Social Login buttons like the ubiquitous **Login with Facebook/Google/Twitter/...** button is convenient for users as they don't have to go through a lengthy registration process and create yet another username/password. And without a proper password manager (which probably 99% users don't use), they tend to reuse the same password which is bad in terms of security!

However behind the scene, some SDKs (I'm looking at you Facebook!) inject an iframe in your website to display the **Continue as {MyName}** or **Login with Facebook** button. Loading this iframe allows Facebook to know that this specific user is currently on your website. Facebook therefore knows about user browsing behavior without users' explicit consent. If more and more websites adopt Facebook SDK then Facebook would potentially have user's **full browsing history**! And as with "With great power comes great responsibility", it's part of our job as developers to protect users' privacy even when they don't ask for.

> Loading this iframe allows Facebook to know that this specific user is currently on your website

{{< rawhtml >}}
<img src="/blog/facebook-js-sdk/facebook-sdk.png" class="w-75" alt="Facebook SDK screenshot">
{{< /rawhtml >}}

The iframe is actually injected in a second script loaded by the `https://connect.facebook.net/en_US/sdk.js`:

{{< rawhtml >}}
<img src="/blog/facebook-js-sdk/facebook-iframe.png" class="w-50" alt="Facebook iFrame screenshot">
{{< /rawhtml >}}

So what should we do to provide this **Login with Facebook** button to our users? The good news is this is actually easy as Facebook implements OAuth2/OpenID standard so you can use any OAuth2/OpenID library to add the Facebook login button. You can also add other login providers like Google, Github, Apple ... at the same time as those are also OAuth2/OpenID compliant.

Here are some resources to implement OAuth2/OpenID in your app for different languages/frameworks:

- JS: [hello.js](https://adodson.com/hello.js/), [jso](https://github.com/andreassolberg/jso), [oidc-client-js](https://github.com/IdentityModel/oidc-client-js). oidc-client-js is used to create some OAuth2/OpenID libraries as listed on https://github.com/IdentityModel/oidc-client-js/wiki
- Python: [Requests-OAuthlib](https://github.com/requests/requests-oauthlib), [Authlib](https://github.com/lepture/authlib), [Python Social Auth](https://python-social-auth-docs.readthedocs.io/en/latest/)
- NodeJS: [PassportJS](http://passportjs.org/), [openid-client](https://github.com/panva/node-openid-client).

If you happen to use Flask (Python), I have written an article on dev.to on how to implement OAuth2/OpenID into a Flask application: https://dev.to/simplelogin/create-a-flask-application-with-sso-login-f9m

If you need Facebook SDK, please ask user's consent before loading Facebook SDK or only load the SDK when the user clicks on the `Login with Facebook` button.
