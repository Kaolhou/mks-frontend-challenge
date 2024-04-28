import { Montserrat } from "next/font/google";
import "./globals.scss";
import QueryProvider from "./_provider/query-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "300", "400", "600"],
});

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <html lang="en">
        <head>
          <title>MKS Sistemas</title>
        </head>
        <body className={montserrat.className}>{children}</body>
      </html>
    </QueryProvider>
  );
}

export default RootLayout;
