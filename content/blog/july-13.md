---
title: "Outage on July 13, 2021 and what we've learned"
date: 2021-09-28
summary: "On July 13, some SimpleLogin users have experienced several hours of email delay. No emails were lost during this time. This post goes into the details of what happened and what measures we take to prevent this incident from happening again."
author: "SimpleLogin team"
authorLink: "https://twitter.com/SimpleLogin"
authorAvatar: "/logo-square.svg"
layout: "single-toc"
intro: >
    As promised to our community, we finally have time to write up about the outage on July 13, 2021. 

    
    On this date, some SimpleLogin users have experienced several hours of email delay. No emails were lost during this time. 

    
    This post goes into the details of what happened and what measures we take to prevent this incident from happening again.

---

### First vague: Email delay

In the morning, we received multiple emails informing us about abnormally high email delays. Similar complaints are also posted on our Twitter and Reddit.

After investigation, the email processing time is in order of minutes, which is much higher than the average 0.3 second. We enabled debugging options and noticed requests to the database are taking more time than usual.

The database is immediately scaled up 2x in the hope of quickly unblocking the email queue. At first, the email queue seems to become heathy again and emails are quickly processed.

### Second vague: the Web app

In the afternoon, we notice the same email delay coming back. In addition, we also receive reports about the API becoming extremely slow which affects all frontend clients: web app, mobile app and browser extensions.

Investigations show the same result as in the morning: requests to the database are slow and can take up to several minutes.

Scaling up the database only seems to help temporarily as the delay kicks back after several minutes. We found the slowest query and disabled it. This seems to solve the problem.

However, 2-3 hours later, the API becomes slow again, and the database is again the bottleneck. We have been using AWS RDS as database since the beginning, as it promises a high scalability. We tried different database optimization options but none seems to work. Asking the support now will take hours if not days to solve and we need to solve the issue fast.

### Database migration

Having doubts in the RDS, we ran the database locally and simulate the traffic. No delay was noticed in this configuration, which confirms our hypothesis that something went indeed wrong with RDS.

We have a project in our backlog to replace RDS by [UpCloud](https://upcloud.com/) database which should have a better performance as we’re running our server in UpCloud. We run the same test with the smallest UpCloud database and there was indeed no delay. After some discussions about pros and cons, we decided to do the database migration now.

The migration requires several steps:

- Take down SimpleLogin API and email handler to avoid new data being written to the database.

- Keep Postfix running so all pending emails are kept and can be processed later.

- Export the database from RDS and import it to a UpCloud database.

- Change the API and email handler configuration to use the new database instead.

After the migration, the API returns to the normal speed and email queue is quickly processed.

### Lessons

After the incident is solved, we spent the next days to discuss what should be done to avoid this issue from happening again. Here are some actions:

- Create and publish a [chart](https://chart-embed.service.eu.newrelic.com/herald/4543cfed-08a2-423c-abae-6f1d34de3673?height=600px&timepicker=true) on the email processing time.

- Set up multiple, redundant alert channels on email delay to make sure any abnormal delay is caught early. This alert has already paid off as the delay has once increased to 5 seconds last month. We have then been able to find the issue and fix it before anyone notices.

- Document the mayday procedure so if the same database issue happens again, we can quickly run the procedure.

- Find a better solution for database fallback.

AWS RDS is used by big software companies in the world and its scalability is well known. However, in case of incidents, it’s really hard to investigate and its bloated UI doesn’t make things easier: the UI is extremely slow and crashes several times during our debugging section.

We’ve been using UpCloud database for almost 4 months now and the experience is excellent: everything is simple and fast. The options are not as rich as in AWS RDS but they are straightforward and just work.

We haven’t made any further investigation on the AWS RDS issue as it seems to be unrelated to our code.

