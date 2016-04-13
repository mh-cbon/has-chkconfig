vagrant up gentoo
vagrant ssh gentoo -c "sh /vagrant/run-tests-not-rhel.sh"
vagrant halt gentoo
