# MoneySA / Afri-Loan reference-informed journeys

Date: 2 November 2026  
Environment: isolated Vercel preview from `feature/findbetter-informed-dual-brand`  
Source baseline: `main` at the start of this work (MoneySA education preview)

## Source and boundaries

User supplied a Chrome DevTools Recorder JSON titled **Recording 11/2/2026 at 6:21:29 PM** with 12 steps. It captures opening a FindBetter debt-counselling page and navigating through these labels:

- Personal Loan
- Payday Loan
- Quick Loan
- Low Credit Loan
- Motor
- Debt Review
- Debt Counselling
- Info Hub

The file **does not contain website source code, page design exports, images, captured application answers or a complete list of form fields**. Public FindBetter pages were consulted only as a functional reference.

Reference pages researched:

- https://findbetter.co.za/personal-loan-ab/
- https://findbetter.co.za/debt-review/
- https://findbetter.co.za/payday-loan/
- https://findbetter.co.za/quick-loan/

Do not copy source branding, testimonials, financial results, unique writing, partner claims or real application data into MoneySA or Afri-Loan. The new content is original and educational.

## Route mapping

| Recorded or public FindBetter section | MoneySA path | Afri-Loan preview path |
| --- | --- | --- |
| Personal Loan | `/personal-loan-ab` | `/afriloan/personal-loan-ab` |
| Payday Loan | `/short-term-loans` | `/afriloan/short-term-loans` |
| Quick Loan | `/quick-loans` | `/afriloan/quick-loans` |
| Low Credit Loan | `/low-credit-loans` | `/afriloan/low-credit-loans` |
| Motor | `/car-insurance` | `/afriloan/car-insurance` |
| Debt Review | `/debt-review` | `/afriloan/debt-review` |
| Debt Counselling | `/debt-counselling` | `/afriloan/debt-counselling` |
| Debt Consolidation | `/debt-consolidation` | `/afriloan/debt-consolidation` |
| Info Hub | `/guides` | `/afriloan/guides` |
| Interactive questionnaire | `/apply?type=loan` or `?type=debt` | `/afriloan/apply?type=loan` or `?type=debt` |

Legacy source-style aliases are also supported (`/payday-loan`, `/quick-loan`, `/blacklisted-low-credit-score-loan`, `/motor`, `/info-hub`). These aliases refer to original MoneySA content.

If the hostname becomes `afriloan.moneysa.co.za`, the system selects the Afri-Loan identity and uses unprefixed routes on that hostname. A DNS and Vercel mapping have **not** been configured here.

## Interactive field mapping

| Loan-information path | Debt-support path |
| --- | --- |
| Illustrative loan amount | Payment categories (one or more) |
| Loan purpose (home/vehicle/cash flow/consolidation/education/other) | Total outstanding debt band |
| Illustrative term | Gross monthly income band |
| Employment and take-home income | Employment and optional existing instalments |
| Existing debt-review status | Explicitly chosen debt-counselling journey |
| Demo contact and separate optional marketing consent | Demo contact and separate optional marketing consent |

No SA ID, banking credential, credit-bureau enquiry, real quote, referral, formal Form 16 application, contact API, real consumer record or marketing integration exists in the preview.

## Acceptance contract

| Test ID | Action | Required evidence | Current status |
| --- | --- | --- | --- |
| ROUTES-MONEYSA | Direct-load core and reference alias routes | Valid page/heading and navigation | Code-level rendering PASS; real browser NOT RUN |
| ROUTES-AFRILOAN | Browse `/afriloan/*` and hostname-aware root | Afri-Loan logo/theme, correct branded internal links | Code-level rendering PASS; real browser NOT RUN |
| LOAN-QUIZ | Complete all steps with valid synthetic data | Purpose retained, debt-review question present, local-only summary | NOT RUN in browser |
| DEBT-QUIZ | Complete all steps with a selected payment type and income band | Debt-specific steps, no loan switch, local-only summary | NOT RUN in browser |
| INPUT-NEGATIVE | Skip required fields or enter invalid amounts | Inline browser validation prevents progression | NOT RUN in browser |
| PRIVACY-NETWORK | Submit both demo paths | No personal data POST/API call, no local storage | Static code check PASS; network capture NOT RUN |
| RESPONSIVE | Test 375px/768px/1440px layouts | No clipping, usable menu/buttons | NOT RUN in browser |
| REGRESSION | Existing tools/guides/pages continue to work | No missing routes or blank views | Code-level rendering PASS; user QA NOT RUN |
| DOMAIN | Open `afriloan.moneysa.co.za` | Correct active Vercel mapping | BLOCKED: no DNS/domain approval |
| LIVE-LEADS | Send a compliant real enquiry | Verified legal entity + provider + secure backend + consent evidence | BLOCKED and intentionally disabled |

## Non-negotiable go-live controls

1. Verify the legal operating entity, responsible party, physical address and all applicable NCR/FSCA roles.
2. Identify actual service providers/recipients and their relationship to each brand. Do not imply Afri-Loan is a credit provider unless it is verified.
3. Prepare POPIA notice and specific consent for each recipient and purpose; use separate optional marketing consent.
4. Implement encrypted backend processing, rate limits, audited consent, access control, retention/deletion requests, and actual delivery status evidence.
5. Independently verify the official debt-review process through an NCR-registered debt counsellor. Never convert a loan enquiry into debt review without an explicit separate customer decision.
6. Complete browser, accessibility, privacy/network and user acceptance tests in TEST before DEMO or LIVE.
7. Release `moneysa.co.za` and `afriloan.moneysa.co.za` DNS only after explicit approval, without overwriting unrelated production routes.
