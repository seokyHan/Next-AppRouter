import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";
import { BookData } from "@/types";

async function Footer() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`
  );
  if(!response.ok) {
    return <div>오류가 발생했습니다!</div>
  }

  const books : BookData[] = await response.json();
  const bookCount = books.length;

  return (
    <footer>
      <div>제작 @sseok</div>
      <div>{bookCount}개의 도서가 등록되어 있습니다.</div>
    </footer>
  )
}

// Next에서는 중복된 요청에 대해서 리퀘스트 메모이제이션을 통해 자동으로 캐시해줌.
// 그렇게 되면 모든 컴포넌트에서 한번의 요청으로 사용

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>📚 ONEBITE BOOKS</Link>
          </header>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
