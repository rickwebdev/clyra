#!/bin/bash
echo "🚀 Deploying to Clyra Studios..."

# Push to git
echo "📤 Pushing to git..."
git add .
git commit -m "Deploy update"
git push origin main

# Deploy to server
echo "🔄 Deploying to server..."
ssh clyra "cd /home/n30m0rph/web/clyrastudios.com/nodejs && git pull origin main && npm run build && pm2 restart wp-studio"

echo "✅ Deployment complete!"
