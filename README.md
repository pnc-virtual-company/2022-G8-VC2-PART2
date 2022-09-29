# RUN PROJECT ON DEVELOMENT

## BACK

- On php MyAdmin, create a new database : my_follow_up
- Go to /back
- Copy the .env.example to .env
- on .env file, update the database name :
  DB_DATABASE=my_follow_up
- Launch composer install
- Launch npm install
- Launch php artisan migrate
- Launch php artisan key:generate
- Launch php artisan storage:link ( to allow the image folder to be public)
- Launch php artisan serve

## Create User
- Open Thunder Client 
- Use Route  :  http://127.0.0.1:8000/api/user 
- Use Method :  POST
- Field Name:first_name, last_name, gender,phone,profile_img,role , email, password

## FRONT
- Go to /front
- Launch npm install
- Run npm run serve to launch on developpment mode
- Launch npm install --save vue-toastification@next
- 
# RUN PROJECT ON PRODUCTION

## First time :

    - Clone project

    - On php MyAdmin, create a  new database : example_db

    - Go to /back
    - Copy the .env.example to .env
    - on  .env file, update the database name :
    	DB_DATABASE=example_db

    - Launch  composer install
    - Launch  npm install
    - Launch php artisan migrate
    - Launch  php artisan key:generate

    - Go to /front
    - Launch  npm install

## Other times :

    - git pull

    - Go to /front
    - Run npm run build
## Slide Presentation(Canvas)
  - https://www.canva.com/design/DAFFslSBu44/fU64odz9tGMWQI5aKS7BTQ/view?utm_content=DAFFslSBu44&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent#1