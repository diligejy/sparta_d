'use strict';

// 예제 1

// let fruitsBasket = ['사과','감','감','배','포도','포도','딸기','포도','감','수박','딸기']

// let count = 0;

// for(let i = 0; i < fruitsBasket.length; i++){
//     if (fruitsBasket[i] === '딸기') {
// 		count += 1;
//     }
// }

// console.log(count);

// function countFruit(name) {
//     let count = 0;
//     for (let i = 0; i < fruitsBasket.length; i++){
//         if (fruitsBasket[i] === name){
//             count += 1;
//         }
//     }
//     console.log(count);
// }

// countFruit('수박');

// 2번
let cityAir = [
    {
    MSRDT: "201912052100",
    MSRRGN_NM: "도심권",
    MSRSTE_NM: "중구",
    PM10: 22,
    PM25: 14,
    O3: 0.018,
    NO2: 0.015,
    CO: 0.4,
    SO2: 0.002,
    IDEX_NM: "좋음",
    IDEX_MVL: 31,
    ARPLT_MAIN: "O3",
},
{
    MSRDT: "201912052100",
    MSRRGN_NM: "도심권",
    MSRSTE_NM: "종로구",
    PM10: 24,
    PM25: 18,
    O3: 0.013,
    NO2: 0.016,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 39,
    ARPLT_MAIN: "PM25",
},
{
    MSRDT: "201912052100",
    MSRRGN_NM: "도심권",
    MSRSTE_NM: "용산구",
    PM10: 0,
    PM25: 15,
    O3: 0.012,
    NO2: 0.027,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "점검중",
    IDEX_MVL: -99,
    ARPLT_MAIN: "점검중",
},
{
    MSRDT: "201912052100",
    MSRRGN_NM: "서북권",
    MSRSTE_NM: "은평구",
    PM10: 36,
    PM25: 14,
    O3: 0.019,
    NO2: 0.018,
    CO: 0.5,
    SO2: 0.005,
    IDEX_NM: "좋음",
    IDEX_MVL: 42,
    ARPLT_MAIN: "PM10",
},
{
    MSRDT: "201912052100",
    MSRRGN_NM: "서북권",
    MSRSTE_NM: "서대문구",
    PM10: 28,
    PM25: 9,
    O3: 0.018,
    NO2: 0.015,
    CO: 0.6,
    SO2: 0.004,
    IDEX_NM: "좋음",
    IDEX_MVL: 37,
    ARPLT_MAIN: "PM10",
},
{
    MSRDT: "201912052100",
    MSRRGN_NM: "서북권",
    MSRSTE_NM: "마포구",
    PM10: 26,
    PM25: 8,
    O3: 0.012,
    NO2: 0.021,
    CO: 0.5,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 36,
    ARPLT_MAIN: "NO2",
},
{
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "광진구",
    PM10: 17,
    PM25: 9,
    O3: 0.018,
    NO2: 0.016,
    CO: 0.6,
    SO2: 0.001,
    IDEX_NM: "좋음",
    IDEX_MVL: 31,
    ARPLT_MAIN: "O3",
},
{
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "성동구",
    PM10: 21,
    PM25: 12,
    O3: 0.018,
    NO2: 0.017,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 33,
    ARPLT_MAIN: "PM25",
},
{
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "중랑구",
    PM10: 27,
    PM25: 10,
    O3: 0.015,
    NO2: 0.019,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 34,
    ARPLT_MAIN: "PM10",
},
{
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "동대문구",
    PM10: 26,
    PM25: 9,
    O3: 0.016,
    NO2: 0.017,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 34,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "성북구",
    PM10: 27,
    PM25: 8,
    O3: 0.022,
    NO2: 0.014,
    CO: 0.5,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 37,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "도봉구",
    PM10: 25,
    PM25: 12,
    O3: 0.024,
    NO2: 0.011,
    CO: 0.3,
    SO2: 0.002,
    IDEX_NM: "좋음",
    IDEX_MVL: 41,
    ARPLT_MAIN: "O3",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "강북구",
    PM10: 30,
    PM25: 15,
    O3: 0.022,
    NO2: 0.02,
    CO: 0.4,
    SO2: 0.002,
    IDEX_NM: "좋음",
    IDEX_MVL: 39,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "노원구",
    PM10: 21,
    PM25: 14,
    O3: 0.017,
    NO2: 0.016,
    CO: 0.4,
    SO2: 0.004,
    IDEX_NM: "좋음",
    IDEX_MVL: 36,
    ARPLT_MAIN: "PM25",
},
{
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "강서구",
    PM10: 36,
    PM25: 16,
    O3: 0.021,
    NO2: 0.013,
    CO: 0.4,
    SO2: 0.004,
    IDEX_NM: "좋음",
    IDEX_MVL: 42,
    ARPLT_MAIN: "PM10",
},
{
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "구로구",
    PM10: 23,
    PM25: 10,
    O3: 0.022,
    NO2: 0.016,
    CO: 0.3,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 37,
    ARPLT_MAIN: "O3",
},
{
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "영등포구",
    PM10: 29,
    PM25: 15,
    O3: 0.01,
    NO2: 0.022,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 41,
    ARPLT_MAIN: "PM10",
},
{
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "동작구",
    PM10: 29,
    PM25: 15,
    O3: 0.012,
    NO2: 0.023,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 41,
    ARPLT_MAIN: "PM10",
},
{
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "관악구",
    PM10: 27,
    PM25: 12,
    O3: 0.012,
    NO2: 0.022,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 37,
    ARPLT_MAIN: "NO2",
},
{
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "금천구",
    PM10: 25,
    PM25: 15,
    O3: 0.015,
    NO2: 0.02,
    CO: 0.4,
    SO2: 0.004,
    IDEX_NM: "좋음",
    IDEX_MVL: 43,
    ARPLT_MAIN: "PM25",
},
{
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "양천구",
    PM10: 0,
    PM25: 14,
    O3: 0.016,
    NO2: 0.017,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "점검중",
    IDEX_MVL: -99,
    ARPLT_MAIN: "점검중",
},
{
    MSRDT: "201912052100",
    MSRRGN_NM: "동남권",
    MSRSTE_NM: "강남구",
    PM10: 31,
    PM25: 16,
    O3: 0.018,
    NO2: 0.018,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 39,
    ARPLT_MAIN: "PM10",
},
{
    MSRDT: "201912052100",
    MSRRGN_NM: "동남권",
    MSRSTE_NM: "서초구",
    PM10: 34,
    PM25: 13,
    O3: 0.024,
    NO2: 0.019,
    CO: 0.3,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 41,
    ARPLT_MAIN: "PM10",
},
{
    MSRDT: "201912052100",
    MSRRGN_NM: "동남권",
    MSRSTE_NM: "송파구",
    PM10: 25,
    PM25: 6,
    O3: 0.014,
    NO2: 0.025,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 42,
    ARPLT_MAIN: "NO2",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동남권",
    MSRSTE_NM: "강동구",
    PM10: 24,
    PM25: 14,
    O3: 0.016,
    NO2: 0.02,
    CO: 0.4,
    SO2: 0.002,
    IDEX_NM: "좋음",
    IDEX_MVL: 39,
    ARPLT_MAIN: "PM25",
}];


// for (let i = 0; i < cityAir.length; i++){
//     if (cityAir[i]['PM10'] < 25){
//         console.log("25㎍/㎥보다 작은 구: " + cityAir[i]['MSRSTE_NM'] + ", " + cityAir[i]['PM10']);
//     }
// }

function lowerPM10_MSRSTE_NM(pm10){
    let msrArray = []
    for (let i = 0; i < cityAir.length; i++){
        let isCleanAir = (cityAir[i]['PM10'] < pm10)
        if (isCleanAir){
            console.log(`${pm10}보다 작은 구는 ${cityAir[i]['MSRSTE_NM']}입니다`)
            msrArray.push(cityAir[i]['MSRSTE_NM'])
        }
    }
    return msrArray
}

// lowerPM10_MSRSTE_NM(12)

function sum(a, b) {
    return a + b;
}

function calculateSum(n){
    let sum = 0;
    for (let i =1; i < n; i++){
        sum += i;
    }
    return sum
}

let fruitsBasket = ['사과','감','감','배','포도','포도','딸기','포도','감','수박','딸기']

function countBerry(fruit){
    let count = 0;
    for (let i = 0; i < fruitsBasket.length; i++){
        if (fruitsBasket[i] == fruit){
            count += 1;
        }
    }
    return count
}

module.exports.sum = sum;
module.exports.calculateSum = calculateSum;
module.exports.lowerPM10_MSRSTE_NM = lowerPM10_MSRSTE_NM;
module.exports.countBerry = countBerry;