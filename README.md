# M Sumugan – Portfolio Website

## Run locally
1. Open the `portfolio` folder in VS Code.
2. Double-click `index.html` (opens in your browser), or install the "Live Server" extension and click "Go Live".
3. Internet is needed once for Bootstrap, icons and fonts (loaded from CDN).

## Add your files
| What | Where |
|---|---|
| Profile photo | Save as `assets/images/profile.jpg` |
| Resume | Save as `assets/documents/resume.pdf` |
| Training photos | `assets/images/experience/`, then list in `EXPERIENCE_PHOTOS` in `js/script.js` |
| Project images | `assets/images/projects/` (names are set in `PROJECTS`) |
| Certificates | `assets/images/certificates/`, then add entries to `CERTIFICATES` in `js/script.js` |

## Edit content (all in `js/script.js`)
- **Certificates:** add `{ title, issuer, date, image, link }` to `CERTIFICATES`.
- **GitHub button on a project:** paste the repo link in that project's `github` field. Empty = button hidden.
- **Student Information System technology:** fill the `tech` list in `PROJECTS`.
- **Hide phone number:** set `showPhone: false` in `SETTINGS`.
- **Colors:** change the variables at the top of `css/style.css`.

## Receive messages in your email (Formspree, free)
1. Go to https://formspree.io and sign up with msumugan@gmail.com.
2. Click "New Form", give it a name (e.g. Portfolio), and copy the form link. It looks like `https://formspree.io/f/xxxxxxxx`.
3. Open `js/script.js` and paste it: `formEndpoint: "https://formspree.io/f/xxxxxxxx"`.
4. Formspree sends a confirmation email the first time. Confirm it, then test the form on your site.

Notes: the free plan has a monthly message limit. Formspree may need the site to be online (not just opened from your computer) to accept the first test, so test after publishing. Until `formEndpoint` is filled, the form opens the visitor's email app instead.

## Publish
Upload the folder to GitHub Pages, Netlify or Vercel (all free).
