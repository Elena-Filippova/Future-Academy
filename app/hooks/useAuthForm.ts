'use client'

import { useState } from 'react'
import { AuthMode, AuthFormData } from '../types/AuthMode'

export default function useAuthForm() {
  const [mode, setMode] = useState<AuthMode>('login');
  const [formData, setFormData] = useState<AuthFormData>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.email) newErrors.email = 'Email обязателен';
    if (!formData.password) newErrors.password = 'Пароль обязателен';
    if (mode === 'register' && !formData.confirmPassword) {
      newErrors.confirmPassword = 'Подтверждение пароля обязательно';
    }
    if (mode === 'register' && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Пароли не совпадают';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Здесь можно вызвать API для входа или регистрации
      console.log('Форма отправлена:', formData);
      alert(mode === 'login' ? 'Вход выполнен!' : 'Регистрация выполнена!');
    }
  };

  return {
    mode,
    setMode,
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
}