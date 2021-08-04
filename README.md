# jike-week4


## task01

### 思路： 

-  与老师 singlespa-route一致， 在其基础上进行修改


-  yarn 然后cd到app-page app-nav 执行yarn
-  执行yarn serve 
-  测试地址  http://localhost:8900/#/page/id03 


## task02


### 思路

- 将tast1 yarn build
- 然后将dist目录 放入docker中


- cd 到nginx中 执行 sh build.sh
- 然后执行 docker run -p 7000:80  -d hub.docker.com/beijing/geek-nginx:1.0.2 
- 测试地址 http://localhost:7000/#/page/id03