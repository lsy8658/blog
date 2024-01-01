import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div>
      <h2>not-found</h2>
      <p>page를 찾을 수 없습니다.</p>
      <Link href="/">돌아가기</Link>
    </div>
  );
}
