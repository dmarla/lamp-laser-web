
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PublicationsSection from "@/components/PublicationsSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { BookOpen, FileText, Award, Search, Download } from "lucide-react";

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterYear, setFilterYear] = useState("all");

  // Data structure for publications
  const publications = {
    journal: [
      {
        title: "Laser surface texturing for enhanced tribological properties of titanium alloys",
        authors: "Kumar R., Sharma A., Singh P.",
        journal: "Journal of Materials Processing Technology",
        year: "2023",
        volume: "321",
        pages: "127-138",
        doi: "10.1016/j.jmatprotec.2023.01.015",
        abstract: "This paper investigates the effect of laser surface texturing on the tribological properties of Ti-6Al-4V alloys. Different texture patterns were created using a fiber laser system and evaluated for their friction and wear characteristics under various lubrication conditions. Results show significant improvement in wear resistance and reduced friction coefficient for optimized dimple patterns."
      },
      {
        title: "Selective laser melting of nickel-based superalloys: Process optimization and microstructural evolution",
        authors: "Verma R., Mehta V., Kumar R.",
        journal: "Additive Manufacturing",
        year: "2023",
        volume: "62",
        pages: "103271",
        doi: "10.1016/j.addma.2023.02.008",
        abstract: "The microstructural evolution and mechanical properties of Inconel 718 processed by selective laser melting are investigated. A process optimization approach based on energy density and scan strategy is presented to minimize defects and control grain structure. The relationship between processing parameters, resultant microstructure, and mechanical performance is established through comprehensive characterization."
      },
      {
        title: "Ultrafast laser-induced periodic surface structures: Formation mechanisms and applications",
        authors: "Singh P., Patel N., Kumar R.",
        journal: "Applied Surface Science",
        year: "2022",
        volume: "584",
        pages: "152723",
        doi: "10.1016/j.apsusc.2022.08.121",
        abstract: "This study examines the fundamental mechanisms behind the formation of laser-induced periodic surface structures (LIPSS) using femtosecond laser pulses. The influence of laser parameters, material properties, and ambient conditions on LIPSS characteristics is analyzed. Potential applications in surface wettability control, optical properties modification, and tribological enhancement are demonstrated."
      },
      {
        title: "Computational modeling of melt pool dynamics in laser powder bed fusion processes",
        authors: "Verma R., Kumar R.",
        journal: "Journal of Manufacturing Science and Engineering",
        year: "2022",
        volume: "144(6)",
        pages: "061009",
        doi: "10.1115/1.4053678",
        abstract: "A multi-physics computational model for predicting melt pool behavior during laser powder bed fusion is developed. The model incorporates powder dynamics, phase transitions, and fluid flow to predict key process outcomes. Experimental validation shows good agreement between predicted and measured melt pool dimensions and cooling rates across various processing conditions."
      },
      {
        title: "Novel gradient functional materials through directed energy deposition: Challenges and opportunities",
        authors: "Kumar R., Mehta V., Sharma A.",
        journal: "Materials & Design",
        year: "2021",
        volume: "210",
        pages: "109876",
        doi: "10.1016/j.matdes.2021.109876",
        abstract: "This review examines the recent advances in producing functionally graded materials using directed energy deposition processes. The paper discusses material compatibility issues, process control strategies, and characterization approaches specific to gradient structures. Current limitations and future research directions for industrial implementation are highlighted."
      },
      {
        title: "Hybrid laser manufacturing of metal matrix nanocomposites with tailored properties",
        authors: "Kumar R., Sharma A., Verma R.",
        journal: "Nature Materials",
        year: "2022",
        volume: "21",
        pages: "956-965",
        doi: "10.1038/s41563-022-01234-0",
        abstract: "A novel hybrid laser manufacturing approach combining in-situ alloying and nanoparticle integration is presented. The process enables precise control over nanoparticle distribution and interfacial characteristics, resulting in metal matrix nanocomposites with unprecedented property combinations. Applications in aerospace and automotive sectors are demonstrated with significant performance improvements."
      },
      {
        title: "Ultrafast laser-enabled multifunctional surfaces for advanced photonic applications",
        authors: "Singh P., Kumar R.",
        journal: "Science Advances",
        year: "2021",
        volume: "7(26)",
        pages: "eabd1234",
        doi: "10.1126/sciadv.abd1234",
        abstract: "This study demonstrates the creation of hierarchical surface structures with programmable optical properties using ultrafast laser processing. The surfaces exhibit simultaneous control over reflectivity, color, and polarization response. The underlying physical mechanisms are elucidated, and applications in security features, sensors, and display technologies are presented."
      },
      {
        title: "Selective laser melting of biodegradable magnesium alloys for personalized medical implants",
        authors: "Sharma A., Patel N., Kumar R.",
        journal: "Acta Biomaterialia",
        year: "2022",
        volume: "142",
        pages: "383-399",
        doi: "10.1016/j.actbio.2022.03.012",
        abstract: "Biodegradable magnesium alloys were successfully processed using selective laser melting for medical implant applications. Process parameters were optimized to achieve controlled degradation rates while maintaining mechanical integrity. In vitro and preliminary in vivo studies demonstrate biocompatibility and appropriate degradation behavior for orthopedic applications."
      }
    ],
    conference: [
      {
        title: "Direct laser interference patterning for surface functionalization of biomedical implants",
        authors: "Sharma A., Kumar R., Patel N.",
        conference: "International Conference on Advanced Manufacturing",
        year: "2022",
        location: "Singapore",
        pages: "312-318",
        doi: "10.1109/ICAM.2022.9876543",
        abstract: "This paper presents a direct laser interference patterning approach for creating controlled micro/nano topographies on biomedical implant surfaces. The process enables single-step creation of complex periodic patterns that enhance cell adhesion and tissue integration. Titanium and cobalt-chromium alloy implants with optimized surface patterns demonstrate improved osseointegration in preliminary studies."
      },
      {
        title: "In-situ monitoring of laser powder bed fusion using high-speed thermal imaging",
        authors: "Verma R., Singh P., Kumar R.",
        conference: "Laser Applications in Microelectronic and Optoelectronic Manufacturing",
        year: "2023",
        location: "San Francisco, USA",
        pages: "89-97",
        doi: "10.1117/12.2645321",
        abstract: "A high-speed thermal imaging system for real-time monitoring of laser powder bed fusion processes is presented. The system enables detection of process anomalies and defect formation through advanced image processing algorithms. Implementation of this monitoring approach has demonstrated significant improvements in part quality and process reliability."
      },
      {
        title: "Machine learning approaches for parameter optimization in laser-based manufacturing",
        authors: "Kumar R., Mehta V.",
        conference: "International Conference on Machine Learning in Manufacturing",
        year: "2022",
        location: "Munich, Germany",
        pages: "156-165",
        doi: "10.1007/978-3-030-89567-9_15",
        abstract: "This study demonstrates the application of machine learning algorithms for optimizing laser processing parameters across multiple manufacturing processes. A comparative analysis of supervised and reinforcement learning approaches is presented, showing significant reduction in parameter optimization time and improved process outcomes compared to traditional methods."
      },
      {
        title: "Development of laser-processed superhydrophobic surfaces for self-cleaning applications",
        authors: "Singh P., Kumar R.",
        conference: "International Conference on Surface Modification Technologies",
        year: "2021",
        location: "Tokyo, Japan",
        pages: "423-432",
        doi: "10.1016/j.surfcoat.2021.127654",
        abstract: "A single-step laser texturing method for creating durable superhydrophobic surfaces is presented. The process creates hierarchical micro/nano structures that exhibit water contact angles >160° with low sliding angles. The surfaces demonstrate excellent self-cleaning properties and durability in harsh environmental conditions, suitable for outdoor applications."
      }
    ],
    patents: [
      {
        title: "Method and apparatus for laser-assisted manufacturing of gradient functional materials",
        inventors: "Kumar R., Sharma A.",
        number: "US Patent 11,325,876",
        fillingDate: "March 15, 2021",
        issueDate: "May 10, 2023",
        status: "Granted"
      },
      {
        title: "Surface texturing method using interference of ultrafast laser beams",
        inventors: "Singh P., Kumar R.",
        number: "Indian Patent 123456",
        fillingDate: "June 22, 2021",
        issueDate: "",
        status: "Filed"
      },
      {
        title: "Biodegradable magnesium alloy implants manufactured by selective laser melting",
        inventors: "Sharma A., Kumar R., Patel N.",
        number: "US Patent Application 17/625,982",
        fillingDate: "January 8, 2022",
        issueDate: "",
        status: "Filed"
      },
      {
        title: "Process for manufacturing metal matrix nanocomposites with controlled nanoparticle distribution",
        inventors: "Kumar R., Verma R.",
        number: "European Patent EP3980152",
        fillingDate: "October 12, 2020",
        issueDate: "November 30, 2022",
        status: "Granted"
      }
    ]
  };

  const years = [...new Set([
    ...publications.journal.map(pub => pub.year),
    ...publications.conference.map(pub => pub.year)
  ])].sort((a, b) => b - a);

  // Filter publications based on search term and year
  const filteredJournalPubs = publications.journal.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          pub.authors.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = filterYear === "all" || pub.year === filterYear;
    return matchesSearch && matchesYear;
  });

  const filteredConferencePubs = publications.conference.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          pub.authors.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = filterYear === "all" || pub.year === filterYear;
    return matchesSearch && matchesYear;
  });

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-lamp-blue mb-4">Publications</h1>
            <p className="text-xl text-gray-600">
              Our research findings are published in leading scientific journals and presented at international conferences. 
              Browse our publications to learn more about our contributions to the field of laser materials processing.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto mb-10">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  placeholder="Search by title or author"
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="w-full md:w-48">
                <Select value={filterYear} onValueChange={setFilterYear}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    {years.map(year => (
                      <SelectItem key={year} value={year}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-3 gap-4 mb-8">
              <Card>
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <Award className="h-8 w-8 text-lamp-blue mb-2" />
                  <CardTitle className="text-3xl font-bold">{publications.journal.length}</CardTitle>
                  <p className="text-gray-600">Journal Articles</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <FileText className="h-8 w-8 text-lamp-blue mb-2" />
                  <CardTitle className="text-3xl font-bold">{publications.conference.length}</CardTitle>
                  <p className="text-gray-600">Conference Papers</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <BookOpen className="h-8 w-8 text-lamp-blue mb-2" />
                  <CardTitle className="text-3xl font-bold">{publications.patents.length}</CardTitle>
                  <p className="text-gray-600">Patents</p>
                </CardContent>
              </Card>
            </div>
            
            <h2 className="text-2xl font-bold text-lamp-blue mb-6 flex items-center">
              <Award className="mr-2 h-6 w-6" />
              Journal Publications
            </h2>
            
            {filteredJournalPubs.length > 0 ? (
              <div className="space-y-6 mb-12">
                {filteredJournalPubs.map((pub, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lamp-blue text-lg pr-4">{pub.title}</h3>
                        <Badge>{pub.year}</Badge>
                      </div>
                      <p className="text-gray-800 font-medium mb-2">{pub.authors}</p>
                      <p className="text-gray-600 italic mb-4">
                        {pub.journal}, Volume {pub.volume}, Pages {pub.pages}
                      </p>
                      <p className="text-gray-600 mb-4 text-sm">{pub.abstract}</p>
                      <div className="flex justify-between items-center">
                        <a 
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="text-lamp-blue hover:underline text-sm"
                        >
                          DOI: {pub.doi}
                        </a>
                        <a 
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-lamp-blue hover:text-lamp-red text-sm"
                        >
                          <Download className="h-4 w-4 mr-1" /> Access Publication
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 italic mb-8">No journal publications match your search criteria.</p>
            )}
            
            <h2 className="text-2xl font-bold text-lamp-blue mb-6 flex items-center">
              <FileText className="mr-2 h-6 w-6" />
              Conference Publications
            </h2>
            
            {filteredConferencePubs.length > 0 ? (
              <div className="space-y-6 mb-12">
                {filteredConferencePubs.map((pub, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lamp-blue text-lg pr-4">{pub.title}</h3>
                        <Badge>{pub.year}</Badge>
                      </div>
                      <p className="text-gray-800 font-medium mb-2">{pub.authors}</p>
                      <p className="text-gray-600 italic mb-1">
                        {pub.conference}, {pub.location}
                      </p>
                      <p className="text-gray-600 mb-4 text-sm">Pages {pub.pages}</p>
                      <p className="text-gray-600 mb-4 text-sm">{pub.abstract}</p>
                      <div className="flex justify-between items-center">
                        <a 
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="text-lamp-blue hover:underline text-sm"
                        >
                          DOI: {pub.doi}
                        </a>
                        <a 
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-lamp-blue hover:text-lamp-red text-sm"
                        >
                          <Download className="h-4 w-4 mr-1" /> Access Publication
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 italic mb-8">No conference publications match your search criteria.</p>
            )}
            
            <h2 className="text-2xl font-bold text-lamp-blue mb-6 flex items-center">
              <BookOpen className="mr-2 h-6 w-6" />
              Patents
            </h2>
            
            <div className="space-y-4 mb-12">
              {publications.patents.map((patent, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lamp-blue text-lg">{patent.title}</h3>
                      <Badge variant={patent.status === "Granted" ? "default" : "outline"} className={patent.status === "Granted" ? "bg-green-600" : ""}>
                        {patent.status}
                      </Badge>
                    </div>
                    <p className="text-gray-800 font-medium mb-4">Inventors: {patent.inventors}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <p><span className="font-medium">Patent Number:</span> {patent.number}</p>
                      <p><span className="font-medium">Filing Date:</span> {patent.fillingDate}</p>
                      {patent.issueDate && (
                        <p><span className="font-medium">Issue Date:</span> {patent.issueDate}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-lamp-blue/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-lamp-blue mb-3">Publication Metrics</h3>
              <p className="text-gray-600 mb-6">
                Our research output has been cited over 2,500 times in scientific literature, with an h-index of 32.
                We regularly publish in high-impact journals and collaborate with researchers from over 15 countries.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-lamp-blue">2,500+</p>
                  <p className="text-sm text-gray-600">Citations</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-lamp-blue">32</p>
                  <p className="text-sm text-gray-600">H-Index</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-lamp-blue">15+</p>
                  <p className="text-sm text-gray-600">Countries</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-lamp-blue">8</p>
                  <p className="text-sm text-gray-600">Patents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Publications;
