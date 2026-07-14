import shoes from "../../assets/shoes.png";

const ShoesImage = () => {
  return (
    <div className="flex justify-center">
      <img
        src={shoes}
        alt="shoes"
        className="w-full h-auto scale-110 rounded-xl"
      />
    </div>
  );
};

export default ShoesImage;
