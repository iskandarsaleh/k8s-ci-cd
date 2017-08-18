FROM jenkinsci/jenkins

USER root
ADD https://get.docker.com/builds/Linux/x86_64/docker-1.12.5.tgz docker.tgz
RUN tar zxvf docker.tgz
RUN mv docker/* /usr/bin/
ADD docker /etc/init.d/docker
RUN groupadd docker && usermod -aG docker jenkins
RUN chmod +x /etc/init.d/docker && ln -s /etc/init.d/docker /etc/rc3.d/S02docker && /etc/init.d/docker start

USER jenkins


