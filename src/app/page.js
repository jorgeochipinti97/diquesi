'use client'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRouter } from "next/navigation";
export default function Home() {
  const { push } = useRouter();
  const servicios = [
    {
      nombre: "Consultoría Personalizada",
      descripcion:
        "Nos esforzamos por entender tus objetivos para ayudarte a alcanzarlos a través de tu evento.",
    },
    {
      nombre: "Planificación y Diseño Creativo",
      descripcion:
        "Te ayudamos a diseñar un evento que refleje la identidad de tu marca y sea memorable.",
    },
    {
      nombre: "Gestión Logística Integral",
      descripcion:
        "Desde la selección del lugar hasta la coordinación de proveedores, nos ocupamos de toda la logística.",
    },
    {
      nombre: "Producción de Alto Impacto",
      descripcion:
        "Implementamos las últimas tendencias en diseño de eventos para producir experiencias que cautiven a los asistentes.",
    },
    {
      nombre: "Estrategias de Compromiso",
      descripcion:
        "Desarrollamos actividades y dinámicas diseñadas para fomentar la interacción de los asistentes.",
    },
    {
      nombre: "Compromiso con la Excelencia",
      descripcion:
        "Nuestro foco en la calidad y el detalle garantiza que cada aspecto de tu evento sea impecable y memorable.",
    },
  ];

  return (
    <main className="">
      <div
        style={{
          backgroundImage: `linear-gradient(129deg, rgba(0,0,0,1) 0%, rgba(0,0,0,.2) 34%),url(./wedding.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-screen w-screen flex flex-col justify-between"
      >
        <div className="flex justify-center items-center flex-col">
          <p className="font-geist text-7xl font-bold text-white tracking-tighter text-center pt-20">
            Díquesí
          </p>
          <p className="font-geist text-white font-bold text-center mt-2">
            Flowers & event planner
          </p>
        </div>
        <div className="flex justify-center">
          <Card className="md:w-fit  w-10/12 my-5 bg-white/90">
            <CardHeader>
              <p className="font-geist font-bold text-2xl  text-center tracking-tighter">
                Convierte en realidad la boda de tus sueños
              </p>
            </CardHeader>
            <CardContent>
              <div className="md:mt-5 flex justify-center">
                <Button onClick={() => push("https://wa.link/31dnt6")}>
                  Comienza hoy
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(129deg, rgba(0,0,0,1) 0%, rgba(0,0,0,.6) 34%),url(./bg-2.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="min-h-screen w-screen"
      >
        {/* <div className="flex justify-center pt-5">
          <svg
            width={100}
            xmlns="http://www.w3.org/2000/svg"
            fill="#000"
            version="1.1"
            viewBox="0 0 453.53 453.53"
            xmlSpace="preserve"
          >
            <path d="M395.828 158.817a9.999 9.999 0 00-9.092-5.837h-2.442c7.352-14.966 3.163-33.232-10.333-43.438l-.068-.051c-4.33-3.296-6.554-8.686-5.801-14.128 2.44-17.635-8.714-34.306-25.965-38.783a15.111 15.111 0 01-10.823-10.836c-4.472-17.232-21.145-28.387-38.828-25.939-5.407.749-10.814-1.492-14.051-5.77a4.11 4.11 0 00-.079-.105C267.6-.281 247.918-4.184 232.562 4.849a15.104 15.104 0 01-15.307 0c-15.357-9.034-35.039-5.131-45.807 9.107-3.294 4.354-8.7 6.599-14.023 5.859l-.134-.02c-17.638-2.439-34.306 8.715-38.783 25.965a15.105 15.105 0 01-10.76 10.803l-.077.02c-17.232 4.473-28.386 21.145-25.939 38.828a15.121 15.121 0 01-5.875 14.129c-13.523 10.227-17.702 28.546-10.289 43.527a9.99 9.99 0 00-7.867 5.749 10 10 0 001.523 10.697l137.292 159.034v94.732c0 16.679 13.57 30.249 30.249 30.249s30.249-13.57 30.249-30.249v-94.732l137.291-159.034a9.998 9.998 0 001.523-10.696zM87.95 125.471c10.125-7.657 15.333-20.226 13.587-32.85-1.047-7.566 3.724-14.719 11.104-16.665l.074-.019a35.125 35.125 0 0025.156-25.171c1.924-7.412 9.09-12.207 16.594-11.172l.135.02c12.57 1.735 25.143-3.47 32.822-13.623a15.092 15.092 0 0119.692-3.905 35.114 35.114 0 0035.589 0c6.606-3.886 15.071-2.206 19.635 3.828l.079.105c7.658 10.125 20.229 15.332 32.85 13.587 7.588-1.052 14.755 3.748 16.684 11.178a35.125 35.125 0 0025.17 25.157c7.412 1.924 12.209 9.094 11.153 16.729a35.127 35.127 0 0013.593 32.8l.068.051a15.094 15.094 0 013.866 19.663l-4.586 7.795h-71.83a118.104 118.104 0 008.511-43.997c0-5.523-4.477-10-10-10-26.161 0-50.928 8.392-71.617 24.263a117.464 117.464 0 00-21.962 21.954 98.226 98.226 0 00-16.68-16.243c-17.3-13.271-38.001-20.285-59.866-20.285-5.523 0-10 4.477-10 10a98.747 98.747 0 006.157 34.309H88.602l-4.585-7.795c-3.886-6.604-2.207-15.07 3.933-19.714zm47.718 27.509a78.4 78.4 0 01-7.165-23.59c13.433 1.819 26.051 7.066 36.97 15.441a78.716 78.716 0 019.08 8.148h-38.885zm131.802 0h-53.701a97.846 97.846 0 0114.676-13.859c14.361-11.017 31.088-17.69 48.883-19.581a97.76 97.76 0 01-9.858 33.44zm-178.832 20H299.25l-65.729 141.849h-22.427L88.638 172.98zm127.878 199.825h20.498v17.976h-20.498v-17.976zm0-20v-17.977h20.498v17.977h-20.498zm10.249 80.725c-5.651 0-10.249-4.598-10.249-10.249v-12.499h20.498v12.499c0 5.651-4.598 10.249-10.249 10.249zm44.009-151.527l50.518-109.023h43.6l-94.118 109.023z"></path>
          </svg>
        </div> */}
        <p className="font-geist  text-center pt-20 text-3xl mx-5 md:text-5xl font-bold tracking-tighter text-amber-50">
          Haciendo Realidad la Boda de tus Sueños
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="mt-10 flex justify-center">
            <Card className="w-10/12 bg-white/70">
              <CardHeader>
                <CardTitle className="font-geist tracking-tighter">
                  Planificación Integral de Bodas
                </CardTitle>
                <CardDescription className="text-black">
                  Cada detalle de tu boda es cuidadosamente seleccionado.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img src="/planner.jpg" className="rounded-xl" />
              </CardContent>
              <CardFooter className="flex justify-between"></CardFooter>
            </Card>
          </div>
          <div className="mt-10 flex justify-center">
            <Card className="w-10/12 bg-white/70">
              <CardHeader>
                <CardTitle className="font-geist tracking-tighter">
                  Coordinación del Día del Evento
                </CardTitle>
                <CardDescription className="text-black">
                  Nuestro equipo estará presente el día de tu boda para asegurar
                  que todo salga según lo planeado.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img src="/organizacion.jpg" className="rounded-xl" />
              </CardContent>
              <CardFooter className="flex justify-between"></CardFooter>
            </Card>
          </div>
          <div className="mt-10 flex justify-center">
            <Card className="w-10/12 bg-white/70">
              <CardHeader>
                <CardTitle className="font-geist tracking-tighter">
                  Organización Personalizada
                </CardTitle>
                <CardDescription className="text-black">
                  Para asegurarnos de que cada detalle refleje tus deseos y
                  personalidad, organizando momentos memorables en tu
                  celebración.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img src="/fiesta.jpg" className="rounded-xl" />
              </CardContent>
              <CardFooter className="flex justify-between"></CardFooter>
            </Card>
          </div>
        </div>
        <div className="flex justify-center py-5 md:mt-20">
        <Button onClick={() => push("https://wa.link/31dnt6")} size='lg'>Emepezar hoy</Button>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(129deg, rgba(0,0,0,1) 0%, rgba(0,0,0,.7) 34%),url(./ramo.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-screen w-screen  flex items-center"
      >
        <div className="w-screen">
          <p className="font-geist text-3xl md:text-7xl text-white font-bold tracking-tighter uppercase text-center">
            ¿Cómo trabajamos?
          </p>
          <div className="w-screen flex justify-center  ">
            <div className=" bg-white/70 rounded-xl w-10/12 md:w-6/12 mt-10 ">
              <Accordion
                type="single"
                collapsible
                className=" w-12/12   p-5 rounded-xl "
              >
                {servicios.map((e, index) => (
                  <AccordionItem key={index} value={`${index}`}>
                    <AccordionTrigger>{e.nombre}</AccordionTrigger>
                    <AccordionContent className="flex items-start">
                      {e.descripcion}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          <div className="flex justify-center mt-10">
          <Button onClick={() => push("https://wa.link/31dnt6")}>Quiero mi boda</Button>
          </div>
        </div>
      </div>
      <div className="h-fit pb-10 w-screen bg-black">
        <div>
          <p className="font-geist tracking-tighter text-center text-4xl md:text-7xl pt-10 md:pt-20 font-bold text-white">
            Nuestro trabajo
          </p>
          <div className="w-screen flex justify-center">
            <Carousel className="w-6/12 bg-black  mt-5">
              <CarouselContent>
                <CarouselItem className="flex justify-center">
                  <div>
                    <img
                      src="/feliz.jpg"
                      alt=""
                      className="max-h-[50vh] rounded-xl"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="flex justify-center">
                  <div>
                    <img
                      src="/evento.jpg"
                      alt=""
                      className="max-h-[50vh] rounded-xl"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="flex justify-center">
                  <div>
                    <img
                      src="/bienve.jpg"
                      alt=""
                      className="max-h-[50vh] rounded-xl"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="flex justify-center">
                  <div>
                    <img
                      src="/recep.jpg"
                      alt=""
                      className="max-h-[50vh] rounded-xl"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="flex justify-center">
                  <div>
                    <img
                      src="/abrazo.jpg"
                      alt=""
                      className="max-h-[50vh] rounded-xl"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div className="flex mt-5 justify-center w-screen">
        <Button onClick={() => push("https://wa.link/31dnt6")}>Comenzar hoy</Button>
        </div>
      </div>
    </main>
  );
}
