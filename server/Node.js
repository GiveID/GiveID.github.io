const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 8080;

// Serve static frontend files
app.use(express.static('public'));

// List of proxy servers to rotate
const proxies = [
    "http://188.253.112.218:80",
    "http://91.83.220.124:1111",
    "http://51.91.109.83:80",
    "http://193.70.32.184:12855"
];

// Function to pick a random proxy
function getRandomProxy() {
    return proxies[Math.floor(Math.random() * proxies.length)];
}

// Proxy endpoint
app.use('/proxy', (req, res, next) => {
    const targetProxy = getRandomProxy();
    console.log(`Routing request through: ${targetProxy}`);

    createProxyMiddleware({
        target: targetProxy,
        changeOrigin: true,
        pathRewrite: { '^/proxy': '' }
    })(req, res, next);
});

// Start server
app.listen(PORT, () => {
    console.log(`FreedomGate Proxy Server is running on http://localhost:${PORT}`);
});
