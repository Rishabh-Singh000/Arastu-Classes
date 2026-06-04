export function SectionSkeleton({ height = 'h-64' }: { height?: string }) {
  return (
    <div className={`${height} animate-pulse rounded-xl`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 lg:py-24">
        {/* Title skeleton */}
        <div className="flex flex-col items-center mb-12">
          <div className="h-10 w-72 bg-gray-200 rounded-lg mb-3" />
          <div className="h-1 w-24 bg-gray-200 rounded-full mb-4" />
          <div className="h-4 w-64 bg-gray-100 rounded" />
        </div>
        {/* Content skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-100 rounded-xl p-6 space-y-4">
              <div className="h-4 w-3/4 bg-gray-200 rounded" />
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 rounded" />
              <div className="h-32 bg-gray-200 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FullWidthSkeleton() {
  return (
    <div className="h-48 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-gray-100 rounded-xl p-6 flex flex-col items-center gap-2">
              <div className="h-10 w-10 bg-gray-200 rounded-full" />
              <div className="h-6 w-16 bg-gray-200 rounded" />
              <div className="h-3 w-12 bg-gray-100 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
