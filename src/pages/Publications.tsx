
import React, { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, ArrowUpRight } from 'lucide-react';

const Publications = () => {
  // Sample publications data
  const publications = [
    {
      id: 1,
      title: "Laser surface texturing for enhanced tribological properties of titanium implants",
      authors: ["A. Kumar", "S. Patel", "R. Singh", "M. Verma"],
      journal: "Journal of Materials Processing Technology",
      year: 2023,
      volume: 312,
      pages: "117645",
      doi: "10.1016/j.jmatprotec.2023.117645",
      type: "journal",
      tags: ["Surface Texturing", "Biomedical", "Titanium Alloys"],
      abstract: "This study explores the effect of laser surface texturing parameters on the tribological properties of titanium implants. Various micro-patterns were created using a femtosecond laser system, and their impact on wear resistance and biocompatibility was evaluated."
    },
    {
      id: 2,
      title: "Process optimization in selective laser melting of AlSi10Mg using machine learning approaches",
      authors: ["R. Singh", "P. Mehta", "K. Sharma"],
      journal: "Additive Manufacturing",
      year: 2022,
      volume: 58,
      pages: "102-118",
      doi: "10.1016/j.addma.2022.102945",
      type: "journal",
      tags: ["Additive Manufacturing", "Machine Learning", "Aluminum Alloys"],
      abstract: "A machine learning framework for optimizing selective laser melting process parameters for AlSi10Mg aluminum alloy is presented. The approach combines experimental data with predictive modeling to enhance mechanical properties and surface quality."
    },
    {
      id: 3,
      title: "Novel approach to direct laser interference patterning for functional surface creation",
      authors: ["M. Verma", "A. Kumar", "D. Patel"],
      conference: "International Conference on Laser Applications in Manufacturing",
      location: "Singapore",
      year: 2023,
      pages: "234-241",
      doi: "10.1109/ICLAM.2023.9876543",
      type: "conference",
      tags: ["Laser Interference", "Surface Functionalization"],
      abstract: "This paper presents a novel approach to direct laser interference patterning that enables rapid creation of functional surfaces with controlled wettability and optical properties. The method utilizes a custom-built optical setup with real-time monitoring capabilities."
    },
    {
      id: 4,
      title: "Microstructural evolution during laser powder bed fusion of nickel-based superalloys",
      authors: ["K. Sharma", "S. Patel", "P. Mehta"],
      journal: "Materials Science and Engineering: A",
      year: 2022,
      volume: 845,
      pages: "143294",
      doi: "10.1016/j.msea.2022.143294",
      type: "journal",
      tags: ["Powder Bed Fusion", "Superalloys", "Microstructure"],
      abstract: "The microstructural development during laser powder bed fusion of nickel-based superalloys is investigated using in-situ monitoring and post-process characterization. The relationship between process parameters, cooling rates, and resulting mechanical properties is established."
    },
    {
      id: 5,
      title: "Hybrid laser-arc welding of high-strength steels for automotive applications",
      authors: ["D. Patel", "R. Singh", "A. Kumar"],
      journal: "Journal of Laser Applications",
      year: 2023,
      volume: 35,
      pages: "012004",
      doi: "10.2351/1.5080553",
      type: "journal",
      tags: ["Hybrid Welding", "Automotive", "High-Strength Steels"],
      abstract: "A hybrid laser-arc welding process for joining advanced high-strength steels is developed. The synergistic effects of combining laser and arc heat sources are investigated to minimize distortion and enhance joint properties for automotive structural components."
    },
    {
      id: 6,
      title: "In-process monitoring of melt pool dynamics during selective laser melting",
      authors: ["P. Mehta", "K. Sharma", "M. Verma"],
      conference: "International Conference on Additive Manufacturing",
      location: "Barcelona, Spain",
      year: 2022,
      pages: "156-163",
      doi: "10.1007/978-3-030-95124-5_16",
      type: "conference",
      tags: ["Process Monitoring", "Melt Pool", "Selective Laser Melting"],
      abstract: "A high-speed imaging system for real-time monitoring of melt pool dynamics during selective laser melting is presented. The system enables detection of process anomalies and provides insights into the relationship between melt pool behavior and part quality."
    },
  ];

  // State for filtering and sorting
  const [filteredPublications, setFilteredPublications] = useState(publications);
  const [searchTerm, setSearchTerm] = useState('');
  const [yearFilter, setYearFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [sortBy, setSortBy] = useState('year');

  // Apply filters and sorting
  useEffect(() => {
    let filtered = [...publications];
    
    // Apply search term filter
    if (searchTerm) {
      filtered = filtered.filter(pub => 
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (pub.abstract && pub.abstract.toLowerCase().includes(searchTerm.toLowerCase())) ||
        pub.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Apply year filter
    if (yearFilter !== 'all') {
      filtered = filtered.filter(pub => pub.year.toString() === yearFilter);
    }
    
    // Apply type filter
    if (typeFilter !== 'all') {
      filtered = filtered.filter(pub => pub.type === typeFilter);
    }
    
    // Apply sorting
    if (sortBy === 'year') {
      filtered.sort((a, b) => b.year - a.year);
    } else if (sortBy === 'title') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }
    
    setFilteredPublications(filtered);
  }, [searchTerm, yearFilter, typeFilter, sortBy]);

  // Get unique years for filter dropdown
  const years = [...new Set(publications.map(pub => pub.year.toString()))].sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <>
      <Navbar />
      <main className="pt-16 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-lamp-blue mb-4">Publications</h1>
            <p className="text-xl text-gray-600">
              Our research findings are published in leading international journals and presented at prestigious conferences.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {/* Filters and Search */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
              <Input
                placeholder="Search publications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="md:col-span-2"
              />
              <Select value={yearFilter} onValueChange={setYearFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  {years.map(year => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Publication type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="journal">Journal Articles</SelectItem>
                  <SelectItem value="conference">Conference Papers</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Publications List */}
            <div className="space-y-6">
              {filteredPublications.length > 0 ? (
                filteredPublications.map((pub) => (
                  <Card key={pub.id} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl font-bold">{pub.title}</CardTitle>
                        <Badge variant="outline" className="bg-lamp-blue/10 text-lamp-blue">
                          {pub.year}
                        </Badge>
                      </div>
                      <CardDescription className="mt-1">
                        {pub.authors.join(", ")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">
                        {pub.type === 'journal' ? (
                          <>
                            <span className="font-medium">{pub.journal}</span>, {pub.volume}, {pub.pages}
                          </>
                        ) : (
                          <>
                            <span className="font-medium">{pub.conference}</span>, {pub.location}, pp. {pub.pages}
                          </>
                        )}
                      </p>
                      <p className="text-sm text-gray-700 mb-3">{pub.abstract}</p>
                      <div className="flex flex-wrap gap-2">
                        {pub.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="bg-gray-100">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4 bg-gray-50">
                      <div className="flex justify-between w-full">
                        <span className="text-sm text-gray-600">DOI: {pub.doi}</span>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            <ArrowUpRight size={14} /> Cite
                          </Button>
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            <Download size={14} /> PDF
                          </Button>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="text-center py-10 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">No publications match your search criteria.</p>
                  <Button variant="link" onClick={() => {
                    setSearchTerm('');
                    setYearFilter('all');
                    setTypeFilter('all');
                  }}>
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Publications;
