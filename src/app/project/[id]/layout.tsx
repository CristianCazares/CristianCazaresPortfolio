import { Navbar } from "../../components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>
        <div style={{ margin: "36px 240px" }}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
