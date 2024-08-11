import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-scree flex items-center justify-center p-4">
      <div className="w-full max-w-6xl rounded-lg shadow-lg flex animate-fade-in">
        <div className="w-1/2 p-8">
          <h1 className="text-4xl font-extrabold mb-4 transition-transform transform hover:scale-105">
            Welcome to T-Square
          </h1>
          <p className="text-xl font-semibold mb-4 transition-transform transform hover:scale-105">
            T-Square is your ultimate solution for efficient time and task management.
          </p>
          <p className="text-lg mb-4 transition-transform transform hover:scale-105">
            Stay organized and on top of your tasks with our intuitive and user-friendly platform. Whether you are managing personal projects or collaborating with a team, TaskMaster provides the tools you need to succeed.
          </p>
          <p className="text-lg mb-4 transition-transform transform hover:scale-105">
            Our features include task scheduling, deadline tracking, progress monitoring, and much more. Make the most of your time and boost your productivity with TaskMaster.
          </p>
          <p className="text-lg mb-4 transition-transform transform hover:scale-105">
            Join us today and take the first step towards a more organized and efficient life. Experience the power of effective time and task management with TaskMaster.
          </p>
        </div>
        <div className="w-1/2 p-8 flex items-center justify-center">
          <div className="border-4 border-primary p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgHHMqTRRXYXvcgus9OXjWXqfuobx6GKJ2hA&s"
              alt="Placeholder"
              className="w-full h-auto rounded-md transition-opacity duration-500 hover:opacity-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
