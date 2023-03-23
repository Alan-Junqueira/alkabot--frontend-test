import './globals.css';

export const metadata = {
  title: 'Home',
  description: 'Página inicial'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
