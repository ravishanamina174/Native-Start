# Welcome to your Expo app 👋

## ⚙️ High-Level Architecture & Workflow

This project leverages **React Native** and **Expo** to build a single app that runs natively on both iOS and Android. Here is how the ecosystem functions at a high level:

### 1. The Cross-Platform Concept
Unlike traditional mobile development where you write two separate apps (Swift/Objective-C for iOS, and Kotlin/Java for Android), React Native allows you to write your interface and business logic once in JavaScript. 

### 2. Truly Native Rendering (Not a Web View)
Your code does not run inside a mobile web browser wrapper. At runtime, React Native acts as a translator: it maps universal layout elements directly into real, authentic native platform UI components (like UIViews on iOS and AndroidViews on Android). This is why the app achieves near-native performance and look-and-feel.

### 3. The Runtime System
The app operates on two primary sides that talk to each other synchronously:
* **The JavaScript Side:** This handles your application logic, layout rules, state management, and user interaction logic.
* **The Native Side:** This handles the actual device screen rendering, animations, and security constraints of iOS or Android.
