import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, ScrollView, SafeAreaView } from 'react-native';
import StatKarti from './components/StatKarti';
import IlerlemeCubugu from './components/IlerlemeCubugu';

// Ek Görev 4: Kart verileri diziye taşındı ve Ek Görev 1: Renkler/değerler özelleştirildi
const kartlarVerisi = [
  { id: 1, deger: '1.250', baslik: 'Puan', renk: '#2563eb', ikon: '⭐' },
  { id: 2, deger: '48', baslik: 'Galibiyet', renk: '#16a34a', ikon: '🏆' },
  { id: 3, deger: '320', baslik: 'Altın', renk: '#eab308', ikon: '🪙' },
  { id: 4, deger: '12', baslik: 'Rozet', renk: '#dc2626', ikon: '🎖️' },
];

// Ek Görev 2: 2 yeni etkinlik eklenerek liste genişletildi
const etkinlikler = [
  { id: 1, metin: 'Boss savaşını kazandın', zaman: '2 saat önce', ikon: '⚔️' },
  { id: 2, metin: 'Yeni rozet: Hız Ustası', zaman: 'Dün', ikon: '⚡' },
  { id: 3, metin: '3. seviyeyi bitirdin', zaman: '2 gün önce', ikon: '🏁' },
  { id: 4, metin: 'Günlük giriş ödülü alındı (50 Altın)', zaman: '3 gün önce', ikon: '🎁' },
  { id: 5, metin: 'Arkadaşın Zeynep ile düello yaptın', zaman: '4 gün önce', ikon: '🤝' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.guvenliAlan}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.ekran}>
        {/* Üst Bilgi Başlığı */}
        <View style={styles.bilgiBaslik}>
          <Text style={styles.dersKodu}>DOT311 — Ek Etkinlik</Text>
          <Text style={styles.baslikMetin}>Oyun Dashboard Paneli</Text>
        </View>

        {/* 1. Üst Bar: Avatar ve Karşılama */}
        <View style={styles.ustBar}>
          <Image
            source={require('./assets/avatar.png')}
            style={styles.avatar}
          />
          <View style={styles.karsilamaKutusu}>
            <Text style={styles.selam}>Merhaba, Kaan! 👋</Text>
            <Text style={styles.altYazi}>Bugün de oynayalım mı?</Text>
          </View>
        </View>

        {/* 2. İstatistik Kartları (2x2 Izgara - map ile render edildi) */}
        <View style={styles.kartlar}>
          {kartlarVerisi.map((kart) => (
            <StatKarti
              key={kart.id}
              deger={kart.deger}
              baslik={kart.baslik}
              renk={kart.renk}
              ikon={kart.ikon}
            />
          ))}
        </View>

        {/* 3. Seviye İlerleme Çubuğu (Bağımsız Bileşen olarak kullanıldı) */}
        <IlerlemeCubugu seviye={7} yuzde={65} renk="#2563eb" />

        {/* 4. Son Etkinlikler Listesi (map ile render edildi) */}
        <View style={styles.etkinlikBolumu}>
          <View style={styles.etkinlikBaslikSatiri}>
            <Text style={styles.etkinlikAnaBaslik}>Son Etkinlikler</Text>
            <Text style={styles.etkinlikSayisi}>{etkinlikler.length} Etkinlik</Text>
          </View>

          {etkinlikler.map((e, index) => (
            <View
              key={e.id}
              style={[
                styles.etkinlikSatiri,
                index === etkinlikler.length - 1 && styles.sonEtkinlikSatiri,
              ]}
            >
              <View style={styles.etkinlikSol}>
                <Text style={styles.etkinlikIkon}>{e.ikon}</Text>
                <Text style={styles.etkinlikMetin}>{e.metin}</Text>
              </View>
              <Text style={styles.zaman}>{e.zaman}</Text>
            </View>
          ))}
        </View>

        {/* Ödev Kontrol Bilgisi */}
        <View style={styles.dipnotKutusu}>
          <Text style={styles.dipnotMetin}>
            ✅ Ek Görev 1: Renkler ve değerler özelleştirildi.{'\n'}
            ✅ Ek Görev 2: 2 yeni etkinlik eklenerek liste 5'e çıkarıldı.{'\n'}
            ✅ Ek Görev 3: İlerlemeCubugu bağımsız bileşen yapıldı.{'\n'}
            ✅ Ek Görev 4: Kartlar veri dizisinden map ile üretildi.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  guvenliAlan: {
    flex: 1,
    backgroundColor: '#f4f6fb',
  },
  ekran: {
    padding: 20,
    paddingTop: 30,
    paddingBottom: 40,
  },
  bilgiBaslik: {
    marginBottom: 16,
  },
  dersKodu: {
    fontSize: 12,
    fontWeight: '800',
    color: '#2563eb',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  baslikMetin: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f172a',
    marginTop: 2,
  },
  ustBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 18,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    marginRight: 14,
    borderWidth: 2,
    borderColor: '#2563eb',
  },
  karsilamaKutusu: {
    justifyContent: 'center',
  },
  selam: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  altYazi: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 2,
  },
  kartlar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  etkinlikBolumu: {
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  etkinlikBaslikSatiri: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  etkinlikAnaBaslik: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  etkinlikSayisi: {
    fontSize: 12,
    color: '#64748b',
    fontWeight: '600',
  },
  etkinlikSatiri: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  sonEtkinlikSatiri: {
    borderBottomWidth: 0,
    paddingBottom: 4,
  },
  etkinlikSol: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 8,
  },
  etkinlikIkon: {
    fontSize: 16,
    marginRight: 10,
  },
  etkinlikMetin: {
    fontSize: 14,
    color: '#334155',
    flex: 1,
  },
  zaman: {
    fontSize: 12,
    color: '#94a3b8',
    fontWeight: '500',
  },
  dipnotKutusu: {
    padding: 14,
    backgroundColor: '#ecfdf5',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#a7f3d0',
  },
  dipnotMetin: {
    fontSize: 12,
    color: '#065f46',
    lineHeight: 18,
    fontWeight: '500',
  },
});
