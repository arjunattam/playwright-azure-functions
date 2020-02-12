#!/bin/sh -l

wget http://www.ijg.org/files/jpegsrc.v8d.tar.gz
tar zxvf jpegsrc.v8d.tar.gz
cd jpeg-8d

./configure
make
make install

ln -s /usr/local/lib/libjpeg.so.8 /usr/lib/libjpeg.so.8