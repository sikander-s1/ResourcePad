import "./globals.css";

export const metadata = {
  title: "RecourcPad | Home",
  description: "RecourcPad Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
} 
