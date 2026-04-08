export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] px-6">

      <div className="max-w-xl w-full text-center  rounded-xl p-12  bg-white">

        {/* Icon */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50">
            <svg
              className="w-7 h-7 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              <circle cx="12" cy="12" r="9" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-semibold text-gray-900 mb-3">
        Payment Gate API
        </h1>

        {/* Badge */}
        <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full mb-6 animate-pulse">
          Coming Soon
        </span>

        {/* Description */}
        <p className="text-gray-500 max-w-md mx-auto">
          Documentation for the Payment Gate API  is currently under development.
          We're working hard to release it soon.
        </p>

      </div>

    </div>
  );
}