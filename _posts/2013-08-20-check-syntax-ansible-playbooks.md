---
layout: post
title: Check Syntax of All Ansible Playbooks
---

Here is a one-line bash script for checking if all your ansible playbooks have correct YAML syntax.

    find . -name '*.yml' -not -path './roles/*/files/*' | xargs -t -n1 ansible-playbook --syntax-check -i staging

This assumes that you have all your playbooks organized by roles per the [ansible best practices](http://www.ansibleworks.com/docs/bestpractices.html).  

Because the output of --syntax-check is a simply "Playbook Syntax is fine", we use the -t flag in xargs to print out the command we're executing, so that we can see what file we're working on.

We need the -i flag to give ansible-playbook an inventory file, so you will probably have to change "staging" to whatever you have named your inventory.

If you've got your playbooks checked into source control (as you should) and use Jenkins or some other CI service, you can then trigger this script to test that your playbooks are in order. Alternatively, you could set this up as a pre-commit hook in git.