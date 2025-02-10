import { useState } from 'react'
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Minus, Plus } from "lucide-react"

export default function EventInfo() {
  const [vipTickets, setVipTickets] = useState(0)
  const [superiorTickets, setSuperiorTickets] = useState(0)

  const handleTicketChange = (type: 'vip' | 'superior', action: 'increase' | 'decrease') => {
    if (type === 'vip') {
      setVipTickets(prev => action === 'increase' ? prev + 1 : Math.max(0, prev - 1))
    } else {
      setSuperiorTickets(prev => action === 'increase' ? prev + 1 : Math.max(0, prev - 1))
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-100">
      <Card className="mb-6 overflow-hidden">
        <CardHeader className="bg-gray-700 text-white py-8">
          <CardTitle className="text-3xl mb-2">PLAZA DE REYES</CardTitle>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Bibendum adipiscing lacus.</p>
        </CardHeader>
      </Card>
      
      <div className="grid md:grid-cols-2 gap-6 min-h-screen">
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Fecha</h3>
              <p className="text-gray-600">Viernes 21 de Julio, 2023</p>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Horario</h3>
              <p className="text-gray-600">21:00 PM</p>
            </div>
            <h3 className="font-semibold text-lg mb-4">ENTRADAS</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">VIP</span>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">s/. 79.90</span>
                  <Button variant="outline" size="icon" onClick={() => handleTicketChange('vip', 'decrease')}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{vipTickets}</span>
                  <Button variant="outline" size="icon" onClick={() => handleTicketChange('vip', 'increase')}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">SUPERIOR</span>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">s/. 59.90</span>
                  <Button variant="outline" size="icon" onClick={() => handleTicketChange('superior', 'decrease')}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{superiorTickets}</span>
                  <Button variant="outline" size="icon" onClick={() => handleTicketChange('superior', 'increase')}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <Button className="w-full mt-6 bg-gray-800 hover:bg-gray-700">Comprar ahora</Button>
          </CardContent>
        </Card>
        
        <Card className="bg-white ">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-2">TITULO DEL EVENTO</h3>
            <p className="text-sm text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <h3 className="font-semibold text-lg mb-2">UBICACION</h3>
            <img
              src="https://images.unsplash.com/photo-1516803072545-10169fde5c59?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Event location map"
              width={400}
              height={200}
              className="w-full h-96 object-cover rounded-md "
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}