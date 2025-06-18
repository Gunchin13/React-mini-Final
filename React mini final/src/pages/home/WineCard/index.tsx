const WineCard = () => {
  return (
    <div className="relative pb-20 pt-10">
      <div className="w-full h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url("https://dt-wine.myshopify.com/cdn/shop/files/parallax-bg.jpg?v=1613700990")' }}>
        <div className="absolute inset-0 opacity-40"></div>

        <div className="absolute top-0 left-0 pt-20  mt-40 mx-120">
        <h1 className="text-5xl text-black pb-5 font-philosopher">Upgrade to the latest!</h1>
          <span className="block text-xl text-[#c1001c]">Message from Wine Maker</span>
          <p className="mt-4 text-base text-black leading-7">
            Torem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. <br /> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br /> mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa <br /> quis enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget <br /> dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur <br /> ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla <br /> consequat massa quis enim.
          </p>
          <button className="mt-10 border border-solid hover:bg-[#d2aa5c] hover:text-white transition duration-200 cursor-pointer bg-white text-black py-3 px-6">
            View More
          </button>
          <img src="https://dt-wine.myshopify.com/cdn/shop/files/signature-1.png?v=1613689292" className="mt-15" alt="" />
        </div>
      </div>
    </div>
  );
};

export default WineCard;
