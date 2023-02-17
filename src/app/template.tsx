import Image from 'next/image';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/news">News</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/">
              <Image
                src="https://img.icons8.com/material-outlined/48/null/filled-circle--v2.png"
                alt="logo image"
                width={40}
                height={40}
              />
            </a>
          </li>
          <li>
            <a href="/board">Board</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}
