import "@/assets/scss/style.scss"

export const metadata = {
  title: "지우재 포트폴리오",
  description: "포트폴리오",
  
};

export default function RootLayout({ children }) {
  return (
      <html lang="ko">
          <link rel="icon" href="star.png" />
          <body>{children}</body>
      </html>
  );
}
