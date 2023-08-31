import "../styles/globals.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="es">
      <head />
      <body className="h-screen bg-[#0D1117]">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
