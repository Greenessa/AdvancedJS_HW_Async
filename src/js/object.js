import read from "./reader";
import json from "./parser";

export default (async () => {
    try {
      const data = await read();
      const value = await json(data);
      console.log(value);
      return value
    } catch (e) {
      console.log(`Файл не загрузился: ${e.message}`)
    }
  })()


  
