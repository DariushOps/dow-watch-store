export default function SidebarCart({ onClick }) {
  return (
    <section>
      <div className="fixed top-0 right-0 bottom-0 bg-slate-100  w-[17.5%] z-100">
        <div className="absolute top-10 right-92 text-black ">
          <button
            onClick={onClick}
            className="relative w-8 h-2 flex items-center justify-center text-4xl cursor-pointer group"
          >
            <span className="absolute w-8 h-1 bg-black  group-hover:opacity-0 mb-4 transition-all duration-100 origin-center"></span>
            <span className="absolute w-8 h-1 bg-black  group-hover:rotate-45 transition-all duration-100  origin-center"></span>
            <span className="absolute w-8 h-1 bg-black  group-hover:-rotate-45 transition-all duration-100  origin-center"></span>
            <span className="absolute w-8 h-1 bg-black  group-hover:opacity-0  mt-4 transition-all duration-100  origin-center"></span>
          </button>
        </div>
      </div>
      <div className="fixed top-0 left-0 bottom-0 w-[82.5%] z-100 bg-black opacity-50"></div>
    </section>
  );
}
