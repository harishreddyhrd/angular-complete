import { loopOver } from './loopOver';

// Function to loop over all the values of array having nested objects [obj(has objects), obj(has objects), obj(has objects)]
export function allValuesOf(arrayOfObjects: any): string[] {
  let allValues: any = [];
  arrayOfObjects.forEach((objct: any) => {
    let eachObjValuesArr = loopOver(objct);
    for (const eachValue of eachObjValuesArr) {
      allValues.push(eachValue);
    }
  });
  return allValues;
}
