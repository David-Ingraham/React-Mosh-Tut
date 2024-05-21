import { useState } from "react";
import { Button } from "./components/Button";
import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}> My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}> My button </Button>
    </div>
  );
}

export default App;
