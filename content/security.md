---
title: "SimpleLogin Security"
pageTitle: "Security Overview"
url: "/security"
description: "Keeping your data safe and secure is a huge responsibility and a top priority for us. Here is how we make it happen at SimpleLogin."
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

[DNSSEC](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) is an extension of the DNS protocol that provides cryptographic assurance of the authenticity and integrity of DNS responses. It's intended as a defense against network attackers who are able to manipulate DNS responses and request to redirect their victims to servers of their choice. Without DNSSEC, said network attackers can point SimpleLogin's MX record to their own mail servers and receive emails sent to SimpleLogin mail servers.

#### Certification Authority Authorization (CAA)

[CAA](https://en.wikipedia.org/wiki/DNS_Certification_Authority_Authorization) is a standard that allows us to restrict which Certificate Authorities (CA) are allowed to issue certificates for our domains. By default, every public CA is allowed to issue certificates for any domain in the public DNS, provided they validate control of that domain. That means that if there is a bug in any one of the many public CAs’ validation processes, then any and every domain is than potentially affected. This has happened in the past, affecting [Google](http://arstechnica.com/security/2015/10/still-fuming-over-https-mishap-google-gives-symantec-an-offer-it-cant-refuse/), [Windows Live](https://arstechnica.com/information-technology/2015/03/bogus-ssl-certificate-for-windows-live-could-allow-man-in-the-middle-hacks/) among others. CAA provides a way for domain holders to reduce that risk. Without CAA, someone could potentially obtain an unauthorized TLS certificate for our domains that could allow them to do a man-in-the-middle (MITM) attack on our infrastructure. All of our certificates are issued by [Letsencrypt](https://letsencrypt.org). Which is a certificate authority we trust.

#### Hardenize Check

[Hardenize](https://www.hardenize.com) is a comprehensive security tool that provides assessments of website and network security configuration. You can use Hardenize to check our configurations and such.

Here are the Hardenize reports for the domains we operte under:

- [simplelogin.io](https://www.hardenize.com/report/simplelogin.io)
- [simplelogin.co](https://www.hardenize.com/report/simplelogin.co)
- [simplelogin.com](https://www.hardenize.com/report/simplelogin.com)
- [scan our other domains](https://www.hardenize.com/)

---

## Mail Servers

Currently we operate two mail servers with the help of our parent company [Proton AG.](https://proton.me/about).

- mx1.simplelogin.co
- mx2.simplelogin.co

Our mail servers also support the following security standards.

#### Sender Policy Framework (SPF)

[SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework) is a protocol that allows domain owners to control which internet hosts are allowed to send emails on their behalf. By default we use a SPF policy with the folowing attribute "`~all`" which indicates and designates a softfail to emails not sent from our mail servers or which fail the SPF check of the SPF policy we have set in place.

#### DomainKeys Identified Mail (DKIM)

[DKIM](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail) is an email authentication method that allows the receiver of an email to check that said email they recived was indeed sent and authorized by the owner of that domain. This is done by giving the emails sent a digital signature. All emails sent from our mail servers and domains (including emails forwarded to your mailbox) are signed with our DKIM signature.

#### Domain based Message Authentication, Reporting, and Conformance (DMARC)

[DMARC](https://en.wikipedia.org/wiki/DMARC) is an email-validation and infromation system in DNS. It gives domain owners the ability to tell other mail servers what to do with emails which didn't pass the SPF and DKIM policies & checks set by the owners of said domain on which the email was sent from. We use a decently strict DMARC policy that rejects emails that fail the SPF and DKIM checks on our domains.

#### Email Encryption

Emails sent to & from our mail servers are encrypted using TLS versions 1.1, 1.2, or 1.3. Network attackers won't be able to do a man-in-the-middle (MITM) attack on the emails being sent and received by you and your recipient on and form our infrastructure this way.

#### Additional Measures and Precautions

In addition to the security measures we already take stated above, our mail servers also implement the following:

- [MTA-STS](https://www.hardenize.com/blog/mta-sts)
- [TLS-RPT](https://www.hardenize.com/blog/smtp-tls-reporting-tls-rpt)
- [DANE](https://en.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities)

---

## Web Security

We currently run two SimpleLogin instances, which are located at:

- app.simplelogin.io
- mx2.simplelogin.co (fallback)

All of the data in transit btween our servers and you are encrypted using [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) encryption.

We also only support TLS versions v1.2 and v1.3. (TLS version v1.3 also supports [Forward Secrecy](https://en.wikipedia.org/wiki/Forward_secrecy)).
and implement the following additional security measures listed blow in conjunction with the TLS encryption you get from our TLS certificates:

- [DANE](https://tools.ietf.org/id/draft-ietf-dane-ops-02.html)
- [HSTS](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
- [CSP](https://en.wikipedia.org/wiki/Content_Security_Policy)
- [SRI](https://en.wikipedia.org/wiki/Subresource_Integrity)
- [Expect CT](https://tools.ietf.org/html/rfc6962)
- [X-Frame-Options](https://tools.ietf.org/html/rfc7034)
- [XSS Protection](https://en.wikipedia.org/wiki/Cross-site_scripting)

We take more than reasonable security measures (such as using strong, unique, and long passwords, two-factor authentication, a whitelist of people who can deploy changes to our infrastructure, etc) to protect our employees from getting hacked and to prevent their permissions from getting abused.

---

## Database & File Storage

Our database uses Postgresql to store and encrypt user data at rest, which is then backed up everyday. Backups older than 7 days are deleted. The database is only accessible tous and not a third party. For storing files and other sorts of data, we use a [AWS S3 Bucket](https://aws.amazon.com/s3/) which is used to store user profile pictures and temporary bounced emails. All bounced emails are also deleted after 7 days.
