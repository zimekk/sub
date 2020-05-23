# dev
```sh
$ docker-compose up --build
```

# prod
```sh
$ docker-compose -f docker-compose.yml up --build
```

# deploy
```sh
$ docker-compose -f docker-compose.yml -f docker-compose.deploy.yml up
```

https://levelup.gitconnected.com/automated-deployment-using-docker-github-actions-and-webhooks-54018fc12e32
https://itnext.io/docker-compose-update-on-github-webhook-b212c9433a9b
https://github.com/adnanh/webhook

https://gist.github.com/ksmithut/e126f7ddb40b760487a17e8b569a77b5
http://progressivecoder.com/docker-compose-restart-policies-to-manage-docker-containers/
