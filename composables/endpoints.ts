const data: DataObject = {
  // olshopSetting: "/business/{business_id}/olshop/setting",
};

// ---------------------

type DataObject = {
  [key: string]: string;
};

type ParamsObject = {
  [key: string]: string | number;
};

function replaceParams(
  data: DataObject,
  key: string,
  params?: ParamsObject
): string {
  if (key in data) {
    let value: string = data[key];
    let placeholders: RegExpMatchArray | null = value.match(/\{(.+?)\}/g);
    if (placeholders !== null && params !== undefined) {
      placeholders?.forEach((placeholder: string) => {
        let paramName: string = placeholder.slice(1, -1);
        if (params !== undefined) {
          if (params.hasOwnProperty(paramName)) {
            value = value.replace(placeholder, params[paramName].toString());
          }
        }
      });
    } else {
      throw new Error("Format endpoint tidak valid");
    }
    return value;
  }

  throw new Error("Endpoint tidak terdaftar");
}

export function endpoints(name: any, params?: ParamsObject) {
  return replaceParams(data, name, params);
}
