
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const TeamSection = ({ limit = 4 }) => {
  const teamMembers = [
    {
      name: "Prof. Ramesh Kumar",
      role: "Principal Investigator",
      image: "https://i.pravatar.cc/300?img=1",
      bio: "Ph.D. from MIT with 15+ years of experience in laser materials processing.",
      email: "ramesh@iitb.ac.in"
    },
    {
      name: "Dr. Anjali Sharma",
      role: "Associate Professor",
      image: "https://i.pravatar.cc/300?img=5",
      bio: "Expert in laser additive manufacturing and process optimization.",
      email: "anjali@iitb.ac.in"
    },
    {
      name: "Dr. Rahul Verma",
      role: "Assistant Professor",
      image: "https://i.pravatar.cc/300?img=3",
      bio: "Specializes in computational modeling of laser-material interactions.",
      email: "rahul@iitb.ac.in"
    },
    {
      name: "Dr. Priya Singh",
      role: "Research Scientist",
      image: "https://i.pravatar.cc/300?img=10",
      bio: "Focuses on surface engineering and characterization techniques.",
      email: "priya@iitb.ac.in"
    },
    {
      name: "Vikram Mehta",
      role: "Ph.D. Student",
      image: "https://i.pravatar.cc/300?img=15",
      bio: "Researching novel metal matrix composites for aerospace applications.",
      email: "vikram@iitb.ac.in"
    },
    {
      name: "Neha Patel",
      role: "Ph.D. Student",
      image: "https://i.pravatar.cc/300?img=20",
      bio: "Working on laser-based micro and nanofabrication techniques.",
      email: "neha@iitb.ac.in"
    }
  ];

  // Limit the number of team members if specified
  const displayedMembers = limit ? teamMembers.slice(0, limit) : teamMembers;

  return (
    <section className="py-16 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="section-heading">Our Team</h2>
          <p className="max-w-3xl mx-auto text-gray-600 mt-6">
            Meet the researchers, scientists, and students driving innovation and excellence in laser materials processing at IIT Bombay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="pb-0">
                <div className="flex justify-center mb-4">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-center">{member.name}</CardTitle>
                <CardDescription className="text-center text-lamp-blue font-medium">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-2">
                <p className="text-sm text-gray-600">{member.bio}</p>
              </CardContent>
              <CardFooter className="flex justify-center pt-0">
                <a 
                  href={`mailto:${member.email}`} 
                  className="text-sm text-lamp-blue hover:text-lamp-red transition-colors"
                >
                  {member.email}
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {limit && teamMembers.length > limit && (
          <div className="mt-10 text-center">
            <Link 
              to="/team" 
              className="inline-block px-6 py-2 border border-lamp-blue text-lamp-blue hover:bg-lamp-blue hover:text-white transition-colors rounded-md"
            >
              View All Team Members
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
