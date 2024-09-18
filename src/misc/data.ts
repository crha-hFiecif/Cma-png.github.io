// import { IconBrandGithub } from "@tabler/icons-react";
// import ragGif from '../video/rag.gif';

// // Here is the list of projects that will be displayed on the home page.
// export const projects = [
//   {
//     name: "Research Paper Vector Search Q&A",
//     tag: "Python, FastAPI, Pinecone VectorDB, LlamaIndex, Ollama",
//     description:
//       "This project leverages local LLMs and Vector Databases to enable document-based search functionality. Users can upload PDFs, convert them into vector embeddings, and store them in a vector database. The tool also provides a chat interface for querying the uploaded documents using a language model.",
//     href: "https://github.com/Cma-png/verbose-adventure",
//     icon: IconBrandGithub,
//     image: ragGif,  // Only add image for this project
//   },
//   {
//     name: "GANs-Powered Text-to-Image Generator"
//   },
//   {
//     name: "Text to SQL",
//     tag: "",
//     description:
//       "A custom, lightweight CNN for image classification with 99.17% accuracy.",
//     href: "https://github.com/Copng-py/bookish-barnacle",
//     icon: IconBrandGithub,
//     image: undefined,  // No image
//   },
//   {
//     name: "Voting-Web-App",
//     tag: "",
//     description:
//       "This voting web app allows users to vote on a set of options and view the results in real-time. This document outlines how to set up and run the application.",
//     href: "https://github.com/Copng-py/Voting-web-app",
//     icon: IconBrandGithub,
//     image: undefined,  // No image
//   }
//   // {
//   //   name: "Sentiment Analysis",
//   //   description:
//   //     "A project focusing on natural language processing algorithms to classify the user's emotion (Positive, Negative, Neutral) by their online comments.",
//   //   href: "https://github.com/Copng-py/glowing-waddle",
//   //   icon: IconBrandGithub,
//   //   image: undefined,  // No image
//   // },
// ];
import { IconBrandGithub } from "@tabler/icons-react";
import ragGif from '../video/rag.gif';
import annPng from '../video/ann_and_dt.png';
import t2sGif from '../video/text_to_sql.gif';
import cnnPng from '../video/cnn.png';
import { describe } from "node:test";
import { MdDescription } from "react-icons/md";

export const projects = [
  {
    name: "Research Paper Vector Search Q&A",
    tag: "Python, FastAPI, Pinecone VectorDB, LlamaIndex, Docker, Cohere, Llama3.1, Streamlit",
    description:
      "A project leverages local LLMs and Vector Databases to enable document-based search functionality. Users can upload PDFs, convert them into vector embeddings, and store them in a vector database. The tool also provides a chat interface for querying the uploaded documents using a language model.",
    href: "https://github.com/Cma-png/verbose-adventure",
    icon: IconBrandGithub,
    image: ragGif,
  },
  {
    name : "Text-to-Image",
    tag: "",
    Description:
      "test",
    href: " test",
    icon: IconBrandGithub,
    image: undefined,
  },
  {
    name: "QLoRA-SQLBase",
    tag: "Python, Gemma 2b: Self-FineTuned LLMs via QLoRA, Quantization, Nvidia A100/40GB RAM",
    description:
      "A project that quantized the Gemma 2b in 8-bit and trained with question and answer pairs for text-to-SQL tasks using the LoRA PEFT method. It serves as a foundation model for further development in Text-to-SQL Retrieval-Augmented Generation (RAG) applications.",
    href: "https://huggingface.co/Lei-bw/text-to-sql-fm",
    icon: IconBrandGithub,
    image: undefined,
  },
  {
    name: "Heart Disease Identification",
    tag: "Python, Pytorch, R, Decision Tree, Artificial Neural Network(ANN) ", 
    description: "A deep learning project that compares the performance of machine learning models on a full heart disease dataset versus a reduced feature set with higher correlation. We evaluate Decision Tree and ANN models, where the ANN includes two hidden layers (64 and 32 neurons) with ReLU activation and dropout for regularization. Metrics like accuracy, F1-score, and Matthews Correlation Coefficient (MCC) are used to determine which approach yields better classification performance. Dataset used is sourced from lEEE",
    href: "https://github.com/Cma-png/curly-octo-waffle",
    icon: IconBrandGithub,
    image: annPng,
  },
  {
    name: "MNIST Image Classification using CNN",
    tag: "Python, Pytorch, Convolutional Neural Network (CNN)",
    description:
      "This is a PyTorch implementation of a custom CNN model for classifying MNIST handwritten digits. The architecture features three convolutional layers, two max-pooling layers, and two fully connected layers, optimized for efficient performance on smaller datasets.",
    href: "https://github.com/Cma-png/super-duper-octo-pancake",
    icon: IconBrandGithub,
    image: cnnPng,
  },
  {
    name: "Voting-Web-App",
    tag: "JavaScript, React, Node.js",
    description:
      "This voting web app allows users to vote on their favorite programming languages and view the results in real-time.",
    href: "https://github.com/Copng-py/Voting-web-app",
    icon: IconBrandGithub,
    image: undefined,
  },
];