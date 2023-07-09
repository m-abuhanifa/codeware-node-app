function arrayCountdown(arr: number[]): [number, number[][]] {
  let count = 0;
  let sequences: number[][] = [];
  let sequence: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1] + 1) {
      sequence.push(arr[i]);
    } else if (arr[i] === 1) {
      sequence.push(arr[i]);
      count++;
      sequences.push(sequence);
      sequence = [];
    }
  }

  return [count, sequences];
}
