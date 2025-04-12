
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EquipmentSection from "@/components/EquipmentSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
          </div>
        </div>
        
        {/* Display all equipment without limit */}
        <EquipmentSection limit={0} />
        
        <section className="py-16 gradient-bg">
          <div className="container mx-auto px-4">
            <h2 className="section-heading mb-12">Technical Specifications</h2>
            
            <Tabs defaultValue="lasers">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
                <TabsTrigger value="lasers">Laser Systems</TabsTrigger>
                <TabsTrigger value="manufacturing">Manufacturing Equipment</TabsTrigger>
                <TabsTrigger value="characterization">Characterization Tools</TabsTrigger>
              </TabsList>
              
              <TabsContent value="lasers">
                <Card>
                  <CardHeader>
                    <CardTitle>Laser Systems Specifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>System</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Specifications</TableHead>
                          <TableHead>Applications</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">IPG YLS-2000 Fiber Laser</TableCell>
                          <TableCell>Continuous Wave</TableCell>
                          <TableCell>
                            <ul className="list-disc pl-5 text-sm">
                              <li>2kW maximum power</li>
                              <li>1070nm wavelength</li>
                              <li>100μm fiber delivery</li>
                              <li>High beam quality (BPP &lt; 3.5 mm·mrad)</li>
                            </ul>
                          </TableCell>
                          <TableCell>Welding, Cutting, Surface treatment</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Coherent Astrella Ultrafast Laser</TableCell>
                          <TableCell>Femtosecond</TableCell>
                          <TableCell>
                            <ul className="list-disc pl-5 text-sm">
                              <li>7W average power</li>
                              <li>800nm central wavelength</li>
                              <li>&lt;35fs pulse duration</li>
                              <li>1-5kHz repetition rate</li>
                            </ul>
                          </TableCell>
                          <TableCell>Micromachining, Ablation, Surface texturing</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">SPI G4 Pulsed Fiber Laser</TableCell>
                          <TableCell>Nanosecond Pulsed</TableCell>
                          <TableCell>
                            <ul className="list-disc pl-5 text-sm">
                              <li>50W average power</li>
                              <li>1060nm wavelength</li>
                              <li>Variable pulse duration (10-240ns)</li>
                              <li>Single shot to 1MHz repetition rate</li>
                            </ul>
                          </TableCell>
                          <TableCell>Marking, Engraving, Micromachining</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Nd:YAG Dual-Beam System</TableCell>
                          <TableCell>Q-switched</TableCell>
                          <TableCell>
                            <ul className="list-disc pl-5 text-sm">
                              <li>150W maximum power per beam</li>
                              <li>1064nm wavelength</li>
                              <li>Variable beam shaping optics</li>
                              <li>Custom interference setup</li>
                            </ul>
                          </TableCell>
                          <TableCell>Direct laser interference patterning</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="manufacturing">
                <Card>
                  <CardHeader>
                    <CardTitle>Manufacturing Equipment Specifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>System</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Specifications</TableHead>
                          <TableHead>Capabilities</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">EOS M290 DMLS System</TableCell>
                          <TableCell>Selective Laser Melting</TableCell>
                          <TableCell>
                            <ul className="list-disc pl-5 text-sm">
                              <li>400W Yb-fiber laser</li>
                              <li>250 x 250 x 325 mm build volume</li>
                              <li>Integrated process monitoring</li>
                              <li>Supports Ti, Al, Ni, steel alloys</li>
                            </ul>
                          </TableCell>
                          <TableCell>Metal additive manufacturing, Research prototyping</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Custom 5-axis Laser Processing System</TableCell>
                          <TableCell>Multi-axis CNC</TableCell>
                          <TableCell>
                            <ul className="list-disc pl-5 text-sm">
                              <li>5-axis motion (X, Y, Z, A, C)</li>
                              <li>10μm positioning accuracy</li>
                              <li>500 x 500 x 300 mm working envelope</li>
                              <li>Modular laser head interface</li>
                            </ul>
                          </TableCell>
                          <TableCell>Surface texturing, Material processing research</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">BeAM Modulo 400 DED System</TableCell>
                          <TableCell>Directed Energy Deposition</TableCell>
                          <TableCell>
                            <ul className="list-disc pl-5 text-sm">
                              <li>500W fiber laser</li>
                              <li>5-axis motion system</li>
                              <li>Dual powder feeder</li>
                              <li>Inert atmosphere chamber</li>
                            </ul>
                          </TableCell>
                          <TableCell>Repair, Gradient materials, Complex geometries</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">High-Temperature Vacuum Chamber</TableCell>
                          <TableCell>Process Chamber</TableCell>
                          <TableCell>
                            <ul className="list-disc pl-5 text-sm">
                              <li>10^-6 Torr vacuum capability</li>
                              <li>Up to 1200°C temperature</li>
                              <li>Multiple gas inlet options</li>
                              <li>Optical viewport for laser access</li>
                            </ul>
                          </TableCell>
                          <TableCell>Controlled atmosphere processing, High-temp laser treatment</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="characterization">
                <Card>
                  <CardHeader>
                    <CardTitle>Characterization Tools Specifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Equipment</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Specifications</TableHead>
                          <TableHead>Capabilities</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">JEOL JSM-7600F</TableCell>
                          <TableCell>FE-SEM</TableCell>
                          <TableCell>
                            <ul className="list-disc pl-5 text-sm">
                              <li>0.8nm resolution at 15kV</li>
                              <li>0.5-30kV accelerating voltage</li>
                              <li>EDX detector</li>
                              <li>EBSD capability</li>
                            </ul>
                          </TableCell>
                          <TableCell>Microstructure analysis, Elemental mapping, Crystallography</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Bruker D8 Advance</TableCell>
                          <TableCell>XRD System</TableCell>
                          <TableCell>
                            <ul className="list-disc pl-5 text-sm">
                              <li>Cu-Kα radiation</li>
                              <li>2θ range: 3-150°</li>
                              <li>LYNXEYE XE detector</li>
                              <li>Temperature stage up to 1200°C</li>
                            </ul>
                          </TableCell>
                          <TableCell>Phase identification, Crystallinity, Residual stress</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Keyence VK-X1100</TableCell>
                          <TableCell>3D Confocal Microscope</TableCell>
                          <TableCell>
                            <ul className="list-disc pl-5 text-sm">
                              <li>0.5nm height resolution</li>
                              <li>Up to 28,800x magnification</li>
                              <li>Multi-wavelength laser sources</li>
                              <li>Large area stitching capability</li>
                            </ul>
                          </TableCell>
                          <TableCell>Surface profiling, Roughness measurement, Feature characterization</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Instron 5982 Universal Testing</TableCell>
                          <TableCell>Mechanical Tester</TableCell>
                          <TableCell>
                            <ul className="list-disc pl-5 text-sm">
                              <li>100kN load capacity</li>
                              <li>Digital image correlation</li>
                              <li>High temperature attachment</li>
                              <li>Custom fixtures for various tests</li>
                            </ul>
                          </TableCell>
                          <TableCell>Tensile, Compression, Flexural, Fatigue testing</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="section-heading mb-12">Laboratory Facilities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}
                />
                <CardHeader>
                  <CardTitle>Laser Processing Lab</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-gray-600">
                    Our main laser processing laboratory houses multiple laser systems, CNC workstations, and process monitoring equipment.
                    The lab is designed for research in laser cutting, welding, surface modification, and additive manufacturing.
                  </p>
                  <div>
                    <h4 className="font-medium">Features:</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                      <li>Class 1 laser safety enclosures</li>
                      <li>600 sq.m. climate-controlled workspace</li>
                      <li>Dedicated power supply with stabilization</li>
                      <li>Gas delivery systems for assist gases</li>
                      <li>Industrial extraction and filtration systems</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576086135878-31532902b544?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}
                />
                <CardHeader>
                  <CardTitle>Materials Characterization Lab</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-gray-600">
                    Our comprehensive characterization laboratory enables detailed analysis of processed materials at multiple scales.
                    The facility supports microstructural, compositional, mechanical, and functional property assessment.
                  </p>
                  <div>
                    <h4 className="font-medium">Features:</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                      <li>Vibration-isolated microscopy suite</li>
                      <li>Sample preparation facilities</li>
                      <li>Environmental control for sensitive measurements</li>
                      <li>Data processing and analysis workstations</li>
                      <li>Collaborative workspace for result interpretation</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581094338460-ade62ea0a586?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}
                />
                <CardHeader>
                  <CardTitle>Additive Manufacturing Center</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-gray-600">
                    Our dedicated additive manufacturing center houses metal and polymer 3D printing systems, powder handling equipment, and post-processing tools.
                    This facility enables research on novel materials and process development.
                  </p>
                  <div>
                    <h4 className="font-medium">Features:</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                      <li>Controlled atmosphere for powder handling</li>
                      <li>Heat treatment furnaces for post-processing</li>
                      <li>Powder recycling and characterization tools</li>
                      <li>Build preparation and simulation software</li>
                      <li>Quality control inspection equipment</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581093577421-5a1a21a3bb2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}
                />
                <CardHeader>
                  <CardTitle>Computational Research Lab</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-gray-600">
                    Our computational facility supports simulation and modeling of laser-material interactions, process optimization, and data analysis for experimental research.
                  </p>
                  <div>
                    <h4 className="font-medium">Features:</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                      <li>High-performance computing cluster</li>
                      <li>Specialized software for FEA, CFD, and multiphysics simulation</li>
                      <li>Machine learning and data analytics tools</li>
                      <li>Visualization systems for complex data interpretation</li>
                      <li>Collaborative design and simulation environment</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-16 bg-lamp-blue/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-lamp-blue mb-4">Equipment Access</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-2">For Internal Users</h4>
                  <p className="text-gray-600 mb-4">
                    Equipment access for IIT Bombay students and researchers requires proper training and authorization.
                    Please contact the lab manager for scheduling and training requirements.
                  </p>
                  <Badge>Booking System</Badge>
                  <Badge className="ml-2">Training Required</Badge>
                </div>
                <div>
                  <h4 className="font-medium mb-2">For External Collaborators</h4>
                  <p className="text-gray-600 mb-4">
                    We offer equipment access and analytical services to academic and industrial partners through formal collaboration agreements.
                    Contact us to discuss your specific requirements.
                  </p>
                  <a 
                    href="mailto:lamp@iitb.ac.in" 
                    className="bg-lamp-blue hover:bg-lamp-darkBlue text-white px-4 py-2 rounded-md transition-colors inline-block"
                  >
                    Contact for Access
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Equipment;
