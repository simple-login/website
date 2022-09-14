---
title: "Introducing PGP"
date: 2020-03-19T15:13:42+01:00
summary: "Pretty Good Privacy (PGP) is a program to encrypt your emails, texts, files, etc. As emails on Gmail, Yahoo, Outlook and other popular email services are stored in **cleartext**, PGP can be a solution to keep your emails from being read & analyzed by these big techs."
author: "SimpleLogin team"
authorLink: "https://twitter.com/simplelogin"
authorAvatar: "/logo-square.svg"

layout: "single-toc"
intro: "Pretty Good Privacy (PGP) is a program to encrypt your emails, texts, files, etc. As emails on Gmail, Yahoo, Outlook and other popular email services are stored in cleartext, PGP can be a solution to keep your emails from being read & analyzed by these big techs.


SimpleLogin now supports PGP.
"
---

### What is PGP?

[Pretty Good Privacy](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) (PGP) was created in 1991 as a way to encrypt your emails, texts, files, etc. Used by Edward Snowden, journalists, dissidents PGP is highly secure and almost unbreakable.

In PGP, you have 2 keys: the private key that allows you to decrypt the emails and that you should never lose. The public key is public (hence the name) that allows anyone who wants to send you an email to encrypt the email. Only you can then read the encrypted email.

> In practice, if someone wants to send you a secret message that only you can read, this person encrypts the message using your public key.

### SimpleLogin 💌 PGP
Without PGP, the emails sent to an alias are forwarded by SimpleLogin **as-is** to your mailbox, leaving anyone in-between or your email service being able to read your emails.

{{< rawhtml >}}
<img src="/blog/without-pgp.png" class="w-100 my-3" style="max-width: 800px" alt="Without PGP">
{{< /rawhtml >}}

---

With PGP enabled, all emails arrived at SimpleLogin are **encrypted** with your public key before being forwarded to your mailbox.

As emails are not stored on SimpleLogin, only you can read your emails.

All emails are also signed with our PGP key that you can download on [openpgp.org](https://keys.openpgp.org/search?q=signer%40simplelogin.io) that belongs to signer@simplelogin.io

{{< rawhtml >}}
<img src="/blog/with-pgp.png" class="w-100 my-3" style="max-width: 800px" alt="With PGP">
{{< /rawhtml >}}


> If you upload your PGP public key on SimpleLogin, **only you** can now read the emails sent to your aliases.

### Enable PGP on SimpleLogin

You can create and manage your keys when adding/editing your mailboxes. Check it out your [mailbox dashboard ↗](https://app.simplelogin.io/dashboard/mailbox).

As PGP encryption is resource-intensive, this feature is only available in the Premium plan or during the trial period.

