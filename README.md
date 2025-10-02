# GeoPioneer - Massachusetts Geothermal Pioneers Website

## 🏠 About
Professional website for GeoPioneer, Massachusetts' leading geothermal heating and cooling installation company. Features integrated savings calculator, home assessment forms, and comprehensive educational content.

## ✨ Key Features

### 🧮 Integrated Savings Calculator
- **Accurate Massachusetts pricing** ($0.35/kWh electricity with delivery)
- **Real efficiency comparisons** (4+ COP heating, 26 EER vs 13 SEER AC)
- **VRF and zoning benefits** (additional 15% savings)
- **70% energy reduction** vs traditional furnace/AC systems
- **Proper incentive calculations** ($15,000 MassSave rebate + 30% federal tax credit)

### 📋 Home Assessment Forms
- **Complete technical data collection** (heating fuel, cooling system, electrical panel)
- **Energy cost analysis** (separate base load from HVAC costs)
- **Lead qualification** with contact information
- **Professional follow-up workflow**

### 📚 Educational Content
- **Geothermal technology explanation** with technical diagrams
- **Massachusetts-specific incentives** and financing options
- **Compact installation process** featuring European-style drilling rigs
- **Myth-busting section** addressing common concerns

### 🎨 Professional Design
- **Mobile-responsive** design
- **Clean, modern interface** with professional imagery
- **Trust-building elements** (credentials, testimonials, technical specs)
- **Clear call-to-action** buttons throughout

## 🚀 Quick Deployment

### Option 1: Netlify (Recommended)
1. **Upload to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial GeoPioneer website"
   git remote add origin https://github.com/yourusername/geopioneer-website.git
   git push -u origin main
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect GitHub repository
   - Build settings: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

3. **Configure Domain**:
   - Add custom domain: `geo-pioneer.com`
   - Update DNS settings as instructed
   - SSL certificate automatically configured

### Option 2: Vercel
1. **Upload to GitHub** (same as above)
2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import GitHub repository
   - Automatic React detection
   - Deploy instantly

### Option 3: GitHub Pages (Free)
1. **Upload to GitHub** (same as above)
2. **Enable GitHub Pages**:
   - Repository Settings → Pages
   - Source: GitHub Actions
   - Configure build workflow
   - Custom domain: `geo-pioneer.com`

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Setup
```bash
# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
# or
pnpm run dev

# Build for production
npm run build
# or
pnpm run build
```

### Development URLs
- **Local**: http://localhost:5173
- **Network**: Available on local network

## 📁 Project Structure

```
geopioneer-deployment/
├── src/
│   ├── App.jsx              # Main application component
│   ├── App.css              # Styling
│   └── assets/              # Images and media
├── public/
│   └── index.html           # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js          # Build configuration
└── README.md               # This file
```

## 🎯 Key Components

### Savings Calculator
- **Location**: `App.jsx` lines 376-460
- **Features**: Massachusetts-specific pricing, COP calculations, incentive calculations
- **Accuracy**: Based on real utility rates and geothermal performance data

### Assessment Form
- **Location**: `App.jsx` lines 950-1100
- **Data Collected**: Home details, current systems, energy costs, contact info
- **Integration**: Ready for CRM or email integration

### Educational Modals
- **Location**: `App.jsx` lines 705-900
- **Content**: Technical specifications, efficiency comparisons, installation process
- **Sources**: Based on Project GeoSolar blog content and industry data

## 💰 Pricing Configuration

### Current Massachusetts Rates (Accurate as of 2025)
```javascript
const electricityRate = 0.35 // $/kWh (includes delivery)
const gasRate = 1.50 // $/therm
const oilRate = 3.44 // $/gallon
const propaneRate = 3.50 // $/gallon
```

### Geothermal Performance
```javascript
const heatingCOP = 4.5  // Winter heating COP 4+
const coolingEER = 25   // Summer cooling EER 6+ equivalent
const vrfZoningEfficiency = 0.85 // Additional 15% savings
```

### Incentives
```javascript
const massSaveRebate = 15000 // Flat $15,000 for GSHP
const federalTaxCredit = systemCost * 0.30 // 30% federal credit
```

## 🔧 Customization

### Update Company Information
- **Company Name**: Search and replace "GeoPioneer" in `App.jsx`
- **Contact Info**: Update phone numbers and email addresses
- **Service Areas**: Modify location references from Massachusetts

### Modify Calculator
- **Utility Rates**: Update pricing in `calculateGeothermalSavings` function
- **Incentives**: Modify rebate amounts for different states/utilities
- **System Costs**: Adjust `systemCost` calculation per ton

### Add Content
- **New Sections**: Add components in `App.jsx`
- **Images**: Place in `src/assets/` and import
- **Styling**: Modify `App.css` or add Tailwind classes

## 📊 Analytics & Tracking

### Ready for Integration
- **Google Analytics**: Add tracking code to `index.html`
- **Facebook Pixel**: Insert pixel code
- **Lead Tracking**: Form submissions ready for CRM integration

### Form Data Handling
- **Current**: Console logging (development)
- **Production**: Ready for:
  - Email notifications
  - CRM integration (Salesforce, HubSpot)
  - Database storage
  - Webhook endpoints

## 🔒 Security & Performance

### Built-in Features
- **HTTPS**: Automatic SSL on Netlify/Vercel
- **CDN**: Global content delivery
- **Compression**: Automatic asset optimization
- **Caching**: Optimized cache headers

### Performance Optimizations
- **Image Optimization**: Compressed assets
- **Code Splitting**: Efficient bundle loading
- **Lazy Loading**: Images load as needed
- **Minification**: Production builds optimized

## 📞 Support & Maintenance

### Regular Updates Needed
- **Utility Rates**: Update quarterly for accuracy
- **Incentive Programs**: Monitor MassSave and federal changes
- **Content**: Keep educational content current
- **Images**: Refresh with new project photos

### Technical Support
- **Platform Issues**: Netlify/Vercel support
- **Code Updates**: Standard React/JavaScript maintenance
- **Performance**: Monitor Core Web Vitals

## 🎯 Business Impact

### Lead Generation Features
- **Qualified Leads**: Complete home assessment data
- **Savings Calculations**: Concrete value propositions
- **Educational Content**: Builds trust and authority
- **Multiple CTAs**: Various engagement points

### Competitive Advantages
- **Only MA geothermal company** with integrated calculator
- **Accurate pricing** builds credibility
- **Professional presentation** vs. basic contractor sites
- **Mobile-optimized** for on-the-go homeowners

## 📈 Next Steps After Deployment

1. **Domain Setup**: Configure geo-pioneer.com
2. **Analytics**: Add tracking codes
3. **Lead Management**: Set up form handling
4. **SEO**: Submit to search engines
5. **Social Media**: Link from business profiles
6. **Testing**: Verify all functionality
7. **Content Updates**: Add testimonials, case studies
8. **Local SEO**: Google My Business integration

---

**Ready to Deploy**: This package contains everything needed for a professional geothermal business website with advanced calculator functionality. Choose your preferred platform and deploy in minutes!
