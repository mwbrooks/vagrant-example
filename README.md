# Vagrant Example

> Running an Ubuntu node server with Vagrant

Before we begin, I want to make one thing clear: this project is a node connect
server and not a Vagrant project. Vagrant is sprinkled into the project similar
to how Grunt, Make, or other tools assist a project.

## Running Node Locally

First, let's start by running the node project locally. I imagine you've already
installed node on your system and are ready to rock. Oh, you'll also need
git to clone the project, but I bet you've already got that too!

    $ git clone https://github.com/mwbrooks/vagrant-example.git
    $ cd vagrant-example/
    $
    $ npm install
    $ npm start

Whew, we're done! We should now have a little node server up and running.

Open your browser to `http://localhost:3000` and verify that the server is
rocking.

Is it? Yea? Excellent. Now let's kill that server and delete the the npm-bits.

    $ CTRL+C
    $
    $ rm -rf node_modules/

Now we're back to a clean clone of the project.

Oh, I forgot to ask: are you using OS X, Linux, or Windows? If you're using
Windows, I imagine you've already figured out the analogous commands to everything
that I wrote above. Sorry about that!

## Running Node with Vagrant
