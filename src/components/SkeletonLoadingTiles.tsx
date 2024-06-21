const SkeletonLoadingTiles = () => {
  return Array.from({ length: 5 }).map((_, index) => (
    <div
      key={index}
      className="flex bg-gray-100 h-[100px] rounded-lg animate-pulse"
    >
      <div className="w-32 bg-gray-300 rounded-lg"></div>
      <div className="">
        <p className=""></p>
        <h3 className=""></h3>
      </div>
    </div>
  ));
};

export default SkeletonLoadingTiles;
