# WordCounter App

## Overview
The **WordCounter App** is a simple text analysis tool built with **Next.js** and **React**. It allows users to analyze their text by providing a real-time word and character count and detecting the language of the text. It also includes a dark mode toggle for better UI experience.

## Features
- **Word Count**: Calculates the total number of words entered in the input field.
- **Character Count**: Tracks the total number of characters in the input text.
- **Language Detection**: Detects the language of the entered text using the `franc` and `langs` libraries.
- **Dark Mode**: Switch between light and dark themes for a more customizable user interface.

## Technologies Used
- **Next.js**: For the server-side rendering and framework.
- **React**: For building the UI components.
- **Tailwind CSS**: For styling and UI responsiveness.
- **franc**: For language detection based on ISO 639-3 language codes.
- **langs**: For converting ISO 639-3 language codes to human-readable language names.
- **Dark Mode Toggle**: Custom component to switch between light and dark themes.

## Usage

1. Open the application in your browser.
2. Enter any text in the provided input box.
3. The app will automatically display the word count, character count, and detected language below the input field.
4. Use the **Clear** button to reset the input field.
5. You can switch between **light** and **dark** modes using the toggle at the bottom-right corner.

