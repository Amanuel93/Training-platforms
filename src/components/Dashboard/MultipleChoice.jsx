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
import { useSelector, useDispatch } from 'react-redux';
import { nextStep, prevStep } from '../../redux/stepperSlice';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  // State for questions array
  const [questions, setQuestions] = useState([
    {
      description: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      correctAnswer: '', // New field for correct answer
    },
  ]);

  // Handle change for each question's inputs
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedQuestions = [...questions];
    updatedQuestions[index][name] = value;
    setQuestions(updatedQuestions);
  };

  // Handle correct answer selection
  const handleCorrectAnswerChange = (index, e) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].correctAnswer = e.target.value;
    setQuestions(updatedQuestions);
  };

  // Add new question
  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        description: '',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        correctAnswer: '', // New field for correct answer
      },
    ]);
  };

  // Remove a question
  const handleRemoveQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(questions); // Submit questions to the backend here
  };

  const dispatch = useDispatch();
  const activeStep = useSelector((state) => state.stepper.activeStep);
  const steps = useSelector((state) => state.stepper.steps);

  const navigate = useNavigate();

  const handleNext = () => {
    dispatch(nextStep());
  };

  const handlePrev = () => {
    dispatch(prevStep());
    navigate('/Dashboard/add/chapter');
  };

  return (
    <div className="">
      <div className="min-h-screen flex justify-center pt-12">
        <div className="px-8 rounded-lg shadow-lg w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
            {questions.map((question, index) => (
              <div key={index} className="border p-4 rounded-lg mb-4">
                <h3 className="text-gray-800 font-semibold mb-2">Question {index + 1}</h3>

                {/* Question Text */}
                <div className="md:col-span-2 mb-4">
                  <label className="block text-gray-600 font-semibold mb-1" htmlFor={`description-${index}`}>
                    Question Text
                  </label>
                  <textarea
                    id={`description-${index}`}
                    name="description"
                    value={question.description}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
                    placeholder="Enter your question"
                    rows="4"
                    required
                  />
                </div>

                {/* Option A */}
                <div className="mb-4">
                  <label className="block text-gray-600 font-semibold mb-1" htmlFor={`optionA-${index}`}>
                    Option A
                  </label>
                  <input
                    type="text"
                    id={`optionA-${index}`}
                    name="optionA"
                    value={question.optionA}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
                    placeholder="Enter option A"
                    required
                  />
                </div>

                {/* Option B */}
                <div className="mb-4">
                  <label className="block text-gray-600 font-semibold mb-1" htmlFor={`optionB-${index}`}>
                    Option B
                  </label>
                  <input
                    type="text"
                    id={`optionB-${index}`}
                    name="optionB"
                    value={question.optionB}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
                    placeholder="Enter option B"
                    required
                  />
                </div>

                {/* Option C */}
                <div className="mb-4">
                  <label className="block text-gray-600 font-semibold mb-1" htmlFor={`optionC-${index}`}>
                    Option C
                  </label>
                  <input
                    type="text"
                    id={`optionC-${index}`}
                    name="optionC"
                    value={question.optionC}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
                    placeholder="Enter option C"
                    required
                  />
                </div>

                {/* Option D */}
                <div className="mb-4">
                  <label className="block text-gray-600 font-semibold mb-1" htmlFor={`optionD-${index}`}>
                    Option D
                  </label>
                  <input
                    type="text"
                    id={`optionD-${index}`}
                    name="optionD"
                    value={question.optionD}
                    onChange={(e) => handleChange(index, e)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
                    placeholder="Enter option D"
                    required
                  />
                </div>

                {/* Correct Answer */}
                <div className="mb-4">
                  <label className="block text-gray-600 font-semibold mb-1">
                    Correct Answer
                  </label>
                  <select
                    name="correctAnswer"
                    value={question.correctAnswer}
                    onChange={(e) => handleCorrectAnswerChange(index, e)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
                    required
                  >
                    <option value="">Select correct answer</option>
                    <option value="A">Option A</option>
                    <option value="B">Option B</option>
                    <option value="C">Option C</option>
                    <option value="D">Option D</option>
                  </select>
                </div>

                {/* Remove question button */}
                {questions.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveQuestion(index)}
                    className="text-red-600 hover:underline"
                  >
                    Remove Question
                  </button>
                )}
              </div>
            ))}

            {/* Add question button */}
            <button
              type="button"
              onClick={handleAddQuestion}
              className="bg-indigo-900 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition duration-300"
            >
              Add Another Question
            </button>

            {/* Submit button */}
            {/* <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-indigo-900 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition duration-300 focus:outline-none focus:ring focus:ring-indigo-300"
              >
                Submit
              </button>
            </div> */}
          </form>

          <div className="mt-4 flex justify-between px-4 py-2 sm:px-8">
            <button
              onClick={handlePrev}
              disabled={activeStep === 0}
              className="w-14 py-2 rounded-sm sm:w-32 bg-gray-900 text-white disabled:opacity-65"
            >
              Prev
            </button>
            <div className="flex space-x-2">
             <button
              className="w-18 px-2 py-2 rounded-sm sm:w-32 bg-gray-900 text-white disabled:opacity-65"
             >
              Add chapter
             </button>
             <button
              className="w-14 py-2 rounded-sm sm:w-32 bg-gray-900 text-white disabled:opacity-65"
             >
              Finish
             </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
