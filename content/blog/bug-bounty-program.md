---
title: SimpleLogin bug bounty program
date: 2022-10-05
summary: "SimpleLogin makes it easy for you to generate an anonymous email alias anytime you don’t want to share your real email address. As a service to protect your email address, we focused a great deal on security and privacy when we built SimpleLogin. Today, we’re taking the step in improving our security and launching a bug bounty program."

author: Son
authorLink: "https://twitter.com/SimpleLogin"
authorAvatar: "https://simplelogin.io/about/me.jpeg"
layout: "single"

---

SimpleLogin makes it easy for you to generate an anonymous email alias anytime you don’t want to share your real email address. As a service to protect your email address, we focused a great deal on security and privacy when we built SimpleLogin. Recently, we asked Securitum, a leading European cybersecurity firm, to run a [security audit on SimpleLogin apps](https://simplelogin.io/blog/security-audit/) and the result was positive overall. Today, we’re taking the step in improving our security and launching a bug bounty program.

SimpleLogin has been open source since we began, and we’ve received multiple contributions from our community that have strengthened all aspects of our service. This bug bounty program provides our community another way to participate in our development, and extends the work that we already do on a daily basis to keep our service safe. With [SimpleLogin joining Proton](https://proton.me/blog/proton-and-simplelogin-join-forces), the Swiss company best known for [Proton Mail](https://proton.me/mail) and [Proton VPN](https://protonvpn.com), we decided to use the same bug bounty model it has successfully run since 2015.

We invite all security experts worldwide to participate in our bug bounty program and try to find weaknesses within SimpleLogin. We will pay rewards (bounties) for security issues that are reported to us through this program and that we judge to be worthy. If you are a security researcher, you can also participate in the [Proton bug bounty program](https://proton.me/blog/protonmail-bug-bounty-program).


# Rules

**Scope**: The program is limited to the web application, web extension, and mobile applications run by SimpleLogin. Our profiles on Reddit, Twitter, Linkedin, Facebook, etc., do not qualify. Qualifying sites include:



* SimpleLogin.io 
* app.SimpleLogin.io
* api.SimpleLogin.io

**Judging**: The judging panel to determine awards consists of SimpleLogin and Proton developers assisted by one or more outside experts who are part of our security group. Program participants agree to respect the final decision made by the judges.

**Responsible disclosure**: We request that all vulnerabilities be reported to us at [security@proton.me](mailto:security@proton.me). We believe it is against the spirit of this program to disclose any flaw to third parties for purposes other than actually fixing the bug. Participants agree not to disclose bugs found until they have been fixed and to coordinate disclosure with our team through our release notes to avoid confusion.

**Responsible testing**: Please do not spam users, leverage black hat SEO techniques, run phishing campaigns, or do other similarly questionable things. We also discourage vulnerability testing that degrades the quality of service for our users. If in doubt, feel free to contact our Security Team at [security@proton.me](mailto:security@proton.me).

**Adherence to rules**: By participating in this program, you agree to adhere to the above rules and conditions. All rules must be followed to be eligible for awards.


# Qualifying vulnerabilities

Any design or implementation issue that substantially affects the confidentiality or integrity of user data is likely to be within this program’s scope. This includes, but is not limited to:

Web applications



* Cross-site scripting
* Cross-site request forgery
* Mixed-content scripts
* Authentication or authorization flaws
* Server-side code execution bugs
* REST API vulnerabilities

Server	



* SMTP exploits (open relays, etc.)
* Unauthorized shell access
* Privilege escalation

Mobile



* Authentication or authorization flaws
* Server-side code execution bugs
* Mobile local data security breach (without rooting)

We believe in working closely with security researchers and are willing to share technical details, such as API specifications or infrastructure details, with selected researchers to improve security for all SimpleLogin users. Please contact [security@proton.me](mailto:security@proton.me) for more details.


# Qualifying improvements

Sometimes we award bounties for suggestions for improvement that don’t fall into the above categories. This is determined on a case-by-case basis by our judging panel. These include things such as:



* Mail or web server configuration improvements
* Firewall configurations
* Improved DOS/DDoS safeguards
* Path/information disclosure
* SimpleLogin blog or support page issues (such as unpatched software or plugin vulnerabilities)


# Non-qualifying vulnerabilities



* Flaws impacting out-of-date browsers (sorry, IE6 security issues don’t qualify).
* Security issues outside the scope of SimpleLogin threat model.
* Phishing or social engineering attacks.
* Bugs requiring exceedingly unlikely user interactions.
* Out-of-date software – For a variety of reasons, we do not always run the most recent software versions, but we do run software that is fully patched.


# Reward Amounts

The size of the bounty we pay is determined on a case-by-case basis and largely depends on the severity of the issue. To be awarded a bounty, you usually need to be the first person to report an issue, although we sometimes make exceptions. Rough bounty guidelines are provided below:

Minor server and app vulnerabilities that do not compromise user data or privacy: $50

Vulnerabilities that can lead to data corruption: $200

Vulnerabilities that can lead to the disclosure of user data or jeopardize user privacy: $1,000+

Maximum bounty: $10,000