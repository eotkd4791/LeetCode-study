interface IRange {
  from: number;
  to: number;
}

interface ILabel {
  [key: string]: IRange;
}

function partitionLabels(s: string): number[] {
  const answer: number[] = [];
  const letters: ILabel = {};

  for (let i = 0; i < s.length; i++) {
    s[i] in letters ? (letters[s[i]].to = i) : (letters[s[i]] = { from: i, to: i });
  }

  let acc: IRange = { from: -1, to: -1 };
  for (const key in letters) {
    const { from, to } = letters[key];

    if (acc.from === -1 && acc.to === -1) {
      acc = letters[key];
    } else {
      if (acc.from < from && from < acc.to) {
        acc.to = Math.max(acc.to, to);
      } else {
        answer.push(acc.to - acc.from + 1);
        acc = letters[key];
      }
    }
  }
  answer.push(acc.to - acc.from + 1);
  return answer;
}
