# CO2mmitment

A student-led, data-driven platform that visualizes corporate and national carbon emissions and air quality.

## Publish on GitHub Pages
1. Upload everything in this folder to the root of your repository (keep the folder structure).
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, pick `main` and `/ (root)`, then **Save**.
4. After a minute or two, the site address appears at the top of the Pages settings.

## Services used
- **Google Maps** (CO2 and Air Quality maps): key in `assets/app.js` (`MAPS_KEY`). Restrict it to your site's address in Google Cloud Console.
- **Firebase Firestore** (petition signatures): config in `assets/app.js` (`FIREBASE_CONFIG`).
- **FormSubmit** (contact form): emails go to the address in `assets/app.js` (`CONTACT_EMAIL`). The first message sends an activation email you must confirm.

## Folders
- `index.html` and one folder per page (`about/`, `co2/`, `air-quality/`, `insights/`, `dashboard/`, `esg/`, `petitions/`, `contact/`)
- `assets/` shared style (`style.css`) and script (`app.js`, which also holds the data tables)
- `images/` photos, icons and Insights charts
- `404.html`, `sitemap.xml`, `robots.txt`, favicons and `site.webmanifest`
