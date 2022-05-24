export const idPrefixes = {
  user: "user",
  good: "good",
};

const generateUniqueId = (idGoal: string) => {
  let idPrefix = "";
  switch (idGoal) {
    case idPrefixes.user:
      idPrefix = "U_";
      break;
    case idPrefixes.good:
      idPrefix = "G_";
      break;
  }
  return `${idPrefix}Date.now().toString(36) + Math.random().toString(36).substr(2)`;
};

export default generateUniqueId;
