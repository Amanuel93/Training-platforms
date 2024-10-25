import React from 'react';
import { useParams } from 'react-router-dom';


const mockTrainings= [
  { title: "Basic computer skills", startDate: "2024-01-10", endDate: "2024-01-20", status: "completed" },
  { title: "People managment", startDate: "2024-02-05", endDate: "2024-02-15", status: "in-progress" },
];

const mockTrainees = [
  { id: 1, name: 'John Doe', username: 'johndoe', email: 'johndoe@example.com', role: 'Trainee', isVerified: true },
  { id: 2, name: 'Jane Smith', username: 'janesmith', email: 'janesmith@example.com', role: 'Trainee', isVerified: false },
  { id: 3, name: 'Emily Johnson', username: 'emilyj', email: 'emilyj@example.com', role: 'Trainee', isVerified: true },
];

const trainee = { id: 1, name: 'John Doe', username: 'johndoe', email: 'johndoe@example.com', role: 'Trainee', isVerified: true }

const TraineeDetail = () => {
  const { id } = useParams();  // get the trainee ID from the URL
//   const trainee = mockTrainees.find((t) => t.id === parseInt(id));

//   if (!trainee) {
//     return <div>Trainee not found</div>;
//   }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <div className="flex items-center mb-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-full w-24 h-24 object-cover mr-4"
          />
          <div>
            <h2 className="text-2xl font-semibold">{trainee.name}</h2>
            <p className="text-gray-600">Username: {trainee.username}</p>
            <p className="text-gray-600">Email: {trainee.email}</p>
            <p className="text-gray-600">Role: {trainee.role}</p>
            <p className={`mt-2 ${trainee.isVerified ? "text-green-500" : "text-red-500"}`}>
              {trainee.isVerified ? "Verified" : "Not Verified"}
            </p>
          </div>
        </div>
      </div>

      {/* Trainings */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Trainings Taken</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockTrainings.map((training, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold mb-2">{training.title}</h4>
              <p className="text-gray-600">Start Date: {training.startDate}</p>
              <p className="text-gray-600">End Date: {training.endDate}</p>
              <p className={`mt-2 font-bold ${training.status === "completed" ? "text-green-500" : "text-yellow-500"}`}>
                {training.status.charAt(0).toUpperCase() + training.status.slice(1)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TraineeDetail;
