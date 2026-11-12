# Sample

`.azure-pipelines/azure-pipelines.yml` を手動実行し、接続名とアプリ名を指定します。
`frontendMessage` → `NEXT_PUBLIC_DEMO_MESSAGE`（ビルド時）。ローカル設定例は `src/frontend/.env.example`。
`backendMessage` → App Serviceの `DEMO_MESSAGE`（C#用・実行時）。
`frontendRuntimeMessage` → App Serviceの `FRONTEND_MESSAGE`（画面用・実行時）。C#の `/api/info` 経由で取得します。
App Serviceの `FRONTEND_MESSAGE` を変更し、再起動後に画面の「再取得」を押すと、実行時の文字だけが変わります。再ビルドは不要です。
表示される値には、公開可能なサンプル値だけを指定してください。
