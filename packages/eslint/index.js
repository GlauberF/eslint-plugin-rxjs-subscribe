const { onFuncRequireTakeuntilOrFirstOnSubscribeCreate } = require("./requireTakeuntilOrFirstOnSubscribeCreate");

module.exports = {
  rules: {
    "require-takeuntil-or-first-on-subscribe": {
      create: onFuncRequireTakeuntilOrFirstOnSubscribeCreate,
    },
  },
};
