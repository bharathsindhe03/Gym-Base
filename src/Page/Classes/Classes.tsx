import Footer from "../../Components/Footer/Footer";
import athlete from "../../assets/ATHLETE.png";
import bodypump from "../../assets/BODY PUMP.png";
import crossfit from "../../assets/CROSSFIT.png";

export default function Classes() {
  const categories = [
    {
      id: 1,
      src: athlete,
      desc: "Athlete training focuses on strength, endurance, and performance enhancement.",
    },
    {
      id: 2,
      src: bodypump,
      desc: "Body Pump is a high-energy class designed to tone and strengthen your body.",
    },
    {
      id: 3,
      src: crossfit,
      desc: "CrossFit combines functional movements with high-intensity interval training.",
    },
  ];

  return (
    <>
      <div className="text-center p-5 bg-gray-100 mb-4 animate-fadeIn">
        <h1 className="text-3xl md:text-2xl font-bold text-gray-800 mb-5">
          Our Classes
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="border border-gray-300 rounded-lg p-4 w-72 bg-white text-center shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={category.src}
                alt={`Class ${category.id}`}
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
              <p className="mt-3 text-gray-600 text-sm md:text-base">
                {category.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
