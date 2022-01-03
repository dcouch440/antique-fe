# `Enchant FE`

## `About Front end`
  
`Enchants` (title in the works), is a platform for people to share collectable items that they love. People can share items, mark their favorite image for display and set tags for others to find them.
  
Future features will include, personal DM's, user streams, and channels,
  

## Created 12/2/2021

## `Front End Tech Overview`
  - `Typescript`
  - `React`
  - `Redux`
  - `MongoDB`
  - `Material UI`
  - `Axios`
  - `styled components`
  - `react-router-dom`
  - `eslint`
  - `prettier`
  - `lodash`

## `Current Feature Highlight`
  
### `Seamless Upload and Update`
Folder
  
```
src/components/EnchantsCreateNUpdate
```
#### `New Uploads`
  
Images are first uploaded concurrently via multi part form data using GO language in one request, the images are sent with upload reference keys to prevent uploads being returned out of order while being processed in independent go routines. Once AWS S3 has completed the uploads, the user images are attached to their respective information and the user images and enchant information is stored in the MongoDB database.
  
#### `Updates`
  
Users can return their post at any time and use the same interface to make updates if they change their mind. Users have the option to remove images, which enters the images into a queue. On submission the backend receives the information in json and removes the images in the queue at the time of update in one request. If the user chooses to upload new images and delete old images at the same time. The upload sequence will first take action and then a JSON request will be sent to the Go Server which notifies S3 to delete the images and store the new information in MongoDB.
  
Users can return to this page at any time to update, remove tags, change titles, or even upload more images!
  
![Upload and edit](https://res.cloudinary.com/dbyretay5/image/upload/v1641242365/enchant-repo/Create_Enchants_mll1fb.png)


## `Back End Tech Overview`
  - `Go language`
  - `AWS s3`
  - `MongoDB`
  - `JWT`

Backend Repo will remain private.

## `About Back End`
  
Because of the nature of MongoDB (sometimes) requiring multiple requests. Go is used to build response objects concurrently and server side sorting of small bits of information like users favorite image and retrieving userId's from items response which prepares the next request.
  
