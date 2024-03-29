import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [resultado, setResultado] = useState("");

  function soma() {
    const horaUm = document.getElementById("h1").value;
    const horaDois = document.getElementById("h2").value;
    let somaHoras = Number(horaUm) + Number(horaDois);

    const minutoUm = document.getElementById("m1").value;
    const minutoDois = document.getElementById("m2").value;
    let somaMinutos = Number(minutoUm) + Number(minutoDois);

    while (somaMinutos >= 60) {
      somaMinutos = somaMinutos - 60;
      somaHoras = somaHoras + 1;
    }

    let resultado = somaHoras + "h e " + somaMinutos + "m";

    setResultado(resultado);

    return resultado;
  }

  function subtrai() {
    let horaUm = document.getElementById("h1").value;
    let horaDois = document.getElementById("h2").value;
    let minutoUm = document.getElementById("m1").value;
    let minutoDois = document.getElementById("m2").value;

    horaUm = Number(horaUm);
    minutoUm = Number(minutoUm);
    horaDois = Number(horaDois);
    minutoDois = Number(minutoDois);

    while (horaUm > 0) {
      minutoUm += 60;
      horaUm--;
    }

    while (horaDois > 0) {
      horaDois--;
      minutoDois += 60;
    }

    let rh = 0;
    let rm = minutoUm - minutoDois;

    if (minutoDois > minutoUm) {
      rm = minutoDois - minutoUm;
    }

    while (rm > 59) {
      rh++;
      rm -= 60;
    }

    let resultado = rh + "h e " + rm + "m";
    setResultado(resultado);

    return resultado;
  }

  return (
    <>
      <Head>
        <title>HoursCalculator</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Permissions-Policy" content="interest-cohort=()"/>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main className="relative flex h-screen">
        <div className="flex z-10 m-auto h-full">
          <div className="bg-[#2D2D2D] min-w-fit max-w-lg rounded-3xl my-32 lg:mx-0 mx-8">
            <div className="bg-[#2D2D2D] mb-10 shadow-3xl rounded-3xl h-28">
              <p className="text-stone-400 pl-4 pt-4 font-medium text-sm">
                CalculaHoras
              </p>
              <p className="text-white flex justify-end h-full pt-8 pr-10 font-medium text-lg">
                {resultado}
              </p>
            </div>
            <div className="lg:mt-20">
              <div className=" font-medium  text-base text-center">
                <div className="flex gap-2 mb-2">
                  <div>
                    <p className="text-purple-500">Hora</p>
                    <input
                      id="h1"
                      className="border-b-[1px] border-gray-400 outline-none w-1/4 bg-transparent text-white placeholder:text-white text-center"
                      placeholder="00"
                      type="number"
                    ></input>
                  </div>
                  <div>
                    <p className="text-purple-500">Minuto</p>
                    <input
                      id="m1"
                      className="border-b-[1px] border-gray-400 outline-none w-1/4 bg-transparent text-white placeholder:text-white text-center"
                      placeholder="00"
                      type="number"
                    ></input>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <div>
                    <p className="text-purple-500">Hora</p>
                    <input
                      id="h2"
                      className="border-b-[1px] border-gray-400 outline-none w-1/4 bg-transparent text-white placeholder:text-white text-center"
                      placeholder="00"
                      type="number"
                    ></input>
                  </div>
                  <div>
                    <p className="text-purple-500">Minuto</p>
                    <input
                      id="m2"
                      className="border-b-[1px] border-gray-400 outline-none w-1/4 bg-transparent text-white placeholder:text-white text-center"
                      placeholder="00"
                      type="number"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="px-14 gap-2 flex justify-center mr-0 mt-10">
                <button
                  onClick={soma}
                  className=" ml-0 mx-auto bg-purple-500 rounded-md px-6 py-1 text-white text-sm"
                >
                  Somar
                </button>
                <button
                  onClick={subtrai}
                  className=" mr-0 mx-auto bg-purple-500 rounded-md px-5 py-1 text-white text-sm"
                >
                  Subtrair
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
