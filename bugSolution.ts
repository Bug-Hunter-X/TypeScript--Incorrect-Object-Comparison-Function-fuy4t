function deepCompare(obj1: any, obj2: any): boolean {
  // Check if both objects are null or undefined
  if (obj1 === obj2) {
    return true;
  }

  // Check if both objects are of different types
  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  // Check if both objects are arrays
  if (Array.isArray(obj1)) {
    if (!Array.isArray(obj2) || obj1.length !== obj2.length) {
      return false;
    }
    for (let i = 0; i < obj1.length; i++) {
      if (!deepCompare(obj1[i], obj2[i])) {
        return false;
      }
    }
    return true;
  }

  // Check if both objects are objects
  if (typeof obj1 === 'object') {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let i = 0; i < keys1.length; i++) {
      const key = keys1[i];
      if (!deepCompare(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true;
  }

  // Check if both objects are primitives
  return obj1 === obj2;
}
