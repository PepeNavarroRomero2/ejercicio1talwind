import React from "react";

const classes = [
  {
    category: "Colores",
    examples: [
      { name: "bg-blue-500", description: "Fondo azul", className: "bg-blue-500 text-white p-4" },
      { name: "text-red-500", description: "Texto rojo", className: "text-red-500" },
    ],
  },
  {
    category: "Alineación",
    examples: [
      { name: "flex", description: "Contenedor flexbox", className: "flex space-x-4 bg-gray-100 p-4" },
      { name: "justify-center", description: "Centrado horizontal", className: "flex justify-center bg-gray-200 p-4" },
      { name: "items-center", description: "Centrado vertical", className: "flex items-center bg-gray-300 h-16 p-4" },
    ],
  },
  {
    category: "Espaciado",
    examples: [
      { name: "m-4", description: "Margen de 1rem", className: "m-4 bg-green-200 p-4" },
      { name: "p-4", description: "Padding de 1rem", className: "p-4 bg-yellow-200" },
    ],
  },
  {
    category: "Tipografía",
    examples: [
      { name: "text-xl", description: "Tamaño de texto grande", className: "text-xl" },
      { name: "font-bold", description: "Texto en negrita", className: "font-bold" },
    ],
  },
  {
    category: "Bordes",
    examples: [
      { name: "rounded-lg", description: "Bordes redondeados", className: "rounded-lg bg-purple-200 p-4" },
    ],
  },
  {
    category: "Sombra",
    examples: [
      { name: "shadow-lg", description: "Sombra grande", className: "shadow-lg bg-gray-50 p-4" },
    ],
  },
];

const Glosario = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Mini-Glosario Visual de Tailwind CSS</h1>
      {classes.map((category, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.examples.map((item, idx) => (
              <div key={idx} className="border p-4 rounded-lg">
                <p className="font-mono bg-gray-100 px-2 py-1 rounded text-sm">{item.name}</p>
                <p className="text-gray-700">{item.description}</p>
                <div className={`mt-2 p-2 ${item.className}`}>Ejemplo</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Glosario;
