import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, DollarSign, Home, Leaf, Zap, Phone, ArrowRight, Calculator, FileText } from 'lucide-react'

// Import images
import geothermalDiagram from '../../assets/OZfoKICtUl3C.png'
import heatPumpSystem from '../../assets/kIiSRbLvyWdW.png'
import compactDrillRig from '../../assets/dwn0VGiGnQov.jpg'
import homeInstallation from '../../assets/YtvyEOwO6WX9.jpg'
import geothermalHeatingMode from '../../assets/geothermal-heating-mode.jpg'

const HomePage = () => {
  const [showAssessment, setShowAssessment] = useState(false)

  const keyBenefits = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "400-600% Efficiency",
      description: "Compared to 80-95% for fossil fuel systems",
      highlight: "4-6x more efficient"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
      title: "$200-$275/Month Savings",
      description: "Compared to oil/propane + AC systems",
      highlight: "Up to $3,300/year"
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "50-70% Energy Reduction",
      description: "Compared to conventional heating and cooling",
      highlight: "Eco-friendly solution"
    }
  ]

  const customerSegments = [
    {
      title: "Existing Homes",
      description: "Perfect for homes with 2000+ sq ft, central AC, and expensive heating fuels like oil or propane",
      features: [
        "Retrofit existing ductwork",
        "Minimal property disruption",
        "3-4 week installation",
        "Immediate savings"
      ],
      cta: "Learn About Renovation",
      link: "/existing-homes",
      icon: <Home className="h-12 w-12 text-blue-600" />,
      color: "blue"
    },
    {
      title: "New Construction",
      description: "Maximize incentives and minimize operating costs for new construction projects",
      features: [
        "Competitive upfront costs",
        "Maximum incentive eligibility",
        "Optimal system integration",
        "GaaS model available"
      ],
      cta: "Explore New Construction",
      link: "/new-construction",
      icon: <Zap className="h-12 w-12 text-green-600" />,
      color: "green"
    }
  ]

  const incentives = [
    {
      amount: "$15,000",
      title: "MassSave Rebate",
      description: "State rebate for geothermal installations"
    },
    {
      amount: "30%",
      title: "Federal Tax Credit",
      description: "IRA tax credit on total system cost"
    },
    {
      amount: "0%",
      title: "HEAT Loan",
      description: "7-year financing at 0% interest"
    }
  ]

  const whyChooseUs = [
    {
      title: "Massachusetts Expertise",
      description: "Specialized in New England's rocky terrain and compact drilling solutions",
      icon: <Home className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Minimal Disruption",
      description: "European-style compact equipment requires only 10x10 ft drilling area",
      icon: <Leaf className="h-6 w-6 text-green-600" />
    },
    {
      title: "Complete Solution",
      description: "Heating, cooling, and hot water in one integrated system",
      icon: <Zap className="h-6 w-6 text-purple-600" />
    },
    {
      title: "Long-term Value",
      description: "25-50 year lifespan vs 10-15 years for conventional systems",
      icon: <DollarSign className="h-6 w-6 text-green-600" />
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
                Massachusetts Geothermal Pioneers
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Transform Your Home with
                <span className="text-green-600 block">Clean Geothermal Energy</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Say goodbye to expensive oil, propane, and inefficient air conditioning forever. 
                Our compact European-style drilling and innovative financing make complete 
                geothermal heating and cooling affordable for every Massachusetts homeowner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
                  asChild
                >
                  <Link to="/calculator">
                    <Calculator className="h-5 w-5 mr-2" />
                    Calculate Your Savings
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
                  onClick={() => setShowAssessment(true)}
                >
                  <FileText className="h-5 w-5 mr-2" />
                  Get Free Assessment
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={geothermalDiagram} 
                alt="Geothermal System Diagram" 
                className="max-w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Massachusetts Homeowners Choose Geothermal
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Based on data from International Ground Source Heat Pump Association (IGSHPA)
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {keyBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <Badge variant="secondary" className="mt-2">{benefit.highlight}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Segments Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Path to Geothermal
            </h2>
            <p className="text-lg text-gray-600">
              Whether you're retrofitting an existing home or building new, we have the perfect solution
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {customerSegments.map((segment, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow group">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="group-hover:scale-110 transition-transform">
                      {segment.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{segment.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {segment.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {segment.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      segment.color === 'blue' 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-green-600 hover:bg-green-700'
                    } text-white`}
                    asChild
                  >
                    <Link to={segment.link}>
                      {segment.cta}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Geothermal Works
            </h2>
            <p className="text-lg text-gray-600">
              Uses stable underground temperatures (50-55°F year-round) for efficient heating and cooling
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Winter Heating</h3>
                    <p className="text-gray-600">
                      Extracts heat from the ground and delivers it to your home with 400%+ efficiency
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Summer Cooling</h3>
                    <p className="text-gray-600">
                      Pulls heat from your home and deposits it into the ground with 600%+ efficiency
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Home className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Vertical Bore Technology</h3>
                    <p className="text-gray-600">
                      400-1000 ft deep vertical bores ideal for Massachusetts properties with limited space
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={compactDrillRig} 
                alt="Compact Drilling Equipment" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Incentives Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Substantial Incentives Available Now
            </h2>
            <p className="text-xl text-blue-100">
              Reduce your system cost by over 50% with combined federal and state incentives
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {incentives.map((incentive, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white text-center hover:bg-white/20 transition-colors">
                <CardHeader>
                  <div className="text-4xl font-bold text-white mb-2">{incentive.amount}</div>
                  <CardTitle className="text-xl text-white">{incentive.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100">{incentive.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose GeoPioneer
            </h2>
            <p className="text-lg text-gray-600">
              Massachusetts' leading geothermal installation company
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {reason.icon}
                  </div>
                  <CardTitle className="text-lg">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Saving with Geothermal?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get a free assessment and discover how much you can save with Massachusetts' most efficient heating and cooling solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3"
              onClick={() => setShowAssessment(true)}
            >
              <FileText className="h-5 w-5 mr-2" />
              Get Free Assessment
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-green-700 px-8 py-3"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
