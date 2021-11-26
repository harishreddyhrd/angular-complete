// Function to loop over all the values of nested objects
/* export function loopOver(obj: object) {
  let listOfAllValues: any = [];
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === 'object') {
      let arrayOfSubObjects = loopOver(value);
      for (const subObject of arrayOfSubObjects) {
        listOfAllValues.push(subObject);
      }
    } else {
      listOfAllValues.push({ key: key, value: value });
    }
  });
  return listOfAllValues;
} */

export function loopOver(obj: object) {
  let listOfAllValues: any = [];
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === 'object') {
      let arrayOfSubValues = loopOver(value);
      for (const subValue of arrayOfSubValues) {
        listOfAllValues.push(subValue);
      }
    } else {
      listOfAllValues.push(value);
    }
  });
  return listOfAllValues;
}

//works
/*  loopOver(obj: object) {
    let resultant: string[] = [];
    let str: string | number = '';
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === 'object') {
        return this.loopOver(value);
      } else {
        str = value;
        console.log(str);
      }
    });
  } */
