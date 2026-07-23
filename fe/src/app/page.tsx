import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Cong Dong Bau</h1>

      <p>Bộ thẻ phát triển cho bé</p>

      <Link href="/cards">Xem bộ thẻ</Link>
    </main>
  );
}
