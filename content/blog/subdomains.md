---
title: Introducing subdomains
date: 2021-11-13
summary: If you don't have a custom domain, this new feature allows you to own a subdomain on SimpleLogin and create aliases with it. Just make up an alias like anything@your-sub.aleeas.com when you need to provide an email address. The alias will be created the first time it receives an email.
author: SimpleLogin team
authorLink: "https://twitter.com/simple_login"
authorAvatar: "/logo-square.svg"
layout: "single"

---

One of our most frequent complaints is about some websites don't allow special characters used in [directory](/blog/alias-directory/). This makes the directory harder to use in practice.

Recently, with the release of the **auto create** feature in custom domain, domain management has become really flexible in SimpleLogin and we want to make that power available to people who don't have a custom domain as well.

We are therefore happy to announce the new feature **Subdomains**. 

To use it, just head to the Dashboard and notice the new Subdomains button on the menu:

![](/blog/subdomain/menu.png)

You can then create a new subdomain, `my-sub` in this case:

![](/blog/subdomain/new.png)

Once created, you can either create a new alias with this new subdomain

![](/blog/subdomain/new-alias.png)

or just start make up aliases like `anything`@my-sub.aleeas.com. `anything` can be replaced by, well, anything :).

If you want to have more control over the subdomain, you can also use the "Auto Create". Although this uses regular expressions, you don't need to be a regular expression guru to use it.

![](/blog/subdomain/auto-create.png)

The subdomain feature is currently only available in the Premium plan.