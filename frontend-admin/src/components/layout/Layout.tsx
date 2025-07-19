import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <div className="lg:ml-64">
        <Header />
        <div className="p-4 lg:p-8">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;