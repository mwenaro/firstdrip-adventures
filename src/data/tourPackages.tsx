export type Day = {
  day: number;
  title: string;
  description: string;
};

export type TourPackage = {
  title: string;
  days: number;
  nights: number;
  itinerary: Day[];
  included: string[];
  excluded: string[];
};

export const tourPackages: TourPackage[] = [
  {
    title: "3 DAYS 2 NIGHTS MOMBASA CITY & DIANI BEACH ESCAPE",
    days: 3,
    nights: 2,
    itinerary: [
      {
        day: 1,
        title: "Day 1: Mombasa City Tour & Diani Transfer",
        description:
          "Morning pickup from Mombasa hotel/airport. Explore Fort Jesus and Old Town's spice markets. Cross Likoni Ferry to Diani Beach. Check into beach resort (e.g., Baobab Beach Resort). Sunset dhow cruise with Swahili snacks.",
      },
      {
        day: 2,
        title: "Day 2: Diani Marine Adventure",
        description:
          "Full-day excursion to Kisite-Mpunguti Marine Park (snorkeling with dolphins!). Visit Colobus Conservation Center. Optional kite surfing lesson (extra cost). Evening beachfront seafood dinner.",
      },
      {
        day: 3,
        title: "Day 3: Beach Relaxation & Return",
        description:
          "Free morning for beach activities or spa treatments. Return to Mombasa via ferry with lunch stop at Nyali Beach. Airport/hotel drop-off by 3PM.",
      },
    ],
    included: [
      "Mombasa airport/hotel pickup",
      "2 nights at Diani beachfront resort",
      "All ground transfers (including ferry)",
      "Kisite Marine Park snorkeling trip",
      "Guided Fort Jesus tour",
      "Breakfast & dinner daily",
    ],
    excluded: [
      "Kite surfing fees ($50-80)",
      "Alcoholic drinks",
      "Tips for guides/drivers",
      "Likoni Ferry delays (contingency time included)",
    ],
  },
  {
    title: "4 DAYS 3 NIGHTS NORTH COAST EXPLORER (MOMBASA TO WATAMU)",
    days: 4,
    nights: 3,
    itinerary: [
      {
        day: 1,
        title: "Day 1: Mombasa to Watamu",
        description:
          "Depart Mombasa after breakfast. Visit Haller Park (giraffe feeding) and Bamburi Beach. Drive north to Watamu (2.5 hrs). Check into eco-lodge (e.g., Hemingways Watamu). Evening mangrove kayaking at Mida Creek.",
      },
      {
        day: 2,
        title: "Day 2: Watamu Marine Wonders",
        description:
          "Morning snorkeling at Watamu Marine Park (turtle sightings!). Visit Local Ocean Trust turtle rehabilitation center. Afternoon beach relaxation or deep-sea fishing (optional).",
      },
      {
        day: 3,
        title: "Day 3: Gedi Ruins & Arabuko Forest",
        description:
          "Explore 13th-century Gedi Ruins. Guided walk in Arabuko-Sokoke Forest (spot golden-rumped elephant shrews!). Return to Watamu for Swahili seafood feast.",
      },
      {
        day: 4,
        title: "Day 4: Return to Mombasa",
        description:
          "Morning at leisure. Return to Mombasa with stop at Nyali Beach for lunch. Airport/hotel drop-off by 4PM.",
      },
    ],
    included: [
      "Mombasa hotel/airport pickup",
      "3 nights Watamu accommodation",
      "All park entry fees",
      "Marine park snorkeling gear",
      "Mida Creek kayak rental",
      "Professional guide services",
    ],
    excluded: [
      "Deep-sea fishing charters",
      "Souvenirs",
      "Alcoholic beverages",
      "Travel insurance",
    ],
  },
  {
    title: "2 DAYS 1 NIGHT MOMBASA HISTORIC & ISLAND GETAWAY",
    days: 2,
    nights: 1,
    itinerary: [
      {
        day: 1,
        title: "Day 1: Mombasa Heritage Tour",
        description:
          "Morning guided tour of Fort Jesus, Old Town markets, and Hindu temples. Afternoon boat transfer to private island (e.g., Funzi Keys). Sunset dolphin-spotting cruise.",
      },
      {
        day: 2,
        title: "Day 2: Island Relaxation & Return",
        description:
          "Morning beach activities or mangrove kayaking. Return to Mombasa by noon. Airport drop-off or optional city extension.",
      },
    ],
    included: [
      "Private island stay",
      "All boat transfers",
      "Guided Mombasa tour",
      "All meals at Funzi Keys",
      "Dolphin cruise",
    ],
    excluded: [
      "Scuba diving",
      "Spa treatments",
      "Alcoholic drinks",
      "Tips for crew",
    ],
  },
  {
    title: "5 DAYS 4 NIGHTS LAMU ARCHIPELAGO ADVENTURE (FROM MOMBASA)",
    days: 5,
    nights: 4,
    itinerary: [
      {
        day: 1,
        title: "Day 1: Mombasa to Lamu",
        description:
          "Morning flight from Mombasa to Lamu (1hr). Boat transfer to Shela Village. Check into boutique hotel (e.g., Peponi Hotel). Sunset dhow cruise through mangrove channels.",
      },
      {
        day: 2,
        title: "Day 2: Lamu Cultural Immersion",
        description:
          "Guided walking tour of Lamu Old Town (UNESCO site). Visit Lamu Museum and Swahili House. Afternoon donkey ride to local villages. Evening Swahili cooking class.",
      },
      {
        day: 3,
        title: "Day 3: Takwa Ruins & Manda Island",
        description:
          "Boat trip to 16th-century Takwa Ruins. Picnic lunch on Manda Island. Afternoon snorkeling at Manda Toto reef. Sunset cocktails at beachfront bar.",
      },
      {
        day: 4,
        title: "Day 4: Shela Beach & Kipungani",
        description:
          "Morning at Shela Beach (12km of pristine sand). Afternoon visit to Kipungani for 'Robinson Crusoe' beach experience. Farewell seafood feast.",
      },
      {
        day: 5,
        title: "Day 5: Return to Mombasa",
        description:
          "Morning flight back to Mombasa. Connect to international flights or beach extension.",
      },
    ],
    included: [
      "Mombasa-Lamu roundtrip flights",
      "4 nights Lamu accommodation",
      "All boat transfers",
      "Guided tours & activities",
      "All breakfasts & 3 dinners",
    ],
    excluded: [
      "Scuba diving",
      "Spa treatments",
      "Travel insurance",
      "Gratuities",
    ],
  },
  ////// newersv at the top

  {
    title: "3 DAYS 2 NIGHTS TSAVO EAST SAFARI FROM MOMBASA",
    days: 3,
    nights: 2,
    itinerary: [
      {
        day: 1,
        title: "Day 1: Mombasa to Tsavo East",
        description:
          "Morning pickup from Mombasa. Drive to Tsavo East (3hrs). Game drive en route to Ashnil Aruba Lodge. Afternoon safari to spot red elephants and lions. Dinner at lodge.",
      },
      {
        day: 2,
        title: "Day 2: Full Day in Tsavo East",
        description:
          "Sunrise game drive at Aruba Dam. Full-day safari with packed lunch to explore Mudanda Rock and Lugard Falls. Return for sundowner cocktails.",
      },
      {
        day: 3,
        title: "Day 3: Return to Mombasa",
        description:
          "Early morning bush breakfast. Final game drive before returning to Mombasa by 2PM.",
      },
    ],
    included: ["Park fees", "All meals", "Game drives", "Lodge accommodation"],
    excluded: ["Drinks", "Tips", "Balloon safari ($450)"],
  },
  {
    title: "4 DAYS 3 NIGHTS AMBOSELI & TSAVO WEST COMBO",
    days: 4,
    nights: 3,
    itinerary: [
      {
        day: 1,
        title: "Day 1: Mombasa to Tsavo West",
        description:
          "Depart Mombasa early. Visit Mzima Springs for hippos. Overnight at Kilaguni Serena.",
      },
      {
        day: 2,
        title: "Day 2: Tsavo West to Amboseli",
        description:
          "Morning game drive. Drive to Amboseli with Kilimanjaro views. Stay at Ol Tukai Lodge.",
      },
      {
        day: 3,
        title: "Day 3: Full Day Amboseli",
        description:
          "Full-day safari with elephant herds against Kilimanjaro backdrop.",
      },
      {
        day: 4,
        title: "Day 4: Return to Mombasa",
        description:
          "Sunrise photography session. Return via Emali route (6hrs).",
      },
    ],
    included: ["All park fees", "Lodge stays", "Professional guide"],
    excluded: ["Gratuities", "Personal items"],
  },
  {
    title: "5 DAYS 4 NIGHTS MAASAI MARA FLYING SAFARI",
    days: 5,
    nights: 4,
    itinerary: [
      {
        day: 1,
        title: "Day 1: Fly Mombasa-Mara",
        description:
          "Morning flight to Mara. Afternoon game drive. Stay at Mara Serena.",
      },
      {
        day: 2,
        title: "Day 2: Full Day Mara",
        description: "Full-day safari with picnic lunch at Mara River.",
      },
      {
        day: 3,
        title: "Day 3: Balloon Safari",
        description:
          "Optional balloon ride at dawn. Cultural visit to Maasai village.",
      },
      {
        day: 4,
        title: "Day 4: Mara Exploration",
        description: "Game drives in different sectors.",
      },
      {
        day: 5,
        title: "Day 5: Return Flight",
        description: "Final morning drive. Fly back to Mombasa by noon.",
      },
    ],
    included: ["Return flights", "All meals", "Game drives"],
    excluded: ["Balloon ride ($480)", "Visa fees"],
  },
  {
    title: "6 DAYS 5 NIGHTS SAMBURU & OL PEJETA",
    days: 6,
    nights: 5,
    itinerary: [
      {
        day: 1,
        title: "Day 1: Mombasa to Nairobi",
        description: "Morning train to Nairobi. Connect to Samburu flight.",
      },
      {
        day: 2,
        title: "Day 2: Samburu Game Drives",
        description: "Search for rare species like Grevy's zebra.",
      },
      {
        day: 3,
        title: "Day 3: Ol Pejeta Conservancy",
        description: "See rhinos and chimpanzee sanctuary.",
      },
      {
        day: 4,
        title: "Day 4: Aberdares",
        description: "Night wildlife viewing at The Ark.",
      },
      {
        day: 5,
        title: "Day 5: Lake Nakuru",
        description: "Flamingo viewing and rhino tracking.",
      },
      {
        day: 6,
        title: "Day 6: Return to Mombasa",
        description: "Fly back from Nairobi.",
      },
    ],
    included: ["Domestic flights", "All park fees"],
    excluded: ["International flights", "Travel insurance"],
  },
  {
    title: "2 DAYS 1 NIGHT SHIMBA HILLS GETAWAY",
    days: 2,
    nights: 1,
    itinerary: [
      {
        day: 1,
        title: "Day 1: Mombasa to Shimba",
        description:
          "Morning drive (1.5hrs). Hike to Sheldrick Falls. Overnight at Shimba Lodge.",
      },
      {
        day: 2,
        title: "Day 2: Game Drive & Return",
        description: "Morning safari for sable antelope. Return by 3PM.",
      },
    ],
    included: ["Park fees", "Guided walks"],
    excluded: ["Spa treatments"],
  },
  {
    title: "7 DAYS 6 NIGHTS KENYA GRAND CIRCUIT",
    days: 7,
    nights: 6,
    itinerary: [
      {
        day: 1,
        title: "Day 1: Mombasa-Nairobi-Aberdares",
        description: "Train to Nairobi, transfer to Aberdares.",
      },
      {
        day: 2,
        title: "Day 2: Lake Nakuru",
        description: "Rhino and flamingo viewing.",
      },
      {
        day: 3,
        title: "Day 3: Maasai Mara",
        description: "Full-day game drives.",
      },
      {
        day: 4,
        title: "Day 4: Mara Exploration",
        description: "Optional hot air balloon.",
      },
      {
        day: 5,
        title: "Day 5: Amboseli",
        description: "Kilimanjaro views with elephants.",
      },
      {
        day: 6,
        title: "Day 6: Tsavo West",
        description: "Mzima Springs visit.",
      },
      {
        day: 7,
        title: "Day 7: Return to Mombasa",
        description: "Morning drive back.",
      },
    ],
    included: ["All transport", "Accommodation"],
    excluded: ["Balloon ride", "Personal expenses"],
  },
  {
    title: "3 DAYS 2 NIGHTS NAIVASHA ADVENTURE",
    days: 3,
    nights: 2,
    itinerary: [
      {
        day: 1,
        title: "Day 1: Mombasa to Naivasha",
        description: "Train to Nairobi, transfer to Naivasha. Boat ride.",
      },
      {
        day: 2,
        title: "Day 2: Hell's Gate",
        description: "Cycling safari and geothermal tour.",
      },
      {
        day: 3,
        title: "Day 3: Crescent Island & Return",
        description: "Walking safari before returning.",
      },
    ],
    included: ["Bike rental", "Boat ride"],
    excluded: ["Train tickets", "Tips"],
  },
  {
    title: "4 DAYS 3 NIGHTS MOUNT KENYA CLIMB",
    days: 4,
    nights: 3,
    itinerary: [
      {
        day: 1,
        title: "Day 1: Mombasa-Nairobi-Nanyuki",
        description: "Fly to Nairobi, drive to Nanyuki. Acclimatize.",
      },
      {
        day: 2,
        title: "Day 2: Old Moses Camp",
        description: "Trek through montane forest (6hrs).",
      },
      {
        day: 3,
        title: "Day 3: Shipton's Camp",
        description: "Ascend to 4,200m via Mackinder's Valley.",
      },
      {
        day: 4,
        title: "Day 4: Summit & Return",
        description:
          "Pre-dawn summit attempt (Point Lenana). Descend to Nairobi.",
      },
    ],
    included: ["Park fees", "Mountain gear"],
    excluded: ["Personal porter ($20/day)", "Flights"],
  },
  {
    title: "5 DAYS 4 NIGHTS LAIKIPIA CONSERVANCIES",
    days: 5,
    nights: 4,
    itinerary: [
      {
        day: 1,
        title: "Day 1: Mombasa to Loisaba",
        description: "Fly via Nairobi. Evening star beds experience.",
      },
      {
        day: 2,
        title: "Day 2: Lewa Conservancy",
        description: "Game drives with rhino tracking.",
      },
      {
        day: 3,
        title: "Day 3: Ol Pejeta",
        description: "Visit last northern white rhinos.",
      },
      {
        day: 4,
        title: "Day 4: Solio Ranch",
        description: "Private rhino sanctuary visit.",
      },
      {
        day: 5,
        title: "Day 5: Return to Mombasa",
        description: "Fly back via Nairobi.",
      },
    ],
    included: ["Charter flights", "Luxury lodges"],
    excluded: ["Premium drinks", "Spa services"],
  },
  {
    title: "2 DAYS 1 NIGHT NAIROBI STOPOVER",
    days: 2,
    nights: 1,
    itinerary: [
      {
        day: 1,
        title: "Day 1: Mombasa to Nairobi",
        description:
          "Morning train. Visit Giraffe Centre and Karen Blixen Museum.",
      },
      {
        day: 2,
        title: "Day 2: Nairobi National Park",
        description: "Game drive with city skyline views. Evening flight back.",
      },
    ],
    included: ["Park entry", "Train tickets"],
    excluded: ["Lunch at Carnivore ($50)"],
  },
  //outside-coast of mombasa
  {
    title: "2 DAYS 1 NIGHT MASAI MARA SAFARI PACKAGE",
    days: 2,
    nights: 1,
    itinerary: [
      {
        day: 1,
        title: "Day 1: Nairobi / Masai Mara",
        description:
          "Pick up from Nairobi hotel or Airport in the morning. Drive to Masai Mara a 5-hour drive to the main gate, via The Great African Rift Valley escarpment and the famous Masai Town, Narok. Check in at Ashnil Mara camp or Sarova Mara game Camp or Mara Crossing Camp and have lunch. Afternoon game drive through the park in search of the Lion, Cheetah, Elephant, Buffalo and other members of the Big five plus other animals. Dinner and overnight at Ashnil Mara camp or Sarova Mara game Camp or Mara Crossing Camp.",
      },
      {
        day: 2,
        title: "Day 2: Masai Mara – Nairobi",
        description:
          "Early morning breakfast, after breakfast checkout with packed lunch for more game drive search of its popular residents, The Masai Mara plains are full of wildebeest during migration season early July to end September, zebra, impala, topi, giraffe, Thomson’s gazelle are regularly seen, leopards, lions, hyenas, cheetah, jackal and bat-eared foxes. Black rhino are a little shy and hard to spot but are often seen at a distance if you are lucky. game drive until around 12 hrs lunch time. After check out of the park then drive to Nairobi a 5-hour drive to Nairobi. you will arrive Nairobi in the evening around 5 to 6 p.m. Afterwards drop off at your respective hotel or Airport.",
      },
    ],
    included: [
      "Arrival & Departure airport transfers complementary to all our clients.",
      "Transportation as per itinerary.",
      "Accommodation per itinerary or similar with a request to all our clients.",
      "Meals as per itinerary B=Breakfast, L=Lunch and D=Dinner.",
      "Services literate English driver/guide.",
      "National park & game reserve entrance fees as per itinerary.",
      "Excursions & activities as per itinerary with a request.",
      "Recommended Mineral Water while on safari.",
    ],
    excluded: [
      "Visas and related costs.",
      "Personal Taxes.",
      "Drinks, tips, laundry, telephone calls and other items of a personal nature.",
      "International flights.",
      "Optional excursions and activities not listed in the itinerary like Balloon safari, Masai Village.",
    ],
  },
  {
    title: "2 DAYS 1 NIGHT AMBOSELI SAFARI PACKAGE",
    days: 2,
    nights: 1,
    itinerary: [
      {
        day: 1,
        title: "Day 1: Nairobi – Amboseli",
        description:
          "Pick up from Nairobi hotel or Airport in the early morning. Depart Nairobi for Amboseli National Park A drive of less 5 hours to Amboseli. Amboseli which lies at the floors of Mount Kilimanjaro. you will arrive with a short game drive proceeding to your lodge for check inn and have lunch. Check inn at Oltukai Lodge. Later afternoon more game drive, Mount Kilimanjaro offers scenic backgrounds for photography Elephants, Lions, Cheetah, Buffalo can be seen at the swamp area. Later dinner and overnight at your Oltukai Lodge.",
      },
      {
        day: 2,
        title: "Day 2: Amboseli – Nairobi",
        description:
          "Early morning game drive later you break for breakfast, after breakfast checkout with packed lunch for more game drive. the Amboseli National Parks is one of Kenya’s most popular parks. The name “Amboseli” comes from a Maasai word meaning “salty dust”, and it is one of the best places in Africa to view large herds of elephants up close. Nature lovers can explore five different habitats here ranging from the dried-up bed of Lake Amboseli, wetlands with sulphur springs, the savannah and woodlands. game drive until around 12hrs lunch time. After check out of the park then drive to Nairobi a less 5-hour drive to Nairobi. you will arrive Nairobi in the evening around 5 to 6 p.m. Afterwards drop off at your respective hotel or Airport.",
      },
    ],
    included: [
      "Arrival & Departure airport transfers complementary to all our clients.",
      "Transportation as per itinerary.",
      "Accommodation per itinerary or similar with a request to all our clients.",
      "Meals as per itinerary B=Breakfast, L=Lunch and D=Dinner.",
      "Services literate English driver/guide.",
      "National park & game reserve entrance fees as per itinerary.",
      "Excursions & activities as per itinerary with a request.",
      "Recommended Mineral Water while on safari.",
    ],
    excluded: [
      "Visas and related costs.",
      "Personal Taxes.",
      "Drinks, tips, laundry, telephone calls and other items of a personal nature.",
      "International flights.",
      "Optional excursions and activities not listed in the itinerary like Balloon safari, Masai Village.",
    ],
  },
  {
    title: "3 DAYS 2 NIGHT MASAI MARA SAFARI PACKAGE",
    days: 3,
    nights: 2,
    itinerary: [
      {
        day: 1,
        title: "Day 1: Nairobi – Masai Mara",
        description:
          "Early morning pick up from your Nairobi hotel or Airport and drive to Masai Mara. A 5 hours drive to main gate. you will pass through Narok town famous Masai town proceeding to Masai Mara park. you will arrive Masai mara around lunch time, Check in at Ashnil Mara camp or Sarova Mara game camp or Mara Crossing Camp. later afternoon game drive through the park in search of the Lion, Cheetah, Elephant, Buffalo and other members of the Big five plus other animals. Dinner and overnight at Ashnil Mara camp or Sarova Mara game camp or Mara Crossing Camp.",
      },
      {
        day: 2,
        title: "Day 2: Masai Mara",
        description:
          "Early morning game drive and return to camp for breakfast. After breakfast Full day in the park with packed lunch in search of its popular residents, The Masai Mara plains are full of wildebeest during migration season early July to end of September, zebra, impala, topi, giraffe, Thomson’s gazelle are regularly seen, leopards, lions, hyenas, cheetah, jackal and bat-eared foxes. Black rhino are a little shy and hard to spot but are often seen at a distance if you are lucky. Hippos are abundant in the Mara River as are very large Nile crocodiles, who lay in wait for a meal as the wildebeest cross on their annual quest to find new pastures. later Meals and overnight at Sarova Mara game camp or Ashnil Mara camp or Mara Crossing Camp.",
      },
      {
        day: 3,
        title: "Day 3: Masai Mara – Nairobi",
        description:
          "Early Morning breakfast at your camp. check out of the camp and park and drive to Nairobi A 5 hours drive to Nairobi. arriving in time for lunch. Lunch at carnivore afterward drop off at your respective hotel or Airport around 3pm. ( Optional to our clients with evening Flights) – if you have evening flight you can do more game drive with packed lunch till around 12:00hrs lunch time, After drive to Nairobi you arrive in Nairobi at around 5 to 6 pm drop off at Airport or back to your hotel.",
      },
    ],
    included: [
      "Arrival & Departure airport transfers complementary to all our clients.",
      "Transportation as per itinerary.",
      "Accommodation per itinerary or similar with a request to all our clients.",
      "Meals as per itinerary B=Breakfast, L=Lunch and D=Dinner.",
      "Services literate English driver/guide.",
      "National park & game reserve entrance fees as per itinerary.",
      "Excursions & activities as per itinerary with a request.",
      "Recommended Mineral Water while on safari.",
    ],
    excluded: [
      "Visas and related costs.",
      "Personal Taxes.",
      "Drinks, tips, laundry, telephone calls and other items of a personal nature.",
      "International flights.",
      "Optional excursions and activities not listed in the itinerary like Balloon safari, Masai Village.",
    ],
  },
  {
    title:
      "12 DAYS 11 NIGHTS TSAVO WEST / TSAVO EAST / TAITA HILLS / AMBOSELI / ABERDARES / NAKURU / NAIVASHA / MASAI MARA SAFARI PACKAGE",
    days: 12,
    nights: 11,
    itinerary: [
      {
        day: 1,
        title: "Day 1: Nairobi – Tsavo West",
        description:
          "Pick up from your Nairobi hotel or Airport in the morning drive to Tsavo west national park which is a less 6 hrs drive. you will arrive with short Game en-route to Kilanguni Serena safari lodge. Check in and have lunch. In the afternoon you will go for game drive tsavo West offers some of the most magnificent game viewing in the world and attractions include elephant, rhino, Hippos, lions, cheetah, leopards, Buffalos, diverse plant and bird species. Later Dinner and overnight at the Kilanguni Serena safari lodge.",
      },
      {
        day: 2,
        title: "Day 2: Tsavo West – Tsavo East",
        description:
          "Early morning breakfast, after breakfast check out with game drive with a Visit to Mzima springs where you can see hippos and fish in a crystalline clear water. There are possibilities of seeing crocodiles and monkeys the sight of fifty million gallons of crystal clear water gushing out of from the under parched lava rock that is the Mzima Springs, to the Shetani lava flows, after you depart Tsavo West for Tsavo East ( drive will be 3 hours to main gate ) which is renowned for its large numbers of elephants and the famous man eating lions. you will arrive tsavo east with Game en-route proceeding to your lodge for lunch and check inn. Check inn at Ashnil Aruba lodge. later afternoon more game drive in the park with a visit to Aruba dam. later dinner and overnight at Ashnil Aruba lodge.",
      },
      {
        day: 3,
        title: "Day 3: Tsavo East Full Day Game",
        description:
          "Early morning game drive return back to Lodge for breakfast. After breakfast Full day spend in the park with packed lunch. The sight of dust-red elephant wallowing, rolling and spraying each other with the midnight blue waters of palm-shaded Galana River is one of the most evocative images in Africa. This, along with the 300 kilometer long Yatta Plateau, the longest lava flow in the world, make for an adventure unlike any other in the tsavo east. its popular residents like the well known predators and their opponents like the Zebra, Wildebeest, Giraffe, Hippo and a visit to Aruba Dam. Later dinner and overnight at Ashnil Aruba Camp.",
      },
      {
        day: 4,
        title: "Day 4: Tsavo East – Salt Lick Taita Hills Sanctuary",
        description:
          "Early morning game drive later you break for breakfast, After breakfast proceed with game en-route Leave Tsavo East for Salt lick Taita Hills Sanctuary which is less 3 Hrs drive. Taita Hills Sanctuary is sufficiently isolated to develop endemic forms and birders which come from afar to see the Taita Olive Thrush and the Taita White-eye. you will arrive around lunch time. lunch at Taita Hills Game Lodge. After lunch transfer to Sarova Salt lick game lodge. Later afternoon game drive until late in the evening dinner and overnight at Sarova Salt lick game lodge.",
      },
      {
        day: 5,
        title: "Day 5: Taita Hills Sanctuary – Amboseli",
        description:
          "Early morning game drive later you break for breakfast, After breakfast check out with game en-route Leave Taita Hills for Amboseli National Park which is less than 3 Hrs drive. You will arrive Amboseli with a short game drive in time for lunch, Check in at Ol Tukai Lodge have lunch and rest. Afternoon more game in Amboseli park which lies at the floors of Mount Kilimanjaro. Mount Kilimanjaro offers scenic backgrounds for photography. Elephants, Lions, Cheetah, Buffalo etc. can be seen at the swamp area and open plains. Later dinner and overnight at your Ol Tukai Lodge.",
      },
      {
        day: 6,
        title: "Day 6: Amboseli National Park Full day",
        description:
          "Early morning game drive later return back to your lodge for breakfast. After breakfast Full day game drive. the Amboseli National Parks is one of Kenya’s most popular parks. The name “Amboseli” comes from a Maasai word meaning “salty dust”, and it is one of the best places in Africa to view large herds of elephants up close. Nature lovers can explore five different habitats here ranging from the dried-up bed of Lake Amboseli, wetlands with sulphur springs, the savanna and woodlands. Later return to your camp for dinner and overnight at Ol Tukai lodge.",
      },
      {
        day: 7,
        title: "Day 7: Amboseli – Aberdare",
        description:
          "Early morning breakfast, After breakfast leave for Aberdare a 6 and half Hrs drive arriving with en-rout at Aberdare Country club. Check in at Aberdare Hotel and have lunch, relax. Afternoon transfer across Aberdares park to The Ark lodge, The Ark has four viewing decks with balconies and lounges to provide superb game viewing from the comfort of the lodge. The animals come to you!. Later dinner and overnight at The Ark hotel.",
      },
      {
        day: 8,
        title: "Day 8: Aberdare – Lake Nakuru",
        description:
          "Early morning breakfast game en-route leave Aberdare for Lake Nakuru a less than 5 Hrs drive and you will pass through the Great Rift Valley escarpment, you will arrive in time for lunch and check in at Sarova lion hill Lodge. Afternoon game drive across the Pink Lake often referred so due to it’s Great masses of Flamingos but currently due to climate change and high water level only few flamingos can be seen not forgetting the famous white Rhino and black rhino found in this park. Dinner and overnight at Sarova lion hill Lodge.",
      },
      {
        day: 9,
        title: "Day 9: Lake Nakuru – Lake Naivasha",
        description:
          "Early morning game drive later you break for breakfast. After breakfast check out with game en-route leave Nakuru for lake Naivasha, drive is One hours drive. proceeding to your lodge for lunch and check inn. Check in at Sopa Lodge Naivasha and have lunch, Later in the afternoon game drive with a visit to Hells Gate National Park which allows Hiking, Bicycling ride, Rock climbing and photography of wildlife and a visit to geothermal power plant. Later dinner and overnight at Sopa Lodge Naivasha.",
      },
      {
        day: 10,
        title: "Day 10: Lake Naivasha – Masai Mara",
        description:
          "Early morning breakfast. After breakfast leave Lake Naivasha for Masai Mara a 5 Hrs drive, you will pass through Narok town the famous Masai town. you arrive in time for lunch. check in at Ashnil Mara camp or Sarova Mara game Camp and have lunch. Afternoon game drive through the park in search of the Lion, Cheetah, Elephant, Buffalo and a visit to Mara River. Dinner and overnight at Ashnil Mara camp or Sarova Mara game Camp.",
      },
      {
        day: 11,
        title: "Day 11: Masai Mara full day",
        description:
          "Early morning game drive and return to camp for breakfast. After breakfast Full day in the park with packed lunch in search of its popular residents, The Masai Mara plains are full of wildebeest during migration season early July to end September, zebra, impala, topi, giraffe, Thomson’s gazelle are regularly seen, leopards, lions, hyenas, cheetah, jackal and bat-eared foxes. Black rhino are a little shy and hard to spot but are often seen at a distance if you are lucky. Hippos are abundant in the Mara River as are very large Nile crocodiles, who lay in wait for a meal as the wildebeest cross on their annual quest to find new pastures. later Meals and overnight at Ashnil Mara camp or Sarova Mara game Camp.",
      },
      {
        day: 12,
        title: "Day 12: Masai Mara – Nairobi",
        description:
          "Early Morning breakfast at your camp check out of the camp and park and Drive to Nairobi a 5 Hrs drive arriving in time for lunch. Lunch at carnivore afterwards drop off at your respective hotel or Airport around 3 pm. ( Optional to our clients with evening Flights) – if you have evening flight you can do more game drive with packed lunch till around 12:00 hrs lunch time, After drive to Nairobi you arrive in Nairobi at around 5 to 6 pm drop off at Airport or back to your hotel.",
      },
    ],
    included: [
      "Arrival & Departure airport transfers complementary to all our clients.",
      "Transportation as per itinerary.",
      "Accommodation per itinerary or similar with a request to all our clients.",
      "Meals as per itinerary B=Breakfast, L=Lunch and D=Dinner.",
      "Services literate English driver/guide.",
      "National park & game reserve entrance fees as per itinerary.",
      "Excursions & activities as per itinerary with a request.",
      "Recommended Mineral Water while on safari.",
    ],
    excluded: [
      "Visas and related costs.",
      "Personal Taxes.",
      "Drinks, tips, laundry, telephone calls and other items of a personal nature.",
      "International flights.",
      "Optional excursions and activities not listed in the itinerary like Balloon safari, Masai Village.",
    ],
  },
  // Add more packages as needed
];
