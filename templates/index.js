// import appleImage from "../images/crop/apple.jpg"
// import bananaImage from "../images/crop/banana.jpg"
// import blackgramImage from "../images/crop/blackgram.jpg"
// import chickpeaImage from "../images/crop/chickpea.jpg"
// import coconutImage from "../images/crop/coconut.jpg"
// import coffeeImage from "../images/crop/coffee.png"
// import cottonImage from "../images/crop/cotton.png"
// import grapesImage from "../images/crop/grape.png"
// import juteImage from "../images/crop/jute.jpg"
// import kidneybeansImage from "../images/crop/kidneybeans.jpg"
// import lentilImage from "../images/crop/lentil.jpg"
// import maizeImage from "../images/crop/maize.jpg"
// import mangoImage from "../images/crop/mango.jpg"
// import mothbeansImage from "../images/crop/mothbean.jpg"
// import mungbeanImage from "../images/crop/mungbean.jpg"
// import muskmelonImage from "../images/crop/muskmelon.jpg"
// import orangeImage from "../images/crop/orange.jpg"
// import papayaImage from "../images/crop/papaya.jpg"
// import pigeonpeasImage from "../images/crop/pigeonpeas.jpg"
// import pomegranateImage from "../images/crop/pomogranate.jpg"
// import riceImage from "../images/crop/rice.jpg"
// import watermelonImage from "../images/crop/watermelon.jpg"

// import fert143514Image from "../images/fertilizer/fert143514.png"
// import fert2828Image from "../images/fertilizer/fert2828.jpg"
// import fert171717Image from "../images/fertilizer/fert171717.jpg"
// import fert2020Image from "../images/fertilizer/fert2020.jpg"
// import fert102626Image from "../images/fertilizer/fert102626.png"
// import ureaFertImage from "../images/fertilizer/ferturea.jpg"
// import dapFertImage from "../images/fertilizer/fertdap.jpg"

const cropData = {
  apple: {
    title: "Apple Crop",
    imageUrl: "./images/crop/apple.jpg",
    description:
      "Normally the apples are ready for harvest from September-October except in the Nilgiris where the season is from April to July. The fruits mature within 130-150 days after the full bloom stage depending upon the variety grown. The ripening of fruits is associated with the change in colour, texture, quality and the development of the characteristic flavour. The fruits at the time of harvest should be uniform, firm and crisp. The colour of the skin at maturity ranges from yellow-red depending on the variety. However, the optimum time of harvest depends on fruit quality and intended period of storage. Due to the introduction of dwarf rootstock hand picking is recommended as it reduces bruising due to fruit fall during mechanical harvesting.",
  },
  banana: {
    title: "Bana Crop",
    imageUrl: "./images/crop/banana.jpg",
    description:
      "Banana is harvested when the fruit is slightly or fully mature depending on the market preferences. For long distance transportation, harvesting is done at 75-80 % maturity.  The fruit is climacteric and can reach consumption stage after ripening operation. The planted crop gets ready for harvest within 12-15 months of planting and the main harvesting season of banana is from September to April.  Bunches attain maturity from 90-150 days after flowering depending upon variety, soil, weather condition and elevation. Bunch should be harvested when fingers of second hand from top are 3/4 rounded with the help of sharp sickle 30cm above the first hand. Harvest may be delayed upto 100-110 days after opening of the first hand. Harvested bunch should generally be collected in well padded tray or basket and brought to collection site. Bunches should be kept out of light after harvest, since this hastens ripening and softening. For local consumption, hands are often left on stalks and sold to retailers.",
  },
  blackgram: {
    title: "Blackgram Crop",
    imageUrl: "./images/crop/blackgram.jpg",
    description:
      "Urd should be harvested when 70-80 % pods matured and most of the pods turn black. Over maturity may result in shattering. Harvested crop should be dried on threshing floor for few days and then threshed. Threshing can be done either manually or by trampling under the feet of bullocks. The clean seeds should be sun dried for 3 - 4 days to bring their moisture content at 8-10% to safely store in appropriate bins.",
  },
  chickpea: {
    title: "ChickPea Crop",
    imageUrl: "./images/crop/chickpea.jpg",
    description:
      "The plant grows to 20–50 cm (8–20 in) high and has small, feathery leaves on either side of the stem. Chickpeas are a type of pulse, with one seedpod containing two or three peas. It has white flowers with blue, violet, or pink veins. Several varieties of chickpea are cultivated throughout the world. Desi chana closely resembles both seeds found on archaeological sites and the wild plant ancestor of domesticated chickpeas. Cicer reticulatum only grows in southeast Turkey, where chickpeas are believed to have originated.",
  },
  coconut: {
    title: "Coconut Crop",
    imageUrl: "./images/crop/coconut.jpg",
    description:
      "Coconut palms are normally cultivated in hot and wet tropical climates. They need year round warmth and moisture to grow well and fruit. Coconut palms are hard to establish in dry climates, and cannot grow there without frequent irrigation; in drought conditions, the new leaves do not open well, and older leaves may become desiccated; fruit also tends to be shed.",
  },
  coffee: {
    title: "Coffee Crop",
    imageUrl: "./images/crop/coffee.jpg",
    description:
      "The traditional method of planting coffee is to place 20 seeds in each hole at the beginning of the rainy season. This method loses about 50% of the seeds' potential, as about half fail to sprout. A more effective process of growing coffee, used in Brazil, is to raise seedlings in nurseries that are then planted outside at six to twelve months. Coffee is often intercropped with food crops, such as corn, beans, or rice during the first few years of cultivation as farmers become familiar with its requirements. Coffee plants grow within a defined area between the tropics of Cancer and Capricorn, termed the bean belt or coffee belt.",
  },
  cotton: {
    title: "Cotton Crop",
    imageUrl: "./images/crop/cotton.jpg",
    description:
      "Successful cultivation of cotton requires a long frost-free period, plenty of sunshine, and a moderate rainfall, usually from 60 to 120 cm (24 to 47 in)[citation needed]. Soils usually need to be fairly heavy, although the level of nutrients does not need to be exceptional. In general, these conditions are met within the seasonally dry tropics and subtropics in the Northern and Southern hemispheres, but a large proportion of the cotton grown today is cultivated in areas with less rainfall that obtain the water from irrigation. Production of the crop for a given year usually starts soon after harvesting the preceding autumn.",
  },
  grapes: {
    title: "Grapes Crop",
    imageUrl: "./images/crop/grapes.jpg",
    description:
      "Harvesting period for grapes, generally starts 30-70 days after fruit set, by the time berries change color from green to yellow (for white varieties), or red-purple (for red varieties). During this stage, we normally have an increase in sugars and a decrease in acids inside the fruits. In general, in the northern hemisphere, most varieties mature from August since November, while in the southern hemisphere from March to August.",
  },
  jute: {
    title: "Jute Crop",
    imageUrl: "./images/crop/jute.jpg",
    description:
      "To grow jute, farmers scatter the seeds on cultivated soil. When the plants are about 15–20 cm tall, they are thinned out. About four months after planting, harvesting begins. The plants are usually harvested after they flower, before the flowers go to seed. The stalks are cut off close to the ground. The stalks are tied into bundles and soaked in water for about 20 days. This process softens the tissues and breaks the hard [pectin] bond between the bast and [Jute hurd] (inner woody fiber stick) and the process permits the fibres to be separated. The fibres are then stripped from the stalks in long strands and washed in clear, running water.",
  },
  kidneybeans: {
    title: "Kidney Beans Crop",
    imageUrl: "./images/crop/kidneybeans.jpg",
    description:
      "Harvest when pods are full grown and ripe and there color turn to yellow. Also leaves turn yellow and majority of leaves drop. Depending upon variety use pods are ready to harvest 7-12 days after flowering. Overall crop is ready to harvest in 120-130 days. Do harvesting at right time as delay cause shattering. Keep harvested plant for three-four days in sun. After proper drying of crop, threshing is done with help of bullocks or with sticks.",
  },
  lentil: {
    title: "Lentil Crop",
    imageUrl: "./images/crop/lenthil.jpg",
    description:
      "Harvest lentils when the plant begin to turn yellow and the pods become brown. Lentils are commonly used as dry beans or peas. For dried seeds, harvest pods when they have matured and hardened. Leave lentils unshelled until you are ready to use them. Dried lentils are ready for harvest 110 days after sowing. Lentil also can be used as snap beans; harvest these green about 70 to 80 days after sowing.",
  },
  maize: {
    title: "Maize Crop",
    imageUrl: "./images/crop/maize.jpg",
    description:
      "The ears are removed from the standing plants and they are piled to open for twenty four hours and they are spread for drying in the sun. In this method stalks may be used as green fodder. The plants are cut and piled up in the shade and the cobs are removed after two or three days of harvesting. The dried plants are used for haymaking. Maize grown for fodder are harvested at the milk to early dough stage. The earlier harvested crop usually yields less and is poor in protein content. For silage making late dough stage is preferred.",
  },
  mango: {
    title: "Mango Crop",
    imageUrl: "./images/crop/mango.jpg",
    description:
      "In western India, mango puts forth three growth flushes, the first are in the early spring (FebruaryMarch), the second during March-April and the third in the beginning of winter (October-November). In Bihar, the first growth noticed in early spring, the second in April-May and the third in July-August. In UP, only two flushes are produced, in March-April and July-August. In Punjab, as many as five flushes are produced from April-August. April and Mayflushes being found most heavy. In South India, mango usually gives two growth flushes, one in February-June and the other in October-November. In mango about 8-10 months old shoots under certain conditions cease to grow at least 4 months prior to blossoming. These shoots are capable of producing flower buds. Other shoots, which appear in subsequent flushes during late monsoon, do not come to flowering. These shoots flower during the next season after accumulating sufficient metabolites necessary for fruit-bud differentiation. Thus the fruits will be ready for harvest in April-May from a plant flowered during October-November.",
  },
  mothbeans: {
    title: "Mothbeans Crop",
    imageUrl: "./images/crop/mothbeans.jpg",
    description:
      "The moth bean plants generally take between 75 and 90 days from planting to harvesting. Harvesting moth bean is pretty difficult, and it’s the main drawback to this crop. You have to cut the plants with a sickle, because you can’t use mowers mainly due to the shape and density of the moth bean’s branches. Then after cutting, it is threshed and winnowed after being dried for approximately one week.",
  },
  mungbean: {
    title: "Mungbean Crop",
    imageUrl: "./images/crop/mungbean.jpg",
    description:
      "The olive-green mung beans should be harvested in the field after their pods have dried, typically in early to mid-September. Farmers use the same type of combine machinery used to harvest soybeans, but because mung beans are smaller than soybeans, they adjust the combine settings and screen size for the smaller bean size. Mung beans should be cleaned of debris before storage, and the beans should have no more than 12 percent moisture content for storage. Because harvested beans may be sprouted and eaten directly, stored beans should not be treated with fungicides, insecticides or bactericides.",
  },
  muskmelon: {
    title: "Muskmelon Crop",
    imageUrl: "./images/crop/muskmelon.jpg",
    description:
      "Many muskmelons and cantaloupes separate naturally from the stem when the melons are ripe, so they come away from the vine with only a gentle tug. Melons that do not “slip” often sound hollow when tapped, and the skin color takes on a yellowish cast. Wipe harvested melons clean and store indoors in a cool place, or in the refrigerator.",
  },
  orange: {
    title: "Orange Crop",
    imageUrl: "./images/crop/orange.jpg",
    description:
      "Canopy-shaking mechanical harvesters are being used increasingly in Florida to harvest oranges. Current canopy shaker machines use a series of six-to-seven-foot-long tines to shake the tree canopy at a relatively constant stroke and frequency.",
  },
  papaya: {
    title: "Papaya Crop",
    imageUrl: "./images/crop/papaya.jpg",
    description:
      "Fruits are harvested when they are of full size, light green in colour with tinge of yellow at apical end. On ripening, fruits of certain varieties turn yellow while some of them remain green. When the latex ceases to be milky and become watery, the fruits are suitable for harvesting. The economic life of papaya plant is only 3 to 4 years.  The yield varies widely according to variety, soil, climate and management of the orchard. The yield of 75-100 tonnes /ha. is obtained in a season from a papaya orchard depending on spacing and cultural practices.",
  },
  pigeonpeas: {
    title: "Pigeon Peas Crop",
    imageUrl: "./images/crop/pigeonpeas.jpg",
    description:
      "With two third to three fourth pods at maturity judged by changing their colour to brown is the best harvesting time. The plants are usually cut with a sickle within 75 cm above the ground. Harvested plants should be left in the field for sun drying for 3-6 days depending on season. Threshing is done either by beating the pods with stick or using Pullman thresher. The proportion of seed to pods is generally 50 - 60%. The clean seeds should be sun dried for 3-4 days to bring their moisture content at 9-10% to safely store in appropriate bins.",
  },
  pomegranate: {
    title: "Pomegranate Crop",
    imageUrl: "./images/crop/pomegranate.jpg",
    description:
      "Pomegranate being a non-climacteric fruit should be picked when fully ripe. Pomegranate plants take 4-5 years to come into bearing.  Harvesting of immature or over mature fruits affects the quality of the fruits. The fruits become ready for picking 120-130 days after fruit set. The calyx at the distal end of the fruit gets closed on maturity. At maturity, the fruits turn yellowish-red and get suppressed on sides.",
  },
  rice: {
    title: "Rice Crop",
    imageUrl: "./images/crop/rice.jpg",
    description:
      "Harvesting is the process of collecting the mature rice crop from the field. Depending on the variety, a rice crop usually reaches maturity at around 105–150 days after crop establishment. Harvesting activities include cutting, stacking, handling, threshing, cleaning, and hauling. Good harvesting methods help maximize grain yield and minimize grain damage and deterioration.",
  },
  watermelon: {
    title: "Watermelon Crop",
    imageUrl: "./images/crop/watermelon.jpg",
    description:
      "Watermelons will be ready for harvest 65 to 90 days after sowing depending on the variety. When watermelons are ready to harvest vine tendrils will begin to turn brown and die off. If the tendrils are green the melon is not ripe. A ripe watermelon will make a dull hollow sound when thumped. The soil-side of a watermelon will turn from white to pale yellow when the fruit is ready for harvest. Ripe melons will have a sweet aroma at the stem end. Limit water for a week in advance of the harvest to concentrate sweetness. Watermelons on a single plant will all be ready for harvest over a two week period.",
  },
};

const fertilizerData = {
  Urea: {
    title: "Urea Fertilizer",
    imageUrl: "./images/fertilizer/ferturea.jpg",
    description:
      "The agricultural industry widely uses urea, a white crystalline solid containing 46 percent nitrogen as an animal feed additive and fertilizer. Here, we'll focus on its role as a nitrogen fertilizer. In the past decade, urea has surpassed and nearly replaced ammonium nitrate as a fertilizer.",
  },
  DAP: {
    title: "DAP Fertilizer",
    imageUrl: "./images/fertilizer/fertdap.jpg",
    description:
      "Di-ammonium Phosphate popularly known as DAP is a preferred fertilizer in India because it contains both Nitrogen and Phosphorus which are primary macro-nutrients and part of 18 essential plant nutrients. DAP is manufactured by reacting Ammonia with Phosphoric acid under controlled conditions in fertilizer plants.",
  },
  "14-35-14": {
    title: "14-35-14 Fertilizer",
    imageUrl: "./images/fertilizer/fert143514.jpg",
    description:
      "GROMOR 14-35-14 is a complex fertiliser containing all major nutrients viz. Nitrogen, Phosphorous and Potassium. The only complex having highest total nutrient content among the NPK complex fertilisers. (Total nutrients are 63%).",
  },
  "28-28": {
    title: "28-28 Fertilizer",
    imageUrl: "../images/fertilizer/fert2828.jpg",
    description:
      "This is the highest Nitrogen-containing Complex fertilizer with 28%. 19% of Nitrogen is in Urea form and 9% is in Ammonical form. Ammonium Phosphate is coated over Urea prill, due to which the losses from Urea will be minimized. 25.2% out of 28% Phosphate is in water-soluble form and easily available to plants.",
  },
  "17-17-17": {
    title: "17:17:17 Fertilizer",
    imageUrl: "./images/fertilizer/fert171717.jpg",
    description:
      "N-P-K 17-17-17 Fertilizer is a complex fertilizer containing all three major plant nutrient ,Nitrogen,Phosphorous.Potassium in equal proportion .contain nitrogen ,phosphorous.potassium in 17:17:17 combination.it also helps regulate metabolic activities n-p-k 17-17-17 fertilizers are water soluble and can be taken up by the plant almost immediately an all purpose 17-17-17 fertilizer will provide the nutrients all plants need for healthy growth.All parts of plants need nitrogen for growth -the roots leaves,stems, flowers and fruits.Nitrogen gives plants their green color and is needed to form protein. A lack of nitrogen causes the lower leaves to turn yellow and the whole plant to turn pale green.Phosphorous is needed for cell division and help form roots flowers and fruits.Phosphorous deficiency causes stunted growth and poor flowering and fruiting.Potassium is important for regulation of water and nutrient movement in plant cells, there by promoting fruiting ,flowering, hardiness and promote the overall health of the plant by providing resistance to diseases. A Potassium shortage show up in various ways but stun growth and yellowish lower leaves.Usage Instruction:seeds and seedling stage use 1/4 tsp to 1 liter water.After 3-4 true leaves stage use 1/2 tsp to 1 liter water . blooming stage use 2/3 tsp n-p-k to 1 liter water.",
  },
  "20-20": {
    title: "20-20 Fertilizer",
    imageUrl: "./images/fertilizer/fert2020.jpg",
    description:
      "GROMOR 20-20-0-13 is Ammonium Phosphate Sulphate containing Nitrogen and Phosphate in 1:1 ratio. It contains 20% Nitrogen. Of this 90% of Nitrogen is present in Ammonical form and the rest in Amide form. However, the entire Nitrogen is available to crops in Ammonical form. It contains 20% Phosphate, 85% of which is present in water-soluble form and is effectively and easily available to crops. It contains 15% Sulphur which is the 4th major nutrient after NPK. Sulphur response in many crops has been reported very encouraging and application of GROMOR 20-20-0-13 will supplement the Sulphur requirement of crops. It is granular in nature and can be easily applied by broadcasting, placement or drilling. Hygroscopic nature is much less and it is suitable to a variety of soils and crops. It is an excellent fertilizer for all crops grown in Sulphur deficient soils and is highly suitable for Sulphur loving crops such as Oilseeds.",
  },
  "10-26-26": {
    title: "10-26-26 Fertilizer",
    imageUrl: "./images/fertilizer/fert102626.jpg",
    description:
      "GROMOR 10:26:26 is a complex fertilizer containing all the three major plant nutrients viz. Nitrogen, Phosphorous and Potassium. GROMOR 10:26:26 contains Phosphorous and Potassium in the ratio of 1:1, the highest among the NPK fertilizers. It contains 7% Nitrogen in the Ammonical form, 22% out of 26% phosphate in the water-soluble form and the entire 26% potash is available in the water-soluble form. GROMOR 10:26:26 is ideally suitable for crops which require high phosphate and potassium and this grade is very popular among the Sugarcane farmers of Maharashtra, Karnataka and Andhra Pradesh and Potato farmers of West Bengal & Uttar Pradesh. GROMOR 10:26:26 is also suitable for Fruit crops.",
  },
};

function onClickedPredictCrop() {
  console.log("Predict crop clicked");
  var N = document.getElementById("uiN").value;
  var P = document.getElementById("uiP").value;
  var K = document.getElementById("uiK").value;
  var Temp = document.getElementById("uiTemperature").value;
  var Humidity = document.getElementById("uiHumidity").value;
  var ph = document.getElementById("uipH").value;
  var rainfall = document.getElementById("uiRainfall").value;

  var predCrop = document.getElementById("uiPredictedCrop");
  var cropImage = document.getElementById("uiCropImage");
  var cropDesc = document.getElementById("uiCropDesc");

  var url = "http://127.0.0.1:5000/predict_crop";
  $.post(
    url,
    {
      Nitrogen: N,
      Phosporus: P,
      Potassium: K,
      Temperature: Temp,
      Humidityy: Humidity,
      pH: ph,
      rainFall: rainfall,
    },
    function (data, status) {
      console.log(data.predicted_crop);
      const predictedCrop = cropData[data.predicted_crop];
      predCrop.innerHTML = "Recommended Crop : " + predictedCrop.title;
      cropImage.src = predictedCrop.imageUrl;
      cropDesc.innerHTML = "<p>" + predictedCrop.description + "</p>";
      console.log(status);
    }
  );
}

function onClickedPredictFert() {
  console.log("Predict crop clicked");
  var Temp = document.getElementById("uiTemperature").value;
  var Humidity = document.getElementById("uiHumidity").value;
  var Moisture = document.getElementById("uiMoisture").value;
  var SoilType = document.getElementById("uiSoilType").value;
  var CropType = document.getElementById("uiCropType").value;
  var N = document.getElementById("uiN").value;
  var P = document.getElementById("uiP").value;
  var K = document.getElementById("uiK").value;

  var predFert = document.getElementById("uiPredictedFert");
  var fertImage = document.getElementById("uiFertImage");
  var fertDesc = document.getElementById("uiFertDesc");
  var url = "http://127.0.0.1:5000/predict_fert";

  $.post(
    url,
    {
      Temperature: Temp,
      Humidityy: Humidity,
      Moisture: Moisture,
      SoilType: SoilType,
      CropType: CropType,
      Nitrogen: N,
      Phosporus: P,
      Potassium: K,
    },
    function (data, status) {
      console.log(data.predicted_fert);
      const predictedFertilizer = fertilizerData[data.predicted_fert];
      predFert.innerHTML = predictedFertilizer.title;
      fertImage.src = predictedFertilizer.imageUrl;
      fertDesc.innerHTML = " <p> " + predictedFertilizer.description + "</p>";
      console.log(status);
    }
  );
}

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $(".image-upload-wrap").hide();

      $(".file-upload-image").attr("src", e.target.result);
      $(".file-upload-content").show();

      $(".image-title").html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

function removeUpload() {
  $(".file-upload-input").replaceWith($(".file-upload-input").clone());
  $(".file-upload-content").hide();
  $(".image-upload-wrap").show();
}
$(".image-upload-wrap").bind("dragover", function () {
  $(".image-upload-wrap").addClass("image-dropping");
});
$(".image-upload-wrap").bind("dragleave", function () {
  $(".image-upload-wrap").removeClass("image-dropping");
});

function onClickPredictDisease() {
  console.log("Predict Disease clicked");
  const formData = new FormData();
  const fileField = document.querySelector('input[type="file"]');

  formData.append("input_image", fileField.files[0]);
  fetch("http://127.0.0.1:5000/predict_disease", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Success:", result);
      if (result.output_disease == "normal") {
        document.getElementById("uiPredictedDisease").innerHTML =
          " No Disease Detected.. The Plant is Healthy. ";
      } 

      else if (result.output_disease == "bacterial_leaf_blight") {
        document.getElementById("uiPredictedDisease").innerHTML =
          " Disease Detected :" + result.output_disease;
        document.getElementById("uiSolutionContent").innerHTML =
          " <p> <strong>Cause: </strong><br>\
          Bacterial blight is caused by Xanthomonas oryzae pv. oryzae.<br>It causes wilting of seedlings and yellowing and drying of leaves.\
          <br><br><strong> Prevention: </strong><br>\
          Planting resistant varieties has been proven to be the most efficient, most reliable, and cheapest way to control bacterial blight. <br>Other disease control options include:\
          <br>•	Use balanced amounts of plant nutrients, especially nitrogen.\
          <br>•	Ensure good drainage of fields (in conventionally flooded crops) and nurseries.\
          <br>•	Keep fields clean. Remove weed hosts and plow under rice stubble, straw, rice ratoons and volunteer seedlings, which can serve as hosts of bacteria.\
          <br>•	Allow fallow fields to dry in order to suppress disease agents in the soil and plant residues.\
          </p>";
      }

      else if (result.output_disease == "bacterial_leaf_streak") {
        document.getElementById("uiPredictedDisease").innerHTML =
          " Disease Detected :" + result.output_disease;
        document.getElementById("uiSolutionContent").innerHTML =
        " <p> <strong>Cause: </strong><br>\
        Bacterial leaf streak is caused by Xanthomonas oryzae pv. oryzicola.<br>Infected plants show browning and drying of leaves. Under severe conditions, this could lead to reduced grain weight due to loss of photosynthetic area.\
        <br><br><strong> Prevention: </strong><br>\
        To prevent and effectively manage bacterial leaf streak: \
        <br>•	Plant resistant varieties.\
        <br>•	Treat seeds with hot water.\
        <br>•	Keep fields clean—remove weed hosts and plow under rice stubble, straw, rice ratoons, and volunteer seedlings, which may be infected by the bacteria.\
        <br>• Use balanced amounts of plant nutrients, especially nitrogen.\
        <br>•	Ensure good drainage of fields (in conventionally flooded crops) and nurseries.\
        <br>•	Drain the field during severe flood.\
        <br>•	Dry the field during the fallow period to kill the bacteria in the soil and in plant residues.\
        <br>•	In cases of severe infection, when yield may be affected, a copper-based fungicide applied at heading can be effective in controlling the disease.\
        </p>";
      }

      else if (result.output_disease == "bacterial_panicle_blight") {
        document.getElementById("uiPredictedDisease").innerHTML =
          " Disease Detected :" + result.output_disease;
        document.getElementById("uiSolutionContent").innerHTML =
        " <p> <strong>Cause: </strong><br>\
        Bacterial blight is caused by Xanthomonas oryzae pv. oryzae.<br>It causes wilting of seedlings and yellowing and drying of leaves.\
        <br><br><strong> Prevention: </strong><br>\
        Planting resistant varieties has been proven to be the most efficient, most reliable, and cheapest way to control bacterial blight. <br>Other disease control options include:\
        <br>•	Use balanced amounts of plant nutrients, especially nitrogen.\
        <br>•	Ensure good drainage of fields (in conventionally flooded crops) and nurseries.\
        <br>•	Keep fields clean. Remove weed hosts and plow under rice stubble, straw, rice ratoons and volunteer seedlings, which can serve as hosts of bacteria.\
        <br>• Allow fallow fields to dry in order to suppress disease agents in the soil and plant residues.\
        </p>";
      }

      else if (result.output_disease == "blast") {
        document.getElementById("uiPredictedDisease").innerHTML =
          " Disease Detected :" + result.output_disease;
        document.getElementById("uiSolutionContent").innerHTML =
        " <p> <strong>Cause: </strong><br>\
        Blast is caused by the fungus Magnaporthe oryzae. <br>It can affect all above ground parts of a rice plant: leaf, collar, node, neck, parts of panicle, and sometimes leaf sheath.\
        <br><br><strong> Prevention: </strong><br>\
        The primary control option for blast is to plant resistant varieties. Contact your local agriculture office for up-to-date lists of varieties available. <br><br>Other crop management measures can also be done, such as:\
        <br>•	Adjust planting time. Sow seeds early, when possible, after the onset of the rainy season.\
        <br>•	Split nitrogen fertilizer application in two or more treatments. Excessive use of fertilizer can increase blast intensity.\
        <br>•	Flood the field as often as possible.\
        <p>Silicon fertilizers (e.g., calcium silicate) can be applied to soils that are silicon deficient to reduce blast. However, because of its high cost, silicon should be applied efficiently. Cheap sources of silicon, such as straws of rice genotypes with high silicon content, can be an alternative. Care should be taken to ensure that the straw is free from blast as the fungus can survive on rice straw and the use of infected straw as a silicon source can spread the disease further.</p>\
        <p>Systemic fungicides like triazoles and strobilurins can be used judiciously for control to control blast. A fungicide application at heading can be effective in controlling the disease.</p>\
        </p>";
      }

      else if (result.output_disease == "brown_spot") {
        document.getElementById("uiPredictedDisease").innerHTML =
          " Disease Detected :" + result.output_disease;
        document.getElementById("uiSolutionContent").innerHTML =
        "<p> <strong>Cause: </strong><br>\
        Brown spot is a fungal disease that infects the coleoptile, leaves, leaf sheath, panicle branches, glumes, and spikelets.<br><br>Its most observable damage is the numerous big spots on the leaves which can kill the whole leaf. When infection occurs in the seed, unfilled grains or spotted or discolored seeds are formed. \
        <br><br><strong> Prevention: </strong><br>\
        Improving soil fertility is the first step in managing brown spot. To do this:\
        <br>•	monitor soil nutrients regularly.\
        <br>•	apply required fertilizers.\
        <br>•	for soils that are low in silicon, apply calcium silicate slag before planting.\
        <p>Fertilizers, however, can be costly and may take many cropping seasons before becoming effective. More economical management options include:<br>\
        <br>•	Use resistant varieties.Contact your local agriculture office for up-to-date lists of varieties available. \
        <br>•	Use fungicides (e.g., iprodione, propiconazole, azoxystrobin, trifloxystrobin, and carbendazim) as seed treatments. \
        <br>•	Treat seeds with hot water (53−54°C) for 10−12 minutes before planting, to control primary infection at the seedling stage. To increase effectiveness of treatment, pre-soak seeds in cold water for eight hours.</p>\
        </p>";
      }

      else if (result.output_disease == "dead_heart") {
        document.getElementById("uiPredictedDisease").innerHTML =
          " Disease Detected :" + result.output_disease;
        document.getElementById("uiSolutionContent").innerHTML =
        "<p> <strong>Cause: </strong><br>\
        Stem borers can destroy rice at any stage of the plant from seedling to maturity.<br>They feed upon tillers and causes deadhearts or drying of the central tiller, during vegetative stage; and causes whiteheads at reproductive stage.\
        <br><br><strong> Prevention: </strong><br>\
        Improving soil fertility is the first step in managing brown spot. To do this:\
        <br>•	Use resistant varieties.\
        <br>• At seedbed and transplanting, handpick and destroy egg masses.\
        <br>•	Raise level of irrigation water periodically to submerge the eggs deposited on the lower parts of the plant.\
        <br>•	Before transplanting, cut the leaf-top to reduce carry-over of eggs from the seedbed to the field.\
        <br>•	Ensure proper timing of planting and synchronous planting, harvest crops at ground level to remove the larvae in stubble, remove stubble and volunteer rice, plow and flood the field.\
        <br>•	Encourage biological control agents: braconid, eulophid, mymarid, scelionid, chalcid, pteromalid and trichogrammatid wasps, ants, lady beetles, staphylinid beetles, gryllid, green meadow grasshopper, and mirid, phorid and platystomatid flies, bethylid, braconid, elasmid, eulophid, eurytomid and ichneumonid wasps, carabid and lady bird beetles, chloropid fly, gerrid and pentatomid bugs, ants, and mites,  earwigs, bird, asilid fly, vespid wasp, dragonflies, damselflies, and spiders.\
        <br>•	Bacteria and fungi also infect the larvae: mermithid nematode, chalcid, elasmid and eulophid.\
        <br>•	Apply nitrogen fertilizer in split following the recommended rate and time of application.\
        </p>";
      }

      else if (result.output_disease == "downy_mildew") {
        document.getElementById("uiPredictedDisease").innerHTML =
          " Disease Detected :" + result.output_disease;
        document.getElementById("uiSolutionContent").innerHTML =
        "<p> <strong>Cause: </strong><br>\
        The causal organism for Rice Downy mildew disease is Sclerophthora macrospora.\
        <br><br><strong> Prevention: </strong><br>\
        Cultural practices to control Downy Mildew:<br>\
        <br>•	Select and use only disease-free seeds for sowing. If possible, procure seeds that are resistant to downy mildew.\
        <br>•	Transplant only healthy seedlings. Practice crop rotation. After harvest, plough-under all the plant debris.\
        <br>•	Proper land preparation to make sure that soil is well drained.\
        <br>•	Provide adequate plant spacing, between the rows and the hills, to reduce the density of the canopy and minimize humidity. Pruning of new growth also helps in proper plant aeration.\
        <br>•	Remove infested plants and prune infested shoots. However, do these sanitation practices when the plants are not wet to prevent further spread of the disease.\
        <br>•	Properly dispose collected diseased-parts either by burning or burying them. Avoid overhead watering. It lengthens the duration of leaf wetness and favors further development of the disease.\
        </p>";
      }

      else if (result.output_disease == "tungro") {
        document.getElementById("uiPredictedDisease").innerHTML =
          " Disease Detected :" + result.output_disease;
        document.getElementById("uiSolutionContent").innerHTML =
        "<p> <strong>Cause: </strong><br>\
        Rice tungro disease is caused by the combination of two viruses, which are transmitted by leafhoppers. It causes leaf discoloration, stunted growth, reduced tiller numbers and sterile or partly filled grains.\
        <br><br> Tungro infects cultivated rice, some wild rice relatives and other grassy weeds commonly found in rice paddies.\
        <br><br><strong> Prevention: </strong><br>\
        Improving soil fertility is the first step in managing brown spot. To do this:\
        <br> Once a rice plant is infected by tungro, it cannot be cured.\
        <br>Preventive measures are more effective for the control of tungro than direct disease control measures. Using insecticides to control leafhoppers is often not effective, because green leafhoppers continuously move to surrounding fields and spread tungro rapidly in very short feeding times.\
        </p>";
      }

      else if (result.output_disease == "hispa") {
        document.getElementById("uiPredictedDisease").innerHTML =
          " Disease Detected :" + result.output_disease;
        document.getElementById("uiSolutionContent").innerHTML =
        "<p> <strong>Cause: </strong><br>\
        Rice hispa also called Dicladispa armigera (Olivier). It scrapes the upper surface of leaf blades leaving only the lower epidermis. It also tunnels through the leaf tissues. When damage is severe, plants become less vigorous.\
        <br><br><strong> Prevention: </strong><br>\
        A cultural control method that is recommended for the rice hispa is to avoid over fertilizing the field. Close plant spacing results in greater leaf densities that can tolerate higher hispa numbers. To prevent egg laying of the pests, the shoot tips can be cut. Clipping and burying shoots in the mud can reduce grub populations by 75−92%.\
        <br><br>Among the biological control agents, there are small wasps that attack the eggs and larvae. A reduviid bug eats upon the adults. There are three fungal pathogens that attack the adults.	\
        </p>";
      }
    })

    .catch((error) => {
      console.error("Error:", error);
    });
}

