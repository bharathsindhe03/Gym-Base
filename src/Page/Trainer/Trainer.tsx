import Footer from "../../Components/Footer/Footer";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";

export default function Trainer() {
  const trainers = [
    { id: 1, src: p1, name: "John Doe", type: "Strength Coach" },
    { id: 2, src: p2, name: "Jane Smith", type: "Yoga Instructor" },
    { id: 3, src: p3, name: "Mike Johnson", type: "Personal Trainer" },
    { id: 4, src: p4, name: "Emily Davis", type: "Nutrition Specialist" },
  ];

  return (
    <>
      <div className="text-center p-6 bg-gray-100 animate-fadeIn">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Your Best Partner
        </h1>
        <h2 className="text-2xl text-gray-700 mb-4">Meet Our Team</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          We are a team of experienced people, passionate about nutrition,
          sports, and fitness, with talent and knowledge unsurpassed in the
          industry. Get to know us.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="border border-gray-300 rounded-lg p-4 w-64 bg-white text-center shadow-md transition-transform transform hover:scale-105 hover:shadow-lg animate-fadeIn"
            >
              <img
                loading="lazy"
                src={trainer.src}
                alt={trainer.name}
                className="w-full h-auto rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {trainer.name}
              </h3>
              <p className="text-sm text-gray-600">{trainer.type}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
