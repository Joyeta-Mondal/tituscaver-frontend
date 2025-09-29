import { Badge, Progress } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Dashboard() {
  const stats = [
    { label: "New Orders", value: "2", color: "bg-blue-500" },
    { label: "Old Orders", value: "7", color: "bg-blue-500" },
    { label: "Completed Orders", value: "5", color: "bg-blue-500" },
    { label: "Success Rate", value: "100.0%", color: "bg-yellow-500" },
  ];

  const activeOrders = [
    {
      id: "#483238",
      status: "In Transit",
      progress: 75,
      deliveryDate: "Today, 2:30 PM",
      mapImage: "/images/landingPage/Dashboard/firstMap.png",
    },
    {
      id: "#483239",
      status: "In Transit",
      progress: 45,
      deliveryDate: "Today, 4:15 PM",
      mapImage: "/images/landingPage/Dashboard/firstMap.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#E5E7EB] pt-16 md:pt-28">
      <div className="mx-auto max-w-[1440px] px-4 py-8 md:px-8 md:py-12">
        {/* Header Section */}
        <div className="mb-8 space-y-2">
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">Welcome back John</h1>
          <p className="text-gray-600">Here&apos;s what&apos;s happening with your orders today.</p>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center space-x-3">
                  <div className={`h-3 w-3 rounded-full ${stat.color}`} />
                  <div>
                    <p className="text-2xl font-bold text-gray-900 md:text-3xl">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Place New Order Button */}
        <div className="mb-8">
          <button className="rounded-md bg-blue-700 px-6 py-2 text-white">Place New Order</button>
        </div>

        {/* Active Orders Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Active Orders</h2>

          <div className="space-y-6">
            {activeOrders.map((order, index) => (
              <Card key={index} className="bg-white text-black">
                <CardHeader className="pb-4">
                  <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div>
                      <CardTitle className="text-lg">Order {order.id}</CardTitle>
                      <p className="text-sm text-gray-600">
                        Expected Delivery Date: {order.deliveryDate}
                      </p>
                    </div>
                    <Badge variant="secondary" className="w-fit bg-green-100 text-green-800">
                      {order.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{order.progress}%</span>
                    </div>
                    <Progress value={order.progress} className="h-2" />
                  </div>

                  {/* Map and Actions */}
                  <div className="flex flex-col gap-4 lg:flex-row">
                    <div className="flex-1">
                      <Image
                        height={1600}
                        width={1600}
                        src={order.mapImage || "/placeholder.svg"}
                        alt="Delivery location map"
                        className="h-48 w-full rounded-lg border object-cover md:h-56"
                      />
                    </div>

                    <div className="flex flex-row gap-2 lg:w-48 lg:flex-col">
                      <Button variant="outline" className="flex-1 rounded-full">
                        Contact Driver
                      </Button>
                      <Button className="flex-1 rounded-full bg-blue-700 text-white">
                        Track Order
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
