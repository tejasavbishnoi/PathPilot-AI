package com.pathpilot.backend.ai;

import org.springframework.stereotype.Service;

@Service
public class OpenAIService {

    public String generateRoadmap(String prompt) {

        return """

🚀 PATHPILOT AI ROADMAP

Goal:
Become a Backend Developer using Java & Spring Boot

----------------------------------------

📅 MONTH 1 — Java + DSA Foundations

✅ Master Java Basics
- OOP
- Collections Framework
- Exception Handling
- Multithreading

✅ DSA Practice
- Arrays
- Strings
- HashMaps
- Linked Lists
- Stack & Queue

✅ Solve:
- 2 LeetCode problems daily
- Focus on NeetCode roadmap

----------------------------------------

📅 MONTH 2 — Backend Development

✅ Learn Spring Boot
- REST APIs
- Controllers
- Services
- Repositories
- MySQL Integration

✅ Build Projects
- Authentication System
- JWT Login System
- Task Manager API

✅ Learn:
- Postman
- Thunder Client
- Maven
- Git & GitHub

----------------------------------------

📅 MONTH 3 — Advanced Backend + Placement Prep

✅ Learn:
- JWT Authentication
- Role-based authorization
- Deployment
- Docker basics

✅ Build Advanced Project
- AI Career Platform
- Resume Analyzer
- Interview Prep Platform

✅ Placement Preparation
- Top 75 LeetCode Questions
- CS Fundamentals
- DBMS
- Operating Systems
- Computer Networks

----------------------------------------

🎯 FINAL TARGET

By the end of 3 months:
✅ Strong Java Backend Skills
✅ Internship-ready Resume
✅ Full-stack Project Experience
✅ DSA Problem Solving Ability

""";
    }
}