import { useMemo } from 'react';
import { View } from 'react-native';

import { Formik } from 'formik';

import { CustomButton, KeyboardAvoiding } from '_atoms';
import { LabeledTextInput } from '_molecules';
import { AppWrapper } from '_organisms';
import useAuthStore from '_store/authStore';
import { useTheme } from '_styles/theming';

import styles from './PersonalInformations.style';
import { usePersonalInformations } from './hooks/usePersonalInformations';

const PersonalInformations = () => {
  const theme = useTheme();

  const { contentContainer, container } = useMemo(() => styles(theme), [theme]);
  const { currentUser } = useAuthStore();

  const { handleSave, validationSchema } = usePersonalInformations();

  return (
    <AppWrapper overrideStyle={container}>
      <Formik
        initialValues={
          {
            name: currentUser?.name || '',
          } as any
        }
        validationSchema={validationSchema}
        onSubmit={(data: unknown) => handleSave(data as any)}>
        {({ values, handleChange, handleSubmit, handleBlur, errors, touched }) => (
          <KeyboardAvoiding>
            <View style={contentContainer}>
              <LabeledTextInput
                title='Ad Soyad'
                keyboardType='default'
                inputValue={values.name}
                maxLength={100}
                placeholder='Ad Soyad'
                handleChange={handleChange('name')}
                onBlur={handleBlur('name')}
                customTextInputProps={
                  {
                    returnKeyType: 'done',
                  } as any
                }
                error={touched.name && (errors.name as string)}
              />
            </View>
            <CustomButton title='Kaydet' onPress={handleSubmit} />
          </KeyboardAvoiding>
        )}
      </Formik>
    </AppWrapper>
  );
};

export default PersonalInformations;
