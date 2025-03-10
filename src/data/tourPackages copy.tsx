export type Day = {
    day:number;
    title: string;
    description: string;
  };
  
  export type TourPackage = {
    title: string;
    days: number;
    nights:number;
    intinery:Day[];
    included: string[];
    excluded: string[];
  };

export const tourPackages = [
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
          description:
            "Pick up from Nairobi hotel or Airport in the early morning. Depart Nairobi for Amboseli National Park A drive of less 5 hours to Amboseli. Amboseli which lies at the floors of Mount Kilimanjaro. you will arrive with a short game drive proceeding to your lodge for check inn and have lunch. Check inn at Oltukai Lodge. Later afternoon more game drive, Mount Kilimanjaro offers scenic backgrounds for photography Elephants, Lions, Cheetah, Buffalo can be seen at the swamp area. Later dinner and overnight at your Oltukai Lodge.",
        },
        {
          day: 2,
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
          description:
            "Early morning pick up from your Nairobi hotel or Airport and drive to Masai Mara. A 5 hours drive to main gate. you will pass through Narok town famous Masai town proceeding to Masai Mara park. you will arrive Masai mara around lunch time, Check in at Ashnil Mara camp or Sarova Mara game camp or Mara Crossing Camp. later afternoon game drive through the park in search of the Lion, Cheetah, Elephant, Buffalo and other members of the Big five plus other animals. Dinner and overnight at Ashnil Mara camp or Sarova Mara game camp or Mara Crossing Camp.",
        },
        {
          day: 2,
          description:
            "Early morning game drive and return to camp for breakfast. After breakfast Full day in the park with packed lunch in search of its popular residents, The Masai Mara plains are full of wildebeest during migration season early July to end of September, zebra, impala, topi, giraffe, Thomson’s gazelle are regularly seen, leopards, lions, hyenas, cheetah, jackal and bat-eared foxes. Black rhino are a little shy and hard to spot but are often seen at a distance if you are lucky. Hippos are abundant in the Mara River as are very large Nile crocodiles, who lay in wait for a meal as the wildebeest cross on their annual quest to find new pastures. later Meals and overnight at Sarova Mara game camp or Ashnil Mara camp or Mara Crossing Camp.",
        },
        {
          day: 3,
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
      title: "12 DAYS 11 NIGHTS TSAVO WEST / TSAVO EAST / TAITA HILLS / AMBOSELI / ABERDARES / NAKURU / NAIVASHA / MASAI MARA SAFARI PACKAGE",
      days: 12,
      nights: 11,
      itinerary: [
        {
          day: 1,
          description:
            "Pick up from your Nairobi hotel or Airport in the morning drive to Tsavo west national park which is a less 6 hrs drive. you will arrive with short Game en-route to Kilanguni Serena safari lodge. Check in and have lunch. In the afternoon you will go for game drive tsavo West offers some of the most magnificent game viewing in the world and attractions include elephant, rhino, Hippos, lions, cheetah, leopards, Buffalos, diverse plant and bird species. Later Dinner and overnight at the Kilanguni Serena safari lodge.",
        },
        {
          day: 2,
          description:
            "Early morning breakfast, after breakfast check out with game drive with a Visit to Mzima springs where you can see hippos and fish in a crystalline clear water. There are possibilities of seeing crocodiles and monkeys the sight of fifty million gallons of crystal clear water gushing out of from the under parched lava rock that is the Mzima Springs, to the Shetani lava flows, after you depart Tsavo West for Tsavo East ( drive will be 3 hours to main gate ) which is renowned for its large numbers of elephants and the famous man eating lions. you will arrive tsavo east with Game en-route proceeding to your lodge for lunch and check inn. Check inn at Ashnil Aruba lodge. later afternoon more game drive in the park with a visit to Aruba dam. later dinner and overnight at Ashnil Aruba lodge.",
        },
        {
          day: 3,
          description:
            "Early morning game drive return back to Lodge for breakfast. After breakfast Full day spend in the park with packed lunch. The sight of dust-red elephant wallowing, rolling and spraying each other with the midnight blue waters of palm-shaded Galana River is one of the most evocative images in Africa. This, along with the 300 kilometer long Yatta Plateau, the longest lava flow in the world, make for an adventure unlike any other in the tsavo east. its popular residents like the well known predators and their opponents like the Zebra, Wildebeest, Giraffe, Hippo and a visit to Aruba Dam. Later dinner and overnight at Ashnil Aruba Camp.",
        },
        {
          day: 4,
          description:
            "Early morning game drive later you break for breakfast, After breakfast proceed with game en-route Leave Tsavo East for Salt lick Taita Hills Sanctuary which is less 3 Hrs drive. Taita Hills Sanctuary is sufficiently isolated to develop endemic forms and birders which come from afar to see the Taita Olive Thrush and the Taita White-eye. you will arrive around lunch time. lunch at Taita Hills Game Lodge. After lunch transfer to Sarova Salt lick game lodge. Later afternoon game drive until late in the evening dinner and overnight at Sarova Salt lick game lodge.",
        },
        {
          day: 5,
          description:
            "Early morning game drive later you break for breakfast, After breakfast check out with game en-route Leave Taita Hills for Amboseli National Park which is less than 3 Hrs drive. You will arrive Amboseli with a short game drive in time for lunch, Check in at Ol Tukai Lodge have lunch and rest. Afternoon more game in Amboseli park which lies at the floors of Mount Kilimanjaro. Mount Kilimanjaro offers scenic backgrounds for photography. Elephants, Lions, Cheetah, Buffalo etc. can be seen at the swamp area and open plains. Later dinner and overnight at your Ol Tukai Lodge.",
        },
        {
          day: 6,
          description:
            "Early morning game drive later return back to your lodge for breakfast. After breakfast Full day game drive. the Amboseli National Parks is one of Kenya’s most popular parks. The name “Amboseli” comes from a Maasai word meaning “salty dust”, and it is one of the best places in Africa to view large herds of elephants up close. Nature lovers can explore five different habitats here ranging from the dried-up bed of Lake Amboseli, wetlands with sulphur springs, the savanna and woodlands. Later return to your camp for dinner and overnight at Ol Tukai lodge.",
        },
        {
          day: 7,
          description:
            "Early morning breakfast, After breakfast leave for Aberdare a 6 and half Hrs drive arriving with en-rout at Aberdare Country club. Check in at Aberdare Hotel and have lunch, relax. Afternoon transfer across Aberdares park to The Ark lodge, The Ark has four viewing decks with balconies and lounges to provide superb game viewing from the comfort of the lodge. The animals come to you!. Later dinner and overnight at The Ark hotel.",
        },
        {
          day: 8,
          description:
            "Early morning breakfast game en-route leave Aberdare for Lake Nakuru a less than 5 Hrs drive and you will pass through the Great Rift Valley escarpment, you will arrive in time for lunch and check in at Sarova lion hill Lodge. Afternoon game drive across the Pink Lake often referred so due to it’s Great masses of Flamingos but currently due to climate change and high water level only few flamingos can be seen not forgetting the famous white Rhino and black rhino found in this park. Dinner and overnight at Sarova lion hill Lodge.",
        },
        {
          day: 9,
          description:
            "Early morning game drive later you break for breakfast. After breakfast check out with game en-route leave Nakuru for lake Naivasha, drive is One hours drive. proceeding to your lodge for lunch and check inn. Check in at Sopa Lodge Naivasha and have lunch, Later in the afternoon game drive with a visit to Hells Gate National Park which allows Hiking, Bicycling ride, Rock climbing and photography of wildlife and a visit to geothermal power plant. Later dinner and overnight at Sopa Lodge Naivasha.",
        },
        {
          day: 10,
          description:
            "Early morning breakfast. After breakfast leave Lake Naivasha for Masai Mara a 5 Hrs drive, you will pass through Narok town the famous Masai town. you arrive in time for lunch. check in at Ashnil Mara camp or Sarova Mara game Camp and have lunch. Afternoon game drive through the park in search of the Lion, Cheetah, Elephant, Buffalo and a visit to Mara River. Dinner and overnight at Ashnil Mara camp or Sarova Mara game Camp.",
        },
        {
          day: 11,
          description:
            "Early morning game drive and return to camp for breakfast. After breakfast Full day in the park with packed lunch in search of its popular residents, The Masai Mara plains are full of wildebeest during migration season early July to end September, zebra, impala, topi, giraffe, Thomson’s gazelle are regularly seen, leopards, lions, hyenas, cheetah, jackal and bat-eared foxes. Black rhino are a little shy and hard to spot but are often seen at a distance if you are lucky. Hippos are abundant in the Mara River as are very large Nile crocodiles, who lay in wait for a meal as the wildebeest cross on their annual quest to find new pastures. later Meals and overnight at Ashnil Mara camp or Sarova Mara game Camp.",
        },
        {
          day: 12,
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
  
  