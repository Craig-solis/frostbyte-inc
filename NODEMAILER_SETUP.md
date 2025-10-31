# Nodemailer SMTP Setup Guide for Vercel Deployment

## Overview

This setup uses Nodemailer for proper SMTP email sending with "Send on Behalf" functionality. Since this requires server-side code, we'll deploy to Vercel instead of GitHub Pages.

## Benefits of Nodemailer + Vercel

- ✅ **True "Send on Behalf"** - Proper Microsoft 365 integration
- ✅ **Server-side security** - Credentials never exposed to client
- ✅ **Full SMTP control** - Custom headers and advanced configuration
- ✅ **Free hosting** - Vercel free tier is generous
- ✅ **GitHub integration** - Auto-deploy from your repo
- ✅ **Custom domains** - Use your own domain

## Current Configuration

### Environment Variables (.env.local)

```env
SMTP_AUTH_EMAIL=craig.solis@frostbyte-inc.com
SMTP_AUTH_PASSWORD=Katana54!!
SMTP_FROM_EMAIL=webservices@frostbyte-inc.com
```

### How It Works

1. **Authentication**: Uses your personal account (craig.solis@frostbyte-inc.com)
2. **Send From**: Sets webservices@frostbyte-inc.com as sender
3. **Delivery**: Emails go to webservices@frostbyte-inc.com inbox
4. **Reply-To**: Set to form submitter's email

## Local Testing

### 1. Test Development Server

```bash
npm run dev
```

Visit: `http://localhost:3000/dev/contact`

### 2. Test Email Functionality

1. Fill out the contact form
2. Check browser console for success/error messages
3. Check webservices@frostbyte-inc.com inbox

## Deployment Options

### Option 1: Vercel (Recommended)

1. **Create Vercel Account**: Go to [vercel.com](https://vercel.com)
2. **Connect GitHub**: Link your GitHub account
3. **Import Project**: Select your `frostbyte-dev` repository
4. **Add Environment Variables** in Vercel dashboard:
   - `SMTP_AUTH_EMAIL=c****@frostbyte-inc.com`
   - `SMTP_AUTH_PASSWORD=******************`
   - `SMTP_FROM_EMAIL=w******@frostbyte-inc.com`
5. **Deploy**: Vercel auto-deploys from GitHub pushes

### Option 2: Netlify Functions

1. Create `netlify/functions/send-email.js`
2. Configure environment variables in Netlify
3. Update form to call Netlify function

### Option 3: Railway, Render, or Heroku

All support Node.js apps with environment variables

## Security Improvements

### Use App Passwords (Recommended)

1. Sign into Microsoft 365 with your personal account
2. Go to **Security** > **Advanced security options**
3. Create **App Password** named "Website Contact Form"
4. Replace `SMTP_AUTH_PASSWORD` with the app password

### Additional Security Headers

The current setup includes these headers for better delivery:

```javascript
headers: {
  'X-MS-Exchange-Organization-MessageDirectionality': 'Originating',
  'X-Originating-IP': '[127.0.0.1]',
}
```

## Troubleshooting

### Authentication Issues

- Verify your personal account credentials
- Try using an App Password instead of regular password
- Check if 2FA is enabled and blocking SMTP

### "Send on Behalf" Not Working

- Verify you have permissions in Outlook (check "From" dropdown)
- Contact your Microsoft 365 admin if needed
- Test sending manually in Outlook first

### Deployment Issues

- Check Vercel function logs for errors
- Verify environment variables are set correctly
- Ensure API route is accessible at `/api/send-email`

## Email Template Output

Your emails will include:

- **From**: "FrostByte WebServices" <webservices@frostbyte-inc.com>
- **To**: webservices@frostbyte-inc.com
- **Reply-To**: [Form submitter's email]
- **Subject**: Contact Form: [User's subject]
- **Content**: Professional HTML email with form details

## Next Steps

1. Test locally with `npm run dev`
2. Create Vercel account and connect GitHub
3. Deploy and test on production
4. Configure custom domain if desired

This setup provides the most professional and reliable email solution for your contact form!
