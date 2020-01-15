---
title: "Introducing Alias Directory | Why it's better than Username"
date: 2020-01-14T11:13:42+01:00
summary: 'Lot of users complain that every time they need an email, they need to go to SimpleLogin dashboard to create an alias and this flow is just too slow. There must be a better way!'
author: "Son Nguyen Kim"
authorLink: "https://twitter.com/nguyenkims"
authorAvatar: "/images/son.jpg"
---

Lot of users complain that every time they need an email, they need to go to SimpleLogin dashboard to create an alias and this flow is just too slow.

There must be a better way!

Entering alias *directory*, a way to quickly create an email address whenever you need one.
Just use

> `your-directory`/ANYTHING@simplelogin.co

next time you need an email address.

{{< rawhtml >}}
<p align="left">
    <img src="/blog/alias-directory.png" class="img-fluid" style="max-height: 450px">
</p>
{{< /rawhtml >}}

Directory is quite similar to the `username` concept popularized by [33mail](https://www.33mail.com). We have decided to NOT use the same naming because of several reasons:

- `username` doesn't sound right technically. As it's used in "@username.33mail.com", it should be rather named `subdomain` or maybe `namespace`.

- Our directory ambition is much more than a wildcard alias. With both directory and custom domain, one could use `hr/` to handle emails for HR department, `tech/backend/` for all emails related to backend team. This is because directory structure is recursive, allowing much more combinations.

- `/` is a perfectly valid email character. According to [Wikipedia](https://en.wikipedia.org/wiki/Email_address)

    > printable characters !#$%&'*+-/=?^_`{|}~;

    are all valid characters.

- It's almost impossible to implement a strict [DMARC Alignment](https://en.wikipedia.org/wiki/DMARC#Alignment) for wildcard subdomains. As setting up DMARC is highly recommended to reduce the chance your emails ending up in the recipient's Spam folder, supporting this alias format is maybe not a good idea.

This feature is currently only available in premium plan.





