import "./globals.css";

export const metadata = {
  title: "Deep Kakadiya — Data Analyst & Python Developer",
  description:
    "Portfolio of Deep Kakadiya — Data Analyst skilled in Power BI, Python, and building data-driven solutions.",
  keywords: ["Deep Kakadiya", "Data Analyst", "Power BI", "Python", "Portfolio"],
  openGraph: {
    title: "Deep Kakadiya — Data Analyst",
    description: "Turning 10M+ records into business decisions.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('theme');
                if (t !== 'light') {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {
                document.documentElement.classList.add('dark');
              }
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
