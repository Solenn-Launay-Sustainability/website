# Solenn Launay Website

This is the source code for the personal website of Solenn Launay, a sustainability advisor. The website provides information about Solenn's services and administrable content via a Sanity CMS.

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- Sanity CMS
- Bun as the package manager
- Vercel for deployment

## Getting Started

To run the project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone git@github.com:Solenn-Launay-Sustainability/website.git
    cd website
    ```

2. **Install dependencies using Bun:**

    ```bash
    bun install
    ```

3. **Set up environment variables:**

    Create a `.env.local` file in the root directory and add the necessary environment variables. You can refer to `.env.dist` for the required variables.

    ```bash
    cp .env.dist .env.local
    ```

4. **Run the development server:**

    ```bash
    bun dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.
    Open [http://localhost:3000/studio](http://localhost:3000/studio) in your browser to see the Sanity Studio.
