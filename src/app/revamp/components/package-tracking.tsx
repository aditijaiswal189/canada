import { Timeline } from "./timeline"

export function PackageTracking() {
  const trackingItems = [
    {
      title: "The shipment has arrived at the terminal",
      location: "BERGEN",
      timestamp: "March 23 at 08:20",
      isCompleted: true
    },
    {
      title: "The shipment is in transit",
      location: "OSLO",
      timestamp: "March 22 at 14:30",
      isCompleted: true
    },
    {
      title: "The broadcast is sorted and forwarded",
      location: "OSLO",
      timestamp: "March 22 at 08:38",
      isCompleted: true
    },
    {
      title: "Consignment has been dispatched to the terminal and forwarded",
      location: "OSLO",
      timestamp: "March 22 at 06:23",
      isCompleted: true
    },
    {
      title: "We have received information about the shipment",
      timestamp: "March 21 at 07:35",
      location: "OSLO",
      isCompleted: true,
      isLast: true
    }
  ]

  const packageMetadata = [
    {
      label: "WEIGHT",
      value: "373325383577912985"
    },
    {
      label: "WEIGHT",
      value: "0.3 kg"
    },
    {
      label: "DIMENSIONS",
      value: "37 x 25 x 7 cm"
    }
  ]

  return (
    <Timeline
      title="Package Details"
      metadata={packageMetadata}
      items={trackingItems}
    />
  )
}

