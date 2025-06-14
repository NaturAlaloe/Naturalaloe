import { useState } from "react";

export default function useProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "Juan Pérez",
    email: "juan.perez@ejemplo.com",
    position: "Desarrollador Frontend",
    department: "Tecnología",
    roles: "Usuario, Administrador", // Cambiado de bio a roles
    avatar: ""
  });

  const toggleEditing = () => setIsEditing(!isEditing);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = (event.target as FileReader | null)?.result;
        if (result) {
          setUserData(prev => ({ ...prev, avatar: result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return {
    isEditing,
    userData,
    toggleEditing,
    handleInputChange,
    handleAvatarChange,
    setUserData
  };
}