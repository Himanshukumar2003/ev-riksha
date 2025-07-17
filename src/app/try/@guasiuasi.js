"use client";

import { useEffect, useState } from "react";

export const Data = {
  "Amrit Malwa": {
    HARYANA: ["AMBALA", "HISAR", "KAITHAL", "PANIPAT", "YAMUNANAGAR"],
    MP: ["GWALIOR"],
    Punjab: [
      "AMRITSAR",
      "BATHINDA",
      "BEGOWAL",
      "CHANDIGARH",
      "DASUYA",
      "FEROZEPUR",
      "GURDASPUR",
      "HOSHIARPUR",
      "JAGRAON",
      "KHANNA",
      "MALERKOTLA",
      "MALOUT",
      "MOGA",
      "MUKERIAN",
      "NAKODAR",
      "PATHANKOT",
      "PHILLAUR",
      "SAHNEWAL (LUDHIANA)",
      "SANGRUR",
      "TANDA",
    ],
    RAJASTHAN: [
      "GANGANAGAR",
      "JAIPUR",
      "JHUNJHUNU",
      "KHAIRTHAL",
      "KHERLI",
      "KISHANGARH",
      "SALASAR",
      "SHAHPURA",
      "SIKAR",
    ],
    "UTTAR PRADESH": [
      "AGRA",
      "BAHRAICH",
      "BAREILLY",
      "BUDAUN",
      "KANPUR",
      "LUCKNOW",
      "MATHURA",
      "MEERUT",
      "MORADABAD",
      "RAEBARELI",
      "RUDRAPUR",
      "SAHARANPUR",
      "SHAHJAHANPUR",
      "SITAPUR",
      "SULTANPUR",
      "VARANASI",
    ],
    UTTRAKHAND: ["DEHRADUN"],
  },
  Akasha: {
    "UTTAR PRADESH": [
      "AGRA",
      "MATHURA",
      "SULTANPUR",
      "VARANASI",
      "Gazipur",
      "Jaunpur",
      "Mirzapur",
      "Bhadhohi",
      "Prayagraj",
      "Pratapgarh",
      "Ayodhya",
      "Ambedkar Nagar",
      "Basti",
      "Gorakhpur",
      "Kaushambi",
      "SANT KABIR NAGAR",
      "Deoria",
    ],
    UTTRAKHAND: ["HARIDWAR", "RURKEE", "KASHIPUR", "UDHAM SINGH NAGAR"],
    Assam: [
      "Kokrajhar",
      "Sapatgram",
      "Gossaigoan",
      "Dhubri",
      "Gouripur",
      "Bongaigaon",
      "Basugaon",
      "Bijini",
      "Abhaypur",
      "Simlaguri",
      "Barpeta road",
      "Barpeta",
      "Haowli",
      "Pathsala",
      "Patasarkuchi",
      "Baksa",
      "Nalbari Town",
      "Hajo",
      "Rangia",
      "Amingaon",
      "V.I.P Road 6mile",
      "Jalokbari",
      "Lakra/ Bora goan",
      "Nagaon",
      "Nonoi",
      "Teligaon",
      "Morigaon",
      "Morgaon Main Market",
      "Jahagirroad",
      "Raja gaon",
      "Alikuchi",
      "Udalguri",
      "Dalgaon",
      "Dimal kuchi",
      "Tangla",
      "Orang",
      "Hojai",
      "Darang",
      "Kaliagaon",
      "Sonitpur",
      "Tejpur",
      "Goligaon",
      "Vihuguri",
      "Thelamara",
      "Balipara",
      "Jamo Guri Haat",
      "Dalimil",
      "Balipara",
      "Rangapara",
      "Dhemaji",
      "Tinsukia",
      "Majuli",
      "Jorhat",
      "Biswanath Chariali",
      "Sivasagar",
      "Golaghat",
      "Dibrugarh",
      "Lakhimpur(Assam)",
      "Cachar",
      "Goalpara",
      "kamrup metro ( guwahati)",
      "kamrup rural",
      "shivsagar",
    ],
    CHHATISGARH: ["Raipur", "Durg", "Bilaspur", "Dhamtari", "Ambikapur"],
    "NORTH BENGAL": [
      "Alipurduar",
      "Tufanganj",
      "Falakata/Mathabhanga/Ghokshadanga",
      "Islampur",
      "Dinhata",
      "Raiganj",
      "Itahar",
      "Tungidhighi",
      "Kaliyanganj",
      "Malda, Gazole & Chachol",
      "Balurghat & Gangarampur",
      "Coochbehar",
      "Dhupguri & Maynaguri",
      "Malbazaar",
      "Jalpaiguri & Belacoba",
      "HALDIBARI",
      "Siliguri & Odlabari & Bagdogra & Naxalbari",
    ],
    "SOUTH BENGAL": [
      "South 24 Pgs.",
      "Baruipur",
      "Sonarpur",
      "Diamond Harbour",
      "North 24 Pgs.",
      "Barasat",
      "Habra",
      "Basirhat",
      "Chakdah",
      "Ranaghat",
      "Krishnanagar",
      "NADIA",
      "Hooghly",
      "Tarakeswar",
      "East & West Burdwan",
      "Asansol",
      "Ranigunj",
      "Howrah",
      "Uluberia",
      "Mednipur",
      "Bakura",
      "Berhampur",
      "Murshidabad",
      "Birbhum",
      "Purulia",
      "Kharagpur",
    ],
    Bihar: [
      "Patna",
      "Vaishali",
      "Nalanda",
      "Nawada",
      "Gaya",
      "Muzzaffarpur",
      "Motihari",
      "Samastipur",
      "Chapra",
      "Saran",
      "Darbhanga",
      "Madhubani",
      "Siwan",
      "Gopalganj",
      "Sitamarhi",
      "Seikhpura",
      "Barh (Patna)",
      "AARAH",
      "Sasaram",
      "Arariya",
      "Purniya & Katihar",
      "Kishanganj & Thakurganj",
    ],
    ODISHA: ["Puri"],
    JHARKHAND: [
      "Bokaro",
      "Dhanbad",
      "Giridih",
      "Deoghar",
      "Dumka",
      "Pakur",
      "Godda",
      "Rachi",
      "Koderma",
      "Hazaribagh",
      "Ramghar",
      "Khunti",
    ],
  },
  PKF: {
    HARYANA: ["AMBALA", "YAMUNANAGAR", "Karnal", "Gurgoan", "Rewari", "Narmul"],
    MP: ["Rewa", "Sidhi", "Satna", "Katni", "Jabalpur", "DAHMOH", "CHHATARPUR"],
    Punjab: [
      "JALANDHAR",
      "PATIALA",
      "Batala",
      "Phagwara",
      "Hoshiarpur",
      "Ludhiana",
      "Mohali",
    ],
    UTTRAKHAND: [
      "HARIDWAR",
      "RURKEE",

      "UDHAM SINGH NAGAR",
      "Rishikesh",
      "DEHRADUN",
    ],
  },
};

export const FinancerData = {
  "Amrit Malwa": {
    logo: "/img/amc.png",
    downPayment: 30000,
  },
  Akasha: {
    logo: "/img/akasa.png",
    downPayment: 30000,
    interestRate: 60,
    downPayment: 10000,
  },
  PKF: {
    logo: "/img/pkf.png",
    interestRate: 80,
    downPayment: 0,
  },
};
// 🔁 Get all unique states
const getAllStates = () => {
  const stateSet = new Set();
  for (const company in data) {
    const companyData = data[company];
    for (const state in companyData) {
      if (Array.isArray(companyData[state])) {
        stateSet.add(state);
      }
    }
  }
  return Array.from(stateSet);
};

// 🔁 Get all cities for selected state
const getCitiesByState = (state) => {
  const citySet = new Set();
  for (const company in data) {
    const companyData = data[company];
    if (Array.isArray(companyData[state])) {
      companyData[state].forEach((city) => citySet.add(city));
    }
  }
  return Array.from(citySet);
};

// 🔁 Find company based on selected city and state
const getCompanyByStateCity = (state, city) => {
  for (const company in data) {
    const cities = data[company][state];
    if (Array.isArray(cities) && cities.includes(city)) {
      return { name: company, ...data[company] };
    }
  }
  return null;
};

export default function DealerSelector() {
  const [selectedData, setSelectedData] = useState({ state: "", city: "" });
  const [matchedCompany, setMatchedCompany] = useState([]);

  // When state changes
  const handleStateChange = (state) => {
    setSelectedData({ state, city: "" });
  };

  // When city changes
  const handleCityChange = (city) => {
    setSelectedData((prev) => ({ ...prev, city }));
  };

  useEffect(() => {
    if (selectedData.state && selectedData.city) {
      const matched = [];

      Object.entries(data).forEach(([financerName, financerData]) => {
        if (selectedData.state in financerData) {
          if (financerData[selectedData.state].includes(selectedData.city)) {
            matched.push(financerName);
          }
        }
      });

      setMatchedCompany(matched); // ✅ reset with fresh match
    } else {
      setMatchedCompany([]);
    }
  }, [selectedData]);

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-6">
      <div className="grid grid-cols-2 gap-3">
        {/* State Dropdown */}
        <select
          className="border-2 border-green-200 py-3 px-4 rounded-xl text-sm col-span-2 focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all bg-white shadow-sm"
          value={selectedData.state}
          onChange={(e) => handleStateChange(e.target.value)}
        >
          <option value="">Select State*</option>
          {getAllStates().map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        {/* City Dropdown */}
        {selectedData.state && (
          <select
            className="border-2 border-green-200 py-3 px-4 rounded-xl text-sm col-span-2 focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all bg-white shadow-sm"
            value={selectedData.city}
            onChange={(e) => handleCityChange(e.target.value)}
            disabled={!selectedData.state}
          >
            <option value="">Select City*</option>
            {getCitiesByState(selectedData.state).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Matched Company Display */}
      {matchedCompany.length > 0 &&
        matchedCompany.map((financer) => {
          return (
            <div key={financer} className="mt-4 text-center">
              <p className="text-lg font-semibold">{financer}</p>
              <p className="text-sm text-gray-600">
                Parstage: {financerData[financer].percentage}%
              </p>
              <img
                src={financerData[financer].logo}
                alt="Dealer Logo"
                className="w-28 h-auto mx-auto mt-3"
              />
            </div>
          );
        })}
    </div>
  );
}
