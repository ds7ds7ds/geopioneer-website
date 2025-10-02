import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Calculator, Home, Building, DollarSign, Zap, Leaf, TrendingUp } from 'lucide-react'

const CalculatorPage = () => {
  const [activeTab, setActiveTab] = useState('existing')
  const [calculatorData, setCalculatorData] = useState({
    // Common fields
    squareFootage: '',
    zipCode: '',
    
    // Current system
    heatingFuel: '',
    coolingSystem: '',
    annualHeatingCost: '',
    annualElectricityCost: '',
    
    // New construction specific
    homeType: '',
    constructionTier: '',
    
    // Contact (optional)
    name: '',
    email: '',
    phone: ''
  })
  
  const [results, setResults] = useState(null)
  const [showResults, setShowResults] = useState(false)

  // Massachusetts energy prices
  const energyPrices = {
    electricity: 0.35, // $/kWh
    naturalGas: 1.50,  // $/therm
    heatingOil: 3.44,  // $/gallon
    propane: 3.50      // $/gallon
  }

  // Geothermal COP values
  const geothermalCOP = {
    heating: 4.2, // Winter COP
    cooling: 6.5  // Summer COP
  }

  const calculateSavings = () => {
    const sqft = parseInt(calculatorData.squareFootage) || 0
    const heatingCost = parseFloat(calculatorData.annualHeatingCost) || 0
    const electricityCost = parseFloat(calculatorData.annualElectricityCost) || 0
    
    if (sqft === 0) {
      alert('Please enter your home square footage')
      return
    }

    // Calculate current total energy costs
    const currentAnnualCost = heatingCost + electricityCost

    // Estimate geothermal energy consumption
    // Typical home uses ~12-15 kWh per sq ft annually for HVAC
    const estimatedAnnualKWh = sqft * 13 // Conservative estimate
    
    // Geothermal efficiency factor (compared to conventional systems)
    let efficiencyFactor = 1
    switch (calculatorData.heatingFuel) {
      case 'oil':
        efficiencyFactor = 0.35 // 65% more efficient
        break
      case 'propane':
        efficiencyFactor = 0.30 // 70% more efficient
        break
      case 'electric':
        efficiencyFactor = 0.40 // 60% more efficient
        break
      case 'naturalGas':
        efficiencyFactor = 0.45 // 55% more efficient
        break
      default:
        efficiencyFactor = 0.35
    }

    const geothermalAnnualKWh = estimatedAnnualKWh * efficiencyFactor
    const geothermalAnnualCost = geothermalAnnualKWh * energyPrices.electricity

    // Calculate savings
    const annualSavings = currentAnnualCost - geothermalAnnualCost
    const monthlySavings = annualSavings / 12
    const tenYearSavings = annualSavings * 10
    const twentyFiveYearSavings = annualSavings * 25

    // Energy reduction percentage
    const energyReduction = Math.round((1 - efficiencyFactor) * 100)

    // System costs (estimates)
    const systemCostBase = sqft * 25 // $25 per sq ft base cost
    const massSaveRebate = 15000
    const federalTaxCredit = systemCostBase * 0.30
    const netSystemCost = systemCostBase - massSaveRebate - federalTaxCredit

    // Payback period
    const paybackYears = netSystemCost / annualSavings

    // For new construction, compare with alternatives
    let newConstructionComparison = null
    if (activeTab === 'new-construction') {
      const propaneSystemCost = 34000
      const ashpSystemCost = 43000
      const geothermalSystemCost = Math.max(netSystemCost, 40600)
      
      newConstructionComparison = {
        propane: {
          upfrontCost: propaneSystemCost,
          annualCost: 9600,
          tenYearTotal: propaneSystemCost + (9600 * 10)
        },
        ashp: {
          upfrontCost: ashpSystemCost,
          annualCost: 8600,
          tenYearTotal: ashpSystemCost + (8600 * 10)
        },
        geothermal: {
          upfrontCost: geothermalSystemCost,
          annualCost: geothermalAnnualCost,
          tenYearTotal: geothermalSystemCost + (geothermalAnnualCost * 10)
        }
      }
    }

    setResults({
      currentAnnualCost,
      geothermalAnnualCost,
      annualSavings,
      monthlySavings,
      tenYearSavings,
      twentyFiveYearSavings,
      energyReduction,
      systemCostBase,
      massSaveRebate,
      federalTaxCredit,
      netSystemCost,
      paybackYears,
      newConstructionComparison
    })
    setShowResults(true)
  }

  const handleInputChange = (field, value) => {
    setCalculatorData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const renderExistingHomesCalculator = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="squareFootage">Home Square Footage *</Label>
          <Input
            id="squareFootage"
            type="number"
            placeholder="e.g., 2500"
            value={calculatorData.squareFootage}
            onChange={(e) => handleInputChange('squareFootage', e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="zipCode">ZIP Code</Label>
          <Input
            id="zipCode"
            placeholder="e.g., 02101"
            value={calculatorData.zipCode}
            onChange={(e) => handleInputChange('zipCode', e.target.value)}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="heatingFuel">Current Heating Fuel *</Label>
          <Select value={calculatorData.heatingFuel} onValueChange={(value) => handleInputChange('heatingFuel', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select heating fuel" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="oil">Heating Oil</SelectItem>
              <SelectItem value="propane">Propane</SelectItem>
              <SelectItem value="naturalGas">Natural Gas</SelectItem>
              <SelectItem value="electric">Electric</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="coolingSystem">Current Cooling System</Label>
          <Select value={calculatorData.coolingSystem} onValueChange={(value) => handleInputChange('coolingSystem', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select cooling system" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="central-ac">Central Air Conditioning</SelectItem>
              <SelectItem value="window-units">Window Units</SelectItem>
              <SelectItem value="none">No Cooling System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="annualHeatingCost">Annual Heating Cost *</Label>
          <Input
            id="annualHeatingCost"
            type="number"
            placeholder="e.g., 3500"
            value={calculatorData.annualHeatingCost}
            onChange={(e) => handleInputChange('annualHeatingCost', e.target.value)}
          />
          <p className="text-sm text-gray-500 mt-1">Your total yearly heating bill</p>
        </div>
        <div>
          <Label htmlFor="annualElectricityCost">Annual Electricity Cost</Label>
          <Input
            id="annualElectricityCost"
            type="number"
            placeholder="e.g., 2400"
            value={calculatorData.annualElectricityCost}
            onChange={(e) => handleInputChange('annualElectricityCost', e.target.value)}
          />
          <p className="text-sm text-gray-500 mt-1">Your total yearly electricity bill</p>
        </div>
      </div>
    </div>
  )

  const renderNewConstructionCalculator = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="squareFootage">Home Square Footage *</Label>
          <Input
            id="squareFootage"
            type="number"
            placeholder="e.g., 4000"
            value={calculatorData.squareFootage}
            onChange={(e) => handleInputChange('squareFootage', e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="homeType">Home Type</Label>
          <Select value={calculatorData.homeType} onValueChange={(value) => handleInputChange('homeType', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select home type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single-family">Single Family</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
              <SelectItem value="custom">Custom Home</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="constructionTier">Construction Efficiency Tier</Label>
          <Select value={calculatorData.constructionTier} onValueChange={(value) => handleInputChange('constructionTier', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select efficiency tier" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tier1">Tier 1 (Standard)</SelectItem>
              <SelectItem value="tier2">Tier 2 (High Efficiency)</SelectItem>
              <SelectItem value="tier3">Tier 3 (Premium)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="zipCode">ZIP Code</Label>
          <Input
            id="zipCode"
            placeholder="e.g., 02101"
            value={calculatorData.zipCode}
            onChange={(e) => handleInputChange('zipCode', e.target.value)}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="heatingFuel">Compare Against</Label>
          <Select value={calculatorData.heatingFuel} onValueChange={(value) => handleInputChange('heatingFuel', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select system to compare" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="propane">Propane + AC</SelectItem>
              <SelectItem value="naturalGas">Natural Gas + AC</SelectItem>
              <SelectItem value="electric">Air Source Heat Pump</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">New Construction Benefits</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Maximize federal and state incentives</li>
          <li>• No retrofit complications or existing system removal</li>
          <li>• Optimal system sizing and integration</li>
          <li>• Potential for GaaS (Geo as a Service) model</li>
        </ul>
      </div>
    </div>
  )

  const renderResults = () => {
    if (!results) return null

    return (
      <div className="space-y-8">
        {/* Energy Savings Highlight */}
        <Card className="bg-green-50 border-green-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-green-800">Energy Savings</CardTitle>
            <div className="text-4xl font-bold text-green-600">{results.energyReduction}%</div>
            <CardDescription className="text-green-700">
              Energy reduction compared to your current system
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Cost Savings */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-lg">Monthly Savings</CardTitle>
              <div className="text-2xl font-bold text-blue-600">
                ${Math.round(results.monthlySavings).toLocaleString()}
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-lg">Annual Savings</CardTitle>
              <div className="text-2xl font-bold text-blue-600">
                ${Math.round(results.annualSavings).toLocaleString()}
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-lg">25-Year Savings</CardTitle>
              <div className="text-2xl font-bold text-blue-600">
                ${Math.round(results.twentyFiveYearSavings).toLocaleString()}
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* System Cost Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>System Cost & Incentives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Base System Cost:</span>
                <span className="font-semibold">${results.systemCostBase.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>MassSave Rebate:</span>
                <span className="font-semibold">-${results.massSaveRebate.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Federal Tax Credit (30%):</span>
                <span className="font-semibold">-${Math.round(results.federalTaxCredit).toLocaleString()}</span>
              </div>
              <hr />
              <div className="flex justify-between text-lg font-bold">
                <span>Net System Cost:</span>
                <span>${Math.round(results.netSystemCost).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Payback Period:</span>
                <span>{results.paybackYears.toFixed(1)} years</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* New Construction Comparison */}
        {activeTab === 'new-construction' && results.newConstructionComparison && (
          <Card>
            <CardHeader>
              <CardTitle>10-Year Total Cost Comparison</CardTitle>
              <CardDescription>Upfront cost + 10 years of operating costs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">Geothermal</h4>
                    <div className="text-2xl font-bold text-green-600">
                      ${Math.round(results.newConstructionComparison.geothermal.tenYearTotal).toLocaleString()}
                    </div>
                    <Badge className="bg-green-600 text-white mt-2">Best Value</Badge>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Propane + AC</h4>
                    <div className="text-2xl font-bold text-gray-600">
                      ${Math.round(results.newConstructionComparison.propane.tenYearTotal).toLocaleString()}
                    </div>
                    <div className="text-sm text-red-600 mt-2">
                      +${Math.round(results.newConstructionComparison.propane.tenYearTotal - results.newConstructionComparison.geothermal.tenYearTotal).toLocaleString()} more
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Air Source HP</h4>
                    <div className="text-2xl font-bold text-gray-600">
                      ${Math.round(results.newConstructionComparison.ashp.tenYearTotal).toLocaleString()}
                    </div>
                    <div className="text-sm text-red-600 mt-2">
                      +${Math.round(results.newConstructionComparison.ashp.tenYearTotal - results.newConstructionComparison.geothermal.tenYearTotal).toLocaleString()} more
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Get Your Detailed Assessment</CardTitle>
            <CardDescription>
              Receive a personalized quote and site assessment for your property
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={calculatorData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={calculatorData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  placeholder="(555) 123-4567"
                  value={calculatorData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4 flex gap-4">
              <Button className="bg-green-600 hover:bg-green-700">
                Schedule Assessment
              </Button>
              <Button variant="outline">
                Download Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Calculator className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Geothermal Savings Calculator
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover how much you can save with geothermal heating and cooling. 
            Get personalized calculations for your home or new construction project.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="existing" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Existing Homes
              </TabsTrigger>
              <TabsTrigger value="new-construction" className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                New Construction
              </TabsTrigger>
            </TabsList>

            <TabsContent value="existing">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5 text-blue-600" />
                    Existing Home Renovation Calculator
                  </CardTitle>
                  <CardDescription>
                    Calculate savings from retrofitting your existing home with geothermal
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {renderExistingHomesCalculator()}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="new-construction">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-green-600" />
                    New Construction Calculator
                  </CardTitle>
                  <CardDescription>
                    Compare geothermal costs and savings for new construction projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {renderNewConstructionCalculator()}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Calculate Button */}
          <div className="mt-8 text-center">
            <Button 
              size="lg" 
              onClick={calculateSavings}
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-3"
            >
              Calculate My Savings
            </Button>
          </div>

          {/* Results */}
          {showResults && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Your Geothermal Savings Report
              </h2>
              {renderResults()}
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Our Calculator is Different
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <CardTitle>Accurate Energy Modeling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Based on actual Massachusetts energy prices and geothermal COP values of 4+ winter, 6+ summer
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <CardTitle>Real Incentive Calculations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Includes current MassSave $15K rebate and 30% federal tax credit calculations
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <CardTitle>Long-term Projections</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  See 10-year and 25-year savings projections to understand total lifetime value
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CalculatorPage
