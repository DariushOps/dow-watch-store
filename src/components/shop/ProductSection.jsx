import { useLoaderData } from "react-router-dom";
import CustomButton from "../../utilities/CustomButton";

export default function ProductSection() {
  const data = useLoaderData();

  return (
    <section className="py-40">
      <div className="flex flex-wrap w-[80%] gap-0 m-auto">
        {data.map((item) => (
          <article
            key={item.id}
            className="w-full sm:w-[40%] md:w-[32%] mx-auto h-215 flex bg-white flex-col items-center justify-center rounded-sm mb-8 relative"
          >
            <div className="relative w-full h-full overflow-hidden group ">
              <img
                src={item.image}
                alt={item.model}
                className="w-full h-full scale-75 object-cover rounded-md group-hover:scale-77 transition-transform duration-400 backface-hidden"
              />
              <div className="absolute inset-0 opacity-10 bg-black "></div>
            </div>
            <div className="flex w-full h-40 pt-4">
              <div className=" flex text-stone-950 w-[60%] flex-col items-start">
                <p className="h-1/2 font-lato font-bold text-[1.6rem] flex items-center px-6">
                  {item.model}
                </p>
                <p className="h-1/2 font-montserrat font-bold text-[1.6rem] flex items-start px-6">
                  {item.price}
                </p>
              </div>
              <div className="flex w-[40%] justify-center items-center">
                <button className="w-40 h-15 bg-red-700">Add to card</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
