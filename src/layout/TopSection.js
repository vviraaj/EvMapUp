const data = [
  {
    type: "Battery Electric Vehicle (BEV)",
    avgElectricRange: "66.83",
    avgBaseMSRP: "$935.71",
    rangeLabel: "Avg. Electric Range (miles)",
    msrpLabel: "Avg. Base MSRP",
  },
  {
    type: "Plug-in Hybrid Electric Vehicle (PHEV)",
    avgElectricRange: "30.62",
    avgBaseMSRP: "$1587.10",
    rangeLabel: "Avg. Electric Range (miles)",
    msrpLabel: "Avg. Base MSRP",
  },
  {
    type: "Grand Total",
    avgElectricRange: "59.19",
    avgBaseMSRP: "$1073.01",
    rangeLabel: "Avg. Electric Range (miles)",
    msrpLabel: "Avg. Base MSRP",
  },
];

export default function TopSection() {
  return (
    <div className="bg-gray-100 pt-12 sm:pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-blue-400 sm:text-2xl">
            Multivariate Analysis: Electric Range, Base MSRP, and EV Type
          </h2>
        </div>
      </div>
      <div className="mt-10 bg-white pb-12 sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${
                      index === 0
                        ? "border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r"
                        : index === 1
                        ? "border-b border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r"
                        : "border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l"
                    }`}
                  >
                    <dt className="order-2 mt-2 text-[14px] font-medium  text-gray-500">
                      {item.type}
                    </dt>
                    <dd className="order-1 text-2xl font-bold tracking-tight text-indigo-600">
                      {item.avgElectricRange}
                    </dd>
                    <span className="text-sm text-gray-500">
                      {item.rangeLabel}
                    </span>
                    <dd className="mt-1 text-2xl font-bold tracking-tight text-indigo-600">
                      {item.avgBaseMSRP}
                    </dd>
                    <span className="text-sm text-gray-500">
                      {item.msrpLabel}
                    </span>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
