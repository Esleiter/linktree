import "../styles/globals.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body className="h-screen bg-gradient-to-tl from-sky-400 to-sky-200">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
