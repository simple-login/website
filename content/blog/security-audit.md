---
title: SimpleLogin passes an independent security audit
date: 2022-06-15
summary: "SimpleLogin has completed a third party security audit with leading security firm Securitum which found no critical vulnerability."

author: Son
authorLink: "https://twitter.com/SimpleLogin"
authorAvatar: "https://simplelogin.io/about/me.jpeg"
layout: "single"

---

At SimpleLogin, we believe in a transparent and open source model. Most companies rely on security through obscrurity. Their code is a black box and you can't know how secure their service is.

As we deal with emails which contain sensitive data, people need to know how their data is handled. Our code is open source and anyone can read our code source. Being transparent allows any vulnerability to be quickly addressed and also allows us to receive multiple contributions from the community, ranging from fixing an error in the documentation to creating a full feature that everyone can benefit from.

Though SimpleLogin code is written in an easy to understand way, not anyone can and have the time to go through all our code, and open source does not automatically mean more secure. For that reason, independent security audits of our software are important for ensuring security. 

Recently, we ask [Securitum](https://research.securitum.com/), a leading European security auditing company to run a security audit on SimpleLogin apps. Securitum currently oversees more than 300 security testing projects every year, including for many top European banks. The security audit includes:

- our web app. Its code is available on https://github.com/simple-login/app. The browser extensions aren’t included as they are going through a major revamp.

- our Android app. The code is available on https://github.com/simple-login/Simple-Login-Android . The iOS app isn't included is because we're already working on the second version which will be released soon.

The final report was overall positive and the only important issue was already addressed. No critical issue or security vulnerability was uncovered. The full audit report for web can be downloaded at [web audit result](/audit2022/web.pdf) and the one for Android app on [android audit result](/audit2022/android.pdf)

SimpleLogin isn’t what it is today without the open-source technologies it relies on. The principles of openness are therefore core values to our team. We believe being transparent and open to discussion is the way to create the best product for users.

For any questions or comments about the security audit for SimpleLogin apps, please share them with us on [GitHub](https://github.com/simple-login/app), [Twitter](https://twitter.com/SimpleLogin) and [Reddit](https://www.reddit.com/r/Simplelogin/).
