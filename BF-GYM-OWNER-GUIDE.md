# BF GYM Global — quick owner guide

## Your live public pages

- Homepage: https://bfgym.netlify.app/
- Start Here / two-step plan finder: https://bfgym.netlify.app/start/
- Free 4-week programmes: https://bfgym.netlify.app/programmes/
- Videos and exercise searches: https://bfgym.netlify.app/app/workouts/
- Mobile web app: https://bfgym.netlify.app/app/
- Daily workout dashboard: https://bfgym.netlify.app/app/dashboard/
- Member/coach card concept (NOT a real wallet): https://bfgym.netlify.app/app/membership/
- Trainer profile: https://bfgym.netlify.app/trainer/
- Example workout and meal day: https://bfgym.netlify.app/sample-plan/

**All these pages are educational. Paid bookings, subscriptions and enquiries remain disabled by default.**

## How you can edit your website without building a new app

1. Sign in to GitHub, open https://github.com/adeepaji/astro-platform-starter .
2. Choose **main** branch. Navigate to the file below.
3. Click the pencil (Edit this file), change only the words or link targets, then **Commit changes** to main.
4. GitHub checks the build; if Netlify is connected to main, it deploys the new published site automatically.
5. Review the live page on your phone. If a build fails, revert the change from GitHub history.

| To change | Edit this file |
| --- | --- |
| Four homepage quick-link cards, descriptions and main free-programme messaging | `src/data/siteContent.ts` |
| Coach name, specialisms, qualifications and approved photo paths | `src/data/trainerProfile.ts` |
| Beginner/intermediate/advanced programme text and exercises | `src/data/trainingProgrammes.ts` |
| Homepage layout and section headings | `src/pages/index.astro` |
| Personal workout dashboard / local session history | `src/pages/app/dashboard.astro` |
| Future member-card / coach-wallet concept UI (not active) | `src/pages/app/membership.astro` |
| The two-step finder interface | `src/pages/start.astro` |
| Mobile app layout and tracker interface | `src/pages/app/index.astro` |

**Note:** GitHub is a developer-oriented editor rather than a protected CMS. Editing data arrays requires correct punctuation. Start with text-only changes until you are comfortable. To avoid mistakes, use GitHub's Preview changes and keep previous file versions available.

## New user experience

- Homepage has **Start training for free** and four Quick Start links.
- `/start/` offers two questions to suggest a *level* for exploring free example programmes: not medical screening or personalised coaching.
- The suggested level opens `/programmes/?level=beginner` (or intermediate/advanced) directly.
- The chosen level can be remembered on the same device. Existing weekly checkmarks remain device-only.
- Mobile app now links to **Dashboard**, **History**, and a clearly labelled **Member Preview** instead of inactive paid **Book**. The PWA install launches the new dashboard.
- The member-card graphic is expressly **not a payment or ATM card**, and has no login, balance, money transfer or withdrawal functionality. Real accounts require a secure backend and regulated financial infrastructure.
- No login, backend account, automatic billing or health-data intake is introduced.

## Trainer photos

Your original resume headshot remains the principal portrait. Five of your newly uploaded poses are now displayed as a **small, fast-loading photo strip** at `public/images/trainer/adeep-poses-strip.webp` on `/trainer/`.

The strip is deliberately small to load quickly on mobiles. To upgrade to larger, sharper standalone photographs later, optimise the owner-approved images as WebP/JPEG, remove private metadata and upload them under `public/images/trainer/` using GitHub's **Add file → Upload files**. Update `src/pages/trainer.astro` to refer to the new standalone files or a higher-resolution strip. Keep original certificate PDFs private.

## Legal and privacy

- A UK-based person delivering paid online training is not made India-based simply by a worldwide site or foreign payment account.
- Do not enable commercial services until the dependant-visa work restrictions and UK tax/business obligations have been professionally reviewed.
- Original course certificate copies were inspected, but awarding-body authentication has not been independently confirmed.
- At the owner's request, do not show certificate award or expiry dates publicly. Historical credentials must never be described as currently valid.
- The device-only plan picker stores only a level, not personal or medical details.
