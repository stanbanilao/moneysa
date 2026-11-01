# MoneySA – financial education & enquiry preview

MoneySA is an **original, responsive, dependency-free** South African financial information website built as an interactive TEST/preview.

## Pages

- Home \`/\`
- Loans: \`/personal-loans\`, \`/short-term-loans\`, \`/quick-loans\`, \`/low-credit-loans\`
- Debt: \`/debt-consolidation\`, \`/debt-review\`, \`/debt-counselling\`
- Other topics: \`/car-insurance\`, \`/phones\`
- Tools: \`/tools\` (illustrative repayment and budget calculators)
- Information hub: \`/guides\` and six detailed guides at \`/guides/<slug>\`
- Interactive form demo: \`/apply\` (four-step demonstration)
- Company and policies: \`/about\`, \`/contact\`, \`/privacy\`, \`/terms\`
- Separate Afri-Loan concept: \`/afriloan\` and hostname-aware \`afriloan.moneysa.co.za\`

## Technology

Static HTML, CSS and vanilla JavaScript. No dependencies, cookies, databases or APIs. The layout and content are owned by MoneySA and **do not copy FindBetter's copyrighted styling or writing**.

- \`index.html\`: document shell and metadata
- \`styles.css\`: design tokens, responsive layouts and interaction states
- \`app.js\`: content, navigation, calculators, educational articles, local-only form demonstrations
- \`afriloan-logo.webp\`: cropped from the Afri-Loan image supplied by the project owner; the logo artwork itself is not redrawn
- \`vercel.json\`: static SPA fallback rewrite and conservative headers
- \`robots.txt\`: block indexing until approved launch

## Run locally

\`python -m http.server 8080\`, then visit \`http://localhost:8080\`.

Client-side routes need the \`vercel.json\` rewrite on Vercel; opening an internal route directly with a bare local file server may return 404.

## Preview safeguards

1. **No data collection or external lead transfer.** Both forms execute entirely in the user's browser and explicitly state that no messages or application details are sent, saved or forwarded.
2. Loan, debt review and debt counselling are labelled as distinct products. Neither path is a disguised redirect to the other.
3. No lender, insurer, partner, regulatory number, approval rate, savings figure or business registration details are invented.
4. An illustrative loan payment calculation is not an offer, APR disclosure, affordability assessment or quotation. It excludes charges and insurance.
5. Privacy and terms are clearly marked as **pre-launch drafts**; no live submissions can start until the business identity, security, contact address and lawful processing details are verified.
6. Metadata and robots block indexing before a launch review.

## Before enabling LIVE submissions

- Verify legal operator, physical address, contact details, responsible party, Information Officer, and any applicable NCR/FSCA registrations. Publish accurate disclosures.
- Identify and contract **actual** approved providers for each product. Document allowed data uses and no unapproved resale of personal information.
- Build an authenticated, encrypted backend or verified CRM integration, consent evidence, rate limiting, validation, secure logging and incident response.
- Finalise POPIA privacy notice, service Terms, PAIA requirements where applicable, direct-marketing opt-ins, opt-outs, retention, access and deletion workflows.
- Test end-to-end delivery, negative cases, mobile UX, accessibility, and compliance. Obtain owner approval before production launch.
- Confirm the MoneySA Vercel project and configure \`moneysa.co.za\` only after testing and explicit approval.
- Add \`afriloan.moneysa.co.za\` to an appropriate Vercel project (this code is hostname-aware) and configure DNS. If a different application is needed, split the Afri-Loan page into its own Vercel project.
- After legal approval: replace \`noindex\` and \`robots.txt\`, implement static page prerendering and sitemap for full SEO.

## Status

Implementation: educational frontend and interactive demo only. Data submission API: **not built**. Partner integrations: **not connected**. PRODUCTION / LIVE: **not approved**.

References for legal review: National Credit Act 34 of 2005, NCR Circular 04/2022 on sale of debt-review leads and consumer personal information, POPIA and the Information Regulator's guidance on direct marketing.
