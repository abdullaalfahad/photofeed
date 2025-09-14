import "./globals.css";


export const metadata = {
  title: "PhotoFeed",
  description: "A simple photo sharing app built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
