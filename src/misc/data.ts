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
import t2sql_ft from '../video/ft_sql.png'
import cnnPng from '../video/cnn.png';
import t2ImageGif from '../video/text2image.gif'
import goapiPng from '../video/api_demo.png'
import { describe } from "node:test";
import { MdDescription } from "react-icons/md";

export const projects = [
  {
    name: "ICD-5 Medical Code AI Engine",
    tag: "Python, JAX, ML, FastAPI",
    description: 
      "An advanced medical code extraction system that leverages machine learning to automatically identify and classify medical codes from clinical documents. Features include high-accuracy code prediction and real-time processing capabilities.",
    href: "https://github.com/your-medical-code-repo",
    icon: IconBrandGithub,
  },
  {
    name: "AI Entity Extraction System",
    tag: "Python, HuggingFace, VLMs, AWS EC2",
    description: 
      "A sophisticated entity extraction system that combines vision-language models to analyze and extract information from images. Implements state-of-the-art transformer architectures for accurate entity recognition.",
    href: "https://github.com/your-entity-extraction-repo",
    icon: IconBrandGithub,
  },
  {
    name: "Instant Stocks Analysis Dashboard",
    tag: "Python, AWS Bedrock, FastAPI",
    description: 
      "A real-time stock market analysis platform that provides instant insights and Q&A capabilities. Utilizes AWS Bedrock for advanced natural language processing and market data analysis.",
    href: "https://github.com/your-stocks-dashboard-repo",
    icon: IconBrandGithub,
  },
  {
    name: "AI Meeting Minutes Generator",
    tag: "Swift, Google Gemini, SAIF",
    description: 
      "An automated system that generates comprehensive meeting minutes from audio recordings. Leverages Google Gemini for advanced speech recognition and natural language summarization.",
    href: "https://github.com/your-meeting-minutes-repo",
    icon: IconBrandGithub,
  },
  {
    name: "Multimodal AI Query System",
    tag: "Python, FastAPI, LangChain, OpenAI, Pinecone, Docker",
    description: 
      "A web application that combines vision and text AI capabilities to answer queries about images and documents. Features include OCR processing, semantic search, and multi-modal reasoning using state-of-the-art AI models.",
    href: "https://github.com/crha-hFiecif/sturdy-engine",
    icon: IconBrandGithub,
  },
  {
    name: "Research Paper Vector Search Q&A",
    tag: "Python, FastAPI, Pinecone, LlamaIndex, Docker, Cohere, Llama2",
    description:
      "An intelligent document search system that converts research papers into vector embeddings for semantic search. Integrates local LLMs with vector databases to enable natural language querying of technical documents.",
    href: "https://github.com/Cma-png/verbose-adventure",
    icon: IconBrandGithub,
    image: ragGif,
  },
  {
    name: "Interactive Image Generation with Diffusion",
    tag: "PyTorch, Stable Diffusion, CUDA, Gradio",
    description:
      "A local deployment of Stable Diffusion 2.1 for interactive image generation. Implements custom prompt engineering and image processing pipelines for enhanced generation quality.",
    href: "https://github.com/Cma-png/super-duper-parakeet/tree/main",
    icon: IconBrandGithub,
    image: t2ImageGif,
  },
  {
    name: "Text-to-SQL Assistant",
    tag: "Python, GPT-3.5, MSSQL, Vanna, ChromaDB, Docker",
    description:
      "An intelligent SQL query generator that translates natural language questions into SQL commands. Features include query visualization, CSV export, and interactive chart generation using Plotly.",
    href: "https://huggingface.co/Lei-bw/text-to-sql-fm",
    icon: IconBrandGithub,
    image: t2sGif,
  },
  {
    name: "QLoRA-SQLBase Model",
    tag: "Python, Gemma 2b, QLoRA, NVIDIA A100",
    description:
      "A fine-tuned language model for text-to-SQL tasks using quantized LoRA (QLoRA) on Gemma 2b. Optimized for memory efficiency while maintaining high performance on SQL generation tasks.",
    href: "https://huggingface.co/Lei-bw/text-to-sql-fm",
    icon: IconBrandGithub,
    image: t2sql_ft,
  },
  {
    name: "Go-based AI API Service",
    tag: "Go, RESTful API, Cohere, Docker",
    description:
      "A lightweight REST API service built in Go that provides a clean interface to Cohere's AI models. Features robust error handling, request validation, and containerized deployment.",
    href: "https://github.com/Cma-png/solid-tribble-translator",
    icon: IconBrandGithub,
    image: goapiPng,
  },
  {
    name: "Heart Disease Classification",
    tag: "Python, PyTorch, R, Decision Trees, ANN",
    description: 
      "A comparative study of machine learning models for heart disease prediction. Implements both traditional (Decision Trees) and deep learning (ANN) approaches with comprehensive performance analysis.",
    href: "https://github.com/Cma-png/curly-octo-waffle",
    icon: IconBrandGithub,
    image: annPng,
  },
  {
    name: "MNIST CNN Classifier",
    tag: "Python, PyTorch, CNN Architecture",
    description:
      "A custom CNN implementation for MNIST digit classification achieving 99.17% accuracy. Features a carefully designed architecture with three convolutional layers and advanced regularization techniques.",
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
