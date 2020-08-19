---
title: "What happened on August 11 and what we've learned"
date: 2020-08-19T15:13:42+01:00
summary: "On August 11, 2020, some SimpleLogin users have experienced up to 8 hours of email delay. We deeply apologize for this incident and will make sure this issue will never happen again. No emails were lost during this time"
author: "SimpleLogin team"
authorLink: "https://twitter.com/simple_login"
authorAvatar: "/logo-square.svg"
---

On August 11, 2020, some SimpleLogin users have experienced up to 8 hours of email delay. We deeply apologize for this incident and will make sure this issue will never happen again. No emails were lost during this time.

Here's the timeline of what happened and the measures we've done to better handle these situations.

#### First vague

In the morning, we noticed that the second server mx2.simplelogin.co had a peak of emails. This server is the failover of the principal one (mx1.simplelogin.co) and usually only handles a fraction of emails. We also receive emails from some SimpleLogin users who asked about the email delay.

Checking the server mx1, the email handler container was down even if it's set up to auto-restart. We noticed that SpamAssassin, a program used for detecting spams is taking 100% of CPU.

We decided to scale up the main server. We redirected most of the traffic to the second server to reduce loads on the principal one and increase the first server capacity 4x to account for the performance peak. Everything seems to be back to the normal and pending emails seemed to be flushing correctly.

#### Second vague

In the afternoon, we noticed that the email queue is still abnormally high. Turns out that all requests to SpamAssassin timed out which substantially affects Postfix email delivery. We had to proceed to the emergency solution of disabling the spam checking. This has a consequence of letting some spams going through SimpleLogin servers which could affect our server email delivery score.

#### Actions

Here are the actions that we made to avoid this kind of issue from happening in the future:

- Rewrite the email spam detection to be more fault-tolerant. The spam detection is now handled in our email container instead of in Postfix. That leaves us more room for customization so we can easily implement the timeout mechanism along with some monitorings. We spent several days writing this part - that's worth the effort as this allows us to have better control over the old SpamAssassin engine. We are also moving the email handler to the new Python asyncio system.

- Add several monitorings that constantly watch the email delivery heath, especially the number of pending emails. Whenever this number reaches a threshold for consecutive periods, an alert is sent so we can act accordingly. We are also building an automatic failover system that takes an urgent approach: a)redirecting most of the traffic to the second server. b) Disable SpamAssassin temporarily.

- We are studying an alternative to SpamAssassin that can be used as a failover. The best candidate for now is Rspamd.

#### Lessons

In this incident, we have learned to be extra careful when working with software that we don't have much control over. SpamAssassin seems to be the root cause of this incident but this can happen to any other software in the stack.

Some things that we learned when investigating the issue:
- SpamAssassin suddenly starts timing out requests. In the log, we only see some warnings that seem benign.
- SpamAssassin times out if the email doesn't end with a linebreak "\n". Some email clients don't automatically add this character. That took us a while to realize.
- Messages in Postfix queue "remember" its destination so flushing its queue doesn't help with this issue. The only solution we found is to re-queue all the messages.
- The ecosystem around emails is scarce. We end up writing a lot of ad-hoc scripts to get the stats and monitor them.
- Python support for asyncio is growing but not fast enough. A lot of our code uses SQLAlchemy which is one of the best ways to work with SQL databases in Python but its support for asyncio is limited. Its upcoming 2.0 version should have better support. We ended up using a lock that defeats the purpose of the async model.

