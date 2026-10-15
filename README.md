# OfflineFirst Kit

A minimal, offline-capable notes app with browser-local storage and a service worker.

**An Open Heightz initiative founded by Clesh TN Maluleka.**

## Quick start
Serve these files locally using a static HTTP server (Python 3 example):

```bash
python -m http.server 8000
```

Then visit http://localhost:8000. Open the page once while online; the service worker can cache its app shell for subsequent offline visits. You can also use a static HTTPS host such as GitHub Pages.

## Privacy and limitations
Notes are stored in this browser's localStorage, not in a cloud account. They may be lost when clearing browser data, using private browsing, or switching devices. There is no encryption, sync, backup or authentication. Do not save passwords or sensitive information. Service workers usually require HTTPS or localhost and might not work when opened with file://.

See LICENSE, AUTHORS.md, NOTICE.md, CONTRIBUTING.md and SECURITY.md.
