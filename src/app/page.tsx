import Link from "next/link";
import Image from "next/image";

const HomeHeader = () => {
  return (
    <header className="flex justify-around items-center">
      <Image
        src="/icons/LOGO.svg"
        alt="'RateIt' logo"
        width={110}
        height={25}
      ></Image>

      <nav aria-label="header-navbar">
        <ul className="flex items-center justify-center gap-x-9">
          <li className="text-main-t text-xl font-semibold">
            <Link href="#">How it works</Link>
          </li>
          <li className="text-main-t text-xl font-semibold">
            <Link href="#">Pricing</Link>
          </li>
          <li className="text-main-t text-xl font-semibold">
            <Link href="#">Why it&aposs important</Link>
          </li>
          <li className="text-main-t text-xl font-semibold">
            <Link href="#">About us</Link>
          </li>
          <li className="text-main-t text-xl font-semibold">
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-center gap-x-2">
        <button
          type="button"
          className="text-lg font-bold bg-blue-3 rounded-xl px-5 py-3 text-white"
        >
          Sign up
        </button>
        <button
          type="button"
          className="text-lg font-bold bg-white border border-blue-3 rounded-xl px-5 py-3 text-blue-3"
        >
          Login
        </button>
      </div>
    </header>
  );
};

const Home = () => {
  return (
    <main className="pt-16 px-8 flex flex-col justify-around">
      <HomeHeader />
      <h1>This is home</h1>
    </main>
  );
};

export default Home;
