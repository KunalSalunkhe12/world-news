const SkeletonCard = () => {
  return (
    <div className="border-2 rounded-lg">
      <div className="h-48 w-full rounded-t-lg bg-gray-200"></div>
      <div className="p-4 flex-1 flex flex-col gap-4 h-60">
        <h2 className="h-8 bg-gray-200"></h2>
        <p className="h-20 bg-gray-200"></p>
      </div>
    </div>
  );
};

const SkeletonLoading = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {[...Array(8)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default SkeletonLoading;
