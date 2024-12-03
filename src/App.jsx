import Navbar from "./components/Navbar"
import { useRef, useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';

function App() {
  const homeRef = useRef(null)
  const projectRef = useRef(null)
  const contactRef = useRef(null)
  const [showCard, setShowCard] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      // Card visibility logic
      const homeBottom = homeRef.current.getBoundingClientRect().bottom
      const projectTop = projectRef.current.getBoundingClientRect().top
      setShowCard(homeBottom <= 64 && projectTop <= window.innerHeight * 0.75)

      // Active section logic
      const homeRect = homeRef.current.getBoundingClientRect()
      const projectRect = projectRef.current.getBoundingClientRect()
      const contactRect = contactRef.current.getBoundingClientRect()
      
      if (homeRect.top <= 100 && homeRect.bottom >= 100) {
        setActiveSection('home')
      } else if (projectRect.top <= 100 && projectRect.bottom >= 100) {
        setActiveSection('about')
      } else if (contactRect.top <= 100 && contactRect.bottom >= 100) {
        setActiveSection('contact')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex bg-black">
      {/* Fixed Left Card */}
      <div className={`fixed w-[320px] h-[calc(100vh-64px)] bg-white shadow-xl p-6 transition-all duration-300 ${
        showCard ? 'opacity-100 translate-y-16' : 'opacity-0 -translate-y-full'
      }`}>
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 md:h-[250px] md:w-[250px] rounded-3xl bg-gray-200 mb-4">
            {/* Add profile image here */}
          </div>
          <h2 className="text-2xl font-bold mb-2">Kanyakorn Supontana</h2>
          <p className="text-gray-600 mb-4">Fullstack Developer</p>
          
          <div className="w-full space-y-4">
            <div>
              <h3 className="font-semibold">Contact</h3>
              <p>Kanyakorn_fame@</p>
              <p>+66 64 019 8999</p>
            </div>
            
            <div>
              <h3 className="font-semibold">Location</h3>
              <p>144 Rich Park Terminal</p>
            </div>
            
            <div>
              <h3 className="font-semibold">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 px-2 py-1 rounded">React</span>
                <span className="bg-gray-100 px-2 py-1 rounded">JavaScript</span>
                <span className="bg-gray-100 px-2 py-1 rounded">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-h-screen pt-16">
        <Navbar 
          homeRef={homeRef} 
          projectRef={projectRef} 
          contactRef={contactRef}
          activeSection={activeSection}
        />
        
        <div ref={homeRef} className=" p-6 scroll-mt-16 w-full bg-black">
          <div className="flex justify-evenly w-full ">
              <div className="flex flex-col gap-5 pl-10 max-h-[calc(100vh-100px)] h-screen justify-center text-white ">
                <p className="text-5xl">Hello, I'm Kanyakorn Supontana</p>
                <p className="text-3xl">Fullstack Developer</p>
                <p>Fullstack Developer with a focus on creating responsive, user-friendly web applications. <br/> Eager to bring ideas to life through clean and efficient code.</p>
              </div>
              <div className=' flex items-center'>
                <div className="w-[500px] h-[500px] bg-pink-300 rounded-full overflow-hidden
                transition-all duration-300 ease-in-out animate-pulse-pink
                ">
              <style>{`
                  @keyframes pulse-pink {
                    0%,
                    100% {
                      box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.7);
                    }
                    50% {
                      box-shadow: 0 0 0 30px rgba(236, 72, 153, 0);
                    }
                  }
                  .animate-pulse-pink {
                    animation: pulse-pink 3s infinite;
                  }
                `}</style>

                <img src="/src/assets/profileFame.png" alt="" 
                className="relative pt-20 z-10 " />
                </div>
                <div className="absolute top-30 right-[125px] bg-white rounded-full w-[470px] h-[470px] "></div>

              </div>
          
          </div>
        </div>

        <div ref={projectRef} className="bg-black px-4 scroll-mt-16 ml-[300px]">
          <div className=" w-full max-h-[calc(100vh-100px)] h-screen">
              <h1 className="text-3xl text-white py-3">Check out my projects</h1>
              <div className="bg-black grid grid-cols-2 grid-rows-2  text-center">

                <div className="">
                      <p className="text-xl text-white">Group Project (Animal Adoption Platform)</p>
                    <div className=" w-[350px] mx-auto">
                      <video src="/src/assets/FriendlyPaws.mp4" autoPlay loop muted playsInline></video>
                    </div>
                    <div className="flex gap-3 justify-center py-1.5">
                      <Button className="bi bi-github" variant="outline-secondary" href="https://github.com/Sarunyamk/Friend_Pow_Client"> GitHub Client </Button>
                      <Button className="bi bi-github" variant="outline-secondary" href="https://github.com/Sarunyamk/Friend_Pow_Server"> GitHub Server </Button>
                     
                    </div>
                </div>

                <div className="">
                  <p className="text-xl text-white">Personal project (Flower Shop)</p>
                </div>

                <div className="">
                  <p>Apple Clone</p>
                </div>

                <div className="">
                  <p>....</p>
                </div>

              </div>
              

          </div>
        </div>

        <div ref={contactRef} className="min-h-screen p-6 scroll-mt-16 ml-[300px]">
          <h1 className="text-3xl font-bold text-center text-white">Contact Section</h1>
        </div>
      </div>
    </div>
  )
}

export default App
