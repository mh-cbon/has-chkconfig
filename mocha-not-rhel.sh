vagrant up fedora
vagrant ssh fedora -c "sh /vagrant/run-tests-not-rhel.sh"
vagrant halt fedora
