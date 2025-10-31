# SMTP Email Setup Guide for Microsoft 365 Shared Mailbox

## Overview

Your contact form uses SMTP to send emails from the shared mailbox `webservices@frostbyte-inc.com`. Since it's a shared mailbox, you need to authenticate with your personal account that has access to it.

## Step 1: Update Environment Variables

Edit `.env.local` and add your credentials:

```env
# Authentication credentials (your personal account)
SMTP_AUTH_EMAIL=your_personal_email@frostbyte-inc.com
SMTP_AUTH_PASSWORD=your_personal_password

# Shared mailbox to send from
SMTP_FROM_EMAIL=webservices@frostbyte-inc.com
```

## Step 2: Ensure Shared Mailbox Access

Make sure your personal account has "Send As" permissions for the shared mailbox:

### Option A: Admin gives permissions

1. Microsoft 365 Admin goes to **Exchange admin center**
2. Navigate to **Recipients** > **Mailboxes**
3. Select the shared mailbox (`webservices@frostbyte-inc.com`)
4. Go to **Manage mailbox delegation**
5. Add your account to **Send As** permissions

### Option B: Check your current access

1. Open Outlook with your personal account
2. Try composing an email
3. Click the "From" field - you should see `webservices@frostbyte-inc.com` as an option

## Step 3: Security Options

### Option A: Use Your Regular Password (Simple)

Just use your regular Microsoft 365 password for your personal account.

### Option B: Use App Password (Recommended for Security)

1. Sign in to your personal Microsoft 365 account
2. Go to **Security** > **Advanced security options**
3. Under **Additional security verification**, click **App passwords**
4. Click **Create app password**
5. Name it "Website Contact Form"
6. Copy the generated password and use it as `SMTP_AUTH_PASSWORD`

## Step 4: Test the Setup

1. Restart your development server: `npm run dev`
2. Go to your contact page: `http://localhost:3001/dev/contact`
3. Fill out and submit the form
4. Check the `webservices@frostbyte-inc.com` inbox

## How It Works

- Form submission → API route (`/api/send-email`)
- Authenticate with your personal account
- Send email "from" the shared mailbox
- Email appears in shared mailbox sent items
- Reply-to field set to the form submitter's email

## Troubleshooting

### "Send As" Permission Denied

- Contact your Microsoft 365 admin
- Request "Send As" permissions for the shared mailbox
- Alternative: Use "Send on Behalf" permissions

### Authentication Failed

- Double-check your personal account credentials
- Try using an App Password instead of regular password
- Ensure your account has SMTP AUTH enabled

### Shared Mailbox Not Available

- Verify you have access to the shared mailbox in Outlook
- Check with admin about mailbox delegation settings

### Connection Refused

- Check your firewall settings
- Ensure port 587 is not blocked
- Try using port 25 or 465 (update in route.ts)

### SSL/TLS Errors

The configuration uses TLS on port 587, which is the recommended setting for Microsoft 365.

## Security Benefits

- No third-party services involved
- Direct SMTP connection to Microsoft 365
- Environment variables keep credentials secure
- Server-side processing (more secure than client-side)
