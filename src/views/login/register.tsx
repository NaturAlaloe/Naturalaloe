import InputField from "../../components/formComponents/InputField";
import { useState } from "react";
import { motion } from "framer-motion";
import LogoNaturaloe from "../../assets/img/Logo_Naturaloe.png";
import SubmitButton from "../../components/formComponents/SubmitButton";

export default function Register() {
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    cedula: "",
    correo: "",
    puesto: "",
    departamento: "",
    contrasena: "",
    confirmarContrasena: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.contrasena !== formData.confirmarContrasena) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log("Datos ingresados:", formData);
  };

  return (
    <div className="min-h-screen bg-[#DEF7E9] flex items-center justify-center px-4 py-12 font-[Poppins]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-3xl bg-white rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.1)] px-15 py-10"
      >
        <div className="flex flex-row items-center justify-between mb-8">
          <div className="flex flex-col items-start">
            <h2 className="text-4xl font-bold text-[#2AAC67] mb-1">
              Registrar administrador
            </h2>
          </div>
          <img
            src={LogoNaturaloe}
            alt="Natural Aloe Logo"
            className="w-46 h-46 ml-6 drop-shadow-md"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Nombre Completo"
              name="nombreCompleto"
              value={formData.nombreCompleto}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              type="text"
              required
              pattern={undefined}
            />

            <InputField
              label="Correo Electrónico"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="ejemplo@correo.com"
              type="email"
              required
              pattern={undefined}
            />

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <InputField
              label="Contraseña"
              name="contrasena"
              value={formData.contrasena}
              onChange={handleChange}
              placeholder="********"
              type="password"
              required
              pattern={undefined}
            />
            <InputField
              label="Confirmar Contraseña"
              name="confirmarContrasena"
              value={formData.confirmarContrasena}
              onChange={handleChange}
              placeholder="********"
              type="password"
              required
              pattern={undefined}
            />

          </div>

          <SubmitButton width="w-full">{"Registrar"}</SubmitButton>

        </form>
      </motion.div>
    </div>
  );
}
