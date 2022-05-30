---
title: "What makes SimpleLogin aliases a better alternative to Gmail aliases"
date: 2021-10-11
summary: "Gmail aliases allow you to create a new email address by appending the plus sign(**+**) or dot sign (**.**) to your current Gmail address. A closer look at its pros and cons."
author: "SimpleLogin team"
authorLink: "https://twitter.com/simple_login"
authorAvatar: "/logo-square.svg"
layout: "single-toc"
intro: "Gmail aliases allow you to create a new email address by appending the plus sign(**+**) or dot sign (**.**) to your current Gmail address. 

    
    Here's a closer look at the pros and cons of using Gmail aliases, especially when compared with SimpleLogin aliases.
"

images:
 - https://simplelogin.io/blog/gmail-alias/og.png
---

### What is a Gmail alias?

There are 2 ways to create an alias in Gmail:

1) Insert a dot sign (.) somewhere in your Gmail address. Gmail will ignore any dot added before the at sign (@) and treat it just the same as your original Gmail address. It doesn't matter how many dots you use or where you put them.

    For example, say your Gmail is name@gmail.com, any of these addresses are your aliases:
    - n.ame@gmail.com
    - n.a.m.e@gmail.com
    - n...a.m.e@gmail.com
    


2) Insert a plus sign (+) at the end of your username to create a new email address. For example, if your email address is name@gmail.com, you can quickly create a new email address like name+facebook@gmail.com, name+twitter@gmail.com, etc.

With Gmail aliases, you can create an unlimited number of email addresses. Emails sent to your Gmail aliases arrive in your Gmail inbox. Gmail aliases can be handy if you are a developer or a QA engineer who needs to quickly create a new email address.

Though practical, Gmail aliases have several downsides.

### Gmail aliases aren't good for your privacy

Both dot sign and plus sign techniques are well-known and your real Gmail address can be easily extracted: for the dot sign trick, a hacker just needs to remove the dot sign and for the plus sign trick, they can remove the part after the plus sign. For this reason, if your Gmail alias appears in an email leak (that you can easily verify on https://haveibeenpwned.com), a bad actor can extract your real Gmail address and uses it for a spam/phishing campaign or to match with other data breaches.

Having your domain on Gmail (via Google Workspace, formerly G Suite) doesn't help neither: a hacker can check the MX record and if it points to Google (i.e. to `aspmx.l.google.com.`), they know that you're using Gmail behind.

In addition, email addresses that contain the plus sign are sometimes (incorrectly) considered invalid. 

### You can't reply and send emails from Gmail aliases

You can’t reply to an email sent to your Gmail alias: for example, when you reply to an email sent to a name+newsletter@gmail.com, the reply will come from your real email address name@gmail.com

You can't also send new emails from your Gmail alias. Gmail aliases are only for receiving emails.


### SimpleLogin aliases are a better alternative to Gmail aliases

A SimpleLogin alias is simply a forwarding email address: emails sent to an alias are forwarded to your Gmail inbox.

Like Gmail aliases, SimpleLogin allows you to have a unique email address for each website: just create a new alias every time you need an email address.

Usually an email alias only allows email forwarding, but with SimpleLogin aliases, you can also send emails or reply from your alias.

There are currently several ways of creating a new SimpleLogin alias:

- If you are on a laptop/PC, the [Firefox](https://addons.mozilla.org/firefox/addon/simplelogin/) or [Chrome](https://chrome.google.com/webstore/detail/dphilobhebphkdjbpfohgikllaljmgbn) extension allows creating a new email alias by clicking on the SimpleLogin icon in the email field. You can also right click to create a new email alias.

{{< rawhtml >}}
<div class="row mb-3">
    <div class="col">
        <img src="/images/one-click-alias.gif">
    </div>
    <div class="col">
        <img src="/blog/gmail-alias/right-click.png" style="max-width: 200px">
    </div>
</div>
{{< /rawhtml >}}


- Using one of SimpleLogin apps: [web app](https://app.simplelogin.io), Firefox/Chrome extension pop up or [Android](https://play.google.com/store/apps/details?id=io.simplelogin.android)/[iOS](https://apps.apple.com/app/id1494359858) app for more customization. This is the most flexible way and offers advanced options.

- Creating email aliases on the fly via **catch-all** domain. If you own a domain, you can enable the catch-all option that allows you to use `can_be_anything@your-domain.com`: it's automatically created when an email is sent to this address.

- Creating email aliases on the fly via [subdomains](/blog/subdomains/): in case you don't have your own domain, you can use a subdomain provided by SimpleLogin. anything@your-subdomain.simplelogin.com will be created the first time it receives an email. 

### SimpleLogin aliases protect your privacy

A SimpleLogin alias is random and there's no way to link 2 aliases to the same person.

For aliases created with a catch-all domain, they can only be linked together if the domain is has the catch-all option enabled. As there's no reliable way to detect whether a domain has this option enabled or to know how many people are using a domain, a bad actor usually ignores these email addresses altogether.

For email aliases created via **directory**, you can use a different separator than the plus sign to reduce the chance of your email aliases being linked. SimpleLogin also supports the hash sign (#) and the slash sign (/) as separator and in the future, you can also use directory as a subdomain (i.e. `newsletter.simplelogin.fr`). You can then either use `newsletter/python@simplelogin.fr`, `newsletter#python@simplelogin.fr` or `python@newsletter.simplelogin.fr` as an email address.

### SimpleLogin aliases reveal who is selling your data

If you use a different alias for each website and one of your aliases receives emails it isn't supposed to, you can be sure that this alias is either leaked or sold.

For example, if your alias for Facebook receives emails from LinkedIn, that means Facebook has sold your data to LinkedIn or they've had a data breach. Either way, you can just disable this alias. Your Gmail address stays hidden.

Data brokers, [a $200 billion industry](https://www.webfx.com/blog/general/what-are-data-brokers-and-what-is-your-data-worth-infographic/) use your email address as the common denominator to match users between different datasets. Having thousands of email addresses makes their job harder and your privacy better.

### SimpleLogin aliases are more flexible

With SimpleLogin aliases, it's easy to change where you want to receive emails. If you have another mailbox, you can add it to SimpleLogin so every email sent to your email aliases is forwarded to both mailboxes.

It's also easier if you want to change Gmail to another email service: you can change the mailbox in SimpleLogin and all emails will be sent to your new mailbox instead.

You can also have more complex setup like having an email alias for a shopping website that forwards to both your mailbox and your partner's mailbox. 

If you are running a small business, you can also add your domain to SimpleLogin and create aliases like hi@my-business.com, contact@my-business.com, etc.


### Encryption

On Gmail, your emails are stored in **plaintext**, meaning anyone who has access to Gmail servers can read your emails. Even though Gmail claims to have a strict policy in place and promise they would never read your emails, scandals in the past have shown otherwise. With the [recent Twitter hack](https://blog.twitter.com/en_us/topics/company/2020/an-update-on-our-security-incident.html), an employee can be social-engineered to leak the data or leave a backdoor for hackers.

[Pretty Good Privacy](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) (PGP) was created in 1991 to encrypt your emails, texts, files, etc. Used by Edward Snowden, journalists, dissidents, ... PGP is highly secure and almost unbreakable.

In PGP, you have 2 keys: the private key that allows you to decrypt the emails and that you should never lose. The public key is public (hence the name) that allows anyone who wants to send you an email to encrypt the email. Only you can then read the encrypted email.

SimpleLogin [supports PGP](/blog/introducing-pgp/) and allows you to use PGP on email services like Gmail that don't natively support it. For example, you can enable PGP on your Gmail using browser extensions like [Mailvelope](https://www.mailvelope.com/en) or [FlowCrypt](https://flowcrypt.com) and have SimpleLogin encrypting all emails sent to your Gmail.

### Security

Though primarily focused on privacy, SimpleLogin aliases are a good way to increase your online security. Email address is usually used with password as account credential. If you use a different alias for each website, a bad actor now needs to know both your password and alias in order to hack into your account.

### Recommendation

With multiple advantages over Gmail aliases, SimpleLogin aliases is a great tool to protect your online privacy. It's recommended to use a password manager to help remember all the aliases you have.

[Sign up](https://app.simplelogin.io/auth/register) for a new SimpleLogin account to explore how SimpleLogin aliases can help protect your online privacy. If you have used email aliases or forwarding email service in the past, you might be surprised by how easy it becomes now ;).

