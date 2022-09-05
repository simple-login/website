---
title: "SimpleLogin Security"
pageTitle: "Security Overview"
url: "/security"
description: "SimpleLogin Security. Keeping your data safe and secure is a huge responsibility and a top priority for us. Here's how we make it happen."
layout: "single_markdown"
---

Keeping your data safe and secure is a huge responsibility and a top priority for us at SimpleLogin.

---

## Domains

SimpleLogin currently operates on the following domains:

- simplelogin.io
- simplelogin.co
- simplelogin.com
- And others we shall not reveal.

Most of our domains implement the following standards:

#### Domain Name System Security Extension (DNSSEC)

[DNSSEC](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) or Domain Name System Security Extensions is an extension of the DNS protocol that provides cryptographic assurance of the authenticity and integrity of responses. It's intended as a defense against network attackers who are able to manipulate DNS to redirect their victims to servers of their choice.

Without DNSSEC, a malicious hacker can point SimpleLogin MX record to their own server and receive emails sent to SimpleLogin servers.

#### Certification Authority Authorization (CAA)

[CAA](https://en.wikipedia.org/wiki/DNS_Certification_Authority_Authorization) is a standard that allows SimpleLogin to restrict which Certificate Authorities (CA) are allowed to issue certificates for our domains. By default, every public CA is allowed to issue certificates for **any** domain name in the public DNS, provided they validate control of that domain name. That means that if there’s a bug in any one of the many public CAs’ validation processes, every domain name is potentially affected. This has happened in the past, affecting [Google](http://arstechnica.com/security/2015/10/still-fuming-over-https-mishap-google-gives-symantec-an-offer-it-cant-refuse/), [Windows Live](https://arstechnica.com/information-technology/2015/03/bogus-ssl-certificate-for-windows-live-could-allow-man-in-the-middle-hacks/) among others.

CAA provides a way for domain holders to reduce that risk. Without CAA, someone could potentially obtain an unauthorized SSL certificate for SimpleLogin domains that could allow man-in-the-middle hacks.

All SimpleLogin certificates are issued by [Letsencrypt](https://letsencrypt.org). Which is a certificate authority SipleLogin trusts.

#### Hardenize

[Hardenize](https://www.hardenize.com) is a comprehensive security tool that provides assessments of website and network security configuration.

Here are Hardenize reports for our domains:

- [simplelogin.io](https://www.hardenize.com/report/simplelogin.io)
- [simplelogin.co](https://www.hardenize.com/report/simplelogin.co)
- [simplelogin.com](https://www.hardenize.com/report/simplelogin.com)

---

## Mail Servers

Currently SimpleLogin operates two mail servers with the help of ([Proton AG.](https://proton.me/about)).

- mx1.simplelogin.co
- mx2.simplelogin.co

Our mail servers support the following security standards.

#### Sender Policy Framework (SPF)

[SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework) is a protocol that allows domain name owners to control which internet hosts are allowed to send email on their behalf.

By default, only our mail servers can send emails on behalf of SimpleLogin domains, becuase of the fact we use the strictest SPF policy out there which is "`v=spf1 include:simplelogin.co -all`". Without an SPF policy, anyone can send emails as if they come from SimpleLogin it self.

#### DomainKeys Identified Mail (DKIM)

[DKIM](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail) is an email authentication technique that allows the receiver of an email to check that said email they recived was indeed sent and authorized by the owner of that domain. This is done by giving the email a digital signature.

All emails sent from SimpleLogin servers and domains (including emails forwarded to your mailbox) are signed with SimpleLogin's DKIM signature.

#### Domain based Message Authentication, Reporting, and Conformance (DMARC)

[DMARC](https://en.wikipedia.org/wiki/DMARC) is an email-validation system. It is designed to give domain owners the ability to protect their domain from unauthorized use, commonly known as email spoofing, by alrting and setting a policy for other mail servers on what to do with spoofed emails.

SimpleLogin uses a strict DMARC policy that rejects emails that fail the SPF or DKIM check.

#### Email Encryption

Emails sent to & from our servers are encrypted using TLS versions 1.1, 1.2, or 1.3. Network attackers won't be able to man-in-the-middle (MITM) attack the emails being sent and received by you and your recipient this way.

#### Additional Measures and Precautions

In addition to the measures and precautions stated above, SimpleLogin mail servers also implement the following standards:

- [MTA-STS](https://www.hardenize.com/blog/mta-sts)
- [TLS-RPT](https://www.hardenize.com/blog/smtp-tls-reporting-tls-rpt)
- [DANE](https://en.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities)

---

## Web Servers

SimpleLogin currently runs two web app instances.

- app.simplelogin.io
- mx2.simplelogin.co (fallback)

All of the data in transit btween SimpleLogin servers and end users are encrypted via [SSL/TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security).

We also implement the following additional scurity measures in conjunction with SSL/TLS encryption:

- We only support TLS versions v1.2 and v1.3. (TLS v1.3 also supports [Forward Secrecy](https://en.wikipedia.org/wiki/Forward_secrecy)).
- [DANE](https://tools.ietf.org/id/draft-ietf-dane-ops-02.html)
- [HSTS](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
- [CSP](https://en.wikipedia.org/wiki/Content_Security_Policy)
- [SRI](https://en.wikipedia.org/wiki/Subresource_Integrity)
- [Expect CT](https://tools.ietf.org/html/rfc6962)
- [X-Frame-Options](https://tools.ietf.org/html/rfc7034)
- [XSS Protection](https://en.wikipedia.org/wiki/Cross-site_scripting)

We take more than reasonable security measures (such as using strong, unique, and long passwords, two-factor authentication, a whitelist of people who can deploy changes to our infrastructure, etc) to protect our employees from getting hack and to prevent their permissions from getting abused.

---

## Database & File Storage

Our database uses Postgresql to store and encrypt user data at rest, which is than back up everyday. Backups older than 7 days are deleted. The database is only accessible to our staff and not a third party.

For storaging files and other sorts of data, we use a [Amazon AWS S3 Bucket](https://aws.amazon.com/s3/) which is used to store user profile pictures and temporary bounced emails. All bounced emails are deleted after 7 days.
