# Snack App

Snack App es una aplicación de ecommerce de snacks desarrollada con React Native y Expo.

## Instalación

Para instalar y configurar el proyecto, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone <https://github.com/lissleal/snackapp>
   cd snack-app
   ```

2. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

## Scripts

En el archivo `package.json` se han definido los siguientes scripts:

- `start`: Inicia el proyecto con Expo.

  ```bash
  npm start
  ```

- `reset-project`: Resetea el proyecto ejecutando un script personalizado.

  ```bash
  npm run reset-project
  ```

- `android`: Inicia el proyecto en un emulador o dispositivo Android.

  ```bash
  npm run android
  ```

- `ios`: Inicia el proyecto en un emulador o dispositivo iOS.

  ```bash
  npm run ios
  ```

- `web`: Inicia el proyecto en un navegador web.

  ```bash
  npm run web
  ```

- `test`: Ejecuta las pruebas con Jest.

  ```bash
  npm test
  ```

- `lint`: Lint el código usando las reglas de lint de Expo.
  ```bash
  npm run lint
  ```

## Dependencias

El proyecto usa las siguientes dependencias:

- `@expo-google-fonts/inter`: ^0.2.3
- `@expo/metro-runtime`: ~3.2.1
- `@react-navigation/bottom-tabs`: ^7.0.0-alpha.22
- `@react-navigation/native`: ^7.0.0-alpha.18
- `@react-navigation/native-stack`: ^7.0.0-alpha.20
- `@reduxjs/toolkit`: ^2.2.5
- `@types/react`: ~18.2.79
- `expo`: ~51.0.7
- `expo-constants`: ~16.0.2
- `expo-file-system`: ~17.0.1
- `expo-font`: ~12.0.7
- `expo-image-picker`: ~15.0.7
- `expo-linking`: ~6.3.1
- `expo-location`: ~17.0.1
- `expo-router`: ~3.5.17
- `expo-splash-screen`: ~0.27.5
- `expo-sqlite`: ~14.0.3
- `expo-status-bar`: ~1.12.1
- `react`: 18.2.0
- `react-dom`: 18.2.0
- `react-native`: 0.74.3
- `react-native-safe-area-context`: 4.10.1
- `react-native-screens`: 3.31.1
- `react-native-svg`: 15.2.0
- `react-native-web`: ~0.19.6
- `react-redux`: ^9.1.2
- `typescript`: ~5.3.3
- `yup`: ^1.4.0

## Dependencias de Desarrollo

Las siguientes dependencias son usadas para el desarrollo:

- `@babel/core`: ^7.20.0
- `@redux-devtools/core`: ^4.0.0

## Estructura del Proyecto

La estructura principal del proyecto es la siguiente:

```
snack-app/
├── components/          # Componentes reutilizables
├── features/            # Funcionalidades de Redux
├── navigation/          # Configuración de navegación
├── screens/             # Pantallas de la aplicación
├── services/            # Servicios y API
├── utils/               # Utilidades y funciones auxiliares
├── app/index.js         # Entrada principal de la app
├── package.json         # Archivo de configuración de NPM
└── README.md            # Este archivo
```

## Configuración de Firebase

Para integrar Firebase, asegúrate de configurar tus reglas de seguridad y base de datos correctamente en Firebase Console.

### Reglas de Seguridad

En Firebase Console, ve a la sección de Firestore Database y establece las reglas de seguridad como sigue:

```json
{
  "rules": {
    ".read": "true",
    ".write": "true",
    "orders": {
      ".indexOn": ["userId"]
    },

    "products": {
      ".indexOn": ["category", "id"]
    }
  }
}
```

## Contribuciones

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una rama nueva (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva característica'`).
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`).
5. Crea un Pull Request.

## Licencia

---

¡Gracias por usar Snack App! Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue o contactar al equipo de desarrollo.

```

Este README incluye información sobre la instalación, scripts disponibles, dependencias, estructura del proyecto, configuración de Firebase y cómo contribuir. Ajusta los detalles según sea necesario para tu proyecto específico.
```
