#!/bin/bash

# GeoPioneer Website Deployment Script
# This script helps you deploy the website to various platforms

echo "🏠 GeoPioneer Website Deployment Helper"
echo "======================================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial GeoPioneer website commit"
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

echo ""
echo "🚀 Choose your deployment platform:"
echo "1. Netlify (Recommended)"
echo "2. Vercel" 
echo "3. GitHub Pages"
echo "4. Manual setup instructions"
echo ""

read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        echo ""
        echo "🌐 Netlify Deployment Instructions:"
        echo "=================================="
        echo "1. Push this code to GitHub:"
        echo "   - Create repository at github.com"
        echo "   - git remote add origin https://github.com/yourusername/geopioneer-website.git"
        echo "   - git push -u origin main"
        echo ""
        echo "2. Deploy to Netlify:"
        echo "   - Go to netlify.com"
        echo "   - Click 'New site from Git'"
        echo "   - Connect your GitHub repository"
        echo "   - Build command: npm run build"
        echo "   - Publish directory: dist"
        echo "   - Click 'Deploy site'"
        echo ""
        echo "3. Configure domain:"
        echo "   - Add custom domain: geo-pioneer.com"
        echo "   - Update DNS as instructed"
        echo "   - SSL automatically configured"
        ;;
    2)
        echo ""
        echo "⚡ Vercel Deployment Instructions:"
        echo "================================="
        echo "1. Push this code to GitHub (same as above)"
        echo ""
        echo "2. Deploy to Vercel:"
        echo "   - Go to vercel.com"
        echo "   - Click 'Import Project'"
        echo "   - Connect GitHub repository"
        echo "   - Automatic React detection"
        echo "   - Click 'Deploy'"
        echo ""
        echo "3. Configure domain:"
        echo "   - Add geo-pioneer.com in settings"
        echo "   - Update DNS as instructed"
        ;;
    3)
        echo ""
        echo "🆓 GitHub Pages Deployment Instructions:"
        echo "======================================="
        echo "1. Push this code to GitHub (same as above)"
        echo ""
        echo "2. Enable GitHub Pages:"
        echo "   - Go to repository Settings → Pages"
        echo "   - Source: GitHub Actions"
        echo "   - Create .github/workflows/deploy.yml"
        echo "   - Configure build workflow"
        echo ""
        echo "3. Configure domain:"
        echo "   - Add geo-pioneer.com in Pages settings"
        echo "   - Update DNS CNAME record"
        ;;
    4)
        echo ""
        echo "📋 Manual Setup Instructions:"
        echo "============================"
        echo "1. Install dependencies: npm install"
        echo "2. Build for production: npm run build"
        echo "3. Upload 'dist' folder to your web host"
        echo "4. Configure domain to point to uploaded files"
        echo "5. Ensure server serves index.html for all routes"
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac

echo ""
echo "📊 After deployment, remember to:"
echo "- Add Google Analytics tracking code"
echo "- Set up form handling for lead capture"
echo "- Test all calculator functionality"
echo "- Verify mobile responsiveness"
echo "- Submit to search engines"
echo ""
echo "🎉 Your GeoPioneer website will be live and ready to generate leads!"
