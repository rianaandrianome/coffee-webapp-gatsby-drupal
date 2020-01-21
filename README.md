# Gatsby Coffee Site 

This is an example of a React JS application which uses the "gatsby-source-drupal" plugin to fetch data from a Drupal project(used as an API). 

## Usage and installation
### Prerequisites
Before the installation process, make sure to have: gatsby CLI, node, npm and php installed on your local machine. 

### Drupal installation 
To run the Drupal API project locally, clone the **coffee_drupalapi** branch on the www directory of your local machine. 

Then create a virtual host for the app in your **.host** file. 
Finally, visit the previously created host on your browser to manage your content in the drupal project. 

### React app installation

To run the front-office part of the project locally, clone the **coffee_gatsby** branch. 

Then go to the **gatby-config.js** file and update the baseurl of the gatby-source-drupal plugin to your drupal virtual host (created above).

Then, run the following command on your terminal: 

```
gatsby develop
```
The app will be running at http://localhost:8000/
All the content types and taxonomies created in your drupal api are now available in your graphql at: http://localhost:8000__graphql/

Make any graphql request to retreive them and use them in your react components. 
