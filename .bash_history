sudo apt update && sudo apt upgrade -y 
sudo apt install gnome-keyring -y
sudo apt update && sudo apt upgrade
sudo add-apt-repository universe
sudo apt update
sudo snap install code --classic
[200~sudo apt update
sudo apt install software-properties-common apt-transport-https wget -y
sudo apt install libasound2 libatk-bridge2.0-0 libatk1.0-0 libcairo2 libcurl4 libdrm2
git --vesion 
git --version 2.20.1
[200~get -qO - https://apt.packages.shiftkey.dev/gpg.key | gpg --dearmor | sudo tee /usr/share/keyrings/shiftkey-packages.gpg > /dev/null
sudo sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/shiftkey-packages.gpg] https://apt.packages.shiftkey.dev/ubuntu/ any main" > /etc/apt/sources.list.d/shiftkey-packages.lis
> ~
sudo apt update && sudo apt upgrade -y
clear
wget -qO - https://apt.packages.shiftkey.dev/gpg.key | gpg --dearmor | sudo tee /usr/share/keyrings/shiftkey-packages.gpg > /dev/null
sudo sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/shiftkey-packages.gpg] https://apt.packages.shiftkey.dev/ubuntu/ any main" > /etc/apt/sources.list.d/shiftkey-packages.lis
git status
git --version
sudo apt update
sudo apt install wget gpg
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /usr/share/keyrings/
sudo sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
sudo apt update
sudo apt install code
code
[200~npm i bootstrap-icons~
sudo apt update && sudo apt upgrade -y
sudo apt install php -y
php -v
sudo apt install apache2 libapache2-mod-php -y
sudo apt update && sudo apt upgrade -y
sudo apt install apache2 -y
http://localhost/
sudo apt install php libapache2-mod-php -y
php -v
cd /var/www/html
sudo rm index.html
echo "<?php phpinfo(); ?>" | sudo tee index.php
sudo systemctl restart apache2
apache2 -v
sudo apt update
sudo apt install apache2 -y
sudo systemctl status apache2
sudo systemctl start apache2
http://localhost/
sudo apt install php-cli
y
sudo apt install apache2 php libapache2-mod-php mysql-server php-mysql
php -v
php monscript.php
pwd
ls
nano monscript.php
sudo apt update
sudo apt install nano -y
nano monscript.php
pwd
ls
cp monscript.php.save monscript.php
php monscript.php
pwt
pwd
ls
sudo cp monscript.php /var/www/html/
pwd
ls
pwd
ls
php monscript.php
ls -a
cp monscript.php.save monscript.php
sudo apt update
sudo apt install apache2 php libapache2-mod-php
brew install httpd php
sudo systemctl start apache2    # Linux
sudo apachectl start            # macOS
sudo systemctl start apache2 
sudo a2enmod php8.2  
sudo systemctl restart apache2
sudo netstat -tulpn | grep apache2
sudo ss -tulpn | grep 80
php -v
sudo systemctl status apache2
apt-get install apache2
sudo apt update
sudo apt install apache2
sudo service apache2 start
sudo service apache2 status
sudo netstat -tlnp | grep apache2
sudo nano /etc/apache2/ports.conf
sudo service apache2 restart
hostname -I
sudo nano /var/www/html/info.php
ls -l /var/www/html/info.php
cd /var/www/html/
ls
sudo nano /var/www/html/index.html
cd /var/www/html/
ls
sudo nano test.php
sudo apt update
sudo apt install mariadb-server mariadb-client -y
sudo mysql_secure_installation
sudo systemctl status mysql
mysql -u testuser -p testdb
cd /var/www/html/
sudo mv index.html.save index.html.bak
sudo mv test.php.save test.php.bak
cd /var/www/html/
sudo mv test.php.save test.php.bak
ls -la /var/www/html/
sudo rm .test.php.swp
sudo rm test.php.bak
sudo rm index.html.bak
code /var/www/html/index.php
sudo chown -R $(whoami):$(whoami) /var/www/html/
code /var/www/html/index.php
sudo systemctl status mysql
cd /var/www/html/
ls
sudo nano test.php
cd /var/www/html/
code .
sudo mariadb
code /var/www/html/testdb.php
ls -l /var/www/html/
code /var/www/html/testdb.php
ls
mysql -u testuser -p testdb
sudo apt install phpmyadmin
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
sudo systemctl restart apache2
mysql -u root -p
sudo mariadb
mysql -u coumbadev -p
sudo service apache2 start
sudo systemctl start apache2
sudo systemctl status apache2
mysql -u testuser -p testdb
php -m | grep mysqli
sudo apt install php-mysql
sudo systemctl restart apache2
php -m | grep mysqli
sudo systemctl restart apache2
cd /var/www/html && ls
sudo apt update && sudo apt upgrade -y
sudo apt install apache2 -y
sudo service apache2 start
sudo service apache2 status
ls /var/www/html/
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
sudo systemctl restart apache2
mkdir ~/MesSites
mv testdb.php ~/MesSites/
sudo rm -rf /var/www/html
sudo ln -s ~/MesSites /var/www/html
cd /var/www/html
mkdir -p ~/www
sudo mount --bind /var/www/html ~/www
sudo nano /etc/hosts
sudo systemctl restart apache2
sudo systemctl restart nginx
nginx -v
sudo apt update
sudo apt install nginx
sudo systemctl start nginx
sudo systemctl status nginx.service
sudo lsof -i :80
sudo apt update
sudo apt install phpmyadmin
sudo phpenmod mbstring
sudo a2enconf phpmyadmin
php -v
sudo apt install php8.2-mbstring
sudo phpenmod mbstring
sudo systemctl restart apache2
php -m | grep mbstring
hostname -I
/etc/apache2/conf-enabled/phpmyadmin.conf
sudo nano /etc/apache2/conf-enabled/phpmyadmin.conf
sudo apt install phpmyadmin -y
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
sudo mariadb
sudo systemctl restart apache2
sudo chown -R www-data:www-data /usr/share/phpmyadmin
sudo chmod -R 755 /usr/share/phpmyadmin
sudo tail -f /var/log/apache2/error.log
ls /usr/share/phpmyadmin
sudo nano /etc/apache2/conf-enabled/phpmyadmin.conf
sudo mariadb
sudo service apache2 status
ServerName localhost
sudo nano /etc/apache2/apache2.conf
sudo nano /etc/apache2/apache2.conf
sudo lsof -i :80
sudo lsof -i :443
sudo kill -9 <PID>
sudo lsof -i :80
sudo systemctl stop nginx
sudo systemctl disable nginx   # facultatif, pour qu'il ne redémarre pas au boot
sudo systemctl restart apache2
sudo systemctl status apache2
sudo systemctl status apache2
cat /etc/hosts
sudo nano /etc/hosts
ServerName localhost
sudo nano /etc/apache2/apache2.conf
[200~sudo apache2ctl configtest
sudo systemctl restart apache2
sudo apache2ctl configtest
sudo systemctl restart apache2
sudo systemctl status apache2
Active: active (running)
sudo systemctl status apache2
Active: active (running)
Active: active 
Active: active running
sudo systemctl restart apache2
sudo mysql -u root -p
sudo nano /etc/hosts
sudo systemctl restart apache2
ls /etc/apache2/conf-enabled/phpmyadmin.conf
sudo ln -s /etc/phpmyadmin/apache.conf /etc/apache2/conf-enabled/phpmyadmin.conf
sudo systemctl restart apache2
sudo mv ~/Downloads/phpMyAdmin-5.2.2 /var/www/html/phpmyadmin
cd ~/Downloads
ls
sudo /opt/lampp/lampp start
ls
chmod +x xampp-linux-x64-8.1.25-0-installer.run
sudo ./xampp-linux-x64-8.1.25-0-installer.run
chmod +x xampp-linux-x64-8.2.12-0-installer.run
sudo ./xampp-linux-x64-8.2.12-0-installer.run
sudo systemctl status apache2 
echo "<?php phpinfo(); ?>" | sudo tee /var/www/html/info.php
sudo apt install php-mbstring php-mysql php-xml
sudo systemctl restart apache2
sudo tail -f /var/log/apache2/error.log
sudo nano /etc/apache2/conf-available/phpmyadmin.conf
[200~sudo nano /etc/apache2/conf-enabled/phpmyadmin.conf
sudo nano /etc/phpmyadmin/apache.conf
sudo systemctl reload apache2
sudo a2disconf phpmyadmin
sudo a2enconf phpmyadmin
sudo systemctl reload apache2
sudo nano /etc/apache2/conf-available/phpmyadmin.conf
sudo a2enconf phpmyadmin
sudo systemctl reload apache2
sudo apt update
sudo apt install apache2
sudo apt install php libapache2-mod-php
sudo apt install mariadb-server
sudo apt install php-mysql
sudo apt install phpmyadmin
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
sudo service apache2 start
sudo mysql
cd ~
ls
mv 'phpMyAdmin-5.2.2-all-languages (1).zip' phpmyadmin.zip
unzip phpmyadmin.zip
code --version
sudo apt update
sudo apt upgrade -y
sudo apt update
sudo apt full-upgrade -y
sudo apt autoremove -y
sudo apt clean
sudo apt autoremove -y
sudo apt clean
sudo dpkg -i code_*_arm64.deb
sudo apt --fix-broken install -y
cd ~/Downloads
ls
sudo nano /etc/apache2/conf-available/phpmyadmin.conf
ls /etc/apache2/conf-enabled
sudo a2enconf phpmyadmin
sudo systemctl reload apache2
sudo rm /etc/apache2/conf-enabled/phpmyadmin.conf
sudo a2enconf phpmyadmin
sudo systemctl reload apache2
ls -l /etc/apache2/conf-enabled/phpmyadmin.conf
dpkg -L phpmyadmin
sudo updatedb
locate phpmyadmin
sudo find / -type d -name "phpmyadmin" 2>/dev/null
code /usr/share/phpmyadmin
charset.conf            localized-error-pages.conf    phpmyadmin.conf  serve-cgi-bin.conf
javascript-common.conf  other-vhosts-access-log.conf  security.conf
coumbisse9104@penguin:/usr/share/phpmyadmin$ sudo a2enconf phpmyadmin
sudo systemctl reload apache2
ERROR: Conf phpmyadmin not properly enabled: /etc/apache2/conf-enabled/phpmyadmin.conf exists but does not point to /etc/apache2/conf-available/phpmyadmin.conf, not touching it
coumbisse9104@penguin:/usr/share/phpmyadmin$ 
code .
