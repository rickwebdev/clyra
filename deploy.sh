#!/bin/bash
echo "🚀 Deploying to Clyra Studios..."

# Push to git
echo "📤 Pushing to git..."
git add .
git commit -m "Deploy update"
git push origin main

# Deploy to server
echo "🔄 Deploying to server..."
ssh root@159.65.45.45 "cd /home/n30m0rph/web/clyrastudios.com/nodejs && git pull origin main && source /root/.nvm/nvm.sh && nvm use 18 && npm run build && cp -r .next/static/* /home/n30m0rph/web/clyrastudios.com/public_html/_next/static/ && pkill -f 'next start' && nohup npm start > app.log 2>&1 &"

echo "✅ Deployment complete!"