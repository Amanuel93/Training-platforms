import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const trainings = [
    { id: "1", title: "Organization culture", description: "A highly experienced HR manager with over 10 years in the industry.", department: "HR", position: "Manager", duration: "2:30" },
    { id: "2", title: "People Management", description: "Skilled IT developer specializing in full-stack development.", department: "IT", position: "Developer", duration: "2:30" },
    { id: "3", title: "General Auditing Basics", description: "Financial analyst with a deep understanding of data analytics and reporting.", department: "Finance", position: "Analyst", duration: "2:30" },
    { id: "4", title: "Crisis management", description: "Dynamic sales executive focused on driving revenue and customer relationships.", department: "Sales", position: "Executive", duration: "2:30" },
    { id: "5", title: "Basic postal knowledge", description: "Marketing coordinator with a talent for creative strategy and brand development.", department: "Marketing", position: "Coordinator", duration: "2:30" },
    { id: "6", title: "Basic computer skill", description: "A highly experienced HR manager with over 10 years in the industry.", department: "HR", position: "Manager", duration: "2:30" },
    { id: "7", title: "Change management", description: "Skilled IT developer specializing in full-stack development.", department: "IT", position: "Developer", duration: "2:30" },
    { id: "8", title: "Leadership skill", description: "Financial analyst with a deep understanding of data analytics and reporting.", department: "Finance", position: "Analyst", duration: "2:30" },
    { id: "9", title: "Conflict management", description: "Dynamic sales executive focused on driving revenue and customer relationships.", department: "Sales", position: "Executive", duration: "2:30" }
  ]

// Get unique car names from carList
const TrainingNames = [...new Set(trainings.map(training => training.department))];

const AvailableTrainingsList = () => {
  const [filteredTraining, setFilteredTraining] = useState(trainings);
  const [activeFilter, setActiveFilter] = useState("");

  // Filter cars based on selected name
  const filterByName = (department) => {
    if (department === "") {
      setFilteredTraining(trainings);
    } else {
      const filtered = trainings.filter((training) => training.department === department);
      setFilteredTraining(filtered);
    }
    setActiveFilter(department); // Set active filter
  };

  return (
    <div className="pt-8 flex flex-col">
      <div className="container h-screen">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-semibold font-serif mb-3">
          Currently Available Trainings
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            className={`px-4 py-2 rounded-lg border ${activeFilter === "" ? "bg-indigo-800 text-white dark:text-white" : "bg-gray-200 dark:text-black"}`}
            onClick={() => filterByName("")}
          >
            All
          </button>
          {TrainingNames.map((department) => (
            <button
              key={department}
              className={`px-4 py-2 rounded-lg border ${activeFilter === department ? "bg-indigo-800 text-white" : "bg-gray-200 dark:text-black"}`}
              onClick={() => filterByName(department)}
            >
              {department}
            </button>
          ))}
        </div>

        {/* Training Listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-16">
            {filteredTraining.map((item) => (
              <div key={item.id} className="bg-white shadow-2xl rounded-lg px-4 pt-6 py-2 max-w-sm transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="text-lg font-bold mb-2 text-indigo-700">{item.title}</div>
                <p className="text-gray-600 text-justify">{item.description}</p>
              <div className="mt-3">
                <span className="block text-sm font-semibold text-gray-500">Department:<span className="text-gray-700"> {item.department}</span></span>
              </div>
              <div className="mt-3">
                <span className="block text-sm font-semibold text-gray-500">Position:  <span className="text-gray-700"> {item.position}</span></span>
              </div>
              <div className="mt-3">
                <span className="block text-sm font-semibold text-gray-500">Duration:  <span className="text-gray-700"> {item.duration}</span></span>
              </div>
              <div className="flex justify-between mt-2">
                <div className="flex space-x-4 px-2">
                 <button>Enroll</button>
               </div>
             </div>
            </div> 
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableTrainingsList ;