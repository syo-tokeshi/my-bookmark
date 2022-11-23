import Link from 'next/link'

export default function Header() {
  return (
    <>
      <ul>
        <li>
          <Link href="/">ホーム</Link>
        </li>
        <li>
          <Link href="/article/new">新規投稿</Link>
        </li>
        <li>
          <Link href="/article">記事一覧</Link>
        </li>
      </ul>
    </>
  )
}
