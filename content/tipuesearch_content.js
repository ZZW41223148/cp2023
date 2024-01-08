var tipuesearch = {"pages": [{'title': 'About', 'text': 'https://github.com/ZZW41223148/cp2023 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': '作業', 'text': '', 'tags': '', 'url': '作業.html'}, {'title': 'W5', 'text': '// 包含標準輸出入程式庫的標頭文件 \n // https://blog.csdn.net/weixin_38468077/article/details/101069365 \n // http://www.gnuplot.info/demo/ \n // https://github.com/sysprog21/rv32emu \n // https://github.com/sysprog21/semu  \n // https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3 \n // https://cs61c.org/fa23/ \n // https://greenteapress.com/wp/think-python-2e/ \n // https://github.com/ecalvadi/c99-examples \n // https://github.com/gouravthakur39/beginners-C-program-examples \n // https://github.com/ergenekonyigit/Numerical-Analysis-Examples \n // https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf \n // https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf \n // https://jsommers.github.io/cbook/cbook.pdf \n // https://jsommers.github.io/cbook/index.html \n // http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf \n // http://cslibrary.stanford.edu/101/EssentialC.pdf \n // https://publications.gbdirect.co.uk/c_book/ \n // https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf \n // ***** execute on replit  \n // cd downloads \n // cc gnuplot_ex1.c -o gnuplot_ex1 \n // ./gnuplot_ex1 \n #include <stdio.h> \n \xa0 \xa0 \n // 主函式 \n int   main() { \n \xa0\xa0\xa0\xa0 // Start a Gnuplot process using popen \n \xa0\xa0\xa0\xa0 FILE   *gnuplotPipe = popen( "gnuplot -persistent" ,  "w" ); \n \xa0\xa0\xa0\xa0 if   (!gnuplotPipe) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 fprintf (stderr,  "Failed to start Gnuplot.\\n" ); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return   1; \n \xa0\xa0\xa0\xa0 } \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 // Use Gnuplot plotting commands, specify font and output as PNG \n \xa0\xa0\xa0\xa0 fprintf (gnuplotPipe,  "set terminal png font \'default,10\' size 800,400\\n" ); \n \xa0\xa0\xa0\xa0 fprintf (gnuplotPipe,  "set output \'./../images/gnuplot_ex1.png\'\\n" ); \n \xa0\xa0\xa0\xa0 fprintf (gnuplotPipe,  "plot sin(x)" ); \n \xa0\xa0\xa0\xa0 // Close popen \n \xa0\xa0\xa0\xa0 pclose(gnuplotPipe); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 return   0; \n } \n \n \n \n', 'tags': '', 'url': 'W5.html'}, {'title': 'C程式練習', 'text': '', 'tags': '', 'url': 'C程式練習.html'}, {'title': '1', 'text': '判斷輸入數字是否為醜數 #   include   <stdio.h> \n #   include   <string.h> \n\n int   main ( ) \n { \n int  n , x = 0 ; \n   printf ( "\\n\\n Check whether a given number is an ugly number:\\n" ) ; \n   printf ( "----------------------------------------------------\\n" ) ; \n   printf ( "Input an integer number: " ) ; \n   scanf ( "%d" , & n ) ; \n\n       if   ( n  <=   0 )   {   \n             printf ( "Input a correct number." ) ;   \n         } \n        while   ( n  !=   1 )  \n        {   \n             if   ( n  %   5   ==   0 )  \n             {   \n                n  /=   5 ;   \n             }  \n             else   if   ( n  %   3   ==   0 )  \n             {   \n                n  /=   3 ;   \n             }  \n             else   if   ( n  %   2   ==   0 )  \n             {   \n                n  /=   2 ;   \n             }  \n             else  \n             {   \n                 printf ( "It is not an ugly number.\\n" ) ;  \n                x  =   1 ;   \n                 break ;   \n             }   \n         }  \n\t\t         if   ( x == 0 ) \n\t\t         {  \n                 printf ( "It is an ugly number.\\n" ) ; \n                 } \n } \n # include <stdio.h>\n# include <string.h>\n\nint main()\n{\nint n,x=0;\n  printf("\\n\\n Check whether a given number is an ugly number:\\n");\n  printf("----------------------------------------------------\\n");\n  printf("Input an integer number: ");\n  scanf("%d",&n);\n\n      if (n <= 0) {  \n            printf("Input a correct number.");  \n        }\n       while (n != 1) \n       {  \n            if (n % 5 == 0) \n            {  \n                n /= 5;  \n            } \n            else if (n % 3 == 0) \n            {  \n                n /= 3;  \n            } \n            else if (n % 2 == 0) \n            {  \n                n /= 2;  \n            } \n            else \n            {  \n                printf("It is not an ugly number.\\n"); \n                x = 1;  \n                break;  \n            }  \n        } \n\t\t        if (x==0)\n\t\t        { \n                printf("It is an ugly number.\\n");\n                }\n} \n', 'tags': '', 'url': '1.html'}, {'title': '2', 'text': '反轉整串輸入的數字 \n #include <stdio.h> int reverse(int n) {  int d, y = 0;  while (n) {  d = n % 10;  if ((n > 0 && y > (0x7fffffff - d) / 10) ||  (n < 0 && y < ((signed)0x80000000 - d) / 10)) {  return 0;   }  y = y * 10 + d;  n = n / 10;  }  return y;  } \n int main(void) {  int i = 123;  printf("Original integer: %d ",i);  printf("\\nReverse integer: %d ",reverse(i));  i = 208478933;  printf("\\nOriginal integer: %d ",i);  printf("\\nReverse integer: %d ",reverse(i));  i = -73634;  printf("\\nOriginal integer: %d ",i);  printf("\\nReverse integer: %d ",reverse(i));  return 0; }', 'tags': '', 'url': '2.html'}, {'title': '3', 'text': '計算x的n次方 \n #include <stdio.h> #include <limits.h> \n double powxn(double x, int n) {  double k;  if (n == 0) return 1;  k = powxn(x * x, n / 2);  if (n % 2) k = k * x;  return k; } \n int main(void) {  double x = 7.0;  int n = 2;  printf("\\nx = %f, y = %d ", x, n);  printf("\\nResult:(x^n) : %f ",powxn(x, n));  x = 6.2;  n = 3;  printf("\\n\\nx = %f, y = %d ", x, n);  printf("\\nResult:(x^n) : %f ",powxn(x, n));  return 0; }', 'tags': '', 'url': '3.html'}, {'title': '4', 'text': '判斷數字是否為環狀質數 \n # include <stdio.h> # include <stdlib.h> # include <stdbool.h> # include <math.h> \n int flg; void chkPrime(long int n) {  long int i;  i=n-1;  while(i>=2)  {  if(n%i==0)  {  flg=1;  }  i--;  } } void AllCombination(long int a) {  long int b1,c1,d1,e1,i,j,k,s1,z1,v1,x[8],y[8],m;  b1=a;  i=0;  while(b1>0)  {  y[i]=b1 % 10;  b1=b1/10;  i++;  }  c1=0;  for(j=i-1;j>=0;j--)  {  x[c1]=y[j];  c1++;  }  m=i;  while(m>0)  {  c1=m-1;  d1=i-1;  e1=0;  s1=0;  while(e1<i)  {  z1=pow(10,d1);  v1=z1*x[c1%i];  c1++;  d1--;  e1++;  s1=s1+v1;  }  m--;  chkPrime(s1);  } } int main() {  long int num1;  printf("\\n\\n Check whether a given number is circular prime or not: \\n");  printf(" -----------------------------------------------------------\\n");  printf(" Input a Number: ");  scanf("%li",&num1);  flg=0;  AllCombination(num1);  if(flg==0)  {  printf(" The given number is a circular prime Number.\\n");  }  else  {  printf(" The given number is not a circular prime Number.\\n");  }  return 0;   printf("\\n"); }', 'tags': '', 'url': '4.html'}, {'title': '5', 'text': '計算輸入數字的平方 \n #include <stdio.h> \n double square(double num) {  return (num * num); } int main() {  int num;  double n;  printf("\\n\\n Function : find square of any number :\\n");  printf("------------------------------------------------\\n");     printf("Input any number for square : ");  scanf("%d", &num);  n = square(num);  printf("The square of %d is : %.2f\\n", num, n);   return 0; }', 'tags': '', 'url': '5.html'}, {'title': '6', 'text': '判斷輸入數字為基數或偶數 \n #include <stdio.h>   //if the least significant bit is 1 the number is odd and 0 the number is even  int checkOddEven(int n1) {   return (n1 & 1);//The & operator does a bitwise and, } \n int main() {  int n1;  printf("\\n\\n Function : check the number is even or odd:\\n");  printf("------------------------------------------------\\n");   printf("Input any number : ");  scanf("%d", &n1); \n // If checkOddEven() function returns 1 then the number is odd   if(checkOddEven(n1))  {  printf("The entered number is odd.\\n\\n");  }  else  {  printf("The entered number is even.\\n\\n");  }  return 0; }', 'tags': '', 'url': '6.html'}, {'title': '7', 'text': '利用函數將數入數字變為二進制 \n #include<stdio.h> \n long toBin(int); \n int main() {  long bno;  int dno;  printf("\\n\\n Function : convert decimal to binary :\\n");  printf("-------------------------------------------\\n");   printf(" Input any decimal number : ");  scanf("%d",&dno);  bno = toBin(dno);  printf("\\n The Binary value is : %ld\\n\\n",bno); \n return 0; } long toBin(int dno) {  long bno=0,remainder,f=1;  while(dno != 0)  {  remainder = dno % 2;  bno = bno + remainder * f;  f = f * 10;  dno = dno / 2;  }  return bno; }', 'tags': '', 'url': '7.html'}, {'title': '8', 'text': '判斷輸入數字是否為完全立方數 \n # include <stdio.h> # include <stdlib.h> # include <math.h> \n int main()  {  int num, curoot,ans; \n printf("\\n\\n Check whether a number is a perfect cube or not: \\n");  printf(" -----------------------------------------------------\\n");  printf(" Input a number: ");  scanf("%d",&num); curoot=round(pow(num, 1.0/3.0)); \n if(curoot*curoot*curoot==num) {  printf(" The number is a perfect Cube of %d \\n",curoot);  } else {  printf(" The number is not a perfect Cube.\\n");  } }', 'tags': '', 'url': '8.html'}, {'title': '9', 'text': '輸出目前的日期和時間 \n #include <time.h> #include <stdio.h>  #include <stdlib.h> \n int main(void) {  time_t cur_time;  char* cur_t_string;  cur_time = time(NULL);  if (cur_time == ((time_t)-1))  {  (void) fprintf(stderr, "Failure to get the current date and time.\\n");  exit(EXIT_FAILURE);  }  cur_t_string = ctime(&cur_time); //convert to local time format  if (cur_t_string == NULL)  {  (void) fprintf(stderr, "Failure to convert the current date and time.\\n");  exit(EXIT_FAILURE);  }  (void) printf("\\n The Current time is : %s \\n", cur_t_string);  exit(EXIT_SUCCESS); }', 'tags': '', 'url': '9.html'}, {'title': '10', 'text': '\n \n', 'tags': '', 'url': '10.html'}]};