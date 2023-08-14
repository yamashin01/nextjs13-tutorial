import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Hello, Page1</h1>
      <Link href="/page2">page2へ移動</Link>
    </div>
  );
}
