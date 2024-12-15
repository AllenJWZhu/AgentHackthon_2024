Version 1.0 | Date: November 25, 2024

## 1. Product Overview

### 1.1 Product Vision

Create an adaptive AI-powered English learning assistant that provides personalized learning experiences through both structured education and natural conversation, helping users improve their English proficiency for both specific goals (test preparation) and general improvement.

### 1.2 Target Users

- English learners preparing for standardized tests (IELTS, TOEFL)
- Casual learners seeking to improve general English proficiency
- Users looking for conversation practice with a native English speaker
- Students at various proficiency levels, from beginner to advanced

## 2. Core Features

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/0f70a36f-be19-445e-8290-cf083f5a8eac/7840b8d5-c10d-4c0e-a0f4-9fe3ec51ef0a/image.png)

### 2.1 Learning Modes

### 2.1.1 Goal-Oriented Mode

- **Initial Assessment**
    - Evaluate user's current English proficiency level
    - Identify specific areas for improvement
    - Set measurable learning objectives
- **Test Preparation**
    - Exam type selection (IELTS, TOEFL, etc.)
    - Target score setting
    - Progress tracking
    - Customized study plans
- **Self-Defined Study**
    - Custom goal setting
    - Study material integration
    - Progress evaluation
    - Personalized improvement points

### 2.1.2 Casual Learning Mode

- General discussion capabilities
- Prompt engineering practice
- Speaking and listening practice
- Reading comprehension
- Writing improvement
- Casual chat functionality

## 2.2 Interaction Modes

### 2.2.1 Coach Mode

- Real-time grammar correction
- Native-like expression suggestions
- Detailed feedback on:
    - Vocabulary usage
    - Sentence structure
    - Pronunciation (if voice interface is implemented)
    - Writing style
- Performance tracking and progress reports

### 2.2.2 Friend Mode

- Natural conversation flow
- Casual topic exploration
- Cultural exchange
- Idiom and colloquial expression practice
- Reduced correction frequency for smoother interaction

## 3. Technical Architecture

https://docs.google.com/presentation/d/1aATlstvSYhBEqKOOAQd7KeS_uYSZ6iqXJP7Q0a-Bwhw/edit#slide=id.p

### 3.1 Core Components

- **LLM-Based Agents**
    - Intention Sort Agent: Determines user's learning mode and goals
    - Normal Agent: Handles basic interactions and level assessment
    - Goal Agent: Manages structured learning and progress tracking
    - Friend Agent: Facilitates casual conversation
    - Coach Agent: Provides detailed feedback and corrections
    - Monitor Agent: Tracks conversation history and suggests mode changes

### 3.2 Database System

- **RAG (Retrieval-Augmented Generation)**
    - Vectorized database for efficient information retrieval
    - Storage of:
        - Learning materials
        - Test preparation resources
        - Conversation history
        - User progress data
        - Correction patterns

### 3.3 Key Functions

- text_eval: Evaluates user's text input
- text_revise: Provides corrections and improvements
- test_fetch: Retrieves relevant test materials
- crite_fetch: Accesses evaluation criteria

## 4. User Experience Requirements

### 4.1 Interaction Flow

1. Initial user query processing
2. Intention analysis
3. Mode selection (Goal-oriented/Casual)
4. Sub-mode activation (Coach/Friend)
5. Continuous interaction with feedback
6. Progress monitoring and adaptation

### 4.2 User Interface Requirements

- Clean, intuitive chat interface
- Clear distinction between modes
- Easy mode switching
- Progress visualization
- Resource access integration
- Feedback display system

## 5. Performance Requirements (tentative)

### 5.1 Response Time

- Maximum 2-second response time for normal interactions
- Real-time grammar and expression corrections in Coach mode

### 5.2 Accuracy

- 95%+ accuracy in grammar corrections
- 90%+ accuracy in intention recognition
- 85%+ accuracy in level assessment

### 5.3 Scalability

- Support for concurrent users
- Efficient resource management
- Quick access to vectorized database

## 6. Future Enhancements

### 6.1 Potential Features

- Voice interaction capability
- Multi-modal learning support
- Peer learning integration
- Gamification elements
- Custom curriculum creation
- Integration with popular learning platforms

### 6.2 Expansion Plans

- Additional language test support
- Business English specialization
- Academic writing focus
- Industry-specific vocabulary modules

## 7. Success Metrics

### 7.1 User Progress

- Improvement in test scores
- Advancement in proficiency levels
- Reduction in grammar errors
- Increased conversation fluency

### 7.2 System Performance

- User engagement rates
- Mode switching patterns
- Learning goal completion rates
- User satisfaction scores
- Retention rates

## 8. Compliance and Security

### 8.1 Data Privacy

- User data protection
- Conversation history management
- Personal information handling
- GDPR compliance

### 8.2 Educational Standards

- Alignment with CEFR standards
- Test preparation guidelines compliance
- Educational best practices adherence