bash script to make a test file
for i in `seq 1 200000`;do echo $(($RANDOM*10))>>test1.txt; done
