
<!--#echo json="package.json" key="name" underline="=" -->
nodever
=======
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Small bash script to gather, for writing bug reports, version information
about node.js, linux distro, kernel, and (optional) packages.
<!--/#echo -->

Usage
-----

```bash
$ nodever async lodash
require('async/package.json').version = 2.0.1
require('lodash/package.json').version = 4.17.4
Node.js v6.11.0, npm v4.4.0, Ubuntu 14.04.5 LTS trusty,
kernel: 3.13.0-119-generic, machine/CPU/platform: i686 i686 i686
```

&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
