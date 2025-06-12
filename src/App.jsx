// import React, { useState, useEffect } from 'react';
// import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Menu, X, ExternalLink, Download } from 'lucide-react';

// export default function Portfolio() {
//   const [menuOpen, setmenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
//       const scrollPosition = window.scrollY + 100;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const offsetTop = element.offsetTop;
//           const offsetHeight = element.offsetHeight;
          
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setmenuOpen(false);
//   };




//   const skills = [
//     'React',
//     'JavaScript',
//     'Node.js',
//     'Python',
//     'HTML/CSS',
//     'MongoDB',
//     'Tailwind CSS',
//     'Git'
//   ];

//   const projects = [
//     {
//       title: "Trivia Game",
//       description: "Created a two-player trivia game in JavaScript with dynamic question fetching, category selection, and a scoring system based on difficulty levels",
//       technologies: ["HTML", "CSS", "JavaScript"],
//       github: "https://github.com/priyashukla622/Trivia_Project",
//       live: "https://trivia-project-zeta.vercel.app/"
//     },
//     {
//       title: "Task Management Website",
//       description: "Built a secure task management system with JWT authentication, RESTful APIs for task operations, and robust client-server validation and error handling",
//       technologies: ["HTML", "CSS", "JavaScript", "Node.Js", "Express.js", "JWT", "MongoDB"],
//       github: "https://github.com/priyashukla622/TaskManagement",
//       live: "https://task-3-awwp.onrender.com/"
//     },
//     {
//       title: "SK Enterprises",
//       description: "Built a service and inventory management web app with a team using React for the front end and Node.js with Express for the back end. Made sure the app looks good on all devices and handles data smoothly.",
//       technologies: ["HTML","CSS","JavaScript", "React", "Node.js", "Express.js", "REST APIs", "MongoDB"],
//       github: "https://github.com/archana-singh-1/s-k-project",
//       live: "https://s-k-project-rwl3.vercel.app/"
//     },
//     {
//       title: "Food Website",
//       description: "Designed and developed a responsive food website to showcase various dishes and menu items. Included features like category-wise filtering, detailed dish descriptions, and a user-friendly.",
//       technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
//       github: "https://github.com/priyashukla622/Food_Website",
//       live: "https://food-website-1-r6gx.onrender.com/"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-200 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex-shrink-0">
//               <h1 className="text-xl font-bold text-gray-900">Portfolio</h1>
//             </div>
            
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 {['home', 'about', 'education', 'skills', 'projects', 'contact'].map((item) => (
//                   <button
//                     key={item}
//                     onClick={() => scrollSection(item)}
//                     className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
//                       activeSection === item
//                         ? 'bg-blue-600 text-white shadow-lg'
//                         : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
//                     }`}
//                   >
//                     {item.charAt(0).toUpperCase() + item.slice(1)}
//                   </button>
//                 ))}
//               </div>
//             </div>
            
//             <div className="md:hidden">
//               <button
//                 onClick={() => setmenuOpen(!menuOpen)}
//                 className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-200"
//               >
//                 {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {menuOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-lg border-t border-gray-200">
//               {['home', 'about', 'education', 'skills', 'projects', 'contact'].map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollSection(item)}
//                   className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
//                 >
//                   {item.charAt(0).toUpperCase() + item.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Home Section */}
//       <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="mb-7">
//             <div className="w-40 h-40 mx-auto mb-4  mt-7 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 shadow-xl">
//               <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden">
//                 <img 
//                   src="Priya_Photo.jpeg"
//                   alt="My Profile"
//                   className="object-cover mt-6"
//                 />
//               </div>
//             </div>
//           </div>
//           <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
//             <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
//               Priya Shukla
//             </span>
//           </h1>

//           <p className="text-xl md:text-1xl text-gray-600 mb-8 max-w-3xl mx-auto">
//             Full Stack Developer | JavaScript Developer | Web Developer
//           </p>
//            <p className="text-base text-gray-500 mb-8 max-w-2xl mx-auto">
//                I'm passionate about learning new technologies and working on projects that help people.
//               I enjoy turning simple ideas into real, working web applications.
//             </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//             <button
//               onClick={() => scrollSection('contact')}
//               className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
//             >
//               Get In Touch
//             </button>

//           <a href="/public/Priya Resume.pdf" download>
//           <button className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2 justify-center shadow-md">
//              <Download size={20} />
//              Download CV
//           </button>
//           </a>
//           </div>
//           <div className="flex justify-center space-x-6">
//             <a href="https://github.com/priyashukla622" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
//               <Github size={24} />
//             </a>
//             <a href="https://www.linkedin.com/in/priya-shukla-b0a943280/" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
//               <Linkedin size={24} />
//             </a>
//             <a href="https://x.com/?logout=1749146613934" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
//               <Twitter size={24} />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
//             About <span className="text-blue-600">Me</span>
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
//                 <img 
//                   src="Priya_Photo.jpeg"
//                   alt="About Me"
//                   className="object-cover "
//                 />
//               </div>
//             </div>
//             <div className="space-y-6">
//               <p className="text-lg text-gray-700 leading-relaxed">
//                    I'm a passionate Full Stack Developer who loves building websites and web applications that are simple, useful, and easy to use. I'm learning and working with frontend and backend technologies like React, Node.js, and MongoDB.
//               </p>
              
//               <p className="text-lg text-gray-700 leading-relaxed">
//                I enjoy turning ideas into real projects and want to keep improving my skills by working on meaningful applications. Want to see what I’ve built? Check out my projects below!
//               </p>
              
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Want to see what I've built? Check out my{' '}
//                 <button
//                   onClick={() => scrollSection('projects')}
//                   className="text-blue-600 hover:text-blue-800 underline font-semibold transition-colors duration-300"
//                 >
//                   projects
//                 </button>
//                 {' '}to see my work in action.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Education Section */}
//       <section id="education" className="min-h-screen flex items-center py-13 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
//             My <span className="text-blue-600">Education</span>
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="flex flex-col justify-between mb-4">
//                 <h3 className="text-2xl font-bold text-gray-700 mb-2">Bachelor of Computer Applications (BCA)</h3>
//                 <span className="text-blue-600 font-semibold">2024 - 2027</span>
//               </div>
//               <p className="text-gray-600 mb-2">Maharishi University, Lucknow</p>
//               <p className="text-gray-700">
//                 Currently pursuing graduation with a focus on software development, web technologies, and database management.
//               </p>
//             </div>
            
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="flex flex-col justify-between mb-4">
//                 <h3 className="text-2xl font-bold text-gray-700 mb-2">Diploma in Software Development</h3>
//                 <span className="text-blue-600 font-semibold">2022 - Present</span>
//               </div>
//               <p className="text-gray-600 mb-2">NavGurukul, Pune – A Social Welfare Organization</p>
//               <p className="text-gray-700">
//                 Gaining hands-on experience in full-stack development with focus on HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB. Also developed soft skills like leadership, communication, and teamwork through real-world responsibilities and projects.
//               </p>
//             </div>
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="flex flex-col justify-between mb-4">
//                 <h3 className="text-2xl font-bold text-gray-700 mb-2">Higher Secondary Education</h3>
//                 <span className="text-blue-600 font-semibold">2020 - 2022</span>
//               </div>
//               <p className="text-gray-600 mb-2">Model, Inter college sitapur</p>
//               <p className="text-gray-700">
//                 Science stream with Mathematics, Physics, and Computer Science as major subjects.
//                 Achieved excellent grades and developed strong analytical thinking skills.
//               </p>
//             </div>

//             <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="flex flex-col justify-between mb-4">
//                 <h3 className="text-2xl font-bold text-gray-700 mb-2">Web Development</h3>
//                 <span className="text-blue-600 font-semibold">2023-2024</span>
//               </div>
//               <p className="text-gray-600 mb-2">Hyper Verge Academy</p>
//               <p className="text-gray-700">
//                 Intensive 12-week program focused on React ecosystem, state management, testing, and modern development practices.
//                 Completed capstone project with industry mentorship.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
//             My <span className="text-blue-600">Skills</span>
//           </h2>
          
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
//             {skills.map((skill, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-all duration-300 shadow-md">
//                 <span className="text-gray-900 font-semibold text-lg">{skill}</span>
//               </div>
//             ))}
//           </div>
          
//           <div className="mt-16 grid md:grid-cols-3 gap-8">
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="text-4xl mb-4">💻</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Frontend</h3>
//               <p className="text-gray-700">React, HTML5, CSS3, JavaScript, Tailwind CSS</p>
//             </div>
            
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="text-4xl mb-4">⚙️</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Backend</h3>
//               <p className="text-gray-700">Node.js, Express.js, REST APIs</p>
//             </div>
            
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="text-4xl mb-4">🗄️</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Database</h3>
//               <p className="text-gray-700">MongoDB</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
//             My <span className="text-blue-600">Projects</span>
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             {projects.map((project, index) => (
//               <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 shadow-md">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
//                 <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.technologies.map((tech, techIndex) => (
//                     <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
                
//                 <div className="flex gap-4">
//                   <a href={project.github} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300">
//                     <Github size={18} />
//                     Code
//                   </a>
//                   <a href={project.live} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300">
//                     <ExternalLink size={18} />
//                     Live Demo
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="min-h-screen flex items-center py-30 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
//             Get In <span className="text-blue-600">Touch</span>
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-12">
//             <div className="space-y-8">
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's work together!</h3>
//                 <p className="text-gray-700 text-lg mb-8">
//                   I'm always interested in new opportunities and exciting projects. 
//                   Feel free to reach out if you'd like to collaborate or just say hello!
//                 </p>
//               </div>
              
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-4 text-gray-700">
//                   <Mail className="text-blue-600" size={24} />
//                   <span>priyashukla22@navgurukul.org</span>
//                 </div>
//                 <div className="flex items-center space-x-4 text-gray-700">
//                   <Phone className="text-blue-600" size={24} />
//                   <span>+91 75250 98693</span>
//                 </div>
//                 <div className="flex items-center space-x-4 text-gray-700">
//                   <MapPin className="text-blue-600" size={24} />
//                   <span>Pune, Maharastra, India</span>
//                 </div>
//               </div>
              
//               <div className="flex space-x-6 pt-6">
//                 <a href="https://github.com/priyashukla622" className="bg-gray-200 p-3 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300">
//                   <Github size={24} />
//                 </a>
//                 <a href="https://www.linkedin.com/in/priya-shukla-b0a943280/" className="bg-gray-200 p-3 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300">
//                   <Linkedin size={24} />
//                 </a>
//                 <a href="https://x.com/?logout=1749146613934" className="bg-gray-200 p-3 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300">
//                   <Twitter size={24} />
//                 </a>
//               </div>
//             </div>
//             <form action="https://api.web3forms.com/submit" method="POST" className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
//               <input type="hidden" name="access_key" value="66d17811-6887-4a47-9add-4c7efe7afd50" />
//               <div className="space-y-6">
//               <div>
//              <label className="block text-gray-900 font-semibold mb-2">Name</label>
//              <input type="text" name="name"
//                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
//                 placeholder="Your Name" required/>
//               </div>
//             <div>
//               <label className="block text-gray-900 font-semibold mb-2">Email</label>
//               <input type="email" name="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
//                placeholder="your.email@example.com" required/>
//            </div>
//        <div>
//       <label className="block text-gray-900 font-semibold mb-2">Message</label>
//       <textarea
//         name="message"
//         rows="4"
//         className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
//         placeholder="Your message..."
//         required
//       ></textarea>
//     </div>
//     <button
//       type="submit"
//       className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
//     >
//       Send Message
//     </button>
//   </div>
//    </form>
//           </div>
//         </div>
//       </section>
//       {/* Footer */}
//       <footer className="bg-white border-t border-gray-300 py-8">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <p className="text-gray-600">
//             © 2025 Priya Shukla. Made with ❤️ using React & Tailwind CSS
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }











// import React, { useState, useEffect } from 'react';
// import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Menu, X, ExternalLink, Download } from 'lucide-react';

// export default function Portfolio() {
//   const [menuOpen, setmenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
//       const scrollPosition = window.scrollY + 100;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const offsetTop = element.offsetTop;
//           const offsetHeight = element.offsetHeight;
          
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setmenuOpen(false);
//   };




//   const skills = [
//     'React',
//     'JavaScript',
//     'Node.js',
//     'Python',
//     'HTML/CSS',
//     'MongoDB',
//     'Tailwind CSS',
//     'Git'
//   ];

//   const projects = [
//     {
//       title: "Trivia Game",
//       description: "Created a two-player trivia game in JavaScript with dynamic question fetching, category selection, and a scoring system based on difficulty levels",
//       technologies: ["HTML", "CSS", "JavaScript"],
//       github: "https://github.com/priyashukla622/Trivia_Project",
//       live: "https://trivia-project-zeta.vercel.app/"
//     },
//     {
//       title: "Task Management Website",
//       description: "Built a secure task management system with JWT authentication, RESTful APIs for task operations, and robust client-server validation and error handling",
//       technologies: ["HTML", "CSS", "JavaScript", "Node.Js", "Express.js", "JWT", "MongoDB"],
//       github: "https://github.com/priyashukla622/TaskManagement",
//       live: "https://task-3-awwp.onrender.com/"
//     },
//     {
//       title: "SK Enterprises",
//       description: "Built a service and inventory management web app with a team using React for the front end and Node.js with Express for the back end. Made sure the app looks good on all devices and handles data smoothly.",
//       technologies: ["HTML","CSS","JavaScript", "React", "Node.js", "Express.js", "REST APIs", "MongoDB"],
//       github: "https://github.com/archana-singh-1/s-k-project",
//       live: "https://s-k-project-rwl3.vercel.app/"
//     },
//     {
//       title: "Food Website",
//       description: "Designed and developed a responsive food website to showcase various dishes and menu items. Included features like category-wise filtering, detailed dish descriptions, and a user-friendly.",
//       technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
//       github: "https://github.com/priyashukla622/Food_Website",
//       live: "https://food-website-1-r6gx.onrender.com/"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-200 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex-shrink-0">
//               <h1 className="text-xl font-bold text-gray-900">Portfolio</h1>
//             </div>
            
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 {['home', 'about', 'education', 'skills', 'projects', 'contact'].map((item) => (
//                   <button
//                     key={item}
//                     onClick={() => scrollSection(item)}
//                     className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
//                       activeSection === item
//                         ? 'bg-blue-600 text-white shadow-lg'
//                         : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
//                     }`}
//                   >
//                     {item.charAt(0).toUpperCase() + item.slice(1)}
//                   </button>
//                 ))}
//               </div>
//             </div>
            
//             <div className="md:hidden">
//               <button
//                 onClick={() => setmenuOpen(!menuOpen)}
//                 className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-200"
//               >
//                 {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {menuOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-lg border-t border-gray-200">
//               {['home', 'about', 'education', 'skills', 'projects', 'contact'].map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollSection(item)}
//                   className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
//                 >
//                   {item.charAt(0).toUpperCase() + item.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Home Section */}
//       <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="mb-7">
//             <div className="w-40 h-40 mx-auto mb-4  mt-7 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 shadow-xl">
//               <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden">
//                 <img 
//                   src="Priya_Photo.jpeg"
//                   alt="My Profile"
//                   className="object-cover mt-6"
//                 />
//               </div>
//             </div>
//           </div>
//           <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
//             <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
//               Priya Shukla
//             </span>
//           </h1>

//           <p className="text-xl md:text-1xl text-gray-600 mb-8 max-w-3xl mx-auto">
//             Full Stack Developer | JavaScript Developer | Web Developer
//           </p>
//            <p className="text-base text-gray-500 mb-8 max-w-2xl mx-auto">
//                I'm passionate about learning new technologies and working on projects that help people.
//               I enjoy turning simple ideas into real, working web applications.
//             </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//             <button
//               onClick={() => scrollSection('contact')}
//               className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
//             >
//               Get In Touch
//             </button>

//           <a href="/public/Priya Resume.pdf" download>
//           <button className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2 justify-center shadow-md">
//              <Download size={20} />
//              Download CV
//           </button>
//           </a>
//           </div>
//           <div className="flex justify-center space-x-6">
//             <a href="https://github.com/priyashukla622" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
//               <Github size={24} />
//             </a>
//             <a href="https://www.linkedin.com/in/priya-shukla-b0a943280/" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
//               <Linkedin size={24} />
//             </a>
//             <a href="https://x.com/?logout=1749146613934" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
//               <Twitter size={24} />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
//             About <span className="text-blue-600">Me</span>
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
//                 <img 
//                   src="Priya_Photo.jpeg"
//                   alt="About Me"
//                   className="object-cover "
//                 />
//               </div>
//             </div>
//             <div className="space-y-6">
//               <p className="text-lg text-gray-700 leading-relaxed">
//                    I'm a passionate Full Stack Developer who loves building websites and web applications that are simple, useful, and easy to use. I'm learning and working with frontend and backend technologies like React, Node.js, and MongoDB.
//               </p>
              
//               <p className="text-lg text-gray-700 leading-relaxed">
//                I enjoy turning ideas into real projects and want to keep improving my skills by working on meaningful applications. Want to see what I’ve built? Check out my projects below!
//               </p>
              
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Want to see what I've built? Check out my{' '}
//                 <button
//                   onClick={() => scrollSection('projects')}
//                   className="text-blue-600 hover:text-blue-800 underline font-semibold transition-colors duration-300"
//                 >
//                   projects
//                 </button>
//                 {' '}to see my work in action.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Education Section */}
//       <section id="education" className="min-h-screen flex items-center py-13 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
//             My <span className="text-blue-600">Education</span>
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="flex flex-col justify-between mb-4">
//                 <h3 className="text-2xl font-bold text-gray-700 mb-2">Bachelor of Computer Applications (BCA)</h3>
//                 <span className="text-blue-600 font-semibold">2024 - 2027</span>
//               </div>
//               <p className="text-gray-600 mb-2">Maharishi University, Lucknow</p>
//               <p className="text-gray-700">
//                 Currently pursuing graduation with a focus on software development, web technologies, and database management.
//               </p>
//             </div>
            
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="flex flex-col justify-between mb-4">
//                 <h3 className="text-2xl font-bold text-gray-700 mb-2">Diploma in Software Development</h3>
//                 <span className="text-blue-600 font-semibold">2022 - Present</span>
//               </div>
//               <p className="text-gray-600 mb-2">NavGurukul, Pune – A Social Welfare Organization</p>
//               <p className="text-gray-700">
//                 Gaining hands-on experience in full-stack development with focus on HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB. Also developed soft skills like leadership, communication, and teamwork through real-world responsibilities and projects.
//               </p>
//             </div>
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="flex flex-col justify-between mb-4">
//                 <h3 className="text-2xl font-bold text-gray-700 mb-2">Higher Secondary Education</h3>
//                 <span className="text-blue-600 font-semibold">2020 - 2022</span>
//               </div>
//               <p className="text-gray-600 mb-2">Model, Inter college sitapur</p>
//               <p className="text-gray-700">
//                 Science stream with Mathematics, Physics, and Computer Science as major subjects.
//                 Achieved excellent grades and developed strong analytical thinking skills.
//               </p>
//             </div>

//             <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="flex flex-col justify-between mb-4">
//                 <h3 className="text-2xl font-bold text-gray-700 mb-2">Web Development</h3>
//                 <span className="text-blue-600 font-semibold">2023-2024</span>
//               </div>
//               <p className="text-gray-600 mb-2">Hyper Verge Academy</p>
//               <p className="text-gray-700">
//                 Intensive 12-week program focused on React ecosystem, state management, testing, and modern development practices.
//                 Completed capstone project with industry mentorship.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
//             My <span className="text-blue-600">Skills</span>
//           </h2>
          
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
//             {skills.map((skill, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-all duration-300 shadow-md">
//                 <span className="text-gray-900 font-semibold text-lg">{skill}</span>
//               </div>
//             ))}
//           </div>
          
//           <div className="mt-16 grid md:grid-cols-3 gap-8">
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="text-4xl mb-4">💻</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Frontend</h3>
//               <p className="text-gray-700">React, HTML5, CSS3, JavaScript, Tailwind CSS</p>
//             </div>
            
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="text-4xl mb-4">⚙️</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Backend</h3>
//               <p className="text-gray-700">Node.js, Express.js, REST APIs</p>
//             </div>
            
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="text-4xl mb-4">🗄️</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Database</h3>
//               <p className="text-gray-700">MongoDB</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
//             My <span className="text-blue-600">Projects</span>
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             {projects.map((project, index) => (
//               <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 shadow-md">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
//                 <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.technologies.map((tech, techIndex) => (
//                     <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
                
//                 <div className="flex gap-4">
//                   <a href={project.github} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300">
//                     <Github size={18} />
//                     Code
//                   </a>
//                   <a href={project.live} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300">
//                     <ExternalLink size={18} />
//                     Live Demo
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="min-h-screen flex items-center py-30 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
//             Get In <span className="text-blue-600">Touch</span>
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-12">
//             <div className="space-y-8">
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's work together!</h3>
//                 <p className="text-gray-700 text-lg mb-8">
//                   I'm always interested in new opportunities and exciting projects. 
//                   Feel free to reach out if you'd like to collaborate or just say hello!
//                 </p>
//               </div>
              
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-4 text-gray-700">
//                   <Mail className="text-blue-600" size={24} />
//                   <span>priyashukla22@navgurukul.org</span>
//                 </div>
//                 <div className="flex items-center space-x-4 text-gray-700">
//                   <Phone className="text-blue-600" size={24} />
//                   <span>+91 75250 98693</span>
//                 </div>
//                 <div className="flex items-center space-x-4 text-gray-700">
//                   <MapPin className="text-blue-600" size={24} />
//                   <span>Pune, Maharastra, India</span>
//                 </div>
//               </div>
              
//               <div className="flex space-x-6 pt-6">
//                 <a href="https://github.com/priyashukla622" className="bg-gray-200 p-3 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300">
//                   <Github size={24} />
//                 </a>
//                 <a href="https://www.linkedin.com/in/priya-shukla-b0a943280/" className="bg-gray-200 p-3 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300">
//                   <Linkedin size={24} />
//                 </a>
//                 <a href="https://x.com/?logout=1749146613934" className="bg-gray-200 p-3 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300">
//                   <Twitter size={24} />
//                 </a>
//               </div>
//             </div>
//             <form action="https://api.web3forms.com/submit" method="POST" className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
//               <input type="hidden" name="access_key" value="66d17811-6887-4a47-9add-4c7efe7afd50" />
//               <div className="space-y-6">
//               <div>
//              <label className="block text-gray-900 font-semibold mb-2">Name</label>
//              <input type="text" name="name"
//                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
//                 placeholder="Your Name" required/>
//               </div>
//             <div>
//               <label className="block text-gray-900 font-semibold mb-2">Email</label>
//               <input type="email" name="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
//                placeholder="your.email@example.com" required/>
//            </div>
//        <div>
//       <label className="block text-gray-900 font-semibold mb-2">Message</label>
//       <textarea
//         name="message"
//         rows="4"
//         className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
//         placeholder="Your message..."
//         required
//       ></textarea>
//     </div>
//     <button
//       type="submit"
//       className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
//     >
//       Send Message
//     </button>
//   </div>
//    </form>
//           </div>
//         </div>
//       </section>
//       {/* Footer */}
//       <footer className="bg-white border-t border-gray-300 py-8">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <p className="text-gray-600">
//             © 2025 Priya Shukla. Made with ❤️ using React & Tailwind CSS
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }










// import React, { useState, useEffect } from 'react';
// import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Menu, X, ExternalLink, Download } from 'lucide-react';

// export default function Portfolio() {
//   const [menuOpen, setmenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [homeData, setHomeData] = useState({});
//   const [aboutData, setAboutData] = useState({})


//   // Fetch home data from API
//   useEffect(() => {
//     const fetchHomeData = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/api/getHome');
//         const result = await response.json();
//         if (result.message === "Home data fetch successfully" && result.data) {
//           setHomeData(result.data);
//         }
//       } catch (error) {
//         console.error('Error fetching home data:', error);
//         // Keep default data if API fails
//       }
//     };

//     fetchHomeData();
//   }, []);

//   useEffect(() => {
//   const fetchAboutData = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/api/getAbout");
//       const result = await response.json();
//       console.log("API result:", result);
//       if (result.message === "About data fetch successfully" && result.data) {
//         setAboutData(result.data);
//       }
//     } catch (error) {
//       console.error("Error fetching about data:", error);
//     }
//   };
//   fetchAboutData();
// }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
//       const scrollPosition = window.scrollY + 100;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const offsetTop = element.offsetTop;
//           const offsetHeight = element.offsetHeight;
          
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setmenuOpen(false);
//   };

//   const skills = [
//     'React',
//     'JavaScript',
//     'Node.js',
//     'Python',
//     'HTML/CSS',
//     'MongoDB',
//     'Tailwind CSS',
//     'Git'
//   ];

//   const projects = [
//     {
//       title: "Trivia Game",
//       description: "Created a two-player trivia game in JavaScript with dynamic question fetching, category selection, and a scoring system based on difficulty levels",
//       technologies: ["HTML", "CSS", "JavaScript"],
//       github: "https://github.com/priyashukla622/Trivia_Project",
//       live: "https://trivia-project-zeta.vercel.app/"
//     },
//     {
//       title: "Task Management Website",
//       description: "Built a secure task management system with JWT authentication, RESTful APIs for task operations, and robust client-server validation and error handling",
//       technologies: ["HTML", "CSS", "JavaScript", "Node.Js", "Express.js", "JWT", "MongoDB"],
//       github: "https://github.com/priyashukla622/TaskManagement",
//       live: "https://task-3-awwp.onrender.com/"
//     },
//     {
//       title: "SK Enterprises",
//       description: "Built a service and inventory management web app with a team using React for the front end and Node.js with Express for the back end. Made sure the app looks good on all devices and handles data smoothly.",
//       technologies: ["HTML","CSS","JavaScript", "React", "Node.js", "Express.js", "REST APIs", "MongoDB"],
//       github: "https://github.com/archana-singh-1/s-k-project",
//       live: "https://s-k-project-rwl3.vercel.app/"
//     },
//     {
//       title: "Food Website",
//       description: "Designed and developed a responsive food website to showcase various dishes and menu items. Included features like category-wise filtering, detailed dish descriptions, and a user-friendly.",
//       technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
//       github: "https://github.com/priyashukla622/Food_Website",
//       live: "https://food-website-1-r6gx.onrender.com/"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-200 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex-shrink-0">
//               <h1 className="text-xl font-bold text-gray-900">Portfolio</h1>
//             </div>
            
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 {['home', 'about', 'education', 'skills', 'projects', 'contact'].map((item) => (
//                   <button
//                     key={item}
//                     onClick={() => scrollSection(item)}
//                     className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
//                       activeSection === item
//                         ? 'bg-blue-600 text-white shadow-lg'
//                         : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
//                     }`}
//                   >
//                     {item.charAt(0).toUpperCase() + item.slice(1)}
//                   </button>
//                 ))}
//               </div>
//             </div>
            
//             <div className="md:hidden">
//               <button
//                 onClick={() => setmenuOpen(!menuOpen)}
//                 className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-200"
//               >
//                 {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {menuOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-lg border-t border-gray-200">
//               {['home', 'about', 'education', 'skills', 'projects', 'contact'].map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollSection(item)}
//                   className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
//                 >
//                   {item.charAt(0).toUpperCase() + item.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Home Section */}
//       <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="mb-7">
//             <div className="w-40 h-40 mx-auto mb-4  mt-7 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 shadow-xl">
//               <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden">
//                 <img 
//                   src={homeData.profileImage}
//                   alt="My Profile"
//                   className="object-cover mt-6"
//                 />
//               </div>
//             </div>
//           </div>
//           <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
//             <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
//               {homeData.name}
//             </span>
//           </h1>

//           <p className="text-xl md:text-1xl text-gray-600 mb-8 max-w-3xl mx-auto">
//             {homeData.title}
//           </p>
//            <p className="text-base text-gray-500 mb-8 max-w-2xl mx-auto">
//                {homeData.description}
//             </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//             <button
//               onClick={() => scrollSection('contact')}
//               className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
//             >
//               Get In Touch
//             </button>

//           <a href="/public/Priya Resume.pdf" download>
//           <button className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2 justify-center shadow-md">
//              <Download size={20} />
//              Download CV
//           </button>
//           </a>
//           </div>
//           <div className="flex justify-center space-x-6">
//             <a href="https://github.com/priyashukla622" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
//               <Github size={24} />
//             </a>
//             <a href="https://www.linkedin.com/in/priya-shukla-b0a943280/" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
//               <Linkedin size={24} />
//             </a>
//             <a href="https://x.com/?logout=1749146613934" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
//               <Twitter size={24} />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
//             About <span className="text-blue-600">Me</span>
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
//                 <img 
//                   src={aboutData.image}
//                   alt="My Profile"
//                   className="object-cover mt-6"
//                 />
//               </div>
//             </div>
//             <div className="space-y-6">
//               <p className="text-lg text-gray-700 leading-relaxed">
//                    {/* I'm a passionate Full Stack Developer who loves building websites and web applications that are simple, useful, and easy to use. I'm learning and working with frontend and backend technologies like React, Node.js, and MongoDB. */}
//                    {aboutData.description1}
//               </p>
              
//               <p className="text-lg text-gray-700 leading-relaxed">
//                {/* I enjoy turning ideas into real projects and want to keep improving my skills by working on meaningful applications. Want to see what I've built? Check out my projects below! */}
//                  {aboutData.description2}
//               </p>
              
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Want to see what I've built? Check out my{' '}
//                 <button
//                   onClick={() => scrollSection('projects')}
//                   className="text-blue-600 hover:text-blue-800 underline font-semibold transition-colors duration-300"
//                 >
//                   projects
//                 </button>
//                 {' '}to see my work in action.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Education Section */}
//       <section id="education" className="min-h-screen flex items-center py-13 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
//             My <span className="text-blue-600">Education</span>
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="flex flex-col justify-between mb-4">
//                 <h3 className="text-2xl font-bold text-gray-700 mb-2">Bachelor of Computer Applications (BCA)</h3>
//                 <span className="text-blue-600 font-semibold">2024 - 2027</span>
//               </div>
//               <p className="text-gray-600 mb-2">Maharishi University, Lucknow</p>
//               <p className="text-gray-700">
//                 Currently pursuing graduation with a focus on software development, web technologies, and database management.
//               </p>
//             </div>
            
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="flex flex-col justify-between mb-4">
//                 <h3 className="text-2xl font-bold text-gray-700 mb-2">Diploma in Software Development</h3>
//                 <span className="text-blue-600 font-semibold">2022 - Present</span>
//               </div>
//               <p className="text-gray-600 mb-2">NavGurukul, Pune – A Social Welfare Organization</p>
//               <p className="text-gray-700">
//                 Gaining hands-on experience in full-stack development with focus on HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB. Also developed soft skills like leadership, communication, and teamwork through real-world responsibilities and projects.
//               </p>
//             </div>
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="flex flex-col justify-between mb-4">
//                 <h3 className="text-2xl font-bold text-gray-700 mb-2">Higher Secondary Education</h3>
//                 <span className="text-blue-600 font-semibold">2020 - 2022</span>
//               </div>
//               <p className="text-gray-600 mb-2">Model, Inter college sitapur</p>
//               <p className="text-gray-700">
//                 Science stream with Mathematics, Physics, and Computer Science as major subjects.
//                 Achieved excellent grades and developed strong analytical thinking skills.
//               </p>
//             </div>

//             <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="flex flex-col justify-between mb-4">
//                 <h3 className="text-2xl font-bold text-gray-700 mb-2">Web Development</h3>
//                 <span className="text-blue-600 font-semibold">2023-2024</span>
//               </div>
//               <p className="text-gray-600 mb-2">Hyper Verge Academy</p>
//               <p className="text-gray-700">
//                 Intensive 12-week program focused on React ecosystem, state management, testing, and modern development practices.
//                 Completed capstone project with industry mentorship.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
//             My <span className="text-blue-600">Skills</span>
//           </h2>
          
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
//             {skills.map((skill, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-all duration-300 shadow-md">
//                 <span className="text-gray-900 font-semibold text-lg">{skill}</span>
//               </div>
//             ))}
//           </div>
          
//           <div className="mt-16 grid md:grid-cols-3 gap-8">
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="text-4xl mb-4">💻</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Frontend</h3>
//               <p className="text-gray-700">React, HTML5, CSS3, JavaScript, Tailwind CSS</p>
//             </div>
            
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="text-4xl mb-4">⚙️</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Backend</h3>
//               <p className="text-gray-700">Node.js, Express.js, REST APIs</p>
//             </div>
            
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="text-4xl mb-4">🗄️</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Database</h3>
//               <p className="text-gray-700">MongoDB</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
//             My <span className="text-blue-600">Projects</span>
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             {projects.map((project, index) => (
//               <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 shadow-md">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
//                 <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.technologies.map((tech, techIndex) => (
//                     <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
                
//                 <div className="flex gap-4">
//                   <a href={project.github} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300">
//                     <Github size={18} />
//                     Code
//                   </a>
//                   <a href={project.live} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300">
//                     <ExternalLink size={18} />
//                     Live Demo
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="min-h-screen flex items-center py-30 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
//             Get In <span className="text-blue-600">Touch</span>
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-12">
//             <div className="space-y-8">
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's work together!</h3>
//                 <p className="text-gray-700 text-lg mb-8">
//                   I'm always interested in new opportunities and exciting projects. 
//                   Feel free to reach out if you'd like to collaborate or just say hello!
//                 </p>
//               </div>
              
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-4 text-gray-700">
//                   <Mail className="text-blue-600" size={24} />
//                   <span>priyashukla22@navgurukul.org</span>
//                 </div>
//                 <div className="flex items-center space-x-4 text-gray-700">
//                   <Phone className="text-blue-600" size={24} />
//                   <span>+91 75250 98693</span>
//                 </div>
//                 <div className="flex items-center space-x-4 text-gray-700">
//                   <MapPin className="text-blue-600" size={24} />
//                   <span>Pune, Maharastra, India</span>
//                 </div>
//               </div>
              
//               <div className="flex space-x-6 pt-6">
//                 <a href="https://github.com/priyashukla622" className="bg-gray-200 p-3 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300">
//                   <Github size={24} />
//                 </a>
//                 <a href="https://www.linkedin.com/in/priya-shukla-b0a943280/" className="bg-gray-200 p-3 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300">
//                   <Linkedin size={24} />
//                 </a>
//                 <a href="https://x.com/?logout=1749146613934" className="bg-gray-200 p-3 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300">
//                   <Twitter size={24} />
//                 </a>
//               </div>
//             </div>
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
//               <div className="space-y-6">
//               <div>
//              <label className="block text-gray-900 font-semibold mb-2">Name</label>
//              <input type="text" name="name"
//                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
//                 placeholder="Your Name" />
//               </div>
//             <div>
//               <label className="block text-gray-900 font-semibold mb-2">Email</label>
//               <input type="email" name="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
//                placeholder="your.email@example.com" />
//            </div>
//        <div>
//       <label className="block text-gray-900 font-semibold mb-2">Message</label>
//       <textarea
//         name="message"
//         rows={4}
//         className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
//         placeholder="Your message..."
//       ></textarea>
//     </div>
//     <button
//       type="button"
//       className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
//     >
//       Send Message
//     </button>
//   </div>
//    </div>
//           </div>
//         </div>
//       </section>
//       {/* Footer */}
//       <footer className="bg-white border-t border-gray-300 py-8">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <p className="text-gray-600">
//             © 2025 Priya Shukla. Made with ❤️ using React & Tailwind CSS
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }







// import React, { useState, useEffect } from 'react';
// import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Menu, X, ExternalLink, Download } from 'lucide-react';

// export default function Portfolio() {
//   const [menuOpen, setmenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [homeData, setHomeData] = useState({});
//   const [aboutData, setAboutData] = useState({});
//   const [educationData, setEducationData] = useState([]);



//   // Fetch home data from API
//   useEffect(() => {
//     const fetchHomeData = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/api/getHome');
//         const result = await response.json();
//         console.log("Home API result:", result); 
//         if (result.message === "Home data fetch successfully" && result.data) {
//           setHomeData(result.data);
//         }
//       } catch (error) {
//         console.error('Error fetching home data:', error);
//       }
//     };
//     fetchHomeData();
//   }, []);

//   // about page 
//   useEffect(() => {
//     const fetchAboutData = async () => {
//       try {
//         console.log("Starting about API call..."); 
//         const response = await fetch("http://localhost:3000/api/getAbout");
//         console.log("About API response status:", response.status); 
//         const result = await response.json();
        
//         if (result.message === "about data fetch successfully" && result.data) {
//           setAboutData(result.data);
//         } else {
//           console.log("data failed"); 
//         }
//       } catch (error) {
//         console.error("Error fetching about data:", error);
//       }
//     };
//     fetchAboutData();
//   }, []);

// useEffect(() => {
//   const fetchEductionData = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/api/getEducation");
//       const result = await response.json();
//       console.log("Education API result:", result);

//       if (result.message === "Education data fetch successfully" && result.data) {
//         setEducationData(result.data);
//       } else {
//         console.log("Data fetch failed");
//       }
//     } catch (error) {
//       console.log("Error while fetching education data:", error);
//     }
//   };

//   fetchEductionData();
// }, []);




//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
//       const scrollPosition = window.scrollY + 100;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const offsetTop = element.offsetTop;
//           const offsetHeight = element.offsetHeight;
          
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
//   const scrollSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setmenuOpen(false);
//   };


//   const skills = [
//     'React',
//     'JavaScript',
//     'Node.js',
//     'Python',
//     'HTML/CSS',
//     'MongoDB',
//     'Tailwind CSS',
//     'Git'
//   ];

//   const projects = [
//     {
//       title: "Trivia Game",
//       description: "Created a two-player trivia game in JavaScript with dynamic question fetching, category selection, and a scoring system based on difficulty levels",
//       technologies: ["HTML", "CSS", "JavaScript"],
//       github: "https://github.com/priyashukla622/Trivia_Project",
//       live: "https://trivia-project-zeta.vercel.app/"
//     },
//     {
//       title: "Task Management Website",
//       description: "Built a secure task management system with JWT authentication, RESTful APIs for task operations, and robust client-server validation and error handling",
//       technologies: ["HTML", "CSS", "JavaScript", "Node.Js", "Express.js", "JWT", "MongoDB"],
//       github: "https://github.com/priyashukla622/TaskManagement",
//       live: "https://task-3-awwp.onrender.com/"
//     },
//     {
//       title: "SK Enterprises",
//       description: "Built a service and inventory management web app with a team using React for the front end and Node.js with Express for the back end. Made sure the app looks good on all devices and handles data smoothly.",
//       technologies: ["HTML","CSS","JavaScript", "React", "Node.js", "Express.js", "REST APIs", "MongoDB"],
//       github: "https://github.com/archana-singh-1/s-k-project",
//       live: "https://s-k-project-rwl3.vercel.app/"
//     },
//     {
//       title: "Food Website",
//       description: "Designed and developed a responsive food website to showcase various dishes and menu items. Included features like category-wise filtering, detailed dish descriptions, and a user-friendly.",
//       technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
//       github: "https://github.com/priyashukla622/Food_Website",
//       live: "https://food-website-1-r6gx.onrender.com/"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-200 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex-shrink-0">
//               <h1 className="text-xl font-bold text-gray-900">Portfolio</h1>
//             </div>
            
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 {['home', 'about', 'education', 'skills', 'projects', 'contact'].map((item) => (
//                   <button
//                     key={item}
//                     onClick={() => scrollSection(item)}
//                     className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
//                       activeSection === item
//                         ? 'bg-blue-600 text-white shadow-lg'
//                         : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
//                     }`}
//                   >
//                     {item.charAt(0).toUpperCase() + item.slice(1)}
//                   </button>
//                 ))}
//               </div>
//             </div>
            
//             <div className="md:hidden">
//               <button
//                 onClick={() => setmenuOpen(!menuOpen)}
//                 className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-200"
//               >
//                 {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {menuOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-lg border-t border-gray-200">
//               {['home', 'about', 'education', 'skills', 'projects', 'contact'].map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollSection(item)}
//                   className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
//                 >
//                   {item.charAt(0).toUpperCase() + item.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Home Section */}
//       <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="mb-7">
//             <div className="w-40 h-40 mx-auto mb-4 mt-7 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 shadow-xl">
//               <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden">
//                 {homeData.profileImage ? (
//                   <img 
//                     src={homeData.profileImage}
//                     alt="My Profile"
//                     className="object-cover mt-6"
//                   />
//                 ) : (
//                   <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
//                     <span className="text-gray-500">No Image</span>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//           <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
//             <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
//               {homeData.name || "Your Name"}
//             </span>
//           </h1>

//           <p className="text-xl md:text-1xl text-gray-600 mb-8 max-w-3xl mx-auto">
//             {homeData.title || "Your Title"}
//           </p>
//           <p className="text-base text-gray-500 mb-8 max-w-2xl mx-auto">
//             {homeData.description || "Your Description"}
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//             <button
//               onClick={() => scrollSection('contact')}
//               className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
//             >
//               Get In Touch
//             </button>

//             <a href="/public/Priya Resume.pdf" download>
//               <button className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2 justify-center shadow-md">
//                 <Download size={20} />
//                 Download CV
//               </button>
//             </a>
//           </div>
//           <div className="flex justify-center space-x-6">
//             <a href="https://github.com/priyashukla622" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
//               <Github size={24} />
//             </a>
//             <a href="https://www.linkedin.com/in/priya-shukla-b0a943280/" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
//               <Linkedin size={24} />
//             </a>
//             <a href="https://x.com/?logout=1749146613934" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
//               <Twitter size={24} />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
//             About <span className="text-blue-600">Me</span>
//           </h2>
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
//                 {aboutData.image ? (
//                   <img 
//                     src={aboutData.image}
//                     alt="About Me"
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                     <span className="text-gray-500">Loading image...</span>
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div className="space-y-6">
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 {aboutData.description1}
//               </p>
              
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 {aboutData.description2}
//               </p>
              
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Want to see what I've built? Check out my{' '}
//                 <button
//                   onClick={() => scrollSection('projects')}
//                   className="text-blue-600 hover:text-blue-800 underline font-semibold transition-colors duration-300"
//                 >
//                   projects
//                 </button>
//                 {' '}to see my work in action.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Education Section */}
//       <section id="education" className="min-h-screen flex items-center py-13 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
//             My <span className="text-blue-600">Education</span>
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
          
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="flex flex-col justify-between mb-4">
//                 <h3 className="text-2xl font-bold text-gray-700 mb-2">{educationData.degree}</h3>
//                 <span className="text-blue-600 font-semibold">{educationData.duration}</span>
//               </div>
//               <p className="text-gray-600 mb-2">{educationData.institution}</p>
//               <p className="text-gray-700">
//                 {educationData.description}
//               </p>
//             </div>
            
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="flex flex-col justify-between mb-4">
//                 <h3 className="text-2xl font-bold text-gray-700 mb-2">{educationData.degree}</h3>
//                 <span className="text-blue-600 font-semibold">{educationData.duration}</span>
//               </div>
//               <p className="text-gray-600 mb-2">{educationData.institution}</p>
//               <p className="text-gray-700">
//                 {educationData.description}
//               </p>
//             </div>
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="flex flex-col justify-between mb-4">
//                 <h3 className="text-2xl font-bold text-gray-700 mb-2">{educationData.degree}</h3>
//                 <span className="text-blue-600 font-semibold">{educationData.duration}</span>
//               </div>
//               <p className="text-gray-600 mb-2">{educationData.institution}</p>
//               <p className="text-gray-700">
//                 {educationData.description}
//               </p>
//             </div>

//             <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="flex flex-col justify-between mb-4">
//                 <h3 className="text-2xl font-bold text-gray-700 mb-2">{educationData.degree}</h3>
//                 <span className="text-blue-600 font-semibold">{educationData.duration}</span>
//               </div>
//               <p className="text-gray-600 mb-2">{educationData.institution}</p>
//               <p className="text-gray-700">
//                 {educationData.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       </section> 

//       {/* Skills Section */}
//       <section id="skills" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
//             My <span className="text-blue-600">Skills</span>
//           </h2>
          
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
//             {skills.map((skill, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-all duration-300 shadow-md">
//                 <span className="text-gray-900 font-semibold text-lg">{skill}</span>
//               </div>
//             ))}
//           </div>
          
//           <div className="mt-16 grid md:grid-cols-3 gap-8">
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="text-4xl mb-4">💻</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Frontend</h3>
//               <p className="text-gray-700">React, HTML5, CSS3, JavaScript, Tailwind CSS</p>
//             </div>
            
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="text-4xl mb-4">⚙️</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Backend</h3>
//               <p className="text-gray-700">Node.js, Express.js, REST APIs</p>
//             </div>
            
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-lg transition-all duration-300 shadow-md">
//               <div className="text-4xl mb-4">🗄️</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Database</h3>
//               <p className="text-gray-700">MongoDB</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
//             My <span className="text-blue-600">Projects</span>
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             {projects.map((project, index) => (
//               <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 shadow-md">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
//                 <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.technologies.map((tech, techIndex) => (
//                     <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
                
//                 <div className="flex gap-4">
//                   <a href={project.github} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300">
//                     <Github size={18} />
//                     Code
//                   </a>
//                   <a href={project.live} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300">
//                     <ExternalLink size={18} />
//                     Live Demo
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="min-h-screen flex items-center py-30 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
//             Get In <span className="text-blue-600">Touch</span>
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-12">
//             <div className="space-y-8">
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's work together!</h3>
//                 <p className="text-gray-700 text-lg mb-8">
//                   I'm always interested in new opportunities and exciting projects. 
//                   Feel free to reach out if you'd like to collaborate or just say hello!
//                 </p>
//               </div>
              
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-4 text-gray-700">
//                   <Mail className="text-blue-600" size={24} />
//                   <span>priyashukla22@navgurukul.org</span>
//                 </div>
//                 <div className="flex items-center space-x-4 text-gray-700">
//                   <Phone className="text-blue-600" size={24} />
//                   <span>+91 75250 98693</span>
//                 </div>
//                 <div className="flex items-center space-x-4 text-gray-700">
//                   <MapPin className="text-blue-600" size={24} />
//                   <span>Pune, Maharastra, India</span>
//                 </div>
//               </div>
              
//               <div className="flex space-x-6 pt-6">
//                 <a href="https://github.com/priyashukla622" className="bg-gray-200 p-3 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300">
//                   <Github size={24} />
//                 </a>
//                 <a href="https://www.linkedin.com/in/priya-shukla-b0a943280/" className="bg-gray-200 p-3 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300">
//                   <Linkedin size={24} />
//                 </a>
//                 <a href="https://x.com/?logout=1749146613934" className="bg-gray-200 p-3 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300">
//                   <Twitter size={24} />
//                 </a>
//               </div>
//             </div>
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
//               <div className="space-y-6">
//                 <div>
//                   <label className="block text-gray-900 font-semibold mb-2">Name</label>
//                   <input type="text" name="name"
//                     className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
//                     placeholder="Your Name" />
//                 </div>
//                 <div>
//                   <label className="block text-gray-900 font-semibold mb-2">Email</label>
//                   <input type="email" name="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
//                     placeholder="your.email@example.com" />
//                 </div>
//                 <div>
//                   <label className="block text-gray-900 font-semibold mb-2">Message</label>
//                   <textarea
//                     name="message"
//                     rows={4}
//                     className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
//                     placeholder="Your message..."
//                   ></textarea>
//                 </div>
//                 <button
//                   type="button"
//                   className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Footer */}
//       <footer className="bg-white border-t border-gray-300 py-8">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <p className="text-gray-600">
//             © 2025 Priya Shukla. Made with ❤️ using React & Tailwind CSS
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }




















import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Menu, X, ExternalLink, Download } from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setmenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [homeData, setHomeData] = useState({});
  const [aboutData, setAboutData] = useState({});
  const [educationData, setEducationData] = useState([]);
  const [skillsData, setSkillsData] = useState({ technical: [], categories: [] });
  const [projectsData, setProjectsData] = useState([]);
  

  // Fetch home data from API
  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/getHome');
        const result = await response.json();
        console.log("Home API result:", result); 
        if (result.message === "Home data fetch successfully" && result.data) {
          setHomeData(result.data);
        }
      } catch (error) {
        console.error('Error fetching home data:', error);
      }
    };
    fetchHomeData();
  }, []);

  // About API fetch
  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        console.log("Starting about API call..."); 
        const response = await fetch("http://localhost:3000/api/getAbout");
        console.log("About API response status:", response.status); 
        const result = await response.json();
        
        if (result.message === "about data fetch successfully" && result.data) {
          setAboutData(result.data);
        } else {
          console.log("data failed"); 
        }
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };
    fetchAboutData();
  }, []);


  // Education API Fetch
  useEffect(() => {
    const fetchEducationData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/getEducation");
        const result = await response.json();
        console.log("Education API result:", result);

        if (result.message === "eductaion find successfully" && result.data) {
          setEducationData(result.data);
        } else {
          console.log("Data fetch failed");
        }
      } catch (error) {
        console.log("Error while fetching education data:", error);
      }
    };

    fetchEducationData();
  }, []);

  // Fetch skills data from API
useEffect(() => {
  const fetchSkillsData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/getSkills");
      const result = await response.json();
      console.log("Skills API result:", result);
      if (result.message === "skills get successfully" && result.data) {
        setSkillsData(result.data);
      } else {
        console.log("Data fetch failed");
      }
    } catch (error) {
      console.log("Error while fetching skills data:", error);
    }
  };
  fetchSkillsData();
}, []);


useEffect(() => {
  const fetchProjectsData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/getProjects");
      const result = await response.json();
      console.log("Projects API result:", result);
      if (result.message === "project get successfully" && result.data) { 
        setProjectsData(result.data);
      } else {
        console.log("Data fetch failed");
      }
    } catch (error) { 
      console.log("Error while fetching projects data:", error); 
    }
  }
  fetchProjectsData();
}, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setmenuOpen(false);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
     {/* Navbar Section */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900">Portfolio</h1>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'about', 'education', 'skills', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollSection(item)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeSection === item
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setmenuOpen(!menuOpen)}
                className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-200"
              >
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-lg border-t border-gray-200">
              {['home', 'about', 'education', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollSection(item)}
                  className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-7">
            <div className="w-40 h-40 mx-auto mb-4 mt-7 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 shadow-xl">
              <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden">
                {homeData.profileImage ? (
                  <img 
                    src={homeData.profileImage}
                    alt="My Profile"
                    className="object-cover mt-6"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {homeData.name}
            </span>
          </h1>

          <p className="text-xl md:text-1xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {homeData.title}
          </p>
          <p className="text-base text-gray-500 mb-8 max-w-2xl mx-auto">
            {homeData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </button>

            <a href="/public/Priya Resume.pdf" download>
              <button className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2 justify-center shadow-md">
                <Download size={20} />
                Download CV
              </button>
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/priyashukla622" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/priya-shukla-b0a943280/" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="https://x.com/?logout=1749146613934" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
                {aboutData.image ? (
                  <img 
                    src={aboutData.image}
                    alt="About Me"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Loading image...</span>
                  </div>
                )}
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {aboutData.description1}
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {aboutData.description2}
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Want to see what I've built? Check out my{' '}
                <button
                  onClick={() => scrollSection('projects')}
                  className="text-blue-600 hover:text-blue-800 underline font-semibold transition-colors duration-300"
                >
                  projects
                </button>
                {' '}to see my work in action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen flex items-center py-13 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            My <span className="text-blue-600">Education</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {educationData.length > 0 ? (
              educationData.map((education, index) => (
                <div key={education._id || index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 shadow-md">
                  <div className="flex flex-col justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-700 mb-2">{education.degree}</h3>
                    <span className="text-blue-600 font-semibold">{education.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-2">{education.institution}</p>
                  <p className="text-gray-700">
                    {education.description}
                  </p>
                </div>
              ))
            ) : (
              <div className="col-span-2 text-center py-8">
                <p className="text-gray-500">Loading education data...</p>
              </div>
            )}
          </div>
        </div>
      </section> 

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            My <span className="text-blue-600">Skills</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {skillsData.technical.map((skill, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-all duration-300 shadow-md">
                <span className="text-gray-900 font-semibold text-lg">{skill}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8">
          {skillsData.categories.map((categories,index)=>(
            <div key={categories._id}
            className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-lg transition-all duration-300 shadow-md">
              <div className="text-4xl mb-4">{categories.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{categories.title}</h3>
              <p className="text-gray-700">{categories.skills}</p>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            My <span className="text-blue-600">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <Github size={18} />
                    Code
                  </a>
                  <a href={project.live} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's work together!</h3>
                <p className="text-gray-700 text-lg mb-8">
                  I'm always interested in new opportunities and exciting projects. 
                  Feel free to reach out if you'd like to collaborate or just say hello!
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-gray-700">
                  <Mail className="text-blue-600" size={24} />
                  <span>priyashukla22@navgurukul.org</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-700">
                  <Phone className="text-blue-600" size={24} />
                  <span>+91 75250 98693</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-700">
                  <MapPin className="text-blue-600" size={24} />
                  <span>Pune, Maharastra, India</span>
                </div>
              </div>
              
              <div className="flex space-x-6 pt-6">
                <a href="https://github.com/priyashukla622" className="bg-gray-200 p-3 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/priya-shukla-b0a943280/" className="bg-gray-200 p-3 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300">
                  <Linkedin size={24} />
                </a>
                <a href="https://x.com/?logout=1749146613934" className="bg-gray-200 p-3 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Name</label>
                  <input type="text" name="name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Email</label>
                  <input type="email" name="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com" />
                </div>
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-300 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            © 2025 Priya Shukla. Made with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

