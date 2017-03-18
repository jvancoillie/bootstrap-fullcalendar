# bootstrap-fullcalendar
Bootstrap less css to use for fullcalendar see the [Demo](https://jvancoillie.github.io/bootstrap-fullcalendar/)

#### Gulp tasks

task | description
------------ | -------------
default (gulp) | create and minify css files
copy | copy required files in the docs folder and copy the variables.less file in the less folder
webserver | launch the demo bootstrap-fullcalendar [http://localhost](http://localhost)
watch | Watch any change of less files and compiled them


## Run it with docker

1 Step build docker image
```
$ docker build -t bootstrap-fullcalendar .
```

2 Step Run the container 
```
$ docker run -v $(pwd):/data -p 127.0.0.1:80:8080 -p 127.0.0.1:35729:35729 -ti --user node bootstrap-fullcalendar
```

3 Install dependencies  
```
$ nmp install
```

4 Compile your bootstrap-fullcalendar.css
```
$ gulp
```

5 Run the webserver to see the result of your less changes [http://localhost](http://localhost)
```
$ gulp webserver
```


