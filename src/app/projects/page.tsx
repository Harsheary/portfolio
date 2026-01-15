"use client";
import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Mystery Message",
      description:
        "Send anonymous messages to friends or strangers. A full-stack web application built with modern technologies for secure and private messaging.",
      link: "https://mystery-message.in",
      image: "/mysteryMessage.png",
    },
    {
      title: "Kahoot Clone | Quiz Master",
      description:
        "A Kahoot-like project built in MERN stack allowing users to create and play quizzes with real-time features and engaging user experience.",
      link: "https://kahoot-clonee-dll2.onrender.com/",
      image: "/Kahoot_clone.png",
    },
    {
      title: "Traffic Fatality ML Project",
      description:
        "Machine learning pipeline to predict accident fatality outcomes using the Traffic Police KSI dataset. Built with Python, featuring data preprocessing, SMOTE balancing, and Flask API deployment.",
      link: "https://github.com/Harsheary/supervised-learning-ksi",
      image: "/ML_KSI_project.png",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black pt-32">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-neutral-500 dark:text-neutral-400 text-center max-w-2xl mx-auto mb-8">
          Here are some of the projects I&apos;ve built. Each one represents a unique challenge and learning experience.
        </p>
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
