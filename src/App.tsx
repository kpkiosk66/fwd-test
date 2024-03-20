import { UserForm } from "./components/UserForm";
import { CostDisplay } from "./components/CostDisplay";

import "./App.css";

function App() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div >
          <UserForm />
        </div>
        <div >
          <CostDisplay />
        </div>
      </div>
    </>
  );
}

export default App;
