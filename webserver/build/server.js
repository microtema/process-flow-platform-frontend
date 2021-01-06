"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path = __importStar(require("path"));
const http_proxy_1 = __importDefault(require("http-proxy"));
const app = express_1.default();
const apiProxy = http_proxy_1.default.createProxyServer({
    secure: false,
    autoRewrite: true,
    followRedirects: true,
    ignorePath: true,
    changeOrigin: true,
});
apiProxy.on('proxyReq', (proxyReq, req) => {
    if (req.body && req.complete) {
        const bodyData = JSON.stringify(req.body);
        proxyReq.setHeader('Content-Type', 'application/json');
        proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
        proxyReq.write(bodyData);
    }
});
const PORT = process.env.PORT || 4200;
app.use(express_1.default.json());
// expose app folder as static
app.use(express_1.default.static(path.join(__dirname, '..', 'dist'), { etag: true }));
// simple check route for readyness check
app.get('/health', (req, res) => res.json({ status: 'UP' }));
['/', '*'].forEach((it) => app.get(it, (req, res) => res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'))));
// set port, listen for requests
app.listen(PORT, () => console.log(`Server is running on  http://localhost:${PORT}.`));
//# sourceMappingURL=server.js.map