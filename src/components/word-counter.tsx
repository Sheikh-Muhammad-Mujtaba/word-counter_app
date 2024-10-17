"use client";
import React, { useState, ChangeEvent } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { franc } from "franc";
import langs from "langs";
import DarkModeToggle from "@/components/Darkmode-button";


export default function WordCounter() {
  // State to manage the input text
  const [text, setText] = useState<string>("");

  // Function to handle text input changes
  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  // Function to clear the input text
  const clearText = () => {
    setText("");
  };

  // Calculate word count
  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word).length;

  // Calculate character count
  const charCount = text.length;

  // Function to detect the language
  const detectLanguage = (text: string) => {
    const detectedLangCode = franc(text);
    if (detectedLangCode === "und") return "Unknown Language";

    const lang = langs.where("3", detectedLangCode);
    return lang ? lang.name : "Unknown Language";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gradient-to-b from-gray-100 to-blue-100 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900">
      <Card className="w-full max-w-md shadow-lg rounded-xl">
        <CardHeader className="text-center justify-center flex flex-col py-4 bg-gradient-to-r from-blue-300 to-indigo-500 text-white rounded-t-xl">
          <CardTitle className="text-2xl font-bold">Text Analysis</CardTitle>
          <CardDescription className="text-[16px] font-light text-[#000000] ">
            Enter text and see the word and character count, along with language detection.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-b-xl">
          {/* Textarea for input text */}
          <Textarea
            id="text-input"
            placeholder="Enter your text here..."
            className="h-32 resize-none text-gray-800 dark:text-gray-200 dark:bg-gray-700 border-none focus:ring-2 focus:ring-blue-300 rounded-lg"
            value={text}
            onChange={handleTextChange}
          />
          {/* Display word and character count */}
          <div className="flex items-center justify-between text-sm font-medium text-gray-700 dark:text-gray-300">
            <div>
              <div>
                <span className="font-semibold">Language:</span>{" "}
                <span id="detectLanguage" className="text-blue-600 dark:text-blue-400">
                  {detectLanguage(text)}
                </span>
              </div>
              <div>
                <span id="word-count" className="font-semibold">{wordCount}</span>{" "}
                words,{" "}
                <span id="char-count" className="font-semibold">{charCount}</span>{" "}
                characters
              </div>
            </div>
            {/* Button to clear the input text */}
            <Button
              onClick={clearText}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105"
            >
              Clear
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="absolute right-4 bottom-4">
        <DarkModeToggle />
      </div>
    </div>
  );
}
