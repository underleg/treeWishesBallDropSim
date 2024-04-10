
////////////////////////////////////////////////////////////
// gravity = 0.14
// x_dampener = 0.5
// y_dampener = 0.55
// dxLim = 0.04
////////////////////////////////////////////////////////////

//Counts: (0)36 (1)25 (2)48 (3)37 (4)22 (5)34  = 202

let ballRecords = [
  // [0]
  {
    prize: 5,
    numPegs: 4,
    startX: 272.338,
    bounceRecord: [1, 3, 10, 14],
    randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, -1, 1]
  },
  // [1]
  {
    prize: 4,
    numPegs: 5,
    startX: 271.83,
    bounceRecord: [1, 3, 5, 8, 13],
    randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, -1, 1]
  },
  // [2]
  {
    prize: 5,
    numPegs: 5,
    startX: 269.094,
    bounceRecord: [1, 2, 5, 9, 14],
    randomDirections: [1, 1, 1, -1, -1, -1, -1, -1, -1, 1]
  },
  // [3]
  {
    prize: 6,
    numPegs: 3,
    startX: 272.446,
    bounceRecord: [1, 3, 10],
    randomDirections: [1, -1, 1, -1, -1, 1, 1, -1, 1, -1]
  },
  // [4]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.572,
    bounceRecord: [1, 2, 7],
    randomDirections: [-1, 1, -1, 1, 1, 1, 1, 1, -1, 1]
  },
  // [5]
  {
    prize: 6,
    numPegs: 3,
    startX: 272.426,
    bounceRecord: [1, 3, 10],
    randomDirections: [-1, 1, 1, -1, -1, 1, 1, -1, 1, 1]
  },
  // [6]
  {
    prize: 6,
    numPegs: 3,
    startX: 272.446,
    bounceRecord: [1, 3, 10],
    randomDirections: [-1, 1, 1, 1, -1, -1, 1, -1, -1, 1]
  },
  // [7]
  {
    prize: 1,
    numPegs: 3,
    startX: 269.248,
    bounceRecord: [1, 2, 4],
    randomDirections: [1, 1, -1, -1, -1, -1, 1, -1, -1, -1]
  },
  // [8]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.592,
    bounceRecord: [1, 2, 7],
    randomDirections: [-1, -1, -1, 1, 1, -1, 1, -1, 1, 1]
  },
  // [9]
  {
    prize: 6,
    numPegs: 3,
    startX: 271.782,
    bounceRecord: [1, 3, 15],
    randomDirections: [1, -1, 1, -1, 1, -1, -1, -1, 1, -1]
  },
  // [10]
  {
    prize: 6,
    numPegs: 4,
    startX: 272.38,
    bounceRecord: [1, 3, 10, 15],
    randomDirections: [1, -1, -1, 1, 1, 1, 1, -1, -1, 1]
  },
  // [11]
  {
    prize: 1,
    numPegs: 4,
    startX: 268.754,
    bounceRecord: [1, 2, 4, 7],
    randomDirections: [1, 1, -1, -1, -1, 1, -1, -1, -1, -1]
  },
  // [12]
  {
    prize: 6,
    numPegs: 4,
    startX: 271.73,
    bounceRecord: [1, 3, 6, 15],
    randomDirections: [-1, -1, 1, -1, 1, 1, 1, -1, 1, 1]
  },
  // [13]
  {
    prize: 4,
    numPegs: 5,
    startX: 269.194,
    bounceRecord: [1, 2, 5, 9, 10],
    randomDirections: [-1, 1, -1, -1, -1, -1, 1, 1, 1, -1]
  },
  // [14]
  {
    prize: 2,
    numPegs: 6,
    startX: 268.632,
    bounceRecord: [1, 2, 7, 11, 7, 11],
    randomDirections: [1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
  },
  // [15]
  {
    prize: 3,
    numPegs: 4,
    startX: 271.894,
    bounceRecord: [1, 3, 5, 9],
    randomDirections: [-1, -1, 1, 1, 1, 1, 1, -1, -1, -1]
  },
  // [16]
  {
    prize: 2,
    numPegs: 6,
    startX: 268.502,
    bounceRecord: [1, 4, 5, 12, 7, 12],
    randomDirections: [1, -1, 1, -1, 1, 1, -1, 1, -1, -1]
  },
  // [17]
  {
    prize: 3,
    numPegs: 6,
    startX: 269.22,
    bounceRecord: [1, 2, 7, 4, 7, 12],
    randomDirections: [-1, 1, -1, 1, -1, -1, -1, 1, 1, -1]
  },
  // [18]
  {
    prize: 4,
    numPegs: 5,
    startX: 272.326,
    bounceRecord: [1, 3, 10, 14, 13],
    randomDirections: [-1, 1, -1, 1, -1, 1, 1, 1, 1, 1]
  },
  // [19]
  {
    prize: 1,
    numPegs: 4,
    startX: 269.298,
    bounceRecord: [1, 2, 4, 7],
    randomDirections: [-1, 1, 1, 1, -1, 1, -1, -1, 1, -1]
  },
  // [20]
  {
    prize: 6,
    numPegs: 4,
    startX: 271.702,
    bounceRecord: [1, 3, 6, 10],
    randomDirections: [1, -1, -1, 1, 1, 1, 1, -1, 1, 1]
  },
  // [21]
  {
    prize: 1,
    numPegs: 4,
    startX: 269.29,
    bounceRecord: [1, 2, 4, 7],
    randomDirections: [1, -1, 1, 1, 1, -1, 1, -1, -1, -1]
  },
  // [22]
  {
    prize: 1,
    numPegs: 4,
    startX: 269.29,
    bounceRecord: [1, 2, 4, 7],
    randomDirections: [1, -1, 1, -1, -1, -1, 1, -1, 1, 1]
  },
  // [23]
  {
    prize: 2,
    numPegs: 6,
    startX: 268.63,
    bounceRecord: [1, 2, 7, 11, 7, 11],
    randomDirections: [1, -1, 1, -1, -1, 1, -1, 1, -1, -1]
  },
  // [24]
  {
    prize: 3,
    numPegs: 5,
    startX: 268.816,
    bounceRecord: [1, 2, 4, 8, 9],
    randomDirections: [-1, -1, -1, -1, -1, 1, 1, 1, -1, -1]
  },
  // [25]
  {
    prize: 4,
    numPegs: 6,
    startX: 269.198,
    bounceRecord: [1, 2, 5, 9, 10, 14],
    randomDirections: [1, 1, -1, 1, 1, 1, -1, -1, -1, -1]
  },
  // [26]
  {
    prize: 6,
    numPegs: 4,
    startX: 272.348,
    bounceRecord: [1, 3, 10, 15],
    randomDirections: [1, -1, -1, -1, -1, -1, -1, -1, 1, -1]
  },
  // [27]
  {
    prize: 2,
    numPegs: 6,
    startX: 271.814,
    bounceRecord: [1, 3, 5, 8, 12, 11],
    randomDirections: [-1, -1, 1, -1, -1, -1, 1, -1, -1, -1]
  },
  // [28]
  {
    prize: 6,
    numPegs: 4,
    startX: 271.714,
    bounceRecord: [1, 3, 6, 15],
    randomDirections: [-1, 1, 1, 1, 1, -1, 1, 1, -1, -1]
  },
  // [29]
  {
    prize: 2,
    numPegs: 5,
    startX: 271.862,
    bounceRecord: [1, 3, 5, 8, 12],
    randomDirections: [-1, 1, 1, -1, -1, 1, 1, -1, -1, -1]
  },
  // [30]
  {
    prize: 2,
    numPegs: 4,
    startX: 268.662,
    bounceRecord: [1, 2, 7, 12],
    randomDirections: [-1, -1, -1, -1, -1, -1, 1, -1, -1, -1]
  },
  // [31]
  {
    prize: 3,
    numPegs: 5,
    startX: 269.328,
    bounceRecord: [1, 2, 4, 8, 9],
    randomDirections: [-1, 1, 1, 1, -1, 1, 1, 1, 1, 1]
  },
  // [32]
  {
    prize: 4,
    numPegs: 7,
    startX: 271.526,
    bounceRecord: [1, 3, 5, 4, 13, 8, 13],
    randomDirections: [1, -1, -1, -1, 1, -1, -1, -1, -1, -1]
  },
  // [33]
  {
    prize: 4,
    numPegs: 5,
    startX: 271.83,
    bounceRecord: [1, 3, 5, 8, 13],
    randomDirections: [-1, 1, 1, 1, -1, 1, 1, 1, -1, 1]
  },
  // [34]
  {
    prize: 2,
    numPegs: 5,
    startX: 271.906,
    bounceRecord: [1, 3, 5, 8, 12],
    randomDirections: [1, 1, 1, -1, 1, 1, -1, -1, -1, 1]
  },
  // [35]
  {
    prize: 4,
    numPegs: 6,
    startX: 269.128,
    bounceRecord: [1, 2, 5, 14, 9, 14],
    randomDirections: [1, -1, 1, -1, -1, -1, 1, 1, 1, 1]
  },
  // [36]
  {
    prize: 3,
    numPegs: 7,
    startX: 269.102,
    bounceRecord: [1, 2, 5, 8, 13, 8, 13],
    randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, -1, -1]
  },
  // [37]
  {
    prize: 5,
    numPegs: 5,
    startX: 272.19,
    bounceRecord: [1, 3, 6, 9, 14],
    randomDirections: [-1, 1, -1, -1, -1, -1, -1, -1, 1, -1]
  },
  // [38]
  {
    prize: 2,
    numPegs: 6,
    startX: 271.814,
    bounceRecord: [1, 3, 5, 8, 12, 11],
    randomDirections: [1, 1, -1, -1, -1, -1, 1, -1, -1, -1]
  },
  // [39]
  {
    prize: 1,
    numPegs: 3,
    startX: 269.252,
    bounceRecord: [1, 2, 4],
    randomDirections: [1, -1, -1, -1, -1, 1, -1, -1, -1, -1]
  },
  // [40]
  {
    prize: 3,
    numPegs: 6,
    startX: 269.458,
    bounceRecord: [1, 2, 5, 6, 13, 12],
    randomDirections: [-1, 1, -1, -1, -1, -1, 1, 1, 1, -1]
  },
  // [41]
  {
    prize: 4,
    numPegs: 5,
    startX: 272.326,
    bounceRecord: [1, 3, 10, 14, 13],
    randomDirections: [-1, -1, 1, -1, -1, -1, 1, -1, -1, -1]
  },
  // [42]
  {
    prize: 1,
    numPegs: 5,
    startX: 268.758,
    bounceRecord: [1, 2, 4, 7, 11],
    randomDirections: [-1, 1, 1, 1, 1, -1, 1, 1, -1, -1]
  },
  // [43]
  {
    prize: 4,
    numPegs: 6,
    startX: 269.198,
    bounceRecord: [1, 2, 5, 9, 10, 14],
    randomDirections: [-1, 1, 1, 1, 1, -1, 1, 1, -1, -1]
  },
  // [44]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.572,
    bounceRecord: [1, 2, 7],
    randomDirections: [-1, -1, 1, -1, -1, 1, -1, -1, 1, 1]
  },
  // [45]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.546,
    bounceRecord: [1, 2, 7],
    randomDirections: [1, 1, 1, 1, 1, -1, -1, 1, -1, -1]
  },
  // [46]
  {
    prize: 6,
    numPegs: 3,
    startX: 272.406,
    bounceRecord: [1, 3, 10],
    randomDirections: [-1, -1, -1, -1, -1, -1, -1, 1, 1, 1]
  },
  // [47]
  {
    prize: 6,
    numPegs: 3,
    startX: 272.404,
    bounceRecord: [1, 3, 10],
    randomDirections: [-1, -1, 1, 1, -1, -1, 1, 1, 1, -1]
  },
  // [48]
  {
    prize: 6,
    numPegs: 3,
    startX: 271.752,
    bounceRecord: [1, 3, 6],
    randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, 1, 1]
  },
  // [49]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.604,
    bounceRecord: [1, 2, 7],
    randomDirections: [1, -1, 1, -1, 1, 1, 1, 1, 1, 1]
  },
  // [50]
  {
    prize: 1,
    numPegs: 3,
    startX: 269.21,
    bounceRecord: [1, 2, 11],
    randomDirections: [1, 1, 1, 1, 1, -1, -1, -1, 1, -1]
  },
  // [51]
  {
    prize: 6,
    numPegs: 3,
    startX: 271.784,
    bounceRecord: [1, 3, 15],
    randomDirections: [1, 1, 1, 1, 1, -1, -1, -1, 1, 1]
  },
  // [52]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.642,
    bounceRecord: [1, 2, 7],
    randomDirections: [-1, 1, 1, -1, -1, 1, -1, 1, 1, -1]
  },
  // [53]
  {
    prize: 3,
    numPegs: 3,
    startX: 268.676,
    bounceRecord: [1, 2, 7],
    randomDirections: [1, 1, -1, -1, 1, 1, -1, 1, 1, 1]
  },
  // [54]
  {
    prize: 5,
    numPegs: 4,
    startX: 269.188,
    bounceRecord: [1, 2, 5, 9],
    randomDirections: [-1, -1, 1, 1, 1, 1, -1, 1, -1, -1]
  },
  // [55]
  {
    prize: 1,
    numPegs: 3,
    startX: 269.35,
    bounceRecord: [1, 2, 4],
    randomDirections: [1, -1, -1, -1, -1, -1, 1, 1, 1, 1]
  },
  // [56]
  {
    prize: 2,
    numPegs: 4,
    startX: 268.68,
    bounceRecord: [1, 2, 7, 8],
    randomDirections: [-1, 1, 1, -1, -1, 1, -1, -1, -1, -1]
  },
  // [57]
  {
    prize: 5,
    numPegs: 4,
    startX: 272.322,
    bounceRecord: [1, 3, 10, 9],
    randomDirections: [-1, -1, -1, -1, 1, -1, -1, -1, -1, 1]
  },
  // [58]
  {
    prize: 6,
    numPegs: 4,
    startX: 272.38,
    bounceRecord: [1, 3, 10, 15],
    randomDirections: [-1, -1, -1, 1, 1, -1, 1, -1, 1, 1]
  },
  // [59]
  {
    prize: 3,
    numPegs: 6,
    startX: 269.154,
    bounceRecord: [1, 2, 5, 9, 5, 9],
    randomDirections: [-1, -1, 1, -1, 1, -1, 1, -1, -1, -1]
  },
  // [60]
  {
    prize: 1,
    numPegs: 4,
    startX: 268.756,
    bounceRecord: [1, 2, 4, 7],
    randomDirections: [1, -1, -1, -1, 1, -1, -1, 1, 1, 1]
  },
  // [61]
  {
    prize: 3,
    numPegs: 4,
    startX: 268.67,
    bounceRecord: [1, 2, 7, 12],
    randomDirections: [1, -1, -1, 1, 1, -1, 1, -1, -1, 1]
  },
  // [62]
  {
    prize: 5,
    numPegs: 6,
    startX: 269.15,
    bounceRecord: [1, 2, 5, 14, 10, 14],
    randomDirections: [1, -1, 1, -1, -1, -1, -1, -1, -1, 1]
  },
  // [63]
  {
    prize: 4,
    numPegs: 5,
    startX: 271.84,
    bounceRecord: [1, 3, 5, 8, 13],
    randomDirections: [1, -1, -1, 1, 1, 1, 1, -1, -1, 1]
  },
  // [64]
  {
    prize: 3,
    numPegs: 5,
    startX: 269.16,
    bounceRecord: [1, 2, 5, 9, 13],
    randomDirections: [-1, -1, 1, 1, 1, 1, 1, 1, -1, 1]
  },
  // [65]
  {
    prize: 3,
    numPegs: 6,
    startX: 271.518,
    bounceRecord: [1, 3, 5, 4, 8, 9],
    randomDirections: [1, -1, 1, 1, -1, -1, 1, -1, 1, -1]
  },
  // [66]
  {
    prize: 2,
    numPegs: 7,
    startX: 268.722,
    bounceRecord: [1, 2, 7, 12, 7, 12, 11],
    randomDirections: [1, 1, 1, -1, -1, 1, 1, -1, -1, 1]
  },
  // [67]
  {
    prize: 3,
    numPegs: 4,
    startX: 271.674,
    bounceRecord: [1, 3, 6, 9],
    randomDirections: [-1, 1, -1, 1, 1, 1, 1, 1, 1, 1]
  },
  // [68]
  {
    prize: 5,
    numPegs: 6,
    startX: 272.37,
    bounceRecord: [1, 3, 10, 15, 10, 15],
    randomDirections: [-1, -1, 1, -1, 1, -1, 1, -1, 1, 1]
  },
  // [69]
  {
    prize: 4,
    numPegs: 5,
    startX: 272.184,
    bounceRecord: [1, 3, 6, 9, 8],
    randomDirections: [-1, -1, 1, -1, 1, 1, 1, 1, -1, -1]
  },
  // [70]
  {
    prize: 3,
    numPegs: 5,
    startX: 268.816,
    bounceRecord: [1, 2, 4, 8, 9],
    randomDirections: [-1, -1, -1, -1, 1, 1, -1, 1, 1, -1]
  },
  // [71]
  {
    prize: 5,
    numPegs: 4,
    startX: 272.346,
    bounceRecord: [1, 3, 10, 15],
    randomDirections: [-1, -1, 1, -1, -1, 1, 1, 1, 1, 1]
  },
  // [72]
  {
    prize: 3,
    numPegs: 4,
    startX: 271.594,
    bounceRecord: [1, 3, 5, 9],
    randomDirections: [1, -1, -1, 1, 1, -1, -1, -1, 1, 1]
  },
  // [73]
  {
    prize: 3,
    numPegs: 7,
    startX: 269.46,
    bounceRecord: [1, 2, 5, 6, 13, 8, 13],
    randomDirections: [-1, 1, 1, 1, -1, 1, -1, 1, 1, 1]
  },
  // [74]
  {
    prize: 3,
    numPegs: 6,
    startX: 271.51,
    bounceRecord: [1, 3, 8, 12, 8, 12],
    randomDirections: [-1, -1, 1, -1, 1, -1, 1, 1, 1, 1]
  },
  // [75]
  {
    prize: 4,
    numPegs: 5,
    startX: 271.584,
    bounceRecord: [1, 3, 5, 9, 10],
    randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, -1, -1]
  },
  // [76]
  {
    prize: 6,
    numPegs: 6,
    startX: 272.302,
    bounceRecord: [1, 3, 10, 6, 10, 15],
    randomDirections: [1, 1, 1, -1, -1, 1, -1, 1, -1, -1]
  },
  // [77]
  {
    prize: 4,
    numPegs: 5,
    startX: 268.874,
    bounceRecord: [1, 2, 4, 8, 13],
    randomDirections: [1, 1, 1, 1, 1, 1, -1, 1, 1, 1]
  },
  // [78]
  {
    prize: 3,
    numPegs: 5,
    startX: 269.17,
    bounceRecord: [1, 2, 5, 9, 13],
    randomDirections: [1, 1, 1, 1, -1, -1, -1, -1, 1, -1]
  },
  // [79]
  {
    prize: 3,
    numPegs: 5,
    startX: 272.186,
    bounceRecord: [1, 3, 6, 9, 13],
    randomDirections: [1, 1, 1, -1, -1, -1, 1, 1, 1, -1]
  },
  // [80]
  {
    prize: 3,
    numPegs: 5,
    startX: 269.468,
    bounceRecord: [1, 2, 5, 6, 13],
    randomDirections: [-1, 1, -1, -1, -1, 1, -1, 1, -1, -1]
  },
  // [81]
  {
    prize: 5,
    numPegs: 6,
    startX: 271.604,
    bounceRecord: [1, 3, 5, 9, 14, 15],
    randomDirections: [1, 1, -1, 1, -1, 1, -1, -1, 1, -1]
  },
  // [82]
  {
    prize: 3,
    numPegs: 5,
    startX: 269.114,
    bounceRecord: [1, 2, 5, 9, 13],
    randomDirections: [1, 1, 1, 1, 1, 1, 1, 1, 1, -1]
  },
  // [83]
  {
    prize: 4,
    numPegs: 5,
    startX: 271.592,
    bounceRecord: [1, 3, 5, 9, 13],
    randomDirections: [1, 1, 1, 1, -1, -1, -1, 1, -1, 1]
  },
  // [84]
  {
    prize: 3,
    numPegs: 7,
    startX: 269.334,
    bounceRecord: [1, 2, 4, 8, 4, 8, 12],
    randomDirections: [-1, 1, 1, -1, 1, -1, 1, -1, 1, 1]
  },
  // [85]
  {
    prize: 2,
    numPegs: 4,
    startX: 271.822,
    bounceRecord: [1, 3, 5, 8],
    randomDirections: [1, -1, 1, -1, 1, 1, 1, 1, 1, 1]
  },
  // [86]
  {
    prize: 6,
    numPegs: 3,
    startX: 272.452,
    bounceRecord: [1, 3, 10],
    randomDirections: [1, -1, -1, 1, 1, -1, 1, -1, -1, 1]
  },
  // [87]
  {
    prize: 3,
    numPegs: 6,
    startX: 271.518,
    bounceRecord: [1, 3, 5, 4, 8, 9],
    randomDirections: [-1, 1, 1, -1, -1, 1, -1, 1, 1, -1]
  },
  // [88]
  {
    prize: 5,
    numPegs: 5,
    startX: 272.238,
    bounceRecord: [1, 3, 6, 10, 15],
    randomDirections: [-1, -1, -1, -1, -1, -1, -1, 1, 1, 1]
  },
  // [89]
  {
    prize: 3,
    numPegs: 6,
    startX: 271.554,
    bounceRecord: [1, 3, 5, 8, 7, 12],
    randomDirections: [1, 1, 1, 1, 1, -1, -1, -1, 1, 1]
  },
  // [90]
  {
    prize: 3,
    numPegs: 6,
    startX: 272.162,
    bounceRecord: [1, 3, 6, 9, 13, 12],
    randomDirections: [-1, -1, -1, -1, 1, -1, -1, -1, -1, 1]
  },
  // [91]
  {
    prize: 5,
    numPegs: 4,
    startX: 269.188,
    bounceRecord: [1, 2, 5, 9],
    randomDirections: [1, 1, 1, 1, 1, 1, 1, 1, 1, -1]
  },
  // [92]
  {
    prize: 3,
    numPegs: 5,
    startX: 271.808,
    bounceRecord: [1, 3, 5, 8, 7],
    randomDirections: [1, 1, 1, 1, 1, 1, -1, 1, 1, 1]
  },
  // [93]
  {
    prize: 1,
    numPegs: 4,
    startX: 268.652,
    bounceRecord: [1, 2, 7, 11],
    randomDirections: [-1, 1, 1, 1, -1, 1, -1, 1, 1, 1]
  },
  // [94]
  {
    prize: 4,
    numPegs: 5,
    startX: 272.05,
    bounceRecord: [1, 3, 6, 9, 13],
    randomDirections: [1, -1, 1, -1, -1, -1, -1, -1, -1, 1]
  },
  // [95]
  {
    prize: 3,
    numPegs: 5,
    startX: 272.126,
    bounceRecord: [1, 3, 6, 9, 13],
    randomDirections: [-1, -1, 1, -1, 1, -1, 1, 1, 1, 1]
  },
  // [96]
  {
    prize: 4,
    numPegs: 3,
    startX: 272.324,
    bounceRecord: [1, 3, 10],
    randomDirections: [1, 1, 1, 1, 1, -1, -1, -1, 1, 1]
  },
  // [97]
  {
    prize: 2,
    numPegs: 7,
    startX: 268.722,
    bounceRecord: [1, 2, 7, 12, 7, 12, 11],
    randomDirections: [-1, -1, 1, -1, 1, -1, 1, 1, 1, 1]
  },
  // [98]
  {
    prize: 1,
    numPegs: 3,
    startX: 269.212,
    bounceRecord: [1, 2, 11],
    randomDirections: [1, 1, 1, 1, 1, -1, -1, -1, 1, 1]
  },
  // [99]
  {
    prize: 6,
    numPegs: 3,
    startX: 272.454,
    bounceRecord: [1, 3, 10],
    randomDirections: [1, 1, -1, -1, -1, -1, 1, 1, -1, 1]
  },
  // [100]
  {
    prize: 6,
    numPegs: 3,
    startX: 272.444,
    bounceRecord: [1, 3, 10],
    randomDirections: [-1, -1, 1, -1, 1, 1, -1, -1, 1, -1]
  },
  // [101]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.55,
    bounceRecord: [1, 2, 7],
    randomDirections: [1, -1, -1, 1, 1, 1, 1, -1, -1, 1]
  },
  // [102]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.59,
    bounceRecord: [1, 2, 7],
    randomDirections: [-1, 1, -1, 1, -1, 1, -1, -1, -1, 1]
  },
  // [103]
  {
    prize: 1,
    numPegs: 3,
    startX: 269.254,
    bounceRecord: [1, 2, 4],
    randomDirections: [-1, -1, -1, -1, 1, -1, 1, -1, -1, 1]
  },
  // [104]
  {
    prize: 1,
    numPegs: 3,
    startX: 269.35,
    bounceRecord: [1, 2, 4],
    randomDirections: [-1, -1, 1, -1, 1, -1, -1, 1, 1, 1]
  },
  // [105]
  {
    prize: 5,
    numPegs: 4,
    startX: 272.32,
    bounceRecord: [1, 3, 10, 9],
    randomDirections: [-1, 1, 1, 1, -1, -1, 1, -1, 1, 1]
  },
  // [106]
  {
    prize: 1,
    numPegs: 6,
    startX: 268.7,
    bounceRecord: [1, 2, 7, 4, 7, 11],
    randomDirections: [1, -1, -1, -1, -1, 1, 1, 1, 1, -1]
  },
  // [107]
  {
    prize: 2,
    numPegs: 6,
    startX: 268.502,
    bounceRecord: [1, 4, 5, 12, 7, 12],
    randomDirections: [1, -1, -1, -1, 1, 1, -1, 1, 1, -1]
  },
  // [108]
  {
    prize: 4,
    numPegs: 5,
    startX: 269.144,
    bounceRecord: [1, 2, 5, 9, 10],
    randomDirections: [-1, -1, 1, 1, -1, -1, 1, -1, -1, -1]
  },
  // [109]
  {
    prize: 6,
    numPegs: 4,
    startX: 272.352,
    bounceRecord: [1, 3, 10, 15],
    randomDirections: [-1, 1, 1, 1, -1, -1, 1, -1, 1, -1]
  },
  // [110]
  {
    prize: 4,
    numPegs: 5,
    startX: 269.142,
    bounceRecord: [1, 2, 5, 9, 10],
    randomDirections: [1, -1, 1, -1, -1, -1, -1, -1, 1, -1]
  },
  // [111]
  {
    prize: 3,
    numPegs: 4,
    startX: 271.512,
    bounceRecord: [1, 3, 8, 7],
    randomDirections: [-1, -1, 1, 1, -1, -1, 1, 1, -1, 1]
  },
  // [112]
  {
    prize: 1,
    numPegs: 4,
    startX: 269.298,
    bounceRecord: [1, 2, 4, 7],
    randomDirections: [-1, -1, -1, -1, 1, 1, -1, 1, -1, 1]
  },
  // [113]
  {
    prize: 4,
    numPegs: 6,
    startX: 269.198,
    bounceRecord: [1, 2, 5, 9, 10, 14],
    randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, -1, -1]
  },
  // [114]
  {
    prize: 3,
    numPegs: 7,
    startX: 269.156,
    bounceRecord: [1, 2, 5, 9, 5, 9, 13],
    randomDirections: [-1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
  },
  // [115]
  {
    prize: 3,
    numPegs: 7,
    startX: 269.156,
    bounceRecord: [1, 2, 5, 9, 5, 9, 13],
    randomDirections: [1, 1, -1, 1, -1, -1, 1, 1, -1, 1]
  },
  // [116]
  {
    prize: 3,
    numPegs: 5,
    startX: 268.818,
    bounceRecord: [1, 2, 4, 8, 9],
    randomDirections: [1, 1, 1, -1, 1, -1, 1, -1, -1, 1]
  },
  // [117]
  {
    prize: 4,
    numPegs: 4,
    startX: 269.406,
    bounceRecord: [1, 2, 5, 8],
    randomDirections: [1, 1, 1, 1, 1, -1, 1, 1, 1, -1]
  },
  // [118]
  {
    prize: 2,
    numPegs: 4,
    startX: 268.626,
    bounceRecord: [1, 2, 7, 11],
    randomDirections: [-1, 1, 1, 1, 1, -1, -1, -1, 1, 1]
  },
  // [119]
  {
    prize: 4,
    numPegs: 7,
    startX: 271.54,
    bounceRecord: [1, 3, 5, 4, 13, 9, 13],
    randomDirections: [-1, 1, -1, -1, 1, -1, 1, -1, -1, 1]
  },
  // [120]
  {
    prize: 3,
    numPegs: 5,
    startX: 269.328,
    bounceRecord: [1, 2, 4, 8, 9],
    randomDirections: [-1, 1, -1, -1, -1, 1, -1, -1, -1, -1]
  },
  // [121]
  {
    prize: 3,
    numPegs: 7,
    startX: 269.39,
    bounceRecord: [1, 2, 5, 6, 13, 8, 13],
    randomDirections: [1, 1, 1, -1, -1, 1, -1, 1, -1, 1]
  },
  // [122]
  {
    prize: 3,
    numPegs: 5,
    startX: 272.126,
    bounceRecord: [1, 3, 6, 9, 13],
    randomDirections: [-1, 1, 1, -1, -1, 1, 1, 1, -1, 1]
  },
  // [123]
  {
    prize: 4,
    numPegs: 5,
    startX: 271.83,
    bounceRecord: [1, 3, 5, 8, 13],
    randomDirections: [1, 1, -1, -1, -1, -1, 1, 1, 1, 1]
  },
  // [124]
  {
    prize: 2,
    numPegs: 5,
    startX: 268.784,
    bounceRecord: [1, 2, 4, 7, 12],
    randomDirections: [1, 1, 1, 1, -1, -1, -1, -1, 1, 1]
  },
  // [125]
  {
    prize: 5,
    numPegs: 7,
    startX: 272.232,
    bounceRecord: [1, 3, 6, 10, 14, 10, 14],
    randomDirections: [-1, 1, 1, 1, -1, 1, -1, 1, 1, 1]
  },
  // [126]
  {
    prize: 5,
    numPegs: 5,
    startX: 272.238,
    bounceRecord: [1, 3, 6, 10, 15],
    randomDirections: [-1, 1, -1, 1, -1, -1, 1, 1, 1, -1]
  },
  // [127]
  {
    prize: 2,
    numPegs: 5,
    startX: 271.906,
    bounceRecord: [1, 3, 5, 8, 12],
    randomDirections: [1, -1, 1, -1, 1, 1, -1, 1, -1, 1]
  },
  // [128]
  {
    prize: 3,
    numPegs: 5,
    startX: 268.87,
    bounceRecord: [1, 2, 4, 8, 13],
    randomDirections: [1, -1, -1, -1, 1, -1, 1, 1, 1, 1]
  },
  // [129]
  {
    prize: 4,
    numPegs: 5,
    startX: 271.592,
    bounceRecord: [1, 3, 5, 9, 13],
    randomDirections: [-1, 1, -1, 1, -1, -1, -1, 1, -1, -1]
  },
  // [130]
  {
    prize: 3,
    numPegs: 5,
    startX: 271.652,
    bounceRecord: [1, 3, 6, 9, 13],
    randomDirections: [1, -1, 1, -1, 1, -1, 1, -1, 1, -1]
  },
  // [131]
  {
    prize: 5,
    numPegs: 5,
    startX: 272.19,
    bounceRecord: [1, 3, 6, 9, 14],
    randomDirections: [1, -1, -1, -1, 1, 1, 1, -1, 1, -1]
  },
  // [132]
  {
    prize: 6,
    numPegs: 3,
    startX: 272.436,
    bounceRecord: [1, 3, 10],
    randomDirections: [-1, -1, 1, 1, 1, -1, -1, -1, -1, 1]
  },
  // [133]
  {
    prize: 1,
    numPegs: 3,
    startX: 269.248,
    bounceRecord: [1, 2, 4],
    randomDirections: [-1, 1, -1, 1, -1, 1, 1, -1, -1, -1]
  },
  // [134]
  {
    prize: 6,
    numPegs: 3,
    startX: 272.394,
    bounceRecord: [1, 3, 10],
    randomDirections: [1, 1, 1, -1, -1, 1, -1, 1, 1, 1]
  },
  // [135]
  {
    prize: 6,
    numPegs: 3,
    startX: 271.748,
    bounceRecord: [1, 3, 6],
    randomDirections: [-1, 1, 1, -1, 1, 1, -1, 1, -1, 1]
  },
  // [136]
  {
    prize: 6,
    numPegs: 4,
    startX: 272.264,
    bounceRecord: [1, 3, 6, 15],
    randomDirections: [1, -1, -1, 1, 1, 1, 1, -1, -1, 1]
  },
  // [137]
  {
    prize: 6,
    numPegs: 3,
    startX: 271.792,
    bounceRecord: [1, 3, 15],
    randomDirections: [1, 1, 1, 1, 1, -1, 1, 1, -1, -1]
  },
  // [138]
  {
    prize: 1,
    numPegs: 3,
    startX: 269.216,
    bounceRecord: [1, 2, 11],
    randomDirections: [1, 1, -1, 1, -1, -1, -1, -1, -1, 1]
  },
  // [139]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.64,
    bounceRecord: [1, 2, 7],
    randomDirections: [-1, -1, 1, -1, -1, 1, -1, -1, 1, -1]
  },
  // [140]
  {
    prize: 5,
    numPegs: 4,
    startX: 272.318,
    bounceRecord: [1, 3, 10, 9],
    randomDirections: [-1, 1, 1, -1, -1, 1, 1, 1, 1, 1]
  },
  // [141]
  {
    prize: 6,
    numPegs: 4,
    startX: 271.73,
    bounceRecord: [1, 3, 6, 15],
    randomDirections: [1, 1, -1, -1, 1, -1, 1, 1, -1, 1]
  },
  // [142]
  {
    prize: 2,
    numPegs: 6,
    startX: 268.634,
    bounceRecord: [1, 2, 7, 11, 7, 11],
    randomDirections: [1, -1, -1, 1, -1, -1, -1, -1, 1, 1]
  },
  // [143]
  {
    prize: 1,
    numPegs: 4,
    startX: 268.62,
    bounceRecord: [1, 2, 7, 11],
    randomDirections: [1, -1, -1, -1, 1, 1, -1, 1, 1, -1]
  },
  // [144]
  {
    prize: 1,
    numPegs: 4,
    startX: 268.734,
    bounceRecord: [1, 2, 4, 11],
    randomDirections: [-1, -1, 1, 1, -1, -1, 1, -1, 1, -1]
  },
  // [145]
  {
    prize: 1,
    numPegs: 3,
    startX: 269.212,
    bounceRecord: [1, 2, 11],
    randomDirections: [1, 1, 1, -1, -1, 1, -1, 1, -1, 1]
  },
  // [146]
  {
    prize: 2,
    numPegs: 6,
    startX: 268.5,
    bounceRecord: [1, 4, 5, 12, 7, 12],
    randomDirections: [-1, 1, 1, -1, -1, 1, -1, -1, 1, 1]
  },
  // [147]
  {
    prize: 1,
    numPegs: 4,
    startX: 268.648,
    bounceRecord: [1, 2, 7, 11],
    randomDirections: [1, -1, -1, 1, -1, 1, 1, 1, 1, 1]
  },
  // [148]
  {
    prize: 3,
    numPegs: 6,
    startX: 271.51,
    bounceRecord: [1, 3, 8, 12, 8, 12],
    randomDirections: [-1, -1, 1, -1, 1, -1, -1, 1, 1, 1]
  },
  // [149]
  {
    prize: 4,
    numPegs: 5,
    startX: 269.192,
    bounceRecord: [1, 2, 5, 9, 10],
    randomDirections: [-1, -1, 1, 1, -1, -1, 1, -1, -1, -1]
  },
  // [150]
  {
    prize: 4,
    numPegs: 6,
    startX: 269.484,
    bounceRecord: [1, 2, 5, 6, 9, 8],
    randomDirections: [1, 1, -1, 1, -1, -1, 1, -1, 1, 1]
  },
  // [151]
  {
    prize: 3,
    numPegs: 6,
    startX: 269.22,
    bounceRecord: [1, 2, 7, 4, 7, 12],
    randomDirections: [-1, -1, -1, 1, -1, -1, -1, 1, -1, 1]
  },
  // [152]
  {
    prize: 4,
    numPegs: 6,
    startX: 269.478,
    bounceRecord: [1, 2, 5, 6, 9, 8],
    randomDirections: [1, -1, -1, 1, 1, 1, 1, 1, 1, 1]
  },
  // [153]
  {
    prize: 3,
    numPegs: 4,
    startX: 272.18,
    bounceRecord: [1, 3, 6, 13],
    randomDirections: [1, 1, 1, 1, -1, -1, 1, 1, -1, 1]
  },
  // [154]
  {
    prize: 6,
    numPegs: 3,
    startX: 272.428,
    bounceRecord: [1, 3, 10],
    randomDirections: [1, -1, -1, -1, 1, 1, 1, -1, 1, -1]
  },
  // [155]
  {
    prize: 2,
    numPegs: 4,
    startX: 268.654,
    bounceRecord: [1, 2, 7, 11],
    randomDirections: [1, 1, 1, -1, 1, -1, 1, 1, -1, -1]
  },
  // [156]
  {
    prize: 2,
    numPegs: 4,
    startX: 268.654,
    bounceRecord: [1, 2, 7, 11],
    randomDirections: [-1, 1, 1, -1, -1, 1, 1, 1, -1, 1]
  },
  // [157]
  {
    prize: 5,
    numPegs: 4,
    startX: 272.374,
    bounceRecord: [1, 3, 10, 15],
    randomDirections: [1, 1, 1, 1, 1, 1, -1, 1, 1, 1]
  },
  // [158]
  {
    prize: 3,
    numPegs: 6,
    startX: 269.458,
    bounceRecord: [1, 2, 5, 6, 13, 12],
    randomDirections: [-1, -1, -1, 1, -1, 1, 1, 1, 1, 1]
  },
  // [159]
  {
    prize: 4,
    numPegs: 7,
    startX: 271.54,
    bounceRecord: [1, 3, 5, 4, 13, 9, 13],
    randomDirections: [1, 1, 1, -1, -1, 1, 1, 1, -1, 1]
  },
  // [160]
  {
    prize: 4,
    numPegs: 7,
    startX: 271.54,
    bounceRecord: [1, 3, 5, 4, 13, 9, 13],
    randomDirections: [1, -1, 1, 1, -1, -1, -1, 1, 1, 1]
  },
  // [161]
  {
    prize: 2,
    numPegs: 6,
    startX: 271.814,
    bounceRecord: [1, 3, 5, 8, 12, 11],
    randomDirections: [1, -1, -1, -1, -1, -1, -1, -1, 1, 1]
  },
  // [162]
  {
    prize: 6,
    numPegs: 4,
    startX: 271.714,
    bounceRecord: [1, 3, 6, 15],
    randomDirections: [-1, -1, -1, 1, -1, 1, 1, -1, -1, -1]
  },
  // [163]
  {
    prize: 2,
    numPegs: 4,
    startX: 271.812,
    bounceRecord: [1, 3, 5, 8],
    randomDirections: [-1, 1, 1, 1, -1, 1, -1, 1, 1, 1]
  },
  // [164]
  {
    prize: 4,
    numPegs: 5,
    startX: 271.87,
    bounceRecord: [1, 3, 5, 8, 13],
    randomDirections: [1, 1, -1, -1, -1, 1, 1, -1, 1, -1]
  },
  // [165]
  {
    prize: 5,
    numPegs: 6,
    startX: 269.148,
    bounceRecord: [1, 2, 5, 14, 10, 14],
    randomDirections: [1, -1, -1, 1, -1, 1, 1, -1, -1, -1]
  },
  // [166]
  {
    prize: 1,
    numPegs: 4,
    startX: 268.648,
    bounceRecord: [1, 2, 7, 11],
    randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, -1, -1]
  },
  // [167]
  {
    prize: 5,
    numPegs: 6,
    startX: 269.15,
    bounceRecord: [1, 2, 5, 14, 10, 14],
    randomDirections: [-1, 1, 1, -1, -1, 1, 1, -1, 1, -1]
  },
  // [168]
  {
    prize: 3,
    numPegs: 7,
    startX: 269.474,
    bounceRecord: [1, 2, 5, 6, 13, 9, 13],
    randomDirections: [1, -1, -1, -1, -1, -1, 1, -1, 1, 1]
  },
  // [169]
  {
    prize: 2,
    numPegs: 7,
    startX: 268.76,
    bounceRecord: [1, 2, 4, 7, 11, 7, 11],
    randomDirections: [1, 1, -1, -1, 1, 1, -1, 1, 1, 1]
  },
  // [170]
  {
    prize: 3,
    numPegs: 5,
    startX: 272.126,
    bounceRecord: [1, 3, 6, 9, 13],
    randomDirections: [-1, -1, -1, -1, -1, -1, -1, 1, -1, -1]
  },
  // [171]
  {
    prize: 6,
    numPegs: 4,
    startX: 272.226,
    bounceRecord: [1, 3, 6, 15],
    randomDirections: [-1, -1, -1, -1, 1, 1, -1, 1, -1, 1]
  },
  // [172]
  {
    prize: 3,
    numPegs: 6,
    startX: 272.162,
    bounceRecord: [1, 3, 6, 9, 13, 12],
    randomDirections: [-1, -1, 1, -1, -1, -1, -1, 1, 1, 1]
  },
  // [173]
  {
    prize: 5,
    numPegs: 7,
    startX: 272.232,
    bounceRecord: [1, 3, 6, 10, 14, 10, 14],
    randomDirections: [1, 1, -1, 1, 1, -1, 1, 1, 1, -1]
  },
  // [174]
  {
    prize: 3,
    numPegs: 5,
    startX: 269.47,
    bounceRecord: [1, 2, 5, 6, 13],
    randomDirections: [1, 1, 1, 1, -1, -1, 1, 1, 1, -1]
  },
  // [175]
  {
    prize: 4,
    numPegs: 5,
    startX: 271.866,
    bounceRecord: [1, 3, 5, 8, 13],
    randomDirections: [-1, -1, -1, 1, 1, -1, 1, -1, 1, 1]
  },
  // [176]
  {
    prize: 3,
    numPegs: 7,
    startX: 271.864,
    bounceRecord: [1, 3, 5, 8, 12, 8, 12],
    randomDirections: [1, 1, 1, 1, -1, 1, 1, -1, -1, 1]
  },
  // [177]
  {
    prize: 4,
    numPegs: 5,
    startX: 269.348,
    bounceRecord: [1, 2, 4, 8, 13],
    randomDirections: [-1, 1, 1, 1, 1, -1, 1, -1, -1, -1]
  },
  // [178]
  {
    prize: 4,
    numPegs: 5,
    startX: 271.592,
    bounceRecord: [1, 3, 5, 9, 13],
    randomDirections: [-1, 1, 1, 1, 1, -1, 1, 1, -1, -1]
  },
  // [179]
  {
    prize: 4,
    numPegs: 4,
    startX: 272.33,
    bounceRecord: [1, 3, 10, 14],
    randomDirections: [1, -1, 1, -1, 1, 1, -1, 1, -1, 1]
  },
  // [180]
  {
    prize: 1,
    numPegs: 4,
    startX: 268.774,
    bounceRecord: [1, 2, 4, 11],
    randomDirections: [1, 1, 1, 1, -1, -1, -1, -1, 1, 1]
  },
  // [181]
  {
    prize: 4,
    numPegs: 6,
    startX: 269.5,
    bounceRecord: [1, 2, 9, 6, 9, 14],
    randomDirections: [1, -1, -1, -1, 1, -1, 1, 1, 1, 1]
  },
  // [182]
  {
    prize: 4,
    numPegs: 5,
    startX: 272.05,
    bounceRecord: [1, 3, 6, 9, 13],
    randomDirections: [-1, 1, -1, 1, -1, -1, 1, 1, 1, -1]
  },
  // [183]
  {
    prize: 6,
    numPegs: 3,
    startX: 272.41,
    bounceRecord: [1, 3, 10],
    randomDirections: [-1, 1, 1, -1, -1, 1, 1, 1, 1, 1]
  },
  // [184]
  {
    prize: 6,
    numPegs: 3,
    startX: 272.43,
    bounceRecord: [1, 3, 10],
    randomDirections: [-1, 1, 1, -1, -1, 1, -1, -1, 1, 1]
  },
  // [185]
  {
    prize: 3,
    numPegs: 5,
    startX: 268.816,
    bounceRecord: [1, 2, 4, 8, 9],
    randomDirections: [1, 1, 1, -1, -1, 1, -1, 1, 1, 1]
  },
  // [186]
  {
    prize: 1,
    numPegs: 3,
    startX: 268.568,
    bounceRecord: [1, 2, 7],
    randomDirections: [1, 1, 1, -1, -1, 1, 1, 1, -1, 1]
  },
  // [187]
  {
    prize: 3,
    numPegs: 5,
    startX: 268.818,
    bounceRecord: [1, 2, 4, 8, 9],
    randomDirections: [1, 1, 1, 1, 1, -1, 1, 1, -1, -1]
  },
  // [188]
  {
    prize: 6,
    numPegs: 4,
    startX: 272.378,
    bounceRecord: [1, 3, 10, 15],
    randomDirections: [1, 1, 1, -1, 1, -1, 1, 1, -1, -1]
  },
  // [189]
  {
    prize: 1,
    numPegs: 4,
    startX: 269.272,
    bounceRecord: [1, 2, 4, 11],
    randomDirections: [1, -1, -1, 1, -1, 1, 1, -1, -1, -1]
  },
  // [190]
  {
    prize: 6,
    numPegs: 4,
    startX: 272.262,
    bounceRecord: [1, 3, 6, 15],
    randomDirections: [-1, 1, 1, 1, -1, 1, -1, 1, 1, 1]
  },
  // [191]
  {
    prize: 6,
    numPegs: 3,
    startX: 272.432,
    bounceRecord: [1, 3, 10],
    randomDirections: [1, -1, -1, -1, 1, -1, 1, 1, 1, 1]
  },
  // [192]
  {
    prize: 5,
    numPegs: 4,
    startX: 272.068,
    bounceRecord: [1, 3, 6, 9],
    randomDirections: [-1, -1, -1, -1, 1, 1, -1, 1, -1, 1]
  },
  // [193]
  {
    prize: 4,
    numPegs: 4,
    startX: 268.834,
    bounceRecord: [1, 2, 4, 8],
    randomDirections: [1, 1, 1, 1, -1, 1, 1, -1, -1, 1]
  },
  // [194]
  {
    prize: 3,
    numPegs: 5,
    startX: 268.816,
    bounceRecord: [1, 2, 4, 8, 9],
    randomDirections: [1, 1, 1, 1, -1, -1, 1, 1, 1, -1]
  },
  // [195]
  {
    prize: 4,
    numPegs: 7,
    startX: 269.164,
    bounceRecord: [1, 2, 5, 9, 13, 9, 13],
    randomDirections: [1, 1, -1, -1, 1, 1, -1, 1, 1, 1]
  },
  // [196]
  {
    prize: 2,
    numPegs: 5,
    startX: 268.784,
    bounceRecord: [1, 2, 4, 7, 12],
    randomDirections: [1, 1, -1, 1, 1, -1, 1, 1, 1, -1]
  },
  // [197]
  {
    prize: 1,
    numPegs: 4,
    startX: 269.286,
    bounceRecord: [1, 2, 4, 11],
    randomDirections: [1, 1, 1, 1, -1, -1, -1, -1, 1, 1]
  },
  // [198]
  {
    prize: 3,
    numPegs: 5,
    startX: 268.842,
    bounceRecord: [1, 2, 4, 7, 12],
    randomDirections: [1, 1, 1, -1, 1, 1, 1, 1, -1, -1]
  },
  // [199]
  {
    prize: 2,
    numPegs: 7,
    startX: 268.76,
    bounceRecord: [1, 2, 4, 7, 11, 7, 11],
    randomDirections: [-1, 1, 1, 1, 1, -1, 1, -1, -1, -1]
  },
  // [200]
  {
    prize: 6,
    numPegs: 3,
    startX: 271.65,
    bounceRecord: [1, 3, 6],
    randomDirections: [1, 1, 1, 1, -1, 1, 1, -1, -1, 1]
  },
  // [201]
  {
    prize: 5,
    numPegs: 6,
    startX: 269.186,
    bounceRecord: [1, 2, 5, 9, 14, 15],
    randomDirections: [-1, -1, -1, -1, 1, 1, -1, 1, -1, 1]
  }
];
