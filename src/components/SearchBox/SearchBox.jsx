//Adım 2 - İsim ile Arama İsimle filtreleme yapmak icin bir SearchBox arama kutusu ekleyin.
// Arama kutusu - form icermeyen ve degeri duruma yazilan (kontrollu bilesen) bir girdi alanidir.
//Filtreleme mantigi buyuk/kucuk harfe duyarsiz olmalidir.

import css from "./SearchBox.module.css";

export default function SearchBox({value, onChange}) {
  return (
    <div className={css.searchBox}>
      <label className={css.label} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        id="search"
        name="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type a name to search"
      />
    </div>
  );
}
