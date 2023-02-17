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
              <img src="https://img.icons8.com/material-outlined/48/null/filled-circle--v2.png" />
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
