import { Link } from "react-router-dom";

function HomePage() {
  return (
  <section className="bg-red-500 flex justify-center items-center">
    <header className="bg-zinc-800 p-10">
      <h1 className="text-5xl py-2 font-bold">TaskMaster</h1>
      <p className="text-md text-slate-400">
        TaskMaster es mucho más que un simple gestor de tareas. Es la herramienta esencial que tu empresa necesita para optimizar la productividad y el rendimiento de tu equipo. Con una interfaz intuitiva y características poderosas, TaskMaster simplifica la gestión de proyectos y tareas, permitiéndote concentrarte en lo que realmente importa: alcanzar tus objetivos empresariales.
      </p>

      <Link
        className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
        to="/register"
      >
        Empieza ahora...
      </Link>
    </header>
  </section>
  );
}

export default HomePage;
