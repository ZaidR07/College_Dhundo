import College_Sidebar from "../Components/College_Sidebar";
import { colleges } from "../Constants/colleges";
import { useState } from "react";

// Define a type for the college structure
type CollegeType = {
  type: string;
  name: string;
  address: string;
  image: string; // Ensure this matches the actual data type (e.g., URL string)
  shortaddress?: string;
  owner?: string;
  fees?: string;
  naac: number;
  degree?: string;
  location?: string;
  studymode?: string;
  instituteType?: string;
};


const Colleges = () => {
  const [filteredlist, setFilteredlist] = useState<CollegeType[]>(colleges);

  return (
    <div className="flex w-full lg:p-[5%_5%_0_5%]">
      <College_Sidebar setFilteredlist={setFilteredlist} />
      <section className="flex-1 p-2 lg:p-4">
        {filteredlist && filteredlist.length > 0 ? (
          filteredlist.map((college, index) => (
            <div key={index} className="mb-4 flex rounded border p-4 shadow ">
              <div className="min-w-[45%] max-w-[45%]">
                <img
                  src={college.image} // Ensure this is a string URL
                  alt={college.name}
                  className="mb-2 h-auto w-4/5"
                />
                <h2 className="text-base md:text-xl font-semibold">{college.name}</h2>

                <span className="text-sm text-blue-500">{college.type}</span>
              </div>
              <section className="mt-2 md:mt-4">
                <div className="flex">
                      
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#155E75"  viewBox="0 0 512 512"   className="w-[15px] md:w-[18px]"> 
                    <path d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0L133.9 0c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0L487.4 0C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z" />
                  </svg>
                  <span className="ml-1 text-lg">Naac &nbsp;</span>
                  
                  {Array.from({ length: college.naac }, (_, index) => (
                    <>
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        className="w-[15px] md:w-[20px]"
                        fill="#FFD43B"
                      >
                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                      </svg>
                    </>
                  ))}
                </div>

                <div className="mt-[1vh] lg:mt-[5vh] flex flex-col lg:flex-row">
                  <div className="">
                    <svg
                      className="inline w-[12px] lg:w-[15px]"
                      xmlns="http://www.w3.org/2000/svg"
                     
                      fill="#155E75"
                      viewBox="0 0 384 512"
                    >
                      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                    </svg>
                    <span className="ml-2 text-base lg:text-lg">{college.shortaddress}</span>
                  </div>
                  <div className="mt-[1vh] lg:mt-[0vh] lg:ml-16">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fill="#155E75"
                      className="inline w-[12px] lg:w-[15px]"
                    >
                      <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 64 0 368 0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30l0-247.7c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48l0-16z" />
                    </svg>
                    <span className="ml-2 text-base lg:text-lg">{college.owner}</span>
                  </div>
                </div>
                <div className="mt-[1vh] lg:mt-[5vh]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    fill="#155E75"
                    className="inline"
                    width={15}
                  >
                    <path d="M0 64C0 46.3 14.3 32 32 32l64 0 16 0 176 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-56.2 0c9.6 14.4 16.7 30.6 20.7 48l35.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-35.6 0c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256l80 0c32.8 0 61-19.7 73.3-48L32 208c-17.7 0-32-14.3-32-32s14.3-32 32-32l153.3 0C173 115.7 144.8 96 112 96L96 96 32 96C14.3 96 0 81.7 0 64z" />
                  </svg>
                  <span className="ml-2 text-lg">{college.fees}</span>
                </div>
              </section>
            </div>
          ))
        ) : (
          <div className="grid h-24 w-full items-center justify-center border-2 border-[#0E7490] bg-cyan-50">
            No Matches Found
          </div>
        )}
      </section>
    </div>
  );
};

export default Colleges;
