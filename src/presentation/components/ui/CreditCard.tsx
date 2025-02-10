import { Button } from "@/presentation/components/ui/button"
import { Card } from "@/presentation/components/ui/card"
import { Plus } from "lucide-react"

export default function CreditCardComponent() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h2 className="text-2xl font-bold mb-2">Mis tarjetas</h2>
      <p className="text-sm text-gray-500 mb-6">
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit.
      </p>
      <div className="space-y-4">
        <Card className="bg-blue-500 text-white p-6 rounded-xl shadow-lg">
          <div className="flex justify-between items-start mb-8">
            <span className="text-2xl font-bold">VISA</span>
            <span className="text-lg">Débito</span>
          </div>
          <div className="mb-4">
            <span className="text-xl tracking-wider">1234 5678 9012 3456</span>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs mb-1">Titular de la tarjeta</p>
              <p className="text-sm font-semibold">NOMBRE APELLIDO</p>
            </div>
            <div>
              <p className="text-xs mb-1">Expira</p>
              <p className="text-sm font-semibold">12/24</p>
            </div>
          </div>
        </Card>
        <Card className="bg-gray-900 text-white p-6 rounded-xl shadow-lg">
          <div className="flex justify-between items-start mb-8">
            <span className="text-2xl font-bold">mastercard</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-wifi"
            >
              <path d="M5 12.55a11 11 0 0 1 14.08 0" />
              <path d="M1.42 9a16 16 0 0 1 21.16 0" />
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
              <line x1="12" y1="20" x2="12.01" y2="20" />
            </svg>
          </div>
          <div className="mb-4">
            <span className="text-xl tracking-wider">1234 5678 9012 3456</span>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs mb-1">Titular de la tarjeta</p>
              <p className="text-sm font-semibold">NOMBRE APELLIDO</p>
            </div>
            <div>
              <p className="text-xs mb-1">Expira</p>
              <p className="text-sm font-semibold">12/24</p>
            </div>
          </div>
        </Card>
      </div>
      <Button
        size="icon"
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg bg-blue-500 hover:bg-blue-600"
      >
        <Plus className="h-6 w-6" />
        <span className="sr-only">Add new card</span>
      </Button>
    </div>
  )
}