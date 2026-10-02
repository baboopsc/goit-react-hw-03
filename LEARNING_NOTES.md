# GOIT React HW-03 - Ogrenme Notlari

Bu dosya, odevi satir satir yazarken "hangi yontemi ne zaman kullaniyorum" sorusuna hizli cevap vermek icin hazirlandi.

## 1) Bilesen (Component) mimarisi
- Yontem: UI'yi kucuk parcalara bolmek (`App`, `ContactForm`, `SearchBox`, `ContactList`, `Contact`).
- Ne zaman kullanilir: Tek bir dosya buyuyup karmasiklasmaya basladiginda.
- Neden: Kod okunabilir olur, tekrar kullanilabilirlik artar.

## 2) `useState`
- Yontem: Degisecek veriyi state'te tutmak.
- Ne zaman kullanilir:
  - Listeye yeni kisi eklenecekse
  - Kisi silinecekse
  - Arama input degeri degisecekse
- Ornek:
```jsx
const [contacts, setContacts] = useState(initialContacts);
```

## 3) `props`
- Yontem: Veriyi parent'tan child'a gondermek.
- Ne zaman kullanilir: Cocuk bilesen bir veriyi gosterecek veya bir aksiyonu tetikleyecekse.
- Ornek:
```jsx
<ContactList contacts={contacts} />
```

## 4) Dizi listeleme (`map`)
- Yontem: Kisi dizisini ekrana kartlar halinde basmak.
- Ne zaman kullanilir: Dinamik listeler render edilirken.
- Kural: Her ogeye benzersiz `key` verilir (`id`).

## 5) Filtreleme (`filter`)
- Yontem: Arama metnine gore kisi listesini daraltmak.
- Ne zaman kullanilir: Kullanici arama kutusuna yazdikca.
- Kural: Buyuk/kucuk harfe duyarsiz karsilastirma:
```js
contact.name.toLowerCase().includes(searchText.toLowerCase())
```

## 6) Form yonetimi - Formik
- Yontem: Form state'i, submit ve hata durumlarini Formik ile yonetmek.
- Ne zaman kullanilir: Birden fazla input ve dogrulama kurali varsa.
- Neden: `onChange`, `onBlur`, `errors`, `touched` gibi islemler duzenli hale gelir.

## 7) Dogrulama - Yup
- Yontem: Form alan kurallarini schema ile tanimlamak.
- Ne zaman kullanilir: `name` ve `number` gibi alanlarin zorunlu/min-max kontrolunde.
- Ornek kurallar:
  - required
  - min(3)
  - max(50)

## 8) Benzersiz kimlik - `nanoid`
- Yontem: Yeni kisi eklerken otomatik `id` uretmek.
- Ne zaman kullanilir: Backend/veritabani yokken frontend'de benzersiz id gerektiginde.

## 9) Silme islemi
- Yontem: `setContacts(prev => prev.filter(...))`
- Ne zaman kullanilir: Delete butonuna basilinca listeden tek kaydi cikarmak.
- Ornek:
```js
setContacts(prev => prev.filter(contact => contact.id !== contactId));
```

## 10) Kalicilik - `localStorage` + `useEffect`
- Yontem:
  - Uygulama acilinca localStorage'dan oku
  - `contacts` degistikce localStorage'a yaz
- Ne zaman kullanilir: Sayfa yenilenince verinin kaybolmamasi istendiginde.

## 11) CSS Modules
- Yontem: Her bilesenin kendi `.module.css` dosyasi olur.
- Ne zaman kullanilir: Stil cakismasini engellemek istendiginde.
- Ornek:
```jsx
import css from './ContactList.module.css';
<div className={css.list}>...</div>
```

## 12) `export default`
- Yontem: Her bileseni varsayilan disa aktarma ile vermek.
- Ne zaman kullanilir: Bu odevin zorunlu kurali.
- Ornek:
```jsx
export default function ContactList() {
  ...
}
```

## 13) Adim adim gelistirme stratejisi (onerilen)
1. Iskelet bilesenleri kur.
2. `contacts` state'i ile listeyi ekrana bas.
3. `SearchBox` ile filtreyi calistir.
4. `ContactForm` + Formik/Yup ile eklemeyi calistir.
5. Delete butonu ile silmeyi ekle.
6. localStorage ile kalici hale getir.

## 14) Sik yapilan hatalar kontrol listesi
- `useState` import edilmeyi unutmak.
- Import path'inde dosya adini eksik yazmak.
- Listede `key` vermemek.
- Input'u uncontrolled birakmak.
- Ayni kisiyi tekrar eklemeyi engellememek (ileride ekleyebiliriz).

## 15) Kisa ezber
- Degisen veri -> `useState`
- Parent'tan child'a veri -> `props`
- Liste basma -> `map`
- Arama -> `filter`
- Form -> `Formik`
- Dogrulama -> `Yup`
- Benzersiz id -> `nanoid`
- Kalicilik -> `localStorage + useEffect`

## 16) Adim 1 Kontrolu - Bizden ne istendi, biz ne yaptik?

### Odevde istenen (Adim 1)
- `App` icinde kisileri tutan bir state olmali.
- Baslangicta test verisi (id, name, number) olmali.
- `ContactList` ve `Contact` bilesenleri olusturulmali.
- Kisi listesi `ContactList` ile gosterilmeli.
- Gerekli `props` parent'tan child'a aktarilmali.

### Bizim yaptigimiz
- `App.jsx` icinde `initialContacts` dizisi olusturduk.
- `useState` ile `contacts` state'i tanimladik.
- `contacts` verisini `ContactList` bilesenine prop olarak gonderdik.
- `ContactList` icinde `map` ile listeyi render ettik ve `key={id}` kullandik.
- `Contact` bilesenini ayri tuttuk; tek bir kisi kartinin icerigini o gosteriyor.
- Tum bilesenleri `export default` ile disa aktardik.

### Neden boyle yaptik?
- `App`: verinin kaynagi (single source of truth).
- `ContactList`: listeyi gezer (`map`) ve yapisal listeyi kurar.
- `Contact`: sadece tek kaydin UI'ini gosterir.
- Bu ayirim, kodu okunur ve bakimi kolay yapar.

### Adim 1 bitti mi?
- Evet. Mevcut kod yapisi Adim 1 gereksinimlerini karsiliyor.

## 17) Adim 2 Kontrolu - Isim ile arama

### Odevde istenen (Adim 2)
- `SearchBox` kontrollu input olmali.
- Filtre state'i `App` icinde tutulmali.
- Filtreleme `App` icinde yapilip sonuc `ContactList`e verilmeli.
- Arama buyuk/kucuk harfe duyarsiz olmali.

### Bizim yaptigimiz
- `App.jsx` icinde `filter` state'i acildi.
- `visibleContacts` degiskeniyle `contacts.filter(...)` yazildi.
- `SearchBox`a `value={filter}` ve `onChange={setFilter}` gecildi.
- `ContactList`e `contacts={visibleContacts}` verildi.
- `toLowerCase()` ile case-insensitive filtreleme yapildi.

### Neden boyle yaptik?
- Filtre state'i parent'ta olunca veri akisi tek yerde toplanir.
- `SearchBox` sadece girdi alir; listeleme kurali `App`te kalir.

### Adim 2 bitti mi?
- Evet. Arama kutusuna yazdikca liste anlik guncelleniyor.

## 18) Adim 3 Kontrolu - Kisi ekleme (Formik + Yup + nanoid)

### Odevde istenen (Adim 3)
- `ContactForm` ile yeni kisi eklenmeli.
- Her yeni kiside `id`, `name`, `number` olmali.
- Formik ile form yonetimi yapilmali.
- Yup ile `required`, `min(3)`, `max(50)` dogrulamasi olmali.
- Hata mesajlari gosterilmeli.

### Bizim yaptigimiz
- `ContactForm.jsx` icinde `Formik`, `Form`, `Field`, `ErrorMessage` kullanildi.
- `ContactSchema` ile Yup dogrulama kurallari tanimlandi.
- `handleSubmit` icinde `nanoid()` ile `id` uretildi.
- `onAddContact(newContact)` ile veri `App`e gonderildi.
- Basarili submit sonrasi `actions.resetForm()` ile form temizlendi.
- `App.jsx` icinde `addContact` ile yeni kisi state'e eklendi.

### Neden boyle yaptik?
- Form kurallari tek bir schema'da toplaniyor.
- Submit akisi standart ve okunur hale geliyor.

### Adim 3 bitti mi?
- Evet. Formdan yeni kisi ekleniyor ve validasyon calisiyor.

## 19) Adim 4 Kontrolu - Kisi silme

### Odevde istenen (Adim 4)
- Kisi kartindaki `Delete` butonuyla secilen kisi silinmeli.

### Bizim yaptigimiz
- `App.jsx` icinde `deleteContact(contactId)` fonksiyonu yazildi.
- Fonksiyon icinde `filter` ile ilgili id listeden cikarildi.
- `onDelete` prop'u `App -> ContactList -> Contact` zinciriyle gecildi.
- `Contact.jsx`te butona `onClick={onDelete}` baglandi.

### Neden boyle yaptik?
- Silme state degisimi parent'ta yapilirsa veri tutarliligi korunur.
- Cocuk bilesenler sadece tetikleyici olur.

### Adim 4 bitti mi?
- Evet. Delete'e basinca kisi listeden kalkiyor.

## 20) Adim 5 Kontrolu - localStorage kaliciligi

### Odevde istenen (Adim 5)
- Uygulama acilisinda kisiler localStorage'dan okunmali.
- Ekleme/silme sonrasi liste localStorage'a yazilmali.
- Sayfa yenilenince veri kaybolmamali.

### Bizim yaptigimiz
- `STORAGE_KEY` sabiti tanimlandi.
- `useState` lazy initializer ile ilk acilista localStorage okundu.
- Kayit yoksa `initialContacts` fallback olarak kullanildi.
- `useEffect` ile `contacts` degistikce localStorage'a yazildi.

### Neden boyle yaptik?
- Lazy initializer ilk render'da tek sefer okuma yapar.
- `useEffect` ile yazma islemi state degisimine baglanir.

### Adim 5 bitti mi?
- Evet. Sayfa yenilense bile kisi listesi korunuyor.
