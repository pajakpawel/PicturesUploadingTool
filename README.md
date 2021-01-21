# PicturesUploadingTool
This project is a basic pictures uploading tool.
It was created using following technologies:
- Angular for frontend service
- Python with Flask framework for backend server 
- MongoDB for data storage

## Prerequisites
To properly run this project you will need to have specified development environment.
This includes installing all technologies listed below.

### Frontend
- **Node.js** with **NPM** module. 
  For information on installing Node.js please follow this link: [nodejs.org](https://nodejs.org).
- **Angular CLI**. After installing Node.js with NPM, 
  Angular CLI might be installed via system terminal with a command: `npm install -g @angular/cli`

### Backend
**Python** is required for this repository. 
To download and install Python, please follow this link: [python.org](https://www.python.org/).

Note that it is a good practice to create local virtual environment for every Python project.
To create virtual environment for backend subproject of this repository please use the following steps:
1. Open terminal and go to _.../PicturesUploadingTool/Backend_ directory.
2. Create virtual environment with command `python -m venv <virtual environment name>`
3. Activate newly created virtual environment with a command:
   - `source venv/bin/activate` for Linux and macOS
   - `venv\Scripts\activate` for Windows

After creating and activating virtual environment, install packages listed below.
If you didn't create virtual environment, these are the only steps to follow.

- Flask `pip install flask`
- Flask CORS `pip install flask-cors`
- PyMongo `pip install pymongo`

### Database
- MongoDB is a database used in this project to store data.
To download and install MongoDB, please proceed with this link: 
  [MongoDB installation](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#run-mongodb-from-cmd)

## Running this project
To locally run this project follow these steps:
1. Download or clone this repository.
2. Open terminal and run MongoDB with `mongod` or `mongod --dbpath="<path to database files>"` command.
3. Open second terminal and go to _.../PicturesUploadingTool/Backend_ directory.
4. Run backend server with command `python Application.py`.
5. Open third terminal and go to _.../PicturesUploadingTool/Frontend_ directory.
6. Install all required dependencies with `npm install`.
7. Run frontend server with command `ng serve`.
8. Open web browser and go to web application address (default http://localhost:4200).

## Versions note
This project was created using technologies in following versions:
- Node.js: 12.16.3
- NPM: 6.14.4
- Angular CLI: 11.0.6
- Python: 3.9.1
- Flask: 1.1.2
- Flask CORS: 3.0.10 
- PyMongo: 3.11.2
- MongoDB: 4.4.3
- Windows: 10 home 1909
- FireFox: 84.0.2
