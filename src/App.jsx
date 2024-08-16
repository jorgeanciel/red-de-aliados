import { useEffect, useState } from "react";
import "./App.css";
import { data } from "./data/data";
import { FaYoutube, FaLinkedin, FaPodcast, FaCheck } from "react-icons/fa";

function App() {
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filterData = data.filter(
    (card) =>
      card.servicios.numero2.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.servicios.numero1.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (card.servicios.numero3 &&
        card.servicios.numero3
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      searchTerm === ""
  );

  useEffect(() => {
    // Inicia la animación cuando el componente se monta
    setShow(true);
  }, []);
  return (
    <>
      <div>
        <div className="pb-10 w-[400px]">
          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar beneficios"
          />
        </div>
        <div className="flex mx-auto gap-8 flex-wrap">
          {filterData.map((item) => (
            <div
              className={`flex border bg-white shadow-lg rounded-lg overflow-hidden ${
                show ? "animate-slide-in" : "opacity-0"
              }`}
              key={data.titulo}
            >
              <div className="flex flex-1 p-3 flex-col gap-2">
                <div className="hidden lg:flex flex-col gap-2">
                  <h1 className="text-4xl tracking-wider font-bold">
                    {item.titulo}
                  </h1>

                  <div className="mx-auto px-5 font-sans text-start text-lg text-gray-500">
                    <span>{item.descripcion}</span>
                  </div>
                </div>
                <div className="lg:hidden">
                  <img src={item.imagenLogo} alt="imagen-logo" />
                </div>
                <div className="flex justify-between px-8 items-end">
                  <div className="">
                    <ul className="text-start p-2 flex flex-col gap-1">
                      <div className="px-2 py-1 border text-white rounded-r-2xl bg-gradient-to-r from-red-600 to-orange-400 text-sm flex items-center gap-1 font-semibold">
                        <FaCheck fontSize={18} />
                        <li>{item.servicios.numero1}</li>
                      </div>
                      <div className="py-1 px-2 border text-white rounded-r-2xl bg-gradient-to-r from-red-600 to-orange-400 text-sm font-semibold flex items-center gap-1">
                        <FaCheck fontSize={18} />
                        <li>{item.servicios.numero2}</li>
                      </div>

                      {item.servicios.numero3 && (
                        <div className="py-1 px-2 border text-white rounded-r-2xl bg-gradient-to-r from-red-600 to-orange-400 text-sm font-semibold flex items-center gap-1">
                          <FaCheck fontSize={18} />
                          <li>{item.servicios.numero3}</li>
                        </div>
                      )}
                    </ul>
                  </div>

                  <div className="flex p-2 gap-4">
                    <a
                      href="https://www.youtube.com/shorts/MD5ijokcZ5E"
                      target="__blank"
                      className="text-orange-500"
                    >
                      <FaYoutube size={30} cursor="pointer" target="__blank" />
                    </a>
                    <a
                      href="https://www.youtube.com/shorts/MD5ijokcZ5E"
                      target="__blank"
                      className="text-orange-500"
                    >
                      <FaLinkedin size={30} cursor="pointer" target="__blank" />
                    </a>
                    <a href="" className="text-orange-500">
                      <FaPodcast size={30} cursor="pointer" target="__blank" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="hidden lg:flex justify-evenly items-center  flex-col">
                <img src={item.logo} alt="logo" />
                <a href="https://www.data4sales.com/" target="__blank">
                  <button className="px-8 py-2 bg-gradient-to-r from-[#f54b64] to-[#ff6433]  border rounded-3xl text-white text-lg">
                    Ver mas
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
