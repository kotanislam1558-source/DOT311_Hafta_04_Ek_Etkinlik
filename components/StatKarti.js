import { StyleSheet, Text, View } from 'react-native';

export default function StatKarti({ deger, baslik, renk, ikon }) {
  return (
    <View style={[styles.kart, { borderLeftColor: renk }]}>
      <View style={styles.ustSatir}>
        <Text style={styles.kartDeger}>{deger}</Text>
        {ikon && <Text style={styles.kartIkon}>{ikon}</Text>}
      </View>
      <Text style={styles.kartBaslik}>{baslik}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  kart: {
    width: '48%',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 14,
    borderLeftWidth: 6,
    marginBottom: 14,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  ustSatir: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  kartDeger: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  kartIkon: {
    fontSize: 20,
  },
  kartBaslik: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '500',
  },
});
