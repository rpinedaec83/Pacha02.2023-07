# Comandos en Terminal

## pwd

```
pwd
/home/usuario
```

## cd

```
cd
```
```
cd ..
```
```
cd carpeta
```
```
cd /home/usuario/public_html
```

## Comando ls

```
ls -lah
```
```
ls -lR
```
```
ls -lR | grep configuration.php
```

## Comando cat

```
cat archivo.txt
```
```
cat < archivo
```
```
cat archivo1 archivo2 < archivo3
```

## Comando cp

```
cp foto.jpg public_html/imagenes/
```

## Comando mv

```
mv foto.jpg carpeta/imagenes2/
```

## Comando mkdir

```
mkdir /home/imagenes
```
```
mkdir -pv /home/imagenes/otracarpeta/yotramas
```

## Comando rmdir

```
rmdir carpeta
```

## Comando rm

```
rm -rf carpeta
```

## Comando touch

```
touch archivo.txt
```
```
touch -t yyyymmddhhmm archivo.txt
```

## Comando locate

```
locate archivo.txt
```

## Comando grep

```
grep texto archivo.txt
```
```
grep -i texto archivo.txt
```
```
cat archivo.txt | grep textofiltro
```
```
cat archivo.txt | grep -c textofiltro
```

## Comando dig

```
dig apple.com
```

## Comando df

```
df -h
```

## Comando du

```
du -sch *
```

## Comando head

```
head archivo.txt
```

## Comando tail

```
tail -f archivo.txt
```

## Comando diff

```
diff archivo1.txt archivo2.txt
```

## Comando tar

```
tar cf archivo.tar carpeta
```
```
tar -zcvf archivo.tar.gz carpeta
```
```
tar -xzvf archivo.tar.gz
```

## Comando chmod

```
chmod 755 archivo.jpg
```

## Comando chown

```
chown usuario:grupo archivo.html
```

## Comando ps

```
ps -aux
```

## Comando kill

```
kill -9 12345
```

## Comando ping

```
ping google.com
```

## Comando wget

```
wget -b https://www.midominio.com/copiarespaldo.tar.gz
```

## Comando uname

```
uname
```

## Comando top

```
top
```

## Comando history

```
history -c
```

## Comando man

```
man wget
```

## Comando echo

```
echo 'Esto es un ejemplo' < archivo.txt
```

## Comando zip o comando unzip

```
zip archivocomprimido.zip arch1 arch2 arch3
```
```
unzip archivocomprimido.zip
```

## Comando vi

```
vi archivo.txt
```