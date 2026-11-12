# Sample

`.azure-pipelines/azure-pipelines.yml` を手動実行し、接続名とアプリ名を指定します。
`frontendMessage` → `NEXT_PUBLIC_DEMO_MESSAGE`（ビルド時）。ローカル設定例は `src/frontend/.env.example`。
`backendMessage` → App Serviceの `DEMO_MESSAGE`（実行時）。変更・再起動後、画面の「再取得」で確認できます。
表示される値なので、どちらにも公開可能なサンプル値を指定してください。
