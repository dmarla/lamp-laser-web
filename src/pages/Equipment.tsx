
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EquipmentSection from "@/components/EquipmentSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Info, DollarSign, Microscope, Wrench } from "lucide-react";

const Equipment = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-lamp-blue mb-4">Research Equipment</h1>
            <p className="text-xl text-gray-600">
              LAMP is equipped with state-of-the-art laser systems and materials characterization facilities to conduct cutting-edge research in laser-based manufacturing and materials processing.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Info size={16} />
                    Equipment Specifications
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-md md:max-w-lg overflow-y-auto">
                  <div className="h-full py-6">
                    <h2 className="text-xl font-bold mb-4">Equipment Specifications</h2>
                    <Tabs defaultValue="lasers" className="w-full">
                      <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-4">
                        <TabsTrigger value="lasers">Laser Systems</TabsTrigger>
                        <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
                        <TabsTrigger value="characterization">Characterization</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="lasers">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>System</TableHead>
                              <TableHead>Specifications</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">IPG YLS-2000</TableCell>
                              <TableCell>
                                <ul className="list-disc pl-5 text-sm">
                                  <li>2kW maximum power</li>
                                  <li>1070nm wavelength</li>
                                  <li>100μm fiber delivery</li>
                                </ul>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Coherent Astrella</TableCell>
                              <TableCell>
                                <ul className="list-disc pl-5 text-sm">
                                  <li>7W average power</li>
                                  <li>800nm wavelength</li>
                                  <li>&lt;35fs pulse duration</li>
                                </ul>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">SPI G4 Pulsed</TableCell>
                              <TableCell>
                                <ul className="list-disc pl-5 text-sm">
                                  <li>50W average power</li>
                                  <li>1060nm wavelength</li>
                                  <li>Variable pulse (10-240ns)</li>
                                </ul>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TabsContent>
                      
                      <TabsContent value="manufacturing">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>System</TableHead>
                              <TableHead>Specifications</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">EOS M290 DMLS</TableCell>
                              <TableCell>
                                <ul className="list-disc pl-5 text-sm">
                                  <li>400W Yb-fiber laser</li>
                                  <li>250 x 250 x 325 mm build volume</li>
                                  <li>Supports Ti, Al, Ni, steel alloys</li>
                                </ul>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">5-axis Laser System</TableCell>
                              <TableCell>
                                <ul className="list-disc pl-5 text-sm">
                                  <li>5-axis motion (X, Y, Z, A, C)</li>
                                  <li>10μm positioning accuracy</li>
                                  <li>500 x 500 x 300 mm work envelope</li>
                                </ul>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TabsContent>
                      
                      <TabsContent value="characterization">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Equipment</TableHead>
                              <TableHead>Specifications</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">JEOL JSM-7600F</TableCell>
                              <TableCell>
                                <ul className="list-disc pl-5 text-sm">
                                  <li>0.8nm resolution at 15kV</li>
                                  <li>EDX detector</li>
                                  <li>EBSD capability</li>
                                </ul>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Bruker D8 Advance</TableCell>
                              <TableCell>
                                <ul className="list-disc pl-5 text-sm">
                                  <li>Cu-Kα radiation</li>
                                  <li>2θ range: 3-150°</li>
                                  <li>Temperature stage up to 1200°C</li>
                                </ul>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TabsContent>
                    </Tabs>
                  </div>
                </SheetContent>
              </Sheet>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Microscope size={16} />
                    Lab Facilities
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-md md:max-w-lg overflow-y-auto">
                  <div className="h-full py-6">
                    <h2 className="text-xl font-bold mb-4">Laboratory Facilities</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-lg">Laser Processing Lab</h3>
                        <p className="text-gray-600 mb-2">
                          Our main laser processing laboratory houses multiple laser systems, CNC workstations, and process monitoring equipment.
                        </p>
                        <h4 className="font-medium mt-3 mb-1">Features:</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600">
                          <li>Class 1 laser safety enclosures</li>
                          <li>600 sq.m. climate-controlled workspace</li>
                          <li>Dedicated power supply with stabilization</li>
                          <li>Gas delivery systems for assist gases</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg">Materials Characterization Lab</h3>
                        <p className="text-gray-600 mb-2">
                          Our comprehensive characterization laboratory enables detailed analysis of processed materials at multiple scales.
                        </p>
                        <h4 className="font-medium mt-3 mb-1">Features:</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600">
                          <li>Vibration-isolated microscopy suite</li>
                          <li>Sample preparation facilities</li>
                          <li>Environmental control for sensitive measurements</li>
                          <li>Data processing and analysis workstations</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg">Additive Manufacturing Center</h3>
                        <p className="text-gray-600 mb-2">
                          Our dedicated additive manufacturing center houses metal and polymer 3D printing systems.
                        </p>
                        <h4 className="font-medium mt-3 mb-1">Features:</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600">
                          <li>Controlled atmosphere for powder handling</li>
                          <li>Heat treatment furnaces for post-processing</li>
                          <li>Powder recycling and characterization tools</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <DollarSign size={16} />
                    Service Charges
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-md md:max-w-lg overflow-y-auto">
                  <div className="h-full py-6">
                    <h2 className="text-xl font-bold mb-4">Equipment Service Charges</h2>
                    <p className="text-sm text-gray-500 mb-4">
                      Rates effective from April 1, 2025. All charges are in INR and subject to applicable taxes.
                    </p>
                    
                    <Tabs defaultValue="academic" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="academic">Academic</TabsTrigger>
                        <TabsTrigger value="industry">Industry</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="academic">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Equipment</TableHead>
                              <TableHead>IIT Bombay</TableHead>
                              <TableHead>Other Academic</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">Fiber Laser System</TableCell>
                              <TableCell>₹2,000/hr</TableCell>
                              <TableCell>₹3,500/hr</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Femtosecond Laser</TableCell>
                              <TableCell>₹2,500/hr</TableCell>
                              <TableCell>₹4,000/hr</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">DMLS System</TableCell>
                              <TableCell>₹3,000/hr</TableCell>
                              <TableCell>₹5,000/hr</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">SEM Analysis</TableCell>
                              <TableCell>₹1,500/hr</TableCell>
                              <TableCell>₹2,500/hr</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">XRD Analysis</TableCell>
                              <TableCell>₹800/sample</TableCell>
                              <TableCell>₹1,200/sample</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Mechanical Testing</TableCell>
                              <TableCell>₹500/sample</TableCell>
                              <TableCell>₹800/sample</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TabsContent>
                      
                      <TabsContent value="industry">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Equipment</TableHead>
                              <TableHead>Industry Rate</TableHead>
                              <TableHead>Bulk Discount*</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">Fiber Laser System</TableCell>
                              <TableCell>₹7,000/hr</TableCell>
                              <TableCell>₹6,000/hr</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Femtosecond Laser</TableCell>
                              <TableCell>₹8,500/hr</TableCell>
                              <TableCell>₹7,500/hr</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">DMLS System</TableCell>
                              <TableCell>₹10,000/hr</TableCell>
                              <TableCell>₹8,500/hr</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">SEM Analysis</TableCell>
                              <TableCell>₹5,000/hr</TableCell>
                              <TableCell>₹4,000/hr</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">XRD Analysis</TableCell>
                              <TableCell>₹3,000/sample</TableCell>
                              <TableCell>₹2,400/sample</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Mechanical Testing</TableCell>
                              <TableCell>₹2,000/sample</TableCell>
                              <TableCell>₹1,600/sample</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                        <p className="text-xs text-gray-500 mt-2">*Bulk discount applies for {'>'}10 hours or samples</p>
                      </TabsContent>
                    </Tabs>
                    
                    <div className="mt-6 bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Additional Services</h3>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Service</TableHead>
                            <TableHead>Rate</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>Technical Assistance</TableCell>
                            <TableCell>₹1,000/hr</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Project Consulting</TableCell>
                            <TableCell>₹2,500/hr</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Data Analysis</TableCell>
                            <TableCell>₹1,500/hr</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Sample Preparation</TableCell>
                            <TableCell>₹800/sample</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="font-semibold mb-2">How to Book Equipment</h3>
                      <ol className="list-decimal pl-5 text-sm text-gray-600">
                        <li>Contact the lab manager at lamp-manager@iitb.ac.in</li>
                        <li>Fill out the online booking form</li>
                        <li>Receive confirmation of your booking</li>
                        <li>Complete safety training (if required)</li>
                      </ol>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Wrench size={16} />
                    Services
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-md md:max-w-lg overflow-y-auto">
                  <div className="h-full py-6">
                    <h2 className="text-xl font-bold mb-4">Technical Services</h2>
                    <p className="text-sm text-gray-600 mb-6">
                      LAMP lab offers various technical services to academic and industrial partners. Our team of experts can assist with complex materials processing challenges.
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold">Laser Material Processing</h3>
                        <ul className="list-disc pl-5 text-sm text-gray-600 mt-1">
                          <li>Laser cutting of complex geometries</li>
                          <li>Precision welding of similar and dissimilar materials</li>
                          <li>Surface texturing and modification</li>
                          <li>Heat treatment and surface hardening</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold">Additive Manufacturing</h3>
                        <ul className="list-disc pl-5 text-sm text-gray-600 mt-1">
                          <li>Metal 3D printing of complex components</li>
                          <li>Parameter optimization for new materials</li>
                          <li>Topology optimization for weight reduction</li>
                          <li>Reverse engineering and part reproduction</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold">Materials Characterization</h3>
                        <ul className="list-disc pl-5 text-sm text-gray-600 mt-1">
                          <li>Microstructural analysis using SEM and optical microscopy</li>
                          <li>Phase identification using XRD</li>
                          <li>Mechanical property testing</li>
                          <li>Surface roughness and topography analysis</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold">Consulting Services</h3>
                        <ul className="list-disc pl-5 text-sm text-gray-600 mt-1">
                          <li>Process optimization and troubleshooting</li>
                          <li>Material selection for laser applications</li>
                          <li>Feasibility studies for new processes</li>
                          <li>Training on laser safety and operation</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-8 bg-lamp-blue/5 rounded-lg p-4">
                      <h3 className="font-semibold mb-3">Service Request Process</h3>
                      <ol className="list-decimal pl-5 text-sm text-gray-600">
                        <li>Initial consultation to understand requirements</li>
                        <li>Technical feasibility assessment</li>
                        <li>Quotation and timeline preparation</li>
                        <li>Service agreement and payment</li>
                        <li>Project execution and delivery</li>
                        <li>Documentation and reporting</li>
                      </ol>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm font-medium">Contact for Services:</p>
                        <a 
                          href="mailto:lamp-services@iitb.ac.in" 
                          className="text-lamp-blue hover:underline text-sm"
                        >
                          lamp-services@iitb.ac.in
                        </a>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
        
        {/* Display all equipment without limit */}
        <EquipmentSection limit={0} />
      </main>
      <Footer />
    </>
  );
};

export default Equipment;

