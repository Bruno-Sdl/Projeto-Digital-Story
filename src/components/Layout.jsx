export function Layout({ children }) {
  return (
    <div>
      <header>
        <p>Digital Store</p>
      </header>

      <main>{children}</main>

      <footer>
        <p>Digital Store</p>
      </footer>
    </div>
  );
}