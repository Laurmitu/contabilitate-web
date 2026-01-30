import "./globals.css";

export const metadata = {
  title: "ContaSuite",
  description: "Contabilitate multi-firmă"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
