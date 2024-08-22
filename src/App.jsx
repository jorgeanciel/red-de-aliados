import { useEffect, useState } from "react";
import "./App.css";
import { data } from "./data/data";
import { FaYoutube, FaLinkedin, FaPodcast, FaCheck } from "react-icons/fa";

function App() {
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectCountry, setSelectCountry] = useState("");
  const [filterCountry, setFilterCountry] = useState([]);

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

  const handleCountry = () => {
    if (selectCountry === "Todos") {
      setFilterCountry(data);
    } else {
      setFilterCountry(data.filter((card) => card.pais === selectCountry));
    }
  };

  useEffect(() => {
    // Inicia la animación cuando el componente se monta
    setShow(true);
  }, []);
  return (
    <>
      <div>
        <section className="flex border bg-white shadow-sm rounded-lg overflow-hidden p-5">
          <div className="flex flex-col gap-5 flex-1">
            <h1 className="text-start text-4xl font-bold">
              ¡Conoce los beneficios de nuestra red de aliados!
            </h1>
            <div className="mx-auto px-1 font-sans text-start text-lg text-gray-500">
              <span>
                La Red de Aliados de Commerce Society brinda a todos los
                clientes, asociados y estudiantes, la posibilidad de conocer y
                contratar empresas aliadas que actúan en el ecosistema digital.
                Los aliados tienen por objetivo fomentar el crecimiento de los
                participantes de Commerce Society, generando valor agregado a
                través de oportunidades que harán el negocio crecer de manera
                sustentable a lo largo del tiempo.
              </span>
            </div>
          </div>
          <div className="h-[250px]">
            <img
              src="https://academia.commercesociety.com/wp-content/uploads/2023/07/Group-692-1-768x486-1.png"
              alt="imagen"
              className="h-full"
            />
          </div>
        </section>

        <section className="flex gap-5 p-5 items-center">
          <div className="flex items-center gap-2">
            <select
              value={selectCountry}
              onChange={(e) => setSelectCountry(e.target.value)}
              className="block w-[400px] p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="" disabled>
                Categoria
              </option>
              <option value="Todos">Todos</option>
              <option value="Peru">Grocery & Foods</option>
              <option value="Argentina">B2B & D2C & B2B2C</option>
              <option value="Ecuador">Pharma & Beauty</option>
              <option value="Mexico">Techno & Electro</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <select
              id="country-select"
              value={selectCountry}
              onChange={(e) => setSelectCountry(e.target.value)}
              className="block w-[400px] p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              <option disabled value="">
                Pais o Region
              </option>
              <option value="Todos">Todos</option>
              <option value="Peru">Peru</option>
              <option value="Argentina">Argentina</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Mexico">Mexico</option>
            </select>
            <button
              onClick={handleCountry}
              className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
              disabled={!selectCountry}
            >
              Filtrar
            </button>
          </div>
        </section>
        <div className="flex mx-auto gap-8 flex-wrap">
          {filterCountry.map((item) => (
            <div
              className={`flex border bg-white shadow-lg rounded-lg overflow-hidden p-1 ${
                show ? "animate-slide-in" : "opacity-0"
              }`}
              key={data.titulo}
            >
              <div className="flex flex-1 px-3 flex-col justify-between">
                <div className="hidden lg:flex flex-col gap-4 items-center p-2 pt-5">
                  <div className="h-[50px]">
                    <img src={item.titulo} alt="titulo" className="h-full" />
                  </div>
                  <div className="mx-auto px-5 font-sans text-start text-lg text-gray-500">
                    <span>{item.descripcion}</span>
                  </div>
                </div>
                <div className="lg:hidden">
                  <img src={item.titulo} alt="imagen-logo" />
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

                  <div className="flex p-1 gap-4">
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

              <div className="hidden lg:flex justify-evenly items-center flex-col">
                <div className="h-[300px] w-[450px] flex justify-center items-center">
                  <img src={item.imagenLogo} alt="logo" className="h-full" />
                </div>

                <a href={item.url} target="__blank">
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
