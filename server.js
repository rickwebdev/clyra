const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;

// Create Next.js app
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Maintenance mode: if a maintenance.flag file exists, serve static maintenance page
      const flagPath = path.join(process.cwd(), 'maintenance.flag');
      if (fs.existsSync(flagPath)) {
        // Allow Next internal assets and API to be probed if needed
        const url = req.url || '';
        const allowList = ['/favicon', '/_next', '/images', '/robots.txt', '/site.webmanifest'];
        const isAllowed = allowList.some((p) => url.startsWith(p));
        if (!isAllowed) {
          res.statusCode = 503;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          const maintenanceFile = path.join(process.cwd(), 'public', 'maintenance.html');
          if (fs.existsSync(maintenanceFile)) {
            res.end(fs.readFileSync(maintenanceFile));
          } else {
            res.end('<!doctype html><html><head><meta charset="utf-8"><title>Updating…</title></head><body style="margin:0;display:flex;align-items:center;justify-content:center;height:100vh;background:#000;color:#fff;font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif"><div><div style="text-align:center;margin-bottom:12px;font-weight:700;letter-spacing:.02em">Clyra Studios</div><div style="opacity:.8">We\'re updating the site. Please check back in a minute.</div></div></body></html>');
          }
          return;
        }
      }
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  })
    .once('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
