# Program to add multiple command line arguments

SUM=0

for n in "$@"
do
  ((SUM+=$n))
done

echo $SUM
