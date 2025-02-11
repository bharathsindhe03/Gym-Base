import Footer from "../../Components/Footer/Footer";
import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.png";
import b3 from "../../assets/b3.png";
import b4 from "../../assets/b4.png";
import b5 from "../../assets/b5.png";
import b6 from "../../assets/b6.png";

export default function Blob() {
  const blobs = [
    {
      id: 1,
      src: b1,
      title: "Adventure Blob",
      description: "Explore the uncharted territories with this amazing blob.",
      category: "Adventure",
      date: "2024-01-10",
    },
    {
      id: 2,
      src: b2,
      title: "Classic Blob",
      description: "A timeless blob for every occasion. Perfect for daily use.",
      category: "Classic",
      date: "2023-12-25",
    },
    {
      id: 3,
      src: b3,
      title: "Urban Blob",
      description:
        "Perfect for the city life, this blob offers unmatched comfort.",
      category: "Urban",
      date: "2024-02-15",
    },
    {
      id: 4,
      src: b4,
      title: "Nature Blob",
      description:
        "Inspired by nature, this blob brings peace and tranquility.",
      category: "Nature",
      date: "2024-03-01",
    },
    {
      id: 5,
      src: b5,
      title: "Mystic Blob",
      description: "A mysterious blob that offers both elegance and strength.",
      category: "Mystic",
      date: "2024-01-20",
    },
    {
      id: 6,
      src: b6,
      title: "Futuristic Blob",
      description: "Step into the future with this sleek, high-tech blob.",
      category: "Futuristic",
      date: "2024-02-05",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center px-5 py-10">
        <div className="w-full max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-6">
            Our Latest Blobs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {blobs.map((blob) => (
              <div
                key={blob.id}
                className="bg-white border rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <img
                  src={blob.src}
                  alt={blob.title}
                  className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-80"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {blob.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{blob.description}</p>
                  <p className="text-gray-400 text-sm mt-3">
                    Date Added: {blob.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
