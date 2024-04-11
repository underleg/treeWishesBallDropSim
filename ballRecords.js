
////////////////////////////////////////////////////////////
// gravity = 0.14
// xbounce = 1.2
// ybounce = 1.2
// dxLim = 0.04
// numBounces = 20
////////////////////////////////////////////////////////////

//Counts: (0)99 (1)23 (2)79 (3)78 (4)84 (5)83 (6)41 (7)9 (8)68  = 564

let ballRecords = [
  // [0]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.508,
    bounceRecord: [1, 2, 4]
  },
  // [1]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.452,
    bounceRecord: [1, 4, 11]
  },
  // [2]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.908,
    bounceRecord: [1, 15, 21]
  },
  // [3]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.704,
    bounceRecord: [1, 2, 7]
  },
  // [4]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.432,
    bounceRecord: [1, 4, 16]
  },
  // [5]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.642,
    bounceRecord: [1, 6, 36]
  },
  // [6]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.888,
    bounceRecord: [1, 15, 28]
  },
  // [7]
  {
    prize: 1,
    numPegs: 4,
    startX: 267.642,
    bounceRecord: [1, 2, 4, 29]
  },
  // [8]
  {
    prize: 1,
    numPegs: 4,
    startX: 267.524,
    bounceRecord: [1, 2, 4, 29]
  },
  // [9]
  {
    prize: 1,
    numPegs: 4,
    startX: 268.132,
    bounceRecord: [1, 11, 16, 29]
  },
  // [10]
  {
    prize: 3,
    numPegs: 5,
    startX: 268.122,
    bounceRecord: [1, 11, 22, 30, 31]
  },
  // [11]
  {
    prize: 3,
    numPegs: 5,
    startX: 268.122,
    bounceRecord: [1, 11, 22, 30, 31]
  },
  // [12]
  {
    prize: 9,
    numPegs: 3,
    startX: 271.462,
    bounceRecord: [1, 3, 10]
  },
  // [13]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.59,
    bounceRecord: [1, 6, 15]
  },
  // [14]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.514,
    bounceRecord: [1, 2, 4]
  },
  // [15]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.642,
    bounceRecord: [1, 6, 36]
  },
  // [16]
  {
    prize: 1,
    numPegs: 5,
    startX: 267.54,
    bounceRecord: [1, 2, 4, 16, 22]
  },
  // [17]
  {
    prize: 9,
    numPegs: 3,
    startX: 267.928,
    bounceRecord: [1, 2, 9]
  },
  // [18]
  {
    prize: 9,
    numPegs: 4,
    startX: 267.936,
    bounceRecord: [1, 2, 9, 10]
  },
  // [19]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.61,
    bounceRecord: [1, 6, 21]
  },
  // [20]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.104,
    bounceRecord: [1, 11, 29]
  },
  // [21]
  {
    prize: 3,
    numPegs: 6,
    startX: 271.282,
    bounceRecord: [1, 3, 8, 17, 23, 22]
  },
  // [22]
  {
    prize: 3,
    numPegs: 6,
    startX: 271.282,
    bounceRecord: [1, 3, 8, 17, 23, 22]
  },
  // [23]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.472,
    bounceRecord: [1, 4, 7]
  },
  // [24]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.474,
    bounceRecord: [1, 4, 7]
  },
  // [25]
  {
    prize: 5,
    numPegs: 6,
    startX: 270.578,
    bounceRecord: [1, 6, 15, 26, 33, 32]
  },
  // [26]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.594,
    bounceRecord: [1, 2, 16]
  },
  // [27]
  {
    prize: 9,
    numPegs: 3,
    startX: 271.434,
    bounceRecord: [1, 3, 10]
  },
  // [28]
  {
    prize: 7,
    numPegs: 5,
    startX: 270.916,
    bounceRecord: [1, 15, 28, 35, 34]
  },
  // [29]
  {
    prize: 1,
    numPegs: 4,
    startX: 267.568,
    bounceRecord: [1, 2, 4, 7]
  },
  // [30]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.104,
    bounceRecord: [1, 11, 29]
  },
  // [31]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.932,
    bounceRecord: [1, 15, 36]
  },
  // [32]
  {
    prize: 1,
    numPegs: 5,
    startX: 267.734,
    bounceRecord: [1, 2, 7, 22, 29]
  },
  // [33]
  {
    prize: 4,
    numPegs: 7,
    startX: 271.214,
    bounceRecord: [1, 3, 8, 17, 23, 31, 32]
  },
  // [34]
  {
    prize: 2,
    numPegs: 6,
    startX: 268.136,
    bounceRecord: [1, 11, 16, 22, 23, 30]
  },
  // [35]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.51,
    bounceRecord: [1, 2, 4]
  },
  // [36]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.512,
    bounceRecord: [1, 2, 4]
  },
  // [37]
  {
    prize: 9,
    numPegs: 4,
    startX: 270.582,
    bounceRecord: [1, 6, 15, 36]
  },
  // [38]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.93,
    bounceRecord: [1, 15, 36]
  },
  // [39]
  {
    prize: 1,
    numPegs: 4,
    startX: 267.65,
    bounceRecord: [1, 2, 4, 16]
  },
  // [40]
  {
    prize: 9,
    numPegs: 3,
    startX: 271.462,
    bounceRecord: [1, 3, 10]
  },
  // [41]
  {
    prize: 1,
    numPegs: 4,
    startX: 267.554,
    bounceRecord: [1, 2, 4, 7]
  },
  // [42]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.908,
    bounceRecord: [1, 15, 21]
  },
  // [43]
  {
    prize: 7,
    numPegs: 6,
    startX: 270.56,
    bounceRecord: [1, 6, 10, 21, 27, 26]
  },
  // [44]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.684,
    bounceRecord: [1, 2, 4]
  },
  // [45]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.416,
    bounceRecord: [1, 4, 22]
  },
  // [46]
  {
    prize: 1,
    numPegs: 4,
    startX: 267.568,
    bounceRecord: [1, 2, 4, 7]
  },
  // [47]
  {
    prize: 9,
    numPegs: 3,
    startX: 271.432,
    bounceRecord: [1, 3, 6]
  },
  // [48]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.502,
    bounceRecord: [1, 2, 4]
  },
  // [49]
  {
    prize: 6,
    numPegs: 7,
    startX: 271.174,
    bounceRecord: [1, 3, 4, 19, 14, 26, 33]
  },
  // [50]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.514,
    bounceRecord: [1, 2, 4]
  },
  // [51]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.512,
    bounceRecord: [1, 2, 4]
  },
  // [52]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.51,
    bounceRecord: [1, 2, 4]
  },
  // [53]
  {
    prize: 7,
    numPegs: 11,
    startX: 271.142,
    bounceRecord: [1, 3, 5, 9, 10, 14, 15, 20, 19, 34, 27]
  },
  // [54]
  {
    prize: 4,
    numPegs: 10,
    startX: 267.924,
    bounceRecord: [1, 2, 9, 10, 14, 19, 18, 25, 32, 31]
  },
  // [55]
  {
    prize: 5,
    numPegs: 13,
    startX: 267.918,
    bounceRecord: [1, 2, 5, 6, 9, 8, 13, 14, 19, 20, 26, 25, 33]
  },
  // [56]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.638,
    bounceRecord: [1, 6, 36]
  },
  // [57]
  {
    prize: 2,
    numPegs: 7,
    startX: 271.318,
    bounceRecord: [1, 3, 5, 4, 8, 12, 23]
  },
  // [58]
  {
    prize: 6,
    numPegs: 10,
    startX: 267.826,
    bounceRecord: [1, 2, 9, 10, 14, 13, 19, 20, 26, 25]
  },
  // [59]
  {
    prize: 3,
    numPegs: 3,
    startX: 268.15,
    bounceRecord: [1, 11, 22]
  },
  // [60]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.416,
    bounceRecord: [1, 4, 22]
  },
  // [61]
  {
    prize: 9,
    numPegs: 3,
    startX: 267.928,
    bounceRecord: [1, 2, 9]
  },
  // [62]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.682,
    bounceRecord: [1, 2, 4]
  },
  // [63]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.104,
    bounceRecord: [1, 11, 29]
  },
  // [64]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.516,
    bounceRecord: [1, 2, 4]
  },
  // [65]
  {
    prize: 1,
    numPegs: 4,
    startX: 268.118,
    bounceRecord: [1, 11, 22, 29]
  },
  // [66]
  {
    prize: 7,
    numPegs: 8,
    startX: 267.828,
    bounceRecord: [1, 2, 14, 20, 27, 28, 35, 34]
  },
  // [67]
  {
    prize: 4,
    numPegs: 7,
    startX: 270.55,
    bounceRecord: [1, 6, 10, 19, 25, 24, 32]
  },
  // [68]
  {
    prize: 9,
    numPegs: 4,
    startX: 270.554,
    bounceRecord: [1, 6, 10, 15]
  },
  // [69]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.888,
    bounceRecord: [1, 15, 28]
  },
  // [70]
  {
    prize: 9,
    numPegs: 3,
    startX: 271.434,
    bounceRecord: [1, 3, 10]
  },
  // [71]
  {
    prize: 5,
    numPegs: 8,
    startX: 267.86,
    bounceRecord: [1, 2, 9, 10, 14, 20, 26, 34]
  },
  // [72]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.61,
    bounceRecord: [1, 6, 21]
  },
  // [73]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.686,
    bounceRecord: [1, 2, 4]
  },
  // [74]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.686,
    bounceRecord: [1, 2, 4]
  },
  // [75]
  {
    prize: 7,
    numPegs: 9,
    startX: 271.322,
    bounceRecord: [1, 3, 5, 4, 8, 13, 14, 19, 34]
  },
  // [76]
  {
    prize: 1,
    numPegs: 4,
    startX: 268.476,
    bounceRecord: [1, 4, 7, 29]
  },
  // [77]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.116,
    bounceRecord: [1, 11, 22]
  },
  // [78]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.116,
    bounceRecord: [1, 11, 22]
  },
  // [79]
  {
    prize: 6,
    numPegs: 8,
    startX: 271.226,
    bounceRecord: [1, 3, 5, 4, 8, 7, 12, 25]
  },
  // [80]
  {
    prize: 1,
    numPegs: 5,
    startX: 267.66,
    bounceRecord: [1, 2, 4, 7, 22]
  },
  // [81]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.47,
    bounceRecord: [1, 4, 7]
  },
  // [82]
  {
    prize: 7,
    numPegs: 9,
    startX: 267.938,
    bounceRecord: [1, 2, 9, 10, 9, 14, 13, 19, 26]
  },
  // [83]
  {
    prize: 8,
    numPegs: 10,
    startX: 271.166,
    bounceRecord: [1, 3, 5, 6, 9, 14, 15, 20, 27, 35]
  },
  // [84]
  {
    prize: 4,
    numPegs: 11,
    startX: 271.31,
    bounceRecord: [1, 3, 8, 4, 12, 11, 17, 24, 25, 32, 31]
  },
  // [85]
  {
    prize: 3,
    numPegs: 9,
    startX: 271.268,
    bounceRecord: [1, 3, 2, 5, 12, 7, 17, 24, 31]
  },
  // [86]
  {
    prize: 6,
    numPegs: 11,
    startX: 267.948,
    bounceRecord: [1, 2, 14, 10, 14, 15, 20, 26, 27, 34, 33]
  },
  // [87]
  {
    prize: 1,
    numPegs: 4,
    startX: 267.538,
    bounceRecord: [1, 2, 4, 16]
  },
  // [88]
  {
    prize: 6,
    numPegs: 9,
    startX: 271.22,
    bounceRecord: [1, 3, 5, 4, 13, 18, 25, 26, 33]
  },
  // [89]
  {
    prize: 9,
    numPegs: 4,
    startX: 271.436,
    bounceRecord: [1, 3, 15, 36]
  },
  // [90]
  {
    prize: 8,
    numPegs: 6,
    startX: 267.946,
    bounceRecord: [1, 2, 14, 20, 21, 27]
  },
  // [91]
  {
    prize: 6,
    numPegs: 10,
    startX: 271.35,
    bounceRecord: [1, 3, 2, 5, 14, 20, 21, 27, 34, 33]
  },
  // [92]
  {
    prize: 6,
    numPegs: 12,
    startX: 267.798,
    bounceRecord: [1, 2, 1, 2, 3, 5, 9, 13, 14, 19, 18, 25]
  },
  // [93]
  {
    prize: 4,
    numPegs: 10,
    startX: 271.336,
    bounceRecord: [1, 3, 5, 9, 18, 12, 24, 23, 16, 31]
  },
  // [94]
  {
    prize: 7,
    numPegs: 11,
    startX: 271.064,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 19, 20, 26, 34]
  },
  // [95]
  {
    prize: 7,
    numPegs: 8,
    startX: 267.858,
    bounceRecord: [1, 2, 9, 10, 14, 13, 19, 34]
  },
  // [96]
  {
    prize: 3,
    numPegs: 9,
    startX: 271.192,
    bounceRecord: [1, 3, 12, 17, 16, 23, 24, 31, 30]
  },
  // [97]
  {
    prize: 3,
    numPegs: 9,
    startX: 267.97,
    bounceRecord: [1, 2, 5, 17, 11, 23, 22, 30, 31]
  },
  // [98]
  {
    prize: 3,
    numPegs: 7,
    startX: 271.086,
    bounceRecord: [1, 3, 5, 12, 23, 16, 30]
  },
  // [99]
  {
    prize: 4,
    numPegs: 10,
    startX: 271.126,
    bounceRecord: [1, 3, 5, 12, 7, 17, 18, 24, 23, 31]
  },
  // [100]
  {
    prize: 9,
    numPegs: 4,
    startX: 267.78,
    bounceRecord: [1, 2, 9, 10]
  },
  // [101]
  {
    prize: 9,
    numPegs: 4,
    startX: 271.478,
    bounceRecord: [1, 3, 6, 10]
  },
  // [102]
  {
    prize: 7,
    numPegs: 13,
    startX: 271.07,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 12, 18, 19, 14, 19, 26]
  },
  // [103]
  {
    prize: 4,
    numPegs: 12,
    startX: 267.814,
    bounceRecord: [1, 2, 5, 9, 10, 14, 13, 19, 20, 26, 25, 32]
  },
  // [104]
  {
    prize: 4,
    numPegs: 10,
    startX: 271.042,
    bounceRecord: [1, 3, 5, 4, 8, 12, 18, 19, 25, 32]
  },
  // [105]
  {
    prize: 1,
    numPegs: 4,
    startX: 268.118,
    bounceRecord: [1, 11, 22, 29]
  },
  // [106]
  {
    prize: 3,
    numPegs: 5,
    startX: 268.122,
    bounceRecord: [1, 11, 22, 30, 31]
  },
  // [107]
  {
    prize: 1,
    numPegs: 5,
    startX: 267.656,
    bounceRecord: [1, 2, 4, 11, 16]
  },
  // [108]
  {
    prize: 7,
    numPegs: 9,
    startX: 271.322,
    bounceRecord: [1, 3, 5, 4, 8, 13, 14, 19, 34]
  },
  // [109]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.93,
    bounceRecord: [1, 15, 36]
  },
  // [110]
  {
    prize: 6,
    numPegs: 8,
    startX: 271.236,
    bounceRecord: [1, 3, 5, 4, 8, 9, 18, 33]
  },
  // [111]
  {
    prize: 4,
    numPegs: 11,
    startX: 271.37,
    bounceRecord: [1, 3, 5, 4, 8, 17, 11, 23, 22, 30, 31]
  },
  // [112]
  {
    prize: 5,
    numPegs: 11,
    startX: 271.028,
    bounceRecord: [1, 3, 5, 4, 8, 13, 14, 19, 18, 25, 32]
  },
  // [113]
  {
    prize: 5,
    numPegs: 8,
    startX: 271.228,
    bounceRecord: [1, 3, 5, 4, 13, 19, 25, 32]
  },
  // [114]
  {
    prize: 6,
    numPegs: 9,
    startX: 267.976,
    bounceRecord: [1, 2, 5, 8, 7, 12, 13, 18, 25]
  },
  // [115]
  {
    prize: 5,
    numPegs: 10,
    startX: 267.81,
    bounceRecord: [1, 2, 5, 12, 13, 18, 25, 26, 33, 32]
  },
  // [116]
  {
    prize: 5,
    numPegs: 10,
    startX: 267.81,
    bounceRecord: [1, 2, 5, 12, 13, 18, 25, 26, 33, 32]
  },
  // [117]
  {
    prize: 6,
    numPegs: 9,
    startX: 271.258,
    bounceRecord: [1, 3, 5, 6, 9, 18, 25, 26, 33]
  },
  // [118]
  {
    prize: 2,
    numPegs: 7,
    startX: 271.084,
    bounceRecord: [1, 3, 5, 12, 23, 30, 29]
  },
  // [119]
  {
    prize: 4,
    numPegs: 9,
    startX: 267.968,
    bounceRecord: [1, 2, 5, 8, 13, 18, 17, 24, 32]
  },
  // [120]
  {
    prize: 5,
    numPegs: 13,
    startX: 271.368,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 12, 18, 19, 25, 24, 32]
  },
  // [121]
  {
    prize: 3,
    numPegs: 9,
    startX: 271.38,
    bounceRecord: [1, 3, 5, 4, 8, 17, 16, 23, 30]
  },
  // [122]
  {
    prize: 6,
    numPegs: 10,
    startX: 271.35,
    bounceRecord: [1, 3, 2, 5, 14, 20, 21, 27, 34, 33]
  },
  // [123]
  {
    prize: 3,
    numPegs: 8,
    startX: 267.904,
    bounceRecord: [1, 2, 5, 6, 13, 18, 31, 23]
  },
  // [124]
  {
    prize: 8,
    numPegs: 6,
    startX: 267.946,
    bounceRecord: [1, 2, 14, 20, 21, 27]
  },
  // [125]
  {
    prize: 4,
    numPegs: 13,
    startX: 271.046,
    bounceRecord: [1, 3, 5, 4, 8, 12, 11, 17, 18, 24, 23, 31, 24]
  },
  // [126]
  {
    prize: 6,
    numPegs: 11,
    startX: 271.234,
    bounceRecord: [1, 3, 5, 4, 19, 14, 19, 20, 26, 25, 33]
  },
  // [127]
  {
    prize: 3,
    numPegs: 11,
    startX: 271.3,
    bounceRecord: [1, 3, 5, 8, 7, 12, 13, 18, 24, 31, 30]
  },
  // [128]
  {
    prize: 6,
    numPegs: 9,
    startX: 267.824,
    bounceRecord: [1, 2, 9, 14, 15, 20, 26, 25, 33]
  },
  // [129]
  {
    prize: 1,
    numPegs: 5,
    startX: 267.746,
    bounceRecord: [1, 2, 4, 11, 16]
  },
  // [130]
  {
    prize: 5,
    numPegs: 12,
    startX: 271.292,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 14, 19, 18, 25, 32]
  },
  // [131]
  {
    prize: 5,
    numPegs: 12,
    startX: 271.292,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 14, 19, 18, 25, 32]
  },
  // [132]
  {
    prize: 4,
    numPegs: 11,
    startX: 271.03,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 18, 17, 24, 32]
  },
  // [133]
  {
    prize: 9,
    numPegs: 6,
    startX: 267.812,
    bounceRecord: [1, 2, 5, 9, 20, 21]
  },
  // [134]
  {
    prize: 6,
    numPegs: 12,
    startX: 271.222,
    bounceRecord: [1, 3, 5, 4, 13, 18, 33, 34, 27, 26, 34, 33]
  },
  // [135]
  {
    prize: 4,
    numPegs: 12,
    startX: 267.814,
    bounceRecord: [1, 2, 5, 9, 10, 14, 13, 19, 20, 26, 25, 32]
  },
  // [136]
  {
    prize: 5,
    numPegs: 9,
    startX: 267.754,
    bounceRecord: [1, 2, 9, 14, 15, 26, 24, 32, 33]
  },
  // [137]
  {
    prize: 5,
    numPegs: 13,
    startX: 267.918,
    bounceRecord: [1, 2, 5, 6, 9, 8, 13, 14, 19, 20, 26, 25, 33]
  },
  // [138]
  {
    prize: 5,
    numPegs: 14,
    startX: 267.95,
    bounceRecord: [1, 2, 3, 5, 6, 9, 10, 14, 13, 19, 25, 24, 32, 25]
  },
  // [139]
  {
    prize: 6,
    numPegs: 9,
    startX: 271.22,
    bounceRecord: [1, 3, 5, 4, 13, 18, 25, 26, 33]
  },
  // [140]
  {
    prize: 3,
    numPegs: 15,
    startX: 271.056,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 12, 7, 12, 17, 23, 22, 30, 31]
  },
  // [141]
  {
    prize: 5,
    numPegs: 12,
    startX: 267.896,
    bounceRecord: [1, 2, 5, 6, 9, 14, 15, 20, 19, 26, 33, 32]
  },
  // [142]
  {
    prize: 3,
    numPegs: 10,
    startX: 267.958,
    bounceRecord: [1, 2, 3, 5, 12, 11, 17, 23, 22, 30]
  },
  // [143]
  {
    prize: 4,
    numPegs: 9,
    startX: 271.28,
    bounceRecord: [1, 3, 8, 7, 12, 13, 18, 19, 25]
  },
  // [144]
  {
    prize: 4,
    numPegs: 11,
    startX: 271.37,
    bounceRecord: [1, 3, 5, 4, 8, 17, 11, 23, 22, 30, 31]
  },
  // [145]
  {
    prize: 8,
    numPegs: 8,
    startX: 271.266,
    bounceRecord: [1, 3, 5, 9, 10, 14, 20, 35]
  },
  // [146]
  {
    prize: 9,
    numPegs: 7,
    startX: 267.882,
    bounceRecord: [1, 2, 5, 14, 15, 28, 36]
  },
  // [147]
  {
    prize: 6,
    numPegs: 7,
    startX: 271.096,
    bounceRecord: [1, 3, 5, 8, 7, 12, 33]
  },
  // [148]
  {
    prize: 3,
    numPegs: 5,
    startX: 268.12,
    bounceRecord: [1, 11, 22, 30, 31]
  },
  // [149]
  {
    prize: 4,
    numPegs: 9,
    startX: 267.968,
    bounceRecord: [1, 2, 5, 8, 13, 18, 17, 24, 32]
  },
  // [150]
  {
    prize: 3,
    numPegs: 9,
    startX: 271.272,
    bounceRecord: [1, 3, 12, 7, 17, 23, 22, 30, 31]
  },
  // [151]
  {
    prize: 6,
    numPegs: 13,
    startX: 267.902,
    bounceRecord: [1, 2, 5, 6, 9, 13, 12, 18, 19, 26, 27, 34, 33]
  },
  // [152]
  {
    prize: 6,
    numPegs: 9,
    startX: 271.108,
    bounceRecord: [1, 3, 5, 8, 13, 19, 20, 26, 25]
  },
  // [153]
  {
    prize: 5,
    numPegs: 9,
    startX: 271.244,
    bounceRecord: [1, 3, 5, 4, 8, 13, 18, 25, 26]
  },
  // [154]
  {
    prize: 4,
    numPegs: 10,
    startX: 271.126,
    bounceRecord: [1, 3, 5, 12, 7, 17, 18, 24, 23, 31]
  },
  // [155]
  {
    prize: 5,
    numPegs: 9,
    startX: 271.16,
    bounceRecord: [1, 3, 5, 9, 10, 14, 13, 19, 20]
  },
  // [156]
  {
    prize: 9,
    numPegs: 4,
    startX: 271.408,
    bounceRecord: [1, 3, 15, 28]
  },
  // [157]
  {
    prize: 2,
    numPegs: 7,
    startX: 271.318,
    bounceRecord: [1, 3, 5, 4, 8, 12, 23]
  },
  // [158]
  {
    prize: 6,
    numPegs: 7,
    startX: 271.096,
    bounceRecord: [1, 3, 5, 8, 7, 12, 33]
  },
  // [159]
  {
    prize: 5,
    numPegs: 14,
    startX: 267.95,
    bounceRecord: [1, 2, 3, 5, 6, 9, 10, 14, 13, 19, 25, 24, 32, 25]
  },
  // [160]
  {
    prize: 6,
    numPegs: 8,
    startX: 271.094,
    bounceRecord: [1, 3, 5, 8, 7, 12, 25, 33]
  },
  // [161]
  {
    prize: 7,
    numPegs: 8,
    startX: 267.894,
    bounceRecord: [1, 2, 5, 6, 9, 8, 13, 26]
  },
  // [162]
  {
    prize: 3,
    numPegs: 8,
    startX: 267.804,
    bounceRecord: [1, 2, 5, 6, 9, 18, 12, 24]
  },
  // [163]
  {
    prize: 3,
    numPegs: 7,
    startX: 271.284,
    bounceRecord: [1, 3, 8, 12, 17, 23, 22]
  },
  // [164]
  {
    prize: 1,
    numPegs: 5,
    startX: 267.576,
    bounceRecord: [1, 2, 4, 16, 29]
  },
  // [165]
  {
    prize: 3,
    numPegs: 8,
    startX: 267.75,
    bounceRecord: [1, 2, 5, 6, 13, 11, 24, 31]
  },
  // [166]
  {
    prize: 5,
    numPegs: 9,
    startX: 271.314,
    bounceRecord: [1, 3, 5, 4, 8, 9, 18, 24, 32]
  },
  // [167]
  {
    prize: 2,
    numPegs: 8,
    startX: 271.21,
    bounceRecord: [1, 3, 8, 12, 11, 17, 23, 30]
  },
  // [168]
  {
    prize: 6,
    numPegs: 12,
    startX: 271.222,
    bounceRecord: [1, 3, 5, 4, 13, 18, 33, 34, 27, 26, 34, 33]
  },
  // [169]
  {
    prize: 6,
    numPegs: 11,
    startX: 267.854,
    bounceRecord: [1, 2, 9, 14, 15, 20, 19, 26, 27, 34, 33]
  },
  // [170]
  {
    prize: 1,
    numPegs: 5,
    startX: 267.734,
    bounceRecord: [1, 2, 7, 22, 29]
  },
  // [171]
  {
    prize: 6,
    numPegs: 10,
    startX: 267.808,
    bounceRecord: [1, 2, 9, 14, 15, 20, 21, 27, 34, 33]
  },
  // [172]
  {
    prize: 7,
    numPegs: 8,
    startX: 267.792,
    bounceRecord: [1, 2, 3, 5, 4, 8, 19, 34]
  },
  // [173]
  {
    prize: 2,
    numPegs: 6,
    startX: 268.136,
    bounceRecord: [1, 11, 16, 22, 23, 30]
  },
  // [174]
  {
    prize: 6,
    numPegs: 11,
    startX: 271.062,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 19, 20, 26, 25]
  },
  // [175]
  {
    prize: 4,
    numPegs: 7,
    startX: 268.462,
    bounceRecord: [1, 4, 11, 24, 25, 32, 31]
  },
  // [176]
  {
    prize: 1,
    numPegs: 4,
    startX: 268.438,
    bounceRecord: [1, 4, 16, 29]
  },
  // [177]
  {
    prize: 6,
    numPegs: 11,
    startX: 271.264,
    bounceRecord: [1, 3, 5, 9, 14, 20, 21, 27, 20, 34, 33]
  },
  // [178]
  {
    prize: 4,
    numPegs: 10,
    startX: 271.17,
    bounceRecord: [1, 3, 5, 9, 13, 18, 17, 24, 25, 32]
  },
  // [179]
  {
    prize: 3,
    numPegs: 13,
    startX: 271.366,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 12, 18, 31, 30, 23, 30]
  },
  // [180]
  {
    prize: 5,
    numPegs: 10,
    startX: 267.81,
    bounceRecord: [1, 2, 5, 12, 13, 18, 25, 26, 33, 32]
  },
  // [181]
  {
    prize: 2,
    numPegs: 7,
    startX: 271.084,
    bounceRecord: [1, 3, 5, 12, 23, 30, 29]
  },
  // [182]
  {
    prize: 5,
    numPegs: 10,
    startX: 267.872,
    bounceRecord: [1, 2, 5, 8, 12, 11, 17, 24, 25, 32]
  },
  // [183]
  {
    prize: 4,
    numPegs: 11,
    startX: 267.776,
    bounceRecord: [1, 2, 9, 6, 14, 15, 20, 19, 13, 19, 25]
  },
  // [184]
  {
    prize: 5,
    numPegs: 11,
    startX: 267.782,
    bounceRecord: [1, 2, 3, 5, 6, 9, 18, 17, 24, 32, 33]
  },
  // [185]
  {
    prize: 2,
    numPegs: 8,
    startX: 271.21,
    bounceRecord: [1, 3, 8, 12, 11, 17, 23, 30]
  },
  // [186]
  {
    prize: 5,
    numPegs: 14,
    startX: 267.95,
    bounceRecord: [1, 2, 3, 5, 6, 9, 10, 14, 13, 19, 25, 24, 32, 25]
  },
  // [187]
  {
    prize: 6,
    numPegs: 9,
    startX: 271.22,
    bounceRecord: [1, 3, 5, 4, 13, 18, 25, 26, 33]
  },
  // [188]
  {
    prize: 9,
    numPegs: 3,
    startX: 271.432,
    bounceRecord: [1, 3, 6]
  },
  // [189]
  {
    prize: 3,
    numPegs: 15,
    startX: 271.056,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 12, 7, 12, 17, 23, 22, 30, 31]
  },
  // [190]
  {
    prize: 7,
    numPegs: 8,
    startX: 267.916,
    bounceRecord: [1, 2, 5, 6, 13, 19, 26, 34]
  },
  // [191]
  {
    prize: 5,
    numPegs: 6,
    startX: 271.398,
    bounceRecord: [1, 3, 10, 14, 25, 32]
  },
  // [192]
  {
    prize: 4,
    numPegs: 10,
    startX: 271.334,
    bounceRecord: [1, 3, 5, 9, 13, 24, 23, 16, 23, 31]
  },
  // [193]
  {
    prize: 6,
    numPegs: 11,
    startX: 271.038,
    bounceRecord: [1, 3, 5, 4, 13, 14, 10, 19, 18, 25, 33]
  },
  // [194]
  {
    prize: 5,
    numPegs: 9,
    startX: 267.58,
    bounceRecord: [1, 2, 4, 8, 9, 13, 26, 33, 32]
  },
  // [195]
  {
    prize: 5,
    numPegs: 9,
    startX: 267.58,
    bounceRecord: [1, 2, 4, 8, 9, 13, 26, 33, 32]
  },
  // [196]
  {
    prize: 3,
    numPegs: 9,
    startX: 271.268,
    bounceRecord: [1, 3, 2, 5, 12, 7, 17, 24, 31]
  },
  // [197]
  {
    prize: 3,
    numPegs: 9,
    startX: 271.268,
    bounceRecord: [1, 3, 2, 5, 12, 7, 17, 24, 31]
  },
  // [198]
  {
    prize: 3,
    numPegs: 9,
    startX: 271.268,
    bounceRecord: [1, 3, 2, 5, 12, 7, 17, 24, 31]
  },
  // [199]
  {
    prize: 4,
    numPegs: 10,
    startX: 271.17,
    bounceRecord: [1, 3, 5, 9, 13, 18, 17, 24, 25, 32]
  },
  // [200]
  {
    prize: 2,
    numPegs: 8,
    startX: 271.27,
    bounceRecord: [1, 3, 2, 5, 8, 12, 17, 23]
  },
  // [201]
  {
    prize: 3,
    numPegs: 9,
    startX: 267.562,
    bounceRecord: [1, 2, 4, 7, 8, 12, 17, 23, 31]
  },
  // [202]
  {
    prize: 3,
    numPegs: 10,
    startX: 267.662,
    bounceRecord: [1, 2, 4, 7, 11, 12, 17, 16, 23, 24]
  },
  // [203]
  {
    prize: 5,
    numPegs: 11,
    startX: 271.34,
    bounceRecord: [1, 3, 5, 9, 13, 12, 18, 17, 24, 25, 32]
  },
  // [204]
  {
    prize: 6,
    numPegs: 11,
    startX: 267.844,
    bounceRecord: [1, 2, 5, 6, 9, 8, 4, 8, 19, 26, 27]
  },
  // [205]
  {
    prize: 3,
    numPegs: 13,
    startX: 267.758,
    bounceRecord: [1, 2, 5, 6, 9, 14, 25, 24, 17, 12, 18, 13, 24]
  },
  // [206]
  {
    prize: 3,
    numPegs: 13,
    startX: 267.758,
    bounceRecord: [1, 2, 5, 6, 9, 14, 25, 24, 17, 12, 18, 13, 24]
  },
  // [207]
  {
    prize: 4,
    numPegs: 10,
    startX: 271.336,
    bounceRecord: [1, 3, 5, 9, 18, 12, 24, 23, 16, 31]
  },
  // [208]
  {
    prize: 4,
    numPegs: 10,
    startX: 271.336,
    bounceRecord: [1, 3, 5, 9, 18, 12, 24, 23, 16, 31]
  },
  // [209]
  {
    prize: 6,
    numPegs: 9,
    startX: 271.108,
    bounceRecord: [1, 3, 5, 8, 13, 19, 20, 26, 25]
  },
  // [210]
  {
    prize: 4,
    numPegs: 9,
    startX: 267.77,
    bounceRecord: [1, 2, 5, 6, 18, 12, 24, 23, 31]
  },
  // [211]
  {
    prize: 8,
    numPegs: 10,
    startX: 271.344,
    bounceRecord: [1, 3, 2, 5, 9, 10, 14, 27, 21, 35]
  },
  // [212]
  {
    prize: 7,
    numPegs: 11,
    startX: 271.142,
    bounceRecord: [1, 3, 5, 9, 10, 14, 15, 20, 19, 34, 27]
  },
  // [213]
  {
    prize: 3,
    numPegs: 12,
    startX: 271.298,
    bounceRecord: [1, 3, 5, 8, 7, 12, 13, 18, 24, 23, 24, 31]
  },
  // [214]
  {
    prize: 5,
    numPegs: 9,
    startX: 271.244,
    bounceRecord: [1, 3, 5, 4, 8, 13, 18, 25, 26]
  },
  // [215]
  {
    prize: 4,
    numPegs: 12,
    startX: 271.034,
    bounceRecord: [1, 3, 5, 4, 8, 7, 12, 13, 18, 17, 24, 31]
  },
  // [216]
  {
    prize: 5,
    numPegs: 13,
    startX: 271.068,
    bounceRecord: [1, 3, 5, 4, 8, 9, 18, 17, 11, 12, 17, 32, 25]
  },
  // [217]
  {
    prize: 3,
    numPegs: 15,
    startX: 271.056,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 12, 7, 12, 17, 23, 22, 30, 31]
  },
  // [218]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.634,
    bounceRecord: [1, 2, 4]
  },
  // [219]
  {
    prize: 4,
    numPegs: 7,
    startX: 270.55,
    bounceRecord: [1, 6, 10, 19, 25, 24, 32]
  },
  // [220]
  {
    prize: 5,
    numPegs: 8,
    startX: 271.152,
    bounceRecord: [1, 3, 5, 9, 14, 15, 20, 33]
  },
  // [221]
  {
    prize: 5,
    numPegs: 6,
    startX: 270.58,
    bounceRecord: [1, 6, 15, 26, 33, 32]
  },
  // [222]
  {
    prize: 6,
    numPegs: 10,
    startX: 271.35,
    bounceRecord: [1, 3, 2, 5, 14, 20, 21, 27, 34, 33]
  },
  // [223]
  {
    prize: 5,
    numPegs: 8,
    startX: 267.86,
    bounceRecord: [1, 2, 9, 10, 14, 20, 26, 34]
  },
  // [224]
  {
    prize: 3,
    numPegs: 9,
    startX: 267.908,
    bounceRecord: [1, 2, 5, 6, 9, 13, 18, 31, 30]
  },
  // [225]
  {
    prize: 4,
    numPegs: 12,
    startX: 267.814,
    bounceRecord: [1, 2, 5, 9, 10, 14, 13, 19, 20, 26, 25, 32]
  },
  // [226]
  {
    prize: 7,
    numPegs: 9,
    startX: 267.938,
    bounceRecord: [1, 2, 9, 10, 9, 14, 13, 19, 26]
  },
  // [227]
  {
    prize: 8,
    numPegs: 10,
    startX: 271.166,
    bounceRecord: [1, 3, 5, 6, 9, 14, 15, 20, 27, 35]
  },
  // [228]
  {
    prize: 4,
    numPegs: 10,
    startX: 271.042,
    bounceRecord: [1, 3, 5, 4, 8, 12, 18, 19, 25, 32]
  },
  // [229]
  {
    prize: 4,
    numPegs: 12,
    startX: 271.034,
    bounceRecord: [1, 3, 5, 4, 8, 7, 12, 13, 18, 17, 24, 31]
  },
  // [230]
  {
    prize: 6,
    numPegs: 11,
    startX: 271.038,
    bounceRecord: [1, 3, 5, 4, 13, 14, 10, 19, 18, 25, 33]
  },
  // [231]
  {
    prize: 4,
    numPegs: 10,
    startX: 271.042,
    bounceRecord: [1, 3, 5, 4, 8, 12, 18, 19, 25, 32]
  },
  // [232]
  {
    prize: 4,
    numPegs: 8,
    startX: 267.76,
    bounceRecord: [1, 2, 9, 10, 14, 9, 19, 25]
  },
  // [233]
  {
    prize: 5,
    numPegs: 14,
    startX: 267.95,
    bounceRecord: [1, 2, 3, 5, 6, 9, 10, 14, 13, 19, 25, 24, 32, 25]
  },
  // [234]
  {
    prize: 6,
    numPegs: 11,
    startX: 271.14,
    bounceRecord: [1, 3, 5, 6, 9, 8, 13, 14, 19, 18, 25]
  },
  // [235]
  {
    prize: 5,
    numPegs: 11,
    startX: 271.372,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 18, 17, 24, 32]
  },
  // [236]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.622,
    bounceRecord: [1, 2, 7]
  },
  // [237]
  {
    prize: 5,
    numPegs: 14,
    startX: 271.294,
    bounceRecord: [1, 3, 5, 4, 8, 9, 6, 3, 9, 18, 17, 11, 17, 24]
  },
  // [238]
  {
    prize: 3,
    numPegs: 9,
    startX: 267.562,
    bounceRecord: [1, 2, 4, 7, 8, 12, 17, 23, 31]
  },
  // [239]
  {
    prize: 5,
    numPegs: 13,
    startX: 271.29,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 12, 18, 17, 24, 32, 33]
  },
  // [240]
  {
    prize: 3,
    numPegs: 10,
    startX: 271.026,
    bounceRecord: [1, 3, 5, 4, 8, 12, 18, 24, 23, 31]
  },
  // [241]
  {
    prize: 4,
    numPegs: 11,
    startX: 271.37,
    bounceRecord: [1, 3, 5, 4, 8, 17, 11, 23, 22, 30, 31]
  },
  // [242]
  {
    prize: 4,
    numPegs: 11,
    startX: 271.37,
    bounceRecord: [1, 3, 5, 4, 8, 17, 11, 23, 22, 30, 31]
  },
  // [243]
  {
    prize: 7,
    numPegs: 13,
    startX: 271.07,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 12, 18, 19, 14, 19, 26]
  },
  // [244]
  {
    prize: 7,
    numPegs: 13,
    startX: 271.07,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 12, 18, 19, 14, 19, 26]
  },
  // [245]
  {
    prize: 5,
    numPegs: 9,
    startX: 271.348,
    bounceRecord: [1, 3, 2, 5, 14, 20, 26, 33, 32]
  },
  // [246]
  {
    prize: 1,
    numPegs: 4,
    startX: 267.532,
    bounceRecord: [1, 2, 4, 22]
  },
  // [247]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.636,
    bounceRecord: [1, 2, 4]
  },
  // [248]
  {
    prize: 1,
    numPegs: 5,
    startX: 271.114,
    bounceRecord: [1, 3, 5, 12, 11]
  },
  // [249]
  {
    prize: 6,
    numPegs: 12,
    startX: 267.768,
    bounceRecord: [1, 2, 5, 6, 9, 14, 20, 21, 27, 26, 34, 33]
  },
  // [250]
  {
    prize: 5,
    numPegs: 13,
    startX: 271.388,
    bounceRecord: [1, 3, 5, 4, 8, 13, 14, 19, 18, 25, 26, 33, 32]
  },
  // [251]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.634,
    bounceRecord: [1, 2, 4]
  },
  // [252]
  {
    prize: 6,
    numPegs: 7,
    startX: 270.548,
    bounceRecord: [1, 6, 10, 19, 13, 25, 33]
  },
  // [253]
  {
    prize: 4,
    numPegs: 8,
    startX: 271.386,
    bounceRecord: [1, 3, 8, 12, 18, 19, 25, 33]
  },
  // [254]
  {
    prize: 4,
    numPegs: 10,
    startX: 271.144,
    bounceRecord: [1, 3, 5, 9, 14, 25, 24, 17, 24, 31]
  },
  // [255]
  {
    prize: 7,
    numPegs: 13,
    startX: 271.07,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 12, 18, 19, 14, 19, 26]
  },
  // [256]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.622,
    bounceRecord: [1, 2, 7]
  },
  // [257]
  {
    prize: 4,
    numPegs: 11,
    startX: 267.9,
    bounceRecord: [1, 2, 5, 6, 9, 10, 14, 13, 19, 20, 33]
  },
  // [258]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.416,
    bounceRecord: [1, 4, 22]
  },
  // [259]
  {
    prize: 9,
    numPegs: 3,
    startX: 271.434,
    bounceRecord: [1, 3, 10]
  },
  // [260]
  {
    prize: 5,
    numPegs: 9,
    startX: 271.244,
    bounceRecord: [1, 3, 5, 4, 8, 13, 18, 25, 26]
  },
  // [261]
  {
    prize: 1,
    numPegs: 4,
    startX: 268.48,
    bounceRecord: [1, 4, 7, 16]
  },
  // [262]
  {
    prize: 5,
    numPegs: 11,
    startX: 271.372,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 18, 17, 24, 32]
  },
  // [263]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.908,
    bounceRecord: [1, 15, 21]
  },
  // [264]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.626,
    bounceRecord: [1, 6, 28]
  },
  // [265]
  {
    prize: 5,
    numPegs: 8,
    startX: 271.228,
    bounceRecord: [1, 3, 5, 4, 13, 19, 25, 32]
  },
  // [266]
  {
    prize: 1,
    numPegs: 4,
    startX: 268.438,
    bounceRecord: [1, 4, 16, 29]
  },
  // [267]
  {
    prize: 3,
    numPegs: 11,
    startX: 267.886,
    bounceRecord: [1, 2, 5, 6, 9, 8, 12, 17, 23, 22, 30]
  },
  // [268]
  {
    prize: 3,
    numPegs: 11,
    startX: 271.188,
    bounceRecord: [1, 3, 12, 7, 12, 11, 17, 23, 24, 31, 30]
  },
  // [269]
  {
    prize: 2,
    numPegs: 8,
    startX: 271.27,
    bounceRecord: [1, 3, 2, 5, 8, 12, 17, 23]
  },
  // [270]
  {
    prize: 6,
    numPegs: 11,
    startX: 267.844,
    bounceRecord: [1, 2, 5, 6, 9, 8, 4, 8, 19, 26, 27]
  },
  // [271]
  {
    prize: 1,
    numPegs: 4,
    startX: 267.646,
    bounceRecord: [1, 2, 4, 22]
  },
  // [272]
  {
    prize: 2,
    numPegs: 4,
    startX: 271.274,
    bounceRecord: [1, 3, 12, 23]
  },
  // [273]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.604,
    bounceRecord: [1, 6, 21]
  },
  // [274]
  {
    prize: 9,
    numPegs: 4,
    startX: 271.436,
    bounceRecord: [1, 3, 15, 36]
  },
  // [275]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.92,
    bounceRecord: [1, 15, 28]
  },
  // [276]
  {
    prize: 5,
    numPegs: 8,
    startX: 271.224,
    bounceRecord: [1, 3, 5, 4, 13, 18, 25, 32]
  },
  // [277]
  {
    prize: 7,
    numPegs: 11,
    startX: 271.142,
    bounceRecord: [1, 3, 5, 9, 10, 14, 15, 20, 19, 34, 27]
  },
  // [278]
  {
    prize: 9,
    numPegs: 3,
    startX: 271.438,
    bounceRecord: [1, 3, 21]
  },
  // [279]
  {
    prize: 5,
    numPegs: 9,
    startX: 271.244,
    bounceRecord: [1, 3, 5, 4, 8, 13, 18, 25, 26]
  },
  // [280]
  {
    prize: 5,
    numPegs: 8,
    startX: 271.224,
    bounceRecord: [1, 3, 5, 4, 13, 18, 25, 32]
  },
  // [281]
  {
    prize: 7,
    numPegs: 5,
    startX: 270.916,
    bounceRecord: [1, 15, 28, 35, 34]
  },
  // [282]
  {
    prize: 4,
    numPegs: 7,
    startX: 270.55,
    bounceRecord: [1, 6, 10, 19, 25, 24, 32]
  },
  // [283]
  {
    prize: 6,
    numPegs: 8,
    startX: 271.226,
    bounceRecord: [1, 3, 5, 4, 8, 7, 12, 25]
  },
  // [284]
  {
    prize: 7,
    numPegs: 11,
    startX: 271.148,
    bounceRecord: [1, 3, 5, 9, 10, 14, 20, 27, 28, 35, 34]
  },
  // [285]
  {
    prize: 4,
    numPegs: 11,
    startX: 271.248,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 18, 17, 24, 25]
  },
  // [286]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.504,
    bounceRecord: [1, 2, 4]
  },
  // [287]
  {
    prize: 4,
    numPegs: 9,
    startX: 271.102,
    bounceRecord: [1, 3, 5, 8, 12, 17, 24, 25, 32]
  },
  // [288]
  {
    prize: 6,
    numPegs: 8,
    startX: 271.13,
    bounceRecord: [1, 3, 5, 12, 18, 25, 26, 33]
  },
  // [289]
  {
    prize: 5,
    numPegs: 13,
    startX: 271.23,
    bounceRecord: [1, 3, 5, 4, 8, 13, 14, 19, 20, 26, 25, 33, 32]
  },
  // [290]
  {
    prize: 5,
    numPegs: 9,
    startX: 271.132,
    bounceRecord: [1, 3, 5, 12, 18, 19, 25, 24, 32]
  },
  // [291]
  {
    prize: 6,
    numPegs: 10,
    startX: 271.246,
    bounceRecord: [1, 3, 5, 4, 8, 19, 14, 26, 25, 33]
  },
  // [292]
  {
    prize: 6,
    numPegs: 8,
    startX: 271.094,
    bounceRecord: [1, 3, 5, 8, 7, 12, 25, 33]
  },
  // [293]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.506,
    bounceRecord: [1, 2, 4]
  },
  // [294]
  {
    prize: 4,
    numPegs: 11,
    startX: 271.03,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 18, 17, 24, 32]
  },
  // [295]
  {
    prize: 2,
    numPegs: 6,
    startX: 268.44,
    bounceRecord: [1, 4, 16, 17, 23, 30]
  },
  // [296]
  {
    prize: 3,
    numPegs: 9,
    startX: 271.192,
    bounceRecord: [1, 3, 12, 17, 16, 23, 24, 31, 30]
  },
  // [297]
  {
    prize: 5,
    numPegs: 8,
    startX: 271.152,
    bounceRecord: [1, 3, 5, 9, 14, 15, 20, 33]
  },
  // [298]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.432,
    bounceRecord: [1, 4, 16]
  },
  // [299]
  {
    prize: 6,
    numPegs: 12,
    startX: 267.798,
    bounceRecord: [1, 2, 1, 2, 3, 5, 9, 13, 14, 19, 18, 25]
  },
  // [300]
  {
    prize: 4,
    numPegs: 12,
    startX: 267.956,
    bounceRecord: [1, 2, 3, 5, 9, 18, 17, 11, 24, 25, 32, 31]
  },
  // [301]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.588,
    bounceRecord: [1, 6, 15]
  },
  // [302]
  {
    prize: 3,
    numPegs: 7,
    startX: 271.196,
    bounceRecord: [1, 3, 12, 23, 22, 30, 31]
  },
  // [303]
  {
    prize: 1,
    numPegs: 4,
    startX: 268.48,
    bounceRecord: [1, 4, 7, 16]
  },
  // [304]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.106,
    bounceRecord: [1, 11, 29]
  },
  // [305]
  {
    prize: 7,
    numPegs: 8,
    startX: 267.792,
    bounceRecord: [1, 2, 3, 5, 4, 8, 19, 34]
  },
  // [306]
  {
    prize: 3,
    numPegs: 12,
    startX: 271.12,
    bounceRecord: [1, 3, 5, 8, 7, 12, 18, 19, 25, 24, 17, 24]
  },
  // [307]
  {
    prize: 5,
    numPegs: 6,
    startX: 271.398,
    bounceRecord: [1, 3, 10, 14, 25, 32]
  },
  // [308]
  {
    prize: 9,
    numPegs: 4,
    startX: 267.78,
    bounceRecord: [1, 2, 9, 10]
  },
  // [309]
  {
    prize: 7,
    numPegs: 11,
    startX: 271.142,
    bounceRecord: [1, 3, 5, 9, 10, 14, 15, 20, 19, 34, 27]
  },
  // [310]
  {
    prize: 3,
    numPegs: 7,
    startX: 271.196,
    bounceRecord: [1, 3, 12, 23, 22, 30, 31]
  },
  // [311]
  {
    prize: 5,
    numPegs: 11,
    startX: 271.372,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 18, 17, 24, 32]
  },
  // [312]
  {
    prize: 9,
    numPegs: 4,
    startX: 271.408,
    bounceRecord: [1, 3, 15, 28]
  },
  // [313]
  {
    prize: 3,
    numPegs: 13,
    startX: 271.366,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 12, 18, 31, 30, 23, 30]
  },
  // [314]
  {
    prize: 2,
    numPegs: 6,
    startX: 268.136,
    bounceRecord: [1, 11, 16, 22, 23, 30]
  },
  // [315]
  {
    prize: 9,
    numPegs: 6,
    startX: 267.836,
    bounceRecord: [1, 2, 5, 9, 20, 21]
  },
  // [316]
  {
    prize: 5,
    numPegs: 11,
    startX: 271.346,
    bounceRecord: [1, 3, 2, 5, 9, 10, 14, 15, 20, 33, 32]
  },
  // [317]
  {
    prize: 7,
    numPegs: 9,
    startX: 271.322,
    bounceRecord: [1, 3, 5, 4, 8, 13, 14, 19, 34]
  },
  // [318]
  {
    prize: 3,
    numPegs: 10,
    startX: 271.026,
    bounceRecord: [1, 3, 5, 4, 8, 12, 18, 24, 23, 31]
  },
  // [319]
  {
    prize: 6,
    numPegs: 10,
    startX: 271.35,
    bounceRecord: [1, 3, 2, 5, 14, 20, 21, 27, 34, 33]
  },
  // [320]
  {
    prize: 4,
    numPegs: 12,
    startX: 271.4,
    bounceRecord: [1, 3, 6, 9, 8, 13, 14, 19, 18, 25, 26, 33]
  },
  // [321]
  {
    prize: 4,
    numPegs: 8,
    startX: 271.386,
    bounceRecord: [1, 3, 8, 12, 18, 19, 25, 33]
  },
  // [322]
  {
    prize: 4,
    numPegs: 8,
    startX: 271.386,
    bounceRecord: [1, 3, 8, 12, 18, 19, 25, 33]
  },
  // [323]
  {
    prize: 4,
    numPegs: 11,
    startX: 271.03,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 18, 17, 24, 32]
  },
  // [324]
  {
    prize: 5,
    numPegs: 11,
    startX: 271.34,
    bounceRecord: [1, 3, 5, 9, 13, 12, 18, 17, 24, 25, 32]
  },
  // [325]
  {
    prize: 2,
    numPegs: 7,
    startX: 268.49,
    bounceRecord: [1, 4, 7, 12, 17, 16, 23]
  },
  // [326]
  {
    prize: 3,
    numPegs: 8,
    startX: 271.044,
    bounceRecord: [1, 3, 5, 4, 8, 12, 18, 31]
  },
  // [327]
  {
    prize: 2,
    numPegs: 4,
    startX: 268.14,
    bounceRecord: [1, 11, 16, 23]
  },
  // [328]
  {
    prize: 7,
    numPegs: 9,
    startX: 267.938,
    bounceRecord: [1, 2, 9, 10, 9, 14, 13, 19, 26]
  },
  // [329]
  {
    prize: 4,
    numPegs: 10,
    startX: 271.336,
    bounceRecord: [1, 3, 5, 9, 18, 12, 24, 23, 16, 31]
  },
  // [330]
  {
    prize: 4,
    numPegs: 12,
    startX: 271.4,
    bounceRecord: [1, 3, 6, 9, 8, 13, 14, 19, 18, 25, 26, 33]
  },
  // [331]
  {
    prize: 3,
    numPegs: 10,
    startX: 271.026,
    bounceRecord: [1, 3, 5, 4, 8, 12, 18, 24, 23, 31]
  },
  // [332]
  {
    prize: 3,
    numPegs: 10,
    startX: 271.036,
    bounceRecord: [1, 3, 5, 4, 8, 17, 23, 22, 30, 31]
  },
  // [333]
  {
    prize: 3,
    numPegs: 6,
    startX: 271.282,
    bounceRecord: [1, 3, 8, 17, 23, 22]
  },
  // [334]
  {
    prize: 6,
    numPegs: 14,
    startX: 271.11,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 12, 18, 19, 20, 26, 25, 33]
  },
  // [335]
  {
    prize: 1,
    numPegs: 5,
    startX: 267.656,
    bounceRecord: [1, 2, 4, 11, 16]
  },
  // [336]
  {
    prize: 4,
    numPegs: 13,
    startX: 271.098,
    bounceRecord: [1, 3, 5, 8, 7, 12, 13, 18, 17, 24, 25, 32, 24]
  },
  // [337]
  {
    prize: 3,
    numPegs: 8,
    startX: 267.904,
    bounceRecord: [1, 2, 5, 6, 13, 18, 31, 23]
  },
  // [338]
  {
    prize: 5,
    numPegs: 10,
    startX: 271.054,
    bounceRecord: [1, 3, 5, 4, 8, 13, 14, 25, 24, 32]
  },
  // [339]
  {
    prize: 6,
    numPegs: 13,
    startX: 267.902,
    bounceRecord: [1, 2, 5, 6, 9, 13, 12, 18, 19, 26, 27, 34, 33]
  },
  // [340]
  {
    prize: 4,
    numPegs: 12,
    startX: 271.4,
    bounceRecord: [1, 3, 6, 9, 8, 13, 14, 19, 18, 25, 26, 33]
  },
  // [341]
  {
    prize: 5,
    numPegs: 8,
    startX: 271.152,
    bounceRecord: [1, 3, 5, 9, 14, 15, 20, 33]
  },
  // [342]
  {
    prize: 5,
    numPegs: 9,
    startX: 267.922,
    bounceRecord: [1, 2, 9, 14, 13, 19, 26, 27, 34]
  },
  // [343]
  {
    prize: 5,
    numPegs: 9,
    startX: 271.052,
    bounceRecord: [1, 3, 5, 4, 8, 13, 19, 20, 26]
  },
  // [344]
  {
    prize: 4,
    numPegs: 8,
    startX: 267.838,
    bounceRecord: [1, 2, 5, 9, 10, 14, 20, 33]
  },
  // [345]
  {
    prize: 5,
    numPegs: 12,
    startX: 267.896,
    bounceRecord: [1, 2, 5, 6, 9, 14, 15, 20, 19, 26, 33, 32]
  },
  // [346]
  {
    prize: 4,
    numPegs: 9,
    startX: 271.138,
    bounceRecord: [1, 3, 5, 9, 10, 14, 19, 32, 24]
  },
  // [347]
  {
    prize: 3,
    numPegs: 9,
    startX: 271.38,
    bounceRecord: [1, 3, 5, 4, 8, 17, 16, 23, 30]
  },
  // [348]
  {
    prize: 5,
    numPegs: 12,
    startX: 267.896,
    bounceRecord: [1, 2, 5, 6, 9, 14, 15, 20, 19, 26, 33, 32]
  },
  // [349]
  {
    prize: 4,
    numPegs: 10,
    startX: 267.924,
    bounceRecord: [1, 2, 9, 10, 14, 19, 18, 25, 32, 31]
  },
  // [350]
  {
    prize: 4,
    numPegs: 8,
    startX: 267.838,
    bounceRecord: [1, 2, 5, 9, 10, 14, 20, 33]
  },
  // [351]
  {
    prize: 4,
    numPegs: 9,
    startX: 271.382,
    bounceRecord: [1, 3, 5, 4, 8, 13, 14, 19, 25]
  },
  // [352]
  {
    prize: 1,
    numPegs: 4,
    startX: 267.554,
    bounceRecord: [1, 2, 4, 7]
  },
  // [353]
  {
    prize: 9,
    numPegs: 4,
    startX: 270.904,
    bounceRecord: [1, 15, 21, 36]
  },
  // [354]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.636,
    bounceRecord: [1, 2, 4]
  },
  // [355]
  {
    prize: 6,
    numPegs: 7,
    startX: 271.174,
    bounceRecord: [1, 3, 4, 19, 14, 26, 33]
  },
  // [356]
  {
    prize: 9,
    numPegs: 3,
    startX: 271.432,
    bounceRecord: [1, 3, 6]
  },
  // [357]
  {
    prize: 9,
    numPegs: 3,
    startX: 271.464,
    bounceRecord: [1, 3, 10]
  },
  // [358]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.592,
    bounceRecord: [1, 2, 16]
  },
  // [359]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.642,
    bounceRecord: [1, 6, 36]
  },
  // [360]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.604,
    bounceRecord: [1, 6, 21]
  },
  // [361]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.508,
    bounceRecord: [1, 2, 4]
  },
  // [362]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.51,
    bounceRecord: [1, 2, 4]
  },
  // [363]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.542,
    bounceRecord: [1, 6, 28]
  },
  // [364]
  {
    prize: 3,
    numPegs: 8,
    startX: 267.904,
    bounceRecord: [1, 2, 5, 6, 13, 18, 31, 23]
  },
  // [365]
  {
    prize: 6,
    numPegs: 7,
    startX: 271.096,
    bounceRecord: [1, 3, 5, 8, 7, 12, 33]
  },
  // [366]
  {
    prize: 3,
    numPegs: 9,
    startX: 271.272,
    bounceRecord: [1, 3, 12, 7, 17, 23, 22, 30, 31]
  },
  // [367]
  {
    prize: 6,
    numPegs: 11,
    startX: 271.062,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 19, 20, 26, 25]
  },
  // [368]
  {
    prize: 9,
    numPegs: 6,
    startX: 267.836,
    bounceRecord: [1, 2, 5, 9, 20, 21]
  },
  // [369]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.13,
    bounceRecord: [1, 11, 16]
  },
  // [370]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.588,
    bounceRecord: [1, 6, 15]
  },
  // [371]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.59,
    bounceRecord: [1, 6, 15]
  },
  // [372]
  {
    prize: 9,
    numPegs: 7,
    startX: 267.882,
    bounceRecord: [1, 2, 5, 14, 15, 28, 36]
  },
  // [373]
  {
    prize: 9,
    numPegs: 4,
    startX: 270.582,
    bounceRecord: [1, 6, 15, 36]
  },
  // [374]
  {
    prize: 3,
    numPegs: 7,
    startX: 271.254,
    bounceRecord: [1, 3, 5, 12, 11, 22, 30]
  },
  // [375]
  {
    prize: 1,
    numPegs: 5,
    startX: 267.734,
    bounceRecord: [1, 2, 7, 22, 29]
  },
  // [376]
  {
    prize: 3,
    numPegs: 5,
    startX: 268.42,
    bounceRecord: [1, 4, 22, 30, 31]
  },
  // [377]
  {
    prize: 3,
    numPegs: 5,
    startX: 268.12,
    bounceRecord: [1, 11, 22, 30, 31]
  },
  // [378]
  {
    prize: 6,
    numPegs: 8,
    startX: 271.094,
    bounceRecord: [1, 3, 5, 8, 7, 12, 25, 33]
  },
  // [379]
  {
    prize: 1,
    numPegs: 4,
    startX: 267.642,
    bounceRecord: [1, 2, 4, 29]
  },
  // [380]
  {
    prize: 9,
    numPegs: 4,
    startX: 267.936,
    bounceRecord: [1, 2, 9, 10]
  },
  // [381]
  {
    prize: 7,
    numPegs: 11,
    startX: 271.142,
    bounceRecord: [1, 3, 5, 9, 10, 14, 15, 20, 19, 34, 27]
  },
  // [382]
  {
    prize: 7,
    numPegs: 11,
    startX: 271.142,
    bounceRecord: [1, 3, 5, 9, 10, 14, 15, 20, 19, 34, 27]
  },
  // [383]
  {
    prize: 5,
    numPegs: 13,
    startX: 267.918,
    bounceRecord: [1, 2, 5, 6, 9, 8, 13, 14, 19, 20, 26, 25, 33]
  },
  // [384]
  {
    prize: 7,
    numPegs: 10,
    startX: 271.232,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 14, 19, 26]
  },
  // [385]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.604,
    bounceRecord: [1, 6, 21]
  },
  // [386]
  {
    prize: 6,
    numPegs: 11,
    startX: 267.854,
    bounceRecord: [1, 2, 9, 14, 15, 20, 19, 26, 27, 34, 33]
  },
  // [387]
  {
    prize: 6,
    numPegs: 11,
    startX: 271.062,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 19, 20, 26, 25]
  },
  // [388]
  {
    prize: 3,
    numPegs: 9,
    startX: 267.908,
    bounceRecord: [1, 2, 5, 6, 9, 13, 18, 31, 30]
  },
  // [389]
  {
    prize: 8,
    numPegs: 10,
    startX: 271.344,
    bounceRecord: [1, 3, 2, 5, 9, 10, 14, 27, 21, 35]
  },
  // [390]
  {
    prize: 7,
    numPegs: 8,
    startX: 267.828,
    bounceRecord: [1, 2, 14, 20, 27, 28, 35, 34]
  },
  // [391]
  {
    prize: 2,
    numPegs: 8,
    startX: 271.27,
    bounceRecord: [1, 3, 2, 5, 8, 12, 17, 23]
  },
  // [392]
  {
    prize: 7,
    numPegs: 8,
    startX: 267.894,
    bounceRecord: [1, 2, 5, 6, 9, 8, 13, 26]
  },
  // [393]
  {
    prize: 1,
    numPegs: 5,
    startX: 267.656,
    bounceRecord: [1, 2, 4, 11, 16]
  },
  // [394]
  {
    prize: 6,
    numPegs: 12,
    startX: 271.222,
    bounceRecord: [1, 3, 5, 4, 13, 18, 33, 34, 27, 26, 34, 33]
  },
  // [395]
  {
    prize: 2,
    numPegs: 6,
    startX: 268.136,
    bounceRecord: [1, 11, 16, 22, 23, 30]
  },
  // [396]
  {
    prize: 6,
    numPegs: 9,
    startX: 271.22,
    bounceRecord: [1, 3, 5, 4, 13, 18, 25, 26, 33]
  },
  // [397]
  {
    prize: 9,
    numPegs: 4,
    startX: 267.78,
    bounceRecord: [1, 2, 9, 10]
  },
  // [398]
  {
    prize: 4,
    numPegs: 9,
    startX: 267.77,
    bounceRecord: [1, 2, 5, 6, 18, 12, 24, 23, 31]
  },
  // [399]
  {
    prize: 1,
    numPegs: 5,
    startX: 271.114,
    bounceRecord: [1, 3, 5, 12, 11]
  },
  // [400]
  {
    prize: 6,
    numPegs: 11,
    startX: 271.14,
    bounceRecord: [1, 3, 5, 6, 9, 8, 13, 14, 19, 18, 25]
  },
  // [401]
  {
    prize: 6,
    numPegs: 8,
    startX: 267.898,
    bounceRecord: [1, 2, 5, 6, 9, 14, 19, 25]
  },
  // [402]
  {
    prize: 5,
    numPegs: 10,
    startX: 267.872,
    bounceRecord: [1, 2, 5, 8, 12, 11, 17, 24, 25, 32]
  },
  // [403]
  {
    prize: 6,
    numPegs: 10,
    startX: 267.846,
    bounceRecord: [1, 2, 5, 6, 9, 8, 26, 27, 34, 33]
  },
  // [404]
  {
    prize: 3,
    numPegs: 8,
    startX: 267.75,
    bounceRecord: [1, 2, 5, 6, 13, 11, 24, 31]
  },
  // [405]
  {
    prize: 5,
    numPegs: 7,
    startX: 267.698,
    bounceRecord: [1, 2, 4, 8, 19, 21, 34]
  },
  // [406]
  {
    prize: 5,
    numPegs: 9,
    startX: 267.58,
    bounceRecord: [1, 2, 4, 8, 9, 13, 26, 33, 32]
  },
  // [407]
  {
    prize: 4,
    numPegs: 10,
    startX: 267.966,
    bounceRecord: [1, 2, 5, 8, 13, 14, 19, 18, 25, 32]
  },
  // [408]
  {
    prize: 3,
    numPegs: 10,
    startX: 271.026,
    bounceRecord: [1, 3, 5, 4, 8, 12, 18, 24, 23, 31]
  },
  // [409]
  {
    prize: 5,
    numPegs: 10,
    startX: 267.81,
    bounceRecord: [1, 2, 5, 12, 13, 18, 25, 26, 33, 32]
  },
  // [410]
  {
    prize: 3,
    numPegs: 10,
    startX: 271.036,
    bounceRecord: [1, 3, 5, 4, 8, 17, 23, 22, 30, 31]
  },
  // [411]
  {
    prize: 4,
    numPegs: 11,
    startX: 271.03,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 18, 17, 24, 32]
  },
  // [412]
  {
    prize: 5,
    numPegs: 7,
    startX: 267.974,
    bounceRecord: [1, 2, 5, 12, 11, 17, 32]
  },
  // [413]
  {
    prize: 5,
    numPegs: 6,
    startX: 270.58,
    bounceRecord: [1, 6, 15, 26, 33, 32]
  },
  // [414]
  {
    prize: 3,
    numPegs: 12,
    startX: 271.298,
    bounceRecord: [1, 3, 5, 8, 7, 12, 13, 18, 24, 23, 24, 31]
  },
  // [415]
  {
    prize: 4,
    numPegs: 9,
    startX: 267.77,
    bounceRecord: [1, 2, 5, 6, 18, 12, 24, 23, 31]
  },
  // [416]
  {
    prize: 3,
    numPegs: 7,
    startX: 271.196,
    bounceRecord: [1, 3, 12, 23, 22, 30, 31]
  },
  // [417]
  {
    prize: 4,
    numPegs: 11,
    startX: 271.31,
    bounceRecord: [1, 3, 8, 4, 12, 11, 17, 24, 25, 32, 31]
  },
  // [418]
  {
    prize: 4,
    numPegs: 10,
    startX: 271.238,
    bounceRecord: [1, 3, 5, 4, 8, 17, 16, 23, 24, 31]
  },
  // [419]
  {
    prize: 4,
    numPegs: 13,
    startX: 271.046,
    bounceRecord: [1, 3, 5, 4, 8, 12, 11, 17, 18, 24, 23, 31, 24]
  },
  // [420]
  {
    prize: 6,
    numPegs: 9,
    startX: 271.108,
    bounceRecord: [1, 3, 5, 8, 13, 19, 20, 26, 25]
  },
  // [421]
  {
    prize: 5,
    numPegs: 12,
    startX: 271.292,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 14, 19, 18, 25, 32]
  },
  // [422]
  {
    prize: 4,
    numPegs: 12,
    startX: 267.814,
    bounceRecord: [1, 2, 5, 9, 10, 14, 13, 19, 20, 26, 25, 32]
  },
  // [423]
  {
    prize: 2,
    numPegs: 8,
    startX: 271.27,
    bounceRecord: [1, 3, 2, 5, 8, 12, 17, 23]
  },
  // [424]
  {
    prize: 3,
    numPegs: 10,
    startX: 267.662,
    bounceRecord: [1, 2, 4, 7, 11, 12, 17, 16, 23, 24]
  },
  // [425]
  {
    prize: 6,
    numPegs: 9,
    startX: 267.824,
    bounceRecord: [1, 2, 9, 14, 15, 20, 26, 25, 33]
  },
  // [426]
  {
    prize: 7,
    numPegs: 13,
    startX: 271.07,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 12, 18, 19, 14, 19, 26]
  },
  // [427]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.416,
    bounceRecord: [1, 4, 22]
  },
  // [428]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.642,
    bounceRecord: [1, 6, 36]
  },
  // [429]
  {
    prize: 5,
    numPegs: 9,
    startX: 271.186,
    bounceRecord: [1, 3, 12, 7, 12, 11, 17, 32, 25]
  },
  // [430]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.598,
    bounceRecord: [1, 2, 16]
  },
  // [431]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.604,
    bounceRecord: [1, 6, 21]
  },
  // [432]
  {
    prize: 6,
    numPegs: 8,
    startX: 271.226,
    bounceRecord: [1, 3, 5, 4, 8, 7, 12, 25]
  },
  // [433]
  {
    prize: 7,
    numPegs: 8,
    startX: 267.828,
    bounceRecord: [1, 2, 14, 20, 27, 28, 35, 34]
  },
  // [434]
  {
    prize: 1,
    numPegs: 4,
    startX: 267.642,
    bounceRecord: [1, 2, 4, 29]
  },
  // [435]
  {
    prize: 9,
    numPegs: 4,
    startX: 271.408,
    bounceRecord: [1, 3, 15, 28]
  },
  // [436]
  {
    prize: 5,
    numPegs: 10,
    startX: 271.136,
    bounceRecord: [1, 3, 5, 6, 9, 8, 13, 14, 19, 26]
  },
  // [437]
  {
    prize: 7,
    numPegs: 13,
    startX: 271.07,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 12, 18, 19, 14, 19, 26]
  },
  // [438]
  {
    prize: 6,
    numPegs: 11,
    startX: 271.062,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 19, 20, 26, 25]
  },
  // [439]
  {
    prize: 3,
    numPegs: 8,
    startX: 271.044,
    bounceRecord: [1, 3, 5, 4, 8, 12, 18, 31]
  },
  // [440]
  {
    prize: 7,
    numPegs: 6,
    startX: 271.396,
    bounceRecord: [1, 3, 10, 28, 35, 34]
  },
  // [441]
  {
    prize: 7,
    numPegs: 13,
    startX: 271.07,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 12, 18, 19, 14, 19, 26]
  },
  // [442]
  {
    prize: 6,
    numPegs: 8,
    startX: 271.226,
    bounceRecord: [1, 3, 5, 4, 8, 7, 12, 25]
  },
  // [443]
  {
    prize: 6,
    numPegs: 13,
    startX: 267.902,
    bounceRecord: [1, 2, 5, 6, 9, 13, 12, 18, 19, 26, 27, 34, 33]
  },
  // [444]
  {
    prize: 9,
    numPegs: 3,
    startX: 271.434,
    bounceRecord: [1, 3, 10]
  },
  // [445]
  {
    prize: 7,
    numPegs: 9,
    startX: 267.938,
    bounceRecord: [1, 2, 9, 10, 9, 14, 13, 19, 26]
  },
  // [446]
  {
    prize: 6,
    numPegs: 9,
    startX: 267.574,
    bounceRecord: [1, 2, 4, 7, 12, 18, 25, 26, 33]
  },
  // [447]
  {
    prize: 4,
    numPegs: 12,
    startX: 267.814,
    bounceRecord: [1, 2, 5, 9, 10, 14, 13, 19, 20, 26, 25, 32]
  },
  // [448]
  {
    prize: 4,
    numPegs: 8,
    startX: 267.76,
    bounceRecord: [1, 2, 9, 10, 14, 9, 19, 25]
  },
  // [449]
  {
    prize: 3,
    numPegs: 11,
    startX: 271.176,
    bounceRecord: [1, 3, 2, 5, 9, 13, 18, 17, 24, 23, 31]
  },
  // [450]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.636,
    bounceRecord: [1, 2, 4]
  },
  // [451]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.686,
    bounceRecord: [1, 2, 4]
  },
  // [452]
  {
    prize: 1,
    numPegs: 4,
    startX: 267.554,
    bounceRecord: [1, 2, 4, 7]
  },
  // [453]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.626,
    bounceRecord: [1, 6, 28]
  },
  // [454]
  {
    prize: 1,
    numPegs: 4,
    startX: 267.538,
    bounceRecord: [1, 2, 4, 16]
  },
  // [455]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.604,
    bounceRecord: [1, 6, 21]
  },
  // [456]
  {
    prize: 1,
    numPegs: 5,
    startX: 267.746,
    bounceRecord: [1, 2, 4, 11, 16]
  },
  // [457]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.504,
    bounceRecord: [1, 2, 4]
  },
  // [458]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.514,
    bounceRecord: [1, 2, 4]
  },
  // [459]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.512,
    bounceRecord: [1, 2, 4]
  },
  // [460]
  {
    prize: 6,
    numPegs: 10,
    startX: 267.808,
    bounceRecord: [1, 2, 9, 14, 15, 20, 21, 27, 34, 33]
  },
  // [461]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.47,
    bounceRecord: [1, 4, 7]
  },
  // [462]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.474,
    bounceRecord: [1, 4, 7]
  },
  // [463]
  {
    prize: 9,
    numPegs: 3,
    startX: 271.462,
    bounceRecord: [1, 3, 10]
  },
  // [464]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.588,
    bounceRecord: [1, 6, 15]
  },
  // [465]
  {
    prize: 5,
    numPegs: 10,
    startX: 271.054,
    bounceRecord: [1, 3, 5, 4, 8, 13, 14, 25, 24, 32]
  },
  // [466]
  {
    prize: 6,
    numPegs: 5,
    startX: 271.212,
    bounceRecord: [1, 3, 8, 12, 25]
  },
  // [467]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.514,
    bounceRecord: [1, 2, 4]
  },
  // [468]
  {
    prize: 5,
    numPegs: 9,
    startX: 271.052,
    bounceRecord: [1, 3, 5, 4, 8, 13, 19, 20, 26]
  },
  // [469]
  {
    prize: 5,
    numPegs: 9,
    startX: 271.052,
    bounceRecord: [1, 3, 5, 4, 8, 13, 19, 20, 26]
  },
  // [470]
  {
    prize: 6,
    numPegs: 9,
    startX: 271.22,
    bounceRecord: [1, 3, 5, 4, 13, 18, 25, 26, 33]
  },
  // [471]
  {
    prize: 7,
    numPegs: 8,
    startX: 267.916,
    bounceRecord: [1, 2, 5, 6, 13, 19, 26, 34]
  },
  // [472]
  {
    prize: 6,
    numPegs: 9,
    startX: 267.976,
    bounceRecord: [1, 2, 5, 8, 7, 12, 13, 18, 25]
  },
  // [473]
  {
    prize: 2,
    numPegs: 7,
    startX: 271.084,
    bounceRecord: [1, 3, 5, 12, 23, 30, 29]
  },
  // [474]
  {
    prize: 9,
    numPegs: 4,
    startX: 270.554,
    bounceRecord: [1, 6, 10, 15]
  },
  // [475]
  {
    prize: 8,
    numPegs: 8,
    startX: 271.266,
    bounceRecord: [1, 3, 5, 9, 10, 14, 20, 35]
  },
  // [476]
  {
    prize: 3,
    numPegs: 8,
    startX: 271.18,
    bounceRecord: [1, 3, 2, 5, 8, 23, 16, 30]
  },
  // [477]
  {
    prize: 6,
    numPegs: 10,
    startX: 271.246,
    bounceRecord: [1, 3, 5, 4, 8, 19, 14, 26, 25, 33]
  },
  // [478]
  {
    prize: 9,
    numPegs: 3,
    startX: 271.462,
    bounceRecord: [1, 3, 10]
  },
  // [479]
  {
    prize: 4,
    numPegs: 9,
    startX: 271.138,
    bounceRecord: [1, 3, 5, 9, 10, 14, 19, 32, 24]
  },
  // [480]
  {
    prize: 1,
    numPegs: 4,
    startX: 268.476,
    bounceRecord: [1, 4, 7, 29]
  },
  // [481]
  {
    prize: 6,
    numPegs: 10,
    startX: 267.846,
    bounceRecord: [1, 2, 5, 6, 9, 8, 26, 27, 34, 33]
  },
  // [482]
  {
    prize: 9,
    numPegs: 4,
    startX: 271.436,
    bounceRecord: [1, 3, 15, 36]
  },
  // [483]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.5,
    bounceRecord: [1, 4, 22]
  },
  // [484]
  {
    prize: 2,
    numPegs: 7,
    startX: 268.49,
    bounceRecord: [1, 4, 7, 12, 17, 16, 23]
  },
  // [485]
  {
    prize: 8,
    numPegs: 10,
    startX: 271.344,
    bounceRecord: [1, 3, 2, 5, 9, 10, 14, 27, 21, 35]
  },
  // [486]
  {
    prize: 1,
    numPegs: 5,
    startX: 267.572,
    bounceRecord: [1, 2, 4, 11, 22]
  },
  // [487]
  {
    prize: 1,
    numPegs: 5,
    startX: 267.572,
    bounceRecord: [1, 2, 4, 11, 22]
  },
  // [488]
  {
    prize: 2,
    numPegs: 8,
    startX: 271.27,
    bounceRecord: [1, 3, 2, 5, 8, 12, 17, 23]
  },
  // [489]
  {
    prize: 1,
    numPegs: 4,
    startX: 268.132,
    bounceRecord: [1, 11, 16, 29]
  },
  // [490]
  {
    prize: 4,
    numPegs: 12,
    startX: 267.956,
    bounceRecord: [1, 2, 3, 5, 9, 18, 17, 11, 24, 25, 32, 31]
  },
  // [491]
  {
    prize: 6,
    numPegs: 8,
    startX: 271.13,
    bounceRecord: [1, 3, 5, 12, 18, 25, 26, 33]
  },
  // [492]
  {
    prize: 6,
    numPegs: 8,
    startX: 271.226,
    bounceRecord: [1, 3, 5, 4, 8, 7, 12, 25]
  },
  // [493]
  {
    prize: 5,
    numPegs: 9,
    startX: 271.314,
    bounceRecord: [1, 3, 5, 4, 8, 9, 18, 24, 32]
  },
  // [494]
  {
    prize: 3,
    numPegs: 9,
    startX: 271.268,
    bounceRecord: [1, 3, 2, 5, 12, 7, 17, 24, 31]
  },
  // [495]
  {
    prize: 4,
    numPegs: 9,
    startX: 267.968,
    bounceRecord: [1, 2, 5, 8, 13, 18, 17, 24, 32]
  },
  // [496]
  {
    prize: 4,
    numPegs: 9,
    startX: 267.968,
    bounceRecord: [1, 2, 5, 8, 13, 18, 17, 24, 32]
  },
  // [497]
  {
    prize: 7,
    numPegs: 8,
    startX: 267.858,
    bounceRecord: [1, 2, 9, 10, 14, 13, 19, 34]
  },
  // [498]
  {
    prize: 6,
    numPegs: 5,
    startX: 271.212,
    bounceRecord: [1, 3, 8, 12, 25]
  },
  // [499]
  {
    prize: 3,
    numPegs: 5,
    startX: 268.42,
    bounceRecord: [1, 4, 22, 30, 31]
  },
  // [500]
  {
    prize: 4,
    numPegs: 7,
    startX: 271.214,
    bounceRecord: [1, 3, 8, 17, 23, 31, 32]
  },
  // [501]
  {
    prize: 3,
    numPegs: 7,
    startX: 271.086,
    bounceRecord: [1, 3, 5, 12, 23, 16, 30]
  },
  // [502]
  {
    prize: 4,
    numPegs: 11,
    startX: 271.248,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 18, 17, 24, 25]
  },
  // [503]
  {
    prize: 3,
    numPegs: 9,
    startX: 271.192,
    bounceRecord: [1, 3, 12, 17, 16, 23, 24, 31, 30]
  },
  // [504]
  {
    prize: 3,
    numPegs: 10,
    startX: 271.082,
    bounceRecord: [1, 3, 5, 12, 11, 17, 23, 22, 30, 31]
  },
  // [505]
  {
    prize: 5,
    numPegs: 9,
    startX: 271.16,
    bounceRecord: [1, 3, 5, 9, 10, 14, 13, 19, 20]
  },
  // [506]
  {
    prize: 3,
    numPegs: 11,
    startX: 271.176,
    bounceRecord: [1, 3, 2, 5, 9, 13, 18, 17, 24, 23, 31]
  },
  // [507]
  {
    prize: 3,
    numPegs: 7,
    startX: 271.196,
    bounceRecord: [1, 3, 12, 23, 22, 30, 31]
  },
  // [508]
  {
    prize: 7,
    numPegs: 11,
    startX: 271.142,
    bounceRecord: [1, 3, 5, 9, 10, 14, 15, 20, 19, 34, 27]
  },
  // [509]
  {
    prize: 5,
    numPegs: 9,
    startX: 271.244,
    bounceRecord: [1, 3, 5, 4, 8, 13, 18, 25, 26]
  },
  // [510]
  {
    prize: 6,
    numPegs: 11,
    startX: 267.948,
    bounceRecord: [1, 2, 14, 10, 14, 15, 20, 26, 27, 34, 33]
  },
  // [511]
  {
    prize: 6,
    numPegs: 11,
    startX: 271.062,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 19, 20, 26, 25]
  },
  // [512]
  {
    prize: 5,
    numPegs: 10,
    startX: 271.054,
    bounceRecord: [1, 3, 5, 4, 8, 13, 14, 25, 24, 32]
  },
  // [513]
  {
    prize: 7,
    numPegs: 11,
    startX: 271.064,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 19, 20, 26, 34]
  },
  // [514]
  {
    prize: 1,
    numPegs: 6,
    startX: 271.39,
    bounceRecord: [1, 3, 5, 12, 11, 29]
  },
  // [515]
  {
    prize: 1,
    numPegs: 6,
    startX: 271.39,
    bounceRecord: [1, 3, 5, 12, 11, 29]
  },
  // [516]
  {
    prize: 3,
    numPegs: 9,
    startX: 267.908,
    bounceRecord: [1, 2, 5, 6, 9, 13, 18, 31, 30]
  },
  // [517]
  {
    prize: 4,
    numPegs: 12,
    startX: 271.034,
    bounceRecord: [1, 3, 5, 4, 8, 7, 12, 13, 18, 17, 24, 31]
  },
  // [518]
  {
    prize: 6,
    numPegs: 8,
    startX: 271.236,
    bounceRecord: [1, 3, 5, 4, 8, 9, 18, 33]
  },
  // [519]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.932,
    bounceRecord: [1, 15, 36]
  },
  // [520]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.5,
    bounceRecord: [1, 4, 22]
  },
  // [521]
  {
    prize: 5,
    numPegs: 9,
    startX: 271.16,
    bounceRecord: [1, 3, 5, 9, 10, 14, 13, 19, 20]
  },
  // [522]
  {
    prize: 6,
    numPegs: 8,
    startX: 271.13,
    bounceRecord: [1, 3, 5, 12, 18, 25, 26, 33]
  },
  // [523]
  {
    prize: 6,
    numPegs: 8,
    startX: 271.13,
    bounceRecord: [1, 3, 5, 12, 18, 25, 26, 33]
  },
  // [524]
  {
    prize: 3,
    numPegs: 9,
    startX: 271.268,
    bounceRecord: [1, 3, 2, 5, 12, 7, 17, 24, 31]
  },
  // [525]
  {
    prize: 6,
    numPegs: 12,
    startX: 267.798,
    bounceRecord: [1, 2, 1, 2, 3, 5, 9, 13, 14, 19, 18, 25]
  },
  // [526]
  {
    prize: 4,
    numPegs: 9,
    startX: 271.28,
    bounceRecord: [1, 3, 8, 7, 12, 13, 18, 19, 25]
  },
  // [527]
  {
    prize: 6,
    numPegs: 10,
    startX: 267.826,
    bounceRecord: [1, 2, 9, 10, 14, 13, 19, 20, 26, 25]
  },
  // [528]
  {
    prize: 4,
    numPegs: 12,
    startX: 267.814,
    bounceRecord: [1, 2, 5, 9, 10, 14, 13, 19, 20, 26, 25, 32]
  },
  // [529]
  {
    prize: 5,
    numPegs: 9,
    startX: 267.754,
    bounceRecord: [1, 2, 9, 14, 15, 26, 24, 32, 33]
  },
  // [530]
  {
    prize: 7,
    numPegs: 8,
    startX: 267.828,
    bounceRecord: [1, 2, 14, 20, 27, 28, 35, 34]
  },
  // [531]
  {
    prize: 5,
    numPegs: 13,
    startX: 271.388,
    bounceRecord: [1, 3, 5, 4, 8, 13, 14, 19, 18, 25, 26, 33, 32]
  },
  // [532]
  {
    prize: 3,
    numPegs: 9,
    startX: 267.562,
    bounceRecord: [1, 2, 4, 7, 8, 12, 17, 23, 31]
  },
  // [533]
  {
    prize: 6,
    numPegs: 11,
    startX: 271.264,
    bounceRecord: [1, 3, 5, 9, 14, 20, 21, 27, 20, 34, 33]
  },
  // [534]
  {
    prize: 6,
    numPegs: 8,
    startX: 271.226,
    bounceRecord: [1, 3, 5, 4, 8, 7, 12, 25]
  },
  // [535]
  {
    prize: 4,
    numPegs: 9,
    startX: 267.968,
    bounceRecord: [1, 2, 5, 8, 13, 18, 17, 24, 32]
  },
  // [536]
  {
    prize: 6,
    numPegs: 12,
    startX: 267.768,
    bounceRecord: [1, 2, 5, 6, 9, 14, 20, 21, 27, 26, 34, 33]
  },
  // [537]
  {
    prize: 9,
    numPegs: 3,
    startX: 270.638,
    bounceRecord: [1, 6, 36]
  },
  // [538]
  {
    prize: 4,
    numPegs: 13,
    startX: 271.046,
    bounceRecord: [1, 3, 5, 4, 8, 12, 11, 17, 18, 24, 23, 31, 24]
  },
  // [539]
  {
    prize: 3,
    numPegs: 13,
    startX: 271.256,
    bounceRecord: [1, 3, 5, 8, 17, 16, 23, 24, 18, 17, 24, 31, 30]
  },
  // [540]
  {
    prize: 3,
    numPegs: 8,
    startX: 267.75,
    bounceRecord: [1, 2, 5, 6, 13, 11, 24, 31]
  },
  // [541]
  {
    prize: 5,
    numPegs: 11,
    startX: 271.372,
    bounceRecord: [1, 3, 5, 4, 8, 9, 13, 18, 17, 24, 32]
  },
  // [542]
  {
    prize: 5,
    numPegs: 11,
    startX: 271.346,
    bounceRecord: [1, 3, 2, 5, 9, 10, 14, 15, 20, 33, 32]
  },
  // [543]
  {
    prize: 5,
    numPegs: 13,
    startX: 271.388,
    bounceRecord: [1, 3, 5, 4, 8, 13, 14, 19, 18, 25, 26, 33, 32]
  },
  // [544]
  {
    prize: 5,
    numPegs: 13,
    startX: 271.388,
    bounceRecord: [1, 3, 5, 4, 8, 13, 14, 19, 18, 25, 26, 33, 32]
  },
  // [545]
  {
    prize: 3,
    numPegs: 5,
    startX: 268.122,
    bounceRecord: [1, 11, 22, 30, 31]
  },
  // [546]
  {
    prize: 5,
    numPegs: 10,
    startX: 267.81,
    bounceRecord: [1, 2, 5, 12, 13, 18, 25, 26, 33, 32]
  },
  // [547]
  {
    prize: 4,
    numPegs: 8,
    startX: 271.386,
    bounceRecord: [1, 3, 8, 12, 18, 19, 25, 33]
  },
  // [548]
  {
    prize: 5,
    numPegs: 11,
    startX: 267.736,
    bounceRecord: [1, 2, 4, 8, 9, 13, 19, 20, 26, 33, 32]
  },
  // [549]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.512,
    bounceRecord: [1, 2, 4]
  },
  // [550]
  {
    prize: 5,
    numPegs: 11,
    startX: 271.34,
    bounceRecord: [1, 3, 5, 9, 13, 12, 18, 17, 24, 25, 32]
  },
  // [551]
  {
    prize: 3,
    numPegs: 13,
    startX: 267.758,
    bounceRecord: [1, 2, 5, 6, 9, 14, 25, 24, 17, 12, 18, 13, 24]
  },
  // [552]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.684,
    bounceRecord: [1, 2, 4]
  },
  // [553]
  {
    prize: 2,
    numPegs: 12,
    startX: 267.832,
    bounceRecord: [1, 2, 3, 5, 8, 7, 12, 17, 16, 23, 30, 29]
  },
  // [554]
  {
    prize: 1,
    numPegs: 3,
    startX: 267.674,
    bounceRecord: [1, 2, 7]
  },
  // [555]
  {
    prize: 5,
    numPegs: 8,
    startX: 267.86,
    bounceRecord: [1, 2, 9, 10, 14, 20, 26, 34]
  },
  // [556]
  {
    prize: 1,
    numPegs: 5,
    startX: 271.114,
    bounceRecord: [1, 3, 5, 12, 11]
  },
  // [557]
  {
    prize: 6,
    numPegs: 12,
    startX: 271.222,
    bounceRecord: [1, 3, 5, 4, 13, 18, 33, 34, 27, 26, 34, 33]
  },
  // [558]
  {
    prize: 3,
    numPegs: 7,
    startX: 271.086,
    bounceRecord: [1, 3, 5, 12, 23, 16, 30]
  },
  // [559]
  {
    prize: 4,
    numPegs: 7,
    startX: 270.55,
    bounceRecord: [1, 6, 10, 19, 25, 24, 32]
  },
  // [560]
  {
    prize: 6,
    numPegs: 11,
    startX: 271.038,
    bounceRecord: [1, 3, 5, 4, 13, 14, 10, 19, 18, 25, 33]
  },
  // [561]
  {
    prize: 6,
    numPegs: 10,
    startX: 271.246,
    bounceRecord: [1, 3, 5, 4, 8, 19, 14, 26, 25, 33]
  },
  // [562]
  {
    prize: 2,
    numPegs: 6,
    startX: 271.308,
    bounceRecord: [1, 3, 12, 17, 16, 23]
  },
  // [563]
  {
    prize: 3,
    numPegs: 6,
    startX: 268.436,
    bounceRecord: [1, 4, 16, 22, 30, 31]
  }
];
