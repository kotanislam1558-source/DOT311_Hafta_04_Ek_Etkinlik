import { StyleSheet, Text, View } from 'react-native';

export default function IlerlemeCubugu({ seviye, yuzde, renk = '#2563eb' }) {
  // Yüzde değerinin 0-100 arasında kalmasını garanti altına alalım
  const guvenliYuzde = Math.min(Math.max(yuzde, 0), 100);

  return (
    <View style={styles.bolum}>
      <View style={styles.seviyeSatir}>
        <View style={styles.seviyeKapsayici}>
          <Text style={styles.bolumBaslik}>Seviye {seviye}</Text>
          <Text style={styles.deneyimYazi}>XP İlerlemesi</Text>
        </View>
        <Text style={[styles.yuzde, { color: renk }]}>%{guvenliYuzde}</Text>
      </View>

      <View style={styles.cubukDis}>
        <View
          style={[
            styles.cubukIc,
            { width: `${guvenliYuzde}%`, backgroundColor: renk },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bolum: {
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
  seviyeSatir: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  seviyeKapsayici: {
    flexDirection: 'column',
  },
  bolumBaslik: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  deneyimYazi: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 2,
  },
  yuzde: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cubukDis: {
    height: 14,
    backgroundColor: '#e2e8f0',
    borderRadius: 7,
    overflow: 'hidden',
  },
  cubukIc: {
    height: '100%',
    borderRadius: 7,
  },
});
