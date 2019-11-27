# npm permission



You need to unlock permissions in your home directory, like Noah says:

sudo chown -R `whoami` ~/.npm
You also need write permissions to the node_modules directory, like Xilo says, so if it still isn't working, try:

sudo chown -R `whoami` /usr/local/lib/node_modules
If you are still seeing errors, you may also need to correct /usr/local permissions:

sudo chown -R `whoami` /usr/local
Please note that as indicated in this post /usr/local/ isn't actually a system dir if you are on a Mac, so, this answer is actually perfectly "safe" for Mac users. However, if you are on Linux, see Christopher Will's answer below for a multi-user friendly, system dir safe (but more complex) solution.


## resources
- https://stackoverflow.com/questions/16151018/npm-throws-error-without-sudo
- https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally
- https://medium.com/@ExplosionPills/dont-use-sudo-with-npm-still-66e609f5f92
