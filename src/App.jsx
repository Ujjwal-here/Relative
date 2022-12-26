import "./App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <main className="max-content mx-auto">
      <section className="m-20">
        <div className="flex flex-row items-center gap-4 mb-32">
          <img className="w-5" src="activity.svg" alt="" />
          <h3 className="text-[#ECF0FF] font-semibold">Trending Assets</h3>
        </div>
        <Cards />
      </section>
    </main>
  );
}

export default App;
