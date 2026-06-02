# Deployment Guide

## Deploying to Vercel

### Prerequisites
- Vercel account (https://vercel.com)
- GitHub repository connected to Vercel

### Steps to Deploy

1. **Connect your GitHub repository to Vercel**
   - Go to https://vercel.com/new
   - Select "Import Git Repository"
   - Choose your GitHub account and select `cham-cham` repository
   - Click "Import"

2. **Configure Project Settings**
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `.output`
   - **Install Command**: `npm install`

3. **Set Environment Variables (if needed)**
   - Go to Settings → Environment Variables
   - Add any custom environment variables from `.env.production`
   - Make sure to set `VITE_APP_URL` to your Vercel deployment URL

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `https://your-project-name.vercel.app`

### Configuration Files

- **vercel.json**: Specifies build command, output directory, and routing configuration
- **.vercelignore**: Excludes unnecessary files from deployment
- **.env.production**: Production environment variables

### Troubleshooting

**404 Error:**
- Ensure `vercel.json` has the correct `outputDirectory` (`.output`)
- Check that rewrites are configured for SPA routing
- Verify the build completes successfully in Vercel dashboard

**Build Fails:**
- Check Node version compatibility (18.x or higher recommended)
- Verify all dependencies are installed correctly
- Check build logs in Vercel dashboard

**Environment Variables:**
- VITE_ prefixed variables are exposed to the browser
- Update VITE_APP_URL in Vercel project settings

### Production URL

Replace `https://your-production-domain.com` in `.env.production` with your actual Vercel domain once deployed.

### Custom Domain

To add a custom domain:
1. Go to your Vercel project → Settings → Domains
2. Add your domain and follow DNS configuration steps
3. Update VITE_APP_URL to your custom domain

---

For more help, visit: https://vercel.com/docs/frameworks/tanstack-start
