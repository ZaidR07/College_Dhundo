import { useEffect, useState } from "react";
import { colleges } from "../Constants/colleges";

interface CollegeSidebarProps {
  setFilteredlist: (filteredList: typeof colleges) => void;
}

const College_Sidebar: React.FC<CollegeSidebarProps> = ({ setFilteredlist }) => {
  const [stream, setStream] = useState<string[]>([]);
  const [degree, setDegree] = useState<string[]>([]);
  const [location, setLocation] = useState<string[]>([]);
  const [fees, setFees] = useState<string[]>([]);
  const [studyMode, setStudyMode] = useState<string[]>([]);
  const [instituteType, setInstituteType] = useState<string[]>([]);

  const handleFilterChange = (category: string, value: string, setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    setter((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const applyFilter = () => {
    let filtered = colleges;

    if (stream.length > 0) filtered = filtered.filter((item) => stream.includes(item.type));
    // if (degree.length > 0) filtered = filtered.filter((item) => degree.includes(item.degree));
    // if (location.length > 0) filtered = filtered.filter((item) => location.includes(item.location));
    // if (fees.length > 0) filtered = filtered.filter((item) => fees.includes(item.fees));
    // if (studyMode.length > 0) filtered = filtered.filter((item) => studyMode.includes(item.studyMode));
    // if (instituteType.length > 0) filtered = filtered.filter((item) => instituteType.includes(item.instituteType));

    setFilteredlist(filtered);
  };

  useEffect(() => {
    applyFilter();
  }, [stream, degree, location, fees, studyMode, instituteType]);

  const resetFilters = () => {
    setStream([]);
    setDegree([]);
    setLocation([]);
    setFees([]);
    setStudyMode([]);
    setInstituteType([]);
  };

  return (
    <section className="flex w-1/5 flex-col gap-3">
      {/* College Stream */}
      <div className="border-2 border-[#0E7490] bg-cyan-50 p-4">
        <h2 className="text-lg font-semibold">College Stream :</h2>
        {["Engineering", "Commerce", "Hotel Management", "Arts & Humanities", "Medical", "Law"].map(
          (category) => (
            <div key={category}>
              <input
                type="checkbox"
                value={category}
                checked={stream.includes(category)}
                onChange={(e) => handleFilterChange("stream", e.target.value, setStream)}
              />
              <span className="ml-2">{category}</span>
            </div>
          )
        )}
      </div>

      {/* Degree */}
      <div className="border-2 border-[#0E7490] bg-cyan-50 p-4">
        <h2 className="text-lg font-semibold">Degree :</h2>
        {["Diploma", "Bachelors", "Masters", "Doctorate"].map((category) => (
          <div key={category}>
            <input
              type="checkbox"
              value={category}
              checked={degree.includes(category)}
              onChange={(e) => handleFilterChange("degree", e.target.value, setDegree)}
            />
            <span className="ml-2">{category}</span>
          </div>
        ))}
      </div>

      {/* Location */}
      <div className="border-2 border-[#0E7490] bg-cyan-50 p-4">
        <h2 className="text-lg font-semibold">Location :</h2>
        {["Western Line", "Central Line", "Harbour Line", "Navi Mumbai"].map((category) => (
          <div key={category}>
            <input
              type="checkbox"
              value={category}
              checked={location.includes(category)}
              onChange={(e) => handleFilterChange("location", e.target.value, setLocation)}
            />
            <span className="ml-2">{category}</span>
          </div>
        ))}
      </div>

      {/* Fees Range */}
      <div className="border-2 border-[#0E7490] bg-cyan-50 p-4">
        <h2 className="text-lg font-semibold">Fees Range :</h2>
        {["Less than 1 lakh", "1 to 3 lakh", "3 to 5 lakh", "More than 5 lakh"].map((category) => (
          <div key={category}>
            <input
              type="checkbox"
              value={category}
              checked={fees.includes(category)}
              onChange={(e) => handleFilterChange("fees", e.target.value, setFees)}
            />
            <span className="ml-2">{category}</span>
          </div>
        ))}
      </div>

      {/* Study Mode */}
      <div className="border-2 border-[#0E7490] bg-cyan-50 p-4">
        <h2 className="text-lg font-semibold">Study Mode :</h2>
        {["Regular", "Online", "Part Time", "Distance"].map((category) => (
          <div key={category}>
            <input
              type="checkbox"
              value={category}
              checked={studyMode.includes(category)}
              onChange={(e) => handleFilterChange("studyMode", e.target.value, setStudyMode)}
            />
            <span className="ml-2">{category}</span>
          </div>
        ))}
      </div>

      {/* Institute Type */}
      <div className="border-2 border-[#0E7490] bg-cyan-50 p-4">
        <h2 className="text-lg font-semibold">Institute Type :</h2>
        {["Government", "Private", "Public"].map((category) => (
          <div key={category}>
            <input
              type="checkbox"
              value={category}
              checked={instituteType.includes(category)}
              onChange={(e) => handleFilterChange("instituteType", e.target.value, setInstituteType)}
            />
            <span className="ml-2">{category}</span>
          </div>
        ))}
      </div>

      {/* Reset Filters Button */}
      <button
        className="mt-4 p-2 bg-red-500 text-white font-semibold rounded"
        onClick={resetFilters}
      >
        Reset Filters
      </button>
    </section>
  );
};

export default College_Sidebar;
