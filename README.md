# Whiskovery site

Static site hosted on GitHub Pages from `main` (repository root).

- `/`: homepage
- `/beta/`: Korean Android Closed Beta tester guide
- `/privacy/`: privacy information
- `/support/`: support and account deletion information

## Design system

All pages load `assets/styles.css`, which holds the shared brand tokens (colors,
type, spacing, radius, borders, shadows), buttons, header, footer and the Home,
Support and Privacy layouts. The beta guide adds its own sections in
`assets/beta.css` on top of the same tokens. Colors follow the current app:
Navy `#0F2A4A`, Cream `#FCF4E3`, Amber `#EF9D30`, Off-white `#FDF9F1`, Beige
`#F5EBD7`. No frameworks, trackers or third-party requests are used.

Fonts are self-hosted in `assets/fonts/` (SIL Open Font License, licenses
included):

- `manrope-600/700.woff2`: Latin subset of Manrope for English display text.
- `whiskovery-sans-kr-400/700.woff2`: KS X 1001 Hangul + Latin subset of
  Pretendard. It is renamed "Whiskovery Sans KR" because Pretendard is a
  Reserved Font Name under the OFL; an installed Pretendard is used first.
  Rarer Hangul syllables outside KS X 1001 fall back to the system Korean font.

Every page and social preview uses the official Whiskovery logo from
`assets/whiskovery-icon.svg`. Preserve its original colors and proportions.

Social previews are 1200×630 JPEGs rendered from SVG sources:
`assets/whiskovery-share.svg` → `.jpg` (Home, Support, Privacy) and
`assets/beta-share.svg` → `.jpg` (beta guide). Bump the `?v=` query on
`og:image` after replacing a JPEG. No analytics or tester contact lists are
embedded in the guide.

## Beta applications

The `/beta/#apply` section embeds a Google Form that collects only the applicant's
Google Play account email and required consent. Responses go to a private Google
Sheet owned by the connected Google account. New-response email notifications
are enabled for `siahseong@gmail.com` at the owner's request. The sheet is not
published or linked from the public site; response summaries stay disabled.

The form's native confirmation is the submission result. A link opens the same
form in a new tab when an embedded form is unavailable. Applicants still need
manual addition to the Play Console tester list before opting into the beta.
No application records or email service secrets are stored in this repository.

## Custom domain

`whiskoveryapp.com` is hosted by the existing GitHub Pages deployment; `CNAME`
preserves the custom domain. GoDaddy DNS uses the four GitHub Pages A records
for `@` and `www` points to `kohaplov-ux.github.io`. No nameservers or email DNS
records were changed. The previous GitHub Pages URLs redirect to the new domain.

HTTPS for the custom domain is pending GitHub's certificate. Until it is issued,
canonical and `og:` URLs use `http://whiskoveryapp.com/` so links and share
previews keep working. Once `https://whiskoveryapp.com/` serves a valid
certificate, enable "Enforce HTTPS" in the Pages settings and switch the URLs:

```bash
sed -i '' 's#http://whiskoveryapp.com/#https://whiskoveryapp.com/#g' index.html beta/index.html privacy/index.html support/index.html
```

The beta guide's copy-link button reads the canonical URL, so it follows.
