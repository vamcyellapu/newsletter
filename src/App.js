import { useState } from "react";
import StayUpdated from "./components/StayUpdated";
import Thanks from "./components/Thanks";

function App() {
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSuccess = (value) => {
    setIsSuccess(value);
  };
  return (
    <>
      <main className="md:min-h-screen md:bg-bgColor flex items-center justify-center">
        {isSuccess ? (
          <Thanks onSuccess={() => handleSuccess(false)} />
        ) : (
          <StayUpdated onSuccess={handleSuccess} />
        )}
      </main>
    </>
  );
}

export default App;
