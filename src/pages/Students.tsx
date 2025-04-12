
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StudentsSection from "@/components/StudentsSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, AlertTriangle, FileText, GraduationCap, Calendar, Users, BookOpen } from "lucide-react";

const Students = () => {
  const applicationProcesses = {
    phd: {
      eligibility: [
        "M.Tech/M.E. in Mechanical/Materials/Manufacturing Engineering or related fields",
        "Minimum 65% marks or equivalent CGPA in qualifying degree",
        "Valid GATE score (for Indian applicants)",
        "GRE score (for international applicants)",
        "Demonstrated research aptitude through publications or projects"
      ],
      process: [
        "Apply through the IIT Bombay admissions portal during the application window",
        "Specify interest in LAMP research in your application",
        "Shortlisted candidates will be called for written test and/or interview",
        "Selected candidates will be notified through the official admissions process",
        "Contact Prof. Ramesh Kumar directly after submitting your application"
      ],
      deadlines: {
        autumn: "March 31",
        spring: "September 30"
      },
      funding: "IIT Bombay provides fellowship of ₹31,000-35,000 per month for Ph.D. students along with contingency grants. Project-specific funding with higher stipends may be available for exceptional candidates."
    },
    mtech: {
      eligibility: [
        "Currently enrolled in M.Tech/M.E. program at IIT Bombay or other recognized institutions",
        "Background in mechanical, materials, or manufacturing engineering",
        "Good academic standing in the ongoing program",
        "Courses completed in materials science, manufacturing, or related fields",
        "Ability to commit full-time to the project for the required duration"
      ],
      process: [
        "Review ongoing projects on our website",
        "Contact relevant faculty member with your CV and interest areas",
        "Interview with potential project supervisor",
        "Follow your institution's procedures for project registration"
      ],
      timeline: "Project allocation typically occurs at the beginning of each semester. Applications should be submitted at least one month before the semester starts."
    },
    btech: {
      eligibility: [
        "Final year B.Tech/B.E. student with good academic standing",
        "Completed relevant coursework in materials, manufacturing, or mechanical engineering",
        "Basic knowledge of materials characterization techniques",
        "Programming skills (MATLAB, Python) are beneficial"
      ],
      process: [
        "Contact lab faculty with your CV and academic transcript",
        "Discuss potential project topics aligned with ongoing research",
        "Submit a brief project proposal if requested",
        "Follow your institution's BTP/final year project registration procedures"
      ]
    },
    internship: {
      eligibility: [
        "Undergraduate students in 2nd/3rd year of engineering programs",
        "Strong academic record (preferably 8.0+ CGPA or 80%+ marks)",
        "Relevant coursework in engineering materials or manufacturing",
        "Available for minimum 8 weeks during summer break"
      ],
      process: [
        "Applications open in January each year",
        "Submit CV, transcript, and statement of interest via the online form",
        "Shortlisted candidates will be contacted for interviews",
        "Limited positions available, highly competitive selection"
      ],
      deadline: "February 28 for summer internships starting in May"
    }
  };

  const currentProjects = [
    {
      title: "Femtosecond Laser Surface Engineering for Biomedical Applications",
      supervisor: "Dr. Priya Singh",
      type: "Ph.D./M.Tech",
      description: "Development of bioactive surface structures on medical-grade titanium alloys using ultrafast laser processing. The project involves process optimization, surface characterization, and in-vitro biocompatibility testing.",
      requirements: ["Strong background in materials science", "Interest in biomedical applications", "Experience with surface characterization techniques"]
    },
    {
      title: "Process Monitoring in Laser Powder Bed Fusion",
      supervisor: "Dr. Rahul Verma",
      type: "Ph.D./M.Tech",
      description: "Design and implementation of multi-sensor monitoring approaches for defect detection in laser powder bed fusion processes. The project involves high-speed imaging, data analytics, and machine learning for process quality control.",
      requirements: ["Programming skills (Python/MATLAB)", "Knowledge of image processing", "Background in additive manufacturing"]
    },
    {
      title: "Novel Metal Matrix Nanocomposites via Laser Processing",
      supervisor: "Prof. Ramesh Kumar",
      type: "Ph.D.",
      description: "Development of aluminum-based nanocomposites with enhanced mechanical and thermal properties through laser-based manufacturing techniques. Focus on process-structure-property relationships and performance evaluation.",
      requirements: ["Strong metallurgy background", "Experience with mechanical testing", "Knowledge of composite materials"]
    },
    {
      title: "Optimization of Laser Parameters for Surface Texturing",
      supervisor: "Dr. Anjali Sharma",
      type: "M.Tech/B.Tech",
      description: "Experimental investigation of laser parameters for creating controlled surface textures on engineering materials. The project includes design of experiments, surface characterization, and property evaluation.",
      requirements: ["Interest in experimental work", "Basic knowledge of laser processing", "Data analysis skills"]
    }
  ];

  const courses = [
    {
      code: "ME652",
      title: "Advanced Manufacturing Processes",
      credits: 6,
      semester: "Autumn",
      description: "Covers conventional and non-conventional manufacturing processes with emphasis on process mechanics, capabilities, and limitations. Significant focus on laser-based manufacturing techniques.",
      instructor: "Prof. Ramesh Kumar"
    },
    {
      code: "ME754",
      title: "Laser Materials Processing",
      credits: 6,
      semester: "Spring",
      description: "Fundamentals of laser-matter interaction, process physics, and applications in cutting, welding, surface modification, and additive manufacturing.",
      instructor: "Dr. Priya Singh"
    },
    {
      code: "MM621",
      title: "Advanced Materials Characterization",
      credits: 6,
      semester: "Autumn",
      description: "Modern techniques for materials analysis including electron microscopy, X-ray diffraction, spectroscopy, and mechanical testing methodologies.",
      instructor: "Dr. Anjali Sharma"
    },
    {
      code: "ME701",
      title: "Additive Manufacturing",
      credits: 6,
      semester: "Spring",
      description: "Principles and applications of additive manufacturing technologies with focus on metal AM processes, design considerations, and quality control.",
      instructor: "Dr. Rahul Verma"
    },
    {
      code: "ME617",
      title: "Experimental Methods in Manufacturing Research",
      credits: 4,
      semester: "Autumn",
      description: "Design of experiments, instrumentation, data acquisition, and analysis techniques specifically for manufacturing research applications.",
      instructor: "Prof. Ramesh Kumar"
    },
    {
      code: "MM634",
      title: "Surface Engineering",
      credits: 6,
      semester: "Spring",
      description: "Science and technology of surface modification techniques to enhance material properties for specific applications.",
      instructor: "Dr. Priya Singh"
    }
  ];

  const faqs = [
    {
      question: "How can I apply for a Ph.D. position in LAMP?",
      answer: "Applications for Ph.D. positions must be made through the IIT Bombay admissions portal during the official application window. After applying, you should mention your interest in LAMP in your research statement and directly contact Prof. Kumar with your application details."
    },
    {
      question: "Is funding available for research students?",
      answer: "Yes, Ph.D. students typically receive fellowships through IIT Bombay or external funding agencies. The standard institute fellowship is ₹31,000-35,000 per month plus contingency grants. Project-specific funding with higher stipends may be available for exceptional candidates."
    },
    {
      question: "Do you accept international students?",
      answer: "Yes, we welcome international students through proper institutional channels. International applicants should review the international admissions requirements on the IIT Bombay website and may need to provide additional documentation such as GRE scores."
    },
    {
      question: "Can I join as a visiting researcher?",
      answer: "We occasionally host visiting researchers and faculty for short-term collaborations. These arrangements are made on a case-by-case basis. Please contact the lab director with your CV, research interests, and proposed duration of visit."
    },
    {
      question: "What skills should I develop to prepare for research in your lab?",
      answer: "Programming skills (MATLAB/Python), familiarity with CAD software, basic experimental techniques, and material characterization knowledge are highly valuable. Courses in manufacturing processes, materials science, and laser technology will provide useful background."
    },
    {
      question: "How competitive is the selection process?",
      answer: "The selection process is highly competitive, especially for Ph.D. positions and summer internships. We typically receive over 100 applications for 2-3 Ph.D. positions each year. Strong academic credentials, relevant research experience, and alignment with ongoing projects significantly improve your chances."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-lamp-blue mb-4">For Prospective Students</h1>
            <p className="text-xl text-gray-600">
              LAMP offers various opportunities for students interested in laser-based manufacturing and materials research. 
              Learn about our admission processes, research projects, and resources for students.
            </p>
          </div>
        </div>
        
        <StudentsSection />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-heading mb-12">Application Process</h2>
            
            <Tabs defaultValue="phd" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="phd" className="text-sm">Ph.D. Program</TabsTrigger>
                <TabsTrigger value="mtech" className="text-sm">M.Tech Project</TabsTrigger>
                <TabsTrigger value="btech" className="text-sm">B.Tech Project</TabsTrigger>
                <TabsTrigger value="internship" className="text-sm">Internships</TabsTrigger>
              </TabsList>
              
              <TabsContent value="phd">
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <GraduationCap className="mr-2 h-5 w-5" />
                      Ph.D. Application Process
                    </CardTitle>
                    <CardDescription>
                      Join our doctoral program to conduct cutting-edge research in laser materials processing
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2 text-lamp-blue">Eligibility Criteria</h3>
                      <ul className="space-y-1">
                        {applicationProcesses.phd.eligibility.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 mr-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2 text-lamp-blue">Application Process</h3>
                      <ol className="space-y-1 list-decimal pl-5">
                        {applicationProcesses.phd.process.map((step, index) => (
                          <li key={index} className="pl-1">{step}</li>
                        ))}
                      </ol>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-2 text-lamp-blue flex items-center">
                          <Calendar className="h-4 w-4 mr-2" /> Application Deadlines
                        </h3>
                        <div className="bg-lamp-blue/5 p-4 rounded-md">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">Autumn Semester:</span>
                            <Badge variant="outline">{applicationProcesses.phd.deadlines.autumn}</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Spring Semester:</span>
                            <Badge variant="outline">{applicationProcesses.phd.deadlines.spring}</Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2 text-lamp-blue flex items-center">
                          <FileText className="h-4 w-4 mr-2" /> Funding Information
                        </h3>
                        <p className="text-sm text-gray-600 bg-lamp-blue/5 p-4 rounded-md">
                          {applicationProcesses.phd.funding}
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <div className="flex">
                        <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 shrink-0" />
                        <div>
                          <h4 className="font-medium">Important Note</h4>
                          <p className="text-sm text-gray-600">
                            The selection process is highly competitive. We recommend contacting potential supervisors before applying to discuss research interests and availability.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="mtech">
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="mr-2 h-5 w-5" />
                      M.Tech Project Opportunities
                    </CardTitle>
                    <CardDescription>
                      Conduct your master's thesis research in cutting-edge laser materials processing
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2 text-lamp-blue">Eligibility Criteria</h3>
                      <ul className="space-y-1">
                        {applicationProcesses.mtech.eligibility.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 mr-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2 text-lamp-blue">Application Process</h3>
                      <ol className="space-y-1 list-decimal pl-5">
                        {applicationProcesses.mtech.process.map((step, index) => (
                          <li key={index} className="pl-1">{step}</li>
                        ))}
                      </ol>
                    </div>
                    
                    <div className="bg-lamp-blue/5 p-4 rounded-md">
                      <h3 className="font-semibold mb-2 text-lamp-blue flex items-center">
                        <Calendar className="h-4 w-4 mr-2" /> Timeline
                      </h3>
                      <p className="text-sm text-gray-600">
                        {applicationProcesses.mtech.timeline}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="btech">
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="mr-2 h-5 w-5" />
                      B.Tech Project Opportunities
                    </CardTitle>
                    <CardDescription>
                      Conduct your undergraduate thesis research with us
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2 text-lamp-blue">Eligibility Criteria</h3>
                      <ul className="space-y-1">
                        {applicationProcesses.btech.eligibility.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 mr-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2 text-lamp-blue">Application Process</h3>
                      <ol className="space-y-1 list-decimal pl-5">
                        {applicationProcesses.btech.process.map((step, index) => (
                          <li key={index} className="pl-1">{step}</li>
                        ))}
                      </ol>
                    </div>
                    
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <div className="flex">
                        <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 shrink-0" />
                        <div>
                          <h4 className="font-medium">Important Note</h4>
                          <p className="text-sm text-gray-600">
                            B.Tech projects typically require at least one semester of commitment. Starting early (preferably in the pre-final year) allows for more comprehensive research.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="internship">
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="mr-2 h-5 w-5" />
                      Summer Internship Program
                    </CardTitle>
                    <CardDescription>
                      Gain hands-on research experience in our lab during summer break
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2 text-lamp-blue">Eligibility Criteria</h3>
                      <ul className="space-y-1">
                        {applicationProcesses.internship.eligibility.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 mr-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2 text-lamp-blue">Application Process</h3>
                      <ol className="space-y-1 list-decimal pl-5">
                        {applicationProcesses.internship.process.map((step, index) => (
                          <li key={index} className="pl-1">{step}</li>
                        ))}
                      </ol>
                    </div>
                    
                    <div className="bg-lamp-blue/5 p-4 rounded-md flex items-center justify-between">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-lamp-blue mr-3" />
                        <span className="font-medium">Application Deadline:</span>
                      </div>
                      <Badge variant="outline" className="text-lamp-blue">
                        {applicationProcesses.internship.deadline}
                      </Badge>
                    </div>
                    
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <div className="flex">
                        <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 shrink-0" />
                        <div>
                          <h4 className="font-medium">Important Note</h4>
                          <p className="text-sm text-gray-600">
                            Summer internships are highly competitive with limited positions available. Strong academic performance and relevant coursework significantly improve selection chances.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <section className="py-16 gradient-bg">
          <div className="container mx-auto px-4">
            <h2 className="section-heading mb-12">Available Research Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {currentProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg pr-2">{project.title}</CardTitle>
                      <Badge>{project.type}</Badge>
                    </div>
                    <CardDescription>Supervisor: {project.supervisor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Requirements:</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-600">
                        {project.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-gray-600 mb-3">
                Interested in a specific project? Contact the supervisor directly to discuss opportunities.
              </p>
              <a 
                href="mailto:lamp@iitb.ac.in?subject=Interest in Research Projects" 
                className="bg-lamp-blue hover:bg-lamp-darkBlue text-white px-6 py-3 rounded-md transition-colors inline-block"
              >
                Inquire About Projects
              </a>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-heading mb-12">Relevant Courses</h2>
            
            <div className="max-w-5xl mx-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Code</TableHead>
                    <TableHead>Course Title</TableHead>
                    <TableHead>Credits</TableHead>
                    <TableHead>Semester</TableHead>
                    <TableHead>Instructor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courses.map((course, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{course.code}</TableCell>
                      <TableCell>
                        <div>
                          <p>{course.title}</p>
                          <p className="text-xs text-gray-500">{course.description}</p>
                        </div>
                      </TableCell>
                      <TableCell>{course.credits}</TableCell>
                      <TableCell>{course.semester}</TableCell>
                      <TableCell>{course.instructor}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              <div className="mt-8 bg-lamp-blue/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-lamp-blue mb-3">Course Recommendations</h3>
                <p className="text-gray-600 mb-4">
                  Students interested in laser materials processing research should consider taking the following sequence of courses:
                </p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li className="text-gray-700">ME652: Advanced Manufacturing Processes (foundation course)</li>
                  <li className="text-gray-700">ME754: Laser Materials Processing (specialized knowledge)</li>
                  <li className="text-gray-700">MM621: Advanced Materials Characterization (experimental skills)</li>
                  <li className="text-gray-700">ME617: Experimental Methods in Manufacturing Research (research methods)</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 gradient-bg">
          <div className="container mx-auto px-4">
            <h2 className="section-heading mb-12">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <div className="mt-10 text-center">
                <p className="text-gray-600 mb-3">
                  Have more questions? Feel free to reach out to us directly.
                </p>
                <a 
                  href="mailto:lamp@iitb.ac.in?subject=Student Inquiry" 
                  className="bg-lamp-blue hover:bg-lamp-darkBlue text-white px-6 py-3 rounded-md transition-colors inline-block"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Students;
