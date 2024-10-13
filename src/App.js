import TripForm from "./  components/TripForm";
import Logo from "./assets/qbair-logo.svg";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#B6CAD3]">
      <div className="flex items-center p-3">
        <img src={Logo} alt="QBAir Logo" className="w-40 h-auto" />
      </div>

      <div className="flex items-center justify-center ">
        <div className="w-full max-w-md p-6 m-6 bg-white rounded-md shadow-md">
          <h1 className="text-3xl font-bold text-center text-[#0C2339] mb-4">
            Book Your Trip!
          </h1>
          <TripForm />
        </div>
      </div>
    </div>
  );
}

export default App;
