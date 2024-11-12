const orders = [
  {
    orderNumber: "ORD123456",
    customer: {
      name: "Customer 1",
      phone: "+1234567890",
      address: "123 Main Area, City, Country",
    },
    area: "Downtown",
    items: [
      { name: "Item A", quantity: 2, price: 25.0 },
      { name: "Item B", quantity: 1, price: 15.0 },
    ],
    status: "pending",
    scheduledFor: "10:30",
    assignedTo: "test 02",
    totalAmount: 65.0,
    createdAt: new Date("2024-11-01T10:00:00Z"),
    updatedAt: new Date("2024-11-01T10:00:00Z"),
  },
  {
    orderNumber: "ORD456789",
    customer: {
      name: "Customer 1",
      phone: "+1234567891",
      address: "456 Main Area, City, Country",
    },
    area: "Gandhi Road",
    items: [
      { name: "Item A", quantity: 2, price: 100.0 },
      { name: "Item B", quantity: 1, price: 70.0 },
    ],
    status: "delivered",
    scheduledFor: "13:00",
    assignedTo: "John Doe",
    totalAmount: 170.0,
    createdAt: new Date("2024-11-01T10:00:00Z"),
    updatedAt: new Date("2024-11-01T10:00:00Z"),
  },
  {
    orderNumber: "ORD789123",
    customer: {
      name: "Customer 1",
      phone: "+1234567892",
      address: "789 Main Area, City, Country",
    },
    area: "Jhasi ki Rani Colony",
    items: [
      { name: "Item A", quantity: 2, price: 450.0 },
      { name: "Item B", quantity: 1, price: 15.0 },
    ],
    status: "assigned",
    scheduledFor: "11:30",
    assignedTo: "test 03",
    totalAmount: 465.0,
    createdAt: new Date("2024-11-01T10:00:00Z"),
    updatedAt: new Date("2024-11-01T10:00:00Z"),
  }
]

module.exports = orders;