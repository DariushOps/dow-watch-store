import { useLoaderData } from "react-router-dom";

export default function ProductSection() {
  const data = useLoaderData();

  return (
    <section className="py-40">
      <div className="flex flex-wrap w-[90%] mx-auto gap-6">
        {data.map((item) => (
          <article
            key={item.id}
            className="w-full sm:w-1/2 md:w-1/4 mx-auto h-50 bg-emerald-700 flex items-center justify-center"
          >
            <h2>{item.model}</h2>
          </article>
        ))}
      </div>
    </section>
  );
}
