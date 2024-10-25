// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { nextStep, prevStep } from '../../redux/stepperSlice'; 
// import { useNavigate } from 'react-router-dom';

// const Form = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     passcode: '',
//     department: '',
//     position: '',
//     startDate: '',
//     endDate: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     // handle form submission logic here
//   };

//   const dispatch = useDispatch();
//   const activeStep = useSelector((state) => state.stepper.activeStep);
//   const steps = useSelector((state) => state.stepper.steps);

//   const handleNext = () => {
//     dispatch(nextStep());
//   };

//   const navigate = useNavigate();

//   const handlePrev = () => {
//     dispatch(prevStep());
//     navigate('/Dashboard/add/chapter')
//   };

//   return (
//   <div className="">
   
//     <div className="min-h-screen flex  justify-center pt-12">
//       <div className=" px-8 rounded-lg shadow-lg w-full">
        
//         <form onSubmit={handleSubmit} className=" flex flex-col gap-y-4">
//           <div className="md:col-span-2">
//             <label className="block text-gray-600 font-semibold mb-1" htmlFor="description">Question Text</label>
//             <textarea
//               id="description"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
//               placeholder="Enter your question"
//               rows="4"
//               required
//             ></textarea>
//           </div>
//           {/* Title */}
//           <div>
//             <label className="block text-gray-600 font-semibold mb-[2px]" htmlFor="title">Option A</label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
//               placeholder="Enter title"
//               required
//             />
//           </div>

//           {/* Passcode */}
//           <div>
//             <label className="block text-gray-600 font-semibold mb-1" htmlFor="passcode">Option B</label>
//             <input
//               type="password"
//               id="passcode"
//               name="passcode"
//               value={formData.passcode}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
//               placeholder="Enter passcode"
//               required
//             />
//           </div>

//           {/* Department */}
//           <div>
//             <label className="block text-gray-600 font-semibold mb-1" htmlFor="department">Option C</label>
//             <input
//               type="text"
//               id="department"
//               name="department"
//               value={formData.department}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
//               placeholder="Enter department"
//               required
//             />
//           </div>

//           {/* Position */}
//           <div>
//             <label className="block text-gray-600 font-semibold mb-1" htmlFor="position">Option D</label>
//             <input
//               type="text"
//               id="position"
//               name="position"
//               value={formData.position}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
//               placeholder="Enter position"
//               required
//             />
//           </div>
//           {/* Submit Button */}
//           <div className="md:col-span-2">
//             <button
//               type="submit"
//               className="w-full bg-indigo-900 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition duration-300 focus:outline-none focus:ring focus:ring-indigo-300"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//         <div className="mt-4 flex justify-between px-4 sm:px-8">
//          <button onClick={handlePrev} disabled={activeStep === 0} size="sm" className="w-14 py-2 rounded-sm sm:w-32 bg-gray-900 text-white disabled:opacity-65">
//           Prev
//          </button>
//          <button onClick={handleNext} disabled={activeStep === steps - 1} size="sm" className="w-14 py-2 rounded-sm sm:w-32 bg-gray-900 text-white disabled:opacity-65">
//           Next
//          </button>
//       </div>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default Form;

import React, { useState } from 'react';
import MultipleChoice from '../Dashboard/MultipleChoice';
import TrueFalse from '../Dashboard/TrueFalse';

const AddQuestion = () => {
  const [selectedQuestionType, setSelectedQuestionType] = useState('trueFalse'); // Track the selected question type

  const handleSelection = (type) => {
    setSelectedQuestionType(type); // Set the question type based on user's selection
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-12">
      {/* Selection Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => handleSelection('multipleChoice')}
          className={`py-2 px-4 rounded-lg ${selectedQuestionType === 'multipleChoice' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-black'} hover:bg-indigo-500`}
        >
          Multiple Choice
        </button>
        <button
          onClick={() => handleSelection('trueFalse')}
          className={`py-2 px-4 rounded-lg ${selectedQuestionType === 'trueFalse' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-black'} hover:bg-indigo-500`}
        >
          True / False
        </button>
      </div>

      {/* Conditionally Render the Question Component */}
      <div className="w-full">
        {selectedQuestionType === 'multipleChoice' && <MultipleChoice />}
        {selectedQuestionType === 'trueFalse' && <TrueFalse />}
      </div>
    </div>
  );
};

export default AddQuestion;

