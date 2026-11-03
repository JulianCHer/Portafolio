import React from "react";

// Etiquetas de tecnologías: siempre visibles y sin movimiento al pasar el mouse (solo cambia el color del borde).
export const TechStack = ({ items }: { items: { title: string; icon: React.ReactNode }[] }) => {
  return (
    <ul className="flex flex-wrap justify-center xl:justify-start gap-3 max-w-xl">
      {items.map((item) => (
        <li
          key={item.title}
          className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-gray-200 transition-colors duration-200 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white"
        >
          <span className="flex items-center justify-center [&>svg]:h-5! [&>svg]:w-5!">{item.icon}</span>
          {item.title}
        </li>
      ))}
    </ul>
  );
};
