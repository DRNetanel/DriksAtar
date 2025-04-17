# Website Maintenance Guide for Sprinkler Business Landing Page

This guide provides detailed instructions for maintaining and updating your sprinkler business website.

## File Structure

```
sprinkler_landing_page/
├── css/
│   ├── styles.css          # Main styling
│   ├── responsive.css      # Mobile and responsive styling
│   └── enhanced-styles.css # Additional visual enhancements
├── images/
│   └── business_card.jpg   # Your business card image
├── js/
│   └── script.js           # JavaScript functionality
└── index.html              # Main HTML file
```

## Common Maintenance Tasks

### 1. Updating Business Information

To update business information such as phone numbers, services, or contact details:

1. Open `index.html` in a text editor
2. Locate the relevant section:
   - Contact information is in the "צור קשר" (Contact) section
   - Services are in the "השירותים שלנו" (Our Services) section
   - Projects are in the "פרויקטים נבחרים" (Selected Projects) section
3. Edit the text between the appropriate HTML tags
4. Save the file and test locally before uploading

### 2. Adding New Images

To add new images to your website:

1. Prepare your image files (optimize them for web - under 500KB if possible)
2. Add the image files to the `images/` folder
3. Reference them in your HTML using:
   ```html
   <img src="images/your-new-image.jpg" alt="Description of image">
   ```

### 3. Changing Colors

The website uses a color scheme defined in the CSS. To change colors:

1. Open `css/styles.css`
2. Find the `:root` section at the top:
   ```css
   :root {
       --primary-color: #e30613;    /* Red color */
       --secondary-color: #000000;  /* Black color */
       --light-color: #ffffff;      /* White color */
       --gray-color: #f4f4f4;       /* Light gray */
       --dark-gray: #333333;        /* Dark gray */
       --font-family: 'Heebo', Arial, sans-serif;
   }
   ```
3. Change the color codes to your preferred colors
4. Save and test before uploading

### 4. Adding New Sections

To add a new section to your website:

1. Open `index.html`
2. Copy an existing section structure, for example:
   ```html
   <section id="new-section" class="new-section">
       <div class="container">
           <h2 class="section-title">כותרת חדשה</h2>
           <div class="new-section-content">
               <!-- Your new content here -->
           </div>
       </div>
   </section>
   ```
3. Add appropriate styling in the CSS files
4. Update the navigation menu if needed

## Uploading Changes

After making changes locally and testing them:

1. Connect to your web hosting using FTP or their file manager
2. Upload the modified files to replace the existing ones
3. Test the live website to ensure changes appear correctly

## Troubleshooting

### Images Not Displaying

- Check that the image path is correct
- Verify the image file exists in the specified folder
- Ensure the image filename matches exactly (case-sensitive)

### Styling Issues

- Check for typos in your CSS
- Use browser developer tools (F12) to inspect elements
- Verify that CSS files are properly linked in the HTML

### Mobile Display Problems

- Test on multiple devices or use browser developer tools to simulate different screen sizes
- Check the responsive.css file for mobile-specific styling
- Ensure viewport meta tag is present in the HTML head

## Backup Recommendations

Always maintain a backup of your website files:

1. Keep a copy of the original zip file provided
2. Before making significant changes, create a new backup
3. Consider using version control like Git if you're familiar with it

## Getting Help

If you encounter issues beyond this guide:

1. Consult web development resources like MDN Web Docs or W3Schools
2. Consider hiring a web developer for complex changes
3. Contact your hosting provider for server-related issues

---

This guide covers the basics of maintaining your sprinkler business website. For more advanced changes, consulting with a web developer is recommended.
