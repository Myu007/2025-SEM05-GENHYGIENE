const questions = [
  {
    question: "What does the word hygiene mean?",
    answers: [
      { text: "Health", correct: true },
      { text: "Life", correct: false },
      { text: "Setting", correct: false },
      { text: "Risk", correct: false },
      { text: "Factor", correct: false },
    ],
  },
  {
    question: "What is not a chemical factor?",
    answers: [
      { text: "ionizing radiation", correct: true },
      { text: "heavy metals", correct: false },
      { text: "organic compounds", correct: false },
      { text: "fertilizers and pesticides", correct: false },
      { text: "complex of chemicals", correct: false },
    ],
  },
  {
    question: "How much water does an average adult consume per day?",
    answers: [
      { text: "2,0-3,0 L", correct: true },
      { text: "7,0-8,5 L", correct: false },
      { text: "0,5-1,0 L", correct: false },
      { text: "5,0-6,0 L", correct: false },
      { text: "3,0-4,5 L", correct: false },
    ],
  },
  {
    question: "Which water source has the highest risk of bacterial contamination?",
    answers: [
      { text: " surface water", correct: true },
      { text: " spring water", correct: false },
      { text: "rain water", correct: false },
      { text: "ground water", correct: false },
      { text: "artesian water", correct: false },
    ],
  },
  {
    question: "What is the main criterion for choosing water supply sources?",
    answers: [
      { text: "protection from contamination", correct: true },
      { text: "economic efficiency of its use", correct: false },
      { text: "availability of a laboratory for analysis", correct: false },
      { text: "good physical properties of water ", correct: false },
      { text: "close proximity to household", correct: false },
    ],
  },
  {
    question: "What indicator is one of the disadvantages of ground (artesian) waters?",
    answers: [
      { text: "high salt content (salinity)", correct: true },
      { text: "no additional treatment required", correct: false },
      { text: "low temperature", correct: false },
      { text: "stable chemical composition", correct: false },
      { text: "less microbiological contamination", correct: false },
    ],
  },
  {
    question: "What are norms of daily water consumption per person in a settlement with central water supply?",
    answers: [
      { text: "350- 500 L", correct: true },
      { text: "800-900 L", correct: false },
      { text: "50 - 80 L", correct: false },
      { text: "20 -30 L", correct: false },
      { text: "1000-1200 L", correct: false },
    ],
  },
  {
    question: "What are the reasons for the development of urolithiasis? ",
    answers: [
      { text: "drinking water hardness", correct: true },
      { text: "concentration of fluoride in drinking water", correct: false },
      { text: " concentration of nitrates in drinking water", correct: false },
      { text: " concentration of chloride in drinking water", correct: false },
      { text: " turbidity of drinking water", correct: false },
    ],
  },
  {
    question: "What disease can be transmitted through water?",
    answers: [
      { text: "typhoid ", correct: true },
      { text: "hepatitis B", correct: false },
      { text: "typhus", correct: false },
      { text: "trichinosis", correct: false },
      { text: "tuberculosis", correct: false },
    ],
  },
  {
    question: "Drinking water should not be:",
    answers: [
      { text: "harmful in chemical composition", correct: true },
      { text: "epidemiologically safe", correct: false },
      { text: "safe in the ionizing radiation relation", correct: false },
      { text: "microbial safe", correct: false },
      { text: "physical safe", correct: false },
    ],
  },
  {
    question: "What environmental factors are physical?",
    answers: [
      { text: "noise levels", correct: true },
      { text: "salinity of water", correct: false },
      { text: "level of education", correct: false },
      { text: "level of income", correct: false },
      { text: "level of unemployment", correct: false },
    ],
  },
  {
    question: "What environmental factors are chemical?",
    answers: [
      { text: "pesticide content", correct: true },
      { text: "bacterial content", correct: false },
      { text: "noise levels", correct: false },
      { text: "vibration levels", correct: false },
      { text: "lighting levels", correct: false },
    ],
  },
  {
    question: "Which group does not belong to diseases associated with water quality?",
    answers: [
      { text: "water disinfection", correct: true },
      { text: "water-borne", correct: false },
      { text: "insect vectors", correct: false },
      { text: "water-washed", correct: false },
      { text: "water based", correct: false },
    ],
  },
  {
    question: "What is the best pH of water for drinking purposes?",
    answers: [
      { text: "6.9", correct: true },
      { text: "4.7", correct: false },
      { text: "5.8", correct: false },
      { text: "8.9", correct: false },
      { text: "9.5", correct: false },
    ],
  },
  {
    question: "What level of nitrates in drinking water is allowed by the standard?",
    answers: [
      { text: "45-50mg/L", correct: true },
      { text: "35-55mg/L", correct: false },
      { text: "55-65mg/L", correct: false },
      { text: "60-80mg/L", correct: false },
      { text: "70-90mg/L", correct: false },
    ],
  },
  {
    question: "What level of nitrates in drinking water is not dangerous?",
    answers: [
      { text: "< 45 mg/L", correct: true },
      { text: "> 50mg/L", correct: false },
      { text: "< 150mg/L", correct: false },
      { text: ">150mg/L", correct: false },
      { text: "< 250mg/L", correct: false },
    ],
  },
  {
    question: "What are the properties of water? The pH of the water sample is 3.2 ",
    answers: [
      { text: "acid", correct: true },
      { text: "alkaline", correct: false },
      { text: "neutral", correct: false },
      { text: "basic", correct: false },
      { text: "too alkaline", correct: false },
    ],
  },
  {
    question: "What environmental factors affecting health are studied by hygiene?",
    answers: [
      { text: "physical", correct: true },
      { text: "political", correct: false },
      { text: "cultural", correct: false },
      { text: "emotional", correct: false },
      { text: "mental", correct: false },
    ],
  },
  {
    question: "Which indicators of drinking water are unacceptable for drinking purposes?",
    answers: [
      { text: "if contain salts and trace elements", correct: true },
      { text: "if epidemiologically safe", correct: false },
      { text: "if organoleptically safe ", correct: false },
      { text: "if harmless in chemical composition", correct: false },
      { text: " if safe in the ionizing radiation relation", correct: false },
    ],
  },
  {
    question: "What indicator of chemical safety of drinking water is used to assess the quality?",
    answers: [
      { text: "pH", correct: true },
      { text: "E. coli", correct: false },
      { text: "temperature", correct: false },
      { text: "turbidity", correct: false },
      { text: "dust", correct: false },
    ],
  },
  {
    question: "What indicator of microbiological safety of drinking water is used to assess the quality of disinfection?",
    answers: [
      { text: "absence of E. coli ", correct: true },
      { text: "presence of E. coli", correct: false },
      { text: "presence of salmonella", correct: false },
      { text: "absence of salmonella", correct: false },
      { text: "presence of pneumococcus", correct: false },
    ],
  },
  {
    question: "The water source was contaminated. What organic substances indicates fresh source contamination?",
    answers: [
      { text: "ammonium salts", correct: true },
      { text: "cadmium", correct: false },
      { text: "bicarbonates", correct: false },
      { text: "lead", correct: false },
      { text: " phenol", correct: false },
    ],
  },
  {
    question: "What does the abbreviation GEMS mean?",
    answers: [
      { text: "Global Environment Monitoring System", correct: true },
      { text: "Global Environment Management System", correct: false },
      { text: "Global Environment Meteorological System", correct: false },
      { text: "Global Environment Meteorological Scheme", correct: false },
      { text: "Global Electrical Management System", correct: false },
    ],
  },
  {
    question: "What is the minimum amount of standard solutions required to measure pH?",
    answers: [
      { text: "2", correct: true },
      { text: "1", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "What reaction will take place in the body when drink water with a high concentration of mercury?",
    answers: [
      { text: "poisoning", correct: true },
      { text: "formation of methemoglobin", correct: false },
      { text: "decrease the barrier function of the liver", correct: false },
      { text: "improve memory", correct: false },
      { text: "obesity", correct: false },
    ],
  },
  {
    question: "What territory belongs to the zone of strict protection of the water source? This is the territory:",
    answers: [
      { text: "where the construction of enterprises is prohibited", correct: true },
      { text: "where any construction of enterprises is allowed", correct: false },
      { text: " a settlement, supplied with water", correct: false },
      { text: "within 10 m from the water source", correct: false },
      { text: "within 1 km from the water source", correct: false },
    ],
  },
  {
    question: "What is the Unit for measuring the transparency of water?",
    answers: [
      { text: "cm", correct: true },
      { text: "degrees", correct: false },
      { text: "mg/l", correct: false },
      { text: "points", correct: false },
      { text: "Sv", correct: false },
    ],
  },
  {
    question: "What carcinogens can be found in the atmospheric air?",
    answers: [
      { text: "Polycyclic aromatic hydrocarbons", correct: true },
      { text: "Aldehydes", correct: false },
      { text: "Carbon monoxide", correct: false },
      { text: "Oxides of nitrogen", correct: false },
      { text: "Sulfur dioxide", correct: false },
    ],
  },
  {
    question: "What gases are naturally occurring greenhouse gases?",
    answers: [
      { text: "Carbon dioxide, Nitrogen oxide and Methane", correct: true },
      { text: "Argon, xenon and neon", correct: false },
      { text: "Tobacco smoke, radon and black smoke", correct: false },
      { text: "Sulfur dioxide, carbon monoxide and formaldehyde", correct: false },
      { text: "Sulfur dioxide, formaldehyde and ammonia", correct: false },
    ],
  },
  {
    question: "What disease is meteotropic?",
    answers: [
      { text: "Hypertensive disease", correct: true },
      { text: "Cancers", correct: false },
      { text: "Diabetes", correct: false },
      { text: "Osteoarthritis", correct: false },
      { text: "Osteoporosis", correct: false },
    ],
  },
  {
    question: "The main components of vehicle emissions are:",
    answers: [
      { text: "Carbon monoxide", correct: true },
      { text: "Nitrogen oxides", correct: false },
      { text: "Carbon dioxide", correct: false },
      { text: "Sulfur dioxide", correct: false },
      { text: " Formaldehyde", correct: false },
    ],
  },
  {
    question: "What is the main source of nitrogen dioxide?",
    answers: [
      { text: "Combustion of engine fuel", correct: true },
      { text: "Waste", correct: false },
      { text: "Water pollution", correct: false },
      { text: "Radiation", correct: false },
      { text: "Soil erosion", correct: false },
    ],
  },
  {
    question: "The value of comfort temperature depends on:",
    answers: [
      { text: "Climatic zone", correct: true },
      { text: "The dust concentrartion", correct: false },
      { text: "Oxygen level in the air", correct: false },
      { text: "Light level", correct: false },
      { text: "Nature of the work", correct: false },
    ],
  },
  {
    question: "Please find carcinogenic indoor air pollutant:",
    answers: [
      { text: "Formaldehyde", correct: true },
      { text: "Ammonia", correct: false },
      { text: "Carbon monoxide", correct: false },
      { text: "Carbon dioxide", correct: false },
      { text: "Oxides of sulfur", correct: false },
    ],
  },
  {
    question: "Where is the decrease in oxygen concentration observed?",
    answers: [
      { text: "In submarines", correct: true },
      { text: "In classes", correct: false },
      { text: "In lecture rooms", correct: false },
      { text: "In metro", correct: false },
      { text: "In theaters", correct: false },
    ],
  },
  {
    question: "The main components of vehicle emissions are:",
    answers: [
      { text: "Carbon monoxide", correct: true },
      { text: "Carbon dioxide", correct: false },
      { text: "Nitrogen oxides", correct: false },
      { text: "Sulfur dioxide", correct: false },
      { text: "Formaldehyde", correct: false },
    ],
  },
  {
    question: "The most serious environmental effect posed by hazardous wastes is:",
    answers: [
      { text: "Contamination of groundwater", correct: true },
      { text: "Forest degradation", correct: false },
      { text: "Increased use of land for landfills", correct: false },
      { text: "Destruction of habitat", correct: false },
      { text: "Air pollution", correct: false },
    ],
  },
  {
    question: "Recycling is a popular method for controlling",
    answers: [
      { text: "Solid waste pollution", correct: true },
      { text: "Water pollution", correct: false },
      { text: "Hazardous chemical pollution", correct: false },
      { text: "Radiation exposure", correct: false },
      { text: "Air pollution", correct: false },
    ],
  },
  {
    question: "Organophosphate insecticides are all except:",
    answers: [
      { text: "Dieldrin", correct: true },
      { text: "Fenthion", correct: false },
      { text: "Diazinon", correct: false },
      { text: "Parathion", correct: false },
      { text: "Lindan", correct: false },
    ],
  },
  {
    question: "Biogeochemical provinces are classified as following",
    answers: [
      { text: "Natural and manmade", correct: true },
      { text: "Nothern and southern", correct: false },
      { text: "Heavy and light", correct: false },
      { text: "Continental and island", correct: false },
      { text: "Direct and indirrect", correct: false },
    ],
  },
  {
    question: "Laboratory analysis of soil includes:",
    answers: [
      { text: "Chemical analysis", correct: true },
      { text: "Organoleptic analysis", correct: false },
      { text: "Microbiological analysis", correct: false },
      { text: "Biochemical analysis", correct: false },
      { text: "Radiological analysis", correct: false },
    ],
  },
  {
    question: "How can a soil be best described?",
    answers: [
      { text: "Soil is a complex mixture of regolith (weathered rock), humus (organic material), air, water, and living organisms", correct: true },
      { text: "Soil is a complex mixture of regolith (weathered rock), waste (organic material), air, radiation, and living organisms", correct: false },
      { text: "Soil is a complex mixture of regolith (weathered rock), protolith (parent rooks), plant roots and living organisms", correct: false },
      { text: "Soil is a complex mixture of regolith (weathered rock), chalk (organic material), air, water, and insects", correct: false },
      { text: "Soil is a complex mixture of regolith (weathered rock), chalk (inorganic material), air, water, and animals", correct: false },
    ],
  },
  {
    question: "According WHO strategy for control of soil-transmitted diseases, what groups of population are in risk?",
    answers: [
      { text: "School age children", correct: true },
      { text: "Newborns", correct: false },
      { text: "Adults", correct: false },
      { text: "All groups of population", correct: false },
      { text: "Patients", correct: false },
    ],
  },
  {
    question: "What is the unit of absorbed dose?",
    answers: [
      { text: "Becquerel", correct: true },
      { text: "Sievert", correct: false },
      { text: "Rem", correct: false },
      { text: "Gray", correct: false },
      { text: "Joule", correct: false },
    ],
  },
  {
    question: "What is the difference between exposure and contamination by",
    answers: [
      { text: "Contamination results when a radioisotope (as gas, liquid, or solid) is released into the environment and then ingested, inhaled, or deposited on the body surface. Radiation exposure occurs when all or part of the body absorbs penetrating ionizing radiati", correct: true },
      { text: "Unwanted radioactive material in or on the body, or spread about the environment", correct: false },
      { text: "Exposure results when a radioisotope (as gas, liquid, or solid) is released into the environment and then ingested, inhaled, or deposited on the body surface. Radiation contamination occurs when all or part of the body absorbs penetrating ionizing radiati", correct: false },
      { text: "No difference", correct: false },
      { text: "Contamination- from natural source of Radiation. Exposure - from man-made", correct: false },
    ],
  },
  {
    question: "Some individuals are more sensitive to the effects of ionizing radiation than others. This is called:",
    answers: [
      { text: "Genetic effects", correct: true },
      { text: "Fisical effects", correct: false },
      { text: "Cemical effects", correct: false },
      { text: "Worker effects", correct: false },
      { text: "Social effects", correct: false },
    ],
  },
  {
    question: "ALARA stands for:",
    answers: [
      { text: "As Low As Reasonable Achievable", correct: true },
      { text: "As Low As Responsibly Acceptable", correct: false },
      { text: "As Low As Reasonably Attenuated", correct: false },
      { text: "nan", correct: false },
      { text: "Social effects", correct: false },
    ],
  },
  {
    question: "Increasing the distance from the source of radiation:",
    answers: [
      { text: "Will reduce the amount of radiation received", correct: true },
      { text: "Will dicreases the amount of UV received", correct: false },
      { text: "Will result in the need of a slower speed film", correct: false },
      { text: "Will increase the amount of radiation received", correct: false },
      { text: "Will not change the amount of radiation received", correct: false },
    ],
  },
  {
    question: "Which of the following is radioactive element?",
    answers: [
      { text: "Po", correct: true },
      { text: "Cu", correct: false },
      { text: "Ti", correct: false },
      { text: "Zn", correct: false },
      { text: "P", correct: false },
    ],
  },
  {
    question: "Unit of degree of potential danger to health of radiation exposure is:",
    answers: [
      { text: "Sivert", correct: true },
      { text: "Roentgen", correct: false },
      { text: "Rad", correct: false },
      { text: "Gray", correct: false },
      { text: "Curie", correct: false },
    ],
  },
  {
    question: "What are the primary objectives of Occupational Health? ",
    answers: [
      { text: "Preventing work-related injuries and illnesses", correct: true },
      { text: "Providing treatment for common illnesses ", correct: false },
      { text: "Ensuring compliance with workplace dress codes ", correct: false },
      { text: "Arranging company social events", correct: false },
      { text: "Managing employee vacation schedules ", correct: false },
    ],
  },
  {
    question: "In occupational health, what does medical surveillance involve?",
    answers: [
      { text: " Monitoring", correct: true },
      { text: " Locating trends", correct: false },
      { text: " Compensation", correct: false },
      { text: " Exposure reduction", correct: false },
      { text: " Substitution", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a physical working factor?",
    answers: [
      { text: " Exposure to toxic chemicals", correct: true },
      { text: "Temperature extremes", correct: false },
      { text: " Poor lighting conditions", correct: false },
      { text: "Workplace vibration", correct: false },
      { text: "High level of the noise", correct: false },
    ],
  },
  {
    question: "Biological working factors can lead to diseases such as:",
    answers: [
      { text: "Infectious diseases", correct: true },
      { text: "Depression", correct: false },
      { text: "Cancer", correct: false },
      { text: "Hypothermia", correct: false },
      { text: "Cardiovascular diseases", correct: false },
    ],
  },
  {
    question: "Psychosocial working factors may contribute to:",
    answers: [
      { text: "Burnout and mental health issues", correct: true },
      { text: "Respiratory illnesses", correct: false },
      { text: "Hearing loss", correct: false },
      { text: "Bonel  diseases", correct: false },
      { text: "Leukemia", correct: false },
    ],
  },
  {
    question: "Occupational diseases are preventable through:",
    answers: [
      { text: "Proper safety training and protocols", correct: true },
      { text: "Regular exercise routines", correct: false },
      { text: "Socializing with coworkers", correct: false },
      { text: "Overworking to meet deadlines", correct: false },
      { text: "Orginizing relaxing places", correct: false },
    ],
  },
  {
    question: "What measures can be taken to mitigate chemical working factors?",
    answers: [
      { text: "Regular ventilation system checks", correct: true },
      { text: "Increasing exposure to toxic substances", correct: false },
      { text: "Ignoring safety data sheets (SDS)", correct: false },
      { text: "Eliminating safety gear requirements", correct: false },
      { text: "Regular checking of the light intensity", correct: false },
    ],
  },
  {
    question: "How can organizations reduce the risk of occupational diseases from biological factors?",
    answers: [
      { text: " Implementing regular health screenings", correct: true },
      { text: "Promoting unhealthy eating habits among employees", correct: false },
      { text: "Ignoring symptoms of illnesses", correct: false },
      { text: "Promoting poor hygiene practices", correct: false },
      { text: "Encouraging smoking in designated areas", correct: false },
    ],
  },
  {
    question: "In addressing psychosocial working factors, what actions should employers avoid?",
    answers: [
      { text: " Promoting a toxic work culture", correct: true },
      { text: "Providing support for employees' mental health", correct: false },
      { text: "Encouraging open communication channels", correct: false },
      { text: "Encouraging smoking in designated areas", correct: false },
      { text: "Encouraging work-life balance", correct: false },
    ],
  },
  {
    question: "What is the common term for Coal Worker's Pneumoconiosis (CWP)?",
    answers: [
      { text: " Black lung disease", correct: true },
      { text: " Silicosis", correct: false },
      { text: " Asbestosis", correct: false },
      { text: " Lung fibrosis", correct: false },
      { text: " Respiratory impairment", correct: false },
    ],
  },
  {
    question: "Review illness that are not regarded as the MOST common work-related ailments?",
    answers: [
      { text: "Cancer diseases ", correct: true },
      { text: "Musculoskeletal injuries", correct: false },
      { text: "Lung disease", correct: false },
      { text: "Neurotoxic disorders", correct: false },
      { text: "Pneumoconiosis", correct: false },
    ],
  },
  {
    question: " How does the noise exposure change for every doubling of the distance between the source of noise and the worker?",
    answers: [
      { text: " Decreases by 6 dBA ", correct: true },
      { text: "Decreases by 8 dBA", correct: false },
      { text: "Decreases by 10 dBA", correct: false },
      { text: "Decreases by 2 dBA", correct: false },
      { text: "Decreases by 4 dBA", correct: false },
    ],
  },
  {
    question: "What are examples of personal protective equipment (PPE) mentioned in the text for protection against biological agents?",
    answers: [
      { text: "Respirators and breathing apparatus (Correct)", correct: true },
      { text: " Steel-toe boots", correct: false },
      { text: "Safety glasses and face shields", correct: false },
      { text: " Reflective vests", correct: false },
      { text: "Hard hats and gloves", correct: false },
    ],
  },
  {
    question: "Following prolonged exposure to silica dust at a construction site, a worker developed respiratory symptoms that resolved after leaving the area. Which range of dust particle size is most likely to have caused this condition?",
    answers: [
      { text: " Coarse particles (10 - 100 μm)", correct: true },
      { text: " Fine particles (2.5 - 10 μm)", correct: false },
      { text: " Ultrafine particles (< 0.1 μm)", correct: false },
      { text: "Medium particles (1 - 2.5 μm)", correct: false },
      { text: "tiny particles (0-0,9 μm)", correct: false },
    ],
  },
  {
    question: "After prolonged exposure to biological agents in a laboratory setting, a researcher developed flu-like symptoms that resolved upon leaving the contaminated area. Which type of biological agent is most likely responsible for these symptoms?",
    answers: [
      { text: " Viruses", correct: true },
      { text: "Bacteria", correct: false },
      { text: "Helmints", correct: false },
      { text: "Insect ", correct: false },
      { text: "Molds", correct: false },
    ],
  },
  {
    question: " Which type of control measure for biological agents involves the use of biohazardous safety cabinets?",
    answers: [
      { text: " Engineering controls (Correct)", correct: true },
      { text: " Personal protective equipment", correct: false },
      { text: "Administrative controls", correct: false },
      { text: " Environmental controls", correct: false },
      { text: "Behavioral controls", correct: false },
    ],
  },
  {
    question: "Please, indicate the standard size of the ward per 1 bed in the therapeutic and surgical departments:",
    answers: [
      { text: "9 m2", correct: true },
      { text: "7 m2", correct: false },
      { text: "12 m2", correct: false },
      { text: "16 m2", correct: false },
      { text: "19m2", correct: false },
    ],
  },
  {
    question: "One of the measures for the prevention of intrahospital infections:",
    answers: [
      { text: " Constant monitoring the health facility for compliance with the current sanitary and epidemiological regime by the administration with the use of express research methods ", correct: true },
      { text: "Prohibition of work for personnel with hepatitis B", correct: false },
      { text: "Control over compliance with the current regime in the health care facility", correct: false },
      { text: "Proper schedulling the work of medical personnel", correct: false },
      { text: "Prohibition of work for personnel with hepatitis B", correct: false },
    ],
  },
  {
    question: "The advantage of centralized building of hospitals is that:",
    answers: [
      { text: "More land will be released for garden", correct: true },
      { text: "The cost of construction and maintenance of hospital is higher", correct: false },
      { text: "It does not contribute to the spread of intrahospital infecions ", correct: false },
      { text: "The territory of the hospital is smaller than in decentralized system", correct: false },
      { text: "Less land will be released for garden", correct: false },
    ],
  },
  {
    question: "The advantage of centralized building of hospitals is that:",
    answers: [
      { text: "Construction costs are cheaper", correct: true },
      { text: "It does not contribute to the spread of intrahospital infecions ", correct: false },
      { text: "The cost of construction and maintenance of hospital is higher", correct: false },
      { text: "The territory of the hospital is smaller than in decentralized system", correct: false },
      { text: "It does not contribute to the spread of intrahospital infection", correct: false },
    ],
  },
  {
    question: "The windows of the operating room should be oriented to:",
    answers: [
      { text: "The North", correct: true },
      { text: "The South", correct: false },
      { text: "The East", correct: false },
      { text: "The West", correct: false },
      { text: "The foreman will choose depending on the location of the territory", correct: false },
    ],
  },
  {
    question: "What zone should be not in the territory of a hospital?",
    answers: [
      { text: "Water sterilization zone", correct: true },
      { text: "Surgical zone", correct: false },
      { text: "Therapeutic zone", correct: false },
      { text: "Children playground", correct: false },
      { text: "Sterile area", correct: false },
    ],
  },
  {
    question: "What zone should be not in the territory of a hospital?",
    answers: [
      { text: "HIV patients zone", correct: true },
      { text: "Children playground", correct: false },
      { text: "Surgical zone", correct: false },
      { text: "Sterile area", correct: false },
      { text: "Therapeutic zone", correct: false },
    ],
  },
  {
    question: "Vitamins are a group of compounds:",
    answers: [
      { text: "high molecular and  low molecular weight; ", correct: true },
      { text: "low frequency and high molecular weight", correct: false },
      { text: "high frequency and high molecular weight", correct: false },
      { text: "high molecular weight", correct: false },
      { text: "low molecular weight and low frequency  ; ", correct: false },
    ],
  },
  {
    question: "What is dietary thermogenesis intended for?",
    answers: [
      { text: "use of chewing and swallowing metabolism", correct: true },
      { text: "thorough heat treatment of food products", correct: false },
      { text: "in the body the coloris distributed in the form of cold", correct: false },
      { text: "does not depend on physical activity", correct: false },
      { text: "calories required for thermogenesis is 50%", correct: false },
    ],
  },
  {
    question: "The nutritional value of vegetables and fruits is determined by:",
    answers: [
      { text: "content of fiber, vitamins and minerals", correct: true },
      { text: "high content of plant proteins", correct: false },
      { text: "high content of vegetable fats", correct: false },
      { text: "low fructose content", correct: false },
      { text: "content of body growth factors", correct: false },
    ],
  },
  {
    question: "Which of the following amino acids is essential:",
    answers: [
      { text: "tryptophan", correct: true },
      { text: "alanine", correct: false },
      { text: "glycine", correct: false },
      { text: "tyrosine", correct: false },
      { text: "cysteine", correct: false },
    ],
  },
  {
    question: "Component of hemoglobin in the blood, which carries oxygen to cells and tissues ",
    answers: [
      { text: "Iron", correct: true },
      { text: "Nitrates", correct: false },
      { text: "Vitamins", correct: false },
      { text: "Fats", correct: false },
      { text: "Water", correct: false },
    ],
  },
  {
    question: "Select the signs characteristic of the initial stages of most hypovitaminosis.",
    answers: [
      { text: "decreased performance, fatigue, drowsiness", correct: true },
      { text: "photophobia, lacrimation, keratitis;", correct: false },
      { text: "stomatitis, debilitating dysuria;", correct: false },
      { text: "temperature increase ", correct: false },
      { text: "sudden weight loss", correct: false },
    ],
  },
  {
    question: "What foods contain a lot of calcium and are its suppliers?",
    answers: [
      { text: "cabbage, lettuce", correct: true },
      { text: "potatoes, bread", correct: false },
      { text: "vegetable oils, meat; ", correct: false },
      { text: "cereals, fruits", correct: false },
      { text: "fruit  jam", correct: false },
    ],
  },
  {
    question: "What are the causes of hypovitaminosis C, in the winter-spring period",
    answers: [
      { text: "Decrease in the amount of vitamin C in foods", correct: true },
      { text: "Decreased reactivity of the body;", correct: false },
      { text: "Increasing levels of ultraviolet radiation", correct: false },
      { text: "Low air temperatures;", correct: false },
      { text: "Low atmospheric pressure", correct: false },
    ],
  },
  {
    question: "The main method for identifying a genetically modified protein is",
    answers: [
      { text: "enzyme immunoassay", correct: true },
      { text: "polymerase chain reaction", correct: false },
      { text: "electrophoresis", correct: false },
      { text: "plasmaphoresis", correct: false },
      { text: "biochemical analysis", correct: false },
    ],
  },
  {
    question: "The quality of meat is determined by indicators",
    answers: [
      { text: "Chemical", correct: true },
      { text: "Physical ", correct: false },
      { text: "Genetic", correct: false },
      { text: "Radiological", correct: false },
      { text: "Acidity", correct: false },
    ],
  },
  {
    question: "What morbidity is caused by a constant positive energy balance:",
    answers: [
      { text: "alimentary obesity", correct: true },
      { text: "malnutrition", correct: false },
      { text: "kwashiorkor", correct: false },
      { text: "taeniasis", correct: false },
      { text: "shigellosis", correct: false },
    ],
  },
  {
    question: "Specify  the mineral element that participates in the hematopoiesis",
    answers: [
      { text: "Iron", correct: true },
      { text: "Sodium", correct: false },
      { text: "Potassium", correct: false },
      { text: "Iodine", correct: false },
      { text: "fluorine", correct: false },
    ],
  },
  {
    question: "What are the names of diseases associated with the consumption of products obtained in biogeochemical provinces?",
    answers: [
      { text: "geochemical endemics", correct: true },
      { text: "food poisoning", correct: false },
      { text: "sporadic diseases", correct: false },
      { text: "specific diseases", correct: false },
      { text: "genetic diseases", correct: false },
    ],
  },
  {
    question: "A disease that develops when chemicals enter the body in toxic doses that can cause disruption of vital functions and create a danger to life:",
    answers: [
      { text: " poisoning", correct: true },
      { text: "diarrhea ", correct: false },
      { text: "allergy", correct: false },
      { text: "dyspepsia", correct: false },
      { text: "epilepsy", correct: false },
    ],
  },
  {
    question: "Poisonings that are predominantly chronic in nature and occur due to non-compliance with safety regulations at chemical plants and laboratories:",
    answers: [
      { text: "production", correct: true },
      { text: "biological", correct: false },
      { text: "medical", correct: false },
      { text: " infectious", correct: false },
      { text: "physical", correct: false },
    ],
  },
  {
    question: "Diagnosis of poisoning consists of three types of measures. Which stage is based on the analysis of anamnesis data, the results of an examination of the scene of the incident and the study of the clinical picture of the disease?",
    answers: [
      { text: "clinical diagnosis", correct: true },
      { text: "laboratory diagnostics", correct: false },
      { text: "toxicological diagnostics ", correct: false },
      { text: "pathomorphological diagnosis", correct: false },
      { text: "radiological diagnostics", correct: false },
    ],
  },
  {
    question: "Which food poisoning is characterized by clinical symptoms reminiscent of intoxication symptoms: causeless laughter, dancing, singing, unsteady gait:",
    answers: [
      { text: "Ergotism", correct: true },
      { text: "Fusariotoxicosis", correct: false },
      { text: "Aflotoxicosis", correct: false },
      { text: "Staphylococcal intoxication", correct: false },
      { text: "Botulism", correct: false },
    ],
  },
  {
    question: " What is the aim of studying health care for children and adolescents?",
    answers: [
      { text: " To substantiate and develop hygienic conditions for education and training ", correct: true },
      { text: " To ensure access to quality healthcare for all children ", correct: false },
      { text: " To conduct research on genetic factors affecting child development", correct: false },
      { text: " To develop advanced medical treatments for childhood illnesses ", correct: false },
      { text: " To promote healthy eating habits among children and adolescents ", correct: false },
    ],
  },
  {
    question: "Which of the following statements describes a regularity of physical development?",
    answers: [
      { text: "Physical development is synchronized with aging.", correct: true },
      { text: "Physical development is not influenced by genetic factors", correct: false },
      { text: "Physical development follows a cyclical pattern.", correct: false },
      { text: "Physical development is reversible. ", correct: false },
      { text: "Physical development occurs at a constant rate throughout life. ", correct: false },
    ],
  },
  {
    question: "How are anthropometric measurements used in ergonomics and design? ",
    answers: [
      { text: "To optimize product design for specific populations ", correct: true },
      { text: " To investigate associations between body size and diseases", correct: false },
      { text: " To assess athletic performance ", correct: false },
      { text: "To monitor changes in weight status", correct: false },
      { text: "To understand variations in human body size and shape", correct: false },
    ],
  },
  {
    question: "What are the criteria for the health of children at the individual level:",
    answers: [
      { text: " degree of neuropsychic development", correct: true },
      { text: "disability mortality child nutrition genealogical history degree of neuropsychic development E", correct: false },
      { text: "mortality", correct: false },
      { text: " child nutrition", correct: false },
      { text: "genealogical history", correct: false },
    ],
  },
  {
    question: "How can physical examination contribute to assessing puberty? ",
    answers: [
      { text: "By assessing external physical changes ", correct: true },
      { text: "By monitoring nutritional status ", correct: false },
      { text: "By measuring hormone levels", correct: false },
      { text: " By measuring bone density ", correct: false },
      { text: " By evaluating cognitive development", correct: false },
    ],
  },
  {
    question: "What does the term \"calibration\" refer to in the context of environmental monitoring equipment?",
    answers: [
      { text: "Adjusting the equipment to ensure accurate readings", correct: true },
      { text: "Replacing worn-out parts of the equipment", correct: false },
      { text: "Setting the date and time on the equipment ", correct: false },
      { text: "Downloading data from the equipment", correct: false },
      { text: "The process of cleaning the equipment ", correct: false },
    ],
  },
  {
    question: "What are some limitations of using remote sensing for environmental monitoring?",
    answers: [
      { text: "It can be affected by weather conditions. ", correct: true },
      { text: "It requires specialized skills to operate the equipment. ", correct: false },
      { text: "It is only suitable for monitoring large areas.", correct: false },
      { text: "It cannot provide real-time data. ", correct: false },
      { text: "It is not cost-effective for small-scale monitoring projects.", correct: false },
    ],
  },
  {
    question: "What is the standard unit for measuring air temperature?",
    answers: [
      { text: "Degrees Celsius", correct: true },
      { text: "Parts per million (ppm)", correct: false },
      { text: "Decibels (dB)", correct: false },
      { text: "Nephelometric Turbidity Units (NTU)", correct: false },
      { text: "Micrograms per cubic meter (µg/m³)", correct: false },
    ],
  },
  {
    question: "Which device would you use to measure the acidity in water samples?",
    answers: [
      { text: "pH meter", correct: true },
      { text: "Barometr", correct: false },
      { text: "Gravimetr", correct: false },
      { text: "Conductivity meter", correct: false },
      { text: "Titration apparatus", correct: false },
    ],
  },
  {
    question: "Which instrument would you use to measure the concentration of volatile organic compounds (VOCs) indoors?",
    answers: [
      { text: "Gas chromatograph", correct: true },
      { text: "Photometer", correct: false },
      { text: "Barometer", correct: false },
      { text: "pH meter", correct: false },
      { text: "Dosimenr", correct: false },
    ],
  },
  {
    question: "What is environmental health?",
    answers: [
      { text: "interaction between the environment and health", correct: true },
      { text: "interaction between politics and health", correct: false },
      { text: "interaction between health and economy", correct: false },
      { text: "interaction between humans and animals", correct: false },
      { text: "interaction between people and their health", correct: false },
    ],
  },
  {
    question: "What is not a physical factor?",
    answers: [
      { text: "organic compounds", correct: true },
      { text: "ionizing radiation", correct: false },
      { text: "electromagnetic waves", correct: false },
      { text: "influence of temperature", correct: false },
      { text: "influence of lighting", correct: false },
    ],
  },
  {
    question: "What are the main dissolved minerals that determine water hardness?",
    answers: [
      { text: "calcium & magnesium", correct: true },
      { text: "potassium & sodium", correct: false },
      { text: "potassium & manganese", correct: false },
      { text: "barium & nickel", correct: false },
      { text: "calcium & chlorine", correct: false },
    ],
  },
  {
    question: "Which water source has the lowest risk of bacterial contamination?",
    answers: [
      { text: "artesian water", correct: true },
      { text: " sea water", correct: false },
      { text: "lake water", correct: false },
      { text: "ocean water", correct: false },
      { text: " surface water", correct: false },
    ],
  },
  {
    question: "What proportion of fresh water is there in the total amount of water on Earth?",
    answers: [
      { text: "2,5-3,0%", correct: true },
      { text: "30-60,0%", correct: false },
      { text: "50,0-70,0%", correct: false },
      { text: "8,5-10,0%", correct: false },
      { text: "40,5-80,0%", correct: false },
    ],
  },
  {
    question: "What indicator is one of the advantages of ground (artesian) waters?",
    answers: [
      { text: "less microbiological contamination", correct: true },
      { text: "high mineralization", correct: false },
      { text: "the temperature is warm", correct: false },
      { text: "stable chemical composition", correct: false },
      { text: "high salt content", correct: false },
    ],
  },
  {
    question: "How much water should a 70 kg person drink per day?",
    answers: [
      { text: "2,0-2,5 L", correct: true },
      { text: "3,0-3,5 L", correct: false },
      { text: "1,0-1,5 L", correct: false },
      { text: "4,0-4,5 L", correct: false },
      { text: "5,0-6,5 L", correct: false },
    ],
  },
  {
    question: "Which biological agent belongs to the group of water-related vectors diseases?",
    answers: [
      { text: "Malaria", correct: true },
      { text: "Tuberculosis", correct: false },
      { text: "Leptosporosis", correct: false },
      { text: "Shigella dysentery", correct: false },
      { text: "Trachoma", correct: false },
    ],
  },
  {
    question: "What diseases can be classified as waterborne infectious diseases?",
    answers: [
      { text: "Hepatitis А", correct: true },
      { text: "Hepatitis B", correct: false },
      { text: "Typhus", correct: false },
      { text: "Hepatitis C", correct: false },
      { text: "Fluoride", correct: false },
    ],
  },
  {
    question: "Drinking water should be safe:",
    answers: [
      { text: "if there are no worm eggs", correct: true },
      { text: "if alpha particles are present", correct: false },
      { text: "if mercury compounds are present", correct: false },
      { text: "there are 3-5 fecal streptococci", correct: false },
      { text: "fluorine is more than 2.5 mg/l", correct: false },
    ],
  },
  {
    question: "What parameters are related to physical environmental factors?",
    answers: [
      { text: "vibration levels", correct: true },
      { text: "concentrations of chemicals", correct: false },
      { text: "presence of bacteria", correct: false },
      { text: "dissolved solids levels", correct: false },
      { text: "presence of protozoa", correct: false },
    ],
  },
  {
    question: "What parameters are related to chemical environmental factors?",
    answers: [
      { text: "fertilizer content", correct: true },
      { text: "noise levels", correct: false },
      { text: "conductivity levels", correct: false },
      { text: "bacterial content", correct: false },
      { text: "presence of worm eggs", correct: false },
    ],
  },
  {
    question: "What is safe drinking water according to WHO?",
    answers: [
      { text: "safe drinking water is water that \"does not represent any significant risk to health over a lifetime of consumption\"", correct: true },
      { text: "safe drinking water is water that \"absence of bacteria and viruses in drinking water\"", correct: false },
      { text: "safe drinking water is water that \"absence of helminths in drinking water\"", correct: false },
      { text: "safe drinking water is water that \"absence of odor in drinking water\"", correct: false },
      { text: "safe drinking water is water that \"absence of chemical compounds in drinking water\"", correct: false },
    ],
  },
  {
    question: "What are the WHO recommended pH limits for drinking water?",
    answers: [
      { text: "6,5-9,5", correct: true },
      { text: "5,0-7,5", correct: false },
      { text: "4,5-8,5", correct: false },
      { text: "6,0-10,5", correct: false },
      { text: "5,5-9,5", correct: false },
    ],
  },
  {
    question: "What is TDS in water?",
    answers: [
      { text: "TDS is the total concentration of dissolved substances in water", correct: true },
      { text: "TDS is the total number of particles in water", correct: false },
      { text: "TDS is the total concentration of heavy metals in water", correct: false },
      { text: "TDS is the total salt concentration in water", correct: false },
      { text: "TDS is the total amount of sedimentary particles", correct: false },
    ],
  },
  {
    question: "What level of nitrates in drinking water is dangerous?",
    answers: [
      { text: "> 50mg/L", correct: true },
      { text: "< 40mg/L", correct: false },
      { text: "< 50mg/L", correct: false },
      { text: "> 15mg/L", correct: false },
      { text: "> 25mg/L", correct: false },
    ],
  },
  {
    question: "What is the pH of hard water?",
    answers: [
      { text: "above 8.5", correct: true },
      { text: "above 7.5", correct: false },
      { text: "below 8.0", correct: false },
      { text: "above 6.5", correct: false },
      { text: "below 6.5", correct: false },
    ],
  },
  {
    question: "Which country experienced the first mass methylmercury poisoning due to water contamination?",
    answers: [
      { text: "Japan ", correct: true },
      { text: "Turkey", correct: false },
      { text: "China", correct: false },
      { text: "Korea", correct: false },
      { text: "Vietnam", correct: false },
    ],
  },
  {
    question: "What chemical methods of drinking water purification exist?",
    answers: [
      { text: "Chlorination", correct: true },
      { text: "Boiling", correct: false },
      { text: "Filtration", correct: false },
      { text: "Sedimentation", correct: false },
      { text: "UV purification", correct: false },
    ],
  },
  {
    question: "What indicator of physical safety of drinking water is used to assess the quality?",
    answers: [
      { text: "Conductivity", correct: true },
      { text: "E. coli", correct: false },
      { text: "pH", correct: false },
      { text: "Floride", correct: false },
      { text: "Pseudomonas aeruginosa", correct: false },
    ],
  },
  {
    question: "What indicator of microbiological safety of drinking water is used to assess the quality of disinfection?",
    answers: [
      { text: "absence of E. coli ", correct: true },
      { text: "presence of E. coli", correct: false },
      { text: "presence of salmonella", correct: false },
      { text: "absence of salmonella", correct: false },
      { text: "presence of pneumococcus", correct: false },
    ],
  },
  {
    question: "What substance has a toxic effect on the central nervous system when polluted in water?",
    answers: [
      { text: "methylmercury", correct: true },
      { text: "fluorine", correct: false },
      { text: "bicarbonates", correct: false },
      { text: "ammonium salts", correct: false },
      { text: "calcium", correct: false },
    ],
  },
  {
    question: "WHO: What does the abbreviation GDWQ mean?",
    answers: [
      { text: "Guidelines for drinking water quality ", correct: true },
      { text: "Global drinking water quality ", correct: false },
      { text: "Global directive water quality ", correct: false },
      { text: "Global directive waste quality ", correct: false },
      { text: "Guideline Directive for Waste Quality", correct: false },
    ],
  },
  {
    question: "What is the minimum amount of standard solutions required to measure the electrical conductivity of water?",
    answers: [
      { text: "1", correct: true },
      { text: "5", correct: false },
      { text: "4", correct: false },
      { text: "2", correct: false },
      { text: "3", correct: false },
    ],
  },
  {
    question: "What is the effect on the human body of high concentrations of fluoride in drinking water?",
    answers: [
      { text: "fluorosis", correct: true },
      { text: "improve memory", correct: false },
      { text: "increase in red blood cells", correct: false },
      { text: "obesity", correct: false },
      { text: "increasing muscle strength", correct: false },
    ],
  },
  {
    question: "Which of the following is not considered source water protection?",
    answers: [
      { text: "Prepare a presentation about yourself", correct: true },
      { text: "Use and dispose of harmful materials properly", correct: false },
      { text: "Volunteer to clean up areas.", correct: false },
      { text: "Join in a beach, stream or wetland cleanup", correct: false },
      { text: "Properly dispose of hazardous products", correct: false },
    ],
  },
  {
    question: "What level of E. coli in drinking water is considered safer?",
    answers: [
      { text: "less than 1 in 100 ml", correct: true },
      { text: "less than 1 in 200 ml", correct: false },
      { text: "more than 1 in 100 ml", correct: false },
      { text: "more than 1 in 500 ml", correct: false },
      { text: "less than 1 in 1L", correct: false },
    ],
  },
  {
    question: "The most abundant gas on the earth’s atmosphere is…",
    answers: [
      { text: "Volunteer in your community. ...", correct: true },
      { text: "Volunteer in your community. ...", correct: false },
      { text: "Volunteer in your community. ...", correct: false },
      { text: "Volunteer in your community. ...", correct: false },
      { text: "Volunteer in your community. ...", correct: false },
    ],
  },
  {
    question: "What atmospheric layer has most of the clouds?",
    answers: [
      { text: "Join in a beach, stream or wetland cleanup", correct: true },
      { text: "Join in a beach, stream or wetland cleanup", correct: false },
      { text: "Join in a beach, stream or wetland cleanup", correct: false },
      { text: "Join in a beach, stream or wetland cleanup", correct: false },
      { text: "Join in a beach, stream or wetland cleanup", correct: false },
    ],
  },
  {
    question: "Which one of the following is NOT a primary layer of the atmosphere?",
    answers: [
      { text: "Exosphere", correct: true },
      { text: "Troposphere", correct: false },
      { text: "Mesosphere", correct: false },
      { text: "Stratosphere", correct: false },
      { text: "Thermosphere", correct: false },
    ],
  },
  {
    question: "What is the safe level of noise intensity for humans?",
    answers: [
      { text: "up to 85 decibels", correct: true },
      { text: "up to 90 decibels", correct: false },
      { text: "up to 70 decibels", correct: false },
      { text: "up to 60 decibels", correct: false },
      { text: "up to 50 decibels", correct: false },
    ],
  },
  {
    question: "Which country ratified the Kyoto Protocol in late 2004 and thus caused it to become an international law?",
    answers: [
      { text: "Russia", correct: true },
      { text: "US", correct: false },
      { text: "Japan", correct: false },
      { text: "France", correct: false },
      { text: "China", correct: false },
    ],
  },
  {
    question: "Which among these would increase carbon dioxide in the atmosphere ?",
    answers: [
      { text: "Automobiles", correct: true },
      { text: "Plastic", correct: false },
      { text: "Animals", correct: false },
      { text: "Constructions", correct: false },
      { text: "Pesticides", correct: false },
    ],
  },
  {
    question: "Which instrument is used to measure wind velocity?",
    answers: [
      { text: "Anemometer", correct: true },
      { text: "Barometer", correct: false },
      { text: "Hygrometer", correct: false },
      { text: "Radiometer", correct: false },
      { text: "Seismograph", correct: false },
    ],
  },
  {
    question: "The indoor optimum relative humidity:",
    answers: [
      { text: "40-60%", correct: true },
      { text: "60-80%", correct: false },
      { text: "20-40%", correct: false },
      { text: "80-90%", correct: false },
      { text: "90-100%", correct: false },
    ],
  },
  {
    question: "What are the six basic factors of the most commonly used indicator of thermal comfort?",
    answers: [
      { text: "Air temperature", correct: true },
      { text: "Pulse and respiration rate, blood pressure", correct: false },
      { text: "Sweating, subjective feelings of a person", correct: false },
      { text: "Location", correct: false },
      { text: "Blood pressure measurement", correct: false },
    ],
  },
  {
    question: "The main components of soil includes:",
    answers: [
      { text: "Humus", correct: true },
      { text: "Human wastes", correct: false },
      { text: "Wastes", correct: false },
      { text: "Alive phases", correct: false },
      { text: "Gases", correct: false },
    ],
  },
  {
    question: "Biofertlizers can supply which of these nutrients?",
    answers: [
      { text: "Phosphorous", correct: true },
      { text: "Sodium", correct: false },
      { text: "Aluminium", correct: false },
      { text: "Calcium", correct: false },
      { text: "Chlorine", correct: false },
    ],
  },
  {
    question: "Which of the following is a major contributor to soil erosion?",
    answers: [
      { text: "Deforestation", correct: true },
      { text: "Recycling", correct: false },
      { text: "Renewable energy", correct: false },
      { text: "Urbanization", correct: false },
      { text: "Living organism", correct: false },
    ],
  },
  {
    question: "What do plants release as a byproduct of photosynthesis? ",
    answers: [
      { text: "Oxygen", correct: true },
      { text: "Carbon dioxide ", correct: false },
      { text: "Nitrogen ", correct: false },
      { text: "Hydrogen", correct: false },
      { text: "Metan", correct: false },
    ],
  },
  {
    question: "Soil methods of wastewater treatment:",
    answers: [
      { text: "Fields of irrigation, plowing up", correct: true },
      { text: "Incineration plants", correct: false },
      { text: "Improved landfills", correct: false },
      { text: "Methods of filtration", correct: false },
      { text: "Methods of purification", correct: false },
    ],
  },
  {
    question: "If the parental material is rock characteristic of a given region, then the resulting soil is referred to as",
    answers: [
      { text: "Residual", correct: true },
      { text: "Transported", correct: false },
      { text: "Elevated", correct: false },
      { text: "Thick", correct: false },
      { text: "Superposed", correct: false },
    ],
  },
  {
    question: "Tree roots reach down into the middle layer of soil, breaking up the rocks there. This soil layer is called                .",
    answers: [
      { text: "Subsoil", correct: true },
      { text: "Bedrock", correct: false },
      { text: "Topsoil", correct: false },
      { text: "Parent rock", correct: false },
      { text: "Fossils", correct: false },
    ],
  },
  {
    question: "A sealed source emits what?",
    answers: [
      { text: "Gamma rays", correct: true },
      { text: "Alpha particles", correct: false },
      { text: "Beta particles", correct: false },
      { text: "X-rays", correct: false },
      { text: "Delta particles", correct: false },
    ],
  },
  {
    question: "Which of the following types of radiation is not ionizing radiation?",
    answers: [
      { text: "Radiofrequency radiation", correct: true },
      { text: "Alpha particles", correct: false },
      { text: "Beta particles", correct: false },
      { text: "Gamma rays", correct: false },
      { text: "X-rays", correct: false },
    ],
  },
  {
    question: "Which of the following types of radiation is the most penetrating?",
    answers: [
      { text: "Gamma rays", correct: true },
      { text: "Beta particles", correct: false },
      { text: "X-rays", correct: false },
      { text: "Alpha particles", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "Which of the following health effects occur only after very high radiation doses, such as those experienced during a radiation emergency?",
    answers: [
      { text: "Permanent sterility", correct: true },
      { text: "burn", correct: false },
      { text: "vomit", correct: false },
      { text: "dizziness", correct: false },
      { text: "redness of the eyes", correct: false },
    ],
  },
  {
    question: "What is the unit in which radio activity is measured?",
    answers: [
      { text: "Beqerel", correct: true },
      { text: "Newton", correct: false },
      { text: "Decibel", correct: false },
      { text: "Lux", correct: false },
      { text: "Tonn", correct: false },
    ],
  },
  {
    question: "Which of the following practices help to keep radiation doses ALARA (as low as reasonably achievable)?",
    answers: [
      { text: "Time, distance, protection", correct: true },
      { text: "Time, distance, height", correct: false },
      { text: "Distance, protection, longitude  ", correct: false },
      { text: "Time, protection, width", correct: false },
      { text: "Distance, protection, length", correct: false },
    ],
  },
  {
    question: "What effect can high doses of radiation have on the human eye?",
    answers: [
      { text: "Cause cataracts", correct: true },
      { text: "Cause long sight", correct: false },
      { text: "Causes glaucoma", correct: false },
      { text: "Blindness", correct: false },
      { text: "Redness of the eyes", correct: false },
    ],
  },
  {
    question: "Which of the following is one of the management responsibilities in worker's health?",
    answers: [
      { text: "Providing a safe working environment", correct: true },
      { text: "Increasing production quotas", correct: false },
      { text: "Reducing employee benefits", correct: false },
      { text: "Limiting safety training", correct: false },
      { text: "Ignoring workplace hazards", correct: false },
    ],
  },
  {
    question: "Which of the following is a principal task of Occupational Health?",
    answers: [
      { text: "Anticipation of potential disease and injury", correct: true },
      { text: "Research and development of guidelines", correct: false },
      { text: "Risk mitigation", correct: false },
      { text: "Hazard labeling", correct: false },
      { text: "Providing the PPE", correct: false },
    ],
  },
  {
    question: "How do government inspections contribute to worker health and safety?",
    answers: [
      { text: "By ensuring compliance with health and safety regulations through regular workplace assessments", correct: true },
      { text: "By increasing bureaucratic hurdles without practical benefits", correct: false },
      { text: "By promoting company profits over safety", correct: false },
      { text: "By penalizing workers for accidents", correct: false },
      { text: "By focusing solely on environmental conservation", correct: false },
    ],
  },
  {
    question: "What is the primary cause of byssinosis?",
    answers: [
      { text: "Exposure to cotton dust in textile mills", correct: true },
      { text: "Inhalation of coal dust particles", correct: false },
      { text: "Ingestion of contaminated water", correct: false },
      { text: "Exposure to loud noises over time", correct: false },
      { text: "Inhalation of asbestos fibers leading to lung scarring", correct: false },
    ],
  },
  {
    question: "Which workers are at higher risk of developing berylliosis?",
    answers: [
      { text: "Employees in metal machining and electronics manufacturing", correct: true },
      { text: "Agricultural field workers", correct: false },
      { text: "Office administrative staff", correct: false },
      { text: "Healthcare professionals in hospitals", correct: false },
      { text: "Teachers in educational institutions", correct: false },
    ],
  },
  {
    question: "Why is proper housekeeping important in the workplace?",
    answers: [
      { text: "It helps prevent accidents by eliminating hazards like clutter and spills", correct: true },
      { text: " It increases product sales", correct: false },
      { text: "It reduces the need for employee breaks", correct: false },
      { text: "It enhances the company's public image only", correct: false },
      { text: "It minimizes energy consumption", correct: false },
    ],
  },
  {
    question: "To reduce the incidence of musculoskeletal disorders among employees, a company should:",
    answers: [
      { text: "Apply ergonomic principles to workstation and equipment design", correct: true },
      { text: "Increase repetitive tasks without breaks", correct: false },
      { text: "Eliminate employee wellness programs", correct: false },
      { text: "Discourage reporting of discomfort", correct: false },
      { text: "Ignore ergonomic assessments", correct: false },
    ],
  },
  {
    question: "How can management promote overall employee health and well-being?",
    answers: [
      { text: "By offering wellness programs and encouraging healthy behaviors", correct: true },
      { text: " By limiting access to healthcare resources", correct: false },
      { text: "By increasing mandatory overtime", correct: false },
      { text: " By discouraging work-life balance", correct: false },
      { text: "By focusing solely on productivity metrics", correct: false },
    ],
  },
  {
    question: "What is the best preventive approach for workers exposed to biological occupational diseases?",
    answers: [
      { text: "Using appropriate personal protective equipment (PPE)", correct: true },
      { text: "Eliminating worker training programs", correct: false },
      { text: "Reducing management feedback", correct: false },
      { text: " Ignoring government regulations", correct: false },
      { text: "Encouraging longer work hours", correct: false },
    ],
  },
  {
    question: "Which international organization issued Convention 170 on the use of chemicals?",
    answers: [
      { text: "International Labor Organization (ILO)", correct: true },
      { text: "World Health Organization (WHO)", correct: false },
      { text: "United Nations Environment Program (UNEP)", correct: false },
      { text: "Center for Disease Control (CDC)", correct: false },
      { text: "European Commission", correct: false },
    ],
  },
  {
    question: "What are examples of physical factors in occupational health?",
    answers: [
      { text: "Noise, vibration, and temperature extremes", correct: true },
      { text: "Chemical dust, asbestos, and mercury", correct: false },
      { text: "Poor lighting and cramped spaces", correct: false },
      { text: "Infectious diseases and toxins", correct: false },
      { text: "Only noise and ergonomics", correct: false },
    ],
  },
  {
    question: "What is a typical occupational biological risk factor?",
    answers: [
      { text: "Exposure to bacteria, viruses, and fungi", correct: true },
      { text: "Handling sharp tools", correct: false },
      { text: " Prolonged sitting in the office", correct: false },
      { text: " Working in brightly lit environments", correct: false },
      { text: " Using chemical fertilizers", correct: false },
    ],
  },
  {
    question: "What are the health impacts of noise exposure according to Harvard research?",
    answers: [
      { text: " Cardiovascular diseases, sleep disturbances, and cognitive problems", correct: true },
      { text: "Enhanced cognitive abilities", correct: false },
      { text: "Reduced risk of chronic illnesses", correct: false },
      { text: " Improved auditory performance", correct: false },
      { text: "No impact", correct: false },
    ],
  },
  {
    question: "What should an employer do to control vibration exposure in the workplace?",
    answers: [
      { text: " Limit time spent on vibrating surfaces and use vibration-damping seats", correct: true },
      { text: "Replace all vibrating tools with silent ones", correct: false },
      { text: "Eliminate worker breaks", correct: false },
      { text: " Ignore complaints related to vibration symptoms", correct: false },
      { text: " Increase the weight of tools", correct: false },
    ],
  },
  {
    question: "How can employers reduce worker noise exposure effectively?",
    answers: [
      { text: "Use soundproof walls or enclosures around noise sources", correct: true },
      { text: "Eliminate all machinery from the workplace", correct: false },
      { text: "Extend worker shifts to reduce idle noise time", correct: false },
      { text: "Ignore the issue and let workers adapt", correct: false },
      { text: "Replace tools with more powerful alternatives", correct: false },
    ],
  },
  {
    question: "What is a practical ergonomic intervention to prevent musculoskeletal disorders?",
    answers: [
      { text: "Design workstations to suit worker posture and task requirements", correct: true },
      { text: "Encourage workers to ignore discomfort", correct: false },
      { text: "Reduce training on ergonomic principles", correct: false },
      { text: " Increase physical workload to build strength", correct: false },
      { text: " Replace manual tasks with robotic automation without feedback", correct: false },
    ],
  },
  {
    question: "What level of noise is recommended at hospital wards?",
    answers: [
      { text: "45 dB", correct: true },
      { text: "75 dB", correct: false },
      { text: "70 dB", correct: false },
      { text: "72 dB", correct: false },
      { text: "60 dB", correct: false },
    ],
  },
  {
    question: "Why should the Pathological Anatomy Department be placed in an isolated place not visible from hospital windows?",
    answers: [
      { text: "To prevent unpleasant odors from reaching patient areas", correct: true },
      { text: "To maintain confidentiality of patient information", correct: false },
      { text: "To create a tranquil environment for patients", correct: false },
      { text: "To ensure the safety of laboratory equipment", correct: false },
      { text: "To facilitate easy access for medical staff ", correct: false },
    ],
  },
  {
    question: "Why is it recommended to have two entrances in the infectious disease clinic, one for patients and one for staff and deliveries?",
    answers: [
      { text: "To prevent cross-contamination", correct: true },
      { text: "To ensure easy access for everyone", correct: false },
      { text: "To maintain patient privacy", correct: false },
      { text: "To improve ventilation within the clinic", correct: false },
      { text: "To enhance the aesthetic appeal of the clinic ", correct: false },
    ],
  },
  {
    question: "What is the purpose of semi-boxes and full boxes in preventing hospital-acquired infections?",
    answers: [
      { text: "To minimize airborne transmission of infections", correct: true },
      { text: "To facilitate patient movement within the hospital", correct: false },
      { text: "To provide additional storage space", correct: false },
      { text: "To improve staff efficiency", correct: false },
      { text: "To enhance patient comfort ", correct: false },
    ],
  },
  {
    question: "According to the guidelines, how many entrances should an infectious disease clinic have?",
    answers: [
      { text: "2", correct: true },
      { text: "1", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "What is the recommended distance between beds in the ward?",
    answers: [
      { text: "0.8-1.0 meters", correct: true },
      { text: "0.5-0.7 meters", correct: false },
      { text: "1.0-1.2 meters", correct: false },
      { text: "1.5-1.8 meters", correct: false },
      { text: "2.0-3.0 meters", correct: false },
    ],
  },
  {
    question: "Why should the width of the corridor be not less than 2,4m?",
    answers: [
      { text: "allows free deployment of beds or stretchers. ", correct: true },
      { text: "for the comfort of visitors", correct: false },
      { text: "allows free movemenf ", correct: false },
      { text: "To increase the lighting", correct: false },
      { text: "Have a place for house plants", correct: false },
    ],
  },
  {
    question: "Vitamins are synthesized mainly:",
    answers: [
      { text: "in plants.", correct: true },
      { text: "in water ", correct: false },
      { text: "in  soil", correct: false },
      { text: "in the human body", correct: false },
      { text: "in the body of animals", correct: false },
    ],
  },
  {
    question: "Calcium absorption is impaired by:",
    answers: [
      { text: "increased amount of fat", correct: true },
      { text: "excess iron", correct: false },
      { text: "excess fluoride", correct: false },
      { text: "lack of fiber", correct: false },
      { text: "magnesium deficiency", correct: false },
    ],
  },
  {
    question: "What foods are well absorbed by calcium:",
    answers: [
      { text: "dairy products", correct: true },
      { text: "cereals", correct: false },
      { text: "flour products", correct: false },
      { text: " fish products", correct: false },
      { text: "vegetables", correct: false },
    ],
  },
  {
    question: "Which vitamins are water soluble vitamins",
    answers: [
      { text: "  B", correct: true },
      { text: "A", correct: false },
      { text: "Е", correct: false },
      { text: "D", correct: false },
      { text: "Tocopherol", correct: false },
    ],
  },
  {
    question: "What does the term healthy eating include?",
    answers: [
      { text: "qualitative and quantitative adequacy of nutrients", correct: true },
      { text: "increased carbohydrate intake", correct: false },
      { text: "decreasing intake of fat", correct: false },
      { text: "decreasing intake of fat and protein", correct: false },
      { text: "increasing intake of all nutrients", correct: false },
    ],
  },
  {
    question: "What kind of food is included in the requirement of a healthy diet",
    answers: [
      { text: "variety of food", correct: true },
      { text: "decreasing intake of fat", correct: false },
      { text: "increase intake of all nutrients", correct: false },
      { text: "decreasing intake of fat and protein", correct: false },
      { text: "increased carbohydrate intake", correct: false },
    ],
  },
  {
    question: "A substance that regulates the activity of the thyroid gland in the human body is...",
    answers: [
      { text: "Iodine", correct: true },
      { text: "Phosphorus", correct: false },
      { text: "Calcium", correct: false },
      { text: "Chlorine", correct: false },
      { text: "Vitamin", correct: false },
    ],
  },
  {
    question: "What flour is potentially dangerous and its production is prohibited?",
    answers: [
      { text: "beans", correct: true },
      { text: "rice flour", correct: false },
      { text: "wheat flour", correct: false },
      { text: "pea flour", correct: false },
      { text: "corn", correct: false },
    ],
  },
  {
    question: "The disadvantage of the nutritional composition of bread is:",
    answers: [
      { text: "unbalanced amino ", correct: true },
      { text: "acid composition", correct: false },
      { text: "a lot of carbohydrates", correct: false },
      { text: "few minerals", correct: false },
      { text: "lack of fat", correct: false },
    ],
  },
  {
    question: "In what period is the enrichment of prepared dishes carried out in children's institutions:",
    answers: [
      { text: "ascorbic acid is added to 3 meals all year round", correct: true },
      { text: "adding ascorbic acid to all dishes in the autumn-winter period", correct: false },
      { text: "ascorbic acid was added to the third dishes in the autumn-winter period", correct: false },
      { text: "multivitamin preparations added to all meals all year round", correct: false },
      { text: "iron is added in the autumn-winter period", correct: false },
    ],
  },
  {
    question: "What diet should a healthy person have?",
    answers: [
      { text: "The multiplicity of meals", correct: true },
      { text: "It is systematic taking meal", correct: false },
      { text: "Reception of the optimal amount of carbohydrates", correct: false },
      { text: "Taking optimal amounts of all micro- and micronutrients", correct: false },
      { text: "The taking right amount of food", correct: false },
    ],
  },
  {
    question: "Will the adult body's need for essential amino acids be met if protein from animal products accounts for 30% of the total amount of protein consumed?",
    answers: [
      { text: "the supply of essential amino acids will be insufficient", correct: true },
      { text: "the supply of essential amino acids will be excessive", correct: false },
      { text: "provides sufficient quantity   nonessential amino acids", correct: false },
      { text: "not enough essential amino acids", correct: false },
      { text: "the supply of essential amino acids will be sufficient", correct: false },
    ],
  },
  {
    question: "A physiological process occurring in the body with the participation of microorganisms",
    answers: [
      { text: "Infection", correct: true },
      { text: "Food poisoning", correct: false },
      { text: "carbohydrate breakdown", correct: false },
      { text: "Protein breakdown", correct: false },
      { text: "Digestion", correct: false },
    ],
  },
  {
    question: "Food staphylococcal intoxication is usually characterized by:",
    answers: [
      { text: "rapid onset of the disease", correct: true },
      { text: "silent onset of the disease ", correct: false },
      { text: "Basic diagnosis biochemically", correct: false },
      { text: "an incubation period lasting several days", correct: false },
      { text: "absence of gastritis", correct: false },
    ],
  },
  {
    question: "What helminths are associated with eating vegetables",
    answers: [
      { text: "Ascaridosis", correct: true },
      { text: "Diphyllobothriasis", correct: false },
      { text: "Leptospirosis", correct: false },
      { text: " Teniarinhoz", correct: false },
      { text: "Opisthorchiasis", correct: false },
    ],
  },
  {
    question: "What kind of food poisoning, if the clinic notes: temperature 38-40 °, vomiting, abdominal pain, frequent and copious stools, fetid with mucus and blood, tenesmus, pallor of the skin",
    answers: [
      { text: "Toxicinfection caused by salmonella ", correct: true },
      { text: "Escherichia coli poisoning", correct: false },
      { text: "Рoisoning with pale toadstool", correct: false },
      { text: "Рoisoning by belladonna", correct: false },
      { text: "Вotulism", correct: false },
    ],
  },
  {
    question: "The final diagnosis of \"food poisoning\" is established after:",
    answers: [
      { text: "Оbtaining data from laboratory studies ", correct: true },
      { text: "nan", correct: false },
      { text: "Сollecting a food history and identifying a \"suspect\" product", correct: false },
      { text: "Аnalysis of the epidemiological situation", correct: false },
      { text: "Sanitary and epidemiological examination of the food facility", correct: false },
    ],
  },
  {
    question: "What is the focus of the section of preventive medicine called \"Hygiene of Children and Adolescents\"?",
    answers: [
      { text: " Promoting the health and development of children and adolescents c", correct: true },
      { text: " Educating individuals with physical disabilities d", correct: false },
      { text: " Investigating the effects of pollution on the environment ", correct: false },
      { text: " Preventing chronic diseases in the elderly", correct: false },
      { text: " Studying the impact of environmental conditions on adult health ", correct: false },
    ],
  },
  {
    question: "What is the main purpose of anthropometric studies?",
    answers: [
      { text: "To understand variations in human body size and shape ", correct: true },
      { text: " To investigate associations between body size and diseases ", correct: false },
      { text: "To optimize product design for specific populations", correct: false },
      { text: "To analyze human movement patterns ", correct: false },
      { text: "To assess athletic performance ", correct: false },
    ],
  },
  {
    question: "Does somatoscopic examination include an assessment? ",
    answers: [
      { text: "static endurance", correct: true },
      { text: "body type", correct: false },
      { text: "chest excursions", correct: false },
      { text: "coordination of movements", correct: false },
      { text: "mental development", correct: false },
    ],
  },
  {
    question: "What refers to uneven growth and development in ontogenesis:",
    answers: [
      { text: "the older the child, the lower the rate of growth and development", correct: true },
      { text: "growth rates of boys and girls are not the same", correct: false },
      { text: "the growth and development rates of different body systems are not the same", correct: false },
      { text: "accelerated rates ensure the survival of the organism", correct: false },
      { text: "the growth and development of each child is controlled by its own genetic program", correct: false },
    ],
  },
  {
    question: "Risk factors for retardation of children and adolescents in physical development and puberty include a deficiency in the diet of ",
    answers: [
      { text: "tocopherols", correct: true },
      { text: "magnesium", correct: false },
      { text: "fluoride ", correct: false },
      { text: "potassium ", correct: false },
      { text: "nitrogen", correct: false },
    ],
  },
  {
    question: "Which of the following statements about environmental monitoring is FALSE? ",
    answers: [
      { text: "It can be used to track changes in environmental quality over time.", correct: true },
      { text: "It is essential for sustainable environmental management.", correct: false },
      { text: "It helps to identify potential environmental hazards.", correct: false },
      { text: "It provides data to assess the effectiveness of environmental regulations.", correct: false },
      { text: "It is always a complex and expensive undertaking.", correct: false },
    ],
  },
  {
    question: "What environmental parameters can be assessed with a psychometer",
    answers: [
      { text: "Humidity of the air", correct: true },
      { text: "Noise", correct: false },
      { text: "Speed of the air", correct: false },
      { text: "Spectr of the light", correct: false },
      { text: "Athmospheric pressure", correct: false },
    ],
  },
  {
    question: "Which device would you use to measure the level of noise pollution in a residential area?",
    answers: [
      { text: "Sonometer", correct: true },
      { text: "Luxmeter", correct: false },
      { text: "Turbidity meter", correct: false },
      { text: "Tachometr", correct: false },
      { text: "Anemometr", correct: false },
    ],
  },
  {
    question: "When overseeing the health of a river's water, what factor is most indicative of organic pollution?",
    answers: [
      { text: "Biochemical oxygen demand (BOD)", correct: true },
      { text: "Turbidity", correct: false },
      { text: "Dissolved oxygen", correct: false },
      { text: "Conductivity", correct: false },
      { text: "pH", correct: false },
    ],
  },
  {
    question: "When assessing air quality near industrial facilities, which parameter would be most important to measure to evaluate the impact of sulfur emissions?",
    answers: [
      { text: "SO2", correct: true },
      { text: "NO2", correct: false },
      { text: "O3", correct: false },
      { text: "PM", correct: false },
      { text: "CO", correct: false },
    ],
  },
]


const questionElement = document.getElementById('question'); 
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  const shuffledAnswers = [...currentQuestion.answers];
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    showQuestion();
  }
}

backButton.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    handleBackButton();
  }
});

searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10);
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1;
    showQuestion();
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});

startQuiz();
