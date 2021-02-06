export const arraySample = (array, size = 3) => {
  const sample = [];
  const seenIdx = new Set();
  while (sample.length < size) {
    let idx = Math.floor(Math.random() * array.length);
    if (seenIdx.has(idx)) continue;

    seenIdx.add(idx);
    sample.push(array[idx]);
  }
  return sample;
};
