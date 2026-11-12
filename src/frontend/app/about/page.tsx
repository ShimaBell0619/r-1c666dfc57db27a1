import Link from 'next/link';

export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>
      <p>別ページです。</p>
      <Link href="/">戻る</Link>
    </main>
  );
}
