# BF GYM Global — client accounts, coach marketplace and member-wallet blueprint

## Current operational status

The site is a free public fitness education website / installable PWA:
- https://bfgym.netlify.app/app/dashboard/ — working exercise dashboard with locally stored selected programme, selected week, weekly checkmarks and history
- https://bfgym.netlify.app/app/membership/ — **concept preview** of future client/coach profiles, BF GYM Member Pass and non-operational financial features
- https://bfgym.netlify.app/programmes/ — general four-week fitness examples
- https://bfgym.netlify.app/app/workouts/ — existing curated demos / YouTube searches

**Not operating:** user authentication, sign-up, account database, coach onboarding, verification checks, payments, stored funds, actual client referral payouts, ATM-compatible cards, money transfer, subscriptions, bookings or withdrawals.

Do not publish monetary balances or claim participants can earn income before these services actually exist. Programme checkmarks, workout history and level selection remain in the visitor's local browser.

## Role model for future expansion

| Role | Future permissions | Requirements |
| --- | --- | --- |
| Visitor | Browse free fitness tools | No account, no personal health intake |
| Client | Account, own workout log and appointments | Secure authentication, consent, privacy notice, data portability and deletion |
| Approved coach | Manage assigned training services, appointments, earnings statements | Identity and qualification review, service terms, insurance, contract, safeguarding policies, applicable right-to-work |
| Admin | Approve coaches, handle support, disputes, audits | Strong access control, MFA, least privilege, access logging |
| Finance/compliance | Authorise payouts and investigate suspicious transactions | Segregated duties, money movement handled by regulated provider(s) |

Never let one client read another client's health profile or private log. Coaches should access a client's profile only with appropriate permissions and consent. Health data may trigger UK GDPR *special-category data* protections, requiring proper lawful bases, security and clear retention policies.

## Technical implementation architecture (NOT IMPLEMENTED YET)

1. Managed identity service (such as a supported hosted authentication provider) with email verification, rate limiting, secure session management, password recovery and MFA for privileged roles.
2. Server-side backend / database (not browser localStorage) with row-level access controls and audit history. Possible models: users, roles, coach_verifications, client_consent, programmes, bookings, orders, refunds, payouts, referral_rewards, disputes and action_audit_log.
3. Separate ledger for real money: immutable transactions and reconciliation with the regulated payment provider; **never** an editable "wallet balance" stored in a browser.
4. Payment-provider marketplace capabilities for real fitness service sales and coach payouts, only after eligibility, contracts, chargeback/refund policy, cross-border tax and worker/visa reviews.
5. For actual prepaid/debit cards, payment accounts, transfers and ATM cash withdrawal, obtain a suitable authorised card issuer / electronic money institution / bank partner; verify the exact product, issuer, coverage, KYC/AML, safeguarding, dispute rights and customer communication before promising functionality.
6. Legal review across UK / India / worldwide customer locations, including VAT/GST, consumer protection, financial regulation, advertising, sanctions and privacy.

**Regulatory references:**
- FCA payment and e-money rules: https://www.fca.org.uk/firms/payment-services-regulations-e-money-regulations
- FCA money remittance / payment service considerations: https://www.fca.org.uk/firms/consider-if-you-provide-payment-services
- ICO account/password security: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/security/a-guide-to-data-security/passwords-in-online-services/
- ASA/CAP on pyramid schemes: https://www.asa.org.uk/advice-online/pyramid-schemes.html
- ASA/CAP on earnings claims: https://www.asa.org.uk/advice-online/recruitment-and-business-opportunities-earnings-claims.html

## Commercial model worth exploring

- **Real coach work:** independently vetted coaches sell legitimate sessions or programmes, and the marketplace may take an agreed, fully disclosed service fee.
- **Client benefits:** a bounded and published referral reward after a verified legitimate service purchase, or discounts/loyalty points, subject to applicable rules and anti-abuse checks.
- **No recruitment-led scheme:** no paying to recruit, no multi-level commissions for adding people, no income guarantee and no pressure on participants to recruit others.
- **No pretend money:** no display of fictional spendable balances, card numbers or fake transactions, and no ATM/cash withdrawal controls until fully operational with the partner.

## Commercial safeguards

- BF GYM Global is operated by a person based in the United Kingdom. Indian bank accounts or overseas incorporation do not automatically avoid UK visa/work restrictions, UK tax or financial regulation.
- Personal online coaching on the Skilled Worker dependant visa requires individual immigration advice because of the professional-sportsperson/sports-coach work restriction.
- Current `src/data/businessLaunch.ts` commercial toggles should remain disabled; a UI update does not clear the owner to operate a paid service.
- The app must obtain clear approval before soliciting members' financial or health information.

## Suggested phased priorities

**Phase 1 — public free app, completed:** friendly workout dashboard, videos, plan picker, local progress and clearly marked member preview.

**Phase 2 — secure membership:** review privacy/terms and ownership, select authentication backend, create true account management and authenticated membership pass, coach application review. Do not collect funds yet.

**Phase 3 — legal coaching marketplace:** verified coach service listings, scheduling, pricing, payments processed by a regulated provider, consumer contracts, transparent commission accounting, bank payouts managed by the provider.

**Phase 4 — member rewards:** carefully designed referral/loyalty programme tied to legitimate transactions, fraud prevention, proper disclosures and tax treatment.

**Phase 5 — real financial wallet or cards (optional):** partner with an appropriately authorised financial institution. This is a separate major fintech business requiring regulatory and operational advice.

## Owner editing guide

- `src/data/trainingProgrammes.ts`: workout content
- `src/pages/app/dashboard.astro`: friendly dashboard interface
- `src/pages/app/membership.astro`: future membership/card preview
- `src/pages/app/index.astro`: older BF GYM mobile hub, now highlighting the new dashboard
- `src/data/businessLaunch.ts`: existing commercial safety switches (must stay off until clearance)
- `BF-GYM-OWNER-GUIDE.md`: public website editing notes

Do not place API keys, passwords, bank credentials or real identities in a public GitHub repository. Use environment variables / backend secrets for future connected services.
