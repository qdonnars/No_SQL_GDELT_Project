function start(){
    d3.select("svg").remove();

var select = document.getElementById("selectCountry1");
var select2 = document.getElementById("selectCountry2");
var pays1 = select.value;
var pays2 = select2.value;

var series = [
    [pays1, 0],[pays2, 0]];

// Datamaps expect data in format:
var dataset = {};

// We need to colorize every country based on "numberOfWhatever"
// colors should be uniq for every value.
// For this purpose we create palette(using min/max series-value)
var onlyValues = series.map(function(obj){ return obj[1]; });
var minValue = Math.min.apply(null, onlyValues),
        maxValue = Math.max.apply(null, onlyValues);

// create color palette function
// color can be whatever you wish
var paletteScale = d3.scale.linear()
        .domain([minValue,maxValue])
        .range(["#862d59","#00802b"]); // 

// fill dataset in appropriate format
series.forEach(function(item){ //
    // item example value ["USA", 70]
    var iso = item[0],
            value = item[1];
    dataset[iso] = { numberOfThings: value, fillColor: paletteScale(value) };
});

// render map
var arcs = new Datamap({
    element: document.getElementById('container'),
    element2: document.getElementById("arcs"),
    element3: document.getElementById("bubbles"),
    projection: 'mercator', // big world map
    // countries don't listed in dataset will be painted with this color
    fills: { defaultFill: '#B4BCC4', win: '#0fa0fa' },
    data: dataset,
    geographyConfig: {
        borderColor: '#DEDEDE',
        highlightBorderWidth: 2,
        // don't change color on mouse hover
        highlightFillColor: function(geo) {
            return geo['fillColor'] || '#F5F5F5';
        },
        // only change border
        highlightBorderColor: '#B7B7B7',
        // show desired information in tooltip
        popupTemplate: function(geo, data) {
            // don't show tooltip if country don't present in dataset
            if (!data) { return ; }
            // tooltip content
            return ['<div class="hoverinfo">',
                '<strong>', geo.properties.name, '</strong>',
                '<br>Count of mentions: <strong>', data.numberOfThings, '</strong>',
                '</div>'].join('');
        }
    }
});


document.getElementsByTagName("svg")[0].style.overflow="visible";

var pays11 = select.options[select.selectedIndex].text;
var pays22 = select2.options[select2.selectedIndex].text;

    impact(select.value, select2.value);
}

function data(){
    var data = {
    "type": "Topology",
    "objects": {
        "world": {
            "type": "GeometryCollection",
            "geometries": [{
                "type": "Polygon",
                "properties": {
                    "name": "Afghanistan"
                },
                "id": "AFG",
                "arcs": [
                    [0, 1, 2, 3, 4, 5]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Angola"
                },
                "id": "AGO",
                "arcs": [
                    [
                        [6, 7, 8, 9]
                    ],
                    [
                        [10, 11, 12]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Albania"
                },
                "id": "ALB",
                "arcs": [
                    [13, 14, 15, 16, 17]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "United Arab Emirates"
                },
                "id": "ARE",
                "arcs": [
                    [18, 19, 20, 21, 22]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Argentina"
                },
                "id": "ARG",
                "arcs": [
                    [
                        [23, 24]
                    ],
                    [
                        [25, 26, 27, 28, 29, 30]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Armenia"
                },
                "id": "ARM",
                "arcs": [
                    [31, 32, 33, 34, 35]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Antarctica"
                },
                "id": "ATA",
                "arcs": [
                    [
                        [36]
                    ],
                    [
                        [37]
                    ],
                    [
                        [38]
                    ],
                    [
                        [39]
                    ],
                    [
                        [40]
                    ],
                    [
                        [41]
                    ],
                    [
                        [42]
                    ],
                    [
                        [43]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "French Southern and Antarctic Lands"
                },
                "id": "ATF",
                "arcs": [
                    [44]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Australia"
                },
                "id": "AUS",
                "arcs": [
                    [
                        [45]
                    ],
                    [
                        [46]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Austria"
                },
                "id": "AUT",
                "arcs": [
                    [47, 48, 49, 50, 51, 52, 53]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Azerbaijan"
                },
                "id": "AZE",
                "arcs": [
                    [
                        [54, -35]
                    ],
                    [
                        [55, 56, -33, 57, 58]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Burundi"
                },
                "id": "BDI",
                "arcs": [
                    [59, 60, 61]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Belgium"
                },
                "id": "BEL",
                "arcs": [
                    [62, 63, 64, 65, 66]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Benin"
                },
                "id": "BEN",
                "arcs": [
                    [67, 68, 69, 70, 71]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Burkina Faso"
                },
                "id": "BFA",
                "arcs": [
                    [72, 73, 74, -70, 75, 76]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Bangladesh"
                },
                "id": "BGD",
                "arcs": [
                    [77, 78, 79]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Bulgaria"
                },
                "id": "BGR",
                "arcs": [
                    [80, 81, 82, 83, 84, 85]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "The Bahamas"
                },
                "id": "BHS",
                "arcs": [
                    [
                        [86]
                    ],
                    [
                        [87]
                    ],
                    [
                        [88]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Bosnia and Herzegovina"
                },
                "id": "BIH",
                "arcs": [
                    [89, 90, 91]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Belarus"
                },
                "id": "BLR",
                "arcs": [
                    [92, 93, 94, 95, 96]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Belize"
                },
                "id": "BLZ",
                "arcs": [
                    [97, 98, 99]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Bolivia"
                },
                "id": "BOL",
                "arcs": [
                    [100, 101, 102, 103, -31]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Brazil"
                },
                "id": "BRA",
                "arcs": [
                    [-27, 104, -103, 105, 106, 107, 108, 109, 110, 111, 112]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Brunei"
                },
                "id": "BRN",
                "arcs": [
                    [113, 114]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Bhutan"
                },
                "id": "BTN",
                "arcs": [
                    [115, 116]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Botswana"
                },
                "id": "BWA",
                "arcs": [
                    [117, 118, 119, 120]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Central African Republic"
                },
                "id": "CAF",
                "arcs": [
                    [121, 122, 123, 124, 125, 126, 127]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Canada"
                },
                "id": "CAN",
                "arcs": [
                    [
                        [128]
                    ],
                    [
                        [129]
                    ],
                    [
                        [130]
                    ],
                    [
                        [131]
                    ],
                    [
                        [132]
                    ],
                    [
                        [133]
                    ],
                    [
                        [134]
                    ],
                    [
                        [135]
                    ],
                    [
                        [136]
                    ],
                    [
                        [137]
                    ],
                    [
                        [138, 139, 140, 141]
                    ],
                    [
                        [142]
                    ],
                    [
                        [143]
                    ],
                    [
                        [144]
                    ],
                    [
                        [145]
                    ],
                    [
                        [146]
                    ],
                    [
                        [147]
                    ],
                    [
                        [148]
                    ],
                    [
                        [149]
                    ],
                    [
                        [150]
                    ],
                    [
                        [151]
                    ],
                    [
                        [152]
                    ],
                    [
                        [153]
                    ],
                    [
                        [154]
                    ],
                    [
                        [155]
                    ],
                    [
                        [156]
                    ],
                    [
                        [157]
                    ],
                    [
                        [158]
                    ],
                    [
                        [159]
                    ],
                    [
                        [160]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Switzerland"
                },
                "id": "CHE",
                "arcs": [
                    [-51, 161, 162, 163]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Chile"
                },
                "id": "CHL",
                "arcs": [
                    [
                        [-24, 164]
                    ],
                    [
                        [-30, 165, 166, -101]
                    ]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "China"
                },
                "id": "CHN",
                "arcs": [
                    [
                        [167]
                    ],
                    [
                        [168, 169, 170, 171, 172, 173, -117, 174, 175, 176, 177, -4, 178, 179, 180, 181, 182, 183]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Ivory Coast"
                },
                "id": "CIV",
                "arcs": [
                    [184, 185, 186, 187, -73, 188]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Cameroon"
                },
                "id": "CMR",
                "arcs": [
                    [189, 190, 191, 192, 193, 194, -128, 195]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Democratic Republic of the Congo"
                },
                "id": "COD",
                "arcs": [
                    [196, 197, -60, 198, 199, -10, 200, -13, 201, -126, 202]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Republic of the Congo"
                },
                "id": "COG",
                "arcs": [
                    [-12, 203, 204, -196, -127, -202]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Colombia"
                },
                "id": "COL",
                "arcs": [
                    [205, 206, 207, 208, 209, -107, 210]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Costa Rica"
                },
                "id": "CRI",
                "arcs": [
                    [211, 212, 213, 214]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Cuba"
                },
                "id": "CUB",
                "arcs": [
                    [215]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Northern Cyprus"
                },
                "id": "-99",
                "arcs": [
                    [216, 217]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Cyprus"
                },
                "id": "CYP",
                "arcs": [
                    [218, -218]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Czech Republic"
                },
                "id": "CZE",
                "arcs": [
                    [-53, 219, 220, 221]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Germany"
                },
                "id": "DEU",
                "arcs": [
                    [222, 223, -220, -52, -164, 224, 225, -64, 226, 227, 228]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Djibouti"
                },
                "id": "DJI",
                "arcs": [
                    [229, 230, 231, 232]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Denmark"
                },
                "id": "DNK",
                "arcs": [
                    [
                        [233]
                    ],
                    [
                        [-229, 234]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Dominican Republic"
                },
                "id": "DOM",
                "arcs": [
                    [235, 236]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Algeria"
                },
                "id": "DZA",
                "arcs": [
                    [237, 238, 239, 240, 241, 242, 243, 244]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Ecuador"
                },
                "id": "ECU",
                "arcs": [
                    [245, -206, 246]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Egypt"
                },
                "id": "EGY",
                "arcs": [
                    [247, 248, 249, 250, 251]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Eritrea"
                },
                "id": "ERI",
                "arcs": [
                    [252, 253, 254, -233]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Spain"
                },
                "id": "ESP",
                "arcs": [
                    [255, 256, 257, 258]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Estonia"
                },
                "id": "EST",
                "arcs": [
                    [259, 260, 261]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Ethiopia"
                },
                "id": "ETH",
                "arcs": [
                    [-232, 262, 263, 264, 265, 266, 267, -253]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Finland"
                },
                "id": "FIN",
                "arcs": [
                    [268, 269, 270, 271]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Fiji"
                },
                "id": "FJI",
                "arcs": [
                    [
                        [272]
                    ],
                    [
                        [273, 274]
                    ],
                    [
                        [275, -275]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Falkland Islands"
                },
                "id": "FLK",
                "arcs": [
                    [276]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "France"
                },
                "id": "FRA",
                "arcs": [
                    [
                        [277]
                    ],
                    [
                        [278, -225, -163, 279, 280, -257, 281, -66]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "French Guiana"
                },
                "id": "GUF",
                "arcs": [
                    [282, 283, 284, 285, -111]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Gabon"
                },
                "id": "GAB",
                "arcs": [
                    [286, 287, -190, -205]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "United Kingdom"
                },
                "id": "GBR",
                "arcs": [
                    [
                        [288, 289]
                    ],
                    [
                        [290]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Georgia"
                },
                "id": "GEO",
                "arcs": [
                    [291, 292, -58, -32, 293]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Ghana"
                },
                "id": "GHA",
                "arcs": [
                    [294, -189, -77, 295]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Guinea"
                },
                "id": "GIN",
                "arcs": [
                    [296, 297, 298, 299, 300, 301, -187]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Gambia"
                },
                "id": "GMB",
                "arcs": [
                    [302, 303]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Guinea Bissau"
                },
                "id": "GNB",
                "arcs": [
                    [304, 305, -300]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Equatorial Guinea"
                },
                "id": "GNQ",
                "arcs": [
                    [306, -191, -288]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Greece"
                },
                "id": "GRC",
                "arcs": [
                    [
                        [307]
                    ],
                    [
                        [308, -15, 309, -84, 310]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Greenland"
                },
                "id": "GRL",
                "arcs": [
                    [311]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Guatemala"
                },
                "id": "GTM",
                "arcs": [
                    [312, 313, -100, 314, 315, 316]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Guyana"
                },
                "id": "GUY",
                "arcs": [
                    [317, 318, -109, 319]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Honduras"
                },
                "id": "HND",
                "arcs": [
                    [320, 321, -316, 322, 323]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Croatia"
                },
                "id": "HRV",
                "arcs": [
                    [324, -92, 325, 326, 327, 328]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Haiti"
                },
                "id": "HTI",
                "arcs": [
                    [-237, 329]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Hungary"
                },
                "id": "HUN",
                "arcs": [
                    [-48, 330, 331, 332, 333, -329, 334]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Indonesia"
                },
                "id": "IDN",
                "arcs": [
                    [
                        [335]
                    ],
                    [
                        [336, 337]
                    ],
                    [
                        [338]
                    ],
                    [
                        [339]
                    ],
                    [
                        [340]
                    ],
                    [
                        [341]
                    ],
                    [
                        [342]
                    ],
                    [
                        [343]
                    ],
                    [
                        [344, 345]
                    ],
                    [
                        [346]
                    ],
                    [
                        [347]
                    ],
                    [
                        [348, 349]
                    ],
                    [
                        [350]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "India"
                },
                "id": "IND",
                "arcs": [
                    [-177, 351, -175, -116, -174, 352, -80, 353, 354]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Ireland"
                },
                "id": "IRL",
                "arcs": [
                    [355, -289]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Iran"
                },
                "id": "IRN",
                "arcs": [
                    [356, -6, 357, 358, 359, 360, -55, -34, -57, 361]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Iraq"
                },
                "id": "IRQ",
                "arcs": [
                    [362, 363, 364, 365, 366, 367, -360]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Iceland"
                },
                "id": "ISL",
                "arcs": [
                    [368]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Israel"
                },
                "id": "ISR",
                "arcs": [
                    [369, 370, 371, -252, 372, 373, 374]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Italy"
                },
                "id": "ITA",
                "arcs": [
                    [
                        [375]
                    ],
                    [
                        [376]
                    ],
                    [
                        [377, 378, -280, -162, -50]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Jamaica"
                },
                "id": "JAM",
                "arcs": [
                    [379]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Jordan"
                },
                "id": "JOR",
                "arcs": [
                    [-370, 380, -366, 381, 382, -372, 383]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Japan"
                },
                "id": "JPN",
                "arcs": [
                    [
                        [384]
                    ],
                    [
                        [385]
                    ],
                    [
                        [386]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Kazakhstan"
                },
                "id": "KAZ",
                "arcs": [
                    [387, 388, 389, 390, -181, 391]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Kenya"
                },
                "id": "KEN",
                "arcs": [
                    [392, 393, 394, 395, -265, 396]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Kyrgyzstan"
                },
                "id": "KGZ",
                "arcs": [
                    [-392, -180, 397, 398]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Cambodia"
                },
                "id": "KHM",
                "arcs": [
                    [399, 400, 401, 402]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "South Korea"
                },
                "id": "KOR",
                "arcs": [
                    [403, 404]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Kosovo"
                },
                "id": "-99",
                "arcs": [
                    [-18, 405, 406, 407]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Kuwait"
                },
                "id": "KWT",
                "arcs": [
                    [408, 409, -364]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Laos"
                },
                "id": "LAO",
                "arcs": [
                    [410, 411, -172, 412, -401]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Lebanon"
                },
                "id": "LBN",
                "arcs": [
                    [-374, 413, 414]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Liberia"
                },
                "id": "LBR",
                "arcs": [
                    [415, 416, -297, -186]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Libya"
                },
                "id": "LBY",
                "arcs": [
                    [417, -245, 418, 419, -250, 420, 421]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Sri Lanka"
                },
                "id": "LKA",
                "arcs": [
                    [422]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Lesotho"
                },
                "id": "LSO",
                "arcs": [
                    [423]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Lithuania"
                },
                "id": "LTU",
                "arcs": [
                    [424, 425, 426, -93, 427]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Luxembourg"
                },
                "id": "LUX",
                "arcs": [
                    [-226, -279, -65]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Latvia"
                },
                "id": "LVA",
                "arcs": [
                    [428, -262, 429, -94, -427]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Morocco"
                },
                "id": "MAR",
                "arcs": [
                    [-242, 430, 431]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Moldova"
                },
                "id": "MDA",
                "arcs": [
                    [432, 433]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Madagascar"
                },
                "id": "MDG",
                "arcs": [
                    [434]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Mexico"
                },
                "id": "MEX",
                "arcs": [
                    [435, -98, -314, 436, 437]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Macedonia"
                },
                "id": "MKD",
                "arcs": [
                    [-408, 438, -85, -310, -14]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Mali"
                },
                "id": "MLI",
                "arcs": [
                    [439, -239, 440, -74, -188, -302, 441]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Myanmar"
                },
                "id": "MMR",
                "arcs": [
                    [442, -78, -353, -173, -412, 443]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Montenegro"
                },
                "id": "MNE",
                "arcs": [
                    [444, -326, -91, 445, -406, -17]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Mongolia"
                },
                "id": "MNG",
                "arcs": [
                    [446, -183]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Mozambique"
                },
                "id": "MOZ",
                "arcs": [
                    [447, 448, 449, 450, 451, 452, 453, 454]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Mauritania"
                },
                "id": "MRT",
                "arcs": [
                    [455, 456, 457, -240, -440]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Malawi"
                },
                "id": "MWI",
                "arcs": [
                    [-455, 458, 459]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Malaysia"
                },
                "id": "MYS",
                "arcs": [
                    [
                        [460, 461]
                    ],
                    [
                        [-349, 462, -115, 463]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Namibia"
                },
                "id": "NAM",
                "arcs": [
                    [464, -8, 465, -119, 466]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "New Caledonia"
                },
                "id": "NCL",
                "arcs": [
                    [467]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Niger"
                },
                "id": "NER",
                "arcs": [
                    [-75, -441, -238, -418, 468, -194, 469, -71]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Nigeria"
                },
                "id": "NGA",
                "arcs": [
                    [470, -72, -470, -193]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Nicaragua"
                },
                "id": "NIC",
                "arcs": [
                    [471, -324, 472, -213]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Netherlands"
                },
                "id": "NLD",
                "arcs": [
                    [-227, -63, 473]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Norway"
                },
                "id": "NOR",
                "arcs": [
                    [
                        [474, -272, 475, 476]
                    ],
                    [
                        [477]
                    ],
                    [
                        [478]
                    ],
                    [
                        [479]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Nepal"
                },
                "id": "NPL",
                "arcs": [
                    [-352, -176]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "New Zealand"
                },
                "id": "NZL",
                "arcs": [
                    [
                        [480]
                    ],
                    [
                        [481]
                    ]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Oman"
                },
                "id": "OMN",
                "arcs": [
                    [
                        [482, 483, -22, 484]
                    ],
                    [
                        [-20, 485]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Pakistan"
                },
                "id": "PAK",
                "arcs": [
                    [-178, -355, 486, -358, -5]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Panama"
                },
                "id": "PAN",
                "arcs": [
                    [487, -215, 488, -208]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Peru"
                },
                "id": "PER",
                "arcs": [
                    [-167, 489, -247, -211, -106, -102]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Philippines"
                },
                "id": "PHL",
                "arcs": [
                    [
                        [490]
                    ],
                    [
                        [491]
                    ],
                    [
                        [492]
                    ],
                    [
                        [493]
                    ],
                    [
                        [494]
                    ],
                    [
                        [495]
                    ],
                    [
                        [496]
                    ]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Papua New Guinea"
                },
                "id": "PNG",
                "arcs": [
                    [
                        [497]
                    ],
                    [
                        [498]
                    ],
                    [
                        [-345, 499]
                    ],
                    [
                        [500]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Poland"
                },
                "id": "POL",
                "arcs": [
                    [-224, 501, 502, -428, -97, 503, 504, -221]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Puerto Rico"
                },
                "id": "PRI",
                "arcs": [
                    [505]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "North Korea"
                },
                "id": "PRK",
                "arcs": [
                    [506, 507, -405, 508, -169]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Portugal"
                },
                "id": "PRT",
                "arcs": [
                    [-259, 509]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Paraguay"
                },
                "id": "PRY",
                "arcs": [
                    [-104, -105, -26]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Qatar"
                },
                "id": "QAT",
                "arcs": [
                    [510, 511]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Romania"
                },
                "id": "ROU",
                "arcs": [
                    [512, -434, 513, 514, -81, 515, -333]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Russia"
                },
                "id": "RUS",
                "arcs": [
                    [
                        [516]
                    ],
                    [
                        [-503, 517, -425]
                    ],
                    [
                        [518, 519]
                    ],
                    [
                        [520]
                    ],
                    [
                        [521]
                    ],
                    [
                        [522]
                    ],
                    [
                        [523]
                    ],
                    [
                        [524]
                    ],
                    [
                        [525]
                    ],
                    [
                        [526, -507, -184, -447, -182, -391, 527, -59, -293, 528, 529, -95, -430, -261, 530, -269, -475, 531, -520]
                    ],
                    [
                        [532]
                    ],
                    [
                        [533]
                    ],
                    [
                        [534]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Rwanda"
                },
                "id": "RWA",
                "arcs": [
                    [535, -61, -198, 536]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Western Sahara"
                },
                "id": "ESH",
                "arcs": [
                    [-241, -458, 537, -431]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Saudi Arabia"
                },
                "id": "SAU",
                "arcs": [
                    [538, -382, -365, -410, 539, -512, 540, -23, -484, 541]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Sudan"
                },
                "id": "SDN",
                "arcs": [
                    [542, 543, -123, 544, -421, -249, 545, -254, -268, 546]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "South Sudan"
                },
                "id": "SSD",
                "arcs": [
                    [547, -266, -396, 548, -203, -125, 549, -543]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Senegal"
                },
                "id": "SEN",
                "arcs": [
                    [550, -456, -442, -301, -306, 551, -304]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Solomon Islands"
                },
                "id": "SLB",
                "arcs": [
                    [
                        [552]
                    ],
                    [
                        [553]
                    ],
                    [
                        [554]
                    ],
                    [
                        [555]
                    ],
                    [
                        [556]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Sierra Leone"
                },
                "id": "SLE",
                "arcs": [
                    [557, -298, -417]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "El Salvador"
                },
                "id": "SLV",
                "arcs": [
                    [558, -317, -322]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Somaliland"
                },
                "id": "-99",
                "arcs": [
                    [-263, -231, 559, 560]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Somalia"
                },
                "id": "SOM",
                "arcs": [
                    [-397, -264, -561, 561]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Republic of Serbia"
                },
                "id": "SRB",
                "arcs": [
                    [-86, -439, -407, -446, -90, -325, -334, -516]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Suriname"
                },
                "id": "SUR",
                "arcs": [
                    [562, -285, 563, -283, -110, -319]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Slovakia"
                },
                "id": "SVK",
                "arcs": [
                    [-505, 564, -331, -54, -222]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Slovenia"
                },
                "id": "SVN",
                "arcs": [
                    [-49, -335, -328, 565, -378]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Sweden"
                },
                "id": "SWE",
                "arcs": [
                    [-476, -271, 566]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Swaziland"
                },
                "id": "SWZ",
                "arcs": [
                    [567, -451]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Syria"
                },
                "id": "SYR",
                "arcs": [
                    [-381, -375, -415, 568, 569, -367]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Chad"
                },
                "id": "TCD",
                "arcs": [
                    [-469, -422, -545, -122, -195]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Togo"
                },
                "id": "TGO",
                "arcs": [
                    [570, -296, -76, -69]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Thailand"
                },
                "id": "THA",
                "arcs": [
                    [571, -462, 572, -444, -411, -400]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Tajikistan"
                },
                "id": "TJK",
                "arcs": [
                    [-398, -179, -3, 573]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Turkmenistan"
                },
                "id": "TKM",
                "arcs": [
                    [-357, 574, -389, 575, -1]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "East Timor"
                },
                "id": "TLS",
                "arcs": [
                    [576, -337]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Trinidad and Tobago"
                },
                "id": "TTO",
                "arcs": [
                    [577]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Tunisia"
                },
                "id": "TUN",
                "arcs": [
                    [-244, 578, -419]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Turkey"
                },
                "id": "TUR",
                "arcs": [
                    [
                        [-294, -36, -361, -368, -570, 579]
                    ],
                    [
                        [-311, -83, 580]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Taiwan"
                },
                "id": "TWN",
                "arcs": [
                    [581]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "United Republic of Tanzania"
                },
                "id": "TZA",
                "arcs": [
                    [-394, 582, -448, -460, 583, -199, -62, -536, 584]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Uganda"
                },
                "id": "UGA",
                "arcs": [
                    [-537, -197, -549, -395, -585]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Ukraine"
                },
                "id": "UKR",
                "arcs": [
                    [-530, 585, -514, -433, -513, -332, -565, -504, -96]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Uruguay"
                },
                "id": "URY",
                "arcs": [
                    [-113, 586, -28]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "United States of America"
                },
                "id": "USA",
                "arcs": [
                    [
                        [587]
                    ],
                    [
                        [588]
                    ],
                    [
                        [589]
                    ],
                    [
                        [590]
                    ],
                    [
                        [591]
                    ],
                    [
                        [592, -438, 593, -139]
                    ],
                    [
                        [594]
                    ],
                    [
                        [595]
                    ],
                    [
                        [596]
                    ],
                    [
                        [-141, 597]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Uzbekistan"
                },
                "id": "UZB",
                "arcs": [
                    [-576, -388, -399, -574, -2]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Venezuela"
                },
                "id": "VEN",
                "arcs": [
                    [598, -320, -108, -210]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Vietnam"
                },
                "id": "VNM",
                "arcs": [
                    [599, -402, -413, -171]
                ]
            }, {
                "type": "MultiPolygon",
                "properties": {
                    "name": "Vanuatu"
                },
                "id": "VUT",
                "arcs": [
                    [
                        [600]
                    ],
                    [
                        [601]
                    ]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "West Bank"
                },
                "id": "PSE",
                "arcs": [
                    [-384, -371]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Yemen"
                },
                "id": "YEM",
                "arcs": [
                    [602, -542, -483]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "South Africa"
                },
                "id": "ZAF",
                "arcs": [
                    [-467, -118, 603, -452, -568, -450, 604],
                    [-424]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Zambia"
                },
                "id": "ZMB",
                "arcs": [
                    [-459, -454, 605, -120, -466, -7, -200, -584]
                ]
            }, {
                "type": "Polygon",
                "properties": {
                    "name": "Zimbabwe"
                },
                "id": "ZWE",
                "arcs": [
                    [-604, -121, -606, -453]
                ]
            }]
        }
    }
}


var select = document.getElementById("selectCountry1");
var select2 = document.getElementById("selectCountry2");

for(var j = 0; j < data["objects"]["world"]["geometries"].length; j++) {
    var name = data["objects"]["world"]["geometries"][j]["properties"]["name"];
    var el2 = document.createElement("option");
    el2.innerHTML = name;
    el2.value =  data["objects"]["world"]["geometries"][j]["id"];
    select.appendChild(el2);
}

for(var j = 0; j < data["objects"]["world"]["geometries"].length; j++) {
    var name = data["objects"]["world"]["geometries"][j]["properties"]["name"];
    var el2 = document.createElement("option");
    el2.innerHTML = name;
    el2.value =  data["objects"]["world"]["geometries"][j]["id"];
    select2.appendChild(el2);
}

}

function impact(country1, country2) {
            var convCountry = {'ABW': 'AW',
                    'AFG': 'AF',
                    'AGO': 'AO',
                    'AIA': 'AI',
                    'ALB': 'AL',
                    'AND': 'AD',
                    'ARE': 'AE',
                    'ARG': 'AR',
                    'ARM': 'AM',
                    'ASM': 'AS',
                    'ATA': 'AQ',
                    'ATF': 'TF',
                    'ATG': 'AG',
                    'AUS': 'AU',
                    'AUT': 'AT',
                    'AZE': 'AZ',
                    'BDI': 'BI',
                    'BEL': 'BE',
                    'BEN': 'BJ',
                    'BES': 'BQ',
                    'BFA': 'BF',
                    'BGD': 'BD',
                    'BGR': 'BG',
                    'BHR': 'BH',
                    'BHS': 'BS',
                    'BIH': 'BA',
                    'BLM': 'BL',
                    'BLR': 'BY',
                    'BLZ': 'BZ',
                    'BMU': 'BM',
                    'BOL': 'BO',
                    'BRA': 'BR',
                    'BRB': 'BB',
                    'BRN': 'BN',
                    'BTN': 'BT',
                    'BVT': 'BV',
                    'BWA': 'BW',
                    'CAF': 'CF',
                    'CAN': 'CA',
                    'CCK': 'CC',
                    'CHE': 'CH',
                    'CHL': 'CL',
                    'CHN': 'CN',
                    'CIV': 'CI',
                    'CMR': 'CM',
                    'COD': 'CD',
                    'COG': 'CG',
                    'COK': 'CK',
                    'COL': 'CO',
                    'COM': 'KM',
                    'CPV': 'CV',
                    'CRI': 'CR',
                    'CUB': 'CU',
                    'CUW': 'CW',
                    'CXR': 'CX',
                    'CYM': 'KY',
                    'CYP': 'CY',
                    'CZE': 'CZ',
                    'DEU': 'DE',
                    'DJI': 'DJ',
                    'DMA': 'DM',
                    'DNK': 'DK',
                    'DOM': 'DO',
                    'DZA': 'DZ',
                    'ECU': 'EC',
                    'EGY': 'EG',
                    'ERI': 'ER',
                    'ESH': 'EH',
                    'ESP': 'ES',
                    'EST': 'EE',
                    'ETH': 'ET',
                    'FIN': 'FI',
                    'FJI': 'FJ',
                    'FLK': 'FK',
                    'FRA': 'FR',
                    'FRO': 'FO',
                    'FSM': 'FM',
                    'GAB': 'GA',
                    'GBR': 'GB',
                    'GEO': 'GE',
                    'GGY': 'GG',
                    'GHA': 'GH',
                    'GIB': 'GI',
                    'GIN': 'GN',
                    'GLP': 'GP',
                    'GMB': 'GM',
                    'GNB': 'GW',
                    'GNQ': 'GQ',
                    'GRC': 'GR',
                    'GRD': 'GD',
                    'GRL': 'GL',
                    'GTM': 'GT',
                    'GUF': 'GF',
                    'GUM': 'GU',
                    'GUY': 'GY',
                    'HKG': 'HK',
                    'HMD': 'HM',
                    'HND': 'HN',
                    'HRV': 'HR',
                    'HTI': 'HT',
                    'HUN': 'HU',
                    'IDN': 'ID',
                    'IMN': 'IM',
                    'IND': 'IN',
                    'IOT': 'IO',
                    'IRL': 'IE',
                    'IRN': 'IR',
                    'IRQ': 'IQ',
                    'ISL': 'IS',
                    'ISR': 'IL',
                    'ITA': 'IT',
                    'JAM': 'JM',
                    'JEY': 'JE',
                    'JOR': 'JO',
                    'JPN': 'JP',
                    'KAZ': 'KZ',
                    'KEN': 'KE',
                    'KGZ': 'KG',
                    'KHM': 'KH',
                    'KIR': 'KI',
                    'KNA': 'KN',
                    'KOR': 'KR',
                    'KWT': 'KW',
                    'LAO': 'LA',
                    'LBN': 'LB',
                    'LBR': 'LR',
                    'LBY': 'LY',
                    'LCA': 'LC',
                    'LIE': 'LI',
                    'LKA': 'LK',
                    'LSO': 'LS',
                    'LTU': 'LT',
                    'LUX': 'LU',
                    'LVA': 'LV',
                    'MAC': 'MO',
                    'MAF': 'MF',
                    'MAR': 'MA',
                    'MCO': 'MC',
                    'MDA': 'MD',
                    'MDG': 'MG',
                    'MDV': 'MV',
                    'MEX': 'MX',
                    'MHL': 'MH',
                    'MKD': 'MK',
                    'MLI': 'ML',
                    'MLT': 'MT',
                    'MMR': 'MM',
                    'MNE': 'ME',
                    'MNG': 'MN',
                    'MNP': 'MP',
                    'MOZ': 'MZ',
                    'MRT': 'MR',
                    'MSR': 'MS',
                    'MTQ': 'MQ',
                    'MUS': 'MU',
                    'MWI': 'MW',
                    'MYS': 'MY',
                    'MYT': 'YT',
                    'NCL': 'NC',
                    'NER': 'NE',
                    'NFK': 'NF',
                    'NGA': 'NG',
                    'NIC': 'NI',
                    'NIU': 'NU',
                    'NLD': 'NL',
                    'NOR': 'NO',
                    'NPL': 'NP',
                    'NRU': 'NR',
                    'NZL': 'NZ',
                    'OMN': 'OM',
                    'PAK': 'PK',
                    'PAN': 'PA',
                    'PCN': 'PN',
                    'PER': 'PE',
                    'PHL': 'PH',
                    'PLW': 'PW',
                    'PNG': 'PG',
                    'POL': 'PL',
                    'PRI': 'PR',
                    'PRK': 'KP',
                    'PRT': 'PT',
                    'PRY': 'PY',
                    'PSE': 'PS',
                    'PYF': 'PF',
                    'QAT': 'QA',
                    'REU': 'RE',
                    'ROU': 'RO',
                    'RUS': 'RU',
                    'RWA': 'RW',
                    'SAU': 'SA',
                    'SDN': 'SD',
                    'SEN': 'SN',
                    'SGP': 'SG',
                    'SGS': 'GS',
                    'SHN': 'SH',
                    'SJM': 'SJ',
                    'SLB': 'SB',
                    'SLE': 'SL',
                    'SLV': 'SV',
                    'SMR': 'SM',
                    'SOM': 'SO',
                    'SPM': 'PM',
                    'SRB': 'RS',
                    'SSD': 'SS',
                    'STP': 'ST',
                    'SUR': 'SR',
                    'SVK': 'SK',
                    'SVN': 'SI',
                    'SWE': 'SE',
                    'SWZ': 'SZ',
                    'SXM': 'SX',
                    'SYC': 'SC',
                    'SYR': 'SY',
                    'TCA': 'TC',
                    'TCD': 'TD',
                    'TGO': 'TG',
                    'THA': 'TH',
                    'TJK': 'TJ',
                    'TKL': 'TK',
                    'TKM': 'TM',
                    'TLS': 'TL',
                    'TON': 'TO',
                    'TTO': 'TT',
                    'TUN': 'TN',
                    'TUR': 'TR',
                    'TUV': 'TV',
                    'TWN': 'TW',
                    'TZA': 'TZ',
                    'UGA': 'UG',
                    'UKR': 'UA',
                    'UMI': 'UM',
                    'URY': 'UY',
                    'USA': 'US',
                    'UZB': 'UZ',
                    'VAT': 'VA',
                    'VCT': 'VC',
                    'VEN': 'VE',
                    'VGB': 'VG',
                    'VIR': 'VI',
                    'VNM': 'VN',
                    'VUT': 'VU',
                    'WLF': 'WF',
                    'WSM': 'WS',
                    'YEM': 'YE',
                    'ZAF': 'ZA',
                    'ZMB': 'ZM',
                    'ZWE': 'ZW'};

                var month = document.getElementsByTagName('input')[0].value;
                month = month.replace("-", "")

                var newURL='http://localhost:5000/'+convCountry[country1]+'/'+convCountry[country2]+'/'+ month;

                $.ajax({
                     url: newURL,
                     type: 'GET',
                     dataType: 'json',
                     contentType: 'application/json',
                     charset: 'utf-8',
                     beforeSend:  function () {
                         document.getElementById("imagerefresh").style.display="block";
                         document.getElementById("results").style.display="none";
                     },
                     success: function (data, textStatus, xhr) {
                        d3.select("svg").remove();
                        var select = document.getElementById("selectCountry1");
                        var select2 = document.getElementById("selectCountry2");
                        var pays1 = select.value;
                        var pays2 = select2.value;
                        var count1 = data["mention_C1_C2"];
                        var count2 = data["mention_C2_C1"];

                    var series = [
                            [pays1, count1],[pays2, count2]];

                    // Datamaps expect data in format:
                    var dataset = {};

                    // We need to colorize every country based on "numberOfWhatever"
                    // colors should be uniq for every value.
                    // For this purpose we create palette(using min/max series-value)
                    var onlyValues = series.map(function(obj){ return obj[1]; });
                    var minValue = Math.min.apply(null, onlyValues),
                            maxValue = Math.max.apply(null, onlyValues);

                    // create color palette function
                    // color can be whatever you wish
                    var paletteScale = d3.scale.linear()
                            .domain([minValue,maxValue])
                            .range(["#862d59","#00802b"]); // 

                    // fill dataset in appropriate format
                    series.forEach(function(item){ //
                    // item example value ["USA", 70]
                    var iso = item[0],
                            value = item[1];
                    dataset[iso] = { numberOfThings: value, fillColor: paletteScale(value) };
                    });

                    // render map
                    var arcs = new Datamap({
                        element: document.getElementById('container'),
                        element2: document.getElementById("arcs"),
                        element3: document.getElementById("bubbles"),
                        projection: 'mercator', // big world map
                        // countries don't listed in dataset will be painted with this color
                        fills: { defaultFill: '#B4BCC4', win: '#0fa0fa' },
                        data: dataset,
                        geographyConfig: {
                            borderColor: '#DEDEDE',
                            highlightBorderWidth: 2,
                            // don't change color on mouse hover
                            highlightFillColor: function(geo) {
                                return geo['fillColor'] || '#F5F5F5';
                            },
                            // only change border
                            highlightBorderColor: '#B7B7B7',
                            // show desired information in tooltip
                            popupTemplate: function(geo, data) {
                                // don't show tooltip if country don't present in dataset
                                if (!data) { return ; }
                                // tooltip content
                                return ['<div class="hoverinfo">',
                                    '<strong>', geo.properties.name, '</strong>',
                                    '<br>Count of mentions: <strong>', data.numberOfThings, '</strong>',
                                    '</div>'].join('');
                            }
                        }
                    });


                    document.getElementsByTagName("svg")[0].style.overflow="visible";
                    
                    var pays11 = select.options[select.selectedIndex].text;
                    var pays22 = select2.options[select2.selectedIndex].text;

                     arcs.arc([
                  {
                    origin: pays1,
                    destination: pays2
                  }
                  ],  {strokeWidth: 2, strokeColor: 'rgba(22, 96, 171, 1)', arcSharpness: 0.5});

                    document.getElementById('POS_C1_C2').innerHTML = "Positive Impact of "+pays11+" on "+pays22+ " :";
                    document.getElementById('NEG_C1_C2').innerHTML = "Negative Impact of "+pays11+" on "+pays22+ " :";
                    document.getElementById('POS_C2_C1').innerHTML = "Positive Impact of "+pays22+" on "+pays11+ " :";
                    document.getElementById('NEG_C2_C1').innerHTML = "Negative Impact of "+pays22+" on "+pays11+ " :";


                    document.getElementById("imagerefresh").style.display="none";
                    document.getElementById("results").style.display="block";
                    document.getElementById("POS_C1_C2").style.display="block";
                    document.getElementById("NEG_C1_C2").style.display="block";
                    document.getElementById("POS_C2_C1").style.display="block";
                    document.getElementById("NEG_C2_C1").style.display="block";
                    console.log(data);
                    document.getElementById("imp1_C1_C2_pos").value=data["imp1_C1_C2_pos"]
                    document.getElementById("imp1_C1_C2_neg").value=data["imp1_C1_C2_neg"]
                    document.getElementById("imp1_C2_C1_pos").value=data["imp1_C2_C1_pos"]
                    document.getElementById("imp1_C2_C1_neg").value=data["imp1_C2_C1_neg"]
                    


                     if (data["imp1_C1_C2_pos"] > data["imp1_C1_C2_neg"]){
                     	document.getElementById("imp1_C1_C2_pos").style.fontWeight="bold";
                     	document.getElementById("imp1_C1_C2_pos").style.fontSize="15pt";
                        document.getElementById("imp1_C1_C2_neg").style.fontWeight="normal";
                        document.getElementById("imp1_C1_C2_neg").style.fontSize="12pt";

                     }

                     if (data["imp1_C1_C2_pos"] < data["imp1_C1_C2_neg"]) {
						document.getElementById("imp1_C1_C2_neg").style.fontWeight="bold";
						document.getElementById("imp1_C1_C2_neg").style.fontSize="15pt";
                        document.getElementById("imp1_C1_C2_pos").style.fontWeight="normal";
                        document.getElementById("imp1_C1_C2_pos").style.fontSize="12pt";
                     }

                     if (data["imp1_C2_C1_pos"] > data["imp1_C2_C1_neg"]){
                        document.getElementById("imp1_C2_C1_pos").style.fontWeight="bold";
                        document.getElementById("imp1_C2_C1_pos").style.fontSize="15pt";
                        document.getElementById("imp1_C2_C1_neg").style.fontWeight="normal";
                        document.getElementById("imp1_C2_C1_neg").style.fontSize="12pt";

                     }

                     if (data["imp1_C2_C1_pos"] < data["imp1_C2_C1_neg"]) {
                        document.getElementById("imp1_C2_C1_neg").style.fontWeight="bold";
                        document.getElementById("imp1_C2_C1_neg").style.fontSize="15pt";
                        document.getElementById("imp1_C2_C1_pos").style.fontWeight="normal";
                        document.getElementById("imp1_C2_C1_pos").style.fontSize="12pt";
                     }

                     },
                     error: function (xhr, textStatus, errorThrown) {
                         console.log('Error in Operation');
                     }
                 });


}