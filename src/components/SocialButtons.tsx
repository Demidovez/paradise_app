import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Style from '../style/Light';

interface ISocial {
  link: string;
  label: string;
  color: string;
  icon: string;
  colorIcon: string;
}

function SocialButtons() {
  const [socials, setSocials] = useState<ISocial[]>([]);

  useEffect(() => {
    const socials: ISocial[] = [
      {
        link: 'https://financialparadise.by',
        label: 'Наш сайт, financialparadise.by',
        icon: 'link',
        color: '#81ecec33',
        colorIcon: '#00cec9CC',
      },
      {
        link: 'https://financialparadise.by',
        label: 'Инстаграм, @financial_paradisee',
        icon: 'instagram',
        color: '#fd79a833',
        colorIcon: '#e84393CC',
      },
      {
        link: 'https://financialparadise.by',
        label: 'Чат в телеграм',
        icon: 'telegram',
        color: '#74b9ff33',
        colorIcon: '#0984e3CC',
      },
    ];

    setSocials(socials);
  }, []);

  return (
    <View style={styles.container}>
      {socials.map(social => (
        <View key={social.label} style={styles.social}>
          <View style={[styles.icon, {backgroundColor: social.color}]}>
            <Icon name={social.icon} color={social.colorIcon} size={23} />
          </View>
          <Text style={styles.label}>{social.label}</Text>
        </View>
      ))}
    </View>
  );
}

export default React.memo(SocialButtons);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 0,
  },
  social: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  icon: {
    padding: 11,
    borderRadius: 100,
    aspectRatio: 1,
    marginEnd: 15,
    justifyContent: 'center',
  },
  label: {
    ...Style.font,
    fontSize: 16,
  },
});
