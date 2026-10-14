DAUD BAJEY — PORTFOLIO WEBSITE

FILES
- index.html: website content
- style.css: colors, layout and responsive/mobile design
- script.js: mobile menu, theme toggle, photo previews and gallery previews
- images/: place permanent gallery/hero images here if you prefer file-based images
- cv/: place your public CV here

OPEN THE WEBSITE
1. Extract the ZIP file.
2. Open the folder in Visual Studio Code.
3. Open index.html in your browser, or use the VS Code Live Server extension.

ADD YOUR OWN PHOTO
- You can use the “Add your photo” button on the hero section to preview a photo in your current browser session.
- To make your photo appear every time the website loads, copy your photo into images/ (for example, images/daud-guitar.jpg), then edit index.html and replace the photo placeholder with:
  <img src="images/daud-guitar.jpg" alt="Davit Tamang with guitar">
  Also remove or hide the photo-placeholder and photo-edit label if you no longer need them.
- For gallery images, add your files to images/ and replace the gallery-placeholder cards with image elements.

ADD YOUR CV
- Copy your CV into the cv folder and name it exactly: davit-tamang-cv.pdf
- The download link is already configured for cv/davit-tamang-cv.pdf.
- The CV picker only previews the chosen filename in your browser. It does NOT upload files to a public server. A real public upload feature requires a backend or storage service.

UPDATE CONTACTS / SOCIALS
- Your provided phone, email and social handles are already included in index.html.
- Check the Facebook link if your profile URL differs from facebook.com/daudtamang.
- The YouTube link currently searches for “daudbajey”; replace it with your exact channel URL when available.

PUBLISH ONLINE
You can deploy this static website to GitHub Pages, Netlify, or another static hosting provider. Keep the index.html, style.css, script.js, images/ and cv/ paths together. Only place a CV online if you are comfortable making it publicly accessible.
