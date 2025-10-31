# Microsoft 365 SMTP Authentication Fix

## Error: "Authentication unsuccessful, the request did not meet the criteria"

This error means Microsoft 365 is blocking SMTP authentication. Here are the solutions in order of preference:

## Solution 1: Enable SMTP AUTH for Your Account ⭐ **Try This First**

### Step 1: Check if SMTP AUTH is Enabled

1. Go to [Microsoft 365 Admin Center](https://admin.microsoft.com)
2. Navigate to **Users** > **Active users**
3. Find your account (`craig.solis@frostbyte-inc.com`)
4. Click on your name > **Mail** tab
5. Look for **Authenticated SMTP** setting

### Step 2: Enable SMTP AUTH (Admin Required)

If you're an admin or can contact an admin:

1. In Microsoft 365 Admin Center
2. Go to **Settings** > **Org settings** > **Modern authentication**
3. Ensure **Enable SMTP AUTH** is checked
4. Or enable it per-user in Exchange Admin Center

## Solution 2: Use App Password 🔐 **Most Secure**

### Create App Password

1. Sign into [Microsoft 365 Security](https://mysignins.microsoft.com/security-info)
2. Click **Add sign-in method** > **App password**
3. Name it "Website Contact Form"
4. Copy the generated password (format: xxxx-xxxx-xxxx-xxxx)

### Update Environment Variables

Replace your current password with the app password:

```env
SMTP_AUTH_EMAIL=craig.solis@frostbyte-inc.com
SMTP_AUTH_PASSWORD=xxxx-xxxx-xxxx-xxxx
SMTP_FROM_EMAIL=webservices@frostbyte-inc.com
```

## Solution 3: Use Different Authentication Method

### OAuth2 Setup (Advanced)

If basic auth is completely blocked, we can set up OAuth2:

1. Register app in Azure AD
2. Get client credentials
3. Use OAuth2 flow for authentication

## Solution 4: Alternative Email Services

### Fallback Options

If Microsoft 365 SMTP won't work:

1. **Resend** - Modern email API
2. **SendGrid** - Reliable email service
3. **Mailgun** - Developer-friendly
4. **Amazon SES** - AWS email service

## Quick Test Commands

### Test SMTP Connection Manually

```bash
# Test if SMTP is accessible
telnet smtp.office365.com 587
```

### Test with Different Settings

Try these alternative configurations:

#### Option A: Port 25

```javascript
port: 25,
secure: false,
```

#### Option B: Port 465 (SSL)

```javascript
port: 465,
secure: true,
```

#### Option C: Different Auth Method

```javascript
authMethod: "XOAUTH2";
```

## Immediate Next Steps

1. **Try App Password** - This often solves the issue immediately
2. **Contact IT Admin** - Ask them to enable SMTP AUTH for your account
3. **Test Alternative Ports** - Try ports 25 or 465
4. **Consider Alternative Services** - If Microsoft 365 restrictions are too strict

## Alternative: Switch to Resend (Recommended Fallback)

If Microsoft 365 continues to block SMTP, Resend is an excellent alternative:

```bash
npm install resend
```

Resend offers:

- ✅ Modern API (no SMTP issues)
- ✅ Free tier (3,000 emails/month)
- ✅ Excellent deliverability
- ✅ Simple setup

Would you like me to set up Resend as a backup solution?
