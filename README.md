# has-chkconfig

Tells if a system runs `chkconfig`

# install

```sh
npm i @mh-cbon/has-chkconfig --save
```

# Usage

```js
require('@mh-cbon/has-chkconfig')(function (err, path){
  err && console.error("This system does not run chkconfig")
  !err && console.log("This system provides chkconfig at %j", path)
}))
```

# Read more

- https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/6/html/Deployment_Guide/s2-services-chkconfig.html
- http://linux.die.net/man/8/chkconfig
