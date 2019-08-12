This is a Drupal Site used as a REST API to feed content to a gatsby site.
The JSON:API and the JSON:API extras modules are used to make the drupal site behave like a REST API.

## Usage
First you need to [install composer] globally on your machine.\n
Refer to the following if you are on an Ubuntu machine:
`https://www.digitalocean.com/community/tutorials/how-to-install-and-use-composer-on-ubuntu-18-04`

Then you can procede to the installation process.
## Instructions

1.  **Installation**

    Tun the following command in your terminal to install the project

    ```sh
    # clone the project into a directory
    git clone https://github.com/riana2018/gatsby_sites.git

    # use composer to install all the dependencies needed
    composer install

    ```
1.  **Configuration**
    Add a new virtual host to your server linked to the project directory.
    Open the host address in your browser to view the site.

1.  **More information**
    The Drupal Site is up and running.
    Make sure the JSON:API module `https://www.drupal.org/project/jsonapi` and the JSON:API extras module `https://www.drupal.org/project/jsonapi_extras` are enabled and up to date.

    The JSON:API module allows you to gain a full REST API access for every type in your Drupal application.
    It inspects your entity types and bundles so that it can dynamically provide URLs by which to access each and every one of them using the standard HTTP methods, GET, POST, PATCH, and DELETE.

    The full documentation for this module can be found here `https://www.drupal.org/docs/8/modules/jsonapi/jsonapi`.
