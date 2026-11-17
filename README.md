# DOT311 — 4. Hafta Ek Etkinlik: Oyun Dashboard Paneli

Bu proje, DOT311 dersi kapsamında verilen **Oyun Dashboard Paneli Kılavuzu** ve kılavuzun sonundaki **"Erken Bitirenler İçin Ek Görevler"** ödevlerinin eksiksiz tamamlanmış halini içerir.

---

## 📌 Tamamlanan Bölümler ve Ek Görevler

1. **1. Üst Bar:**
   - Avatar resmi (`assets/avatar.png`), "Merhaba, Kaan! 👋" başlığı ve alt metin `flexDirection: 'row'` ve `alignItems: 'center'` ile dikeyde ortalı olarak konumlandırıldı.

2. **2. İstatistik Kartları (2x2 Izgara & map Kullanımı):**
   - **Ek Görev 4:** Kart verileri sabit yazılmak yerine `kartlarVerisi` dizisine taşındı ve `.map()` döngüsüyle dinamik olarak basıldı.
   - **Ek Görev 1:** Kartların renkleri, değerleri ve tematik simgeleri özelleştirildi (`borderLeftWidth: 6`, `borderLeftColor`).
   - `flexDirection: 'row'`, `flexWrap: 'wrap'`, `width: '48%'` ile 2x2 responsive ızgara oluşturuldu.

3. **3. Bağımsız `IlerlemeCubugu` Bileşeni:**
   - **Ek Görev 3:** İlerleme çubuğu bağımsız bir bileşene çevrildi (`<IlerlemeCubugu seviye={7} yuzde={65} renk="#2563eb" />`).
   - Yüzde değeri prop olarak alınarak içteki bar genişliği `${guvenliYuzde}%` şeklinde dinamik olarak ayarlandı.

4. **4. Genişletilmiş Son Etkinlikler Listesi:**
   - **Ek Görev 2:** Orijinal listedeki 3 etkinliğe 2 yeni etkinlik daha eklenerek toplam 5 etkinlik dinamik `.map()` ile listelendi. Her etkinliğe özel simge ve zaman bilgisi eklendi.

---

## 🚀 WebStorm ile Çalıştırma

1. **WebStorm'da Açma:**
   - WebStorm'u açın.
   - `File -> Open...` seçeneğinden masaüstündeki `DOT311_Hafta_04_Ek_Etkinlik` klasörünü açın.

2. **Projeyi Başlatma:**
   - WebStorm Terminalinde (`Alt + F12`):
     ```bash
     npm start
     # veya
     npx expo start
     ```

---

## 📱 Expo Go ile Mobilde Test Etme

1. Telefonunuzdaki **Expo Go** uygulamasını açın.
2. Terminaldeki QR kodu telefonunuzla taratın.
3. 2x2 kart yerleşimini, progress bar'ı ve kaydırılabilir listeyi cihazınızda anında görüntüleyin.

---

## 🌐 GitHub'a Yükleme

Terminalde sırasıyla:
```bash
git init
git add .
git commit -m "DOT311 4. Hafta Ek Etkinlik: Oyun Dashboard Paneli ve Ek Gorevler tamamlandi"
git branch -M main
git remote add origin <GITHUB_REPO_URL_ADRESINIZ>
git push -u origin main
```
