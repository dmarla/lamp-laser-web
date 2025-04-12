
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, FileText, Award } from "lucide-react";

const PublicationsSection = ({ limit = 5 }) => {
  const publications = {
    recent: [
      {
        title: "Laser surface texturing for enhanced tribological properties of titanium alloys",
        authors: "Kumar R., Sharma A., Singh P.",
        journal: "Journal of Materials Processing Technology",
        year: "2023",
        doi: "10.1016/j.jmatprotec.2023.01.015",
        type: "journal"
      },
      {
        title: "Selective laser melting of nickel-based superalloys: Process optimization and microstructural evolution",
        authors: "Verma R., Mehta V., Kumar R.",
        journal: "Additive Manufacturing",
        year: "2023",
        doi: "10.1016/j.addma.2023.02.008",
        type: "journal"
      },
      {
        title: "Ultrafast laser-induced periodic surface structures: Formation mechanisms and applications",
        authors: "Singh P., Patel N., Kumar R.",
        journal: "Applied Surface Science",
        year: "2022",
        doi: "10.1016/j.apsusc.2022.08.121",
        type: "journal"
      },
      {
        title: "Direct laser interference patterning for surface functionalization of biomedical implants",
        authors: "Sharma A., Kumar R., Patel N.",
        conference: "Proceedings of the International Conference on Advanced Manufacturing",
        year: "2022",
        doi: "10.1109/ICAM.2022.9876543",
        type: "conference"
      },
      {
        title: "Computational modeling of melt pool dynamics in laser powder bed fusion processes",
        authors: "Verma R., Kumar R.",
        journal: "Journal of Manufacturing Science and Engineering",
        year: "2022",
        doi: "10.1115/1.4053678",
        type: "journal"
      },
      {
        title: "Novel gradient functional materials through directed energy deposition: Challenges and opportunities",
        authors: "Kumar R., Mehta V., Sharma A.",
        journal: "Materials & Design",
        year: "2021",
        doi: "10.1016/j.matdes.2021.109876",
        type: "journal"
      }
    ],
    highlighted: [
      {
        title: "Hybrid laser manufacturing of metal matrix nanocomposites with tailored properties",
        authors: "Kumar R., Sharma A., Verma R.",
        journal: "Nature Materials",
        year: "2022",
        doi: "10.1038/s41563-022-01234-0",
        type: "journal",
        impact: "Impact Factor: 43.841"
      },
      {
        title: "Ultrafast laser-enabled multifunctional surfaces for advanced photonic applications",
        authors: "Singh P., Kumar R.",
        journal: "Science Advances",
        year: "2021",
        doi: "10.1126/sciadv.abd1234",
        type: "journal",
        impact: "Impact Factor: 13.116"
      },
      {
        title: "Selective laser melting of biodegradable magnesium alloys for personalized medical implants",
        authors: "Sharma A., Patel N., Kumar R.",
        journal: "Acta Biomaterialia",
        year: "2022",
        doi: "10.1016/j.actbio.2022.03.012",
        type: "journal",
        impact: "Impact Factor: 8.947"
      }
    ],
    patents: [
      {
        title: "Method and apparatus for laser-assisted manufacturing of gradient functional materials",
        inventors: "Kumar R., Sharma A.",
        number: "US Patent 11,325,876",
        year: "2023",
        status: "Granted"
      },
      {
        title: "Surface texturing method using interference of ultrafast laser beams",
        inventors: "Singh P., Kumar R.",
        number: "Indian Patent 123456",
        year: "2022",
        status: "Filed"
      }
    ]
  };

  // Limit the number of publications if specified
  const limitedPublications = {
    recent: limit ? publications.recent.slice(0, limit) : publications.recent,
    highlighted: publications.highlighted,
    patents: publications.patents
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="section-heading">Publications</h2>
          <p className="max-w-3xl mx-auto text-gray-600 mt-6">
            Our research findings are published in leading scientific journals and presented at international conferences.
          </p>
        </div>

        <Tabs defaultValue="recent" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="recent" className="flex items-center gap-2">
              <FileText className="h-4 w-4" /> Recent
            </TabsTrigger>
            <TabsTrigger value="highlighted" className="flex items-center gap-2">
              <Award className="h-4 w-4" /> Highlighted
            </TabsTrigger>
            <TabsTrigger value="patents" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> Patents
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="recent">
            <div className="space-y-4 mt-4">
              {limitedPublications.recent.map((pub, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lamp-blue mb-1">{pub.title}</h3>
                    <p className="text-gray-800 text-sm">{pub.authors}</p>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-gray-600 text-sm">
                        {pub.journal || pub.conference}, {pub.year}
                      </p>
                      <Badge variant="outline" className="bg-lamp-blue/5">
                        {pub.type === "journal" ? "Journal" : "Conference"}
                      </Badge>
                    </div>
                    <a 
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-xs text-lamp-blue hover:underline mt-1 inline-block"
                    >
                      {pub.doi}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="highlighted">
            <div className="space-y-4 mt-4">
              {limitedPublications.highlighted.map((pub, index) => (
                <Card key={index} className="border-l-4 border-lamp-red">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lamp-blue mb-1">{pub.title}</h3>
                    <p className="text-gray-800 text-sm">{pub.authors}</p>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-gray-600 text-sm">
                        {pub.journal}, {pub.year}
                      </p>
                      <Badge className="bg-lamp-red text-white">
                        {pub.impact}
                      </Badge>
                    </div>
                    <a 
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-xs text-lamp-blue hover:underline mt-1 inline-block"
                    >
                      {pub.doi}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="patents">
            <div className="space-y-4 mt-4">
              {limitedPublications.patents.map((patent, index) => (
                <Card key={index}>
                  <CardHeader className="p-4">
                    <h3 className="font-semibold text-lamp-blue">{patent.title}</h3>
                    <div className="text-sm text-gray-600">
                      <p>Inventors: {patent.inventors}</p>
                      <p>Patent Number: {patent.number}</p>
                      <div className="flex justify-between mt-1">
                        <span>Year: {patent.year}</span>
                        <Badge variant={patent.status === "Granted" ? "default" : "outline"} className={patent.status === "Granted" ? "bg-green-600" : ""}>
                          {patent.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {limit && publications.recent.length > limit && (
          <div className="mt-10 text-center">
            <Link 
              to="/publications" 
              className="inline-flex items-center text-lamp-blue hover:text-lamp-red transition-colors font-medium"
            >
              View complete publication list <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default PublicationsSection;
