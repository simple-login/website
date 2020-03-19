---
title: "Introducing PGP"
date: 2020-03-19T15:13:42+01:00
summary: "Pretty Good Privacy (PGP) is a program to encrypt your emails, texts, files, etc. As emails on Gmail, Yahoo, Outlook and other popular email services are stored in **cleartext**, PGP can be a solution to keep your emails from being read & analyzed by these big techs."
author: "Son Nguyen Kim"
authorLink: "https://twitter.com/nguyenkims"
authorAvatar: "/images/son.jpg"
---

Pretty Good Privacy (PGP) is a program to encrypt your emails, texts, files, etc. As emails on Gmail, Yahoo, Outlook and other popular email services are stored in **cleartext**, PGP can be a solution to keep your emails from being read & analyzed by these big techs.

PGP is based on [public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography). Essentially you have 2 keys: a public key and a private key. Your public key is **known** to everyone whereas **only** you have access to the private key. Message encrypted with the public key can only be decrypted with the private key. You can learn more about PGP on [openpgp](https://www.openpgp.org).

> In practice, if someone wants to send you a secret message that only you can read, this person encrypts the message using your public key.

Without PGP the emails sent to an alias are forwarded by SimpleLogin **as-is** to your mailbox, leaving anyone in-between or your email service able to read your emails. 

{{< rawhtml >}}
<img src="/blog/without-pgp.png" class="w-100 my-3" style="max-width: 800px">
{{< /rawhtml >}}

---

With PGP enabled, all emails arrived at SimpleLogin are **encrypted** with your public key before being forwarded to your mailbox. 

As emails are not stored on SimpleLogin, only you can read your emails.

{{< rawhtml >}}
<img src="/blog/with-pgp.png" class="w-100 my-3" style="max-width: 800px">
{{< /rawhtml >}}


> If you upload your PGP public key on SimpleLogin, **only you** can now read the emails sent to your aliases.

You can create and manage your keys when adding/editing your mailboxes. Check it out your [mailbox dashboard ↗](https://app.simplelogin.io/dashboard/mailbox).

As PGP encryption is resource intensive, this feature is only available in the Premium plan or during the trial period. 

After the trial, SimpleLogin stop encrypting the forwarded emails.

