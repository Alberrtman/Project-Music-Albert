import Template from "./Template";
import ProductDetail from "./products/detail/ProductDetail";
import { Switch, Route } from "react-router-dom";
import Landing from "./landing/Landing";
import ProductList from "./products/ProductList";
import Login from "./template/login/Login";
// import Register from "./Register";
import DataUser from "./components/DataUser";
import TambahUser from "./components/TambahUser";
import DataProduk from "./components/DataProduk";
import EditUser from "./components/EditUser";
import TambahProduk from "./components/TambahProduk";
import EditProduk from "./components/EditProduk";
import DataBanner from "./components/DataBanner";
import EditBanner from "./components/EditBanner";
import TambahBanner from "./components/TambahBanner";

function App() {
  return (
    <Template>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/dataProduk" exact>
          <DataProduk />
        </Route>
        <Route path="/dataProduk/tambahProduk" exact>
          <TambahProduk />
        </Route>
        <Route path="/dataProduk/editProduk/:id" exact>
          <EditProduk />
        </Route>

        <Route path="/dataUser" exact>
          <DataUser />
        </Route>
        <Route path="/dataUser/tambahUser" exact>
          <TambahUser />
        </Route>
        <Route path="/dataUser/editUser/:id" exact>
          <EditUser />
        </Route>

        <Route path="/dataBanner" exact>
          <DataBanner />
        </Route>
        <Route path="/dataBanner/tambahBanner" exact>
          <TambahBanner />
        </Route>
        <Route path="/dataBanner/editBanner/:id" exact>
          <EditBanner />
        </Route>
        
        <Route path="/products" exact>
          <ProductList />
        </Route>
        <Route path="/products/:id" exact>
          <ProductDetail />
        </Route>
        <Route path="/landing" exact>
          <Landing />
        </Route>
      </Switch>
    </Template>

  );
}

export default App;
