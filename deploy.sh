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
  git fetch origin main && \
  git reset --hard origin/main && \
  source /root/.nvm/nvm.sh && nvm use 18 && \
  export NODE_OPTIONS=\"--max_old_space_size=2048\" && \
  rm -rf node_modules .next && npm cache clean --force && \
  npm install --no-audit --no-fund && \
  npm run build && \
  pm2 restart wp-studio --update-env && pm2 save"

echo "✅ Deployment complete!"