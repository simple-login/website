---
title: "We decided to leave AWS"
date: 2020-02-17T10:13:42+01:00
summary: "I've always been using AWS for hosting from simple prototypes to critical B2B systems. Thanks to its incredible catalog of products, almost all needs are covered..."
author: "Son Nguyen Kim"
authorLink: "https://twitter.com/nguyenkims"
authorAvatar: "/images/son.jpg"
---

I've always been using AWS for hosting from simple prototypes to critical B2B systems. Thanks to its incredible catalog of products, almost all needs are covered.

So naturally the first version of SimpleLogin is hosted on AWS. And as we are based in Paris, the Paris data center is picked for the proximity.

For past adventures, I mostly use third-party email delivery services like Postmark, SendGrid, SES, etc. Unfortunately their pricing models are based on the number of emails, which are **not compatible** with the unlimited forwards/sends that SimpleLogin offers. In addition, we want SimpleLogin to be easily self-hosted and its components fit on a single server. For these reasons, we decide to run our MTA (Mail Transfer Agent) on EC2 directly.

I naively believed that would work as AWS is after all a VPS hosting service and everything can be run on EC2.  As it turns out, we ended up spending way too much time and effort to have our EC2 instances handle email delivery correctly:

- Setting up PTR (or [rDNS](https://en.wikipedia.org/wiki/Reverse_DNS_lookup)) record on AWS is only achievable via a [request ticket](https://aws.amazon.com/blogs/aws/reverse-dns-for-ec2s-elastic-ip-addresses/) and requires several exchanges. In comparison, on UpCloud (our current cloud provider) this could be done directly on the dashboard.

- AWS Elastic IP addresses have a **bad** reputation. We tried to whitelist these IPs but some RBL ([Realtime Blacklist](https://en.wikipedia.org/wiki/Domain_Name_System-based_Blackhole_List)) just take forever. And their UX/UI is terrible. We needed to move fast and I feel this mundane task is slowing us down. After attempts to whitelist some IPs, we tested other, newer AWS data centers hoping for better results. Unfortunately, all Elastic IPs we tried were blacklisted by several RBL.

- AWS warned us of "taking appropriate actions" to our outgoing emails, believing our email server had become an [open relay](https://en.wikipedia.org/wiki/Open_mail_relay). We sent back an explanation of our business model that seemed to be ignored. Fortunately that was before the beta so only we might be affected. It would be a catastrophe if this happened to our users. We understand that this was an automatic message and actually a good measure to protect against spams sending from EC2, however we do have appropriate ways to handle this case. And we want to avoid our outgoing emails being read by a cloud provider. We speculate that AWS wants to push for using their SES ([Simple Email Service](https://aws.amazon.com/ses/)). SES is a nice service but as explained earlier, it is not compatible with our goals. SES is used by some of our self-hosting users though. There's a section in our [self-hosting doc](https://github.com/simple-login/app/blob/master/docs/ses.md) that shows how to plug SES into SimpleLogin.

By our experience, AWS doesn’t have in place a good enough mechanism to stop spammers from using their Elastic IPs, leading to their bad network reputation.

### It's time to move

Because of the earlier difficulties, we took a step-back and analyzed our architecture to see if it's really dependent on AWS:

- we used RDS to manage the database. RDS is a solid service that saves us from database maintenance stuffs like backups or patching. Its replication is also a killer feature. However SimpleLogin doesn't use the database that much: we basically just need to get the mailbox associated with an alias in order to forward the emails and that's about all. A SQLite database might just as well do the job.

- we used CloudWatch for monitoring and log management and CloudWatch is a very good solution to centralize and manage logs. Its pricing is also very attractive. However we don't have to be in AWS to use CloudWatch. As the logs are sent asynchronously, using CloudWatch from another cloud doesn't affect performance. In addition some new log services are  quite promising and we'd love to give them a try.

- we used S3 to upload files, at the time of writing only for user profile pictures. Writing to S3 is not frequent so same as for CloudWatch, we can use S3 from another cloud. Both S3 and Cloudwatch are disabled when self-hosting SimpleLogin so all components still fit on a single server.

So we decided it’s maybe better to make SimpleLogin cloud-agnostic and we'll just manage the cloud servers ourself. That opens several advantages:

- We could experience first-hand the difficulties of self-hosting SimpleLogin, otherwise speaking "eat your own dog food".

- We could set up a true redundancy mechanism with SimpleLogin deployed on 2 (or more) separate cloud providers.
- This point is not really important but it's just so refreshing to use a simple UI rather than the complex AWS Console.

We studied some popular options like DigitalOcean, OVH (OVH is very popular in France), Linode, etc and decided to give UpCloud a serious try due to several reasons:

- They came highly recommended by our friend who has more than 100 cloud servers including some email servers on UpCloud and he seems to be pretty happy with their quality & support.

- Their cloud servers are not throttled and able to achieve full performance. We haven't done any benchmark but with the same configuration, we feel UpCloud servers are indeed faster than EC2 ones.

- Port 25 is not open by default and unlocking it requires a careful examination which helps to maintain the network reputation.

We started by moving our staging environment from AWS to UpCloud. The hardest part was to replace RDS. We decided to take on managing our database ourself using Docker along with some monitoring and backup scripts. Other components were easy to move as they were already based on Docker.

After extensively testing the staging environment we took the plunge to migrate the rest of our cloud environment. Our entire infrastructure is now running on UpCloud. Despite our cautious expectations that the migration would be a rough journey, in the end, the move was smooth and downtime less than 10 minutes. After deploying all components on UpCloud, the longest step was actually just waiting for the DNS changes to propagate.

Now our service has run on UpCloud for some time and our users report having much better success with email delivery. Time will tell, but so far we are pretty happy with UpCloud.

Our next step is to deploy SimpleLogin on another cloud provider for redundancy. Any recommendation is welcome!

---
First version of this article is posted on [UpCloud blog](https://upcloud.com/community/stories/importance-network-reputation-email-delivery/)

