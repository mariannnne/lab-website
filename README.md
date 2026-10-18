# Socioecological Neuroscience Lab website

Static copy of socioecologicalneuroscience.com, moved off Weebly to GitHub Pages.
Plain HTML: no build step, no framework.

## Editing

- Each page is one file: `index.html`, `people.html`, `publications.html`, and so on.
- Open the file on GitHub, click the pencil icon, change the text, and click **Commit changes**. The live site updates in about a minute.
- Images and PDFs live in `uploads/1/4/5/0/145033599/`. These are the same paths Weebly used, so old links to PDFs still work.
- Styling for every page is in `assets/style.css`.

## Pages

In the menu: Home, People, Happenings, Research Topics, Publications, Participate.

Not in the menu, but kept at the same addresses: `comics.html`, `cv.html`, `funding-resources.html`, `mentee-history.html`, `outreach.html`.

## Photos Weebly left out

Weebly's archive skipped 12 People-page photos. While the Weebly site is still online, run this once from inside this folder in Terminal (it also copies your photos and PDFs from the Weebly archive):

```
bash setup.sh
```

## Custom domain

The domain is set in **Settings → Pages → Custom domain** as `www.socioecologicalneuroscience.com`. GitHub stores it in a `CNAME` file.

DNS records at the domain registrar:

| Type  | Name | Value                  |
|-------|------|------------------------|
| CNAME | www  | `<username>.github.io` |
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
