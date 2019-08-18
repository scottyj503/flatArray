
const flatArray = () => {
  const accum = [];

  const pushData = (val) => (accum.push(val));

  const reducer = (val) => {
    if (Array.isArray(val)){
      mapReducer(val);
      return;
    }
    pushData(val);
  };

  const mapReducer = (arry) => {
    arry.map(reducer);
    return accum;
  };

  return {
    flat: (arry) => mapReducer(arry) ,
  };
}

export default flatArray;




