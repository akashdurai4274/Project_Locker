import GitHub from "@mui/icons-material/GitHub";
const Webpage = () => {
  const projects = [
    {
      title: "My PortFolio v2",
      description: "Branding Myself",
      imageUrl: "Portfolio.png",
    },
    {
      title: "Portfolio v1",
      description: "Showcase myself",
      imageUrl: "Portv1.jpg",
    },
    {
      title: "EMS",
      description: "EMS with Advanced UI",
      imageUrl: "EMS.png",
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <header className="p-4 m-2 text-center text-black rounded-t-3xl bg-gradient-to-r from-pink-200 from-1% to-blue-100">
        <div className="relative flex justify-end p-2 bg-white ml-72 rounded-tr-2xl rounded-bl-xl bottom-4 left-4">
          <ul className="flex space-x-10">
            <li className="p-2 rounded-lg hover:text-bold hover:bg-black hover:text-white">
              <a href="#About">About</a>
            </li>
            <li className="p-2 rounded-lg hover:text-bold hover:bg-black hover:text-white">
              <a href="#projects"> Projects</a>
            </li>
            <li className="p-2 rounded-lg hover:text-bold hover:bg-black hover:text-white">
              <a href="#footer">Contact</a>
            </li>
            <li></li>
          </ul>
        </div>
        <div className="flex flex-col justify-between lg:flex-row" id="About">
          <img
            src="web.jpg"
            alt=""
            className="border-2 border-gray-200 rounded-xl w-78 h-60"
          />
          <div className="flex flex-col items-center justify-center mr-10">
            <h1 className="text-4xl font-bold">My Portfolio</h1>
            <p className="mt-2">Showcasing my projects and skills</p>
          </div>
        </div>
      </header>
      <section className="flex-grow p-8 m-2 mt-5 bg-gray-100 neo" id="project">
        <h2 className="mb-6 text-3xl font-bold text-center">Projects</h2>
        <div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2"
          id="projects"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white rounded-lg shadow-lg"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="object-cover w-full h-48 transition-transform transformduration-200 hover:scale-110"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="flex justify-center">
        <a target="new"
          href="https://github.com/akashdurai4274/Project_locker.git"
          className="flex justify-between py-3 mx-auto text-white bg-black rounded-lg px-[20px]"
        >
          <GitHub style={{ marginRight: "10px" }} />
          code in Git
        </a>
      </div>
      <footer className="py-8 m-2 mt-5 text-white bg-gray-500 rounded-t-none rounded-3xl">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-2xl font-bold">Connect with Me</h2>
          <div className="flex justify-center mb-4 space-x-6">
            <a
              href="https://github.com/akashdurai4274"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors duration-300 hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.62 7.62 0 012.01-.27c.68 0 1.36.09 2.01.27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.003 8.003 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/akashdurai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors duration-300 hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.238-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11.75 20.5h-2.5v-10h2.5v10zm-1.25-11.268c-.828 0-1.5-.682-1.5-1.52 0-.837.672-1.518 1.5-1.518s1.5.681 1.5 1.518c0 .838-.672 1.52-1.5 1.52zm14.25 11.268h-2.5v-5.6c0-1.331-.482-2.243-1.682-2.243-.918 0-1.463.617-1.705 1.213-.088.215-.111.516-.111.818v5.812h-2.5s.033-9.428 0-10.5h2.5v1.488c.331-.51.921-1.24 2.238-1.24 1.635 0 2.859 1.084 2.859 3.417v6.835z" />
              </svg>
            </a>
            <a
              href="mailto:akashdurai4274@gmail.com"
              className="text-gray-400 transition-colors duration-300 hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 12.713l11.916-7.282c-.011-.007-9.935-.624-11.916 1.303-1.982-1.927-11.905-1.31-11.916-1.303l11.916 7.282zm11.953-5.384c-.011.007-10.882 6.659-11.953 7.418-1.073-.759-11.942-7.411-11.953-7.418v10.671c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-10.671z" />
              </svg>
            </a>
          </div>
          <p>&copy; 2023 Akash Durai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Webpage;
