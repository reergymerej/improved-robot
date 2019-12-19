This has Webpack HMR.

```sh
npm start
```

starts devserver

open http://localhost:8080

Alter src/foo.js and see changes updated without refresh.


---

Can we get HMR to work if index.html is served by another server?


```sh
python -m SimpleHTTPServer
```
open http://localhost:8000


Can't find bundle.  Devserver is on :8080.
-    <script src="main.js"></script>
+    <script src="http://localhost:8080/main.js"></script>
