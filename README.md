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

## Official beta link

The official destination for beta recruitment is **https://whiskoveryapp.com/beta/**
(`http://` redirects there). Use it in
recruitment messages, campaign materials and anywhere testers are sent to the
beta guide, instead of the homepage or the old GitHub Pages URL. On the site,
every beta CTA and the "Android beta" navigation and footer links point to this
absolute URL ("Apply" buttons add `#apply`), and the beta guide's canonical,
`og:url` and copy-link button use it. The Google Play opt-in URL, the Google
Forms URL and the Privacy/Support links are separate and stay as they are.

## Beta applications

The `/beta/#apply` section links to a Google Form that opens in a new tab and
collects only the applicant's Google Play account email and required consent.
Responses go to a private Google Sheet owned by the form owner's Google account,
which also receives new-response email notifications. The sheet is not published
or linked from the public site; response summaries stay disabled. The public
contact address for Whiskovery, including withdrawal requests, is
`kohaplov@gmail.com`.

The form's native confirmation is the submission result. Applicants still need
manual addition to the Play Console tester list before opting into the beta.
No application records or email service secrets are stored in this repository.

## Custom domain

`whiskoveryapp.com` is hosted by the existing GitHub Pages deployment; `CNAME`
preserves the custom domain. GoDaddy DNS uses the four GitHub Pages A records
for `@` and `www` points to `kohaplov-ux.github.io`. No nameservers or email DNS
records were changed. The previous GitHub Pages URLs redirect to the new domain.

HTTPS is active: GitHub's certificate covers `whiskoveryapp.com` and
`www.whiskoveryapp.com`, and "Enforce HTTPS" is on, so `http://` requests
redirect to `https://`. The switch is done: canonical, `og:url`, `og:image` and
the beta links all use `https://whiskoveryapp.com/`. Keep new self-references on
`https://`. The beta guide's copy-link button reads the canonical URL. The
Google Form's confirmation message also links to the beta guide; it is edited
in the Forms editor, not in this repository.

## iOS download

The shared navigation and homepage download buttons link directly to the public
App Store listing: https://apps.apple.com/us/app/whiskovery/id6820405748.
Android beta links continue to use the existing tester guide.
