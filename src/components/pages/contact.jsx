import Navbar from '@/components/parts/Navbar'

const Contact = () => {
  return (
    <main className="bg-bgColor relative h-screen font-poppins">
      <Navbar />
      <div className="flex-1 ml-auto mr-auto p-5 flex flex-col justify-center items-center max-w-screen-lg mt-24">
        <div className="title-page flex justify-center mb-8">
          <h1 className="text-4xl font-semibold text-tertiary xl:font-bold">
            Contact Me
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-start lg:space-x-10">
          <div className="mt-8 lg:mt-0">
            <img
              src="https://avatars.githubusercontent.com/u/158032937?v=4"
              alt="Profile Photo"
              className="rounded-full w-40 h-40 object-cover object-center"
            />
          </div>
          <div className="mt-8 px-10 text-center lg:text-left">
            <p className="text-lg mt-4">
              Hi there! Feel free to reach out to me via:
            </p>
            <div className="flex justify-center lg:justify-start mt-4 lg:mt-6 space-x-4">
              <a
                href="https://www.linkedin.com/in/rickyyohanesambarita/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/riyoam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline"
              >
                Instagram
              </a>
              <a
                href="https://github.com/ricyoamb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
