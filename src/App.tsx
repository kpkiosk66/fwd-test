import { UserForm } from "./components/UserForm";
import { CostDisplay } from "./components/CostDisplay";

import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="col">
          <UserForm />
        </div>
        <div className="col end">
          <CostDisplay />
        </div>
      </div>
    </>
  );
}

export default App;
