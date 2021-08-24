---
title: "Outage on July 13 2021 and what we've learned"
date: 2020-08-19T15:13:42+01:00
summary: "On July 13 2021, some SimpleLogin users have experienced several hours of email delay. No emails were lost during this time. This post goes into the details of what happened and what measures we take to prevent this incident from happening again."
author: "SimpleLogin team"
authorLink: "https://twitter.com/simple_login"
authorAvatar: "/logo-square.svg"
layout: "single-toc"
intro: "On July 13 2021, some SimpleLogin users have experienced several hours of email delay. No emails were lost during this time. This post goes into the details of what happened and what measures we take to prevent this incident from happening again.


Here's the timeline of what happened and the measures we've done to better handle these situations.
"
draft: true
---

### First vague: Email delay

In the morning, we received a lot of emails from users informing us about email delays being abnormally high. Similar posts are also posted on our Twitter and Reddit.

After investigation, the email processing time is in order of minutes which is a lot higher than the average 0.2-0.7 second. We turned on several debugging options and saw requests to the database are taking much more time than usual.

The database is immedialtely scaled up 2x in the hope of quickly unblocking the email queue. The email queue seems to become heathy again and emails are quicky processed.

### Second vague: the web app

In the afternoon, we continue the receive the same report about email delay. In addition, we also receive reports about the api becoming extremely slow which affects all clients: web app, mobile app and browser extensions.

Investigations show the same result as in the morning: requests to the database are slow and can take up to several minutes.

Scaling up the database only seems to help tempoparily as the delay comes back after several minutes. We found the slowest query and disabled it. This seems to solve the problem.

However hours later, the api is down again and the database is again the bottlebeck. We are using AWS RDS as database as it promises a quick scalability. We tried different database optimization options but none seems to work. Asking the support now will take hours if not days to solve and we need to solve the issue fast.

### Database migration

Having some doubts in the RDS itself, we decided to run the database locally and try to simulate the traffic. No delay was noticed in this configuration which confirms our hypothesis that something went wrong with RDS.

We have a project in our backlog to replace RDS by another UpCloud database. We run the same test with a UpCloud database and there was indeed no delay. We decided to do the database migration now.

The migration requires several steps:

- Take down SimpleLogin API and email handler to avoid adding data to the database
- Keep Postfix running so all pending emails can be processed later.
- Export the database
- Import the database to a UpCloud database
- Change the API and email handler configuration to use the new database instead.

After the move, the api returns to the normal speed and email queue is handled quickly.

### Lessons

After the incident is solved, we spent the next days to discuss about what should be done to avoid this issue from happening again.

we noticed that the second server mx2.simplelogin.co had a peak of emails. This server is the failover of the principal one (mx1.simplelogin.co) and usually only handles a fraction of emails. We also received emails from some SimpleLogin users asking about the email delay.

Checking the server mx1, the email handler container was down even if it's set up to automatically restart. We noticed that SpamAssassin, a program used for detecting spams is taking 100% of the CPU.

We decided to scale up the main server. After redirecting most of the traffic to the second server, we increased the first server capacity 4x. Everything seemed to be back to normal and pending emails were quickly sent.

### Second vague

In the afternoon, we again noticed that the email queue was abnormally high. Turns out that all requests to SpamAssassin timed out which delayed Postfix email delivery. We had to proceed to the emergency solution of disabling the spam checking. Email delivery was back to the normal but we know that this is just a temporary solution.

### Actions

We made the following actions to avoid similar issues from happening in the future:

- Rewrite the email spam detection to be more fault-tolerant. The spam detection is now handled in our email container instead of in Postfix. That leaves more room for customization so we can easily implement the timeout mechanism along with some monitoring. We spent several days writing this part - that's worth the effort as this allows better control over the SpamAssassin engine.

- Add new monitoring that constantly watches the email delivery heath, especially the number of pending emails. Whenever this number reaches a threshold for consecutive periods, an alert is sent so we can act accordingly. We are building an automatic failover system that launches an urgent approach if necessary.

- We are studying an alternative to SpamAssassin that can be used as a failover. The current best candidate is Rspamd.

### Lessons

In this incident, we have learned to be extra careful when working with software that we don't have much control over. SpamAssassin seems to be the root cause of this incident but this can happen to any other software in the stack.

Things we learned when investigating the issue:

- SpamAssassin suddenly starts timing out requests. Nothing really stands out in the log.

- SpamAssassin times out if the email doesn't end with a linebreak "\n". Some email clients don't automatically add this character.

- Messages in Postfix queue "remember" its destination so flushing Postfix queue doesn't help with this issue. The only solution we found is to re-queue all the messages.

- The ecosystem around emails is scarce. We end up writing a lot of ad-hoc scripts to get the stats and monitor them.

- Python support for asyncio is growing but not fast enough. A lot of our code uses SQLAlchemy which is one of the best ways to work with SQL databases in Python but its support for asyncio is limited. Its upcoming 2.0 version should have better support. We ended up using a lock that defeats the purpose of the async model.

