import { ReactNode } from "react";
import Searchbar from "./searchbar";

export default function Layout({
  children
}: {children: ReactNode}) {
  return <div>
    <Searchbar />
    {children}
  </div>
}

// 1. 서버 컴포넌트에는 브라우저에서 실행될 코드가 포함되면 안됨
// 2. 클라이언트 컴포넌트는 클라이언트에서만 실행되지 않음 -> 서버에서 먼저 실행되고 그다음 클라이언트에서 실행됨
// 3. 클라이언트 컴포넌트에서 서버 컴포넌트를 import 할 수 없음 -> 왜? 
// appRouter는 기본적으로 클라이언트 컴포넌트만 Bundling을 함. 서버 컴포넌트는 제외되기 때문에 없는 걸 import 하기 때문
// 그래서 만약 import 하게 되면 자동으로 "use client" 처럼 클라이언트 컴포넌틀처럼 동작
// 만약 서버 컴포넌트처럼 동작하게 하려면 children props 방식으로 전달하면됨
// 서버 컴포넌트에서 클라이언트 컴포넌트에게 직렬화 되지 않는 Props는 전달 불가