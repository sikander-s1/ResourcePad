import ConditionalLayout from "./ConditionalLayout";

export const metadata = {
  title: "RecourcPad | Home",
  description: "RecourcPad Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ConditionalLayout>
          <main>{children}</main>
        </ConditionalLayout>
      </body>
    </html>
  );
} 
