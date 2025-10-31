# Path-Based Routing Setup Guide

## Overview
Configure `frostbyte-inc.com/poling` to serve a separate repository while keeping your main site at `frostbyte-inc.com`.

## Step-by-Step Implementation

### Step 1: Create Client Repository
```bash
# Create new repository for client
git clone https://github.com/Craig-solis/poling-wedding-site.git
cd poling-wedding-site

# Initialize Next.js project (or copy your template)
npx create-next-app@latest . --typescript --tailwind --eslint --app
```

### Step 2: Deploy Client Site to Vercel
1. **Push to GitHub**: Commit and push the client site
2. **Import to Vercel**: Go to vercel.com → New Project → Import `poling-wedding-site`
3. **Note the URL**: Vercel gives you something like `poling-wedding-site-abc123.vercel.app`

### Step 3: Configure Path Routing (Choose One Method)

#### Method A: Vercel Domain Configuration (Easiest)
1. **Main Site Domain**:
   - Go to `frostbyte-dev` project in Vercel
   - Settings → Domains
   - Add: `frostbyte-inc.com`

2. **Client Site Path**:
   - Go to `poling-wedding-site` project in Vercel  
   - Settings → Domains
   - Add: `frostbyte-inc.com/poling`

#### Method B: Rewrites in Main Site (More Control)

**Option 1: Using vercel.json** (already created for you)
```json
{
  "rewrites": [
    {
      "source": "/poling/:path*",
      "destination": "https://poling-wedding-abc123.vercel.app/:path*"
    }
  ]
}
```

**Option 2: Using next.config.ts** (already updated for you)
```typescript
async rewrites() {
  return [
    {
      source: '/poling/:path*',
      destination: 'https://poling-wedding-site.vercel.app/:path*',
    },
  ];
}
```

### Step 4: Update Rewrite URLs
After deploying the client site, update the destination URLs in:
- `vercel.json` (line 4)
- `next.config.ts` (line 16)

Replace `https://poling-wedding-site.vercel.app` with the actual Vercel URL.

### Step 5: Test the Setup
1. **Deploy main site**: Push changes to trigger Vercel deployment
2. **Test URLs**:
   - `frostbyte-inc.com` → Main site
   - `frostbyte-inc.com/dev` → Your portfolio  
   - `frostbyte-inc.com/poling` → Client wedding site

## DNS Configuration
If using custom domain (`frostbyte-inc.com`):

1. **Add CNAME record** in your DNS provider:
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   ```

2. **Add A record** for subdomain routing:
   ```
   Type: A  
   Name: @
   Value: 76.76.19.61
   ```

## File Structure Result
```
frostbyte-inc.com/           → frostbyte-dev repo
├── /                        → Main homepage  
├── /dev                     → Your portfolio
└── /dev/contact             → Contact form

frostbyte-inc.com/poling/    → poling-wedding-site repo  
├── /                        → Wedding homepage
├── /gallery                 → Wedding gallery
└── /rsvp                    → RSVP form
```

## Benefits of This Setup
✅ **Isolated codebases** - Each client is separate  
✅ **Independent deployments** - Update one without affecting others  
✅ **Scalable** - Add unlimited client paths  
✅ **Professional URLs** - All under your domain  
✅ **Easy maintenance** - Each site has its own repo  

## Troubleshooting

### Rewrite Not Working
- Check Vercel deployment logs
- Verify destination URL is correct
- Ensure client site is deployed and accessible

### CORS Issues
Add to client site's `next.config.ts`:
```typescript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        { key: 'Access-Control-Allow-Origin', value: 'https://frostbyte-inc.com' },
      ],
    },
  ];
}
```

### 404 Errors
- Verify the client site is deployed
- Check if the rewrite source path matches your URL structure
- Test the direct Vercel URL first

## Scaling to More Clients
For each new client:
1. Create new repository
2. Deploy to Vercel  
3. Add rewrite rule for their path
4. Update and redeploy main site

Example for multiple clients:
```typescript
async rewrites() {
  return [
    { source: '/poling/:path*', destination: 'https://poling-wedding.vercel.app/:path*' },
    { source: '/smith/:path*', destination: 'https://smith-portfolio.vercel.app/:path*' },
    { source: '/johnson/:path*', destination: 'https://johnson-business.vercel.app/:path*' },
  ];
}
```

This setup gives you a professional, scalable platform for hosting multiple client websites!