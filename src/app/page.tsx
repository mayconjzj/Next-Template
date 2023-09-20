import { Link } from '@/components/Link';

export default function Home() {
  return (
    <main>
      <div className="w-56 h-56 m-auto my-20 flex flex-col items-center gap-10">
        <h1 className="text-center text-3xl font-black">Hello World</h1>

        <Link href="/">Link</Link>
      </div>
    </main>
  );
}
