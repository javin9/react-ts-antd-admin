import AppLayout from "layout/AppLayout";
import RouterPage from "router";
import scss from "./app.module.scss";

function App() {
  return (
    <div className={scss.apps}>
      <AppLayout>
        <RouterPage />
      </AppLayout>
    </div>
  );
}

export default App;
