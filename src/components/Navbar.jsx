import React from 'react'

const Navbar = ({ homeRef, projectRef, contactRef, activeSection }) => {
  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex space-x-4 mx-auto">
            <button 
              onClick={() => scrollToSection(homeRef)}
              className={`px-4 py-2 hover:bg-gray-100 rounded ${
                activeSection === 'home' ? 'border-b-2 border-blue-500' : ''
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection(projectRef)}
              className={`px-4 py-2 hover:bg-gray-100 rounded ${
                activeSection === 'project' ? 'border-b-2 border-blue-500' : ''
              }`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection(contactRef)}
              className={`px-4 py-2 hover:bg-gray-100 rounded ${
                activeSection === 'contact' ? 'border-b-2 border-blue-500' : ''
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
