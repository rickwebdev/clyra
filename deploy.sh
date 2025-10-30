#!/bin/bash
echo "🚀 Deploying to Clyra Studios..."

echo "📤 Pushing to git..."
git add .
git commit -m "Deploy update"
git push origin main

echo "🔄 Deploying to server..."
# Safe reset to avoid merge conflicts from local edits on server
ssh root@159.65.45.45 "\
  set -e; \
  cd /home/n30m0rph/web/clyrastudios.com/nodejs && \
  # Enable maintenance page
  touch maintenance.flag && \
  git fetch origin main && \
  git reset --hard origin/main && \
  source /root/.nvm/nvm.sh && nvm use 18 && \
  npm ci && npm run build && \
  # Ensure PM2 runs the custom server (enables maintenance splash)
  pm2 delete wp-studio || true && \
  pm2 start server.js --name wp-studio --update-env && pm2 save && \
  # Disable maintenance page
  rm -f maintenance.flag"

echo "✅ Deployment complete!"