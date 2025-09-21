# Vercel Deployment Guide for CryptoFrame Vault

This guide provides step-by-step instructions for deploying the CryptoFrame Vault application to Vercel.

## Prerequisites

- Vercel account (free tier available)
- GitHub repository access
- Environment variables configured

## Step-by-Step Deployment Instructions

### 1. Access Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click on "New Project" or "Add New..." → "Project"

### 2. Import GitHub Repository

1. In the "Import Git Repository" section, search for `0xStellaHsu/cryptoframe-vault`
2. Click on the repository when it appears
3. Click "Import" to proceed

### 3. Configure Project Settings

#### Framework Preset
- **Framework Preset**: Select "Vite" from the dropdown
- Vercel should automatically detect this as a Vite project

#### Build and Output Settings
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

### 4. Environment Variables Configuration

Click on "Environment Variables" and add the following variables:

| Variable Name | Value | Environment |
|---------------|-------|-------------|
| `NEXT_PUBLIC_CHAIN_ID` | `11155111` | Production, Preview, Development |
| `NEXT_PUBLIC_RPC_URL` | `https://sepolia.infura.io/v3/YOUR_INFURA_KEY` | Production, Preview, Development |
| `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID` | `YOUR_WALLET_CONNECT_PROJECT_ID` | Production, Preview, Development |
| `NEXT_PUBLIC_INFURA_API_KEY` | `YOUR_INFURA_API_KEY` | Production, Preview, Development |

**Important**: Make sure to select all three environments (Production, Preview, Development) for each variable.

### 5. Advanced Configuration (Optional)

#### Custom Domain (Optional)
1. After deployment, go to Project Settings
2. Navigate to "Domains"
3. Add your custom domain if you have one
4. Follow the DNS configuration instructions

#### Build Optimization
- The project is already configured with optimized build settings
- Vite will handle code splitting and optimization automatically

### 6. Deploy the Application

1. Review all settings in the "Deploy" section
2. Click "Deploy" to start the deployment process
3. Wait for the build to complete (usually 2-5 minutes)

### 7. Post-Deployment Configuration

#### Verify Deployment
1. Once deployment is complete, you'll receive a deployment URL
2. Test the application by visiting the URL
3. Verify wallet connection functionality
4. Test all major features

#### Environment Variables Verification
1. Go to Project Settings → Environment Variables
2. Verify all variables are correctly set
3. Ensure they're enabled for all environments

### 8. Continuous Deployment Setup

The project is configured for automatic deployments:
- **Production**: Deploys automatically when pushing to `main` branch
- **Preview**: Deploys automatically for pull requests
- **Development**: Deploys automatically for feature branches

### 9. Monitoring and Analytics

#### Vercel Analytics (Optional)
1. Go to Project Settings → Analytics
2. Enable Vercel Analytics for performance monitoring
3. View deployment logs and performance metrics

#### Error Monitoring
1. Check the "Functions" tab for any serverless function errors
2. Monitor the "Deployments" tab for build status
3. Use browser developer tools to check for client-side errors

### 10. Troubleshooting Common Issues

#### Build Failures
- Check that all dependencies are in `package.json`
- Verify Node.js version compatibility
- Check build logs in Vercel dashboard

#### Environment Variables Not Working
- Ensure variables are prefixed with `NEXT_PUBLIC_` for client-side access
- Verify variables are set for the correct environment
- Redeploy after adding new variables

#### Wallet Connection Issues
- Verify WalletConnect Project ID is correct
- Check that RPC URLs are accessible
- Test with different wallet providers

### 11. Performance Optimization

#### Build Optimization
- The project uses Vite for fast builds
- Code splitting is automatically handled
- Static assets are optimized

#### Runtime Optimization
- Enable Vercel's Edge Functions if needed
- Configure caching headers for static assets
- Monitor Core Web Vitals

### 12. Security Considerations

#### Environment Variables
- Never commit sensitive keys to the repository
- Use Vercel's environment variable system
- Rotate keys regularly

#### HTTPS
- Vercel automatically provides HTTPS
- Custom domains also get SSL certificates
- No additional configuration needed

## Deployment URLs

After successful deployment, you'll have:
- **Production URL**: `https://cryptoframe-vault.vercel.app` (or your custom domain)
- **Preview URLs**: Generated for each pull request
- **Development URLs**: Generated for feature branches

## Support and Maintenance

### Regular Updates
1. Monitor for dependency updates
2. Update environment variables as needed
3. Test deployments in preview environment first

### Monitoring
1. Check Vercel dashboard regularly
2. Monitor application performance
3. Review error logs and analytics

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [WalletConnect Documentation](https://docs.walletconnect.com/)
- [RainbowKit Documentation](https://www.rainbowkit.com/docs/introduction)

## Contact

For deployment issues or questions:
- GitHub Issues: [Repository Issues](https://github.com/0xStellaHsu/cryptoframe-vault/issues)
- Email: alpha08@zenithcorp.xyz

---

**Note**: This deployment guide assumes you have the necessary permissions to deploy to Vercel and access to the GitHub repository. Make sure all environment variables are correctly configured before deployment.
