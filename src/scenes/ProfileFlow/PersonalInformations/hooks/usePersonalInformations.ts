import { useCallback } from 'react';
import { Alert, Keyboard } from 'react-native';

import * as Yup from 'yup';

import NavigationServices from '_navigations/NavigationServices';
import useAuthStore from '_store/authStore';

const usePersonalInformations = () => {
  const { updateUser } = useAuthStore();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Ad Soyad boş bırakılamaz'),
  });

  const handleSave = useCallback(
    async (data: any) => {
      Keyboard.dismiss();
      try {
        updateUser(data);
        NavigationServices.goBack();
        Alert.alert('Başarılı', 'Bilgileriniz güncellendi');
      } catch (error) {
        Alert.alert('Hata', 'Bir hata oluştu');
      }
    },
    [updateUser]
  );

  return {
    validationSchema,
    handleSave,
  };
};

export { usePersonalInformations };
