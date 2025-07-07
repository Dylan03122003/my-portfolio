import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Star, ChevronRight } from "lucide-react";
import certifications from "../data/certifications";
import BackgroundPattern from "../components/BackgroundPattern";
import SectionHeader from "../components/SectionHeader";

// TypeScript interface for certification data
interface Certification {
  title: string;
  issuedBy: string;
  issuedAt: string;
  link: string;
  isHighlighted: boolean;
}

const Certifications = () => {
  const [filter, setFilter] = useState<"all" | "highlighted">("all");
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter certifications based on the current filter
  const filteredCertifications =
    filter === "all"
      ? certifications
      : certifications.filter((cert) => cert.isHighlighted);

  // Show more certifications when clicking "Show More"
  const handleShowMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + 6, filteredCertifications.length)
    );
  };

  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(6);
  }, [filter]);

  return (
    <section id="certifications" className="relative min-h-screen">
      <BackgroundPattern />

      <div className="max-w-6xl mx-auto px-4 py-16 ">
        {/* Section header */}
        <SectionHeader
          mainTitle="Professional Certifications"
          subTitle="Certifications"
          icon={<Award size={16} className="mr-2" />}
          description="Enhancing my skills through recognized certifications"
        />

        {/* Filter tabs */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="inline-flex bg-slate-200 dark:bg-slate-700 p-1 rounded-lg">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                filter === "all"
                  ? "bg-white dark:bg-slate-600 text-indigo-700 dark:text-indigo-200 shadow-md"
                  : "text-slate-600 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600"
              }`}
            >
              All Certifications
            </button>
            <button
              onClick={() => setFilter("highlighted")}
              className={`px-4 py-2 rounded-md font-medium flex items-center transition-all ${
                filter === "highlighted"
                  ? "bg-white dark:bg-slate-600 text-indigo-700 dark:text-indigo-200 shadow-md"
                  : "text-slate-600 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600"
              }`}
            >
              <Star className="h-4 w-4 mr-1" /> Highlighted
            </button>
          </div>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCertifications.slice(0, visibleCount).map((cert, index) => (
            <motion.div
              key={cert.title}
              className={`border rounded-xl overflow-hidden transition-all cursor-pointer ${
                selectedCert?.title === cert.title
                  ? "border-indigo-500 dark:border-indigo-900 shadow-lg bg-indigo-50 dark:bg-slate-800"
                  : "border-slate-200 dark:border-slate-700 shadow hover:shadow-md bg-white dark:bg-gray-800/80"
              }`}
              onClick={() => setSelectedCert(cert)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div
                      className={`p-3 rounded-lg ${
                        cert.isHighlighted ? "bg-yellow-100" : "bg-slate-100"
                      }`}
                    >
                      <Award
                        className={`h-6 w-6 ${
                          cert.isHighlighted
                            ? "text-yellow-600"
                            : "text-slate-600"
                        }`}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white group-hover:text-indigo-600 flex items-center">
                      {cert.title}
                      {cert.isHighlighted && (
                        <Star className="h-4 w-4 ml-2 text-yellow-500 fill-yellow-500" />
                      )}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 mb-2">
                      {cert.issuedBy}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                        {cert.issuedAt}
                      </span>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-slate-500 dark:text-slate-300 hover:text-indigo-600 flex items-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>View Certificate</span>
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show more button */}
        {visibleCount < filteredCertifications.length && (
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <button
              onClick={handleShowMore}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center shadow-md hover:shadow-lg"
            >
              Show More <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </motion.div>
        )}

        {/* Selected certification details - modal-like experience */}
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl max-w-lg w-full p-8 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 10 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`p-4 rounded-full ${
                    selectedCert.isHighlighted
                      ? "bg-yellow-100"
                      : "bg-slate-100"
                  } mr-4`}
                >
                  <Award
                    className={`h-8 w-8 ${
                      selectedCert.isHighlighted
                        ? "text-yellow-600"
                        : "text-slate-600"
                    }`}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                    {selectedCert.title}
                    {selectedCert.isHighlighted && (
                      <span className="inline-flex items-center ml-2 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded">
                        <Star className="h-3 w-3 mr-1 fill-yellow-500" />{" "}
                        Highlighted
                      </span>
                    )}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-300">
                    Issuing Organization
                  </p>
                  <p className="font-medium text-slate-800 dark:text-slate-200">
                    {selectedCert.issuedBy}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-300">
                    Issue Date
                  </p>
                  <p className="font-medium text-slate-800 dark:text-slate-200">
                    {selectedCert.issuedAt}
                  </p>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
                >
                  Close
                </button>
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center"
                >
                  View Certificate <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
