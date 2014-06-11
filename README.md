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

Now imagine that you didn't have node or another dependency that this
project uses. Or, imagine that a dependency wasn't compatible with your
operating system.

That's a huge pain as a developer because now you need to modify your precious
dev environment.

This is where Vagrant can help make your life easier. Vagrant allows you to
download and provision a virtual machine with exactly what you need to re-create
the project's dev environment. In our case, we'll use a 200MB Ubuntu image but
there are hundreds of other images available. Best of all, the 200MB image is
reusable between multiple Vagrant projects, while each project only stores its
state in `.vagrant/`.

Let's get started by installing Vagrant and Virtual Box:

- [Install Vagrant](http://www.vagrantup.com/downloads.html)
- [Install VirtualBox](https://www.virtualbox.org/wiki/Downloads)

All set? Good! Now let's start up the virtual machine and provision it with
node:

    $ cd vagrant-example/
    $ vagrant up

Done! We've now got a minimal dev environment for this project!

Next up, let's jump into the virtual machine box and start our web server.
A neat feature of Vagrant is that the project is shared within the virtual
machine at `/vagrant`. While connected to the virtual machine, I'm going to use
`%` to denote its terminal.

    $ vagrant ssh
    % cd /vagrant
    % npm install
    % npm start

We've now got our server up and running. I've already configured Vagrant to
port forward `3000` to your local machine. So once again, open up your browser
to `http://localhost:3000`.

Pretty cool, eh?

When we're done, we can exit the ssh tunnel:

    % exit

Then we can pause, shutdown, or completely delete the virtual machine
state:

    $ vagrant suspend  # pause the vm
    $ vagrant halt     # shutdown the vm
    $ vagrant destroy  # delete the vm files in ./vagrant

If you destroy the vm, you can always re-create it on the next vagrant up.

Now that you know Vagrant, what do you think?
