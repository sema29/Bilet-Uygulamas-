# LOJIPER -  Otobüs Bilet Satış Uygulaması

Bu uygulama, güzergahları ve sefer bilgilerini içeren bir otobüs bilet satış uygulamasını içermektedir.

## Geliştirme Ortamını Kurma

Proje bağımlılıklarını yüklemek için aşağıdaki adımları takip edin:

1. Node.js'in [en son sürümünü](https://nodejs.org/) indirin ve kurun. (v18.17.1 kullanıldı)
2. Terminal veya Komut İstemi'nde proje dizinine gidin.
3. `npm install` komutunu kullanarak bağımlılıkları yükleyin.

## Uygulamayı Çalıştırma

Proje bağımlılıkları yüklendikten sonra, aşağıdaki adımları takip edin:

1. Terminal veya Komut İstemi'nde proje dizinine gidin.
2. `npm run dev` komutunu kullanarak uygulamayı başlatın.

Uygulama, [http://localhost:3000](http://localhost:3000) adresinde çalışacaktır.

## Kullanıcı Girişi

Uygulamaya giriş yapmak için aşağıdaki bilgileri kullanabilirsiniz:

- **E-posta:** sema@gmail.com
- **Parola:** 123456

## Kayıt Olma

Uygulamaya kayıt olmak için sağ üst köşede bulunan "Register" sayfasını kullanabilirsiniz. Kayıt olduktan sonra Redux üzerinden kullanıcı bilgileri saklanacaktır.

## Redux Kullanımı

Uygulama, Redux kullanarak global durumu yönetmektedir. Redux bağlantısı ve kullanımı için `lib/redux` klasörüne bakabilirsiniz. Kullanıcı bilgileri, sefer bilgileri gibi durumlar bu yapı üzerinde yönetilmektedir.

## Sefer Bilgileri

Uygulama, statik bir JSON dosyasından alınan sefer bilgilerini kullanmaktadır. Bu bilgileri projenin kök dizinindeki `busTrips.json` dosyasında bulabilirsiniz.

---

