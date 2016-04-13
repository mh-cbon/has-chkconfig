if [ ! -f /home/vagrant/node/node-v5.9.1-linux-x86.tar.xz ]; then
  sudo dnf install wget -y
  mkdir -p /home/vagrant/node
  cd /home/vagrant/node/
  wget --no-check-certificate https://nodejs.org/dist/v5.9.1/node-v5.9.1-linux-x86.tar.xz
  tar -xvf node-v5.9.1-linux-x86.tar.xz
  /home/vagrant/node/node-v5.9.1-linux-x86/bin/npm i mocha -g
fi
cd /vagrant/
/home/vagrant/node/node-v5.9.1-linux-x86/bin/npm i
/home/vagrant/node/node-v5.9.1-linux-x86/bin/node /home/vagrant/node/node-v5.9.1-linux-x86/bin/mocha test/not-rhel.js
