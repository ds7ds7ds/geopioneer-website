import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, DollarSign, Home, Leaf, Zap, TrendingUp, Building, Calculator, Shield } from 'lucide-react'

// Import images
import geothermalDiagram from '../../assets/OZfoKICtUl3C.png'
import heatPumpSystem from '../../assets/kIiSRbLvyWdW.png'
import homeInstallation from '../../assets/YtvyEOwO6WX9.jpg'

const NewConstructionPage = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false)

  const costComparison = [
    {
      system: "Geothermal",
      netCost: "$40,600",
      comparison: "Best Value",
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      highlight: true
    },
    {
      system: "Propane + AC",
      netCost: "$34,000",
      comparison: "-16% vs Geo",
      icon: <Home className="h-8 w-8 text-orange-600" />,
      highlight: false
    },
    {
      system: "ASHP",
      netCost: "$43,000",
      comparison: "+6% vs Geo",
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      highlight: false
    }
  ]

  const operatingCosts = [
    {
      system: "Geothermal (GSHP)",
      annualCost: "$4,750",
      comparison: "Baseline",
      tenYearCost: "$47,500",
      savings: "Baseline",
      color: "green"
    },
    {
      system: "Propane + AC",
      annualCost: "$9,600",
      comparison: "+102% more expensive",
      tenYearCost: "$96,000",
      savings: "+$48,500 (102%)",
      color: "red"
    },
    {
      system: "ASHP",
      annualCost: "$8,600",
      comparison: "+81% more expensive",
      tenYearCost: "$86,000",
      savings: "+$38,500 (81%)",
      color: "orange"
    }
  ]

  const builderBenefits = [
    {
      title: "HVAC CAPEX Savings",
      description: "Save all HVAC capital expenditure costs with GaaS model",
      icon: <DollarSign className="h-6 w-6 text-green-600" />
    },
    {
      title: "Competitive Advantage",
      description: "Offer premium energy-efficient homes with lower operating costs",
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Future-Proof Design",
      description: "Meet evolving energy codes and sustainability requirements",
      icon: <Shield className="h-6 w-6 text-purple-600" />
    },
    {
      title: "Premium Positioning",
      description: "Differentiate with cutting-edge geothermal technology",
      icon: <Building className="h-6 w-6 text-indigo-600" />
    }
  ]

  const incentiveBreakdown = [
    {
      incentive: "MassSave Rebate",
      amount: "$15,000",
      description: "State rebate for geothermal installations"
    },
    {
      incentive: "Federal IRA Tax Credit",
      amount: "30%",
      description: "Federal tax credit on total system cost"
    },
    {
      incentive: "HEAT Loan",
      amount: "0% Interest",
      description: "7-year financing at 0% interest rate"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Geothermal for <span className="text-green-600">New Construction</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Maximize incentives and minimize operating costs with Massachusetts' most efficient 
              geothermal solutions for new construction projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                onClick={() => setShowQuoteForm(true)}
              >
                Get Builder Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3"
              >
                <Calculator className="h-5 w-5 mr-2" />
                Calculate ROI
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insight Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Insight</h2>
          <p className="text-xl text-green-100 mb-8">
            MassSave + IRA incentives reduce geothermal system cost by over 50% for new construction.
          </p>
          <div className="bg-white/10 rounded-lg p-6">
            <p className="text-lg">
              After incentives, geothermal has competitive upfront cost with vastly superior lifetime value.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cost Comparison After Incentives
            </h2>
            <p className="text-lg text-gray-600">
              For a typical 4,000 sq ft new home in Massachusetts
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {costComparison.map((system, index) => (
              <Card 
                key={index} 
                className={`text-center hover:shadow-lg transition-shadow ${
                  system.highlight ? 'ring-2 ring-green-500 bg-green-50' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {system.icon}
                  </div>
                  <CardTitle className="text-xl">{system.system}</CardTitle>
                  {system.highlight && (
                    <Badge className="bg-green-600 text-white">Best Value</Badge>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {system.netCost}
                  </div>
                  <p className="text-gray-600">{system.comparison}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How Geothermal Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              System Overview
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How Geothermal Works</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Uses stable underground temperatures</h4>
                    <p className="text-gray-600">(50-55°F year-round) for heating & cooling</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Achieves 400-600% efficiency</h4>
                    <p className="text-gray-600">Compared to 80-95% for fossil fuel systems</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Vertical Bore Technology</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Vertical bores (400-1000 ft deep) ideal for Massachusetts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Requires minimal surface area - perfect for limited yard space</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">More stable performance than horizontal systems</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={geothermalDiagram} 
                alt="Geothermal System Diagram" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Operating Costs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Annual Operating Costs & Savings
            </h2>
            <p className="text-lg text-gray-600">
              Based on MA electricity rates ($0.35/kWh) and propane ($3.50/gal)
            </p>
          </div>
          
          <div className="grid gap-6 mb-12">
            {operatingCosts.map((system, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-gray-900">{system.system}</h3>
                      <p className={`text-sm ${
                        system.color === 'green' ? 'text-green-600' : 
                        system.color === 'red' ? 'text-red-600' : 'text-orange-600'
                      }`}>
                        {system.comparison}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{system.annualCost}</div>
                        <div className="text-sm text-gray-600">Annual Cost</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{system.tenYearCost}</div>
                        <div className="text-sm text-gray-600">10-Year Cost</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Long-term Savings Highlight */}
          <div className="bg-green-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Long-Term Homeowner Savings</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">$3,850-$4,850</div>
                <div className="text-gray-700">Annual savings vs ASHP and propane systems</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">$38,500-$48,500</div>
                <div className="text-gray-700">Net homeowner savings over 10 years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Builder Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Builder Benefits
            </h2>
            <p className="text-lg text-gray-600">
              Why builders choose geothermal for new construction
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {builderBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GaaS Model Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Geo as a Service (GaaS) Model
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Zero upfront cost option for builders and high-end new construction
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Zero CAPEX</h3>
              <p className="text-blue-100">No upfront HVAC costs for builders</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Full Service</h3>
              <p className="text-blue-100">Installation, maintenance, and warranty included</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">20-Year Term</h3>
              <p className="text-blue-100">Long-term contract with guaranteed performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Incentives Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Total Available Incentives
            </h2>
            <p className="text-lg text-gray-600">
              Maximize your savings with federal and state incentives
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {incentiveBreakdown.map((incentive, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{incentive.incentive}</CardTitle>
                  <div className="text-3xl font-bold text-green-600">{incentive.amount}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{incentive.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Total Incentive Impact */}
          <div className="mt-12 bg-green-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              For a 4,000 sq ft home built to Tier 2 standards
            </h3>
            <div className="text-4xl font-bold text-green-600 mb-2">50%+</div>
            <p className="text-lg text-gray-700">
              Total system cost reduction with combined incentives
            </p>
          </div>
        </div>
      </section>

      {/* Selling Points Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Key Selling Points
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Propane is 102% more expensive to operate than geothermal
              </h3>
              <p className="text-gray-600">
                Significant long-term savings for homeowners choosing geothermal over propane systems
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                ASHP is 81% more expensive to operate than geothermal
              </h3>
              <p className="text-gray-600">
                Even compared to efficient heat pumps, geothermal provides substantial savings
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Competitive upfront cost with superior lifetime value
              </h3>
              <p className="text-gray-600">
                After incentives, geothermal installation costs are competitive with traditional systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build with Geothermal?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get a custom quote for your new construction project and maximize available incentives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3"
              onClick={() => setShowQuoteForm(true)}
            >
              Get Builder Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-green-700 px-8 py-3"
            >
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewConstructionPage
