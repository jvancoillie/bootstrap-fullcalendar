FROM node
MAINTAINER Jérémy Vancoillie "jeremy.vancoillie@gmail.com"

# Install Bower & Gulp
RUN npm install -g bower gulp
# Define working directory.
WORKDIR /data

EXPOSE 8080  # for gulp-webserver
EXPOSE 35729 #for livereload

# Define default command.
CMD ["bash"]
