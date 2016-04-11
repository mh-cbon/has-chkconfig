# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

  config.vm.define "fedora" do |fedora|
    fedora.vm.box = "fedora/23-cloud-base"
    fedora.vm.hostname = "fedora.vagrant.dev"
    fedora.vm.network "private_network", type: :dhcp
  end

  config.vm.define "rhel" do |rhel|
    rhel.vm.box = "anandbitra/redhat-6.5"
  end

end
