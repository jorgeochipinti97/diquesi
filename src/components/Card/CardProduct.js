"use client";
import React, { useEffect, useState } from "react";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

export const CardProduct = ({ product }) => {
  const { push } = useRouter();
  const [size, setSize] = useState("");
  const talles = ["s", "m", "l", "xl"];

  return (
    <div className="flex justify-center">
      {product && (
        <Card className="w-10/12 mt-5 bg-[#BDE0FE] border-none">
          <CardHeader className="">
            <div className="flex justify-center">
              <img
                src={product.image}
                className="w-12/12 h-[400px] rounded-xl"
              />
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle asChild className='flex justify-around'>
              <span className=" font-geist tracking-tighter">
                {" "}
                {product.title}
              </span>{" "}
              <span className=" font-mono font-semibold text-md">

              ${product.price}
              </span>
            </CardTitle>

            <section className="mt-5">
              <AlertDialog>
                <AlertDialogTrigger asChild className="">
                  <Button variant="secondary">Ver descripción</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>{product.title}</AlertDialogTitle>
                    <AlertDialogDescription>
                      {product.description}
                      <section>
                        <p className="font-geist text-gray-700 mt-5">
                          Elegir talle
                        </p>
                        <div className="flex justify-start mt-2 flex-wrap">
                          {talles.map((e, index) => (
                            <Button
                              key={index}
                              onClick={() => setSize(e)}
                              variant="icon"
                              className={`${
                                e == size
                                  ? "bg-black text-white"
                                  : "bg-white text-black"
                              } border border-black mx-1`}
                            >
                              {e.toUpperCase()}
                            </Button>
                          ))}
                        </div>
                      </section>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Salir</AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </section>
            <section>
              <p className="font-geist text-gray-700 mt-5">Elegir talle</p>
              <div className="flex justify-start mt-2 flex-wrap">
                {talles.length > 0 &&
                  talles.map((e, index) => (
                    <Button
                      key={index}
                      onClick={() => setSize(e)}
                      variant="icon"
                      className={`${
                        e == size
                          ? "bg-black text-white"
                          : "bg-white text-black"
                      }  m-1 border-black`}
                    >
                      {e.toUpperCase()}
                    </Button>
                  ))}
              </div>
            </section>
          </CardContent>

          <CardFooter className="flex flex-col">
            <Button
              className=" w-full my-1"
              variant="outline"
              disabled={!size}
              onClick={() =>
                agregarProducto({
                  title: product.title,
                  price: product.price,
                  size: size,
                  personalization: `${selectedPlayer}`,
                  images: product.images,
                })
              }
            >
              Agregar al carrito
            </Button>

            <AlertDialog>
              <AlertDialogTrigger asChild className=" rounded-xl p-2 ">
                <Button
                  disabled={!size}
                  className="w-full my-1 bg-green-300 text-black hover:bg-green-500"
                >
                  Comprar ahora
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>{product.title}</AlertDialogTitle>
                  <AlertDialogDescription></AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Volver</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};
