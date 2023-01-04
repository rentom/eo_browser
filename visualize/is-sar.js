//VERSION=3
function setup() {
  return {
    input: ["VV", "VH", "dataMask"],
    output: { bands: 5 }
  };
}

function evaluatePixel(sample) {
  return [sample.VV / 0.28,
          sample.VH / 0.26,
          sample.VH / sample.VV / 0.49,
          sample.VV / sample.VH / 0.1,
          sample.dataMask];
}
