import AboutMenu from "@/components/aboutMenu/aboutMenu";

export const generateMetadata = () => {
  return {
    title: "About page",
    description: "Information of ABC Company including President and our crew",
  };
};

export default function Layout({ children }) {
  return (
    <div className="layout">
      <AboutMenu />
      {children}
    </div>
  );
}
