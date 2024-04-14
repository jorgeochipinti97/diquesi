import { CardProduct } from "@/components/Card/CardProduct";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-[#FFC8DD] ">
      <div className="flex justify-center">
        <img src="/logo.png" className="w-12/12 md:w-7/12" />
      </div>
      <div className="flex justify-center mt-5">
<img src="/floreria1.jpg" className="rounded-xl shadow-sm shadow-black"/>
        {/* <div className="w-11/12 md:w-10/12 h-[60vh] md:h-[80vh] border-2 bg-black rounded-xl"></div> */}
      </div>
      <section className="grid grid-cols-1 md:grid-cols-3">
        <CardProduct
          product={{
            title: "Ramo 1",
            image: "/ramo1.jpeg",
            price: 100,
            description: "es una descripcion del ramo",
          }}
        />
        <CardProduct
          product={{
            title: "Ramo 2",
            image: "/ramo2.jpeg",
            price: 100,
            description: "es una descripcion del ramo",
          }}
        />
        <CardProduct
          product={{
            title: "Ramo 3",
            image: "/ramo3.jpeg",
            price: 100,
            description: "es una descripcion del ramo",
          }}
        />
      </section>

    </div>

  );
};

export default Page;
