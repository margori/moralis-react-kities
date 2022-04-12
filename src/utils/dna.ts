const rawDefaultDNA = {
  headColor: '10', // 0 1
  mouthColor: '13', // 2 3
  noseColor: '13', // 4 5
  eyesColor: '96', // 6 7
  earsTailColor: '10', // 8 9
  headDotColor: '13', // 10 11
  headSideDotColor: '13', // 12 13
  eyesShape: '0', // 14
  decorationPattern: '0', // 15
  animation: '0', // 16
};

export const defaultDNA = Object.values(rawDefaultDNA).join('');
