# English Learning Assistant

An interactive AI-powered English learning platform that provides real-time feedback, corrections, and suggestions to help users improve their English language skills.

## Features

- **Adaptive Learning Modes**
  - Casual Learning: Practice English in a relaxed, conversation-style environment
  - Goal-Oriented Learning: Focused learning with specific objectives and progress tracking

- **Interactive Chat Interface**
  - Real-time conversations with AI
  - Immediate feedback on grammar and vocabulary
  - Performance tracking and suggestions

- **Intelligent Feedback System**
  - Grammar corrections
  - Vocabulary suggestions
  - Structural improvements
  - Performance scoring

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- OpenAI API
- Zustand (State Management)

## Prerequisites

Before you begin, ensure you have:
- Node.js (v14 or higher)
- npm (v6 or higher)
- An OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

## Installation

1. **Clone the repository**

```
bash
git clone https://github.com/yourusername/english-learning-assistant.git
cd english-learning-assistant
```

2. **Install dependencies**

```
bash
npm install
```

3. **Set up OpenAI API key**

```
bash
cp .env.example .env
```
- Open `.env` in your text editor
- Replace `your_openai_api_key_here` with your env
VITE_OPENAI_API_KEY=your_openai_api_key_here

4. **Run the development server**

```
bash
npm run dev
``` 
The application should now be running at `http://localhost:5173`

## Configuration Files

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`

### TypeScript
TypeScript configuration is in `tsconfig.json`. The project uses strict type checking and modern JavaScript features.

### Vite
Vite configuration is in `vite.config.ts`, including plugin setup and environment variable handling.

## Usage

1. **Select Learning Mode**
   - Choose between "Casual" and "Goal-Oriented" modes
   - Select "Friend" or "Coach" sub-mode for different interaction styles

2. **Start Chatting**
   - Type your message in the input field
   - Press Enter or click Send
   - Receive immediate feedback on your English usage

3. **Review Feedback**
   - Grammar corrections appear in red
   - Vocabulary suggestions in blue
   - Structure improvements and overall performance are displayed
   - Progress tracking is available in goal-oriented mode

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Adding New Features

1. **Create new components** in `src/components/`
2. **Add new store slices** in `src/store/` if needed
3. **Update API services** in `src/services/` for new functionality
4. **Style with Tailwind** classes or extend `index.css`

## Environment Variables

Required environment variables:

| Variable | Description | Required |
|----------|-------------|----------|
| VITE_OPENAI_API_KEY | Your OpenAI API key | Yes |

## Troubleshooting

### Common Issues

1. **Blank Page**
   - Check browser console for errors
   - Verify OpenAI API key is set correctly
   - Ensure all dependencies are installed

2. **API Errors**
   - Verify API key is valid
   - Check OpenAI API status
   - Review API usage limits

3. **TypeScript Errors**
   - Run `npx tsc --noEmit` to check for type errors
   - Ensure dependencies are compatible

## License

This project is licensed under the MIT License - see the LICENSE file for details.