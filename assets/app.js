/* ---------- DATA (from your Bubble CSV exports) ---------- */
const PETITIONS = [
 {
  "id": "sk-innovation",
  "img": "images/petition-sk-innovation.webp",
  "title": "SK Innovation: Show Whether the Numbers Match the Promise",
  "summary": "SK Innovation has promised to achieve net zero before 2050 and reduce Scope 3 emissions from its energy and chemical business.",
  "signatures": 1345,
  "goal": 500,
  "body": "<p>SK Innovation has promised to achieve net zero before 2050 and reduce Scope 3 emissions from its energy and chemical business.</p>\n<p>The company already publishes emissions data. In 2025, it reported more than 22 million metric tons of Scope 1 and 2 emissions and approximately 171 million metric tons of Scope 3 emissions.</p>\n<p>But SK Innovation’s reporting boundary has changed following corporate restructuring and its merger with SK E&amp;S. This makes it difficult to compare current emissions with the company’s original 2019 baseline and determine whether its climate targets remain on track.</p>\n<p>Promises are not enough. Progress must be measurable.</p>\n<div><b>We ask SK Innovation to:</b><ol><li>Publish an annual table showing Scope 1, 2, and 3 emissions, year-over-year changes, and progress against a clearly restated 2019 baseline.</li><li>Report project-level progress at Ulsan CLX, including fuel-switching projects, investment completed, expected emissions reductions, and completion dates.</li><li>Release a detailed CCUS roadmap by December 31, 2027, distinguishing planned capture capacity from carbon actually captured, transported, and stored.</li><li>Obtain independent verification of progress toward its 2030 Scope 3 target and explain how the target applies to the company’s current organizational structure.</li></ol></div>\n<p>SK Innovation already has the data. Now it must show whether its investments and projects are producing real emissions reductions.</p>\n<p>Co2mmitment is a student-led project that tracks and analyzes corporate carbon emissions data.</p>\n<p><b>Add your name and ask SK Innovation to prove its climate commitments with transparent, comparable numbers.</b></p>"
 },
 {
  "id": "mahindra",
  "img": "images/petition-mahindra.webp",
  "title": "Mahindra’s Climate Responsibility Does Not End with the Sale",
  "summary": "Mahindra manufactures vehicles, tractors, and industrial equipment. But the carbon impact of these products continues long after they leave the factory.",
  "signatures": 526,
  "goal": 500,
  "body": "<p>Mahindra manufactures vehicles, tractors, and industrial equipment. But the carbon impact of these products continues long after they leave the factory.</p>\n<p>Fuel-powered vehicles and tractors emit carbon throughout years of use. Additional emissions come from steel, components, batteries, transportation, and hundreds of suppliers across Mahindra’s value chain.</p>\n<p>Mahindra already reports corporate emissions, renewable energy use, and electric vehicle sales. However, its public disclosures do not clearly show which products, facilities, and suppliers generate the greatest climate impact.</p>\n<div><b>We ask Mahindra to:</b><ol><li>Break down emissions by major facility, business unit, product type, and Scope 3 category.</li><li>Require major suppliers to disclose their emissions and reduction targets.</li><li>Publish lifecycle carbon data for major vehicles and tractors, including emissions from production, use, and disposal.</li><li>Report verified EV sales and set measurable product-level emissions reduction targets through 2030.</li></ol></div>\n<p>A company’s responsibility should not end when its product is sold.</p>\n<p>Mahindra has the data and the ability to act. It should provide the transparency needed to measure real progress.</p>\n<p>Co2mmitment is a student-led project using corporate emissions data to promote measurable climate action.</p>\n<p><b>Add your name and ask Mahindra to take responsibility for the full lifecycle impact of its products.</b></p>"
 },
 {
  "id": "chevron",
  "img": "images/petition-chevron.webp",
  "title": "Tell Chevron: Measure the Full Carbon Cost",
  "summary": "Chevron produces, transports, refines, and sells oil and gas. Emissions occur across this entire value chain, but the largest share comes after Chevron’s products are sold and burned.",
  "signatures": 648,
  "goal": 500,
  "body": "<p>Chevron produces, transports, refines, and sells oil and gas. Emissions occur across this entire value chain, but the largest share comes after Chevron’s products are sold and burned.</p>\n<p>In 2024, Chevron reported approximately 53 million metric tons of Scope 1 emissions and 2 million metric tons of Scope 2 emissions. Its Scope 3 emissions from the use of sold products were estimated at 324 million to 616 million metric tons, depending on the calculation method.</p>\n<p>Chevron already reports some emissions data, but its disclosures still do not provide a complete and consistently comparable picture of its global climate impact. Some subsidiaries, joint ventures, and newly acquired assets remain outside parts of its verified reporting boundary.</p>\n<p>Methane is also a major concern. It can leak from wells, valves, compressors, storage tanks, and pipelines. Chevron already uses drones, LiDAR sensors, and other technologies to detect and reduce these emissions.</p>\n<p>The technology exists. What is missing is full transparency.</p>\n<div><b>We call on Chevron to:</b><ol><li>Publish detailed annual methane emissions data, including major leaks, venting, flaring, and verified reductions.</li><li>Report Scope 1, Scope 2, and all material Scope 3 emissions using consistent methods and clearly identify excluded assets.</li><li>Release a facility-electrification plan by December 31, 2027, including expected costs, timelines, and emissions reductions.</li><li>Report actual carbon capture performance, not only announced or designed capacity.</li><li>Publish annual revenue, investment, and profit data for hydrogen, renewable fuels, carbon capture, and other lower-carbon businesses.</li></ol></div>\n<p>Chevron knows where its emissions come from. It has the technology to measure and reduce them.</p>\n<p>Now it must provide complete, comparable, and independently verified information.</p>\n<p>Co2mmitment is a student-led project using corporate emissions data to push companies toward measurable climate action.</p>\n<p><b>Add your name and demand full carbon accountability from Chevron.</b></p>"
 }
];
// [country, % of global, 2023, 2000, % change, map address, [lat,lng]]
const CO2 = [["World", "100%", "39,023.94", "25,725.44", 52, "", null], ["China", "34%", "13,259.64", "3,666.95", 262, "China", [35.86, 104.2]], ["United States", "12%", "4,682.04", "5,928.97", -21, "United States", [37.09, -95.71]], ["India", "7.6%", "2,955.18", "995.65", 197, "India", [20.59, 78.96]], ["European Union", "6.4%", "2,512.07", "3,563.26", -30, "Europe", [50.1, 9.0]], ["Russia", "5.3%", "2,069.5", "1,681.14", 23, "Russia", [61.52, 105.32]], ["Japan", "2.4%", "944.76", "1,248.81", -24, "Japan", [36.2, 138.25]], ["Iran", "2%", "778.8", "353.93", 120, "Iran", [32.43, 53.69]], ["International Shipping", "1.8%", "706.32", "503.29", 40, "Pacific Ocean", [10.0, -150.0]], ["Indonesia", "1.7%", "674.54", "299.09", 126, "Indonesia", [-0.79, 113.92]], ["Saudi Arabia", "1.6%", "622.91", "265.24", 135, "Saudi Arabia", [23.89, 45.08]], ["Germany", "1.5%", "582.95", "871.74", -33, "Germany", [51.17, 10.45]], ["Canada", "1.5%", "575.01", "543.04", 6, "Canada", [56.13, -106.35]], ["South Korea", "1.5%", "573.54", "474.16", 21, "South Korea", [35.91, 127.77]], ["International Aviation", "1.3%", "491.63", "355.32", 38, "Arctic Ocean", [75.0, -40.0]], ["Mexico", "1.2%", "487.09", "396.71", 23, "Mexico", [23.63, -102.55]], ["Brazil", "1.2%", "479.5", "349.4", 37, "Brazil", [-14.24, -51.93]], ["Turkey", "1.1%", "438.32", "227.05", 93, "Türkiye", [38.96, 35.24]], ["South Africa", "1%", "397.37", "347.3", 14, "South Africa", [-30.56, 22.94]], ["Australia", "1%", "373.62", "353.87", 6, "Australia", [-25.27, 133.78]], ["Vietnam", "1%", "372.95", "56.52", 560, "Vietnam", [14.06, 108.28]], ["Italy, San Marino and Vatican City", "0.8%", "305.49", "454.72", -33, "Italy", [41.87, 12.57]], ["United Kingdom", "0.8%", "302.1", "551.68", -45, "United Kingdom", [55.38, -3.44]], ["Poland", "0.7%", "286.91", "313.02", -8, "Poland", [51.92, 19.15]], ["Malaysia", "0.7%", "283.32", "130.78", 117, "Malaysia", [4.21, 101.98]], ["France and Monaco", "0.7%", "282.43", "401.21", -30, "France", [46.23, 2.21]], ["Taiwan", "0.7%", "279.85", "238.02", 18, "Taiwan", [23.7, 120.96]], ["Thailand", "0.7%", "274.16", "174.82", 57, "Thailand", [15.87, 100.99]], ["Egypt", "0.6%", "249.33", "127.91", 95, "Egypt", [26.82, 30.8]], ["Kazakhstan", "0.6%", "239.87", "132.22", 81, "Kazakhstan", [48.02, 66.92]], ["Spain and Andorra", "0.6%", "217.26", "313.24", -31, "Spain", [40.46, -3.75]], ["United Arab Emirates", "0.5%", "205.99", "88.46", 133, "United Arab Emirates", [23.42, 53.85]], ["Pakistan", "0.5%", "200.51", "111.87", 79, "Pakistan", [30.38, 69.35]], ["Iraq", "0.5%", "192.91", "88.81", 117, "Iraq", [33.22, 43.68]], ["Argentina", "0.5%", "183.78", "136.76", 34, "Argentina", [-38.4, -63.6]], ["Algeria", "0.5%", "180.36", "87.94", 105, "Algeria", [28.0, 1.66]], ["Philippines", "0.4%", "161.29", "74.25", 117, "Philippines", [12.88, 121.77]], ["Uzbekistan", "0.4%", "137.9", "130.67", 6, "Uzbekistan", [41.38, 64.59]], ["Ukraine", "0.3%", "136.2", "360.02", -62, "Ukraine", [48.38, 31.17]], ["Nigeria", "0.3%", "127.94", "100.3", 28, "Nigeria", [9.08, 8.68]], ["Qatar", "0.3%", "127.91", "31.75", 303, "Qatar", [25.35, 51.18]], ["Bangladesh", "0.3%", "124.79", "26.97", 363, "Bangladesh", [23.68, 90.36]], ["Netherlands", "0.3%", "122.87", "176.91", -31, "Netherlands", [52.13, 5.29]], ["Kuwait", "0.3%", "111.63", "54.48", 105, "Kuwait", [29.31, 47.48]], ["Colombia", "0.3%", "100.86", "62.57", 61, "Colombia", [4.57, -74.3]], ["Oman", "0.2%", "93.09", "26.32", 254, "Oman", [21.51, 55.92]], ["Czech Republic", "0.2%", "90.51", "132.31", -32, "Czechia", [49.82, 15.47]], ["Venezuela", "0.2%", "84.6", "137.75", -39, "Venezuela", [6.42, -66.59]], ["Belgium", "0.2%", "84.31", "124.97", -33, "Belgium", [50.5, 4.47]], ["Chile", "0.2%", "84", "53.85", 56, "Chile", [-35.68, -71.54]], ["Romania", "0.2%", "70.77", "97.42", -27, "Romania", [45.94, 24.97]], ["Morocco", "0.2%", "69.86", "33.56", 108, "Morocco", [31.79, -7.09]], ["Turkmenistan", "0.2%", "65.99", "39.34", 68, "Turkmenistan", [38.97, 59.56]], ["North Korea", "0.2%", "64.27", "73.81", -13, "North Korea", [40.34, 127.51]], ["Libya", "0.2%", "61.26", "49.28", 24, "Libya", [26.34, 17.23]], ["Israel and Palestine", "0.2%", "61.25", "59.3", 3, "Israel", [31.05, 34.85]], ["Austria", "0.2%", "58.82", "66.69", -12, "Austria", [47.52, 14.55]], ["Peru", "0.1%", "58.4", "28.98", 102, "Peru", [-9.19, -75.02]], ["Singapore", "0.1%", "57.07", "45.52", 25, "Singapore", [1.35, 103.82]], ["Serbia and Montenegro", "0.1%", "56.12", "50.64", 11, "Serbia", [44.02, 21.01]], ["Belarus", "0.1%", "54.18", "56.26", -4, "Belarus", [53.71, 27.95]], ["Greece", "0.1%", "51.67", "96.05", -46, "Greece", [39.07, 21.82]], ["Ecuador", "0.1%", "45.33", "22.04", 106, "Ecuador", [-1.83, -78.18]], ["Norway", "0.1%", "44.07", "41.77", 5, "Norway", [60.47, 8.47]], ["Hungary", "0.1%", "43.83", "59.48", -26, "Hungary", [47.16, 19.5]], ["Azerbaijan", "0.1%", "42.77", "28.79", 49, "Azerbaijan", [40.14, 47.58]], ["Bulgaria", "0.1%", "39.79", "48.17", -17, "Bulgaria", [42.73, 25.49]], ["Bahrain", "0.1%", "37.43", "17.77", 111, "Bahrain", [26.07, 50.56]], ["Portugal", "0.09%", "36.17", "64.41", -44, "Portugal", [39.4, -8.22]], ["New Zealand", "0.09%", "35.8", "32.89", 9, "New Zealand", [-40.9, 174.89]], ["Sweden", "0.09%", "35.39", "57.98", -39, "Sweden", [60.13, 18.64]], ["Slovakia", "0.09%", "34.86", "41.68", -16, "Slovakia", [48.67, 19.7]], ["Hong Kong", "0.09%", "34.67", "41.9", -17, "Hong Kong", [22.32, 114.17]], ["Switzerland and Liechtenstein", "0.09%", "34.22", "44.8", -24, "Switzerland", [46.82, 8.23]], ["Myanmar", "0.09%", "33.37", "10.04", 232, "Myanmar (Burma)", [21.91, 95.96]], ["Ireland", "0.08%", "32.48", "43.82", -26, "Ireland", [53.41, -8.24]], ["Finland", "0.08%", "32.27", "57.53", -44, "Finland", [61.92, 25.75]], ["Tunisia", "0.08%", "31.5", "21.13", 49, "Tunisia", [33.89, 9.54]], ["Dominican Republic", "0.08%", "31.35", "19.01", 65, "Dominican Republic", [18.74, -70.16]], ["Angola", "0.07%", "28.23", "16.51", 71, "Angola", [-11.2, 17.87]], ["Mongolia", "0.07%", "28.12", "9.04", 211, "Mongolia", [46.86, 103.85]], ["Trinidad and Tobago", "0.07%", "27.22", "19.13", 42, "Trinidad and Tobago", [10.69, -61.22]], ["Denmark", "0.07%", "26.77", "53.16", -50, "Denmark", [56.26, 9.5]], ["Laos", "0.07%", "26.02", "0.93", 2685, "Laos", [19.86, 102.5]], ["Syria", "0.07%", "25.59", "45.9", -44, "Syria", [34.8, 38.997]], ["Ghana", "0.06%", "24.16", "6.09", 297, "Ghana", [7.95, -1.02]], ["Bolivia", "0.06%", "23.81", "8.2", 190, "Bolivia", [-16.29, -63.59]], ["Jordan", "0.06%", "23.58", "16.47", 43, "Jordan", [30.59, 36.24]], ["Cuba", "0.06%", "22.07", "28.99", -24, "Cuba", [21.52, -77.78]], ["Bosnia and Herzegovina", "0.06%", "22", "14.28", 54, "Bosnia and Herzegovina", [43.92, 17.68]], ["Kenya", "0.06%", "21.73", "8.91", 144, "Kenya", [-0.02, 37.91]], ["Guatemala", "0.05%", "21.35", "9.69", 120, "Guatemala", [15.78, -90.23]], ["Sudan and South Sudan", "0.05%", "21.27", "6", 255, "Sudan", [12.86, 30.22]], ["Sri Lanka", "0.05%", "20.52", "11.46", 79, "Sri Lanka", [7.87, 80.77]], ["Tanzania", "0.05%", "19.37", "3.11", 523, "Tanzania", [-6.37, 34.89]], ["Cambodia", "0.05%", "17.97", "2", 798, "Cambodia", [12.57, 104.99]], ["Nepal", "0.05%", "17.93", "3.42", 424, "Nepal", [28.39, 84.12]], ["Croatia", "0.04%", "17.46", "19.37", -10, "Croatia", [45.1, 15.2]], ["Lebanon", "0.04%", "17.33", "15.31", 13, "Lebanon", [33.85, 35.86]], ["Ethiopia", "0.04%", "16.71", "3.88", 331, "Ethiopia", [9.15, 40.49]], ["Panama", "0.04%", "14.72", "5.19", 184, "Panama", [8.54, -80.78]], ["Ivory Coast", "0.04%", "14.41", "6.97", 107, "Côte d'Ivoire", [7.54, -5.55]], ["Puerto Rico", "0.04%", "13.82", "25.18", -45, "Puerto Rico", [18.22, -66.59]], ["Lithuania", "0.03%", "13.11", "11.66", 13, "Lithuania", [55.17, 23.88]], ["Georgia", "0.03%", "12.86", "5.21", 147, "Georgia", [42.32, 43.36]], ["Slovenia", "0.03%", "12.08", "15.04", -20, "Slovenia", [46.15, 14.99]], ["Senegal", "0.03%", "12.02", "3.99", 201, "Senegal", [14.5, -14.45]], ["Zimbabwe", "0.03%", "11.74", "14.6", -20, "Zimbabwe", [-19.02, 29.15]], ["Estonia", "0.03%", "11.44", "17.38", -34, "Estonia", [58.6, 25.01]], ["Honduras", "0.03%", "10.95", "5", 119, "Honduras", [15.2, -86.24]], ["Yemen", "0.03%", "10.9", "15.74", -31, "Yemen", [15.55, 48.52]], ["Cameroon", "0.03%", "10.76", "5.73", 88, "Cameroon", [7.37, 12.35]], ["Kyrgyzstan", "0.03%", "10.46", "4.8", 118, "Kyrgyzstan", [41.2, 74.77]], ["Moldova", "0.03%", "9.93", "6.89", 44, "Moldova", [47.41, 28.37]], ["Mozambique", "0.02%", "9.74", "1.57", 520, "Mozambique", [-18.67, 35.53]], ["Brunei", "0.02%", "9.72", "6.07", 60, "Brunei", [4.54, 114.73]], ["Tajikistan", "0.02%", "9.31", "2.78", 234, "Tajikistan", [38.86, 71.28]], ["Uruguay", "0.02%", "8.82", "5.57", 58, "Uruguay", [-32.52, -55.77]], ["North Macedonia", "0.02%", "8.76", "9.04", -3, "North Macedonia", [41.61, 21.75]], ["Afghanistan", "0.02%", "8.71", "1.02", 757, "Afghanistan", [33.9, 67.7]], ["Costa Rica", "0.02%", "8.57", "5.12", 67, "Costa Rica", [9.75, -83.75]], ["El Salvador", "0.02%", "8.38", "5.8", 45, "El Salvador", [13.79, -88.9]], ["Paraguay", "0.02%", "8.25", "3.64", 127, "Paraguay", [-23.44, -58.44]], ["Zambia", "0.02%", "8.06", "1.95", 313, "Zambia", [-13.13, 27.85]], ["Armenia", "0.02%", "7.73", "3.57", 116, "Armenia", [40.07, 45.04]], ["Botswana", "0.02%", "7.42", "4.1", 81, "Botswana", [-22.33, 24.68]], ["Congo", "0.02%", "7.25", "4.51", 61, "Republic of the Congo", [-0.23, 15.83]], ["Uganda", "0.02%", "7.22", "1.41", 411, "Uganda", [1.37, 32.29]], ["Cyprus", "0.02%", "7.18", "7.13", 1, "Cyprus", [35.13, 33.43]], ["Luxembourg", "0.02%", "7.01", "8.8", -20, "Luxembourg", [49.82, 6.13]], ["Jamaica", "0.02%", "6.86", "10.21", -33, "Jamaica", [18.11, -77.3]], ["Mali", "0.02%", "6.66", "0.8", 730, "Mali", [17.57, -4.0]], ["Latvia", "0.02%", "6.55", "7.23", -9, "Latvia", [56.88, 24.6]], ["Malawi", "0.02%", "6.45", "3.1", 108, "Malawi", [-13.25, 34.3]], ["Benin", "0.02%", "6.44", "1.54", 317, "Benin", [9.31, 2.32]], ["New Caledonia", "0.02%", "6.21", "2.18", 185, "New Caledonia", [-20.9, 165.62]], ["Burkina Faso", "0.02%", "6", "0.88", 583, "Burkina Faso", [12.24, -1.56]], ["Papua New Guinea", "0.02%", "5.95", "2.95", 102, "Papua New Guinea", [-6.31, 143.96]], ["Nicaragua", "0.01%", "5.73", "3.77", 52, "Nicaragua", [12.87, -85.21]], ["Gabon", "0.01%", "4.93", "6.6", -25, "Gabon", [-0.8, 11.61]], ["Mauritania", "0.01%", "4.65", "1.07", 336, "Mauritania", [21.01, -10.94]], ["Albania", "0.01%", "4.59", "3.23", 42, "Albania", [41.15, 20.17]], ["Namibia", "0.01%", "4.36", "1.95", 124, "Namibia", [-22.96, 18.49]], ["Mauritius", "0.01%", "4.21", "2.44", 73, "Mauritius", [-20.35, 57.55]], ["Madagascar", "0.01%", "4.1", "1.69", 142, "Madagascar", [-18.77, 46.87]], ["Democratic Republic of the Congo", "0.01%", "3.8", "1.88", 102, "Democratic Republic of the Congo", [-4.04, 21.76]], ["Equatorial Guinea", "0.01%", "3.78", "2.74", 38, "Equatorial Guinea", [1.65, 10.27]], ["Guinea", "0.01%", "3.72", "1.47", 153, "Guinea", [9.95, -9.7]], ["Haiti", "0.009%", "3.54", "1.69", 109, "Haiti", [18.97, -72.29]], ["Guyana", "0.008%", "3.3", "1.66", 99, "Guyana", [4.86, -58.93]], ["Iceland", "0.008%", "3.09", "2.85", 8, "Iceland", [64.96, -19.02]], ["Macao", "0.008%", "3.01", "1.48", 104, "Macao", [22.2, 113.54]], ["Maldives", "0.007%", "2.88", "0.64", 352, "Maldives", [3.2, 73.22]], ["Niger", "0.007%", "2.82", "0.7", 302, "Niger", [17.61, 8.08]], ["Suriname", "0.007%", "2.63", "1.48", 78, "Suriname", [3.92, -56.03]], ["Chad", "0.007%", "2.57", "0.24", 962, "Chad", [15.45, 18.73]], ["Réunion", "0.007%", "2.57", "2.05", 25, "Réunion", [-21.12, 55.54]], ["Togo", "0.006%", "2.49", "1.25", 99, "Togo", [8.62, 0.82]], ["Curaçao", "0.006%", "2.43", "5.67", -57, "Curaçao", [12.17, -68.98]], ["Fiji", "0.006%", "2.21", "1.46", 51, "Fiji", [-17.71, 178.07]], ["Bhutan", "0.005%", "1.99", "0.41", 388, "Bhutan", [27.51, 90.43]], ["Malta", "0.004%", "1.68", "2.13", -21, "Malta", [35.94, 14.38]], ["Bahamas", "0.004%", "1.68", "1", 69, "The Bahamas", [25.03, -77.4]], ["Rwanda", "0.004%", "1.65", "0.68", 142, "Rwanda", [-1.94, 29.87]], ["Liberia", "0.004%", "1.64", "0.4", 307, "Liberia", [6.43, -9.43]], ["Palau", "0.004%", "1.44", "2.12", -32, "Palau", [7.51, 134.58]], ["Eswatini", "0.004%", "1.39", "1.1", 27, "Eswatini", [-26.52, 31.47]], ["French Polynesia", "0.003%", "1.26", "0.72", 75, "French Polynesia", [-17.68, -149.41]], ["Seychelles", "0.003%", "1.24", "0.76", 63, "Seychelles", [-4.68, 55.49]], ["Guadeloupe", "0.003%", "1.17", "0.62", 89, "Guadeloupe", [16.27, -61.55]], ["Martinique", "0.003%", "1.09", "0.67", 62, "Martinique", [14.64, -61.02]], ["Sierra Leone", "0.003%", "1.07", "0.43", 147, "Sierra Leone", [8.46, -11.78]], ["Cape Verde", "0.003%", "1.01", "0.28", 256, "Cabo Verde", [16.0, -24.01]], ["Lesotho", "0.002%", "0.88", "0.35", 148, "Lesotho", [-29.61, 28.23]], ["Somalia", "0.002%", "0.87", "0.63", 38, "Somalia", [5.15, 46.2]], ["Burundi", "0.002%", "0.84", "0.29", 186, "Burundi", [-3.37, 29.92]], ["Barbados", "0.002%", "0.8", "0.59", 36, "Barbados", [13.19, -59.54]], ["Djibouti", "0.002%", "0.75", "0.74", 1, "Djibouti", [11.83, 42.59]], ["East Timor", "0.002%", "0.7", "0.23", 208, "Timor-Leste", [-8.87, 125.73]], ["Gibraltar", "0.002%", "0.69", "0.34", 102, "Gibraltar", [36.14, -5.35]], ["Eritrea", "0.002%", "0.67", "0.67", 0, "Eritrea", [15.18, 39.78]], ["Gambia", "0.002%", "0.61", "0.27", 126, "The Gambia", [13.44, -15.31]], ["Greenland", "0.001%", "0.58", "0", 43369, "Greenland", [71.71, -42.6]], ["Aruba", "0.001%", "0.53", "0.27", 97, "Aruba", [12.52, -69.97]], ["Samoa", "0.001%", "0.47", "0.19", 149, "Samoa", [-13.76, -172.1]], ["Solomon Islands", "0.001%", "0.42", "0.24", 78, "Solomon Islands", [-9.65, 160.16]], ["French Guiana", "0.001%", "0.38", "0.17", 119, "French Guiana", [3.93, -53.13]], ["Central African Republic", "0.001%", "0.37", "0.26", 43, "Central African Republic", [6.61, 20.94]], ["Cayman Islands", "0.001%", "0.36", "0.13", 172, "Cayman Islands", [19.31, -81.25]], ["Bermuda", "0.001%", "0.35", "0.15", 133, "Bermuda", [32.32, -64.76]], ["Guinea-Bissau", "0.001%", "0.35", "0.2", 71, "Guinea-Bissau", [11.8, -15.18]], ["Comoros", "0.001%", "0.32", "0.09", 250, "Comoros", [-11.88, 43.87]], ["Antigua and Barbuda", "0.001%", "0.32", "0.14", 139, "Antigua and Barbuda", [17.06, -61.8]], ["Saint Lucia", "0.001%", "0.3", "0.1", 207, "St Lucia", [13.91, -60.98]], ["Vanuatu", "0.001%", "0.29", "0.08", 238, "Vanuatu", [-15.38, 166.96]], ["Belize", "0.001%", "0.28", "0.14", 101, "Belize", [17.19, -88.5]], ["Western Sahara", "0.001%", "0.26", "0.26", 4, "Western Sahara", [24.22, -12.89]], ["Tonga", "0.001%", "0.22", "0.1", 118, "Tonga", [-21.18, -175.2]], ["São Tomé and Príncipe", "0.001%", "0.21", "0.06", 288, "São Tomé and Príncipe", [0.19, 6.61]], ["Grenada", "0%", "0.14", "0.06", 149, "Grenada", [12.12, -61.68]], ["Cook Islands", "0%", "0.14", "0.06", 133, "Cook Islands", [-21.24, -159.78]], ["Saint Kitts and Nevis", "0%", "0.12", "0.05", 140, "Saint Kitts, St Kitts & Nevis", [17.36, -62.78]], ["Turks and Caicos Islands", "0%", "0.1", "0.02", 481, "TKCA 1ZZ, Turks and Caicos Islands", [21.69, -71.8]], ["Saint Vincent and the Grenadines", "0%", "0.1", "0.04", 131, "Saint Vincent, St Vincent and the Grenadines", [13.25, -61.2]], ["Kiribati", "0%", "0.1", "0.03", 197, "Kiribati", [1.87, -157.36]], ["Dominica", "0%", "0.08", "0.06", 44, "Dominica", [15.41, -61.37]], ["British Virgin Islands", "0%", "0.08", "0.03", 172, "British Virgin Islands", [18.42, -64.64]], ["Saint Pierre and Miquelon", "0%", "0.04", "0.02", 129, "Saint-Pierre 97500, St Pierre and Miquelon", [46.78, -56.18]], ["Falkland Islands", "0%", "0.02", "0.01", 170, "FIQQ 1ZZ, Falkland Islands (Islas Malvinas)", [-51.8, -59.52]], ["Anguilla", "0%", "0.02", "0.02", 48, "Anguilla", [18.22, -63.07]], ["Saint Helena, Ascension and Tristan da Cunha", "0%", "0.02", "0.01", 58, "Geography of Saint Helena, STHL 1ZZ, St Helena, Ascension and Tristan da Cunha", [-15.96, -5.71]], ["Faroe Islands", "0%", "0", "0", 20, "Faroe Islands", [61.89, -6.91]]];
// [US name, MtCO2e, China name, MtCO2e, Europe name, MtCO2e]
const PROD = [["ExxonMobil", 562, "CHN Energy", 1533, "Gazprom", 1136], ["Chevron", 487, "Jinneng Group", 1228, "Rosneft", 805], ["Peabody Energy", 278, "CNPC", 733, "Shell", 418], ["Occidental Petroleum", 182, "Shandong Energy", 728, "TotalEnergies", 359], ["EOG Resources", 147, "China Nat’l Coal Group", 719, "BP", 347], ["Arch Resources", 146, "Shaanxi Coal & Chemical", 681, "Equinor", 297], ["EQT Corporation", 146, "Shanxi Coking Coal", 548, "Eni", 257], ["American Consol. Nat’l Resources", 123, "China Huaneng", 292, "Novatek", 248], ["Southwestern Energy", 120, "Luan Chemical", 292, "Petoro", 147], ["Pioneer Natural Resources", 106, "CNOOC", 274, "Repsol", 93]];
// [US name, MtCO2e, Europe name, MtCO2e, South Korea name, MtCO2e]
const DIRECT = [["Vistra", 95.6, "PGE", 56.3, "POSCO", 967.9], ["Southern Co", 83.8, "RWE", 51.3, "Korea South-East Power", 646.9], ["Duke Energy", 79.3, "LEAG", 44.1, "Korea East-West Power", 485.9], ["Berkshire Hathaway", 65.7, "Enel", 40, "Korea Southern Power", 460.8], ["AEP", 56.7, "CEZ", 38, "Korea Midland Power", 460.4], ["Energy Capital Partners", 44.8, "Uniper", 37, "Korea Western Power", 453.2], ["U.S. Government", 44.7, "ENEA", 35, "Hyundai Steel", 293.2], ["ExxonMobil", 42.1, "Tauron", 34, "Samsung Electronics", 123.7], ["Xcel Energy", 41.1, "ArcelorMittal", 33, "Ssangyong C&E", 112.8], ["Entergy", 39.9, "–", "–", "POSCO International", 111.9]];
// [country, 2024, 2023, 2022, 2021, 2020, 2019, 2018, population, map address, [lat,lng]]  (null = no data)
const AQ = [["Chad", 91.8, null, 89.7, 75.9, null, null, null, "17,179,740", "Chad", [15.45, 18.73]], ["Bangladesh", 78, 79.9, 65.8, 76.9, 77.1, 83.3, 97.1, "169,356,251", "Bangladesh", [23.68, 90.36]], ["Pakistan", 73.7, 73.7, 70.9, 66.8, 59, 65.8, 74.3, "231,402,117", "Pakistan", [30.38, 69.35]], ["Democratic Republic of the Congo", 58.2, 40.8, 15.5, null, null, 32.1, null, "95,894,118", "Democratic Republic of the Congo", [-4.04, 21.76]], ["India", 50.6, 54.4, 53.3, 58.1, 51.9, 58.1, 72.5, "1,407,563,842", "India", [20.59, 78.96]], ["Tajikistan", 46.3, 49, 46, 59.4, 30.9, null, null, "9,750,064", "Tajikistan", [38.86, 71.28]], ["Nepal", 42.8, 42.4, 40.1, 46, 39.2, 44.5, 54.1, "30,034,989", "Nepal", [28.39, 84.12]], ["Uganda", 41, 27.3, 39.6, 27.6, 26.1, 29.1, 40.8, "45,853,778", "Uganda", [1.37, 32.29]], ["Rwanda", 40.8, 36.8, 44, null, null, null, null, "13,461,888", "Rwanda", [-1.94, 29.87]], ["Burundi", 40.3, null, null, null, null, null, null, "14,047,800", "Burundi", [-3.37, 29.92]], ["Nigeria", 40.1, 23.9, 36.9, 34, null, 21.4, 44.8, "213,401,323", "Nigeria", [9.08, 8.68]], ["Egypt", 39.8, 42.4, 46.5, 29.1, null, 18, null, "109,262,178", "Egypt", [26.82, 30.8]], ["Iraq", 38.4, 43.8, 80.1, 49.7, null, 39.6, null, "43,533,592", "Iraq", [33.22, 43.68]], ["Ghana", 35.8, 33.2, 30.2, 25.9, 26.9, 30.3, null, "32,833,031", "Ghana", [7.95, -1.02]], ["Indonesia", 35.5, 37.1, 30.4, 34.3, 40.7, 51.7, 42, "273,753,191", "Indonesia", [-0.79, 113.92]], ["Gambia", 35.2, 28.5, null, null, null, null, null, "2,639,916", "The Gambia", [13.44, -15.31]], ["United Arab Emirates", 33.7, 43, 45.9, 36, 29.2, 38.9, 49.9, "9,365,145", "United Arab Emirates", [23.42, 53.85]], ["Bahrain", 31.8, 39.2, 66.6, 49.8, 39.7, 46.8, 59.8, "1,463,265", "Bahrain", [26.07, 50.56]], ["Uzbekistan", 31.4, 28.6, 33.5, 42.8, 29.9, 41.2, 34.3, "34,915,100", "Uzbekistan", [41.38, 64.59]], ["Qatar", 31.3, 37.6, 42.5, 38.2, 44.3, null, null, "2,688,235", "Qatar", [25.35, 51.18]], ["China", 31, 32.5, 30.6, 32.6, 34.7, 39.1, 41.2, "1,412,360,000", "China", [35.86, 104.2]], ["Kuwait", 30.2, 39.9, 55.8, 29.7, 34, 38.3, 56, "4,250,114", "Kuwait", [29.31, 47.48]], ["Vietnam", 28.7, 29.6, 27.2, 24.7, 28, 34.1, 32.9, "97,468,029", "Vietnam", [14.06, 108.28]], ["Cameroon", 27.6, 24, null, null, null, null, null, "27,198,628", "Cameroon", [7.37, 12.35]], ["Laos", 27.5, 29.6, 27.6, 21.5, 22.4, 23.1, null, "7,275,556", "Laos", [19.86, 102.5]], ["Turkmenistan", 26.5, null, 21.6, 20.4, 17, null, null, "6,341,855", "Turkmenistan", [38.97, 59.56]], ["Togo", 26, 16.3, null, null, null, null, null, "8,644,829", "Togo", [8.62, 0.82]], ["Mongolia", 25.6, 22.5, 29.5, 33.1, 46.6, 62, 58.5, "3,347,782", "Mongolia", [46.86, 103.85]], ["Bosnia Herzegovina", 25.3, 27.5, 33.6, 27.8, 40.6, 34.6, 40, "3,270,943", "Bosnia and Herzegovina", [43.92, 17.68]], ["Myanmar", 25.2, 28.2, 24.3, 25.9, 29.4, 31, null, "53,798,084", "Myanmar (Burma)", [21.91, 95.96]], ["Saudi Arabia", 25.1, 26.5, 41.5, 32.7, 23.3, 22.1, null, "35,950,396", "Saudi Arabia", [23.89, 45.08]], ["Zimbabwe", 24.8, 33.3, null, null, null, null, null, "15,993,524", "Zimbabwe", [-19.02, 29.15]], ["Ivory Coast", 24.6, 16.6, 22.5, null, 21.9, null, null, "29,389,150", "Côte d'Ivoire", [7.54, -5.55]], ["Armenia", 24.4, 26.4, 31.4, 33.9, 24.9, 25.5, null, "2,790,974", "Armenia", [40.07, 45.04]], ["North Macedonia", 23.3, 25.2, 25.6, 25.4, 30.6, 32.4, 35.5, "2,065,092", "North Macedonia", [41.61, 21.75]], ["Senegal", 22.3, 28.2, 20.4, null, 11.2, null, null, "16,876,720", "Senegal", [14.5, -14.45]], ["Libya", 22.3, 30.4, null, null, null, null, null, "6,735,277", "Libya", [26.34, 17.23]], ["Ethiopia", 22.2, 27, 31.3, 23.9, 14.7, 20.1, 27.1, "120,283,026", "Ethiopia", [9.15, 40.49]], ["Zambia", 22, 24.1, 24.6, null, null, null, null, "19,473,125", "Zambia", [-13.13, 27.85]], ["Cambodia", 21.9, 22.8, 8.3, 19.8, 21.1, 21.1, 20.1, "16,589,023", "Cambodia", [12.57, 104.99]], ["Palestine", 21.1, 18.6, null, null, null, null, null, "3,000,021", "Palestine", [31.95, 35.23]], ["Kyrgyzstan", 21.1, 33.1, 31.1, 50.8, 43.5, 33.2, null, "6,691,800", "Kyrgyzstan", [41.2, 74.77]], ["Madagascar", 20.5, 20.6, 23.7, 21, 20, null, null, "28,915,653", "Madagascar", [-18.77, 46.87]], ["Serbia", 20.2, 20.5, 24.7, 25.5, 24.3, 23.3, 23.9, "6,834,326", "Serbia", [44.02, 21.01]], ["Thailand", 19.8, 23.3, 18.1, 20.2, 21.4, 24.3, 26.4, "71,601,103", "Thailand", [15.87, 100.99]], ["Guatemala", 18.8, 18.7, 18.6, 19.5, 19.2, 20.2, null, "17,109,746", "Guatemala", [15.78, -90.23]], ["South Africa", 18.8, 19.9, 23.4, 22.7, 18, 21.6, null, "59,392,255", "South Africa", [-30.56, 22.94]], ["Azerbaijan", 18.3, 18.8, 18.9, 17.6, null, null, null, "10,137,750", "Azerbaijan", [40.14, 47.58]], ["Malaysia", 18.3, 22.5, 17.7, 19.4, 15.6, 19.4, null, "33,573,874", "Malaysia", [4.21, 101.98]], ["Montenegro", 18, 21.3, 15.7, 35.2, 26.1, null, null, "619,211", "Montenegro", [42.71, 19.37]], ["Sri Lanka", 17.9, 19.3, 20.7, 17.4, 22.4, 25.2, 32, "22,156,000", "Sri Lanka", [7.87, 80.77]], ["Macao", 17.7, 16.2, 15.4, 17, 17.8, 23.5, 21.2, "686,607", "Macao", [22.2, 113.54]], ["Guyana", 17.5, 17.1, 12.6, null, null, null, null, "804,567", "Guyana", [4.86, -58.93]], ["Taiwan", 17.5, 20.2, 13.4, 16.2, 15, 17.2, 18.5, "23,816,775", "Taiwan", [23.7, 120.96]], ["Mexico", 17.4, 20.1, 19.5, 19.3, 18.9, 20, 20.3, "126,705,138", "Mexico", [23.63, -102.55]], ["El Salvador", 17.3, 19.5, 14.2, null, null, null, null, "6,314,167", "El Salvador", [13.79, -88.9]], ["Israel", 17.2, 17.8, 18.8, 18.7, 16.9, 20.8, 18.6, "9,364,000", "Israel", [31.05, 34.85]], ["Peru", 17.1, 18.8, 23.5, 29.6, 17.9, 23.3, 28, "33,715,471", "Peru", [-9.19, -75.02]], ["South Korea", 17, 19.2, 18.3, 19.1, 19.5, 24.8, 24, "51,744,876", "South Korea", [35.91, 127.77]], ["Djibouti", 16.8, null, null, null, null, null, null, "1,168,720", "Djibouti", [11.83, 42.59]], ["Mozambique", 16.7, null, null, null, null, null, null, "34,631,800", "Mozambique", [-18.67, 35.53]], ["Chile", 16.6, 18.8, 22.2, 21.7, 19.3, 22.6, 24.9, "19,493,184", "Chile", [-35.68, -71.54]], ["Hong Kong", 16.3, 15.6, 14.5, 15.9, 15.4, 20.3, 20.2, "7,413,100", "Hong Kong", [22.32, 114.17]], ["Paraguay", 15.9, null, null, null, null, null, null, "6,929,150", "Paraguay", [-23.44, -58.44]], ["Algeria", 15.4, 13.8, 17.8, 20, 20.2, 21.2, null, "44,177,969", "Algeria", [28.0, 1.66]], ["Turkey", 15.3, 20.3, 21.1, 20, 18.7, 20.6, 21.9, "84,775,404", "Türkiye", [38.96, 35.24]], ["Romania", 15.3, 15.7, 17.2, 15.3, 15.8, 18.3, 18.6, "19,119,880", "Romania", [45.94, 24.97]], ["Gabon", 15.2, 16.9, 25, null, null, null, null, "2,341,179", "Gabon", [-0.8, 11.61]], ["Slovenia", 15.2, 14.9, 15.1, 13.3, null, null, null, "2,108,079", "Slovenia", [46.15, 14.99]], ["Honduras", 15.2, 15.1, 10.2, 11.8, null, null, null, "10,278,345", "Honduras", [15.2, -86.24]], ["Kazakhstan", 15.1, 22.2, 23, 31.1, 21.9, 23.6, 29.8, "19,000,988", "Kazakhstan", [48.02, 66.92]], ["Georgia", 15.1, 16.4, 17, 21, 20.4, 20.1, null, "3,708,610", "Georgia", [42.32, 43.36]], ["Brazil", 14.9, 12.6, 12.2, 13.6, 14.2, 15.8, 16.3, "214,326,223", "Brazil", [-14.24, -51.93]], ["Nicaragua", 14.8, 15.7, 8.9, null, null, null, null, "6,850,540", "Nicaragua", [12.87, -85.21]], ["Poland", 14.8, 14.1, 16.3, 19.1, 16.9, 18.7, 22.4, "37,747,124", "Poland", [51.92, 19.15]], ["Philippines", 14.8, 13.5, 14.9, 15.6, 12.8, 17.6, 14.6, "113,880,328", "Philippines", [12.88, 121.77]], ["Moldova", 14.7, 15.7, 22.6, null, null, null, null, "2,615,199", "Moldova", [47.41, 28.37]], ["Albania", 14.5, 16.7, 14.5, 12.5, 16, null, null, "2,811,666", "Albania", [41.15, 20.17]], ["Kenya", 14.3, 10.6, 11.5, 14.3, 14.2, null, null, "53,005,614", "Kenya", [-0.02, 37.91]], ["Italy", 14.2, 15, 18.9, 15.2, 18.5, 17.1, 14.9, "59,109,668", "Italy", [41.87, 12.57]], ["Croatia", 13.8, 13.8, 23.5, 25.4, 21.2, 19.1, 22.2, "3,899,000", "Croatia", [45.1, 15.2]], ["Colombia", 13.8, 14.1, 15.7, 14.1, 15.6, 14.6, 13.9, "51,516,562", "Colombia", [4.57, -74.3]], ["Slovakia", 13.6, 13.1, 14.5, 16, 15.3, 16.1, 18.5, "5,447,247", "Slovakia", [48.67, 19.7]], ["Kosovo", 12.9, 12.1, 14.7, 14.7, 20, 23.5, 30.4, "1,786,038", "Kosovo", [42.6, 20.9]], ["Hungary", 12.9, 12, 12.6, 15.5, 14.3, 14.6, 16.8, "9,709,891", "Hungary", [47.16, 19.5]], ["Cyprus", 12.8, 14.3, 15.6, 14.8, 15.8, 19.7, 17.6, "1,244,188", "Cyprus", [35.13, 33.43]], ["Czech Republic", 12.7, 11.5, 13.4, 13.9, 12.3, 14.4, 20.2, "10,505,772", "Czechia", [49.82, 15.47]], ["Suriname", 12.5, 10.6, 7, null, null, null, null, "612,985", "Suriname", [3.92, -56.03]], ["Bulgaria", 12.4, 13.2, 18.3, 16.3, 27.5, 25.5, 25.8, "6,877,743", "Bulgaria", [42.73, 25.49]], ["Maldives", 12.2, 15.3, 10.9, null, null, null, null, "521,457", "Maldives", [3.2, 73.22]], ["Malta", 11.7, 12, 11.7, 13.5, 11.8, 9.4, 11, "518,536", "Malta", [35.94, 14.38]], ["Greece", 11.5, 17.4, 19, 19, 18.4, 22.5, null, "10,641,221", "Greece", [39.07, 21.82]], ["Uruguay", 11.5, 11.7, 11.3, 14.2, null, null, null, "3,426,260", "Uruguay", [-32.52, -55.77]], ["Singapore", 11.4, 13.4, 13.3, 13.8, 11.8, 19, 14.8, "5,453,566", "Singapore", [1.35, 103.82]], ["Austria", 10.2, 9.6, 10.6, 11.4, 10.9, 12.2, 15, "8,955,797", "Austria", [47.52, 14.55]], ["Lithuania", 10.1, 10.4, 13.2, 13.2, 11.7, 14.5, 17.5, "2,800,839", "Lithuania", [55.17, 23.88]], ["Panama", 10.1, 9.6, 9, null, null, null, null, "4,351,267", "Panama", [8.54, -80.78]], ["Bolivia", 10, 12.6, 7.3, null, null, null, null, "12,079,472", "Bolivia", [-16.29, -63.59]], ["Russia", 9.8, 10, 11.2, 12.3, 9.3, 9.9, 11.4, "143,449,286", "Russia", [61.52, 105.32]], ["Ecuador", 9.7, 7.4, null, 8.4, 7.6, 8.6, null, "17,797,737", "Ecuador", [-1.83, -78.18]], ["Latvia", 9.2, 8, 10.1, null, 11.3, 13.3, null, "1,884,490", "Latvia", [56.88, 24.6]], ["Ukraine", 9.2, 8.6, 9.7, 18.5, 19.2, 16.6, 14, "43,792,855", "Ukraine", [48.38, 31.17]], ["Germany", 9, 9, 11, 10.6, 10.1, 11, 13, "83,196,078", "Germany", [51.17, 10.45]], ["Netherlands", 8.9, 8.7, 11, 11.3, 9.7, 10.9, 11.7, "17,533,044", "Netherlands", [52.13, 5.29]], ["Belgium", 8.9, 9.4, 10.8, 11.5, 8.9, 12.5, 13.5, "11,592,952", "Belgium", [50.5, 4.47]], ["Spain", 8.7, 9.9, 10.9, 10.7, 10.4, 9.7, 10.3, "47,415,750", "Spain", [40.46, -3.75]], ["Argentina", 8.7, 9.2, 7.7, 8.2, 14.2, 14.6, null, "45,808,747", "Argentina", [-38.4, -63.6]], ["Japan", 8.6, 9.6, 9.1, 9.1, 9.8, 11.4, 12, "125,681,593", "Japan", [36.2, 138.25]], ["Cayman Islands", 8.5, null, null, null, null, null, null, "74,457", "Cayman Islands", [19.31, -81.25]], ["France", 8.1, 9.5, 11.5, 11.4, 11.1, 12.3, 13.2, "67,749,632", "France", [46.23, 2.21]], ["Luxembourg", 7.5, 8.9, 7.4, 9, 9, 9.6, 11.2, "640,064", "Luxembourg", [49.82, 6.13]], ["Anguilla", 7.4, 7.4, null, null, null, null, null, "15,094", "Anguilla", [18.22, -63.07]], ["United Kingdom", 7.4, 7.7, 8.9, 8.8, 8.3, 10.5, 10.8, "67,326,569", "United Kingdom", [55.38, -3.44]], ["Switzerland", 7.3, 8.9, 10, 10.8, 9, 10.9, 11.6, "8,703,405", "Switzerland", [46.82, 8.23]], ["Denmark", 7.2, 7.7, 8.6, 9.6, 9.4, 9.6, null, "5,856,733", "Denmark", [56.26, 9.5]], ["United States", 7.1, 9.1, 8.9, 10.3, 9.6, 9, 9.1, "331,893,745", "United States", [37.09, -95.71]], ["Costa Rica", 7, 6.1, 7.9, 7.8, 8.2, 10.4, null, "5,153,957", "Costa Rica", [9.75, -83.75]], ["Portugal", 6.8, 6.8, 8.1, 7.1, 9.1, 9.3, 9.4, "10,325,147", "Portugal", [39.4, -8.22]], ["Canada", 6.7, 10.3, 7.4, 8.5, 7.3, 7.7, 7.9, "38,246,108", "Canada", [56.13, -106.35]], ["Norway", 6.6, 6.3, 7, 7.5, 5.7, 6.9, 7.6, "5,408,320", "Norway", [60.47, 8.47]], ["Ireland", 6.5, 6.3, 7.5, 8, 8.6, 10.6, 9.5, "5,033,165", "Ireland", [53.41, -8.24]], ["Liechtenstein", 6.5, 7.2, 8.3, 7.2, null, null, null, "39,039", "Liechtenstein", [47.17, 9.56]], ["Trinidad and Tobago", 6.1, 5.8, 5.1, 7.1, null, null, null, "1,525,663", "Trinidad and Tobago", [10.69, -61.22]], ["Andorra", 6, 7.9, 5.4, 7.3, 7.4, null, null, "79,034", "Andorra", [42.55, 1.6]], ["Sweden", 5.3, 5.1, 6.2, 6.6, 5, 6.6, 7.4, "10,415,811", "Sweden", [60.13, 18.64]], ["Finland", 5.2, 4.9, 5, 5.5, 5, 5.6, 6.6, "5,541,017", "Finland", [61.92, 25.75]], ["Estonia", 4.6, 4.7, 4.9, 5.9, 5.9, 6.2, 7.2, "1,330,932", "Estonia", [58.6, 25.01]], ["Australia", 4.5, 4.5, 4.2, 5.7, 7.6, 8, 6.8, "25,688,079", "Australia", [-25.27, 133.78]], ["New Zealand", 4.4, 4.3, 4.8, 6.8, 7, 7.5, 7.7, "5,122,600", "New Zealand", [-40.9, 174.89]], ["Iceland", 4, 4, 3.4, 6.1, 7.2, 5.5, 5, "372,520", "Iceland", [64.96, -19.02]], ["Grenada", 3.2, 4.1, 3.8, 5.5, null, null, null, "124,610", "Grenada", [12.12, -61.68]], ["Barbados", 3.1, null, null, null, null, null, null, "282,467", "Barbados", [13.19, -59.54]], ["Montserrat", 2.7, null, null, null, null, null, null, "4,389", "Montserrat", [16.74, -62.19]], ["Puerto Rico", 2.7, 4.5, 4.3, 4.8, 3.7, 10.2, 13.7, "3,263,584", "Puerto Rico", [18.22, -66.59]], ["U.S. Virgin Islands", 2.6, null, 2.9, 4.5, 3.7, 3.5, null, "105,870", "U.S. Virgin Islands", [18.34, -64.9]], ["Bermuda", 2.5, 4.1, 3, null, null, null, null, "63,867", "Bermuda", [32.32, -64.76]], ["French Polynesia", 2.5, 3.2, 2.5, null, null, null, null, "304,032", "French Polynesia", [-17.68, -149.41]], ["Bahamas", 2.3, 5.2, null, 5.5, null, 3.3, null, "407,906", "The Bahamas", [25.03, -77.4]]];
// Insight chart images, in display order
const INSIGHTS = [
 "images/insights/korea-1.webp",
 "images/insights/korea-2.webp",
 "images/insights/korea-3.webp",
 "images/insights/germany-1.webp",
 "images/insights/germany-2.webp",
 "images/insights/germany-3.webp",
 "images/insights/india-1.webp",
 "images/insights/india-2.webp",
 "images/insights/india-3.webp",
 "images/insights/japan-1.webp",
 "images/insights/japan-2.webp",
 "images/insights/japan-3.webp",
 "images/insights/china-1.webp",
 "images/insights/china-2.webp",
 "images/insights/china-3.webp",
 "images/insights/us-1.webp",
 "images/insights/us-2.webp",
 "images/insights/uk-1.webp",
 "images/insights/uk-2.webp",
 "images/insights/uk-3.webp",
 "images/insights/efficiency-korea.webp",
 "images/insights/efficiency-china.webp",
 "images/insights/efficiency-us.webp",
 "images/insights/efficiency-japan.webp",
 "images/insights/efficiency-india.webp",
 "images/insights/efficiency-germany.webp",
 "images/insights/efficiency-uk.webp"
];

/* ---------- RENDER ---------- */
const $ = s => document.querySelector(s);
// Two modes: the live site has one HTML file per page (body has data-page / data-root);
// the single-file preview switches pages with #hash links instead.
const MULTI = document.body.dataset.page != null;
const ROOT = document.body.dataset.root || '';
const href = p => !MULTI ? '#'+p : p==='home' ? (ROOT || './') : ROOT + p.replace(/^petition-/,'petitions/') + '/';
const asset = u => MULTI && u.startsWith('images/') ? ROOT + u : u;
// Image with a labeled fallback (external images are blocked in the Claude preview; they load on the live site)
const fileName = u => u.startsWith('data:') ? '' : decodeURIComponent(u.split('/').pop());
const img = (u, alt='') => `<span>${fileName(u)}</span><img src="${asset(u)}" alt="${alt}" loading="lazy" onerror="this.remove()">`;

document.querySelectorAll('[data-petitions]').forEach(el => {
  el.innerHTML = PETITIONS.map(p => `
    <article class="pet">
      <div class="ph">${img(p.img)}</div>
      <div class="pet-body"><h3>${p.title}</h3><p>${p.summary}</p>
      <a class="btn" href="${href('petition-'+p.id)}">View more</a></div>
    </article>`).join('');
});

if($('#co2-body')){
$('#co2-body').innerHTML = CO2.map((r,i)=>`<tr><td>${i+1}</td><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td class="${r[4]<0?'down':r[4]>0?'up':''}">${r[4]}%</td></tr>`).join('');
$('#prod-body').innerHTML = PROD.map((r,i)=>`<tr><td>${i+1}</td>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('');
$('#direct-body').innerHTML = DIRECT.map((r,i)=>`<tr><td>${i+1}</td>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('');

}
const aqClass = v => v==null ? '' : v>50 ? 'aq6' : v>35 ? 'aq5' : v>25 ? 'aq4' : v>15 ? 'aq3' : v>10 ? 'aq2' : v>5 ? 'aq1' : 'aq0';
if($('#aq-body')) $('#aq-body').innerHTML = AQ.map((r,i)=>`<tr><td>${i+1}</td><td>${r[0]}</td>${r.slice(1,8).map(v=>`<td class="${aqClass(v)}">${v==null?'--':v}</td>`).join('')}<td>${r[8]}</td></tr>`).join('');

if($('#ins-grid')){
$('#ins-grid').innerHTML = INSIGHTS.map((u,i)=>`<button class="ins" type="button" data-i="${i}" aria-label="Open chart ${i+1} of ${INSIGHTS.length}"><div class="ph">${img(u,'Carbon emissions insight chart')}</div></button>`).join('');

/* Insights popup */
let lbIndex = 0, lbReturn = null;
function lbShow(i){
  lbIndex = (i + INSIGHTS.length) % INSIGHTS.length;
  $('#lb-img').src = asset(INSIGHTS[lbIndex]);
  $('#lb-count').textContent = `${lbIndex+1} / ${INSIGHTS.length}`;
}
function lbOpen(i){ lbReturn = document.activeElement; lbShow(i); $('#lb').hidden = false; document.body.classList.add('lb-open'); $('#lb .lb-close').focus(); }
function lbClose(){ $('#lb').hidden = true; document.body.classList.remove('lb-open'); lbReturn?.focus(); }
$('#ins-grid').addEventListener('click', e => { const b = e.target.closest('.ins'); if(b) lbOpen(+b.dataset.i); });
$('#lb').addEventListener('click', e => { if(e.target.id === 'lb' || e.target.tagName === 'FIGURE') lbClose(); });
$('#lb .lb-close').addEventListener('click', lbClose);
$('#lb .lb-prev').addEventListener('click', () => lbShow(lbIndex-1));
$('#lb .lb-next').addEventListener('click', () => lbShow(lbIndex+1));
document.addEventListener('keydown', e => {
  if($('#lb').hidden) return;
  if(e.key === 'Escape') lbClose();
  else if(e.key === 'ArrowLeft') lbShow(lbIndex-1);
  else if(e.key === 'ArrowRight') lbShow(lbIndex+1);
});
let touchX = null;
$('#lb').addEventListener('touchstart', e => touchX = e.touches[0].clientX, {passive:true});
$('#lb').addEventListener('touchend', e => { if(touchX==null) return; const dx = e.changedTouches[0].clientX - touchX; if(Math.abs(dx) > 50) lbShow(lbIndex + (dx < 0 ? 1 : -1)); touchX = null; });
}

/* ---------- PETITION DETAIL + SIGNING (Firebase Firestore) ---------- */
// Paste your Firebase web app config here (Firebase console → Project settings → Your apps → Config).
// If this is set to null, signing works in demo mode: it only counts in the visitor's own browser.
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyD8zo0RNKavtrCkRtDOxL9Fmn6SSNqRAao",
  authDomain: "co2mmitment-273bf.firebaseapp.com",
  projectId: "co2mmitment-273bf",
  storageBucket: "co2mmitment-273bf.firebasestorage.app",
  messagingSenderId: "581760742612",
  appId: "1:581760742612:web:3200880f0ecee28de1f741"
};
const FB_VERSION = '10.12.2';

let current = null, unsubscribe = null, fbPromise = null;
function store(k,v){ try{ if(v===undefined) return localStorage.getItem(k); localStorage.setItem(k,v);}catch(e){return null} }

function getFirebase(){
  if(!FIREBASE_CONFIG) return Promise.resolve(null);
  if(!fbPromise) fbPromise = (async () => {
    const base = `https://www.gstatic.com/firebasejs/${FB_VERSION}/`;
    const [appMod, fs] = await Promise.all([import(base+'firebase-app.js'), import(base+'firebase-firestore.js')]);
    const app = appMod.initializeApp(FIREBASE_CONFIG);
    return { db: fs.getFirestore(app), ...fs };
  })().catch(err => { console.warn('Firebase unavailable', err); return null; });
  return fbPromise;
}

function renderCount(p, n){
  if(current !== p) return;
  $('#pd-count').textContent = n.toLocaleString('en-US');
  const w = Math.min(100, Math.round(n/p.goal*100));
  $('#pd-bar').style.width = w + '%';
  $('#pd-pct').textContent = w + '%';
  $('#pd-track').classList.toggle('filled', w >= 55);
  $('#pd-track').setAttribute('aria-valuenow', w);
  $('#pd-goal').textContent = `${n.toLocaleString('en-US')} of ${p.goal.toLocaleString('en-US')} goal`;
}

function showPetition(id){
  const p = PETITIONS.find(x=>x.id===id); if(!p) return false;
  current = p;
  $('#pd-title').textContent = p.title;
  $('#pd-img').innerHTML = img(p.img);
  $('#pd-body').innerHTML = p.body;
  const signedHere = !!store('signed-'+p.id);
  $('#sign-note').className = 'form-note';
  $('#sign-note').textContent = signedHere ? 'You signed this petition.' : '';
  // Show the last known number right away, then switch to the live count.
  renderCount(p, p.signatures + (FIREBASE_CONFIG ? 0 : (signedHere ? 1 : 0)));
  if(unsubscribe){ unsubscribe(); unsubscribe = null; }
  getFirebase().then(fb => {
    if(!fb || current !== p) return;
    unsubscribe = fb.onSnapshot(fb.doc(fb.db, 'petitions', p.id),
      snap => { if(snap.exists()) renderCount(p, snap.data().count); },
      err => console.warn('Live count unavailable', err));
  });
  return true;
}

async function sha256(text){
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,'0')).join('');
}

if($('#sign-form'))
$('#sign-form').addEventListener('submit', async e => {
  e.preventDefault();
  if(!current) return;
  const f = e.target, note = $('#sign-note'), btn = f.querySelector('button[type=submit]');
  const name = $('#sign-name').value.trim(), email = $('#sign-email').value.trim().toLowerCase();
  note.className = 'form-note';
  if(!name || !f.checkValidity()){
    note.className = 'form-note form-error';
    note.textContent = !name ? 'Enter your name.' : 'Enter a valid email address.';
    return;
  }
  const p = current;
  btn.disabled = true; btn.textContent = 'Signing…';
  try{
    const fb = await getFirebase();
    if(!fb){
      // Demo mode (no Firebase config yet)
      if(store('signed-'+p.id)) throw Object.assign(new Error(), {code:'already'});
      store('signed-'+p.id,'1'); renderCount(p, p.signatures + 1);
    }else{
      // One signature per email per petition: the document id is a hash of the email,
      // and the security rules only allow creating it once.
      const sigId = await sha256(email);
      const batch = fb.writeBatch(fb.db);
      batch.set(fb.doc(fb.db, 'petitions', p.id, 'signatures', sigId), { name, email, createdAt: fb.serverTimestamp() });
      batch.update(fb.doc(fb.db, 'petitions', p.id), { count: fb.increment(1), lastSigner: sigId });
      await batch.commit();
      store('signed-'+p.id,'1');
    }
    f.reset();
    note.textContent = 'Thank you. Your signature was added.';
  }catch(err){
    note.className = 'form-note form-error';
    note.textContent = (err.code === 'already' || err.code === 'permission-denied')
      ? 'This email has already signed this petition.'
      : 'Your signature couldn’t be saved. Check your connection and try again.';
  }finally{
    btn.disabled = false; btn.textContent = 'Sign this petition';
  }
});
/* Contact form → FormSubmit (emails bubble.youthimpact@gmail.com) */
const CONTACT_EMAIL = 'bubble.youthimpact@gmail.com';
if($('#contact-form')){
$('#contact-form').addEventListener('submit', async e => {
  e.preventDefault();
  const f = e.target, note = $('#contact-note'), btn = $('#c-send');
  note.className = 'form-note'; note.textContent = '';
  if(!f.checkValidity()){
    const bad = f.querySelector(':invalid'); bad.focus();
    note.className = 'form-note form-error';
    note.textContent = bad.type==='email' && bad.value ? 'Enter a valid email address.' : 'Fill in your name, email and message.';
    return;
  }
  btn.disabled = true; btn.textContent = 'Sending…';
  const data = Object.fromEntries(new FormData(f));
  data._subject = 'CO2mmitment contact: ' + data.name;
  data._replyto = data.email;
  data._template = 'table';
  if(location.protocol === 'file:'){
    note.className = 'form-note form-error';
    note.textContent = 'The contact form only works on the live website, not when the file is opened from your computer.';
    btn.disabled = false; btn.textContent = 'Send message';
    return;
  }
  let r = null, j = {};
  try{
    r = await fetch('https://formsubmit.co/ajax/' + CONTACT_EMAIL, {
      method:'POST', headers:{'Content-Type':'application/json', Accept:'application/json'}, body:JSON.stringify(data)
    });
    j = await r.json().catch(()=>({}));
    console.log('[FormSubmit]', r.status, j);
  }catch(err){
    // Couldn't reach FormSubmit in the background (blocked by the browser, an extension or the network).
    // Fall back to a normal form post, which FormSubmit always accepts; it sends the visitor back here afterwards.
    console.warn('[FormSubmit] background send failed', err);
    if(MULTI){ postToFormSubmit(data); return; }
    note.className = 'form-note form-error';
    note.textContent = 'This preview can’t reach FormSubmit. The form sends on the live website.';
    btn.disabled = false; btn.textContent = 'Send message';
    return;
  }
  if(r.ok && !(j.success === 'false' || j.success === false)){
    f.reset(); f.hidden = true; $('#contact-sent').hidden = false;
  }else{
    note.className = 'form-note form-error';
    note.textContent = j.message ? 'FormSubmit says: ' + j.message : 'Your message couldn’t be sent (error ' + r.status + '). Try again in a few minutes.';
  }
  btn.disabled = false; btn.textContent = 'Send message';
});
function postToFormSubmit(data){
  const form = document.createElement('form');
  form.method = 'POST'; form.action = 'https://formsubmit.co/' + CONTACT_EMAIL; form.hidden = true;
  const back = new URL(location.href); back.search = '?sent=1'; back.hash = '';
  Object.entries({...data, _captcha:'false', _next: back.href}).forEach(([k,v])=>{
    const i = document.createElement('input'); i.type = 'hidden'; i.name = k; i.value = v; form.appendChild(i);
  });
  document.body.appendChild(form); form.submit();
}
if(new URLSearchParams(location.search).get('sent') === '1'){ $('#contact-form').hidden = true; $('#contact-sent').hidden = false; }
$('#c-again').addEventListener('click', ()=>{ $('#contact-sent').hidden = true; $('#contact-form').hidden = false; $('#c-name').focus(); });
}



/* ---------- GOOGLE MAPS ---------- */
// Restrict this key to your site's address in Google Cloud Console (see setup steps).
const MAPS_KEY = 'AIzaSyAH1LNM3wd9cVBIGtc-0yE-gs4NfB_f3y8';
let mapsReady = null; const built = {};

function loadMaps(){
  if(mapsReady) return mapsReady;
  mapsReady = new Promise((ok, fail) => {
    window.__mapsLoaded = ok;
    const s = document.createElement('script');
    s.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_KEY}&callback=__mapsLoaded&loading=async&v=weekly`;
    s.async = true; s.onerror = fail;
    document.head.appendChild(s);
    setTimeout(()=>{ if(!window.google?.maps?.Map) fail(new Error('timeout')); }, 12000);
  });
  return mapsReady;
}
// Positions are pre-filled; anything missing is geocoded once and remembered in this browser.
async function locate(address, pos){
  if(pos) return {lat:pos[0], lng:pos[1]};
  if(!address) return null;
  const key = 'geo:' + address, hit = store(key);
  if(hit) return JSON.parse(hit);
  try{
    const {results} = await new google.maps.Geocoder().geocode({address});
    const loc = results?.[0]?.geometry?.location;
    if(loc){ const p = {lat:loc.lat(), lng:loc.lng()}; store(key, JSON.stringify(p)); return p; }
  }catch(e){}
  return null;
}
function newMap(el){
  el.innerHTML = '';
  // Start closer in: zoom 3 on wider screens (Europe, Africa and Asia in view), zoom 2 on phones
  const zoom = el.clientWidth >= 700 ? 3 : 2;
  return new google.maps.Map(el, { center:{lat:30,lng:30}, zoom, minZoom:2, mapTypeControl:true,
    mapTypeControlOptions:{position:google.maps.ControlPosition.TOP_LEFT}, streetViewControl:false, gestureHandling:'cooperative' });
}
const AQ_COLORS = ['#5aaccc','#9fd64a','#f6c832','#f48c3e','#ef5b63','#9a6fc0','#a06a78'];
const aqIndex = v => v>50?6:v>35?5:v>25?4:v>15?3:v>10?2:v>5?1:0;
const glow = c => 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44"><defs><radialGradient id="g"><stop offset="0" stop-color="${c}" stop-opacity=".95"/><stop offset=".55" stop-color="${c}" stop-opacity=".6"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></radialGradient></defs><circle cx="22" cy="22" r="22" fill="url(#g)"/></svg>`);

async function buildMap(which){
  if(built[which]) return; built[which] = true;
  const el = $(which==='co2' ? '#map-co2' : '#map-aq');
  try{ await loadMaps(); }
  catch(e){
    built[which] = false; mapsReady = null;
    el.innerHTML = '<div class="map-msg"><b>Map unavailable here</b>Google Maps loads on the live site. This preview blocks outside scripts.</div>';
    return;
  }
  const map = newMap(el), info = new google.maps.InfoWindow();
  const rows = which==='co2' ? CO2.filter(r=>r[0]!=='World') : AQ;
  const icons = AQ_COLORS.map(c=>({url:glow(c), scaledSize:new google.maps.Size(34,34), anchor:new google.maps.Point(17,17)}));
  for(const r of rows){
    const pos = which==='co2' ? await locate(r[5], r[6]) : await locate(r[9], r[10]);
    if(!pos) continue;
    const m = which==='co2'
      ? new google.maps.Marker({position:pos, map, title:r[0]})
      : new google.maps.Marker({position:pos, map, title:r[0], icon:icons[aqIndex(r[1])]});
    const html = which==='co2'
      ? `<div class="iw"><b>${r[0]}</b>2023: ${r[2]} MtCO₂<br>Share of global: ${r[1]}<br>Change since 2000: ${r[4]}%</div>`
      : `<div class="iw"><b>${r[0]}</b>PM2.5 (2024): ${r[1] ?? '--'} µg/m³<br>Population: ${r[8]}</div>`;
    m.addListener('click', ()=>{ info.setContent(html); info.open({anchor:m, map}); });
  }
}

/* ---------- PAGES ---------- */
const PAGES = ['home','about','co2','air-quality','insights','dashboard','esg','petitions','contact'];
function startPage(page){
  if(page==='co2') buildMap('co2');
  if(page==='air-quality') buildMap('aq');
}
function route(){
  let h = location.hash.slice(1) || 'home', page = h;
  if(h.startsWith('petition-')){ page = showPetition(h.slice(9)) ? 'petition' : 'petitions'; }
  else if(!PAGES.includes(h)) page = 'home';
  document.querySelectorAll('.page').forEach(s=>s.classList.toggle('show', s.id==='p-'+page));
  const navPage = page==='petition' ? 'petitions' : page;
  document.querySelectorAll('.links a').forEach(a=>a.classList.toggle('on', a.getAttribute('href')==='#'+navPage && !a.classList.contains('btn')));
  const sec = $('#p-'+page); if(sec?.dataset.title) document.title = page==='petition' ? current.title + ' | CO2mmitment' : sec.dataset.title;
  setMenu(false, false);
  window.scrollTo(0,0);
  if(page==='dashboard') window.dispatchEvent(new Event('resize'));
  startPage(page);
}
if(!MULTI) window.addEventListener('hashchange', route);
let animTimer;
function setMenu(open, animate=true){
  const l = $('#links');
  if(animate && open !== l.classList.contains('open')){ l.classList.add('anim'); clearTimeout(animTimer); animTimer = setTimeout(()=>l.classList.remove('anim'), 260); }
  $('#links').classList.toggle('open',open); document.body.classList.toggle('menu-open',open);
  $('#menuBtn').setAttribute('aria-expanded',open); $('#menuBtn').setAttribute('aria-label',open?'Close menu':'Menu');
}
$('#menuBtn').addEventListener('click',()=>setMenu(!$('#links').classList.contains('open')));
matchMedia('(max-width:1120px)').addEventListener('change', e=>{ if(!e.matches) setMenu(false, false); });
document.addEventListener('keydown',e=>{ if(e.key==='Escape') setMenu(false); });
$('#links').addEventListener('click',e=>{ if(e.target.closest('a')) setMenu(false); });
$('#toTop').addEventListener('click',e=>{ e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}); });
window.addEventListener('scroll',()=>$('#nav').classList.toggle('scrolled',scrollY>4),{passive:true});
if(MULTI){
  const page = document.body.dataset.page;
  if(page==='petition') showPetition(document.body.dataset.petition);
  startPage(page);
}else route();
/* Logo: Material Symbols "storm" glyph; falls back to a drawn copy if the icon font can't load */
document.fonts?.load('30px "Material Symbols Outlined"','storm').then(f=>{ if(!f.length) document.documentElement.classList.add('no-ms'); }).catch(()=>document.documentElement.classList.add('no-ms'));
