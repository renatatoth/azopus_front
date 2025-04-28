import { useLoaderData } from "react-router-dom";

export default function HomePage() {
  const data = useLoaderData();

  return (
    <section className="flex align-center px-20 py-20">
      <div className="grid grid-cols-4 gap-5">
        {data.map((el) => (
          <div key={el.id} className="mb-5">
            <div className="w-100 h-100 object-cover mb-4">
              <img src="https://picsum.photos/300" alt="Fotó" />
            </div>
            <p className="font-bold mb-3 text-2xl font-serif">
              {el.keletkezesKezdoIdopontjaInt}
            </p>
            <p>{el.nev}</p>
            <p className="mb-3">
              <small>({el.alkotasAzonosito})</small>
            </p>
            <p className=" text-sm">{el.tipus}</p>
            <p className="uppercase">{el.megjelenitendoNev}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export async function loader() {
  const response = await fetch(
    "https://gist.githubusercontent.com/calvez/56bec47cb9c97d9999574adc65ef5368/raw/51f01cb2a160748d87dd40eae7d3785272a87355/all.json",
  );
  const resData = await response.json();

  return resData;
}
