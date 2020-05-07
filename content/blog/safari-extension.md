---
title: "Introducing Safari extension - a lot more difficult than we thought"
date: 2020-02-05T10:13:42+01:00
summary: 'After months of working, the first version of our Safari extension is finally available!'
author: "SimpleLogin team"
authorLink: "https://twitter.com/simple_login"
authorAvatar: "/logo-square.svg"
---

After months of working, SimpleLogin Safari extension is finally available, big kudos to [Thanh-Nhon](/about), our iOS/Mac expert!

You can install it on the [AppStore](https://apps.apple.com/us/app/simplelogin/id1494051017?mt=12&fbclid=IwAR0M0nnEKgoieMkmx91TSXrtcScj7GouqRxGgXeJz2un_5ydhIKlbAI79Io). The code is open source on [GitHub](https://github.com/simple-login/mac-app).

{{< rawhtml >}}
<p align="left">
    <img src="/blog/safari-extension.png" class="img-fluid" style="max-height: 250px">
</p>
{{< /rawhtml >}}

SimpleLogin now supports:

- Chrome and other Chromium-based browser like Edge, Opera, Brave, etc

- Firefox
- Safari

These browsers in total represent about 95% of desktop browser share.

{{< rawhtml >}}
<div class="w-lg-80">
<p align="left">
    <img src="/blog/browser-share.png" class="img-fluid">
</p>
<p style="font-size: 12px" class="text-center">Source: https://gs.statcounter.com/browser-market-share/desktop/worldwide</p>
</div>
{{< /rawhtml >}}

---

You might wonder:

> The Chrome/Firefox extension is already done, it must be easy to create the equivalent for Safari right?

Well, it used to be this way. But as Apple is deprecating traditional Safari Extensions in favor of their [Safari App Extensions](https://developer.apple.com/documentation/safariservices/safari_app_extensions), Chrome/Firefox and Safari extensions are now 2 completely separate worlds:

- Chrome/Firefox extensions use web technologies, i.e. HTML, CSS, JS. Whereas a Safari extension is now a combination of web and Mac App (Swift and Objective-C). Not to mention XCode, fun to use when it works but a headache when you try to find something.

- Documentation and resources are scarce. Chrome/Firefox extensions have been there for year. They are well-documented and if we have any questions, it's relative easy to find the answer on StackOverflow. Safari App Extension is new and we can only rely on the official doc, which is not complete itself.

- Safari extensions now follow the Mac app approval process and this is long. In addition there's no easy way currently to distribute a Mac App to beta testers. Anyone who wants to test needs to install XCode, go through all the provisioning steps in order to try the extension on their Mac.

On the bright side, if you love Swift, then you will prefer Safari extension as most of the screens can be done in Swift.

