"use client"; // 컴포넌트는 서버 기반으로 동작, 따라서 클라이언트 기반 기능 쓰기 위해서는 해당 구문 입력
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AboutMenu() {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <li>
          {/* 개발자도구 확인해보면 header, on의 클래스명이 임의로 들어가있음 ==> 따라서 'on'이 아닌 styles.on을 넣어야함 */}
          <Link href="/about/president">President</Link>
        </li>
        <li>
          <Link href="/about/company">Company</Link>
        </li>
      </ul>
    </nav>
  );
}
