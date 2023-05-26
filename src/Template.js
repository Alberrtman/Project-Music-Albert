import Header from "./template/Header";
import Content from "./template/Content";
import Footer from "./template/Footer";

function Template(props) {
  return (
    <>
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </>
  );
}

export default Template;
