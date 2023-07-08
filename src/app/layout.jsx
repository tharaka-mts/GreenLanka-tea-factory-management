import "@styles/globals.css";

export const metadata = {
  title: "Green Lanka",
  description: "Tea Factory Management System",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
        <main>
          {children}
        </main>
    </body>
  </html>
);

export default RootLayout;
