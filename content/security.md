---
title: "SimpleLogin Security"
pageTitle: "Security Overview"
url: "/security"
canonicalUrl: "https://simplelogin.io/security/"
description: "SimpleLogin Security."
layout: "single_markdown"
---

Keeping your data safe and secure is a huge responsibility and a top priority for us. Here's how we make it happen.

---


## Domains

SimpleLogin currently operates on the following domains:

- simplelogin.io
- simplelogin.co
- simplelogin.fr
- slmail.me

All domains implement the following standards:

#### DNSSEC

[DNSSEC](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) or Domain Name System Security Extensions is an extension of the DNS protocol that provides cryptographic assurance of the authenticity and integrity of responses. It's intended as a defense against network attackers who are able to manipulate DNS to redirect their victims to servers of their choice.

Without DNSSEC, a malicious hacker can point SimpleLogin MX record to their own server and receive emails sent to SimpleLogin servers.

#### Certification Authority Authorization (CAA)

[CAA](https://en.wikipedia.org/wiki/DNS_Certification_Authority_Authorization) is a standard that allows SimpleLogin to restrict which Certificate Authorities (CA) are allowed to issue certificates for our domains. By default, every public CA is allowed to issue certificates for **any** domain name in the public DNS, provided they validate control of that domain name. That means that if there’s a bug in any one of the many public CAs’ validation processes, every domain name is potentially affected. This has happened in the past, affecting [Google](http://arstechnica.com/security/2015/10/still-fuming-over-https-mishap-google-gives-symantec-an-offer-it-cant-refuse/), [Windows Live](https://arstechnica.com/information-technology/2015/03/bogus-ssl-certificate-for-windows-live-could-allow-man-in-the-middle-hacks/) among others.

CAA provides a way for domain holders to reduce that risk. Without CAA, someone could potentially obtain an unauthorized SSL certificate for SimpleLogin domains that could allow man-in-the-middle hacks.

All SimpleLogin certificates are issued by [Letsencrypt](https://letsencrypt.org).

#### Hardenize reports

[Hardenize](https://www.hardenize.com) is a comprehensive security tool that provides assessment of web site network and security configuration.

Here are Hardenize reports for our domains:

- [simplelogin.io](https://www.hardenize.com/report/simplelogin.io/1587326588)
- [simplelogin.fr](https://www.hardenize.com/report/simplelogin.fr/1587547515)
- [simplelogin.co](https://www.hardenize.com/report/simplelogin.co/1587326594)
- [slmail.me](https://www.hardenize.com/report/slmail.me/1587417887#email_dmarc)


---

## Mail Servers

Currently SimpleLogin has 2 mail servers located at

- mx1.simplelogin.co (Germany datacenter) and
- mx2.simplelogin.co (Netherlands datacenter).

Our mail servers support the following security standards.

#### SPF

[SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework)(Sender Policy Framework) is a protocol that allows domain name owners to control which internet hosts are allowed to send email on their behalf.

By default, only our mail servers can send emails on behalf of SimpleLogin. We use the  **strictest** SPF policy which is `-all`. Without SPF, anyone can send emails that seem to come from SimpleLogin.

#### DKIM

[DKIM](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail) (Domain Keys Identified Mail) is an email authentication technique that allows the receiver to check that an email was indeed sent and authorized by the owner of that domain. This is done by giving the email a digital signature.

All emails sent from SimpleLogin servers, including emails forwarded to your mailbox and emails sent from your mailbox are DKIM-signed.

#### DMARC

[DMARC](https://en.wikipedia.org/wiki/DMARC) is an email-validation system. It is designed to give email domain owners the ability to protect their domain from unauthorized use, commonly known as email spoofing.

Built around SPF and DKIM, a DMARC policy tells the receiving mail server what to do if neither of those authentication methods passes.

SimpleLogin uses a strict DMARC policy that rejects emails that fail the SPF or DKIM check.

#### Email TLS

Emails sent to our servers are encrypted using TLS 1.1, 1.2 or 1.3. Network attackers can't uncover what is being communicated, even when they can see all the traffic.

#### Others

In addition to the above standards, SimpleLogin mail servers also implement the following recommended standards:

- [MTA-STS](https://www.hardenize.com/blog/mta-sts)
- [TLS-RPT](https://www.hardenize.com/blog/smtp-tls-reporting-tls-rpt)
- [DANE](https://en.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities)


---

## Web Servers

SimpleLogin currently has 2 web servers located at

- app.simplelogin.io (Germany datacenter) and
- mx2.simplelogin.co (Netherlands) as failover.

All data is encrypted via [SSL/TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) when transmitted from our servers to your browser.

In addition, we also implement the following measures:

- Only support TLS v1.2 and v1.3. TLS v1.3 supports [Forward Secrecy](https://en.wikipedia.org/wiki/Forward_secrecy).
- Do not support previous versions (SSL, TLS 1.0, TLS 1.1) that are deprecated.
- [DANE](https://tools.ietf.org/id/draft-ietf-dane-ops-02.html), [HSTS](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security), [CSP](https://en.wikipedia.org/wiki/Content_Security_Policy), [SRI](https://en.wikipedia.org/wiki/Subresource_Integrity), [Expect CT](https://tools.ietf.org/html/rfc6962), [X-Frame-Options](https://tools.ietf.org/html/rfc7034), [XSS Protection](https://en.wikipedia.org/wiki/Cross-site_scripting)

We take reasonable security measures such as password protection, two-factor authentication for internal logins, and a whitelist of people who can deploy changes to the server. Our web app does not serve any 3rd party hosted JavaScript, except a script from [Paddle](http://paddle.com), our payment processor.


---


## Database & File Storage

Currently our database and file storage system are hosted in AWS Paris datacenter.
The database is using Postgresql, is encrypted at rest and backed up everyday. Backups older than 7 days are deleted. The database is only accessible from our mail and web servers.

File storage is based on [S3](https://aws.amazon.com/s3/) which is used to store user profile pictures and temporary bounced emails. The bounced emails are deleted after 7 days.
