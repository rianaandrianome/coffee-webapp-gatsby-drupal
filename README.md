<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby coffee site
</h1>

This is an example of a gatsby site with content pulled from a Drupal REST API.

The project is built from a gatsby starter template found at: [Gatsby starter default](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-default/ "Gatsby starter default")

## Instructions

1.  **Installation**

    Tun the following command in your terminal to install the project

    ```sh
    # clone the project into a directory
    git clone https://github.com/riana2018/gatsby_sites.git
    # and switch to the coffee_gatsby branch
    git checkout coffee_gatsby
    # use npm to install all the dependencies needed
    npm install  
    
    ```

1.  **Run the project**

    Navigate into your new site’s directory and start it up using:

    ```sh
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

1.  **Information about the REST API**
    The link to the drupal site used as an API is found in: the `gatsby-config.js` file:
    
    ```
    plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://drupalapi.loc/`,
        apiBase: `api`,
      },
    },

    ```
    Feel free to modify it and put your API url instead.
    
    Once the baseUrl is specified, you can view all the content available from the REST API in: `http://localhost:8000/___graphql`
    
    You can then query any content in your components using graphql queries. 

<!-- AUTO-GENERATED-CONTENT:END -->
