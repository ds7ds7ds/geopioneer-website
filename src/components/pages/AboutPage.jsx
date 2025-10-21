import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, Users, Award, MapPin, Phone, Shield, FileCheck } from 'lucide-react'

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Managing Director",
      title: "Engineering Leadership",
      experience: "Master's Degree in Engineering, Certified Designer and Installer for Ground Source Heat Pumps (IGSHPA)",
      description: "With over 15 years of specialized experience in geothermal systems, our managing director leads the technical team with expertise in complex system design and installation management. This engineering background ensures every project meets the highest technical standards while maximizing efficiency and performance.",
      certifications: ["IGSHPA Designer", "IGSHPA Installer", "Master's Engineering", "Mass Licensed"]
    },
    {
      name: "Operations Executive",
      title: "Project Management", 
      experience: "More than half a decade of operations experience with effective project management and support from start to finish",
      description: "Our operations executive brings comprehensive project management expertise to every GeoPioneer installation. This dedication to seamless operations and customer satisfaction has established strong relationships throughout New England, ensuring projects are completed on time, within budget, and to the highest quality standards.",
      certifications: ["Project Management Professional", "Customer Relations Certified", "Operations Management"]
    },
    {
      name: "Installation Manager",
      title: "Field Operations",
      experience: "10+ years drilling and installation expertise",
      description: "Our installation manager oversees all field operations with extensive experience in Massachusetts' unique geological conditions. This expertise in compact drilling techniques and system installation ensures minimal property disruption while maintaining the highest safety and quality standards.",
      certifications: ["Drilling Certified", "Safety Trained", "Equipment Specialist"]
    }
  ]

  const licenses = [
    {
      category: "Professional Licenses",
      items: [
        "Electrical License - Massachusetts",
        "HIC Registration - Home Improvement Contractor",
        "Drilling Licenses - Geothermal Boring",
        "HVAC Contractor License"
      ]
    },
    {
      category: "Technical Certifications", 
      items: [
        "IGSHPA Designer Certification",
        "IGSHPA Installer Certification", 
        "EPA Section 608 Certified Technicians",
        "OSHA 30-Hour Safety Certification"
      ]
    },
    {
      category: "Program Partnerships",
      items: [
        "MassSave Partner (Pending Approval)",
        "Mass Climate Bank ESHLP Approved",
        "Better Business Bureau A+ Rating",
        "Manufacturer Certified Installer"
      ]
    }
  ]

  const serviceAreas = [
    "Greater Boston",
    "MetroWest", 
    "North Shore",
    "South Shore",
    "Central Massachusetts",
    "Cape Cod"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">GeoPioneer</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Massachusetts' leading geothermal installation company, pioneering clean energy solutions 
            for homes and businesses across New England.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To make geothermal heating and cooling accessible and affordable for every Massachusetts 
                homeowner, reducing energy costs while protecting our environment for future generations.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in vertical bore geothermal systems designed specifically for New England's 
                rocky terrain and limited space constraints, using European-style compact drilling equipment 
                that minimizes property disruption.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Over 500 successful installations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">15+ years of geothermal expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Licensed and insured in Massachusetts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">IGSHPA certified professionals</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why We Started</h3>
              <p className="text-gray-600 mb-4">
                After seeing too many Massachusetts homeowners struggle with expensive heating oil and 
                propane bills, we founded GeoPioneer to bring efficient, affordable geothermal solutions 
                to New England.
              </p>
              <p className="text-gray-600">
                Our compact drilling approach and focus on existing home retrofits makes geothermal 
                accessible even in dense suburban areas with limited yard space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-lg text-gray-600">
              Certified professionals with decades of combined experience serving New England
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">
                    {member.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm font-semibold text-gray-800 mb-3">{member.experience}</p>
                  <p className="text-gray-600 mb-4 flex-1">{member.description}</p>
                  <div className="space-y-1">
                    {member.certifications.map((cert, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs mr-1 mb-1">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses & Certifications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <Shield className="h-8 w-8 text-blue-600 inline-block mr-3" />
              Licenses & Certifications
            </h2>
            <p className="text-lg text-gray-600">
              Fully licensed, insured, and certified for your peace of mind
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {licenses.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <FileCheck className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <CardTitle className="text-lg text-blue-600">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Award className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Trust & Reliability</h3>
            <p className="text-gray-600">
              All our technicians are background-checked, fully insured, and maintain current certifications. 
              We carry comprehensive liability insurance and provide warranties on all installations.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Areas</h2>
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-green-800 text-sm">
                  <strong>Note:</strong> We provide free site assessments throughout our service area. 
                  Contact us to confirm coverage for your specific location.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose GeoPioneer?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Local Expertise</p>
                    <p className="text-gray-600 text-sm">Deep understanding of Massachusetts regulations and geology</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Minimal Disruption</p>
                    <p className="text-gray-600 text-sm">Compact drilling equipment protects your landscaping</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Complete Service</p>
                    <p className="text-gray-600 text-sm">From design to installation to ongoing maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Quality First</h3>
              <p className="text-blue-100">
                We use only the highest quality equipment and materials, backed by comprehensive warranties.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
              <p className="text-blue-100">
                Your satisfaction is our priority. We provide transparent pricing and clear communication throughout.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Environmental Responsibility</h3>
              <p className="text-blue-100">
                Every installation reduces carbon emissions and helps create a cleaner future for Massachusetts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Work with Massachusetts' Geothermal Experts?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today for a free consultation and site assessment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+17816545879">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-bold">
                <Phone className="h-5 w-5 mr-2" />
                Call (781) 654-5879
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
              Request Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
