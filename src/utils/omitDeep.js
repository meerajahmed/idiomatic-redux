const omitDeep = (input, excludes) => {
  return Object.entries(input).reduce((nextInput, [key, value]) => {
    const shouldExclude = excludes.includes(key);
    if (shouldExclude) return nextInput;

    if (Array.isArray(value)) {
      const nextValue = value.map((arrItem) => {
        if (typeof arrItem === 'object') {
          return omitDeep(arrItem, excludes);
        }
        return arrItem;
      });
      return {
        ...nextInput,
        [key]: nextValue,
      };
    }

    if (typeof value === 'object') {
      return {
        ...nextInput,
        [key]: omitDeep(value, excludes),
      };
    }

    return {
      ...nextInput,
      [key]: value,
    };
  }, {});
};

export default omitDeep;
