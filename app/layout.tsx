import '/app/ui/home.css';
import { gothic } from '../app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${gothic.className} antialiased`}>
        {children}
        
      </body>
    </html>
  );
}
