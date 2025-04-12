
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { GraduationCap, FileText, Calculator, BriefcaseMedical } from "lucide-react";

const StudentsSection = () => {
  const opportunities = [
    {
      title: "Ph.D. Program",
      description: "Join our team as a Ph.D. student to conduct cutting-edge research in laser materials processing under expert guidance.",
      requirements: [
        "M.Tech/M.E. in Mechanical/Materials/Manufacturing Engineering or related fields",
        "Strong academic record with minimum 65% marks or equivalent CGPA",
        "Interest in laser materials processing and advanced manufacturing",
        "Experience with experimental research and material characterization is preferred"
      ],
      link: "#phd-application"
    },
    {
      title: "M.Tech Project",
      description: "We offer challenging and innovative M.Tech projects in various aspects of laser materials processing.",
      requirements: [
        "Enrolled in M.Tech/M.E. program at IIT Bombay or other recognized institutions",
        "Background in mechanical, materials, or manufacturing engineering",
        "Strong interest in experimental research",
        "Ability to commit full-time to the project for the required duration"
      ],
      link: "#mtech-projects"
    },
    {
      title: "B.Tech Project",
      description: "Final year undergraduate students can undertake projects in our lab to gain research experience.",
      requirements: [
        "Final year B.Tech/B.E. student with good academic standing",
        "Basic knowledge of materials science and manufacturing processes",
        "Willingness to learn new experimental techniques",
        "Available for at least one semester of project work"
      ],
      link: "#btech-projects"
    },
    {
      title: "Summer Internship",
      description: "Limited summer internship positions for highly motivated undergraduate students.",
      requirements: [
        "Undergraduate students in 2nd/3rd year of engineering programs",
        "Strong academic record",
        "Specific interest in laser processing or advanced manufacturing",
        "Available for 2-3 months during summer break"
      ],
      link: "#summer-internships"
    }
  ];

  const resources = {
    courses: [
      {
        code: "ME652",
        title: "Advanced Manufacturing Processes",
        description: "Covers laser manufacturing, additive processes, and advanced material processing techniques.",
        semester: "Autumn"
      },
      {
        code: "ME754",
        title: "Laser Materials Processing",
        description: "In-depth study of laser-material interaction, process parameters, and applications.",
        semester: "Spring"
      },
      {
        code: "MM621",
        title: "Advanced Materials Characterization",
        description: "Techniques for analyzing microstructure and properties of processed materials.",
        semester: "Autumn"
      },
      {
        code: "ME701",
        title: "Additive Manufacturing",
        description: "Principles and applications of various additive manufacturing techniques.",
        semester: "Spring"
      }
    ],
    faqs: [
      {
        question: "How can I apply for a Ph.D. position in your lab?",
        answer: "Applications for Ph.D. positions must be made through the IIT Bombay admissions portal. After applying, mention your interest in LAMP in your research statement and contact Prof. Kumar directly."
      },
      {
        question: "Do you accept international students?",
        answer: "Yes, we welcome international students through proper institutional channels. International applicants should review the international admissions requirements on the IIT Bombay website."
      },
      {
        question: "Is funding available for research students?",
        answer: "Ph.D. students typically receive fellowships through IIT Bombay or external funding agencies. Project-specific funding may also be available for exceptional candidates."
      },
      {
        question: "What skills should I develop to prepare for research in your lab?",
        answer: "Programming (MATLAB/Python), CAD skills, basic experimental techniques, and material characterization knowledge are highly valuable. Familiarity with additive manufacturing processes is also helpful."
      }
    ]
  };

  return (
    <section className="py-16 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="section-heading">For Prospective Students</h2>
          <p className="max-w-3xl mx-auto text-gray-600 mt-6">
            We are always looking for talented and motivated students to join our team and contribute to advancing the field of laser materials processing.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-lamp-blue mb-6 flex items-center">
            <GraduationCap className="mr-2 h-6 w-6" />
            Research Opportunities
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-gray-600 mb-4">{opportunity.description}</p>
                  <div className="mt-auto">
                    <h4 className="font-medium text-sm text-lamp-blue mb-2">Requirements:</h4>
                    <ul className="text-sm space-y-1">
                      {opportunity.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-lamp-red mt-1.5 mr-2"></span>
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                    <a 
                      href={opportunity.link}
                      className="inline-block mt-4 text-sm text-lamp-blue hover:text-lamp-red transition-colors"
                    >
                      Learn more →
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="courses">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="courses" className="flex items-center gap-2">
                <FileText className="h-4 w-4" /> Relevant Courses
              </TabsTrigger>
              <TabsTrigger value="faqs" className="flex items-center gap-2">
                <Calculator className="h-4 w-4" /> FAQs
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="courses">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resources.courses.map((course, idx) => (
                  <Card key={idx} className="border-l-2 border-lamp-blue">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold">{course.code}: {course.title}</h4>
                        <Badge variant="outline">{course.semester}</Badge>
                      </div>
                      <p className="text-sm text-gray-600">{course.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="faqs">
              <div className="space-y-4">
                {resources.faqs.map((faq, idx) => (
                  <Card key={idx}>
                    <CardContent className="p-4">
                      <h4 className="font-medium text-lamp-blue mb-1">{faq.question}</h4>
                      <p className="text-sm text-gray-600">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-lamp-blue mb-4 flex items-center">
              <BriefcaseMedical className="mr-2 h-5 w-5" />
              How to Apply
            </h3>
            <p className="text-gray-600 mb-6">
              Interested in joining our lab? Please review the specific requirements for your program of interest and follow these steps:
            </p>
            <ol className="space-y-3 text-gray-700 list-decimal pl-5 mb-6">
              <li>Review the IIT Bombay admissions requirements and deadlines for your desired program</li>
              <li>Complete your application through the official IIT Bombay admissions portal</li>
              <li>Send your CV, academic transcripts, and a brief research statement to lamp@iitb.ac.in</li>
              <li>Mention specific research areas you are interested in from our ongoing projects</li>
            </ol>
            <Link 
              to="/students" 
              className="bg-lamp-blue hover:bg-lamp-darkBlue text-white px-6 py-2 rounded-md transition-colors inline-block"
            >
              Detailed Application Guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentsSection;
