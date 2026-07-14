import Bag from "../../assets/BagImage.png";
const BagImage = () => {
  return (
    <div className="flex justify-center">
      <img
        src={Bag}
        alt="BagImage"
        className="w-full h-auto scale-110 rounded-xl"
      />
    </div>
  );
};

export default BagImage;
