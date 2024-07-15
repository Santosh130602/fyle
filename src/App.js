import React, { useState } from 'react';
import MainImg from "./assets/mainimage.png"
import Modal from 'react-modal';
import MainImg1 from './assets/img1.png';
import MainImg2 from './assets/img2.png';
import { FaArrowRight } from "react-icons/fa6";
import Icon from "./assets/icon.png"
import First from "./assets/first.png"
import Second from "./assets/second.png"
import Third from "./assets/third.png"
import Four from "./assets/fourth.png"

import japan1 from './assets/japan1.png';
import japan3 from './assets/japan1.png';
import image from './assets/japan3.png';

import { FcLike } from "react-icons/fc";
import { MdOutlineWatchLater } from "react-icons/md";
import { PiArrowCircleUpRightBold } from "react-icons/pi";
import { IoTrophySharp } from "react-icons/io5";

import Footer from "./assets/footer.png"

import { IoMdClose } from "react-icons/io";



function App() {

  const cardsData = [
    { img: MainImg1, title: 'WEB DEVELOPMENT', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, quod impedit?' },
    { img: MainImg2, title: 'WEB DEVELOPMENT', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, quod impedit?' },
    { img: MainImg1, title: 'WEB DEVELOPMENT', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, quod impedit?' },
    { img: MainImg2, title: 'WEB DEVELOPMENT', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, quod impedit?' },

  ];
  const [mainImage, setMainImage] = useState(image);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };


  const changeImage = (newImage) => {
    setMainImage(newImage);
  };




  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      email,
      firstName,
      lastName,
      agreeTerms
    };

    try {
      const response = await fetch('https://getform.io/f/bkkgnymb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log('Form submission successful:', data);
      alert('Form submission successful');
      closeModal();
    } catch (error) {
      console.error('Error submitting form:', error.message);
      alert('Form submission successful');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className='font-sans'>
      <div className='bg-white flex p-24'>
        <div className='w-3/6 justify-center text-left ml-20 items-center p-12'>
          <h2 className='text-red-500 bold text-3xl mb-10'><strong>AWARD WINNING</strong></h2>

          <h1 className='text-6xl bold mb-10'><strong>DIGITAL  &nbsp; MARKETING AGENCY</strong></h1>
          <p className='text-xl mb-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse tempora ius eos nostrum optio iste laboriosam, quisquam ducimus, vel laudantium beatae omnis. Vel velit sint rerum minima illo!</p>
          <button onClick={openModal} className='bg-red-500 w-40 h-10 text-white rounded'>CONTACT US</button>
        </div>
        <div className='w-3/6'>
          <img src={MainImg} className='w-96 p-8' />
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            zIndex: 99,
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            borderRadius: '8px',
            maxWidth: '500px',
            padding: '40px'
          }
        }}
      >
        <div className="text-center">
          <div className='flex justify-between text-xl'>
            <h2 className='text-xl text-left bold' >Talk to us  </h2>
            <IoMdClose onClick={closeModal} />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                id="workEmail"
                name="workEmail"
                value={email}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border border-gray-300 rounded-md px-3 py-2 mt-3 w-full"
              />

            </div>
            <div className="form-group flex gap-2 mt-4">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                placeholder='First Name'
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="border border-gray-300 rounded-md px-3 py-2 mt-3 w-full"
              />

              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                placeholder='Last Name'
                onChange={(e) => setLastName(e.target.value)}
                required
                className="border border-gray-300 rounded-md px-3 py-2 mt-3 w-full"
              />
            </div>
            {/* <Checkbox label="Remember Me" />; */}
            <div className="mt-4 items-center	">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-8 w-8 text-red-500"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  required
                />
                <span className="ml-2 text-gray-700">I agree to Fyle's terms and conditions, and provide consent to send me communication</span>
              </label>
            </div>


            {/* <button type="submit" className="bg-red-500 text-white rounded-md px-4 py-2 mt-6 block mx-auto">Contact Us</button> */}

            <button type="submit" className={`bg-red-500 text-white rounded-md px-4 py-2 mt-6 block mx-auto ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={loading}>
              {loading ? 'Loading...' : 'Contact Us'}
            </button>
          </form>
        </div>
      </Modal>


      <div className='bg-slate-100 p-36  '>
        <h1 className='text-red-500 ml-20 bold text-3xl mb-10'><strong>WHAT WE DO</strong></h1>
        <div className='flex ml-20 gap-12'>
          <h1 className='text-5xl w-3/6 '><strong>SERVICES PROVIDE FOR YOU</strong></h1>
          <p className='w-3/6 text-xl '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse tempora ius eos nostrum optio iste laboriosam, quisquam ducimus, vel laudantium beatae omnis. Vel velit sint rerum minima illo!</p>
        </div>

        <div className="w-full overflow-hidden py-5 mt-16">
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center max-w-7xl">
              {cardsData.slice(0, 3).map((card, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden relative group">
                    <img src={card.img} alt="img" className="w-full h-full object-cover" draggable="false" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:bg-red-500 transition-opacity transform translate-y-full group-hover:translate-y-0 duration-500 flex items-center justify-center p-5">
                      <div className="text-center text-white">
                        <img src={Icon} alt="" className="w-10 mx-auto mb-3" />
                        <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                        <p className="text-gray-200 mb-4">{card.text}</p>
                        <a
                          className="inline-block bg-white text-red-500 w-44 mt-12 justify-center ml-16 py-2 flex items-center	gap-4 px-4 rounded-lg hover:bg-red-600"
                          target="_blank"
                          href="https://www.fylehq.com/"
                          rel="noopener noreferrer"
                        >
                          READ MORE <FaArrowRight />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex ml-4 mt-5">
            <div className="w-3 h-3 bg-red-500 rounded-full mx-1"></div>
            <div className="w-3 h-3 bg-black rounded-full mx-1"></div>
            <div className="w-3 h-3 bg-black rounded-full mx-1"></div>
          </div>
        </div>



      </div>


      <div className='text-center p-24	'>

        <h4 className='bold text-2xl text-red-500 mb-8'>WHY CHOOSE US</h4>
        <h1 className='bold text-5xl'><strong>WHY WE ARE BEST</strong></h1>

        <div className='flex mt-6'>
          <div className='p-8'>
            <img src={First} className='w-28' />
            <h2 className='bold text-left text-xl'><strong>Clarified Vision & Target</strong></h2>
            <p className='bold text-left text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, id alias!</p>
          </div>
          <div className='p-8'>
            <img src={Second} className='w-28' />
            <h2 className='bold text-left text-xl'><strong>High Performance</strong></h2>
            <p className='bold text-left text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, id alias!</p>
          </div>
          <div className='p-8'>
            <img src={Third} className='w-28' />
            <h2 className='bold text-left text-xl'><strong>Maintain Security</strong></h2>
            <p className='bold text-left text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, id alias!</p>
          </div>
          <div className='p-8'>
            <img src={Four} className='w-28' />
            <h2 className='bold text-left text-xl'><strong>Better Strategy & Quality</strong></h2>
            <p className='bold text-left text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, id alias!</p>
          </div>

        </div>

        <div>
          <h1 className='text-red-500 text-2xl mt-16 mb-8'>OUR PROJECT</h1>
          <h1 className='bold text-5xl'><strong>WHY WE ARE BEST</strong></h1>
        </div>

        <div className="flex mt-16">
          <div className="w-1/2 p-4">
            <div className="photos">
              <img id="mainImage" src={mainImage} alt="" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
          <div className="w-1/4 p-4">
            <div className="about-photos bg-gray-200 hover:bg-red-500 hover:text-white text-left  cursor-pointer" onClick={() => changeImage(japan1)}>
              <h3 className="text-lg p-4 font-semibold">Genderless Kei - Japan's Hot</h3>
              <p className="text-gray-600 p-4 mt-[-20px] hover:text-white">Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of</p>
            </div>
            <div className="about-photos bg-gray-200 text-left  hover:bg-red-500 hover:text-white cursor-pointer" onClick={() => changeImage(image)} id="default-selected">
              <h3 className="text-lg p-4 font-semibold">Better Strategy & Quality</h3>
              <p className="text-gray-600 p-4 mt-[-20px] hover:text-white">Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of</p>
            </div>
            <div className="about-photos bg-gray-200 text-left hover:bg-red-500 hover:text-white cursor-pointer" onClick={() => changeImage(japan3)}>
              <h3 className="text-lg p-4 font-semibold">Genderless Kei - Japan's Hot</h3>
              <p className="text-gray-600 p-4 mt-[-20px] hover:text-white">Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of</p>
            </div>
          </div>
        </div>
      </div>






      <div id="stats" className="bg-gray-100 py-12">
        <div className="container mx-auto p-16">
          <div className="text-center mb-10">
            <span className="text-red-500 text-2xl">EXPERTS GROWTH</span>
            <h1 className="text-5xl font-bold mt-10">OUR COMPANY GROWTH</h1>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="stats flex items-center justify-center w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4">

              <div className="ml-4 bg-white p-10 shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                <FcLike className='text-4xl mb-2' />
                <h1 className="text-4xl font-bold">199+</h1>
                <p className="text-gray-600">Satisfied Customers</p>
              </div>
            </div>
            <div className="stats flex items-center justify-center w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4">

              <div className="ml-4 bg-white p-10 shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                <MdOutlineWatchLater className='text-4xl text-red-500 mb-2' />
                <h1 className="text-4xl font-bold">1591+</h1>
                <p className="text-gray-600">Days Of Operation</p>
              </div>
            </div>
            <div className="stats flex items-center justify-center w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4">

              <div className="ml-4 bg-white p-10 shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                <PiArrowCircleUpRightBold className='text-4xl text-red-500 mb-2' />
                <h1 className="text-4xl font-bold">283+</h1>
                <p className="text-gray-600">Complete Project</p>
              </div>
            </div>
            <div className="stats flex items-center justify-center w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4">

              <div className="ml-4 bg-white p-10 shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                <IoTrophySharp className='text-red-500 text-center text-4xl mb-2' />
                <h1 className="text-4xl font-bold">75+</h1>
                <p className="text-gray-600">Win Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="feedback" className="bg-white py-10">
        <div className="container mx-auto p-16">
          <div className="text-center mb-8">
            <span className="text-red-500 text-2xl">CLIENT'S FEEDBACK</span>
            <h1 className="text-5xl mt-10 font-bold">PEOPLE SAY'S ABOUT US !</h1>
          </div>
          <div className="flex justify-center">
            <div className="max-w-4xl   p-6 mx-4">
              <p className="text-2xl  mb-4">
                Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum at Malorum Original.
              </p>
              <div className="text-gray-400 text-sm">
                <span className='text-red-500 text-xl bold'><strong>JANNAT TUMPA</strong></span>
                <span className="mx-2">-</span>
                <span className='text-xl'>COO, AMERIMAR ENTERPRISES, INC.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src={Footer} />
      </div>


    </div>


  );
}

export default App;






