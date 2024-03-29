import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CreateStockCategoryAdmin from "../../Components/forms/StockCategory/CreateCategoryAdmin";
import EditStockCategoryAdmin from "../../Components/forms/StockCategory/EditCategoryAdmin";
import AdminCategoryView from "../forms/views/AdminCategoryView";

import CreateStockItemAdmin from "../../Components/forms/StockItems/CreateStockItemAdmin";
import EditStockItemAdmin from "../../Components/forms/StockItems/EditStockItemsAdmin";
import ViewStockItemAdmin from "../forms/views/AdminStockItemsView";

import CreateSuppliersAdmin from "../../Components/forms/Suppliers/CreateSupplierAdmin";
import EditSuppliersAdmin from "../../Components/forms/Suppliers/EditSuppliersAdmin";
import ViewSuppliersAdmin2 from "../forms/views/AdminSupplierView";

function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route>
            {/* Salika Routes */}
            <Route
              path="/adminCreateStockCategory"
              component={CreateStockCategoryAdmin}
              exact
            />
            <Route
              path="/adminEditStockCategory/:id"
              component={EditStockCategoryAdmin}
            />
            <Route
              path="/adminViewStockCategory"
              component={AdminCategoryView}
            />

            <Route
              path="/adminCreateStockItems/:id"
              component={CreateStockItemAdmin}
            />
            <Route
              path="/adminEditStockItem/:id"
              component={EditStockItemAdmin}
            />
            <Route
              path="/adminViewStockItem/:id"
              component={ViewStockItemAdmin}
            />

            <Route
              path="/adminCreateSuppliers"
              component={CreateSuppliersAdmin}
            />
            <Route
              path="/adminEditSuppliers/:id"
              component={EditSuppliersAdmin}
            />
            <Route path="/adminViewSuppliers" component={ViewSuppliersAdmin2} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
