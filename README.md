SimpleLogin - privacy-first email alias and Single Sign-On (SSO) Identity Provider
---

https://simplelogin.io

This repo contains the code behind the main website at https://www.simplelogin.io

It's developed using https://gohugo.io, a static site generator.

To run it locally, please install `hugo` first. This repo uses v0.92.1.

**Install Hugo on macOS (Apple Silicon):**

```bash
mkdir -p ~/.local/bin
curl -L https://github.com/gohugoio/hugo/releases/download/v0.92.1/hugo_extended_0.92.1_macOS-ARM64.tar.gz -o /tmp/hugo.tar.gz
tar -xzf /tmp/hugo.tar.gz -C /tmp hugo
mv /tmp/hugo ~/.local/bin/hugo
```

Make sure `~/.local/bin` is in your PATH (add to `~/.zshrc` if needed):

```bash
export PATH="$HOME/.local/bin:$PATH"
```

Then run the following command:

```bash
hugo server
```

The website is now available on http://localhost:1313/
