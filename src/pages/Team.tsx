
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Team = () => {
  const faculty = [
    {
      name: "Prof. Ramesh Kumar",
      role: "Principal Investigator",
      image: "https://i.pravatar.cc/300?img=1",
      bio: "Ph.D. from MIT with 15+ years of experience in laser materials processing. His research focuses on laser-material interactions and advanced manufacturing techniques.",
      education: "Ph.D., Mechanical Engineering, MIT",
      email: "ramesh@iitb.ac.in",
      phone: "+91 (22) 2576 7890",
      publications: 85,
      patents: 12
    },
    {
      name: "Dr. Anjali Sharma",
      role: "Associate Professor",
      image: "https://i.pravatar.cc/300?img=5",
      bio: "Expert in laser additive manufacturing and process optimization. Dr. Sharma leads projects on novel materials development and sustainable manufacturing.",
      education: "Ph.D., Materials Science, University of Cambridge",
      email: "anjali@iitb.ac.in",
      phone: "+91 (22) 2576 7891",
      publications: 42,
      patents: 5
    },
    {
      name: "Dr. Rahul Verma",
      role: "Assistant Professor",
      image: "https://i.pravatar.cc/300?img=3",
      bio: "Specializes in computational modeling of laser-material interactions. His work has been pivotal in developing predictive models for additive manufacturing processes.",
      education: "Ph.D., Mechanical Engineering, Stanford University",
      email: "rahul@iitb.ac.in",
      phone: "+91 (22) 2576 7892",
      publications: 28,
      patents: 3
    },
    {
      name: "Dr. Priya Singh",
      role: "Research Scientist",
      image: "https://i.pravatar.cc/300?img=10",
      bio: "Focuses on surface engineering and characterization techniques. Dr. Singh has extensive experience in laser surface texturing for tribological applications.",
      education: "Ph.D., Materials Engineering, IIT Kanpur",
      email: "priya@iitb.ac.in",
      phone: "+91 (22) 2576 7893",
      publications: 31,
      patents: 4
    }
  ];
  
  const phd = [
    {
      name: "Vikram Mehta",
      image: "https://i.pravatar.cc/300?img=15",
      research: "Novel metal matrix composites for aerospace applications",
      year: "3rd year",
      email: "vikram@iitb.ac.in"
    },
    {
      name: "Neha Patel",
      image: "https://i.pravatar.cc/300?img=20",
      research: "Laser-based micro and nanofabrication techniques",
      year: "2nd year",
      email: "neha@iitb.ac.in"
    },
    {
      name: "Arun Sharma",
      image: "https://i.pravatar.cc/300?img=32",
      research: "Process monitoring in laser powder bed fusion",
      year: "4th year",
      email: "arun@iitb.ac.in"
    },
    {
      name: "Meera Gupta",
      image: "https://i.pravatar.cc/300?img=24",
      research: "Laser surface functionalization for biomedical devices",
      year: "2nd year",
      email: "meera@iitb.ac.in"
    },
    {
      name: "Raj Patel",
      image: "https://i.pravatar.cc/300?img=33",
      research: "High entropy alloys via laser additive manufacturing",
      year: "1st year",
      email: "raj@iitb.ac.in"
    },
    {
      name: "Divya Khanna",
      image: "https://i.pravatar.cc/300?img=25",
      research: "In-situ alloying during direct energy deposition",
      year: "3rd year",
      email: "divya@iitb.ac.in"
    }
  ];
  
  const mtech = [
    {
      name: "Ankit Singh",
      image: "https://i.pravatar.cc/300?img=60",
      project: "Optimization of laser cutting parameters for composite materials",
      email: "ankit@iitb.ac.in"
    },
    {
      name: "Priya Desai",
      image: "https://i.pravatar.cc/300?img=44",
      project: "Effect of laser surface treatments on fatigue life of aluminum alloys",
      email: "priya.d@iitb.ac.in"
    },
    {
      name: "Rohit Sharma",
      image: "https://i.pravatar.cc/300?img=65",
      project: "Development of laser-based joining techniques for dissimilar materials",
      email: "rohit.s@iitb.ac.in"
    },
    {
      name: "Sneha Joshi",
      image: "https://i.pravatar.cc/300?img=46",
      project: "Characterization of residual stresses in laser additive manufactured parts",
      email: "sneha.j@iitb.ac.in"
    }
  ];
  
  const alumni = [
    {
      name: "Dr. Sanjay Reddy",
      degree: "Ph.D. (2021)",
      current: "Research Scientist, GE Research"
    },
    {
      name: "Dr. Ananya Kapoor",
      degree: "Ph.D. (2020)",
      current: "Assistant Professor, IIT Delhi"
    },
    {
      name: "Dr. Vijay Kumar",
      degree: "Ph.D. (2019)",
      current: "Research Engineer, DRDO"
    },
    {
      name: "Dr. Mohan Rao",
      degree: "Ph.D. (2018)",
      current: "Senior Researcher, BARC"
    },
    {
      name: "Dr. Kavita Patel",
      degree: "Ph.D. (2017)",
      current: "Associate Professor, IISc Bangalore"
    },
    {
      name: "Aditya Mishra",
      degree: "M.Tech (2021)",
      current: "Ph.D. Student, ETH Zurich"
    },
    {
      name: "Rajesh Kumar",
      degree: "M.Tech (2020)",
      current: "Process Engineer, Tata Steel"
    },
    {
      name: "Meena Sharma",
      degree: "M.Tech (2020)",
      current: "Research Associate, CSIR-NCL"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-lamp-blue mb-4">Our Team</h1>
            <p className="text-xl text-gray-600">
              The LAMP team consists of dedicated faculty, researchers, and students working together to advance the field of laser materials processing.
            </p>
          </div>
        </div>
        
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-lamp-blue mb-8">Faculty & Research Scientists</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faculty.map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 p-6 flex justify-center items-start bg-lamp-blue/5">
                      <Avatar className="h-32 w-32">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-lamp-blue font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 mb-4">{member.bio}</p>
                      <div className="space-y-1 text-sm mb-4">
                        <p><span className="font-medium">Education:</span> {member.education}</p>
                        <p>
                          <span className="font-medium">Contact:</span>{" "}
                          <a href={`mailto:${member.email}`} className="text-lamp-blue hover:underline">{member.email}</a>
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-center">
                          <span className="block text-xl font-bold text-lamp-blue">{member.publications}</span>
                          <span className="text-xs text-gray-500">Publications</span>
                        </div>
                        <div className="text-center">
                          <span className="block text-xl font-bold text-lamp-red">{member.patents}</span>
                          <span className="text-xs text-gray-500">Patents</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 gradient-bg">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-lamp-blue mb-8">Students & Researchers</h2>
            
            <Tabs defaultValue="phd" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="phd">Ph.D. Students</TabsTrigger>
                <TabsTrigger value="mtech">M.Tech Students</TabsTrigger>
                <TabsTrigger value="alumni">Alumni</TabsTrigger>
              </TabsList>
              
              <TabsContent value="phd" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {phd.map((student, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="flex justify-center mb-4">
                          <Avatar className="w-20 h-20">
                            <AvatarImage src={student.image} alt={student.name} />
                            <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                        </div>
                        <CardTitle className="text-center">{student.name}</CardTitle>
                        <CardDescription className="text-center text-lamp-blue font-medium">
                          {student.year} Ph.D. Student
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-sm text-gray-600 mb-3">{student.research}</p>
                        <a 
                          href={`mailto:${student.email}`}
                          className="text-sm text-lamp-blue hover:text-lamp-red transition-colors"
                        >
                          {student.email}
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="mtech" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mtech.map((student, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="flex justify-center mb-4">
                          <Avatar className="w-20 h-20">
                            <AvatarImage src={student.image} alt={student.name} />
                            <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                        </div>
                        <CardTitle className="text-center">{student.name}</CardTitle>
                        <CardDescription className="text-center text-lamp-blue font-medium">
                          M.Tech Student
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-sm text-gray-600 mb-3">{student.project}</p>
                        <a 
                          href={`mailto:${student.email}`}
                          className="text-sm text-lamp-blue hover:text-lamp-red transition-colors"
                        >
                          {student.email}
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="alumni" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {alumni.map((alum, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <h4 className="font-medium">{alum.name}</h4>
                        <p className="text-sm text-gray-600">{alum.degree}</p>
                        <p className="text-sm text-lamp-blue mt-1">Currently: {alum.current}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-lamp-blue mb-8">Join Our Team</h2>
            <p className="text-lg text-gray-600 mb-6">
              We are always looking for talented and passionate individuals to join our research team.
              Whether you're interested in pursuing a Ph.D., M.Tech project, or a research position, we welcome your application.
            </p>
            <div className="flex justify-center">
              <a 
                href="/students"
                className="bg-lamp-blue hover:bg-lamp-darkBlue text-white px-6 py-3 rounded-md transition-colors"
              >
                Learn About Opportunities
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Team;
