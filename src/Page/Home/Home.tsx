import sec1 from "../../assets/section1.png";
import Footer from "../../Components/Footer/Footer";
import bg from "../../assets/bg.png";
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-6"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <section className="animate-fade-in-up">
          <h2 className="text-4xl font-bold">FUEL YOUR</h2>
          <h1 className="text-5xl font-extrabold mt-2">BODY FITNESS</h1>
          <p className="text-lg max-w-2xl mt-4">
            When we created Gym Base, we knew we wanted to be more than just a
            simple gym. Having worked in traditional gyms, we knew we needed to
            create a concept that provides members with the most effective tools
            for success.
          </p>
        </section>
      </div>

      {/* Services Section */}
      <section className="text-center mt-12 px-6 mb-4">
        <h2 className="text-3xl font-bold">SERVICE WE PROVIDE</h2>
        <h3 className="text-2xl font-semibold mt-2">OUR SERVICES</h3>
        <p className="text-lg max-w-2xl mx-auto mt-4">
          At Gym Base, we offer a range of specialized equipment for strength
          training, cardio, and general fitness to help you achieve your goals.
        </p>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center items-center mt-10 gap-6">
          {/* Left Column */}
          <div className="flex flex-col space-y-6 max-w-sm">
            <ServiceCard
              title="STRENGTH EQUIPMENT"
              description="Build muscle, increase endurance, and develop strength with our state-of-the-art strength training equipment."
            />
            <ServiceCard
              title="HEALTH EQUIPMENT"
              description="Improve cardiovascular health, flexibility, and mobility with our specialized fitness machines."
            />
            <ServiceCard
              title="ENERGY EQUIPMENT"
              description="Boost energy levels, increase stamina, and improve overall vitality with our high-intensity training tools."
            />
          </div>

          {/* Center Image */}
          <div className="max-w-md">
            <img
              src={sec1}
              alt="Gym Equipment"
              className="w-full rounded-lg shadow-lg animate-fade-in"
              loading="lazy"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-6 max-w-sm">
            <ServiceCard
              title="GYM EQUIPMENT"
              description="A variety of gym equipment for strength training, cardio, and flexibility, including dumbbells and elliptical machines."
            />
            <ServiceCard
              title="WEIGHT EQUIPMENT"
              description="Increase muscle mass and strength with our selection of weightlifting machines and free weights."
            />
            <ServiceCard
              title="ENERGY EQUIPMENT"
              description="Recover, recharge, and enhance endurance with our performance-focused fitness machines."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// Reusable Service Card Component
interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => (
  <div className="bg-white shadow-lg rounded-lg p-5 text-black transition-transform transform hover:scale-105 animate-fade-in">
    <h4 className="text-xl font-bold">{title}</h4>
    <p className="text-sm mt-2">{description}</p>
  </div>
);
