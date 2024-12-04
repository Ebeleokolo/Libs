# Global Care Foundation Website

A static website for Global Care Foundation showcasing their mission, services, and organizational structure built by Group 5 for LIBS 882 Group assignment.

## Project Structure

```
global-care-foundation/
├── index.html
├── about.html
├── services.html
├── contact.html
├── css/
│   ├── main.css (shared styles)
│   ├── about.css
│   ├── services.css
│   └── contact.css
├── js/
│   ├── main.js (shared scripts)
│   ├── about.js
│   ├── services.js
│   └── contact.js
└── assets/
    ├── images/
    │   ├── RoundTable.svg
    │   ├── Hauwa.jpg
    │   ├── lynn.jpg
    │   ├── Viyama.jpg
    │   └── gfc.jpg
    └── vec/
        └── toggleIcon.svg
```

## Pages Description

- `index.html` - Home page with welcome message and main slider
- `about.html` - Organization history, structure, mission, and vision
- `services.html` - Management team and organizational units
- `contact.html` - Contact form and organization contact details

## Setup Instructions

1. Clone the repository:
```bash
git clone [repository-url]
cd global-care-foundation
```

2. Running the project locally:

### Method 1: Using VS Code (Recommended)
1. Install Visual Studio Code
2. Install the "Live Server" extension
   - Open VS Code Extensions (Ctrl+Shift+X)
   - Search for "Live Server"
   - Install "Live Server" by Ritwick Dey
3. Right-click on `index.html`
4. Select "Open with Live Server"
5. The website will open in your default browser

### Method 2: Using Python
```bash
# If using Python 3
python -m http.server 8000

# If using Python 2
python -m SimpleHTTPServer 8000
```
Then open `http://localhost:8000` in your browser

### Method 3: Simple Browser Open
- Simply double-click `index.html` to open in your default browser
  (Note: Some features might not work properly with this method)

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Dependencies

- Poppins Font (loaded via Google Fonts)
- No other external dependencies required

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Contact

Project Link: [repository-url]