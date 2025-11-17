import Rolex from "../assets/watchPic/8.webp";
import Seiko from "../assets/watchPic/10.webp";
import Tudor from "../assets/watchPic/12.webp";
import Citizen from "../assets/watchPic/14.webp";

export default function BrandSection() {
  return (
    <section>
      <div className="w-full">
        <div className="flex gap-0 h-[500px] items-center justify-center w-full overflow-hidden">
          <div className="flex w-[50%] overflow-hidden">
            <img
              src={Rolex}
              alt="Watch pic"
              className="h-full  block object-cover object-center opacity-80 hover:opacity-50 transition-all duration-1000 cursor-pointer "
            />
          </div>
          <div className="flex w-[50%] px-5">
            <p className="block h-full text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores itaque temporibus, delectus perferendis rem qui! Quos
              itaque possimus tempore deserunt, exercitationem in ea quas quasi
              voluptate explicabo dolores architecto enim?
            </p>
          </div>
        </div>
        <div className="flex gap-0 h-[500px] items-center justify-center w-full overflow-hidden">
          <div className="flex w-[50%] px-5">
            <p className="block h-full text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores itaque temporibus, delectus perferendis rem qui! Quos
              itaque possimus tempore deserunt, exercitationem in ea quas quasi
              voluptate explicabo dolores architecto enim?
            </p>
          </div>
          <div className="flex w-[50%] overflow-hidden">
            <img
              src={Seiko}
              alt="Watch pic"
              className="h-full  block object-cover object-center opacity-60"
            />
          </div>
        </div>
        <div className="flex gap-0 h-[500px] items-center justify-center w-full overflow-hidden">
          <div className="flex w-[50%] overflow-hidden">
            <img
              src={Citizen}
              alt="Watch pic"
              className="h-full  block object-cover object-center opacity-60"
            />
          </div>
          <div className="flex w-[50%] px-5">
            <p className="block h-full text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores itaque temporibus, delectus perferendis rem qui! Quos
              itaque possimus tempore deserunt, exercitationem in ea quas quasi
              voluptate explicabo dolores architecto enim?
            </p>
          </div>
        </div>
        <div className="flex gap-0 h-[500px] items-center justify-center w-full overflow-hidden">
          <div className="flex w-[50%] px-5">
            <p className="block h-full text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores itaque temporibus, delectus perferendis rem qui! Quos
              itaque possimus tempore deserunt, exercitationem in ea quas quasi
              voluptate explicabo dolores architecto enim?
            </p>
          </div>
          <div className="flex w-[50%] overflow-hidden">
            <img
              src={Tudor}
              alt="Watch pic"
              className="h-full  block object-cover object-center opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
