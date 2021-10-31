function topKFrequent(nums: number[], k: number): number[] {
  const numsToFrequencyMap: { [key: number]: number } = {};
    
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
      
    numsToFrequencyMap.hasOwnProperty(element)
        ? numsToFrequencyMap[element] ++
        : numsToFrequencyMap[element] = 1;
  }

  const order: [number, number][] = [];
  for (const key in numsToFrequencyMap) {
    const frequency = numsToFrequencyMap[key];
    order.push([Number(key), Number(frequency)]);
  }

  order.sort((a, b) => b[1] - a[1]);

  const result: number[] = [];
  for (let i = 0; i < k; i++) {
    const element = order[i];
    const num = element[0];
    result.push(num);
  }
  return result;
}