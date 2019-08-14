function serializeArray(source, context, accumulator){
  source.forEach((item, index) => {
     serialize(item, context + '[' + index + ']', accumulator)
  });
}

function serializeObject(source, context, accumulator){
  const keys = Object.keys(source);

  keys.forEach(key => serialize(source[key], context + '.' + key, accumulator));
}

function serialize(source, context = '', accumulator = {}) {
  if (typeof source === "string") accumulator[context] = source;
  else if (typeof source === "number") accumulator[context] = source;
  else if (typeof source === "boolean") accumulator[context] = source;
  else if (Array.isArray(source)) serializeArray(source, context, accumulator)
  else serializeObject(source, context, accumulator)
  
  return accumulator;
}




