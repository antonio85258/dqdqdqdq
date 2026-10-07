import "./globals.css";
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="ru"><body><nav>
  <a href="/">Главная</a><a href="/server-demo">Server</a><a href="/client-demo">Client</a><a href="/greet-demo">Server Action</a><a href="/about">О нас</a><a href="/blog/nextjs-vvedenie">Blog</a><a href="/products/1">Товар</a>
 </nav>{children}</body></html>;
}