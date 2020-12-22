---
title: "Revert reverse-alias generation algorithm"
date: 2020-12-06T00:00:00+01:00
summary: "Revert the change on reverse-alias generation"
author: "SimpleLogin team"
authorLink: "https://twitter.com/simple_login"
authorAvatar: "/logo-square.svg"

layout: "single-toc"
intro: "We recently made a change in the **reverse-alias** generation algorithm that isn't the best choice in terms of privacy. Here's the details."
---

### What is an reverse-alias?

A *reverse-alias* is the alias for your contact. It allows you to send emails to your contact from your alias. A reverse-alias is automatically created for every sender who sends an email to your alias.

{{< rawhtml >}}

<img src="/blog/reverse-alias.svg" class="img-fluid" style="max-width: 800px; margin: auto" alt="Reverse alias">

{{< /rawhtml >}}

This video quickly shows how to use a reverse-alias:

{{< rawhtml >}}
<iframe width="800" height="315" src="https://www.youtube.com/embed/VsypF-DBaow" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="max-width: 100%"></iframe>
{{< /rawhtml >}}


The reverse-alias used to be generated randomly and looked like `ra+abcdefgh…@simplelogin.co` (**ra+** stands for reverse-alias).

### Recent change

Last month we added a change that includes the original sender address in the reverse-alias . A reverse-alias now looks like `ra+sender.at.domain.com+random_string@simplelogin.co` if the sender is `sender@domain.com`

The goal was to facilitate setting up the email filter and make the reverse-alias less “magical”.

### Revert the change

However thanks to our users, we realized that this change wasn’t ideal as the original sender address can be programmatically extracted by your mailbox service, even if you have PGP enabled. PGP indeed only encrypts the email body and leaves the email headers like `From`, `To`, `Subject` fields in plaintext.

Though this isn’t probably the case in practice, we decided to revert this change and make it optional.
You can explicitly enable it on the [settings page](https://app.simplelogin.io/dashboard/setting#sender-in-ra). Starting from December 23 2020, the anonymous reverse-alias will be used by default, except if you have the option enabled.

We apologise for this final change and hope this doesn’t affect the email filters you set up in the last 2 weeks.

