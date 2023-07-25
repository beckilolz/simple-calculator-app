let locale = "eng";
let locale_eng = {};

fetch("locale_eng.txt")
  .then((res) => res.text())
  .then((text) => {
        const obj = indexes(text, "\n");
        for (let occ in obj) {
            const number = obj[occ];
            let words;
            if (occ == 0) {
                words = text.substring(0, number);
            } else {
                words = text.substring(obj[occ-1], number); 
            }

            const where_equals = indexes(words, "=");
            const setting_name = words.substring(0, where_equals[0]).replaceAll('\n', '');
            const setting_value = words.substring(where_equals[0]+1, words.length).replaceAll('"', '').replaceAll('\n', '');
            locale_eng[setting_name] = setting_value;
       }
   })
  .catch((e) => console.error(e));

let locale_chn = {};

fetch("locale_chn.txt")
  .then((res) => res.text())
  .then((text) => {
        const obj = indexes(text, "\n");
        for (let occ in obj) {
            const number = obj[occ];
            let words;
            if (occ == 0) {
                words = text.substring(0, number);
            } else {
                words = text.substring(obj[occ-1], number); 
            }

            const where_equals = indexes(words, "=");
            const setting_name = words.substring(0, where_equals[0]).replaceAll('\n', '');
            const setting_value = words.substring(where_equals[0]+1, words.length).replaceAll('"', '').replaceAll('\n', '');
            locale_chn[setting_name] = setting_value;
       }
   })
  .catch((e) => console.error(e));