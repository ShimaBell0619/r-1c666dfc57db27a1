'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type BackendInfo = { demoMessage: string; frontendMessage: string };

export default function HomePage() {
  const [info, setInfo] = useState<BackendInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setInfo(null);
    setError(null);

    async function load() {
      try {
        const response = await fetch('/api/info', {
          cache: 'no-store',
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data: BackendInfo = await response.json();
        if (!controller.signal.aborted) setInfo(data);
      } catch (cause: unknown) {
        if (!controller.signal.aborted) {
          setError(cause instanceof Error ? cause.message : '取得できませんでした');
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    void load();
    return () => controller.abort();
  }, [reload]);

  return (
    <main>
      <h1>Sample</h1>
      <h2>ビルド時に固定される文字</h2>
      <p>{process.env.NEXT_PUBLIC_DEMO_MESSAGE ?? '（未設定）'}</p>
      <h2>実行時に取得する文字</h2>
      <p aria-live="polite">{loading ? '取得中…' : info?.frontendMessage ?? '—'}</p>
      <p aria-live="polite">C#（実行時）：{loading ? '取得中…' : info?.demoMessage ?? '—'}</p>
      {error ? <p role="alert">取得失敗：{error}</p> : null}
      <button type="button" disabled={loading} onClick={() => setReload((value) => value + 1)}>
        再取得
      </button>
      <p><Link href="/about/">別ページ</Link></p>
    </main>
  );
}
