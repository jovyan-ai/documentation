# Getting started

This guide helps you quickly setup and run Jovyan AI in your Jupyter.

## Install the jupyter extension

First, in the environment where you have Jupyter Lab, install the JupyterLab extension (require jupyterlab>=4.x)

```
pip install jovyanai-extension
```

After installation, you can check if it is well installed with Jupyter Lab:
```
jupyter labextension list
```

You should see the extension properly listed like this
![Check extension installed](assets/screenshot_check_extensions.png)


## Get a user token
Next, let's head to [Jovyan AI website](https://landing-page--jovyan-ai.europe-west4.hosted.app/) and get a usage token.

1. Create an account if you don't have one
2. Click on the email confirmation link send to your email address
3. Login with your email 
4. Click on the login link, you will be redirected to your account page.

You will see a page like this
![Account page](/assets/screenshot_account_page.png)

Click on "Generate new token" then save the token.

## Authenticate the extension
The Jupyter extension require a token to be able to access the backend services.  
1. In Jupyter Lab menu, go to Settings -> Settings Editor. 
2. In the "Search Settings" bar, type "Jovyan" then paste the token retrieved previously in the Authentication Token Field.
![Extension Setting](/assets/screenshot_settings.png)

Now you are ready to use Jovyan AI. Let's spin up a new Notebook start coding!  
For a guided tour of the functionality check Tutorials section.

