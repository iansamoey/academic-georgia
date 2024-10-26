import './globals.css';

export const metadata = {
  title: 'Academic Writing',
  description: 'Your academic writing service',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
