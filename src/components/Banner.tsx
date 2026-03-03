import { Button } from "./ui/button";
import camera from "/product/camera.png";

function Banner() {
  return (
    <section className="max-w-7xl my-25 relative overflow-hidden rounded-3xl bg-linear-to-r from-indigo-600 to-purple-600 p-8 md:p-16 text-white hidden lg:block mx-auto ">
      <div className="grid md:grid-cols-2 items-center gap-10">
        <div className="space-y-8">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Flash Sale 11.11
          </h1>
          <p className="text-lg md:text-3xl text-white/90">
            Diskon hingga 70% + Gratis Ongkir ke seluruh Indonesia. Hanya hari
            ini!
          </p>
          <Button
            size={"lg"}
            className=" bg-white hover:bg-white text-xl text-indigo-600 font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Belanja Sekarang
          </Button>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={camera}
            alt="Promo"
            className="w-72 md:w-96 object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
