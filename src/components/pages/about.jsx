import Navbar from '@/components/parts/Navbar';

const About = () => {
  return (
    <main className="bg-bgColor relative h-screen font-poppins">
      <Navbar />
        <div className="flex-1 ml-64 p-5">
          <div className="title-page flex justify-center pt-24">
            <h1 className="text-4xl font-semibold text-tertiary xl:font-bold">
              About Our To-Do List App
            </h1>
          </div>
          <div className="mt-10 px-10">
            <p className="text-lg text-gray-700">
              Welcome to our To-Do List App! Our application is designed to help you stay organized and manage your tasks efficiently. 
            </p>
            <p className="text-lg text-gray-700 mt-4">
              With our app, you can create multiple to-do lists, add tasks with different priorities, set due dates, and track the status of each task. 
              Our goal is to make task management simple and effective for everyone.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              We are constantly working to improve the app and add new features based on your feedback. 
              Thank you for choosing our To-Do List App to help you stay organized!
            </p>
          </div>
      </div>
    </main>
  );
};

export default About;
