import express from 'express'
import * as path from 'path'
import httpProxy from 'http-proxy'

const app = express()
const apiProxy = httpProxy.createProxyServer({
  secure: false,
  autoRewrite: true,
  followRedirects: true,
  ignorePath: true,
  changeOrigin: true
})

apiProxy.on('proxyReq', (proxyReq: any, req: any) => {
  if (req.body && req.complete) {
    const bodyData = JSON.stringify(req.body)
    proxyReq.setHeader('Content-Type', 'application/json')
    proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData))
    proxyReq.write(bodyData)
  }
})

const PORT = process.env.PORT || 4200

app.use(express.json())

// expose app folder as static
app.use(express.static(path.join(__dirname, '..', '..', 'dist'), {etag: true}))

// simple check route for readyness check
app.get('/health', (req: any, res: any) => res.json({status: 'UP'}));

['/', '*'].forEach((it) => app.get(it, (req: any, res: any) => res.sendFile(path.join(__dirname, '..', '..', 'dist', 'index.html'))))

// set port, listen for requests
app.listen(PORT, () => console.log(`Server is running on  http://localhost:${PORT}.`))
