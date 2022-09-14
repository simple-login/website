---
title: "Introducing Alias Directory | Why it's better than Username"
date: 2020-01-14T11:13:42+01:00
summary: 'Lot of users complain that every time they need an email, they need to go to SimpleLogin dashboard to create an alias and this flow is just too slow. There must be a better way!'
author: "SimpleLogin team"
authorLink: "https://twitter.com/simplelogin"
authorAvatar: "/logo-square.svg"
---

A lot of users complain that every time they need an email, they need to go to SimpleLogin dashboard to create an alias and this flow is just too slow.

There must be a better way!

Entering alias **directory**, a way to quickly create an email address whenever you need one.
Just use:

{{< rawhtml >}}

<div class="pl-3 py-2 bg-light">
    your_directory<span style="font-size: 20px">/</span><b>anything</b>@simplelogin.co   OR <br>
    your_directory<span style="font-size: 24px">+</span><b>anything</b>@simplelogin.co   OR <br>
    your_directory<span style="font-size: 24px">#</span><b>anything</b>@simplelogin.co <br>
</div>
{{< /rawhtml >}}

next time you need an email address.

**anything** could really be anything, it's up to you to invent the most creative alias 😉.

**your_directory** is the name your directory. Voilà, simple, right?

If you come from [33mail](https://www.33mail.com), a directory is quite similar to the 33mail's `username`. We have decided to NOT use the same naming because of several reasons:

- `username` doesn't sound right technically. As it's used in "@username.33mail.com", it should be rather named `subdomain` or maybe `namespace`.

- Our directory ambition is much more than a wildcard alias. With both directory and custom domain, one could use `com/` to handle emails for Communication department, `tech/backend/` for all emails related to the backend team. This is because directory structure is recursive, allowing more combinations. For the moment, directories **only** work with SimpleLogin domains and the possibility to use directories with your custom domains are in progress. You can track its progress on our [roadmap](https://github.com/simple-login/app/projects/1#card-57046977).

- `/` is a perfectly valid email character. According to [Wikipedia](https://en.wikipedia.org/wiki/Email_address)

    > printable characters !#$%&'*+-/=?^_`{|}~;

    are all valid characters. We also support `#` and `+` as a separator.

- It's almost impossible to implement a strict [DMARC Alignment](https://en.wikipedia.org/wiki/DMARC#Alignment) for wildcard subdomains. As setting up DMARC is highly recommended to reduce the chance your emails ending up in the recipient's Spam folder, supporting this alias format is maybe not a good idea.

This feature is currently only available in the premium plan.



