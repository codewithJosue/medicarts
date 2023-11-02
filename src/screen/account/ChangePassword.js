import {AppText, Screen} from '../../components';
import {StyleSheet, Text, View} from 'react-native';
import {Caption, Divider, Title} from 'react-native-paper';
import colors from '../../config/colors';
import * as Yup from 'yup';
import {useState} from 'react';
import {AppForm, AppFormField, SubmitButton} from '../../components/forms';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const validationSchema = Yup.object().shape({
  passwordOld: Yup.string()
    .required('La contraseña antigua es obligatoria')
    .min(5, 'Minímo 5 caracteres')
    .label('Password'),
  password: Yup.string()
    .required('La contraseña nueva es obligatoria')
    .min(5, 'Minímo 5 caracteres')
    .label('Password'),
});
const ChangePassword = () => {
  const [eyePassword, setEyePassword] = useState(true);
  return (
    <Screen style={styles.container}>
      <View>
        <AppText style={styles.title}>Cambio de contraseña</AppText>
        <AppText>Ingrese por favor la información que se le solicita</AppText>
      </View>

      <AppForm
        onSubmit={data => console.log(data)}
        initialValues={{password: '', passwordOld: ''}}
        validationSchema={validationSchema}>
        <View style={styles.form}>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="passwordOld"
            placeholder="Antigua contraseña"
            textContentType="password"
            secureTextEntry={eyePassword}
          />

          <Icon
            onPress={() => setEyePassword(!eyePassword)}
            style={styles.iconPass}
            name={eyePassword ? 'eye-off' : 'eye'}
            size={17}
            color={eyePassword ? colors.grey_medium : colors.primary}
          />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Contraseña nueva"
            textContentType="password"
            secureTextEntry={eyePassword}
          />
        </View>
        <View style={styles.footer}>
          <SubmitButton title="Guardar" />
        </View>
      </AppForm>
    </Screen>
  );
};
export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  title: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconPass: {
    position: 'absolute',
    paddingTop: 13,
    right: 10,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  form: {
    marginVertical: 10,
  },
});