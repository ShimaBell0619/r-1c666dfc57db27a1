#!/usr/bin/env bash
set -e
cd "$(dirname "$0")/.."

npm --prefix src/frontend ci --no-audit --no-fund
npm --prefix src/frontend run build
rm -rf src/backend/wwwroot artifacts/publish
mkdir -p src/backend/wwwroot artifacts
cp -R src/frontend/out/. src/backend/wwwroot/
dotnet publish src/backend/App.csproj -c Release --no-self-contained -o artifacts/publish
(cd artifacts/publish && zip -qr ../app.zip .)
