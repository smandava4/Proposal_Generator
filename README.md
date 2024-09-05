# Proposal Generator

## Description

The Proposal Generator is a web application designed to help users create and manage proposals. It allows users to outline, edit, and generate content for their proposals using a user-friendly interface. The application also integrates with a language model to provide suggestions for proposal content.

## Features

- **Proposal Outline**: Provides an outline of the proposal with editable sections.
- **Proposal Editor**: Allows users to write and edit content for each section of the proposal.
- **LLM Suggestions**: Generates content suggestions based on user prompts using a language model.
- **Document Preview**: Displays a live preview of the proposal as it is being edited.

## Technologies Used

- **Frontend**: React, CSS
- **Backend**: Express, Node.js
- **API Integration**:Gooogle Gemini 

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/Proposal_Generator.git
    ```

2. Navigate to the project directory:

    ```sh
    cd Proposal_Generator
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

4. Start the development server:

    ```sh
    npm start
    ```

5. For the backend, navigate to the backend directory and install dependencies:

    ```sh
    cd backend
    npm install
    ```

6. Start the backend server:

    ```sh
    npm start
    ```

## Usage

1. Open the application in your web browser.
2. Use the Proposal Outline to add headings and sections to your proposal.
3. Edit the content in the Proposal Editor.
4. Generate content suggestions using the LLM Suggestions component.
5. Preview the document as you make changes.

## API Endpoints

### `/generate`

- **Method**: POST
- **Description**: Generates content suggestions based on the provided prompt.
- **Request Body**: `{ "prompt": "Your prompt here" }`
- **Response**: `{ "content": "Generated content" }`

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.



