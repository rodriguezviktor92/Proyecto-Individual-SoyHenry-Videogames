function checkIfValidUUID(str) {
  const regexExp =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;
  return regexExp.test(str);
}

function getIdName(array, subprop = "") {
  if (subprop.length === 0) {
    return array.map((object) => {
      return {
        id: object.id,
        name: object.name,
      };
    });
  } else {
    console.log(subprop);
    return array.map((object) => {
      return {
        id: object[subprop].id,
        name: object[subprop].name,
      };
    });
  }
}
module.exports = {
  checkIfValidUUID,
  getIdName,
};
