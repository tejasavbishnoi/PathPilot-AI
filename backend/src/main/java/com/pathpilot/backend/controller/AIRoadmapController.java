package com.pathpilot.backend.controller;

import com.pathpilot.backend.ai.OpenAIService;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ai")
public class AIRoadmapController {

    private final OpenAIService openAIService;

    public AIRoadmapController(OpenAIService openAIService) {
        this.openAIService = openAIService;
    }

    @PostMapping("/roadmap")
    public String generateRoadmap(@RequestBody String prompt) {

        return openAIService.generateRoadmap(prompt);
    }
}