vagrant up rhel
vagrant ssh rhel -c "sh /vagrant/run-tests-rhel.sh"
vagrant halt rhel
