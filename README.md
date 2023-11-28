
# Admin Dashboard 📊

This is a small admin dashboard project built with Next.js, Tailwind CSS, NextAuth.js, and Chart.js. The dashboard provides Google authentication functionality using NextAuth.js and features a responsive design built with grid structures.

## Secreenshots 🏞️
| Desktop                                                                                           | Mobile                                                                                         |
|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| ![Desktop](https://github.com/sayshark75/Admin-Dashboard/assets/112304655/d890f498-d383-4994-86a5-5f1ce31b9f22) | ![Mobile](https://github.com/sayshark75/Admin-Dashboard/assets/112304655/3082baa4-84d1-4317-9f19-d6573085136b) |

| Desktop                                                                                           | Mobile                                                                                         |
|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| ![Desktop](https://github.com/sayshark75/Admin-Dashboard/assets/112304655/2e28fb73-af10-4a1e-9b69-44cb50c2d9bc) | ![Mobile](https://github.com/sayshark75/Admin-Dashboard/assets/112304655/bec62979-96d7-4de2-822a-b45f8c44913c) |


## Features ✨

- Google authentication: Users can log in to the dashboard using their Google accounts.
- Responsive design: The dashboard is designed to work smoothly on various devices, adapting to different screen sizes and orientations.
- Chart.js integration: The dashboard includes charts powered by Chart.js to visualize data in a user-friendly manner.

## Technologies Used 🚀

- [Next.js](https://nextjs.org/): A React framework for building server-rendered applications.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom designs.
- [NextAuth.js](https://next-auth.js.org/): An authentication library for Next.js applications.
- [Chart.js](https://www.chartjs.org/): A JavaScript library for creating responsive charts.

## Getting Started 🛠️

To get started with the admin dashboard, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/sayshark75/Admin-Dashboard.git
   ```

2. Install the dependencies:

   ```shell
   cd admin-dashboard
   npm install
   ```

3. Configure environment variables:

   Create the `.env.local` file to provide the necessary values for the environment variables. Make sure to set up your Google OAuth credentials.

4. Run the development server:

   ```shell
   npm run dev
   ```

   The dashboard will be accessible at [http://localhost:3000](http://localhost:3000).

## Folder Structure 📂

Here's an overview of the project's folder structure:

```
├── public/           # Static assets
├── src/            # Next.js pages that define the dashboard's routes
|   ├── components/       # React components used in the dashboard
|   ├── styles/           # CSS styles
|   ├── app/           # Server Components and Routes
|   ├── charts/           # Chart.js configuration and data
├── next.config.js    # Next.js configuration file
├── nextAuth.config.js    # Next-Auth configuration.
├── tailwind.config.js # Tailwind CSS configuration file
├── .env.local        # Environment variables (not included in the repository)
└── README.md         # Project documentation (you are here)
```

Feel free to adjust the folder structure to match your project's requirements.

## Contributing 🤝

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your fork.
5. Submit a pull request to the `main` branch of the original repository.

## License 📜

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments 🙏

- The project was built using the [Next.js](https://nextjs.org/) framework.
- The user interface design utilizes [Tailwind CSS](https://tailwindcss.com/).
- Authentication is handled by [NextAuth.js](https://next-auth.js.org/).
- The charts are created using [Chart.js](https://www.chartjs.org/).
