---
title: "What is an email alias and how it protects your privacy"
date: 2021-08-21
author: "Nate"
authorLink: "https://twitter.com/simple_login"
authorAvatar: "/logo-square.svg"
layout: "single-toc"
url: "/blog/email-forwarding-declutter-inbox"
draft: false
summary: >
    Our contributor, Nate, explains how to use email forwarding to simplify your digital life and why masking your address can protect you from threats online.
intro: >
    Our contributor, Nate, explains how to use email forwarding to simplify your digital life and why masking your address can protect you from threats online.

    ![Email alias to protect privacy](/blog/Email-forwarding-nate/Email-Forwarding.png)

keywords:  
 - 'what is an email alias'
 - 'how email aliases protect your privacy'

images:
  - https://simplelogin.io/blog/Email-forwarding-nate/Email-Forwarding.png

---

A frequent question I get in my work is how I approach email masking. Whether it’s via a forwarding service like SimpleLogin or the email aliases offered by providers such as ProtonMail, a lot of people fortunately seem to understand the value of such a powerful technique but aren’t really sure how to make the most of it. So in this post, with the help of SimpleLogin – one such service I recommend whole-heartedly – I’m going to share my top three considerations in the hopes that it will give others some ideas on how they can use these services to full effect.

### \1. Custom Domains

First and foremost, the **value of a custom domain cannot be overstated**. Whether it’s your true name or something more privacy-oriented, it’s important to have a domain name that you control. It should go without saying that I’m not encouraging you to ever violate anyone’s Terms of Service or do anything illegal, however technology is a fast-moving and fickle field. You never know if an email masking service will run out of funding (which is one reason I encourage people to pay for a premium plan if you’re able to) or if your provider who’s giving you the aliases will be compromised or ordered to shut down. Just look at the infamous story of [Lavabit in 2013](https://en.wikipedia.org/wiki/Lavabit#Suspension_and_gag_order), who chose to shut down overnight rather than give up user keys. Good on them for doing the right thing, but think about how many people suddenly and without warning found themselves without copies of their emails or, just as importantly, **without any way to receive emails anymore**.

I’ve yet to see an email provider – root or masking – who doesn’t work with custom domains. Now, admittedly, finding a custom domain that is both available and inexpensive is a big ask. With my own custom domain, I spent probably 30-60 minutes brainstorming different ideas before I stumbled on one that was both available and to my liking. However, it can be done. **Don’t be afraid to get creative**. I wanted something that sounded relatively professional and realistic. You may not care if your domain is a random string of numbers and letters. The important point is to have a custom domain. Now, yes, you are trusting your domain provider – such as Njalla, 1984, or Namecheap – but as I’ve said before “[you’re always trusting someone somewhere](https://blog.thenewoil.xyz/the-question-of-trust).” Pick the provider you think is most likely to last and not ban you and go from there.

### \2. Essential vs Non-Essential

With a custom domain in hand and configured to work with my **masking email provider**, the first question I ask myself when creating any masked email address is “how important is this service to me?” Here’s a real example: I pay my utility bills online using a [privacy.com](https://privacy.com) card. I know that **government cybersecurity is a joke**, so I assume that any information I give them should be considered *“pretty much already on the dark web for sale”* so I don’t want to use my real email address with them. However, this is still an important account that I don’t want to lose access to. If my forwarding provider or inbox goes under for any reason, I still need to be able to get emails about when my bill is due. So for this, I use my custom domain.

As an opposite true example, I once ordered some cheap third-party printer ink on eBay. Soon after, I got a newsletter at that address from the seller. I responded to them asking how they got my email address and if the Terms of Service on eBay allowed them to do that. Within hours, my account was “indefinitely suspended” while eBay “reviewed” it for “fraud or suspicious activity.” I’ve since made a new email, masked card, and continue to shop on eBay. I have never received any further communication at the old address updating me on the progress of this “review.” As a consumer who only buys things on occasion, this was not an important account and losing access to it didn’t matter. In that case, and in the case of my new account, **I used a non-custom forwarding domain that’s provided by my masking provider**. Essential accounts I can’t afford to lose get the custom domain, non-essential get the default. It should be noted that using a custom domain likely means that those accounts can all be tied together, which does run the risk of de-anonymizing you, but personally I suspect this is only a concern for those with a very high threat model. People in those situations should probably be wary of all email in general.

### \3. PGP

A common concern about encrypted email providers is that it’s only **partially effective**. Since most people don’t use encrypted email – or PGP at all – it means that the vast majority of your emails won’t be fully end-to-end encrypted and are susceptible to snooping as they enter or leave the server. Personally I think a zero-knowledge provider - such as CTemplar, Proton, or Tutanota – is still worthwhile because it reduces the attack surface: if two people email each other using Gmail, both inboxes can still be accessed by rogue employees or a government with a court order. If one of them uses Tutanota, only one inbox can be accessed at all. **That’s still an improvement, although not perfect.**

Having said that, even in a perfect world where everyone is using a reputable encrypted email provider, there are still some issues. For one, some people rightly have concerns about certain (or all) managed providers. Another issue is that even if everyone were to implement such measures in their lives, it’s unlikely that we could get the services who send us automated emails – like social media and banks – to implement the same security. It’s possible – Facebook offers it – but it’s unlikely that my bank will someday offer me the ability to enter my public PGP key somewhere and they’ll use it to encrypt their messages to me. The two leading masked email providers – **AnonAddy and SimpleLogin** – both offer the ability to add a **PGP public key to your profile**, meaning that as the email leaves their servers and goes to your inbox, it is now safe from prying eyes. “But wait!” you may say, “PGP doesn’t encrypt the subject line!” No worries. You can also **alter the subject line** with the forwarding provider for added protection from this kind of metadata.

The obvious flaw here is that much like with a VPN, all you’ve really done here is **transferred the trust**. The forwarding service is now the one who is capable of seeing and reading your emails as they pass through the server but again, you have to trust someone somewhere. Some people may feel more comfortable trusting a reputable forwarding service than a big-name, possibly-high-target email provider. It also gives you the ability to stay with an established, mainstream provider and improve your inbox security (though for the record I strongly discourage this for a variety of reasons).

### Email forwarding will declutter your inbox

When I set out to write this post, I had originally envisioned a broad walkthrough of what I do, but as I began to write I realized that using a forwarding email service is actually very simple and incredibly user friendly in and of itself. Rather, much like privacy itself, **it’s less about the technical details of the tool and more about the critical thinking and the mindset that goes into it.** With privacy, I encourage people to simply ask questions about every decision they make: “does this person really need this information they’re asking for?” “What are the risks?” “Is there a way I can make this more private?” With email masking, the same general principle applies. Rather than getting caught up in the weeds of “should I use random words or random characters?” focus instead on things like when to use a custom domain and if you should take advantage of subject-changing features. And of course, be sure to vet your email forwarding service of choice. Read the privacy policy and do your research because, as I said, you’re transferring trust. Make sure this person is trustworthy.